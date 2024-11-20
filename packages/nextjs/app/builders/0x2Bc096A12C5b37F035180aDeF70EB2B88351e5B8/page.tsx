import Image from "next/image";
import SocialLinks from "./_components/SocialLinks";
import { NextPage } from "next";

const GilBuilderPage: NextPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col px-6 lg:px-10 py-8 lg:py-12">
      <div className="flex gap-4 items-start">
        <Image
          src="https://gravatar.com/avatar/357be387c9eacb2a78896388cdafbf8d?size=256"
          className="rounded-full"
          alt="Gil Profile Picture"
          width={256}
          height={256}
        />
        <div className="flex flex-col p-8">
          <h1 className="text-2xl font-bold mb-4">
            Hi my name is <span className="text-primary bg-primary-content px-1 rounded-md">Gil</span>!
          </h1>
          <p>
            Hi everyone! I&apos;m Gil, a Brazilian software engineer with professional{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">experience since 2007</span>. I&apos;ve
            been developing for{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">Blockchain since 2018</span>, having
            worked on ecosystems like{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">Neo and Flow</span>. Recently, I&apos;ve
            been diving deep into{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">Ethereum and Solana</span>, expanding my
            expertise in building decentralized solutions.
          </p>
          <p>
            My main goal is to bring blockchain technology closer to{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">mass adoption</span>. I&apos;m currently
            working on a wallet that leverages Abstract Account and WebAuthn concepts to simplify onboarding while
            encouraging dapps to support sponsored transactions. I&apos;m also deeply interested in{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">real-world applications</span>, such as{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">DAOs</span> and mechanisms that enable new
            economic models to benefit{" "}
            <span className="text-primary bg-primary-content px-1 rounded-md">underserved communities</span>.
          </p>
          <h2 className="text-xl font-bold mt-8">Let&apos;s Connect</h2>
          <SocialLinks className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default GilBuilderPage;
