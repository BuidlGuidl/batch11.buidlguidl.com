import Link from "next/link";
import type { NextPage } from "next";

const RoheemahBuilderPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-start gap-16 px-4 md:px-20">
      <div className="flex-1">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-start gap-14 mt-20">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#9BF9F3] rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
            <div className="leaf-shaped py-8 px-6 md:px-10 border-2 flex flex-col items-center justify-start bg-[#0D1117] rounded-tl-[100px] rounded-br-[100px] relative z-10">
              <div className="flex flex-col items-center justify-start">
                <div className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] text-[20px] font-bold text-white flex items-center justify-center">
                  A.R.A
                </div>
                <p className="text-[24px] font-normal">Roheemah</p>
                <p className="text-md text-[#9B9EA1]">Frontend & Blockchain Dev</p>
              </div>
              <div className="mt-6 text-[#9B9EA1]">
                {[
                  { icon: "link", text: "abolareroheemah@gmail.com", href: "mailto:abolareroheemah@gmail.com" },
                  {
                    icon: "link",
                    text: "www.github.com/AbolareRoheemah",
                    href: "https://www.github.com/AbolareRoheemah",
                  },
                  { icon: "link", text: "https://rhorheeymarh.vercel.app", href: "https://rhorheeymarh.vercel.app" },
                ].map(({ text, href }) => (
                  <div key={text} className="flex items-center justify-start gap-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#6AECD9"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                    {href ? <Link href={href}>{text}</Link> : <span>{text}</span>}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                {["HTML/CSS", "JS", "REACT", "NEXT", "VUE", "NUXT", "SOLIDITY", "RUST"].map(skill => (
                  <p
                    key={skill}
                    className="bg-[#9BF9F3] text-[#000] text-center text-sm px-2 py-[1px] basis-2/12 rounded-full"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <a
                href="https://docs.google.com/document/d/1iLtYWAaMytZ2K9NEQ3f8LVEUUOVBfcGFhkmYYE1tPdI/edit?usp=sharing"
                download="Abolare_Roheemah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-white px-8 text-[#000] rounded-full font-medium mt-4 cursor-pointer"
              >
                <p>Click to view CV</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-10 pt-10">
            <div className="">
              <div>
                <p className="text-sm text-[#6AECD9]">&lt;h1&gt;</p>
                <p className="text-[34px] lg:text-[46px] pl-4 leading-[50px] font-medium">Hey👋</p>
                <p className="text-[34px] lg:text-[46px] pl-4 leading-[50px] font-medium">
                  I&apos;m <span className="text-[#6AECD9]">Roheemah</span>,
                </p>
                <p className="text-[34px] lg:text-[46px] leading-[50px] font-medium ml-[1rem]">
                  Frontend & Blockchain Developer
                </p>
                <p>
                  {" "}
                  <span className="text-sm text-[#6AECD9]">&lt;/h1&gt;</span>
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm text-[#6AECD9]">&lt;p&gt;</p>
                <p className="pl-4 text-md font-bold text-[#9B9EA1]">
                  I build user-friendly and visually appealing web applications. I also design, implement and maintain
                  blockchain based applications. I love meeting people and having meaningful conversations :)
                </p>
                <p className="text-sm text-[#6AECD9]">&lt;/p&gt;</p>
              </div>
            </div>
            <div className="py-10 px-8 bg-[#1A1E23] rounded-lg md:rounded-full">
              {[
                { number: "4", text: "Programming Languages" },
                { number: "6", text: "Development Tools" },
                { number: "3+", text: "Years of Experience" },
              ].map(item => (
                <div
                  key={item.text}
                  className="flex items-center justify-start md:items-center md:justify-center gap-4 mt-8"
                >
                  <p className="text-[#6AECD9] text-[50px] font-medium">{item.number}</p>
                  <p className="text-md font-bold text-[#9B9EA1]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoheemahBuilderPage;
