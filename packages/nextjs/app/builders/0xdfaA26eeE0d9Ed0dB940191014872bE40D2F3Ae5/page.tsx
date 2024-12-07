import Image from "next/image";
import { NextPage } from "next";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const styles = {
  bio: "text-base-content dark:text-white font-semibold leading-relaxed text-lg",
  socialIcon:
    "p-3 hover:bg-base-200 dark:hover:bg-base-300 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-md text-base-content dark:text-white",
};

const builderDetails = {
  name: "Asante Ntiro",
  location: "Tanzania",
  address: "0xdfaA26eeE0d9Ed0dB940191014872bE40D2F3Ae5",
  links: {
    github: "asante-ntiro",
    linkedin: "https://www.linkedin.com/in/asante-ntiro/",
    email: "asante.ntiro@gmail.com",
    avatar: "https://1.gravatar.com/userimage/258848136/ae25b744711c5e4d3de308ba0faa00f5?size=256",
  },
  bio: (
    <>
      Hello world. I&apos;m Asante, a Tanzanian DevOps engineer and software developer with professional experience
      since 2014. I&apos;ve been exploring blockchain development, focusing on{" "}
      <span className="text-primary bg-primary-content px-1 rounded-md">smart contract programming</span>
      and <span className="text-primary bg-primary-content px-1 rounded-md">secure infrastructure deployment</span>.
      I&apos;m particularly excited about the potential of{" "}
      <span className="text-primary bg-primary-content px-1 rounded-md">DAOs</span> and the use of
      <span className="text-primary bg-primary-content px-1 rounded-md">stable-coins</span> to empower un-banked
      individuals in Africa. You can check out my buidlGuidl profile
      <span className="text-primary bg-primary-content px-1 rounded-md">
        <a
          href={`https://app.buidlguidl.com/builders/0xdfaA26eeE0d9Ed0dB940191014872bE40D2F3Ae5`}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </span>
      .
    </>
  ),
};

const AsanteNtiroBuilderPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-4xl mx-auto p-12 bg-base-100 rounded-2xl shadow-xl border border-base-300 dark:bg-base-200 dark:border-base-400">
        <div className="relative group flex justify-center items-center gap-2">
          <Image
            src={builderDetails.links.avatar}
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            alt="Asante's Profile Picture"
            width={256}
            height={256}
          />
        </div>
        <div className="flex-1 text-center md:text-center space-y-2">
          <h1 className="text-4xl font-extrabold">{builderDetails.name}</h1>
          <div className="mt-2 inline-block">
            <Address address={builderDetails.address} />
          </div>
        </div>

        <div className="my-8 border-t" />

        <h1 className="flex-1 text-5xl text-center md:text-center space-y-2">About Me</h1>
        <p className={styles.bio}>{builderDetails.bio}</p>

        <div className="my-8 border-t" />
        <h2 className="text-xl font-bold mt-8">Let&apos;s Connect</h2>
        <div className="flex space-x-6 mb-6">
          {builderDetails.links.github && (
            <a
              href={`https://github.com/${builderDetails.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {builderDetails.links.linkedin && (
            <a
              href={builderDetails.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          )}
          {builderDetails.links.email && (
            <a href={`mailto:${builderDetails.links.email}`} className={styles.socialIcon} aria-label="Email">
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AsanteNtiroBuilderPage;
