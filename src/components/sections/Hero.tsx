import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowDown, FiCode, FiDatabase, FiServer } from "react-icons/fi";
import ParticleBackground from "../ui/ParticleBackground";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Backgrounds */}
      <ParticleBackground className="opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
        <div className="lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-mono text-lg md:text-xl mb-4 flex items-center">
              <span className="bg-accent/10 dark:bg-accent/20 py-1 px-3 rounded-full">
                Hello, I'm
              </span>
            </p>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.25rem,1.5rem+3vw,3.75rem)] font-bold text-primary dark:text-white mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Farhan Khalid
            <span className="absolute -bottom-3 left-0 h-1 w-24 bg-accent rounded-full"></span>
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
                  "AI Engineer",
                  "Full-Stack Engineer",
                  "LLM/Agent Systems",
                  "Technology Consultant",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI & Full-Stack Software Engineer with 2+ years building
            production SaaS and LLM-powered platforms end-to-end. I specialize
            in OpenAI/LangGraph agent workflows, Node.js and React/Next.js,
            with production work spanning a multi-tenant automotive CRM,
            LangGraph-based AI agents, and integrations across Salesforce,
            Stripe, Twilio, SendGrid, Meta, and OpenAI.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accentSolid hover:bg-lightBlue text-white rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accentSolid focus:ring-offset-2 shadow-md hover:shadow-lg hover:translate-y-[-2px] font-medium flex items-center gap-2"
            >
              <span>View Projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-primary dark:text-white hover:bg-gray-50 hover:border-accent hover:text-accent dark:hover:bg-gray-800 dark:hover:border-accent dark:hover:text-accent rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-offset-2 font-medium hover:shadow-md flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            className="mt-10 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              "React / Next.js",
              "Node.js",
              "OpenAI / LangGraph",
              "TypeScript",
              "MySQL",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
          Scroll Down
        </span>
        <motion.span
          className="bg-gray-200/70 backdrop-blur-sm dark:bg-gray-700/70 rounded-full p-2 hover:bg-accentSolid hover:text-white transition-colors hover:scale-110 inline-flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown aria-hidden="true" className="text-accent hover:text-white" size={24} />
        </motion.span>
      </motion.button>

      {/* Backend-themed decorative elements */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-10 top-1/3 transform -translate-y-1/2 z-10"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.07, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-5xl font-mono text-primary dark:text-white whitespace-pre"
          >
            {`{
  "role": "AI & Full-Stack Engineer",
  "focus": "LLM Agents + React/Next.js",
  "stack": "Node.js | React | OpenAI"
}`}
          </motion.div>
        </div>
      </div>

      {/* Tech icons */}
      <div
        aria-hidden="true"
        className="absolute bottom-40 right-10 hidden md:flex flex-col gap-8 opacity-20"
      >
        <FiServer size={30} className="text-accent" />
        <FiDatabase size={30} className="text-accent" />
        <FiCode size={30} className="text-accent" />
      </div>
    </section>
  );
};

export default Hero;
