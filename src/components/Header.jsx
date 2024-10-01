
const Header = ({ onOpen }) => {
  return (
    <header className="fixed top-0 w-full z-50 py-4 shadow-lg bg-gray-800 backdrop-blur-lg bg-opacity-70 transition-all duration-300">
      <nav className="text-center">
        <ul className="flex justify-center space-x-10 list-none">
          <li>
            <a
              href="#hero"
              className="text-white text-lg no-underline hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-lg no-underline hover:text-blue-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <button
              onClick={onOpen}
              className="text-white text-lg no-underline hover:text-blue-500 transition-colors duration-300"
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
