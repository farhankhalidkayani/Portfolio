import React from "react";
import { motion } from "framer-motion";
import {
  FaNode,
  FaServer,
  FaGitAlt,
  FaDatabase,
  FaPuzzlePiece,
  FaTools,
} from "react-icons/fa";
import {
  SiExpress,
  SiFastify,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPython,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiStripe,
  SiOpenai,
} from "react-icons/si";

const Skills: React.FC = () => {
  // Group skills by category (aligned with resume)
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, proficiency: 95 },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 90 },
        { name: "Python", icon: <SiPython />, proficiency: 85 },
        { name: "SQL", icon: <FaDatabase />, proficiency: 90 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNode />, proficiency: 95 },
        { name: "Fastify", icon: <SiFastify />, proficiency: 90 },
        { name: "Express", icon: <SiExpress />, proficiency: 90 },
        { name: "FastAPI", icon: <SiFastapi />, proficiency: 85 },
        { name: "REST APIs", icon: <FaServer />, proficiency: 95 },
        { name: "WebSockets", icon: <FaPuzzlePiece />, proficiency: 85 },
        { name: "JWT & OAuth", icon: <FaTools />, proficiency: 90 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, proficiency: 90 },
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 80 },
        { name: "Redis", icon: <SiRedis />, proficiency: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 75 },
      ],
    },
    {
      title: "Integrations & Tools",
      skills: [
        { name: "Stripe", icon: <SiStripe />, proficiency: 88 },
        { name: "OpenAI API", icon: <SiOpenai />, proficiency: 85 },
        { name: "Twilio / SendGrid", icon: <FaPuzzlePiece />, proficiency: 85 },
        { name: "Git & GitHub", icon: <FaGitAlt />, proficiency: 95 },
        { name: "Sentry & Monitoring", icon: <FaTools />, proficiency: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>
      <div
        className="absolute top-40 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "7s" }}
      ></div>
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-dots-pattern opacity-5"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 dark:bg-accent/20 text-accent text-sm font-semibold mb-3">
            EXPERTISE
          </span>
          <h2 className="section-heading mx-auto">Technical Skills</h2>
          <div className="h-1 w-20 bg-accent mt-6 mb-6 mx-auto relative">
            <div
              className="absolute -top-[4px] left-0 w-3 h-3 bg-accent rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute -top-[4px] right-0 w-3 h-3 bg-accent rounded-full animate-ping"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            ></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Languages: JavaScript, TypeScript, Python, SQL. Backend: Node.js,
            Fastify, Express, FastAPI. Multi-tenant systems, RBAC, workflow
            engines, and integrations with Stripe, Salesforce, Meta APIs,
            Twilio, and OpenAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold text-primary dark:text-white">
                  {category.title}
                </h3>
                <div className="h-0.5 bg-accent flex-grow ml-4"></div>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Backend-specific knowledge section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="flex items-center mb-8">
            <div className="h-0.5 bg-accent flex-grow mr-4 hidden md:block"></div>
            <h3 className="text-2xl font-bold text-primary dark:text-white text-center">
              Backend Development Areas of Expertise
            </h3>
            <div className="h-0.5 bg-accent flex-grow ml-4 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              title="API Design & Architecture"
              description="Creating well-structured RESTful APIs with proper error handling, validation, authentication, and documentation."
            />

            <ExpertiseCard
              title="Database Optimization"
              description="Designing efficient schemas, writing optimized queries, implementing indexing strategies, and ensuring data integrity."
            />

            <ExpertiseCard
              title="Authentication Systems"
              description="Implementing secure user authentication flows, JWT-based auth, OAuth integrations, and role-based access control."
            />

            <ExpertiseCard
              title="Payment Processing"
              description="Integrating payment gateways, implementing secure transaction flows, and handling subscription management."
            />

            <ExpertiseCard
              title="Multi-tenant & RBAC"
              description="Designing multi-tenant systems, role-based access control, workflow engines, and event-driven architectures."
            />

            <ExpertiseCard
              title="System Performance"
              description="Identifying and resolving bottlenecks, optimizing queries, implementing caching strategies, and load testing."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, icon, proficiency }) => {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-accent text-xl mr-3 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex justify-between w-full">
          <span className="text-primary dark:text-white font-semibold">
            {name}
          </span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-accent font-bold font-mono bg-accent/5 dark:bg-accent/10 px-2 py-0.5 rounded-md"
          >
            {proficiency}%
          </motion.span>
        </div>
      </div>

      <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-blue-500 dark:from-accent dark:to-blue-600 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-1.5 bg-white/30"
            animate={{
              opacity: [0, 1, 0],
              x: [-5, 0, 5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300 group relative overflow-hidden z-0"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Background pattern */}
      <div className="absolute -z-10 inset-0 bg-circuit-pattern opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"></div>

      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10"></div>
      <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg -z-10"></div>

      {/* Content */}
      <div className="w-12 h-1 bg-accent mb-5 group-hover:w-20 transition-all duration-500"></div>
      <h4 className="text-lg font-semibold mb-4 text-primary dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Decorative dot */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-500"></div>
    </motion.div>
  );
};

export default Skills;
