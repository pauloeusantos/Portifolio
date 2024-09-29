import React from "react";
import { FooterIcon } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeroSection = ({ onOpen }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="text-center text-white z-10">
        <h1 className="text-6xl md:text-7xl mb-5 font-extrabold drop-shadow-lg">
          Paulo Henrique
        </h1>
        <BubbleText />
        <button
          onClick={onOpen} 
          className="inline-block bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-600 hover:scale-105 mt-10"
        >
          View Projects
        </button>
        <div className="mt-8">
          <div className="flex justify-center space-x-10"> 
            <FooterIcon 
              href="https://github.com/pauloeusantos" 
              icon={BsGithub} 
              className="text-black text-5xl transition-colors duration-300 hover:text-blue-500" 
            />
            <FooterIcon 
              href="https://www.linkedin.com/in/paulohenrique2006" 
              icon={BsLinkedin} 
              className="text-black text-5xl transition-colors duration-300 hover:text-blue-500"
            />
            <FooterIcon 
              href="mailto:paulohenriquedeoliveira2006@gmail.com" 
              icon={BsInstagram} 
              className="text-black text-5xl transition-colors duration-300 hover:text-blue-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-bold text-indigo-200 mt-5 drop-shadow-lg">
      {"Desenvolvedor ".split("").map((child, idx) => (
        <span
          className="inline-block transition-transform duration-300 hover:scale-125"
          key={idx}
        >
          {child}
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
