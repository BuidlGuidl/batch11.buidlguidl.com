import Image from "next/image";
import simzeAvatar from "./images/simze.jpg";
import { NextPage } from "next";
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

const StyledIcon: React.FC<StyledIconProps> = ({ icon: Icon, className, size, color, ...props }) => {
  return (
    <span className={`inline-block ${className}`} {...props}>
      <Icon size={size} color={color} />
    </span>
  );
};

const SimzeProfilePage: NextPage = () => {
  const profile: ProfileData = {
    name: "Similoluwa Abidoye",
    title: "Full Stack Developer",
    bio: "Passionate about building the future of Web3 with modern technologies. Love working with React, TypeScript, and Solidity, hardhat and so on. Always learning, always coding.",
    avatar: simzeAvatar.src,
    location: "Lagos, Nigeria",
    email: "similoluwaeyitayoabidoye@gmail.com",
    social: {
      github: "https://github.com/Abidoyesimze",
      twitter: "https://twitter.com/Simzeabidoye18",
      linkedin:
        "https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-600 object-cover transition-all duration-300"
            />

            {/* Name and Title */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
              {profile.name}
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300">
              {profile.title}
            </h2>

            {/* Location */}
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
              <StyledIcon icon={FaMapMarkerAlt} size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">{profile.location}</span>
            </div>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6 px-4 text-sm leading-relaxed transition-colors duration-300">
              {profile.bio}
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mb-6">
              {/* GitHub */}
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300 ease-in-out"
              >
                <StyledIcon
                  icon={FaGithub}
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                />
              </a>

              {/* Twitter */}
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                <StyledIcon
                  icon={FaTwitter}
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400"
                />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              >
                <StyledIcon
                  icon={FaLinkedin}
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out"
              >
                <StyledIcon
                  icon={FaEnvelope}
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimzeProfilePage;
