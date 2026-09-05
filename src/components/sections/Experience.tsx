import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiServer, FiDatabase, FiCode, FiActivity } from "react-icons/fi";

const Experience: React.FC = () => {
  // Define the work experiences
  const experiences = [
    {
      title: "Technology Consultant",
      company: "Hatzs Dimensions",
      period: "Nov 2025 – Present",
      current: true,
      description:
        "Serve as technical SME in client discovery and presales conversations, translating business requirements into CRM, AI, and integration architectures.",
      responsibilities: [
        {
          text: "Participate in presales calls as a technical SME for prospective clients, scoping CRM, AI, and automation solutions",
          icon: <FiCode />,
        },
        {
          text: "Design backend and integration architectures for AI-powered CRM and lead engagement platforms",
          icon: <FiServer />,
        },
        {
          text: "Refactored a 100+ page monolithic AI prompt into a modular LangGraph-based agent architecture for more reliable AI chat behavior",
          icon: <FiActivity />,
        },
        {
          text: "Built a custom e-signature workflow integrated into Salesforce, replacing a third-party document signing platform",
          icon: <FiActivity />,
        },
        {
          text: "Collaborate directly with clients and product teams to gather requirements and design scalable solutions",
          icon: <FiCode />,
        },
      ],
      techStack: [
        "Node.js",
        "Salesforce",
        "OpenAI",
        "LangGraph",
        "REST APIs",
        "AWS",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hatzs Dimensions",
      period: "Jul 2025 – Nov 2025",
      description:
        "Owned backend performance, AI systems, and cloud infrastructure for DealerIQ AI, a multi-tenant automotive CRM processing ~400 leads/day/client.",
      responsibilities: [
        {
          text: "Optimized a production chat query from ~45s to ~3s (~93% reduction) by resolving backend/database bottlenecks",
          icon: <FiActivity />,
        },
        {
          text: "Used AWS RDS Performance Insights to reduce database CPU utilization from ~99.9% to ~20%",
          icon: <FiDatabase />,
        },
        {
          text: "Audited AWS infrastructure and decommissioned unused services, cutting cloud costs by ~$1,100/month",
          icon: <FiServer />,
        },
        {
          text: "Built AI-powered chat and lead-engagement features processing 100M+ LLM tokens in production using OpenAI",
          icon: <FiCode />,
        },
      ],
      techStack: ["Node.js", "MySQL", "Redis", "AWS RDS", "OpenAI"],
    },
    {
      title: "Associate Software Engineer",
      company: "Hatzs Dimensions",
      period: "Jan 2025 – Jul 2025",
      description:
        "Contributed to backend development of Befer AI, an AI-powered CRM platform supporting bookings, leads, and payments.",
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
      title: "Development Intern",
      company: "Hatzs Dimensions",
      period: "Nov 2024 – Jan 2025",
      description:
        "Started professional software development career with backend API development, debugging, and integration tasks.",
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
            From Development Intern to Technology Consultant at Hatzs
            Dimensions—building multi-tenant CRMs, AI-powered platforms, and
            scalable backend systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <TimelineTrack experiences={experiences} />

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

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
  responsibilities: {
    text: string;
    icon: React.ReactNode;
  }[];
  techStack: string[];
}

const TimelineTrack: React.FC<{ experiences: ExperienceItem[] }> = ({
  experiences,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline line: static track + scroll-driven gradient fill */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-accent via-blue-500 to-purple-500 rounded-full"
          style={{ scaleY: scrollYProgress, transformOrigin: "top", height: "100%" }}
        />
      </div>

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
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
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
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 z-10">
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60"></span>
        )}
        <div className="relative w-5 h-5 rounded-full bg-accent border-4 border-white dark:border-gray-900"></div>
      </div>

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
        <div
          className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border ${
            experience.current
              ? "border-accent/50 ring-1 ring-accent/20"
              : "border-gray-200 dark:border-gray-700"
          }`}
        >
          {/* Experience header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-primary dark:text-white">
                {experience.title}
              </h3>
              {experience.current && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Current
                </span>
              )}
            </div>
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
