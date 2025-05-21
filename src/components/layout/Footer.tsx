import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden bg-zigzag-pattern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-diagonal-pattern opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary dark:text-white">
              Farhan<span className="text-accent">.</span>Khalid
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Backend Developer specializing in Node.js, Express, Fastify, and
              MySQL
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/farhankhalidkayani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 transform hover:scale-110 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/farhankhalidkayani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 transform hover:scale-110 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:rj.farhan4232@gmail.com"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-all duration-300 transform hover:scale-110 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </motion.div>
        </div>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 dark:border-gray-800">
          <div className="space-y-2">
            <h4 className="font-semibold text-primary dark:text-white text-lg">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-primary dark:text-white text-lg">
              Contact
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              rj.farhan4232@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Lahore, Pakistan
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-primary dark:text-white text-lg">
              Let's Connect
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Interested in working together? Feel free to reach out for
              collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            &copy; {currentYear} Farhan Khalid. All rights reserved.
          </motion.p>

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Built with React, TypeScript, TailwindCSS & Framer Motion
          </motion.p>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-8 bottom-8 p-3 rounded-full bg-accent/90 text-white shadow-lg hover:bg-accent transition-colors duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
