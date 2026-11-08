// All copy, links and image paths live here. Empty image strings render as placeholders.

export const person = {
  name: 'Farhan Khalid',
  tagline: 'Senior Software Engineer · CTO',
  email: 'rj.farhan4232@gmail.com',
  portrait: '/images/portrait.png',
  socials: [
    { label: 'GitHub', href: 'https://github.com/farhankhalidkayani' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farhankhalidkayani/' },
  ],
};

export const nav = [
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/contact' },
];

export const hero = {
  label: 'AI × Cloud × Backend × Leadership',
  line1: 'I Build Backends',
  line2: 'That Think, Scale & Hold.',
  paragraph:
    "I'm Farhan Khalid — a senior software engineer and CTO with 4.5+ years shipping production backend, cloud and AI systems for multi-tenant CRM and automation platforms, from Node.js services to AWS infrastructure and LangGraph agents.",
  status: 'CTO at Hatzs Dimensions',
  chips: ['AI', 'AWS', 'TS', 'SQL', 'CTO'],
};

export const about = {
  label: 'About',
  heading: 'More Than a Backend Engineer. Less Than a Black Box.',
  lead: 'I design and ship the systems behind CRM and AI products — and I stay close enough to the code to know what they actually cost to run.',
  body: 'Highlights so far: a serverless event platform handling ~32M events a month with zero Lambda errors, primary MySQL CPU cut from ~38% to ~15% after ~10x traffic growth, and ~$1,100 a month saved on AWS. As CTO I set architecture standards, run a 14-microservice ECS cluster, and mentor engineers while staying hands-on.',
  steps: [
    { title: 'Understand', text: 'Read the problem before the code.' },
    { title: 'Architect', text: 'Pick boring, scalable parts.' },
    { title: 'Build', text: 'Typed services and clean APIs.' },
    { title: 'Optimize', text: 'Measure, then tune queries and cost.' },
    { title: 'Lead', text: 'Review, mentor, set the roadmap.' },
  ],
  roles: ['AI Engineer', 'Backend Engineer', 'Cloud Architect', 'Technical Lead', 'CTO'],
};

export type VisualKey = 'network' | 'board' | 'wireframe' | 'code' | 'bars';

export const services = [
  {
    id: 'ai',
    number: '01',
    title: 'AI & LLM Systems',
    description:
      'Production LangGraph agents for voice and chat that book appointments, hand off to humans and log everything back to the CRM.',
    tools: ['LangGraph', 'LLMs', 'Voice', 'Chat'],
    visual: 'network' as VisualKey,
    capabilities: [
      'LangGraph agent design',
      'Call and chat channels in one thread',
      'Re-architecture from monolithic prompts',
      'Human handoff and routing',
      'Summaries, transcripts and recordings',
      'Evaluation against real conversations',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend & APIs',
    description:
      'Typed Node.js services, REST APIs and WebSockets for multi-tenant SaaS, modernized toward a clean modular monolith.',
    tools: ['Node.js', 'TypeScript', 'NestJS', 'Drizzle'],
    visual: 'code' as VisualKey,
    capabilities: [
      'TypeScript and NestJS services',
      'REST APIs and WebSockets',
      'JWT and OAuth authentication',
      'Payment, messaging and CRM integrations',
      'Modular-monolith modernization',
      'Multi-tenant data design',
    ],
  },
  {
    id: 'cloud',
    number: '03',
    title: 'Cloud & Infrastructure',
    description:
      'AWS architecture that stays reliable and affordable: ECS, serverless pipelines, networking, backups and CI/CD.',
    tools: ['AWS', 'ECS', 'Lambda', 'SQS'],
    visual: 'board' as VisualKey,
    capabilities: [
      'ECS on EC2 and Fargate',
      'API Gateway, Lambda and SQS pipelines',
      'ALB, VPC and RDS',
      'Automated backups in AWS Backup',
      'CI/CD pipelines',
      'Cost reviews and cleanup',
    ],
  },
  {
    id: 'database',
    number: '04',
    title: 'Database Performance',
    description:
      'Indexes, query rewrites and read replicas that bring CPU and IOPS down while traffic keeps climbing.',
    tools: ['MySQL', 'RDS', 'Performance Insights'],
    visual: 'bars' as VisualKey,
    capabilities: [
      'Slow-query diagnosis',
      'Index design',
      'Read replicas for heavy readers',
      'RDS Performance Insights',
      'Fixing bottlenecks in AI-generated code',
    ],
  },
  {
    id: 'leadership',
    number: '05',
    title: 'Technical Leadership',
    description:
      'Architecture standards, review practices and honest estimates for the people who have to decide.',
    tools: [],
    visual: 'wireframe' as VisualKey,
    capabilities: [
      'Architecture standards and roadmap',
      'Code review and QA practices',
      'Root cause analysis',
      'Estimates, cost and risk for the CEO',
      'Mentoring and technical hiring',
    ],
  },
];

export const tools = [
  'Node.js', 'TypeScript', 'NestJS', 'LangGraph', 'AWS ECS', 'Lambda', 'SQS',
  'MySQL', 'Amazon RDS', 'Drizzle ORM', 'Python', 'Salesforce', 'Stripe', 'Twilio',
];

export const stats = [
  { value: 32, suffix: 'M+', label: 'Events a month' },
  { value: 14, suffix: '', label: 'Production microservices' },
  { value: 6091, suffix: '', label: 'Appointments booked by AI' },
  { value: 4.5, suffix: '+', label: 'Years shipping' },
];

export const process = [
  { title: 'Discover', text: 'Understand the product, the load and what is actually slow or expensive.' },
  { title: 'Architect', text: 'Choose simple, proven components and write down the trade-offs.' },
  { title: 'Build', text: 'Typed services, clear APIs and reviews that catch problems early.' },
  { title: 'Harden', text: 'Backups, monitoring, security and failure paths before launch.' },
  { title: 'Ship', text: 'Deploy through CI/CD with a plan to roll back.' },
  { title: 'Operate', text: 'Watch the numbers, tune queries and cost, keep improving.' },
];

export const philosophy = {
  label: 'How I Think',
  heading: 'Good Systems Are Boring in Production and Fast Where It Counts.',
  principles: [
    { title: 'Measure first.', text: 'Fix the query the profiler points at, not the one that feels slow.' },
    { title: 'Keep it simple.', text: 'A modular monolith beats clever microservices until it does not.' },
    { title: 'Build it to scale.', text: 'Queue-decoupled, observable and cheap enough to run at 10x.' },
  ],
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  discipline: 'AI' | 'Cloud' | 'Backend';
  tag: string;
  year: string;
  title: string;
  description: string;
  summary: string;
  client: string;
  role: string;
  timeline: string;
  challenge: string;
  metrics: { value: string; label: string }[];
  chapters: { title: string; text: string; image: string }[];
  image: string;
  heroImage: string;
  preview: 'pipeline' | 'routing' | 'chart' | 'console';
  live?: string;
  next: string;
};

export const projects: Project[] = [
  {
    slug: 'dealer-iq',
    name: 'DealerIQ AI',
    category: 'CRM · Platform',
    discipline: 'Backend',
    tag: 'CRM + Cloud',
    year: '2023 – Now',
    title: 'Multi-Tenant Automotive CRM',
    description:
      'Leads, bookings, AI voice and chat agents, a power dialer and eSign on ECS and MySQL, with a serverless event platform behind it.',
    summary:
      'A multi-tenant automotive CRM that outgrew its original backend. I helped modernize it toward a TypeScript modular monolith and kept production fast through ~10x traffic growth.',
    client: 'Hatzs Dimensions',
    role: 'Backend · Architecture · CTO',
    timeline: 'Ongoing',
    challenge:
      'A large JavaScript backend with AI-generated code was hitting database bottlenecks as traffic grew roughly tenfold. It needed to stay fast and affordable while the product kept shipping.',
    metrics: [
      { value: '14', label: 'Microservices on ECS' },
      { value: '~38→15%', label: 'Primary MySQL CPU' },
      { value: '-90%', label: 'Read IOPS' },
      { value: '~32M', label: 'Events a month' },
    ],
    chapters: [
      { title: 'A cluster that runs the whole product', text: '14 microservices — 12 on EC2 and 2 on Fargate — behind an ALB in a VPC, serving the CRM, AI agents, power dialer and eSign.', image: '' },
      { title: 'Fixing the database, not the symptoms', text: 'Missing indexes and slow queries were rewritten, and IQ chat reads moved to a dedicated read replica.', image: '' },
      { title: 'Toward a modular monolith', text: 'The JavaScript backend is being modernized into TypeScript with Drizzle ORM. Integrations include Salesforce, Stripe, Twilio, SendGrid and Google Calendar.', image: '' },
    ],
    image: '/images/dealeriq.png',
    heroImage: '/images/dealeriq.png',
    preview: 'console',
    live: 'https://www.dealeriq.ai/',
    next: 'call-chat-agent',
  },
  {
    slug: 'call-chat-agent',
    name: 'Call & Chat Agent',
    category: 'AI · LangGraph',
    discipline: 'AI',
    tag: 'AI',
    year: 'Production',
    title: 'LangGraph Booking Agent',
    description:
      'An AI agent that books appointments 24/7 over SMS, Messenger, Instagram and phone, and logs everything to the CRM.',
    summary:
      'Dealers missed leads outside business hours. I helped re-architect the agent onto LangGraph so it answers every inbound call and books appointments around the clock.',
    client: 'DealerIQ AI',
    role: 'AI Engineering · Backend',
    timeline: 'Ongoing',
    challenge:
      'A monolithic prompt made the agent hard to extend and hard to trust. It had to handle voice and messaging in one thread and hand off cleanly to people.',
    metrics: [
      { value: '6,091', label: 'Appointments booked' },
      { value: '~28.1k', label: 'Customers engaged' },
      { value: '52%', label: 'Bookings after hours' },
      { value: '82%', label: 'Outbound contacts reached' },
    ],
    chapters: [
      { title: 'From one prompt to a graph', text: 'The monolithic prompt was re-architected onto LangGraph, giving each step a clear role.', image: '' },
      { title: 'One thread across every channel', text: 'SMS, Messenger, Instagram and phone feed a single CRM thread, with summaries, transcripts and recordings stored per lead.', image: '' },
      { title: 'Humans where they matter', text: '90% of bookings are routed straight to human agents, so the AI handles the hours nobody covers.', image: '' },
    ],
    image: '/images/dealeriq.png',
    heroImage: '/images/dealeriq.png',
    preview: 'routing',
    next: 'event-platform',
  },
  {
    slug: 'event-platform',
    name: 'Event Platform',
    category: 'Cloud · Serverless',
    discipline: 'Cloud',
    tag: 'Cloud',
    year: 'Production',
    title: 'Serverless Event Pipeline',
    description:
      'Ingestion and dispatch for ~32M events a month with zero Lambda errors and 99.96% queue delivery.',
    summary:
      'The platform needed to take in a steady flood of events and fan them out reliably. I designed a queue-decoupled serverless pipeline that stays fast and nearly free of errors.',
    client: 'DealerIQ AI',
    role: 'Cloud Architecture · Backend',
    timeline: '30-day measured window',
    challenge:
      'Events from the product had to be authorized, buffered and delivered over several channels without coupling the producers to the consumers.',
    metrics: [
      { value: '~7 ms', label: 'Average auth' },
      { value: '~15 ms', label: 'Average ingestion' },
      { value: '~71 ms', label: 'Average dispatch' },
      { value: '99.96%', label: 'Queue delivery' },
    ],
    chapters: [
      { title: 'Authorize at the edge', text: 'API Gateway with a Lambda authorizer rejects bad requests before they cost anything.', image: '' },
      { title: 'Buffer in SQS', text: 'Ingestion writes to SQS, so spikes of about 115 concurrent requests never reach consumers directly.', image: '' },
      { title: 'Fan out through a dispatcher', text: 'A dispatcher delivers over WebSocket, HTTP and SES with zero Lambda errors across 30 days.', image: '' },
    ],
    image: '',
    heroImage: '',
    preview: 'pipeline',
    next: 'befer',
  },
  {
    slug: 'befer',
    name: 'Befer AI',
    category: 'CRM · Migration',
    discipline: 'Backend',
    tag: 'AI + CRM',
    year: '2022 – 2023',
    title: 'AI-Powered CRM Backend',
    description:
      'A CRM moved from Bubble.io to a custom Node.js and MySQL backend, with AI voice calling, calendar sync and subscriptions.',
    summary:
      'Befer outgrew Bubble.io. I built backend modules on a custom Node.js and MySQL stack as the product moved over.',
    client: 'Hatzs Dimensions',
    role: 'Backend Engineering',
    timeline: 'Apr 2022 – May 2023',
    challenge:
      'The product was running on a no-code platform and needed a backend it could own — with real authentication, billing and integrations.',
    metrics: [
      { value: '1', label: 'Platform migrated' },
      { value: 'JWT + OAuth', label: 'Authentication' },
      { value: 'Stripe', label: 'Subscriptions' },
      { value: 'Voice', label: 'AI calling' },
    ],
    chapters: [
      { title: 'Off Bubble, onto Node.js', text: 'Backend modules were rebuilt on a Node.js and MySQL stack that the team controls.', image: '' },
      { title: 'Auth, billing and calendars', text: 'JWT and Google OAuth sign-in, Stripe subscriptions and Google Calendar sync.', image: '' },
      { title: 'Proactive engagement', text: 'SendGrid and Twilio notifications and a reminder engine drive customer follow-ups, alongside AI voice calling.', image: '' },
    ],
    image: '/images/befer.png',
    heroImage: '/images/befer.png',
    preview: 'chart',
    live: 'https://befer.co/',
    next: 'dealer-iq',
  },
];

export const disciplines = ['AI', 'Cloud', 'Backend'] as const;

export const contact = {
  label: 'Contact',
  heading: 'Have a Problem Worth Solving?',
  intro:
    "Tell me about the system, the problem and the timeline. I'll reply honestly about whether I'm the right person for it.",
  title: "Let's Build Something Worth Running.",
  availability: 'Open to opportunities',
  availabilityNote: 'Reach out about roles, consulting or collaboration.',
  facts: [
    { icon: 'mail', text: person.email },
    { icon: 'briefcase', text: 'CTO at Hatzs Dimensions' },
    { icon: 'layers', text: 'Node.js · TypeScript · AWS · LangGraph' },
  ],
  faqs: [
    { q: 'What do you work on?', a: 'Backend services, AWS infrastructure, database performance and production AI agents.' },
    { q: 'Can you work with an existing team?', a: 'Yes. Most of my work is inside an existing codebase and team.' },
    { q: 'How should I reach out?', a: 'Use the form or email directly with a short description of the problem.' },
  ],
  topics: ['Role / opportunity', 'Consulting', 'AI & LLM systems', 'Cloud & infrastructure', 'Something else'],
};

export const closing = {
  home: { title: "Not sure what you need? That's a good first conversation.", cta: "Let's Talk" },
  work: { title: 'Your system could be the next case study.', cta: 'Start a Conversation' },
  case: { title: 'Have something similar in mind?', cta: "Let's Talk" },
};
