import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiDatabase,
  FiKey,
} from "react-icons/fi";
import { SiNodedotjs, SiExpress, SiFastify, SiMysql } from "react-icons/si";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Project data
  const projects = [
    {
      id: 1,
      title: "Befer CRM Platform",
      description:
        "A comprehensive CRM for blue-collar businesses with integrated payment processing, authentication, and AI-driven features.",
      image: "/project-befer-crm.jpg", // You'll need to add this image to your project
      tags: ["backend", "crm", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "RESTful API architecture",
        "Payment gateway integration",
        "Email and SMS notifications",
        "AI calling system",
        "OAuth & JWT authentication",
      ],
      architecture:
        "Built with a modular architecture using the MVC pattern. Implemented RESTful API endpoints with proper validation, error handling, and response formatting. The database schema includes optimized table relationships for businesses, customers, and services.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "Befer Mobile Backend",
      description:
        "Backend services supporting the mobile version of the Befer CRM platform with specialized endpoints for mobile functionality.",
      image: "/project-befer-mobile.jpg", // You'll need to add this image to your project
      tags: ["backend", "mobile", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "Push notification service",
        "In-app purchase handling",
        "Mobile auth flows",
        "Offline data synchronization",
        "Optimized API responses for mobile",
      ],
      architecture:
        "Built with a focus on performance and bandwidth efficiency. Implemented specialized caching strategies to reduce mobile data usage. Created endpoints optimized for intermittent connectivity scenarios.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 3,
      title: "DealerAI IQ",
      description:
        "A CRM system for automotive dealers, featuring AI-powered customer insights and advanced communication tools.",
      image: "/project-dealer-ai.jpg", // You'll need to add this image to your project
      tags: ["backend", "crm", "architecture"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Fastify", icon: <SiFastify /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "Real-time video chat integration",
        "Audio call system",
        "Complex CRUD operations",
        "AI calling integration",
        "Database design optimization",
      ],
      architecture:
        "Implemented using Fastify for improved performance. Designed a complex database schema to represent vehicle inventory, customer relationships, and sales processes. Created a flexible authentication system with role-based access control.",
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
    <section id="projects" className="section bg-white dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Backend Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="text-accent text-4xl mr-6 mb-4 md:mb-0">
              <FiServer />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary dark:text-white">
                System Architecture Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                My approach to backend development centers on creating
                maintainable, scalable systems with clean code principles. I
                focus on modular architecture, thorough documentation, and
                comprehensive testing to ensure robustness. Each project is
                built with future scaling in mind, implementing best practices
                for security, performance, and reliability.
              </p>
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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project image or placeholder */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400 p-4">
          {/* Replace with actual image once available */}
          <FiServer className="text-5xl mx-auto mb-2" />
          <p className="text-lg font-medium">{project.title}</p>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm"
              >
                <span className="mr-2">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div className="mb-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Key Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
              >
                <FiKey className="text-accent mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Show more details toggle */}
        <button
          className="text-accent hover:text-lightBlue text-sm font-medium mt-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Backend Details" : "Show Backend Architecture"}
        </button>

        {/* Architecture details */}
        {showDetails && (
          <motion.div
            className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center">
              <FiDatabase className="mr-2" />
              Architecture Details
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.architecture}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project links */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors flex items-center"
        >
          <FiGithub className="mr-2" />
          <span>GitHub</span>
        </a>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors flex items-center"
        >
          <FiExternalLink className="mr-2" />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
