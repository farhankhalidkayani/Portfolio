import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiServer, FiDatabase, FiCode, FiActivity } from "react-icons/fi";

const Experience: React.FC = () => {
  // Define the work experiences
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Hatzs Dimensions",
      period: "Oct 2026 – Present",
      current: true,
      description:
        "Set architecture standards, development practices and the technical roadmap across DealerIQ AI and Befer, while staying hands-on in architecture and code.",
      responsibilities: [
        {
          text: "Run the production ECS cluster: 14 microservices (12 on EC2, 2 on Fargate) serving the CRM, AI voice and chat agents, power dialer and eSign",
          icon: <FiServer />,
        },
        {
          text: "Own reliability and security, including automated database backups in AWS Backup vaults and protection of source code, systems and credentials",
          icon: <FiDatabase />,
        },
        {
          text: "Introduced code review, QA and root cause analysis practices; mentor engineers and run technical hiring",
          icon: <FiCode />,
        },
        {
          text: "Provide technical estimates, cost analysis and risk assessment to the CEO",
          icon: <FiActivity />,
        },
      ],
      techStack: ["AWS", "ECS", "Fargate", "AWS Backup", "TypeScript", "LangGraph"],
    },
    {
      title: "Senior Software Engineer",
      company: "Hatzs Dimensions",
      period: "Aug 2024 – Oct 2026",
      description:
        "Built and maintained backend services for DealerIQ AI, a multi-tenant automotive CRM, on Node.js and AWS; technical SME in client discovery and presales.",
      responsibilities: [
        {
          text: "Designed the serverless event pipeline (API Gateway, Lambda authorizer, SQS, dispatcher over WebSocket, HTTP and SES): ~7 ms auth, 15 ms ingestion and 71 ms dispatch at ~115 peak concurrency",
          icon: <FiActivity />,
        },
        {
          text: "Cleaned up bottlenecks in AI-generated code with missing indexes, rewritten slow queries and a dedicated read replica for IQ chat",
          icon: <FiDatabase />,
        },
        {
          text: "Led modernization of a large JavaScript backend toward a TypeScript modular monolith using Drizzle ORM",
          icon: <FiCode />,
        },
        {
          text: "Debugged and optimized production deployments across ECS, Fargate, ALB, VPC, RDS and CI/CD pipelines",
          icon: <FiServer />,
        },
      ],
      techStack: ["TypeScript", "Drizzle ORM", "Lambda", "SQS", "API Gateway", "ECS", "RDS"],
    },
    {
      title: "Software Engineer",
      company: "Hatzs Dimensions",
      period: "May 2023 – Aug 2024",
      description:
        "Built backend services and APIs (Node.js, MySQL) for DealerIQ AI's lead management, booking, notification and automation workflows.",
      responsibilities: [
        {
          text: "Cut peak CPU on production AWS RDS from ~99.9% to ~20% through query optimization and database tuning",
          icon: <FiDatabase />,
        },
        {
          text: "Reduced AWS costs by ~$1,100/month by removing unused resources and consolidating infrastructure",
          icon: <FiServer />,
        },
        {
          text: "Implemented JWT/OAuth authentication and integrations with payment gateways, messaging services and third-party CRMs",
          icon: <FiCode />,
        },
      ],
      techStack: ["Node.js", "MySQL", "AWS RDS", "JWT", "OAuth"],
    },
    {
      title: "Associate Software Engineer",
      company: "Hatzs Dimensions",
      period: "Apr 2022 – May 2023",
      description:
        "Contributed to the backend of Befer, an AI-powered CRM, during its migration from Bubble.io to a custom Node.js + MySQL backend.",
      responsibilities: [
        {
          text: "Built backend modules on the new Node.js + MySQL stack as Befer moved off Bubble.io",
          icon: <FiServer />,
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
            From Associate Software Engineer to CTO at Hatzs Dimensions—building
            multi-tenant CRMs, AI agents and cloud infrastructure on AWS.
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
              Engineering Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Measure first, then fix the real bottleneck. I build reliable,
              cost-aware systems—clean TypeScript services, queue-decoupled AWS
              infrastructure and production LLM workflows—backed by code
              review, QA and root cause analysis.
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
                  <span aria-hidden="true" className="text-accent mt-1 mr-3">
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
