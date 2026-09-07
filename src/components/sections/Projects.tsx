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
  SiExpress,
  SiFastify,
  SiMysql,
  SiPython,
  SiFastapi,
  SiSalesforce,
  SiOpenai,
} from "react-icons/si";

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
        "Multi-tenant automotive CRM integrating AI voice, chat, and messaging workflows. Processes ~400 incoming leads per day per client with automated AI engagement across calls, SMS, email, and social channels—backed by an AI chat service that has processed 100M+ LLM tokens in production.",
      image: "/project-dealer-ai.jpg",
      tags: ["backend", "crm", "api", "architecture", "ai"],
      featured: true,
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Fastify", icon: <SiFastify /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "OpenAI", icon: <SiOpenai /> },
      ],
      keyFeatures: [
        "IQ Chat: unified thread from Instagram, Messenger, SMS, Email",
        "Refactored a 100+ page monolithic AI prompt into a modular LangGraph agent architecture",
        "RBAC, audit trails, e-sign document builder, workflow automation",
        "Redis caching; WebSockets for real-time notifications",
        "Integrations: Salesforce, Stripe, Twilio, SendGrid, Meta, OpenAI, KBB, CarGurus, Carfax",
      ],
      architecture:
        "Layered design: Routes → Controllers → Services → Repositories → Validators. Optimized a production chat query from ~45s to ~3s and reduced database CPU utilization from ~99.9% to ~20% using AWS RDS Performance Insights. Audited AWS infrastructure and cut cloud costs by ~$1,100/month. Contributing to refactoring with queues, event-driven architecture, and microservices.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://www.dealeriq.ai/",
    },
    {
      id: 2,
      title: "Befer AI",
      description:
        "Business management platform with backend APIs supporting bookings, leads, orders, payments, and marketing automation. 60+ service modules with extensive integrations including Stripe, QuickBooks, Google APIs, and OpenAI.",
      image: "/project-befer-crm.jpg",
      tags: ["backend", "crm", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      keyFeatures: [
        "Bookings, leads, orders, payments, marketing automation",
        "Stripe, QuickBooks, Google APIs, OpenAI integrations",
        "60+ service modules",
        "OAuth & JWT authentication",
      ],
      architecture:
        "Modular backend with RESTful APIs, validation, and error handling. Database schema optimized for businesses, customers, and services.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "https://befer.co/",
    },
    {
      id: 3,
      title: "Social Bear AI (MVP)",
      description:
        "FastAPI backend for social media automation: Instagram and Facebook messaging, automated AI replies, and comment moderation.",
      image: "/project-befer-mobile.jpg",
      tags: ["backend", "api"],
      techStack: [
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ],
      keyFeatures: [
        "Instagram & Facebook message handling",
        "Automated AI replies",
        "Comment moderation",
      ],
      architecture:
        "FastAPI-based backend for social media automation and AI-driven engagement.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 4,
      title: "Social Hub AI (MVP)",
      description:
        "Backend system for email and SMS marketing campaigns with audience targeting and automated messaging workflows.",
      image: "/project-befer-mobile.jpg",
      tags: ["backend", "api"],
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      keyFeatures: [
        "Email and SMS marketing campaigns",
        "Audience targeting",
        "Automated messaging workflows",
      ],
      architecture:
        "Backend services for campaign management and multi-channel messaging.",
      github: "https://github.com/farhankhalidkayani",
      liveDemo: "#",
    },
    {
      id: 5,
      title: "Forward Deployed Engineering & Solution Architecture",
      description:
        "Embedded, client-facing engineering work as a technical SME across presales and discovery calls—translating business requirements directly into CRM, AI, and integration architectures for prospective clients.",
      image: "/project-fde.jpg",
      tags: ["consulting", "architecture", "fde", "ai"],
      techStack: [
        { name: "Salesforce", icon: <SiSalesforce /> },
        { name: "OpenAI", icon: <SiOpenai /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
      ],
      keyFeatures: [
        "Act as technical SME on presales/discovery calls across automotive, real estate, and healthcare verticals",
        "Designed a hybrid front-desk architecture combining a video kiosk, remote agent, AI automation, and EMR integration for a healthcare client, with HIPAA considerations",
        "Scope integration feasibility (CRM, EMR, communications) and translate business requirements into technical solution designs",
        "Bridge sales and engineering—prototyping proofs-of-concept to validate architecture decisions before implementation",
      ],
      architecture:
        "Works directly with clients and product stakeholders to embed engineering judgment into early-stage deal cycles—evaluating existing systems, scoping third-party integrations, and designing solutions that satisfy both technical and compliance constraints ahead of a build commitment.",
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
    { id: "api", label: "API" },
    { id: "architecture", label: "Architecture" },
    { id: "crm", label: "CRM Systems" },
    { id: "fde", label: "Forward Deployed" },
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
            My projects showcase production experience building AI/LLM-powered
            platforms, full-stack applications, and integration-heavy SaaS
            architectures.
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
                My approach to backend development centers on creating
                maintainable, scalable systems with clean code principles. I
                focus on modular architecture, thorough documentation, and
                comprehensive testing to ensure robustness. Each project is
                built with future scaling in mind, implementing best practices
                for security, performance, and reliability.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Scalability", "Security", "Performance"].map((pillar, i) => (
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
                icon={<FiZap />}
                label="Chat Latency"
                from={45}
                to={3}
                suffix="s"
                note="from ~45s"
                trend="down"
              />
              <StatTile
                icon={<FiDatabase />}
                label="DB CPU Load"
                from={99}
                to={20}
                suffix="%"
                note="from ~99.9%"
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
              <StatTile
                icon={<FiUsers />}
                label="Leads / Day"
                from={0}
                to={400}
                suffix="+"
                note="per client"
                trend="up"
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-gray-400">
            <FiCpu aria-hidden="true" className="text-amber-400 flex-shrink-0" />
            <span>
              100M+ LLM tokens processed in production via an OpenAI +
              LangGraph agent architecture
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
