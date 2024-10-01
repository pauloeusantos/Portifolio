import { FooterIcon } from "flowbite-react";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import Foto from "../../public/fot.jpeg"; 

const HeroSection = ({ onOpen }) => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="text-center text-white z-10 space-y-4">

        <div className="flex justify-center mb-4">
          <img
            src={Foto}
            alt="Paulo Henrique"
            width={150}
            height={150}
            className="rounded-full border-4 border-white object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-extrabold drop-shadow-lg">
          Paulo Henrique
        </h1>

        <BubbleText />

        <button
          onClick={onOpen}
          className="inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-600 hover:scale-105 mt-5 md:mt-10"
        >
          View Projects
        </button>

        <div className="mt-6">
          <div className="flex justify-center space-x-6 md:space-x-10">
            <FooterIcon
              href="https://github.com/pauloeusantos"
              icon={BsGithub}
              className="text-black text-4xl md:text-5xl transition-colors duration-300 hover:text-blue-500"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/paulohenrique2006"
              icon={BsLinkedin}
              className="text-black text-4xl md:text-5xl transition-colors duration-300 hover:text-blue-500"
            />
            <FooterIcon
              href="mailto:paulohenriquedeoliveira2006@gmail.com"
              icon={BsEnvelopeFill}
              className="text-black text-4xl md:text-5xl transition-colors duration-300 hover:text-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-200 mt-4 drop-shadow-lg">
      {"Desenvolvedor ".split("").map((char, idx) => (
        <span
          className="inline-block transition-transform duration-300 hover:scale-125"
          key={idx}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};

const Container = ({ onOpen }) => {
  return (
    <div>
      <HeroSection onOpen={onOpen} />
    </div>
  );
};

export default Container;
