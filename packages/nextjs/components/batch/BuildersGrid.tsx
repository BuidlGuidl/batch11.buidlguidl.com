import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const BuildersGrid = () => {
  // Get total number of checked-in builders from contract
  const { data: checkedInCount, isLoading: countLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  // Get builder profiles from filesystem
  const { data: profileBuilders = [], isLoading: profilesLoading } = useQuery<string[]>({
    queryKey: ["builders-profiles"],
    queryFn: async () => {
      const response = await fetch("/api/builders");
      if (!response.ok) throw new Error("Failed to fetch builders");
      return response.json();
    },
  });

  if (countLoading || profilesLoading) {
    return (
      <div className="w-full px-6 py-8 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Batch Members ({checkedInCount?.toString() || "0"} checked in)</h2>
        <p className="text-sm text-base-content/70">Showing builders who have created their profiles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileBuilders.map((address, idx) => (
          <Link
            key={`${address}-${idx}`}
            href={`/builders/${address}`}
            className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200"
          >
            <div className="flex flex-col gap-2">
              <Address address={address} size="lg" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold hover:underline">View Profile →</span>
                {checkedInCount && checkedInCount > 0 && (
                  <span className="text-xs bg-primary/10 px-2 py-1 rounded-full">Checked In</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuildersGrid;
