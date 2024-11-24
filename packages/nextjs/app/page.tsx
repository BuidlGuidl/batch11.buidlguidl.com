"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import BuildersGrid from "~~/components/batch/BuildersGrid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";

const Home: NextPage = () => {
  const {
    data: checkedInCount,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const displayCount = isLoading ? (
    <span className="loading loading-spinner loading-sm text-primary"></span>
  ) : error ? (
    "Error loading"
  ) : typeof checkedInCount === "bigint" ? (
    checkedInCount.toString()
  ) : (
    "0"
  );

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 max-w-4xl mx-auto text-center">
          <h1 className="mb-8">
            <span className="block text-3xl mb-2 text-base-content/90 dark:text-white font-semibold">Welcome to</span>
            <span className="block text-5xl font-extrabold dark:text-white font-semibold">Batch 11</span>
          </h1>
          <p className="text-xl text-base-content dark:text-white font-medium mb-6">
            Get started by taking a look at your batch GitHub repository and join our community of builders.
          </p>
          <div className="inline-block bg-base-200 dark:bg-base-300 rounded-xl p-4 shadow-md">
            <p className="text-lg flex gap-3 items-center justify-center">
              <span className="font-bold text-base-content dark:text-white">Checked in builders:</span>
              <span className="text-primary dark:text-primary-content font-mono font-bold">{displayCount}</span>
            </p>
          </div>
        </div>

        <div className="flex-grow bg-base-300 dark:bg-base-200 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-8 flex-wrap max-w-6xl mx-auto">
            <div className="flex flex-col bg-base-100 dark:bg-base-300 px-8 py-8 text-center items-center max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200 dark:border-base-400">
              <BugAntIcon className="h-10 w-10 text-primary dark:text-primary-content mb-4" />
              <p className="text-base-content dark:text-white font-medium">
                Tinker with your smart contract using the{" "}
                <Link
                  href="/debug"
                  className="link link-primary dark:text-white font-semibold hover:link-primary transition-colors"
                >
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 dark:bg-base-300 px-8 py-8 text-center items-center max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200 dark:border-base-400">
              <MagnifyingGlassIcon className="h-10 w-10 text-primary dark:text-primary-content mb-4" />
              <p className="text-base-content dark:text-white font-medium">
                Explore your local transactions with the{" "}
                <Link
                  href="/blockexplorer"
                  className="link link-primary dark:text-white font-semibold hover:link-primary transition-colors"
                >
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 dark:bg-base-300 px-8 py-8 text-center items-center max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200 dark:border-base-400">
              <UserGroupIcon className="h-10 w-10 text-primary dark:text-primary-content mb-4" />
              <p className="text-base-content dark:text-white font-medium">
                Connect with fellow builders and explore their{" "}
                <Link
                  href="/builders"
                  className="link link-primary dark:text-white font-semibold hover:link-primary transition-colors"
                >
                  Builder Profiles
                </Link>
              </p>
            </div>
            <div className="flex flex-col bg-base-100 dark:bg-base-300 px-8 py-8 text-center items-center max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-base-200 dark:border-base-400">
              <RocketLaunchIcon className="h-10 w-10 text-primary dark:text-primary-content mb-4" />
              <p className="text-base-content dark:text-white font-medium">
                Start your journey by completing the{" "}
                <Link
                  href="/challenges"
                  className="link link-primary dark:text-white font-semibold hover:link-primary transition-colors"
                >
                  Batch Challenges
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-16">
          <BuildersGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
