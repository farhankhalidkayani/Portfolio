import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiDatabase,
  FiKey,
} from "react-icons/fi";
import { SiNodedotjs, SiExpress, SiFastify, SiMysql, SiPython, SiFastapi } from "react-icons/si";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Project data
  const projects = [
    {
      id: 1,
      title: "DealerIQ AI",
      description:
        "Multi-tenant automotive CRM integrating AI voice, chat, and messaging workflows. Processes ~400 incoming leads per day per client with automated AI engagement across calls, SMS, email, and social channels.",
      image: "/project-dealer-ai.jpg",
      tags: ["backend", "crm", "api", "architecture"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Fastify", icon: <SiFastify /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "IQ Chat: unified thread from Instagram, Messenger, SMS, Email",
        "RBAC, audit trails, e-sign document builder, workflow automation",
        "Redis caching; WebSockets for real-time notifications",
        "Background jobs for reminders, workflow triggers, task expiration",
        "Integrations: Salesforce, Stripe, Twilio, SendGrid, Meta, OpenAI, KBB, CarGurus, Carfax",
      ],
      architecture:
        "Layered design: Routes → Controllers → Services → Repositories → Validators. Heavy chat queries optimized from ~45s to ~3s. Contributing to refactoring with queues, event-driven architecture, and microservices.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://www.dealeriq.ai/",
    },
    {
      id: 2,
      title: "Befer AI",
      description:
        "Business management platform with backend APIs supporting bookings, leads, orders, payments, and marketing automation. 60+ service modules with extensive integrations including Stripe, QuickBooks, Google APIs, and OpenAI.",
      image: "/project-befer-crm.jpg",
      tags: ["backend", "crm", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "Bookings, leads, orders, payments, marketing automation",
        "Stripe, QuickBooks, Google APIs, OpenAI integrations",
        "60+ service modules",
        "OAuth & JWT authentication",
      ],
      architecture:
        "Modular backend with RESTful APIs, validation, and error handling. Database schema optimized for businesses, customers, and services.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://befer.co/",
    },
    {
      id: 3,
      title: "Social Bear AI (MVP)",
      description:
        "FastAPI backend for social media automation: Instagram and Facebook messaging, automated AI replies, and comment moderation.",
      image: "/project-befer-mobile.jpg",
      tags: ["backend", "api"],
      techStack: [
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ],
      keyFeatures: [
        "Instagram & Facebook message handling",
        "Automated AI replies",
        "Comment moderation",
      ],
      architecture:
        "FastAPI-based backend for social media automation and AI-driven engagement.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 4,
      title: "Social Hub AI (MVP)",
      description:
        "Backend system for email and SMS marketing campaigns with audience targeting and automated messaging workflows.",
      image: "/project-befer-mobile.jpg",
      tags: ["backend", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      keyFeatures: [
        "Email and SMS marketing campaigns",
        "Audience targeting",
        "Automated messaging workflows",
      ],
      architecture:
        "Backend services for campaign management and multi-channel messaging.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
  ];

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  // Tab options
  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend" },
    { id: "api", label: "API" },
    { id: "architecture", label: "Architecture" },
    { id: "crm", label: "CRM Systems" },
  ];

  return (
    <section
      id="projects"
      className="section bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-wave-pattern"></div>
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 dark:bg-accent/20 text-accent text-sm font-semibold mb-3">
            PORTFOLIO
          </span>
          <h2 className="section-heading mx-auto">Backend Projects</h2>
          <div className="h-1 w-24 bg-accent mt-6 mb-6 mx-auto relative">
            <div className="absolute -top-[4px] left-[50%] w-3 h-3 bg-accent rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            My projects showcase my expertise in building robust backend
            systems, complex database architectures, and scalable API solutions.
          </p>
        </motion.div>

        {/* Project filter tabs */}
        <div className="flex flex-wrap justify-center mb-12 relative">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full h-full -z-10"></div>
          <div className="flex flex-wrap justify-center p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-5 py-2 mx-1 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-900 text-accent shadow-md font-medium"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Backend architect highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden"
        >
          {/* Background pattern with low opacity */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-accent to-purple-500"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg relative z-10">
                  <FiServer className="text-accent text-4xl" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white flex items-center">
                <span>System Architecture Philosophy</span>
                <div className="ml-3 h-px w-16 bg-accent/50"></div>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach to backend development centers on creating
                maintainable, scalable systems with clean code principles. I
                focus on modular architecture, thorough documentation, and
                comprehensive testing to ensure robustness. Each project is
                built with future scaling in mind, implementing best practices
                for security, performance, and reliability.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Scalability", "Security", "Performance"].map((pillar, i) => (
                  <motion.div
                    key={pillar}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="font-medium text-accent">{pillar}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    techStack: { name: string; icon: React.ReactNode }[];
    keyFeatures: string[];
    architecture: string;
    github: string;
    liveDemo: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0"></div>

      {/* Curved accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-b-full"></div>

      {/* Project image or placeholder with gradient overlay */}
      <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black flex items-center justify-center relative overflow-hidden">
        {/* Abstract code background */}
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>

        <div className="text-center text-white p-6 z-10 relative">
          {/* Icon with glow effect */}
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl"></div>
            <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-full shadow-xl inline-block">
              <FiServer className="text-5xl text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <span className="px-2 py-0.5 bg-accent/10 dark:bg-accent/20 text-accent text-xs font-medium rounded-full">
            {project.tags[0].toUpperCase()}
          </span>
          <div className="h-0.5 bg-accent/20 flex-1 ml-3"></div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-5">
          <h4 className="text-sm font-medium text-primary dark:text-white mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <span className="mr-2 text-accent">{tech.icon}</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div className="mb-5">
          <h4 className="text-sm font-medium text-primary dark:text-white mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="flex items-center text-gray-600 dark:text-gray-300 text-sm group"
              >
                <span className="mr-2 p-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FiKey className="text-accent" size={12} />
                </span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show more details toggle */}
        <button
          className="mt-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-700/50 text-primary dark:text-gray-300 hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent transition-colors w-full flex items-center justify-center group"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span className="mr-1">
            {showDetails ? "Hide Details" : "Show Architecture"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 transform ${
              showDetails ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Architecture details */}
        {showDetails && (
          <motion.div
            className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-sm font-medium text-primary dark:text-white mb-3 flex items-center">
              <FiDatabase className="mr-2 text-accent" />
              Architecture Details
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {project.architecture}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project links */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent rounded-full text-gray-600 dark:text-gray-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub size={18} />
          <span className="font-medium">GitHub</span>
        </motion.a>

        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent/90 hover:bg-accent text-white rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiExternalLink size={18} />
          <span className="font-medium">Live Demo</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects;
