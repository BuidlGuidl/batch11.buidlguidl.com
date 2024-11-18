import { useAccount } from "wagmi";
import { IdentificationIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const UserBadges = () => {
  const { address } = useAccount();

  const { data: isBuilderOfBatch11 } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: contractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const madeCheckin = contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000";

  return (
    <div className="flex gap-2 mr-2">
      {isBuilderOfBatch11 && (
        <div className="tooltip tooltip-bottom" data-tip="Is builder of batch 11">
          <IdentificationIcon className="h-6 w-6 text-success" />
        </div>
      )}
      {madeCheckin && (
        <div className="tooltip tooltip-bottom" data-tip="Made checkin">
          <PuzzlePieceIcon className="h-6 w-6 text-success" />
        </div>
      )}
    </div>
  );
};
