import React from "react";
import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiCode, FiGitBranch } from "react-icons/fi";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-dots-pattern opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl -z-0"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="section-heading mx-auto md:mx-0">About Me</h2>
          <div className="h-1 w-20 bg-accent mt-6 mb-10 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white">
              Backend Developer with Focus on System Architecture
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a skilled Backend Developer currently pursuing a Bachelor of
                Science in Information Technology (BSIT) at the University of
                Education (2023-2027), while building my career in software
                development.
              </p>

              <p>
                With expertise in{" "}
                <strong>Node.js, Express, Fastify, and MySQL</strong>, I
                specialize in developing robust backend systems for CRM
                platforms, implementing complex integrations including payment
                gateways, authentication systems, AI calling features, push
                notifications, and in-app purchases.
              </p>

              <p>
                My strengths include building scalable APIs, managing database
                operations, and creating efficient server-side applications. I'm
                passionate about creating clean, maintainable code and
                continuously improving my skills to deliver high-quality
                software solutions.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-white">
                  Education
                </h4>
                <div className="border-l-2 border-accent pl-4 py-1">
                  <p className="font-medium">
                    Bachelor of Science in Information Technology (BSIT)
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    University of Education
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    2023 - 2027 (Expected)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Backend Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white">
              Backend Specializations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpecializationCard
                icon={<FiServer />}
                title="Server Architecture"
                description="Designing and implementing efficient server architectures focusing on scalability, security, and performance."
              />

              <SpecializationCard
                icon={<FiDatabase />}
                title="Database Design"
                description="Creating optimized database schemas, handling complex queries, and ensuring data integrity across systems."
              />

              <SpecializationCard
                icon={<FiCode />}
                title="API Development"
                description="Building RESTful and GraphQL APIs with thorough documentation, proper error handling, and validation."
              />

              <SpecializationCard
                icon={<FiGitBranch />}
                title="Third-Party Integration"
                description="Integrating payment gateways, notification systems, authentication providers, and AI services."
              />
            </div>

            <div className="mt-10 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-primary dark:text-white">
                Certifications
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent"></div>
                  <div className="ml-3">
                    <p className="font-medium">
                      CS50P: Introduction to Programming with Python
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Harvard University
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent"></div>
                  <div className="ml-3">
                    <p className="font-medium">
                      CS50x: Introduction to Computer Science
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Harvard University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SpecializationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="text-accent text-2xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-primary dark:text-white">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default About;
