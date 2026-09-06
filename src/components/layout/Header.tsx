import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm border-b border-gray-200/60 dark:border-gray-800/60 py-3"
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
          className="flex flex-col leading-none"
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
          <span className="hidden sm:block text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-[0.15em] mt-0.5">
            BACKEND &amp; AI ENGINEER
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-2">
          <NavLinks activeSection={activeSection} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="ml-4 inline-flex items-center px-4 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accentSolid hover:border-accentSolid hover:text-white transition-colors cursor-pointer"
            >
              Let's Talk
            </ScrollLink>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <FiX aria-hidden="true" size={24} />
            ) : (
              <FiMenu aria-hidden="true" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav aria-label="Mobile" className="flex flex-col py-4">
            <NavLinks
              mobile
              setMobileMenuOpen={setMobileMenuOpen}
              activeSection={activeSection}
            />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setMobileMenuOpen?: (value: boolean) => void;
  activeSection: string;
}

const NavLinks: React.FC<NavLinksProps> = ({
  mobile = false,
  setMobileMenuOpen,
  activeSection,
}) => {
  const links = [
    { name: "Home", href: "home", num: "00" },
    { name: "About", href: "about", num: "01" },
    { name: "Skills", href: "skills", num: "02" },
    { name: "Projects", href: "projects", num: "03" },
    { name: "Experience", href: "experience", num: "04" },
    { name: "Contact", href: "contact", num: "05" },
  ];

  const handleClick = () => {
    if (mobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {links.map((link, index) => {
        const isActive = activeSection === link.href;
        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={mobile ? "" : "inline-block"}
          >
            <ScrollLink
              to={link.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              aria-current={isActive ? "true" : undefined}
              className={`relative font-medium text-sm transition-colors cursor-pointer ${
                mobile
                  ? `py-3 px-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 ${
                      isActive
                        ? "text-accent"
                        : "text-gray-600 dark:text-gray-300"
                    }`
                  : `px-3 py-2 flex items-center gap-1.5 rounded-full ${
                      isActive
                        ? "text-accent"
                        : "text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent"
                    }`
              }`}
              onClick={handleClick}
            >
              <span aria-hidden="true" className="font-mono text-[11px] text-accent/70">
                {link.num}.
              </span>
              {link.name}
              {isActive && !mobile && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-accent/10 dark:bg-accent/15"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </ScrollLink>
          </motion.div>
        );
      })}
    </>
  );
};

export default Header;
