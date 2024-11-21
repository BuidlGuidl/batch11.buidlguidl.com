import Image from "next/image";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

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
}

const StyledIcon: React.FC<StyledIconProps> = ({ icon: Icon, className, size, color, ...props }) => {
  return (
    <span className={`inline-block ${className}`} {...props}>
      <Icon size={size} color={color} />
    </span>
  );
};

// Social links configuration moved outside the component
const socialLinks: SocialLink[] = [
  {
    href: "",
    icon: FaGithub,
    lightHoverColor: "hover:text-gray-900",
    darkHoverColor: "dark:hover:text-gray-200",
  },
  {
    href: "",
    icon: FaTwitter,
    lightHoverColor: "hover:text-blue-400",
    darkHoverColor: "dark:hover:text-blue-300",
  },
  {
    href: "",
    icon: FaLinkedin,
    lightHoverColor: "hover:text-blue-600",
    darkHoverColor: "dark:hover:text-blue-400",
  },
  {
    href: "",
    icon: FaEnvelope,
    lightHoverColor: "hover:text-red-500",
    darkHoverColor: "dark:hover:text-red-400",
  },
];

const SimzeProfileCard: React.FC = () => {
  const profile: ProfileData = {
    name: "Similoluwa Abidoye",
    title: "Full Stack Developer",
    bio: "Passionate about building the future of Web3 with modern technologies. Love working with React, TypeScript, and Solidity, hardhat and soon. Always learning, always coding.",
    avatar: "/simze.jpg",
    location: "Lagos, Nigeria",
    email: "similoluwaeyitayoabidoye@gmail.com",
    social: {
      github: "https://github.com/Abidoyesimze",
      twitter: "https://twitter.com/Simzeabidoye18",
      linkedin:
        "https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  // Dynamically populate href values
  const populatedSocialLinks = socialLinks.map((link, index) => ({
    ...link,
    href: [profile.social.github, profile.social.twitter, profile.social.linkedin, `mailto:${profile.email}`][index],
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128} // Corresponds to w-32 class (32 * 0.25rem = 128px)
              height={128} // Corresponds to h-32 class (32 * 0.25rem = 128px)
              className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700 object-cover"
            />

            {/* Name and Title */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{profile.name}</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-3">{profile.title}</h2>

            {/* Location */}
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <StyledIcon icon={FaMapMarkerAlt} size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">{profile.location}</span>
            </div>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6 px-4 text-sm leading-relaxed">
              {profile.bio}
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mb-6">
              {populatedSocialLinks.map(({ href, icon: Icon, lightHoverColor, darkHoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor} transition-colors duration-300 ease-in-out`}
                >
                  <StyledIcon
                    icon={Icon}
                    size={24}
                    className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimzeProfileCard;
