export const profile = {
  name: "Saroj Devkota",
  role: "Full Stack Developer",
  roleSub: "Python / Django",
  location: "Chabahil, Kathmandu, Nepal",
  email: "sarojdevkota521@gmail.com",
  phone: "+977 9768994772",
  github: "https://github.com/sarojdevkota521-s",
  githubLabel: "github.com/sarojdevkota521-s",
  linkedin: "https://www.linkedin.com/in/saroj-devkota-9348aa33b/",
  linkedinLabel: "linkedin.com/in/saroj-devkota-9348aa33b",
  summary:
    "Full Stack Developer with 5+ months of production experience building Django REST APIs, multi-tenant SaaS platforms, and AI-driven automation workflows (n8n, MCP). Delivered 5 production systems covering payment integration, role-based access control, Redis/Celery performance optimization, and Docker deployment. Strong cross-functional understanding of business operations from direct startup exposure.",
  // Career start used to compute a live "uptime" counter. Chaitra 2082 BS ≈ mid-March 2026 AD.
  careerStart: "2026-03-14T00:00:00+05:45",
  resumeHref: "/Saroj_Devkota_CV.pdf",
};

export const skillGroups = [
  {
    label: "Languages",
    tag: "lang",
    items: ["Python", "JavaScript"],
  },
  {
    label: "Backend",
    tag: "backend",
    items: ["Django", "Django REST Framework", "MVT Architecture", "RESTful API Design"],
  },
  {
    label: "Frontend",
    tag: "frontend",
    items: ["Next.js", "React (basic)", "HTML", "CSS"],
  },
  {
    label: "Databases & Caching",
    tag: "data",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "DevOps & Tools",
    tag: "devops",
    items: ["Docker", "Dokploy", "Git", "GitHub", "Postman"],
  },
  {
    label: "Integrations",
    tag: "integrations",
    items: [
      "JWT Auth",
      "RBAC",
      "eSewa Payment Gateway",
      "n8n Automation",
      "MCP (Model Context Protocol)",
      "Celery",
      "QZ Tray",
      "Web Scraping (BeautifulSoup)",
    ],
  },
  {
    label: "Other",
    tag: "other",
    items: ["Multi-tenant SaaS Architecture", "SEO Optimization", "Software Testing", "Debugging"],
  },
] as const;

