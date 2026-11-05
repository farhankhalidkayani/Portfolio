import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiDatabase,
  FiKey,
  FiZap,
  FiDollarSign,
  FiUsers,
  FiCpu,
  FiStar,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiNodedotjs,
  SiMysql,
  SiSalesforce,
  SiOpenai,
  SiTypescript,
  SiNestjs,
  SiStripe,
} from "react-icons/si";
import { FaAws, FaPuzzlePiece } from "react-icons/fa";

interface Project {
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
  featured?: boolean;
}

// Subtle 3D tilt-on-hover effect, driven by mouse position within the element
function useTilt(strength = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [strength, -strength]);
  const rotateY = useTransform(x, [-150, 150], [-strength, strength]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "DealerIQ AI",
      description:
        "Multi-tenant automotive CRM covering leads, bookings, AI voice and chat agents, a power dialer and eSign. Runs on ECS (EC2 + Fargate) with MySQL on RDS, a read replica for AI chat, and a serverless event platform handling ~32M events/month.",
      image: "/project-dealer-ai.jpg",
      tags: ["backend", "crm", "api", "architecture", "ai", "cloud"],
      featured: true,
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "AWS", icon: <FaAws /> },
      ],
      keyFeatures: [
        "14 microservices on ECS (12 on EC2, 2 on Fargate) behind ALB in a VPC",
        "Serverless event pipeline: API Gateway, Lambda authorizer, SQS, dispatcher over WebSocket, HTTP and SES",
        "Missing indexes and slow queries fixed; IQ chat reads moved to a dedicated read replica",
        "Automated database backups in AWS Backup vaults",
        "Integrations: Salesforce, Stripe, Twilio, SendGrid, Google Calendar",
      ],
      architecture:
        "Large JavaScript backend being modernized into a TypeScript modular monolith with Drizzle ORM. Event pipeline averages 7 ms auth, 15 ms ingestion and 71 ms dispatch at ~115 peak concurrency, with zero Lambda errors over 30 days. Cleared AI-generated-code bottlenecks: primary MySQL CPU ~38% → ~15% and read IOPS down ~90% after ~10x traffic growth.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://www.dealeriq.ai/",
    },
    {
      id: 2,
      title: "DealerIQ AI Call & Chat Agent",
      description:
        "LangGraph-based AI agent that books appointments 24/7 over SMS, Messenger, Instagram and phone. Answers every inbound call, reaches 82% of outbound contacts, and logs summaries, transcripts and recordings to the CRM.",
      image: "/project-dealer-ai.jpg",
      tags: ["ai", "backend"],
      techStack: [
        { name: "LangGraph", icon: <FaPuzzlePiece /> },
        { name: "LLMs", icon: <SiOpenai /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "AWS", icon: <FaAws /> },
      ],
      keyFeatures: [
        "6,091 appointments booked and ~28,100 customers engaged in ~5 months on one high-volume dealer account",
        "52% of bookings land after hours, when no human team is responding",
        "90% of bookings routed straight to human agents",
        "Re-architected from a monolithic prompt onto LangGraph",
      ],
      architecture:
        "Production LLM pipeline on LangGraph with voice and messaging channels feeding a single CRM thread, with call summaries, transcripts and recordings persisted per lead.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://www.dealeriq.ai/",
    },
    {
      id: 3,
      title: "Serverless Event Platform",
      description:
        "Event ingestion and dispatch platform handling ~32M events/month (~1M/day) with zero Lambda errors and 99.96% queue delivery over 30 days.",
      image: "/project-dealer-ai.jpg",
      tags: ["cloud", "architecture", "backend"],
      techStack: [
        { name: "API Gateway", icon: <FaAws /> },
        { name: "Lambda", icon: <FaAws /> },
        { name: "SQS", icon: <FaAws /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
      ],
      keyFeatures: [
        "API Gateway + Lambda authorizer: ~7 ms average auth",
        "~15 ms average ingestion into SQS",
        "Dispatcher over WebSocket, HTTP and SES: ~71 ms average",
        "~115 peak concurrency with zero Lambda errors",
      ],
      architecture:
        "Fully serverless, queue-decoupled pipeline: authorize at the edge, buffer in SQS, fan out through a dispatcher to WebSocket, HTTP and SES targets.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 4,
      title: "Befer AI",
      description:
        "AI-powered CRM migrated from Bubble.io to a custom Node.js + MySQL backend. Built JWT and Google OAuth auth, AI voice calling, image upload, Google Calendar sync and Stripe subscriptions.",
      image: "/project-befer-crm.jpg",
      tags: ["backend", "crm", "api", "ai"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Stripe", icon: <SiStripe /> },
      ],
      keyFeatures: [
        "JWT and Google OAuth authentication",
        "AI voice calling and Google Calendar sync",
        "Stripe subscriptions",
        "SendGrid/Twilio email and SMS notifications plus a reminder engine",
      ],
      architecture:
        "Custom Node.js + MySQL backend replacing a Bubble.io app, with proactive customer engagement driven by a reminder engine.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://befer.co/",
    },
    {
      id: 5,
      title: "Salesforce E-Signature Workflow",
      description:
        "Custom document-signing workflow built and deployed on Salesforce, replacing a third-party e-signature tool.",
      image: "/project-fde.jpg",
      tags: ["backend", "crm"],
      techStack: [{ name: "Salesforce", icon: <SiSalesforce /> }],
      keyFeatures: [
        "Replaced a paid third-party e-signature tool",
        "Built and deployed end to end inside Salesforce",
      ],
      architecture:
        "Native Salesforce workflow for sending, signing and storing documents.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
  ];

  const dealerIQ = projects.find((p) => p.id === 1)!;

  // Filter projects based on active tab. The flagship (DealerIQ) gets its own
  // spotlight above the grid on "All Projects", so it's excluded there to avoid duplication.
  const filteredProjects =
    activeTab === "all"
      ? projects.filter((project) => project.id !== dealerIQ.id)
      : projects.filter((project) => project.tags.includes(activeTab));

  // Tab options
  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "AI/LLM" },
    { id: "cloud", label: "Cloud" },
    { id: "architecture", label: "Architecture" },
    { id: "crm", label: "CRM Systems" },
  ];

  return (
    <section
      id="projects"
      className="section bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-wave-pattern"></div>
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 dark:bg-accent/20 text-accent text-sm font-semibold mb-3">
            PORTFOLIO
          </span>
          <h2 className="section-heading mx-auto">Featured Projects</h2>
          <div className="h-1 w-24 bg-accent mt-6 mb-6 mx-auto relative">
            <div className="absolute -top-[4px] left-[50%] w-3 h-3 bg-accent rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Production AI, cloud and full-stack systems: LangGraph agents,
            serverless event pipelines and multi-tenant SaaS on AWS.
          </p>
        </motion.div>

        {/* Project filter tabs */}
        <div className="flex flex-wrap justify-center mb-12 relative">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full h-full -z-10"></div>
          <div className="flex flex-wrap justify-center p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                aria-pressed={activeTab === tab.id}
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

        {/* Flagship project spotlight */}
        {activeTab === "all" && <FeaturedProject project={dealerIQ} />}

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Backend architect highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden"
        >
          {/* Background pattern with low opacity */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-accent to-purple-500"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg relative z-10">
                  <FiServer aria-hidden="true" className="text-accent text-4xl" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white flex items-center">
                <span>System Architecture Philosophy</span>
                <div className="ml-3 h-px w-16 bg-accent/50"></div>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I design for measured outcomes: profile first, fix the real
                bottleneck, and keep infrastructure cost and reliability in
                view. Services stay modular, queue-decoupled and observable,
                with backups, access control and code review as defaults.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Scalability", "Reliability", "Cost"].map((pillar, i) => (
                  <motion.div
                    key={pillar}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="font-medium text-accent">{pillar}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface StatTileProps {
  icon: React.ReactNode;
  label: string;
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  note: string;
  trend: "up" | "down";
}

// Animated stat tile: counts from `from` to `to` once it scrolls into view.
const StatTile: React.FC<StatTileProps> = ({
  icon,
  label,
  from,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  note,
  trend,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-5 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 text-amber-400">
          <span aria-hidden="true">{icon}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
            {label}
          </span>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
          {prefix}
          {display.toFixed(decimals)}
          {suffix}
        </div>
        <div className="mt-1.5 text-xs font-medium flex items-center gap-1 text-emerald-400">
          <span aria-hidden="true">
            {trend === "down" ? <FiTrendingDown /> : <FiTrendingUp />}
          </span>
          {note}
        </div>
      </div>
    </motion.div>
  );
};

// Flagship project spotlight: 3D tilt card + animated production-impact metrics.
const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  const tilt = useTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <motion.span
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-emerald-400"
        />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
          Flagship Production Platform
        </span>
      </div>

      <motion.div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 shadow-2xl"
      >
        {/* Rotating conic glow border */}
        <motion.div
          className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(59,130,246,0.7) 12%, transparent 24%, transparent 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[1.5px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-black" />

        {/* Background accents */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.04]" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

        <div
          className="relative z-10 p-8 md:p-12"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-semibold">
                  <FiStar aria-hidden="true" size={12} /> Flagship
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-sm text-gray-200"
                  >
                    <span aria-hidden="true" className="text-amber-400">
                      {tech.icon}
                    </span>
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {project.keyFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <FiKey
                      aria-hidden="true"
                      className="text-amber-400 mt-0.5 flex-shrink-0"
                      size={14}
                    />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-accentSolid hover:bg-lightBlue text-white rounded-full font-medium shadow-lg shadow-accentSolid/30"
                >
                  <FiExternalLink aria-hidden="true" /> Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium border border-white/10"
                >
                  <FiGithub aria-hidden="true" /> GitHub
                </motion.a>
              </div>
            </div>

            <div className="lg:w-[380px] flex-shrink-0 grid grid-cols-2 gap-4">
              <StatTile
                icon={<FiUsers />}
                label="Appointments Booked"
                from={0}
                to={6091}
                note="~5 months, one dealer"
                trend="up"
              />
              <StatTile
                icon={<FiZap />}
                label="Events / Month"
                from={0}
                to={32}
                suffix="M"
                note="99.96% queue delivery"
                trend="up"
              />
              <StatTile
                icon={<FiDatabase />}
                label="Primary DB CPU"
                from={38}
                to={15}
                suffix="%"
                note="from ~38%"
                trend="down"
              />
              <StatTile
                icon={<FiDollarSign />}
                label="Cloud Cost Cut"
                from={0}
                to={1100}
                prefix="$"
                suffix="/mo"
                note="infra savings"
                trend="up"
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
            <FiCpu aria-hidden="true" className="text-amber-400 flex-shrink-0" />
            <span>
              LangGraph call &amp; chat agent engaged ~28,100 customers; 52% of
              bookings land after hours
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const tilt = useTilt(4);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0"></div>

      {/* Curved accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-b-full"></div>

      {project.featured && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-accentSolid/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
          <FiStar aria-hidden="true" size={10} /> Flagship
        </div>
      )}

      {/* Project image or placeholder with gradient overlay */}
      <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black flex items-center justify-center relative overflow-hidden">
        {/* Abstract code background */}
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>

        <div className="text-center text-white p-6 z-10 relative">
          {/* Icon with glow effect */}
          <motion.div
            className="relative mb-3"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl"></div>
            <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-full shadow-xl inline-block">
              <FiServer aria-hidden="true" className="text-5xl text-amber-400" />
            </div>
          </motion.div>
          <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <span className="px-2 py-0.5 bg-accent/10 dark:bg-accent/20 text-accent text-xs font-medium rounded-full">
            {project.tags[0].toUpperCase()}
          </span>
          <div className="h-0.5 bg-accent/20 flex-1 ml-3"></div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-5">
          <h4 className="text-sm font-medium text-primary dark:text-white mb-2 flex items-center">
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <span aria-hidden="true" className="mr-2 text-accent">
                  {tech.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div className="mb-5">
          <h4 className="text-sm font-medium text-primary dark:text-white mb-2 flex items-center">
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="flex items-center text-gray-600 dark:text-gray-300 text-sm group"
              >
                <span
                  aria-hidden="true"
                  className="mr-2 p-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
                >
                  <FiKey className="text-accent" size={12} />
                </span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show more details toggle */}
        <button
          className="mt-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-700/50 text-primary dark:text-gray-300 hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent transition-colors w-full flex items-center justify-center group"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
          aria-controls={`architecture-details-${project.id}`}
        >
          <span className="mr-1">
            {showDetails ? "Hide Details" : "Show Architecture"}
          </span>
          <svg
            aria-hidden="true"
            className={`w-4 h-4 transition-transform duration-300 transform ${
              showDetails ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Architecture details */}
        {showDetails && (
          <motion.div
            id={`architecture-details-${project.id}`}
            className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-sm font-medium text-primary dark:text-white mb-3 flex items-center">
              <FiDatabase aria-hidden="true" className="mr-2 text-accent" />
              Architecture Details
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {project.architecture}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project links */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/20 dark:hover:text-accent rounded-full text-gray-600 dark:text-gray-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub aria-hidden="true" size={18} />
          <span className="font-medium">GitHub</span>
        </motion.a>

        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accentSolid/90 hover:bg-accentSolid text-white rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiExternalLink aria-hidden="true" size={18} />
          <span className="font-medium">Live Demo</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects;
