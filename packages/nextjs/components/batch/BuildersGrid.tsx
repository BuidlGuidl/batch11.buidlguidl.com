import { useEffect, useState } from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

interface Builder {
  id: number;
  address: string;
}

// Client component
const BuildersGrid = () => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/builders")
      .then(res => res.json())
      .then(addresses => {
        const buildersList = addresses.map((address: string, index: number) => ({
          id: index,
          address: address,
        }));
        setBuilders(buildersList);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching builders:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full px-6 py-8 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-8">
      <h2 className="text-2xl font-bold text-base-content dark:text-white mb-6">
        Batch Builders ({builders.length} registered)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {builders.map(builder => (
          <Link
            key={builder.id}
            href={`/builders/${builder.address}`}
            className="bg-base-100 dark:bg-base-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-base-200 dark:border-base-400"
          >
            <div className="flex flex-col gap-3">
              <Address address={builder.address} size="lg" />
              <div className="text-sm text-primary dark:text-primary-content font-medium hover:underline">
                View Profile →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuildersGrid;
