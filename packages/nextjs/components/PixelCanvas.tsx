import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

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
  const { data: canvasData } = useScaffoldReadContract({
    contractName: "PixelCanvas",
    functionName: "getFullCanvas",
    watch: true,
  });

  if (!canvasData?.length) {
    return <div className="animate-pulse">Loading canvas...</div>;
  }

  const width = canvasData.length;
  const height = canvasData[0].length;

  return (
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
              className="w-3 h-3 cursor-pointer outline-white hover:outline hover:z-10 hover:brightness-90"
              style={{ backgroundColor: ColorMap[pixel.color as keyof typeof ColorMap] }}
              title={`Author: ${pixel.author}\nTimestamp: ${new Date(Number(pixel.timestamp) * 1000).toLocaleString()}`}
            />
          );
        }),
      ).flat()}
    </div>
  );
};

export default PixelCanvas;
