import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaNode, FaDatabase, FaServer, FaGitAlt, FaDocker,
  FaJs, FaPuzzlePiece, FaTools
} from 'react-icons/fa';
import { SiExpress, SiFastify, SiMysql, SiAmazon, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = [
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Node.js", icon: <FaNode />, proficiency: 90 },
        { name: "Express", icon: <SiExpress />, proficiency: 90 },
        { name: "Fastify", icon: <SiFastify />, proficiency: 85 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, proficiency: 90 },
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 75 },
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 70 },
        { name: "Redis", icon: <SiRedis />, proficiency: 65 },
      ]
    },
    {
      title: "API Integration",
      skills: [
        { name: "RESTful APIs", icon: <FaServer />, proficiency: 95 },
        { name: "Payment Gateways", icon: <FaPuzzlePiece />, proficiency: 85 },
        { name: "Authentication", icon: <FaTools />, proficiency: 90 },
        { name: "Third-Party Services", icon: <FaTools />, proficiency: 88 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, proficiency: 85 },
        { name: "Docker", icon: <FaDocker />, proficiency: 75 },
        { name: "AWS Services", icon: <SiAmazon />, proficiency: 70 },
        { name: "JavaScript", icon: <FaJs />, proficiency: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My expertise is primarily focused on backend development, database design, 
            and system architecture with a strong emphasis on creating robust and scalable applications.
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
              <h3 className="text-xl font-bold mb-6 text-primary dark:text-white">
                {category.title}
              </h3>
              
              <div className="space-y-6">
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
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white">
            Backend Development Areas of Expertise
          </h3>
          
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
              title="Real-time Systems"
              description="Building real-time features with WebSockets, handling events, and implementing notification systems."
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
    <div>
      <div className="flex items-center mb-2">
        <div className="text-accent text-xl mr-3">
          {icon}
        </div>
        <div className="flex justify-between w-full">
          <span className="text-primary dark:text-white font-medium">{name}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">{proficiency}%</span>
        </div>
      </div>
      
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <h4 className="text-lg font-semibold mb-3 text-primary dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Skills;
