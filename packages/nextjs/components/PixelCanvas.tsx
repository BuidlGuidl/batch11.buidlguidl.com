import { useEffect, useState } from "react";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const ColorMap = {
  0: "#FFFFFF", // WHITE
  1: "#000000", // BLACK
  2: "#FF0000", // RED
  3: "#00FF00", // GREEN
  4: "#0000FF", // BLUE
  5: "#FFFF00", // YELLOW
  6: "#800080", // PURPLE
  7: "#FFA500", // ORANGE
};

const PixelCanvas = () => {
  const [placingCoordinates, setPlacingCoordinates] = useState<{ x: bigint; y: bigint } | null>(null);
  const [placingColor, setPlacingColor] = useState<number | null>(null);

  const { data: canvasData, refetch: refetchCanvas } = useScaffoldReadContract({
    contractName: "PixelCanvas",
    functionName: "getFullCanvas",
    watch: true,
  });

  const { writeContractAsync, isSuccess } = useScaffoldWriteContract("PixelCanvas");

  useEffect(() => {
    if (isSuccess) {
      refetchCanvas();
    }
  }, [isSuccess, refetchCanvas]);

  const save = async () => {
    if (!placingCoordinates || placingColor === null) return;
    await writeContractAsync({
      functionName: "placePixel",
      args: [placingCoordinates?.x, placingCoordinates?.y, placingColor],
    });
    setPlacingCoordinates(null);
    setPlacingColor(null);
  };

  const isSelected = (x: number, y: number) => {
    return BigInt(x) === placingCoordinates?.x && BigInt(y) === placingCoordinates?.y;
  };

  const getPixelColor = (x: number, y: number) => {
    if (placingColor !== null && isSelected(x, y)) {
      return ColorMap[placingColor as keyof typeof ColorMap];
    }
    if (!canvasData) {
      return "#FFFFFF";
    }
    const pixel = canvasData[x][y];
    return ColorMap[pixel.color as keyof typeof ColorMap];
  };

  if (!canvasData?.length) {
    return <div className="animate-pulse">Loading canvas...</div>;
  }

  const width = canvasData.length;
  const height = canvasData[0].length;

  return (
    <div className="flex flex-col gap-4">
      <div
        className="grid gap-0 border border-base-300"
        style={{ gridTemplateColumns: `repeat(${height}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: height }, (_, y) =>
          Array.from({ length: width }, (_, x) => {
            const pixel = canvasData[x][y];
            return (
              <div
                key={`${x}-${y}`}
                onClick={() => setPlacingCoordinates({ x: BigInt(x), y: BigInt(y) })}
                className={`w-3 h-3 cursor-pointer outline-white hover:outline hover:z-10 hover:brightness-90 ${isSelected(x, y) && "z-10 outline outline-red-500"}`}
                style={{ backgroundColor: getPixelColor(x, y) }}
                title={`Author: ${pixel.author}\nHorário: ${new Date(Number(pixel.timestamp) * 1000).toLocaleString()}`}
              />
            );
          }),
        ).flat()}
      </div>
      {placingCoordinates && (
        <div className="flex gap-4">
          <div className="grid grid-cols-4 gap-1">
            {Object.values(ColorMap).map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 cursor-pointer ${placingColor === index && "outline outline-red-500"}`}
                style={{ backgroundColor: color }}
                onClick={() => setPlacingColor(index)}
              />
            ))}
          </div>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={save}>
            Save Pixel
          </button>
        </div>
      )}
    </div>
  );
};

export default PixelCanvas;