export type Project = {
  id: string;
  name: string;
  status: "live" | "internal" | "archived";
  period: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "himalayan-frequency",
    name: "Himalayan Frequency",
    status: "live",
    period: "AIOT Unitech",
    role: "Event-listening full-stack platform",
    stack: ["Django", "PostgreSQL", "Redis", "Celery", "eSewa"],
    summary:
      "Full-stack event-listening platform with integrated payments, SEO-friendly architecture, and role-based dashboards for four distinct user types.",
    highlights: [
      "Integrated online payment gateway for ticketing and transactions",
      "SEO-friendly architecture across public-facing pages",
      "Role-based access control across 4 separate dashboards",
      "Redis + Celery for asynchronous task processing and performance",
    ],
  },
  {
    id: "jobryn",
    name: "Jobryn",
    status: "live",
    period: "AIOT Unitech",
    role: "AI-based job management platform",
    stack: ["Django", "DRF", "MCP", "n8n", "PostgreSQL", "Redis"],
    summary:
      "AI-driven job management platform with an MCP server wired into a multi-agent n8n workflow to automate end-user communication end-to-end.",
    highlights: [
      "Designed and maintained backend architecture on Django REST Framework",
      "Built an MCP server connected to a multi-agent n8n workflow",
      "Automated end-user communication through the agent workflow",
      "Role-based permissions for 3 user types on a PostgreSQL + Redis server",
    ],
  },
  {
    id: "hostel-saas",
    name: "Hostel Booking System",
    status: "live",
    period: "AIOT Unitech",
    role: "Multi-tenant SaaS booking platform",
    stack: ["Django", "Next.js", "PostgreSQL"],
    summary:
      "SaaS booking platform serving multiple independent hostels, each with its own dashboard and access-controlled staff roles.",
    highlights: [
      "Django backend paired with a Next.js frontend",
      "Multi-tenant SaaS design supporting multiple hostels on one platform",
      "Per-hostel dashboards with role-based access for different staff",
      "API and MCP endpoint testing for reliability",
    ],
  },
  {
    id: "restaurant-erp",
    name: "Restaurant Management ERP",
    status: "live",
    period: "AIOT Unitech",
    role: "End-to-end restaurant operations system",
    stack: ["Django", "PostgreSQL", "QZ Tray"],
    summary:
      "Full restaurant operations ERP: POS, kitchen, inventory, procurement, HR, and finance, with visual dashboards and hardware print integration.",
    highlights: [
      "Modules for POS, order & kitchen (KOT), inventory, assets, procurement, HRMS, and finance",
      "QZ Tray integration for direct KOT and receipt printing",
      "Branch- and fiscal-year-based advanced reporting",
      "Configurable app settings so each restaurant can tune the system to its needs",
    ],
  },
  {
    id: "trial-management",
    name: "Trial Management System",
    status: "archived",
    period: "Pre-internship project",
    role: "Backend for managing trial records",
    stack: ["Django", "PostgreSQL", "eSewa", "Render"],
    summary:
      "Secure backend for managing trial records and user data with accurate filtering, RBAC, and an integrated payment gateway.",
    highlights: [
      "Role-based access control and secure authentication",
      "Accurate, secure data filtering system",
      "eSewa payment gateway integration",
      "Deployed to production on Render",
    ],
  },
  {
    id: "news-portal",
    name: "News Portal",
    status: "archived",
    period: "Pre-internship project",
    role: "Full-stack news publishing platform",
    stack: ["Django", "DRF", "JWT", "PostgreSQL", "BeautifulSoup"],
    summary:
      "Full-stack news platform with automated content scraping, live view tracking, and a tested REST API layer.",
    highlights: [
      "Automated content scraping with BeautifulSoup",
      "View-count tracking and breaking-news display",
      "JWT-authenticated REST API, tested end-to-end with Postman",
    ],
  },
];

export type LogEntry = {
  hash: string;
  date: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
};

export const experienceLog: LogEntry[] = [
  {
    hash: "a3f9c2",
    date: "Mar 2026 — Present",
    title: "Full Stack Developer (Python / Django)",
    org: "AIOT Unitech Pvt. Ltd.",
    body: "Delivered 5 production-grade systems within 5 months, spanning event ticketing, AI-based job management, SaaS hostel booking, and restaurant ERP domains. Deployed and managed every application via Docker/Dokploy on production servers, using exclusively free and open-source AI tooling. Gained cross-departmental operational knowledge — HR, finance, procurement, operations — through direct exposure to how a startup runs.",
    tags: ["Django", "DRF", "Docker", "Dokploy", "Redis", "Celery", "n8n", "MCP"],
  },
  {
    hash: "7e1d4b",
    date: "Prior to internship",
    title: "Trial Management System",
    org: "Independent project",
    body: "Built a secure backend for managing trial records with role-based access control, accurate data filtering, integrated eSewa payment gateway, and deployment on Render.",
    tags: ["Django", "PostgreSQL", "eSewa", "Render"],
  },
  {
    hash: "2c6a08",
    date: "Prior to internship",
    title: "News Portal",
    org: "Independent project",
    body: "Developed a full-stack news platform with automated content scraping, view-count tracking, breaking news display, and Postman-tested APIs.",
    tags: ["Django", "DRF", "JWT", "PostgreSQL"],
  },
];

export const education = {
  degree: "Bachelor of Information Management (BIM)",
  school: "Nepal Commerce Campus, Tribhuvan University",
  period: "2022 – Present (7th Semester)",
  detail: "Avg. GPA: 3.6",
};

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#stack", label: "Stack" },
  { href: "#deployments", label: "Deployments" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
