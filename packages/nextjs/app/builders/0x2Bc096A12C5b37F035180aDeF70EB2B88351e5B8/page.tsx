import React from "react";

const SimplePage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col px-6 lg:px-10 py-8 lg:py-12">
      <div className="flex gap-4 items-start">
        <img src="https://gravatar.com/avatar/357be387c9eacb2a78896388cdafbf8d?size=256" className="rounded-full" />
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
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/melanke"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" className="w-12 h-12">
                <path
                  className="fill-primary-content group-hover:fill-accent transition-all duration-300"
                  d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gilbueno/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12">
                <path
                  className="fill-primary-content group-hover:fill-accent transition-all duration-300"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
            <a
              href="https://t.me/+5511970629099"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-12 h-12">
                <path
                  className="fill-primary-content group-hover:fill-accent transition-all duration-300"
                  d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                />
              </svg>
            </a>
            <a
              href="https://app.buidlguidl.com/builders/0x2Bc096A12C5b37F035180aDeF70EB2B88351e5B8"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <svg viewBox="0 0 53 72" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path
                  className="fill-primary-content group-hover:fill-accent transition-all duration-300"
                  fill-rule="evenodd"
                  d="M25.9 17.434v15.638h3.927v9.04h9.718v-9.04h6.745v18.08l-10.607 19.88-12.11-.182-12.11.183L.856 51.152v-18.08h6.713v9.04h9.75v-9.04h4.329V2.46a2.126 2.126 0 0 1 4.047-.914c1.074.412 2.157 1.5 3.276 2.626 1.33 1.337 2.711 2.726 4.193 3.095 1.496.373 2.605-.026 3.855-.475 1.31-.47 2.776-.997 5.005-.747 1.67.197 2.557 1.289 3.548 2.509 1.317 1.623 2.82 3.473 6.599 3.752l-.024.017c-2.42 1.709-5.726 4.043-10.86 3.587-1.605-.139-2.736-.656-3.82-1.153-1.546-.707-2.997-1.37-5.59-.832-2.809.563-4.227 1.892-5.306 2.903-.236.221-.456.427-.67.606Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
