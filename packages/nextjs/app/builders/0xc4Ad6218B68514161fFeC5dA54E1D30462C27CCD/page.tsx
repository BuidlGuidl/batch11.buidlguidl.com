import { type NextPage } from "next";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Interfaces moved outside the component
interface StyledIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconType;
  size?: number;
  color?: string;
}

interface SocialLink {
  href: string;
  icon: IconType;
  lightHoverColor: string;
  darkHoverColor: string;
  isEmail?: boolean;
}

// Reusable styled icon component
const StyledIcon: React.FC<StyledIconProps> = ({ icon: Icon, className, size, color, ...props }) => (
  <span className={`inline-block ${className}`} {...props}>
    <Icon size={size} color={color} />
  </span>
);

// Social links data
const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Vedant-05",
    icon: FaGithub,
    lightHoverColor: "hover:text-gray-900",
    darkHoverColor: "dark:hover:text-gray-200",
  },
  {
    href: "https://x.com/DecodingDegen",
    icon: FaTwitter,
    lightHoverColor: "hover:text-blue-400",
    darkHoverColor: "dark:hover:text-blue-300",
  },
  {
    href: "https://www.linkedin.com/in/vedant-joshi-962a23191",
    icon: FaLinkedin,
    lightHoverColor: "hover:text-blue-600",
    darkHoverColor: "dark:hover:text-blue-400",
  },
  {
    href: "mailto:itsmevedantjoshi@gmail.com",
    icon: FaEnvelope,
    lightHoverColor: "hover:text-red-500",
    darkHoverColor: "dark:hover:text-red-400",
    isEmail: true,
  },
];

const DeveloperProfilePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/71647648?v=4"
              alt="Profile"
              className="rounded-full w-40 h-40 border-4 border-purple-500 shadow-xl"
            />
          </div>

          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Hi, I&apos;m Vedant!
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 w-24 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Finding my way back to Web3. Rooted in competitive programming (C++), growing in blockchain (Solidity).
            Learning, building, and sharing the journey 🛠️
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* About Section */}
          <section className="space-y-6 bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 py-2">
                A Full Stack Engineer with a deep fascination for DeFi and blockchain technology.
              </p>
              <p>
                Having contributed to notable DeFi protocols like{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Instadapp</span> and
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Router Protocol</span>, I&apos;ve
                gained hands-on experience in building decentralized solutions.
              </p>
              <p className="border-l-4 border-pink-500 pl-4 bg-pink-50 dark:bg-pink-900/20 py-2">
                While my journey includes significant web2 development, my passion lies in web3 security and community
                engagement.
              </p>
              <p>
                Currently focused on bridging traditional finance with DeFi innovations, while pursuing my path toward
                becoming a smart contract auditor and developer advocate. I believe in making blockchain technology more
                accessible and secure for everyone.
              </p>
            </div>
          </section>

          {/* Connect Section */}
          <section className="text-center space-y-6 bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">Let&apos;s Connect</h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map(({ href, icon: Icon, lightHoverColor, darkHoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${lightHoverColor} ${darkHoverColor}`}
                >
                  <StyledIcon icon={Icon} size={24} className="transition-colors" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfilePage;
