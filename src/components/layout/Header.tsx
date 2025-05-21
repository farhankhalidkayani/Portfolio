import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-lg py-2"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl md:text-2xl font-bold text-primary dark:text-white cursor-pointer"
          >
            Farhan<span className="text-accent">.</span>Khalid
          </ScrollLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors shadow-sm"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FiSun size={20} className="text-yellow-300" />
            ) : (
              <FiMoon size={20} className="text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors shadow-sm"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FiSun size={20} className="text-yellow-300" />
            ) : (
              <FiMoon size={20} className="text-primary" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col py-4">
            <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setMobileMenuOpen?: (value: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  mobile = false,
  setMobileMenuOpen,
}) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    if (mobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="inline-block"
        >
          <ScrollLink
            to={link.href.substring(1)} // Remove the # from href
            spy={true}
            smooth={true}
            offset={-70} // Adjust based on header height
            duration={500}
            className={`font-medium text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent transition-colors cursor-pointer ${
              mobile
                ? "py-3 px-6 block border-b border-gray-100 dark:border-gray-700"
                : ""
            }`}
            onClick={handleClick}
          >
            {link.name}
          </ScrollLink>
        </motion.div>
      ))}
    </>
  );
};

export default Header;
