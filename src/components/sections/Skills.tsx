import React from "react";
import { motion } from "framer-motion";
import {
  FaNode,
  FaServer,
  FaGitAlt,
  FaDatabase,
  FaPuzzlePiece,
  FaTools,
  FaAws,
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
  SiSalesforce,
  SiDocker,
} from "react-icons/si";

const Skills: React.FC = () => {
  // Group skills by category (aligned with resume)
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Python", icon: <SiPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNode /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Fastify", icon: <SiFastify /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "JWT & OAuth", icon: <FaTools /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "AI / LLM Engineering",
      skills: [
        { name: "OpenAI API", icon: <SiOpenai /> },
        { name: "Prompt Engineering", icon: <FaTools /> },
        { name: "LangGraph / AI Agents", icon: <FaPuzzlePiece /> },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (RDS, CloudFront, ECR)", icon: <FaAws /> },
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Docker", icon: <SiDocker /> },
      ],
    },
    {
      title: "Integrations",
      skills: [
        { name: "Stripe", icon: <SiStripe /> },
        { name: "Salesforce", icon: <SiSalesforce /> },
        { name: "Twilio / SendGrid / Meta", icon: <FaPuzzlePiece /> },
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
            Backend engineering with Node.js, MySQL, and Redis; AI/LLM
            application development with OpenAI and LangGraph; and production
            experience across AWS infrastructure and integrations with
            Salesforce, Stripe, Twilio, SendGrid, and Meta APIs.
          </p>
        </motion.div>

        {/* Bento grid of skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                <h3 className="text-base font-bold text-primary dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:border-accent/50 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    <span className="text-accent">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
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
              title="Database Performance"
              description="Diagnosing production bottlenecks with AWS RDS Performance Insights and optimizing queries—reduced DB CPU from ~99.9% to ~20% and chat latency from ~45s to ~3s."
            />

            <ExpertiseCard
              title="AI Agent Architecture"
              description="Designing LLM-powered workflows with OpenAI and LangGraph—refactored a 100+ page monolithic prompt into a modular, maintainable agent graph."
            />

            <ExpertiseCard
              title="Cloud Cost Optimization"
              description="Auditing AWS infrastructure to identify and decommission unused resources—cut cloud spend by ~$1,100/month."
            />

            <ExpertiseCard
              title="Multi-tenant SaaS"
              description="Building multi-tenant CRM architecture handling hundreds of leads/day/client across messaging, email, and social channels."
            />

            <ExpertiseCard
              title="Third-Party Integrations"
              description="Production integrations with Salesforce, Stripe, Twilio, SendGrid, Meta, and automotive data APIs."
            />

            <ExpertiseCard
              title="Authentication & Security"
              description="Implementing secure authentication flows, JWT-based auth, OAuth integrations, and role-based access control."
            />
          </div>
        </motion.div>
      </div>
    </section>
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
