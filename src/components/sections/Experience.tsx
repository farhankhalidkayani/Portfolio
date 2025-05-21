import React from "react";
import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiCode, FiActivity } from "react-icons/fi";

const Experience: React.FC = () => {
  // Define the work experiences
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Hatzs Dimensions",
      period: "February 2025 - Present",
      description:
        "Handling backend development for multiple products with a focus on scalable API design and complex integrations.",
      responsibilities: [
        {
          text: "Built backend for Befer Mobile application with push notifications and in-app purchases",
          icon: <FiServer />,
        },
        {
          text: "Developed backend codebase for DealerAI IQ, a CRM for car dealerships",
          icon: <FiCode />,
        },
        {
          text: "Designed and managed database architecture for multiple applications",
          icon: <FiDatabase />,
        },
        {
          text: "Integrated advanced features like video chat, audio calls, and AI calling systems",
          icon: <FiActivity />,
        },
        {
          text: "Implemented authentication systems and complex CRUD workflows",
          icon: <FiCode />,
        },
      ],
      techStack: [
        "Node.js",
        "Express",
        "Fastify",
        "MySQL",
        "JWT",
        "WebSockets",
      ],
    },
    {
      title: "Development Intern",
      company: "Hatzs Dimensions",
      period: "November 2024 - January 2025",
      description:
        "Contributed to backend development for AI-based CRM platform while learning industry best practices.",
      responsibilities: [
        {
          text: "Built backend for AI-based CRM platform called Befer",
          icon: <FiServer />,
        },
        {
          text: "Integrated third-party services, payment gateways, email and SMS APIs",
          icon: <FiActivity />,
        },
        {
          text: "Implemented Google sign-in and AI calling features",
          icon: <FiCode />,
        },
        {
          text: "Designed and managed the database architecture",
          icon: <FiDatabase />,
        },
      ],
      techStack: ["Node.js", "Express", "MySQL", "OAuth", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in backend development, focusing on
            server-side architecture, API development, and database design.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((experience, idx) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                index={idx}
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Backend expertise highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">
              Backend Development Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Throughout my career, I've focused on building reliable,
              maintainable, and scalable backend systems. I emphasize clean code
              principles, comprehensive documentation, and thoughtful
              architecture decisions. My approach combines best practices in
              security, performance optimization, and database design to create
              robust solutions that can grow with business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: {
      text: string;
      icon: JSX.Element;
    }[];
    techStack: string[];
  };
  index: number;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  isLeft,
}) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-white dark:border-gray-900 z-10"></div>

      {/* Timeline card */}
      <motion.div
        className={`relative md:w-1/2 ${
          isLeft ? "md:pr-12 md:ml-auto" : "md:pl-12"
        }`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* Experience header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary dark:text-white">
              {experience.title}
            </h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-accent font-medium">{experience.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.period}
              </p>
            </div>
          </div>

          {/* Experience description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-accent mt-1 mr-3">
                    {responsibility.icon}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {responsibility.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
