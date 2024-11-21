import { useAccount } from "wagmi";
import { BookmarkSquareIcon, IdentificationIcon, SignalSlashIcon } from "@heroicons/react/24/outline";
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
      {madeCheckin ? (
        <div className="tooltip tooltip-bottom" data-tip="A builder of batch 11 with confirmed checkin">
          <BookmarkSquareIcon className="h-6 w-6 text-success" />
        </div>
      ) : isBuilderOfBatch11 ? (
        <div className="tooltip tooltip-bottom" data-tip="A builder of batch 11">
          <IdentificationIcon className="h-6 w-6 text-success" />
        </div>
      ) : (
        <div className="tooltip tooltip-bottom" data-tip="Not a builder of batch 11">
          <SignalSlashIcon className="h-6 w-6 opacity-50" />
        </div>
      )}
    </div>
  );
};
