import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BuildersGrid = () => {
  // Get builder profiles from filesystem
  const { data: profileBuilders = [], isLoading: profilesLoading } = useQuery<string[]>({
    queryKey: ["builders-profiles"],
    queryFn: async () => {
      const response = await fetch("/api/builders");
      if (!response.ok) throw new Error("Failed to fetch builders");
      return response.json();
    },
  });

  // Get checked-in builders from contract events
  const { data: events, isLoading: eventsLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 127324219n,
  });

  if (profilesLoading || eventsLoading) {
    return (
      <div className="w-full px-6 py-8 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const buildersWithoutProfile = (events ?? [])
    .map(event => event.args.builder)
    .filter(address => address && !profileBuilders.includes(address));

  return (
    <div className="w-full px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileBuilders.map((address, idx) => (
          <div
            key={`${address}-${idx}`}
            className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200"
          >
            <div className="flex flex-col gap-2">
              <Address address={address} size="lg" />
              <div className="flex justify-between items-center">
                <Link href={`/builders/${address}`} className="text-sm font-semibold hover:underline">
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
        ))}
        {buildersWithoutProfile.map((address, idx) => (
          <div
            key={`${address}-${idx}`}
            className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200"
          >
            <div className="flex flex-col gap-2">
              <Address address={address} size="lg" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-primary">No Profile</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildersGrid;
