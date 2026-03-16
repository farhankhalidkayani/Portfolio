import React from "react";
import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiCode, FiActivity } from "react-icons/fi";

const Experience: React.FC = () => {
  // Define the work experiences
  const experiences = [
    {
      title: "Technology Consultant",
      company: "Hatzs Dimensions",
      period: "Nov 2025 – Present",
      description:
        "Serve as technical SME in client discovery and architecture discussions for CRM and AI-driven platforms.",
      responsibilities: [
        {
          text: "Design backend architectures for automation systems, CRM platforms, and AI-powered lead engagement tools",
          icon: <FiServer />,
        },
        {
          text: "Leverage AI-assisted development workflows to rapidly prototype and ship MVPs across backend and frontend layers",
          icon: <FiCode />,
        },
        {
          text: "Demonstrate tech-stack agnostic engineering across Node.js, Python, Next.js, and Salesforce",
          icon: <FiDatabase />,
        },
        {
          text: "Built custom e-signature workflow integrated into Salesforce, replacing a third-party document signing platform",
          icon: <FiActivity />,
        },
        {
          text: "Collaborate directly with clients and product teams to gather requirements and design scalable solutions",
          icon: <FiCode />,
        },
      ],
      techStack: [
        "Node.js",
        "Python",
        "Next.js",
        "Salesforce",
        "REST APIs",
        "AI/ML",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hatzs Dimensions",
      period: "Jul 2025 – Nov 2025",
      description:
        "Developed backend services and APIs for production applications using Node.js and MySQL.",
      responsibilities: [
        {
          text: "Implemented JWT authentication systems and OAuth integrations",
          icon: <FiCode />,
        },
        {
          text: "Built integrations with payment platforms, messaging APIs, and external CRM systems",
          icon: <FiActivity />,
        },
        {
          text: "Developed backend features supporting lead management, booking systems, notifications, and automation workflows",
          icon: <FiServer />,
        },
      ],
      techStack: ["Node.js", "MySQL", "JWT", "OAuth", "REST APIs"],
    },
    {
      title: "Associate Software Engineer",
      company: "Hatzs Dimensions",
      period: "Jan 2025 – Jul 2025",
      description:
        "Contributed to backend development of Befer AI, a business management platform supporting bookings, leads, and payments.",
      responsibilities: [
        {
          text: "Implemented secure authentication systems including Google OAuth and JWT authorization",
          icon: <FiCode />,
        },
        {
          text: "Integrated Stripe payments, Google Calendar scheduling, and email/SMS notification systems",
          icon: <FiActivity />,
        },
        {
          text: "Developed backend modules for reminders, automated workflows, and media uploads",
          icon: <FiServer />,
        },
      ],
      techStack: ["Node.js", "Stripe", "OAuth", "JWT", "REST APIs"],
    },
    {
      title: "Backend Intern",
      company: "Hatzs Dimensions",
      period: "Nov 2024 – Jan 2025",
      description:
        "Assisted in backend API development, debugging, and integration tasks using Node.js and MySQL.",
      responsibilities: [
        {
          text: "Backend API development and debugging for production applications",
          icon: <FiServer />,
        },
        {
          text: "Integration tasks and database operations with Node.js and MySQL",
          icon: <FiDatabase />,
        },
      ],
      techStack: ["Node.js", "MySQL", "REST APIs"],
    },
  ];

  return (
    <section
      id="experience"
      className="section bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-circuit-pattern"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Work Experience</h2>
          <div className="h-1 w-24 bg-accent mt-6 mb-6 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            From Backend Intern to Technology Consultant at Hatzs Dimensions—building
            multi-tenant CRMs, AI-powered platforms, and scalable backend systems.
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
              I focus on building reliable, maintainable, and scalable backend
              systems—combining clean code, security best practices, and
              thoughtful architecture. Tech-stack agnostic with production
              experience across Node.js, Python, and Salesforce to deliver
              solutions that grow with business needs.
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
      icon: React.ReactNode;
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
