import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiCode, FiGitBranch } from "react-icons/fi";

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
              Professional Summary
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Senior software engineer with 4.5+ years designing and
                shipping production backend, cloud and AI systems for
                multi-tenant CRM and automation platforms. I specialize in{" "}
                <strong>Node.js/TypeScript services, AWS infrastructure and LangGraph-based LLM workflows</strong>,
                with measurable wins in database performance and cloud cost.
              </p>

              <p>
                Highlights: a serverless event platform handling{" "}
                <strong>~32M events/month</strong> with zero Lambda errors,
                primary MySQL CPU cut from <strong>~38% to ~15%</strong> after
                ~10x traffic growth, peak RDS CPU cut from ~99.9% to ~20%, and
                ~$1,100/month saved on AWS.
              </p>

              <p>
                As CTO at Hatzs Dimensions I set architecture standards and the
                technical roadmap, run a 14-microservice production ECS
                cluster, own reliability and security, and mentor engineers and
                run technical hiring—while staying hands-on.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3 text-primary dark:text-white">
                  Education
                </h4>
                <div className="border-l-2 border-accent pl-4 py-1">
                  <p className="font-medium">
                    Bachelor's Degree, Information Technology
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    University of Education, Lahore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white">
              Core Specializations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpecializationCard
                icon={<FiCpu />}
                title="AI Engineering"
                description="Production LangGraph agents for call and chat: 6,091 appointments booked and ~28,100 customers engaged in ~5 months on one account."
              />

              <SpecializationCard
                icon={<FiDatabase />}
                title="Cloud & Infrastructure"
                description="AWS ECS/Fargate, Lambda, SQS, ALB, VPC and RDS; backups in AWS Backup vaults and ~$1,100/month in cost savings."
              />

              <SpecializationCard
                icon={<FiCode />}
                title="Full-Stack Development"
                description="TypeScript/NestJS services, REST APIs, WebSockets and a modular-monolith modernization with Drizzle ORM."
              />

              <SpecializationCard
                icon={<FiGitBranch />}
                title="Database Performance"
                description="Indexes, query rewrites and read replicas: primary MySQL CPU ~38% → ~15% and read IOPS down ~90%."
              />
            </div>

            <div className="mt-10 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-primary dark:text-white">
                Engineering Highlights
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Serverless event platform: ~32M events/month, 99.96% queue
                    delivery, 7 ms auth / 15 ms ingestion / 71 ms dispatch.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Cut primary MySQL CPU ~60% and read IOPS ~90% at ~7M+
                    events/week after ~10x traffic growth.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Re-architected the DealerIQ AI call and chat agent onto
                    LangGraph; 52% of bookings land after hours.
                  </p>
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
      <div aria-hidden="true" className="text-accent text-2xl mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-primary dark:text-white">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default About;
