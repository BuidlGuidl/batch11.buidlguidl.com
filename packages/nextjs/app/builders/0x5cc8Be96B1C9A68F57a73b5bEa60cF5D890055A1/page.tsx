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

const BuidlGuidlLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path
      fill="currentColor"
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-.5 5l-8 4v10l8 4 8-4V11l-8-4zm0 2.236L21.5 12l-6 3-6-3 6-2.764zm-6 9.428v-7l5.5 2.75v7l-5.5-2.75zm7.5 2.75v-7l5.5-2.75v7l-5.5 2.75z"
    />
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
  highlight:
    "inline-block bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary-content px-3 py-1 rounded-md font-bold",
  socialLinks: "flex gap-6 items-center justify-center md:justify-start mt-8",
  socialIcon:
    "p-3 hover:bg-base-200 dark:hover:bg-base-300 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-md text-base-content dark:text-white",
  divider: "my-8 border-t border-base-300 dark:border-base-400",
  addressContainer:
    "mt-2 bg-base-200 dark:bg-base-300 py-2 px-4 rounded-lg inline-block text-base-content dark:text-white",
  buidlGuidlLink:
    "flex items-center gap-2 text-base-content dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200",
};

const builderDetails = {
  name: "Gbolahan Akande",
  address: "0x5cc8Be96B1C9A68F57a73b5bEa60cF5D890055A1",
  bio: (
    <>
      A passionate <span className={styles.highlight}>Web3 developer</span> with experience in{" "}
      <span className={styles.highlight}>Solidity</span> and{" "}
      <span className={styles.highlight}>full-stack development</span>. Currently building{" "}
      <span className={styles.highlight}>decentralized applications</span> and contributing to{" "}
      <span className={styles.highlight}>BuidlGuidl projects</span>. Excited about the future of{" "}
      <span className={styles.highlight}>blockchain technology</span> and its potential to reshape the digital world.
    </>
  ),
  avatar: "https://1.gravatar.com/userimage/206352262/e4937825bd2f70cf0335dce4e8792eda?size=256",
  links: {
    github: "gboigwe",
    website: "https://agedevs.netlify.app",
    email: "geakande@gmail.com",
    buidlGuidl: "0x5cc8Be96B1C9A68F57a73b5bEa60cF5D890055A1",
  },
};

const GbolahanAkandeBuilderPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={builderDetails.avatar} alt="Profile" className={styles.avatar} />
          </div>
          <div className={styles.nameSection}>
            <h1 className={styles.name}>{builderDetails.name}</h1>
            <div className={styles.addressContainer}>
              <Address address={builderDetails.address} />
            </div>

            <div className={styles.socialLinks}>
              {builderDetails.links.buidlGuidl && (
                <a
                  href={`https://app.buidlguidl.com/builders/${builderDetails.links.buidlGuidl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buidlGuidlLink}
                  aria-label="BuidlGuidl Profile"
                >
                  <BuidlGuidlLogo />
                  {/* <span className="font-semibold">BuidlGuidl Profile</span> */}
                </a>
              )}
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
              {builderDetails.links.website && (
                <a
                  href={builderDetails.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Website"
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

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>{builderDetails.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default GbolahanAkandeBuilderPage;
