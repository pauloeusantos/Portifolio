const Header = ({ onOpen }) => {
  return (
    <header className="fixed top-0 w-full z-50 py-4 shadow-lg bg-gray-800 backdrop-blur-lg bg-opacity-70 transition-all duration-300">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-10 list-none">
          {['Home', 'About', 'Projects'].map((item, index) => (
            <li key={index}>
              {item === 'Projects' ? (
                <button
                  onClick={onOpen}
                  className="text-white text-lg font-medium hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                </button>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg font-medium hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
