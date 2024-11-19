import { EnvelopeIcon, GiftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// Styles object to keep things organized
const styles = {
  container: "min-h-screen p-8 bg-base-200",
  card: "max-w-2xl mx-auto p-8 bg-base-100 rounded-xl shadow-lg",
  profileSection: "flex flex-col md:flex-row items-center md:items-start gap-6",
  avatar: "w-32 h-32 rounded-full border-4 border-base-300",
  nameSection: "text-center md:text-left",
  name: "text-3xl font-bold",
  address: "font-mono text-sm text-base-content/70",
  section: "mt-8",
  sectionTitle: "text-xl font-semibold mb-4 text-base-content",
  bio: "text-base-content/80 leading-relaxed",
  socialLinks: "flex gap-4 items-center justify-center md:justify-start",
  socialIcon: "p-2 hover:bg-base-200 rounded-full transition-colors duration-200 w-10 h-10",
};

const BuilderPage = () => {
  const builderDetails = {
    name: "Gbolahan Akande",
    address: "0x5cc8Be96B1C9A68F57a73b5bEa60cF5D890055A1",
    bio: "A passionate Web3 developer with experience in Solidity and full-stack development. Currently building decentralized applications and contributing to BuidlGuidl projects. Excited about the future of blockchain technology and its potential to reshape the digital world.",
    avatar: "https://api.multiavatar.com/Binx.png",
    links: {
      github: "gboigwe",
      website: "https://agedevs.netlify.app",
      email: "geakande@email.com",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <img src={builderDetails.avatar} alt="Profile" className={styles.avatar} />
          <div className={styles.nameSection}>
            <h1 className={styles.name}>{builderDetails.name}</h1>
            <p className={styles.address}>{builderDetails.address}</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>{builderDetails.bio}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Connect</h2>
          <div className={styles.socialLinks}>
            {builderDetails.links.github && (
              <a
                href={`https://github.com/${builderDetails.links.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <GiftIcon />
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
                <GlobeAltIcon />
              </a>
            )}
            {builderDetails.links.email && (
              <a href={`mailto:${builderDetails.links.email}`} className={styles.socialIcon} aria-label="Email">
                <EnvelopeIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
