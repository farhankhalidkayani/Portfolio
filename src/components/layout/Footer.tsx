import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary dark:text-white">
              Farhan<span className="text-accent">.</span>Khalid
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Backend Developer specializing in Node.js, Express, Fastify, and
              MySQL
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/farhankhalidkayani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/farhankhalidkayani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:rj.farhan4232@gmail.com"
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Farhan Khalid. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Built with React, TypeScript, TailwindCSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
