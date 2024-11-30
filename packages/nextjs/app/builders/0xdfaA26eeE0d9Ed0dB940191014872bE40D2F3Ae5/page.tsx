import { NextPage } from "next";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const styles = {
  container: "min-h-screen p-8 bg-gradient-to-b from-base-200 to-base-300 dark:from-base-300 dark:to-base-200",
  card: "max-w-4xl mx-auto p-12 bg-base-100 rounded-2xl shadow-xl border border-base-300 dark:bg-base-200 dark:border-base-400",
  profileSection: "flex flex-col md:flex-row items-center md:items-start gap-8",
  avatarContainer: "relative group",
  avatar: "w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105",
  nameSection: "flex-1 text-center md:text-left space-y-2",
  name: "text-4xl font-extrabold text-base-content dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text",
  section: "mt-10",
  sectionTitle: "text-2xl font-extrabold mb-6 text-base-content dark:text-white flex items-center gap-2",
  titleIcon: "w-6 h-6 text-primary",
  bio: "text-base-content dark:text-white font-semibold leading-relaxed text-lg",
  highlight: "text-primary bg-primary-content px-1 rounded-md",
  socialLinks: "flex gap-6 items-center justify-center md:justify-start mt-8",
  socialIcon:
    "p-3 hover:bg-base-200 dark:hover:bg-base-300 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-md text-base-content dark:text-white",
  divider: "my-8 border-t border-base-300 dark:border-base-400",
  addressContainer:
    "mt-2 bg-base-200 dark:bg-base-300 py-2 px-4 rounded-lg inline-block text-base-content dark:text-white",
};

const builderDetails = {
  name: "Asante Ntiro",
  location: "Tanzania",
  address: "0xdfaA26eeE0d9Ed0dB940191014872bE40D2F3Ae5",
  links: {
    github: "asante-ntiro",
    linkedin: "https://www.linkedin.com/in/asante-ntiro/",
    email: "asante.ntiro@gmail.com",
  },
  bio: (
    <>
      Hello world. I&apos;m Asante, a Tanzanian DevOps engineer and software developer with professional experience
      since 2014. I&apos;ve been exploring blockchain development, focusing on{" "}
      <span className={styles.highlight}>smart contract programming</span>
      and <span className={styles.highlight}>secure infrastructure deployment</span>. I&apos;m particularly excited
      about the potential of <span className={styles.highlight}>DAOs</span> and the use of
      <span className={styles.highlight}>stable-coins</span> to empower un-banked individuals in Africa. You can check
      out my buidlGuidl profile
      <span className={styles.highlight}>
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
  avatar: "https://1.gravatar.com/userimage/258848136/ae25b744711c5e4d3de308ba0faa00f5?size=256",
};

const AsanteNtiroBuilderPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            <img src={builderDetails.avatar} alt={builderDetails.name} className={styles.avatar} />
          </div>
          <div className={styles.nameSection}>
            <h1 className={styles.name}>{builderDetails.name}</h1>
            <div className={styles.addressContainer}>
              <Address address={builderDetails.address} />
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>{builderDetails.bio}</p>
        </div>
        <div className={styles.divider} />
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
              <GitHubIcon />
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
              <GlobeAltIcon className="w-6 h-6" />
            </a>
          )}
          {builderDetails.links.email && (
            <a href={`mailto:${builderDetails.links.email}`} className={styles.socialIcon} aria-label="Email">
              <EnvelopeIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AsanteNtiroBuilderPage;
