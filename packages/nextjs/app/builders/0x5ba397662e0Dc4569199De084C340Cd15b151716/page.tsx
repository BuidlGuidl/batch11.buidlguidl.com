"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Vick2592Profile: NextPage = () => {
  const address = "0x5ba397662e0Dc4569199De084C340Cd15b151716";

  return (
    <div className="flex flex-col items-center gap-4 py-8 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <Image
            src="https://avatars.githubusercontent.com/u/32042639"
            alt="Vick2592 Avatar"
            width={128}
            height={128}
            className="rounded-full ring ring-primary"
          />
        </div>
        <h1 className="text-4xl font-bold">Victor</h1>
        <Address address={address} />
      </div>

      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">Web3 Developer | Building on Ethereum</p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/vick2592" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            GitHub
          </a>
          <a href="https://twitter.com/vickzinbk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Twitter
          </a>
        </div>
      </div>

      <div className="card w-full max-w-2xl bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            👋 Hi, I’m @vick2592 👀 I’m interested in buidling a brighter web 3 future 🌱 My programming knowledge stack
            include Python, React, C, and C++ 💞️ I’m looking to collaborate on DeFi and Web 3 related projects 📫 How
            to reach me please contact via twitter 🌎 Link Tree:{" "}
            <a href="https://linktr.ee/vicbits">https://linktr.ee/vicbits</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vick2592Profile;
