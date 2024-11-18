"use client";

import Image from "next/image";
import Link from "next/link";

const BuilderPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <Image
          src="/mdqst.png" // Replace with the actual path to your avatar
          alt="My Ava"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">mdqst</h1>
        <p className="text-lg mt-2">
          I love experimenting with code and I'm currently learning Ethereum.
        </p>
        <p className="text-sm mt-1 text-gray-600">0xB2fe5c3c7231B1117Da36e7B29731693fbBc6F7A</p>
      </div>

      <div className="flex gap-4 mt-6">
        <Link href="https://twitter.com/mdqst1" className="link">
          Twitter
        </Link>
        <Link href="https://github.com/mdqst" className="link">
          GitHub
        </Link>
      </
