import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowDown } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
        <div className="lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-mono text-lg md:text-xl mb-4">
              Hello, I'm
            </h2>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Farhan Khalid
          </motion.h1>

          <motion.div
            className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Backend Developer",
                  "Node.js Expert",
                  "API Architect",
                  "Database Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I specialize in building robust backend systems, integrating
            third-party services, designing efficient databases, and creating
            scalable APIs with Node.js, Express, and Fastify.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent hover:bg-lightBlue text-white rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-md hover:shadow-lg hover:translate-y-[-2px] font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-primary dark:text-white hover:bg-gray-50 hover:border-accent hover:text-accent dark:hover:bg-gray-800 dark:hover:border-accent dark:hover:text-accent rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-offset-2 font-medium hover:shadow-md"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
          Scroll Down
        </p>
        <motion.div
          className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-accent hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown className="text-accent" size={24} />
        </motion.div>
      </motion.div>

      {/* Backend-themed decorative elements */}
      <div className="hidden md:block absolute right-10 top-1/3 transform -translate-y-1/2">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-5xl font-mono text-primary dark:text-white whitespace-pre"
          >
            {`{
  "skill": "Node.js",
  "level": "Expert",
  "years": 3
}`}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
