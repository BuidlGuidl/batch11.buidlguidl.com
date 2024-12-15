import Image from "next/image";
import Link from "next/link";
import avatar from "./avatar.png";
import styles from "./styles.module.css";
import type { NextPage } from "next";

const Personal: NextPage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={avatar}
        alt="Nick's Avatar"
        width={150}
        height={150}
        className={`rounded-full mb-4 ${styles.animatedXMotion}`}
      />
      <h1 className="text-3xl font-bold">snook1.eth</h1>
      <h2 className="text-xl ">Nick Jarosz</h2>
      <h3 className="text-l">Chicago, IL</h3>
      <h4 className="text-center">Developer | Blockchain Enthusiast</h4>
      <div className="bio-book bg-white shadow-lg rounded-lg p-4 max-w-md mb-4">
        <p className="text-center mb-4 text-lg max-w-md">
          I am a blockchain developer passionate about learning everything Web3 and Crypto. Currently exploring the
          intersection of RFID technology with Ethereum to build real-world supply chain solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[
          { href: "https://x.com/snook_eth", label: "X" },
          { href: "https://github.com/NJarosz", label: "GitHub" },
        ].map((link, index) => (
          <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center p-2 rounded-md border-2 border-gray-300 bg-white hover:border-blue-500 transition-all duration-300 ease-in-out">
              <span className="text-l font-bold">{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Personal;
