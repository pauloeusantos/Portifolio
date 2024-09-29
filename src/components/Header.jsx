import React from 'react';

const Header = ({ onOpen }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="hero" className="bg-gray-800 fixed top-0 w-full z-50 py-4 shadow-lg">
      <nav className="text-center">
        <ul className="flex justify-center space-x-10 list-none">
          <li>
            <a 
              href="#hero" 
              onClick={scrollToTop} 
              className="text-white text-lg no-underline hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-white text-lg no-underline hover:text-blue-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <button 
              onClick={onOpen} 
              className="text-white text-lg no-underline hover:text-blue-300 transition-colors duration-300"
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
