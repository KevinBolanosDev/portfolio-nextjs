/**
 * Overlay de contenido largo (bio, nodos del workflow, experiencia,
 * proyectos) para inglés. El español vive en los archivos de datos
 * originales (`lib/data/*`), que son la fuente de verdad — este
 * módulo solo reemplaza los campos de texto cuando el locale es "en".
 * @module lib/i18n/content
 */

import {
  certifications as esCertifications,
  education as esEducation,
  workExperience as esWorkExperience,
} from "@/lib/data/education";
import { profile as esProfile, siteConfig as esSiteConfig } from "@/lib/data/profile";
import {
  professionalProjects as esProfessionalProjects,
  projects as esProjects,
} from "@/lib/data/projectsData";
import {
  completeStep as esCompleteStep,
  startNode as esStartNode,
  workflowSections as esWorkflowSections,
} from "@/lib/data/workflowNodes";

const enProfileText = {
  bio: {
    short:
      "Full stack developer passionate about building innovative digital solutions.",
    paragraphs: [
      "Full stack developer focused on building modern, scalable web applications centered on the user experience.",
      "I have experience working with React.js and Next.js, using tools like TailwindCSS and Shadcn to build efficient, maintainable interfaces. I also work with JavaScript and TypeScript, which lets me build robust, well-structured solutions.",
      "I round out my profile as a backend developer using Node.js and NestJS, building APIs and CRUD systems, along with solid SQL and NoSQL database work using PostgreSQL and MongoDB with Prisma. I also have experience with Docker and services like Supabase for cloud database environments.",
      "I also know how to deploy web applications to production, staging, or testing environments using services like Netlify, Vercel, Railway, and Render, making sure applications stay accessible and reliable for end users.",
      "I'm proactive, disciplined, resilient, and problem-solving oriented, always learning to sharpen my skills and add value to every project.",
    ],
  },
};

const enSiteConfigText = {
  description:
    "Kevin Bolaños' portfolio - Full Stack Developer specialized in React, Node.js, and modern web technologies.",
};

export function getProfile(locale) {
  if (locale !== "en") return esProfile;
  return { ...esProfile, bio: { ...esProfile.bio, ...enProfileText.bio } };
}

export function getSiteConfig(locale) {
  if (locale !== "en") return esSiteConfig;
  return { ...esSiteConfig, ...enSiteConfigText };
}

const enStartNodeText = {
  description:
    "Welcome to my interactive portfolio. Run the workflow and discover each section like an automation pipeline: node by node, just like I work with AI agents.",
};

const enWorkflowSectionsText = {
  about: {
    title: "About me",
    summary:
      "Full stack developer from Candelaria, Valle del Cauca, Colombia, passionate about building innovative digital solutions with a proactive, always-learning mindset.",
    logs: [
      "Initializing about-me module…",
      "Loading professional profile…",
      "Compiling career history…",
    ],
  },
  skills: {
    title: "Skills & Experience",
    summary:
      "Modern web development stack: frontend with React and Next.js, backend with Node.js, and real experience building products end to end.",
    logs: [
      "Scanning tech stack…",
      "Indexing frontend and backend…",
      "Validating experience…",
    ],
  },
  projects: {
    title: "Projects",
    summary:
      "Professional and personal projects: SaaS platforms, full web applications, and experiments with cutting-edge technologies.",
    logs: [
      "Deploying repositories…",
      "Building project gallery…",
      "Generating previews…",
    ],
  },
  contact: {
    title: "Contact",
    summary:
      "Have a project in mind or looking for a developer for your team? Let's talk: direct form, social links, and current availability.",
    logs: [
      "Opening communication channel…",
      "Checking availability…",
      "Ready to connect…",
    ],
  },
};

const enCompleteStepText = {
  title: "Workflow completed",
  logs: ["Closing pipeline…", "Generating summary…"],
};

export function getStartNode(locale) {
  if (locale !== "en") return esStartNode;
  return { ...esStartNode, ...enStartNodeText };
}

export function getWorkflowSections(locale) {
  if (locale !== "en") return esWorkflowSections;
  return esWorkflowSections.map((section) => ({
    ...section,
    ...enWorkflowSectionsText[section.id],
  }));
}

export function getCompleteStep(locale) {
  if (locale !== "en") return esCompleteStep;
  return { ...esCompleteStep, ...enCompleteStepText };
}

/** Igual que lib/data/workflowNodes#getStepConfig pero locale-aware. */
export function getLocalizedStepConfig(locale, stepIndex) {
  const sections = getWorkflowSections(locale);
  return stepIndex < sections.length
    ? sections[stepIndex]
    : getCompleteStep(locale);
}

const enEducationText = {
  1: {
    title: "Full Stack JavaScript MERN Bootcamp",
    description:
      "End-to-end web application development using MongoDB, Express, React, and Node.js.",
  },
  2: {
    title: "Digital Talent Bootcamp - Soft Skills",
    description:
      "Development of soft skills and competencies for the tech workplace.",
  },
};

const enCertificationsText = {
  1: { title: "AI Course Certificate 2026" },
  2: { title: "Building a Landing Page with WordPress" },
  3: { title: "Version Control" },
  4: { title: "Introduction to Front-End Development" },
  5: { title: "Cybersecurity Fundamentals" },
  6: { title: "Web Development Fundamentals: Full Stack or Front-end" },
};

const enWorkExperienceText = {
  1: {
    title: "Frontend Developer",
    description:
      "Frontend development for two SaaS platforms in the insurance industry, Aria InsurTech and AriaDesk, from component architecture to API and third-party service integrations.",
    projects: [
      {
        name: "Aria InsurTech",
        achievements: [
          "Admin control center with 26+ modules (agents, campaigns, lead distribution) built on React 19 and Next.js 16 App Router",
          "Lead marketplace with an interactive US map and real-time updates via WebSocket",
          "Three-tier state management (TanStack Query, Redux Toolkit, Zustand) while keeping performance optimal",
          "Custom design system with strict brand tokens, enforced through linting and documentation",
        ],
      },
      {
        name: "AriaDesk",
        achievements: [
          "Multi-step case creation flow with dual client/server validation (React Hook Form + Zod)",
          "Gmail and Google Calendar integration for email campaigns and appointment management",
          "Multi-tenant support and internationalization (English/Spanish) with i18next",
          "Centralized dashboard with KPIs and real-time analytics for agent portfolio management",
        ],
      },
    ],
  },
};

export function getEducation(locale) {
  if (locale !== "en") return esEducation;
  return esEducation.map((item) => ({
    ...item,
    ...enEducationText[item.id],
  }));
}

export function getCertifications(locale) {
  if (locale !== "en") return esCertifications;
  return esCertifications.map((item) => ({
    ...item,
    ...enCertificationsText[item.id],
  }));
}

export function getWorkExperience(locale) {
  if (locale !== "en") return esWorkExperience;
  return esWorkExperience.map((item) => ({
    ...item,
    ...enWorkExperienceText[item.id],
  }));
}

/** Aplica un overlay de galería (title/description) por índice, preservando el resto. */
function mergeGallery(gallery, overlay) {
  if (!gallery || !overlay) return gallery;
  return gallery.map((item, index) => ({ ...item, ...overlay[index] }));
}

const enProfessionalProjectsText = {
  1: {
    title: "Aria InsurTech",
    description:
      "Aria InsurTech is a large-scale enterprise SaaS platform for end-to-end insurance lead management, built with React 19 and Next.js 16 (App Router). The system covers the full lifecycle of buying, selling, distributing, and managing leads across the commercial and life insurance sectors, with an integrated marketplace, financial analytics, a rewards/gamification engine, and an affiliate partner program.",
    gallery: [
      {
        title: "Main Dashboard",
        description:
          "Admin control panel with real-time metrics, agent management, and centralized financial tracking.",
      },
      {
        description:
          "SaaS portal for agents with underwriting tools, subscription products, and SSO access to AriaDesk.",
      },
      {
        description:
          "Gamification system with a rewards catalog, activity-based point accrual, and SWAG order tracking.",
      },
      {
        description:
          "Self-paced course platform with video resources, bootcamp modules, and agent certification.",
      },
      {
        title: "Lead Marketplace",
        description:
          "Marketplace with an interactive US map, state/county filters, mailing campaigns, and a real-time WebSocket-powered Lead Packs system.",
      },
    ],
    documentation: {
      overview:
        "Aria InsurTech is a large-scale enterprise SaaS platform for end-to-end insurance lead management, built with React 19 and Next.js 16 (App Router). The system covers the full lifecycle of buying, selling, distributing, and managing leads across the commercial and life insurance sectors, with an integrated marketplace, financial analytics, a rewards/gamification engine, and an affiliate partner program.",
      features: [
        "Role-based authentication system (Admin/Agent) with JWT middleware, automatic token refresh, and route protection",
        "Admin control center with 26+ management modules, including agent management, campaign management, lead pack distribution, and financial oversight",
        "Leading marketplace with an interactive US availability map, lead type (mailed, marketplace, digital, lead packs), and tier (gold/silver)",
        "SaaS product marketplace with subscription management, promo codes, discount codes, and a complete checkout flow",
        "Lead management by category (Mailed, Marketplace, Digital, Lead Packs)",
        "Agent dashboard with personalized KPIs, a wallet/credits system, shopping cart, and order management",
      ],
      techStack:
        "Frontend built with React 19 / Next.js 16 (App Router) and Shadcn/ui + Radix UI with TailwindCSS for a modern, component-based UI. State management via TanStack React Query (server state), Redux Toolkit + Persist (global client state), and Zustand (isolated feature stores). Data visualization with Recharts. Animations via Motion (Framer Motion). Drag and drop with @dnd-kit. PDF generation with @react-pdf/renderer + pdf-lib. Deployed with Docker, containerized for production environments.",
      challenges:
        "Building a scalable, multi-feature platform with 26+ admin modules and 12+ agent modules, each with distinct data flows and permissions. Managing complex state across three different state management solutions (React Query, Redux, Zustand) while keeping performance optimal. Implementing a custom design system with strict brand tokens (no hardcoded hex values) and curated gradient/color rules, all enforced through linting and documentation. Supporting real-time financial analytics.",
    },
  },
  2: {
    title: "AriaDesk",
    description:
      "Comprehensive insurance agency management platform with centralized control over portfolio, cases, campaigns, and real-time analytics. Integrated with Gmail and Google Calendar.",
    gallery: [
      {
        title: "Google Authentication",
        description:
          "Secure login system with integrated SSO for quick platform access.",
      },
      {
        title: "Main Dashboard",
        description:
          "Centralized panel with KPIs, real-time analytics, and quick access to core tools.",
      },
      {
        title: "Case Management",
        description:
          "Multi-step flow for case creation and tracking with real-time validation.",
      },
      {
        title: "Insurance Portfolio",
        description:
          "Centralized view of clients, active policies, and relationship management.",
      },
      {
        title: "Email Campaigns",
        description:
          "Campaign creation and scheduling with direct Gmail integration.",
      },
      {
        title: "Tools & Chat",
        description:
          "Quick access to tools, an intelligent Wizard Chat, and a support center.",
      },
    ],
    documentation: {
      overview:
        "AriaDesk is a SaaS platform designed for insurance agents, centralizing their entire business management. It supports managing client portfolios, complex cases, marketing campaigns, performance analytics, and integration with external tools.",
      features: [
        "Centralized insurance portfolio management (Book of Business)",
        "Multi-step case creation flow with validation",
        "Email campaigns integrated with Gmail",
        "Dashboard with real-time analytics and KPIs",
        "Multi-carrier support with unified management",
        "Google Calendar integration for appointments and reminders",
        "Permissions system and user management",
        "Fully responsive design (desktop and mobile)",
        "Internationalization (English/Spanish)",
      ],
      techStack:
        "Next.js 15 with App Router, React 19, Redux Toolkit for global state, React Hook Form + Zod for validation, TailwindCSS v4, i18next for multi-language support. Integrated with REST APIs and Google Services.",
      challenges:
        "Designing complex multi-step flows with draft persistence, dual client/server validation, seamless integration with Gmail and Google Calendar, and multi-tenant support with JWT-based headers.",
    },
  },
  4: {
    description:
      "AI-OS is a platform that turns a text prompt into a fully functional Next.js application end to end: an LLM agent pipeline (LangChain + LangGraph) plans, generates files, installs dependencies, verifies the build, and serves a live preview inside a real Docker sandbox — all streamed in real time to an IDE-style cockpit with an execution graph, editor, terminal, and per-agent chat.",
    gallery: [
      {
        title: "Orchestration Graph (DAG)",
        description:
          "Interactive visualization of the connected agent pipeline (@xyflow/react), with live states — idle, thinking, executing, done, error — streamed over WebSocket.",
      },
      {
        title: "Agents View",
        description:
          "Agent creation wizard with templates, LLM model/provider selection, and spec levels (system/balanced/free) to control autonomy.",
      },
      {
        title: "Tools and Sandbox",
        description:
          "Panel of executable tools and MCPs, with a real Docker container sandbox (dockerode) and OAuth integrations for publishing to GitHub.",
      },
      {
        title: "Completed Run with Auto-Verification",
        description:
          "Result of a finished run: automatic build verification and a self-correction loop that reconciles missing dependencies without manual intervention.",
      },
      {
        title: "IDE Shell + Chat Dock",
        description:
          "IDE-style cockpit with file explorer, Monaco editor, xterm.js terminal, and a ChatDock with a persistent per-agent transcript, detachable into its own window.",
      },
      {
        title: "Result: App Generated from a Prompt",
        description:
          "Live preview of a complete Next.js application, generated end to end by the agent pipeline from a single prompt.",
      },
      {
        title: "Result: Generated App — Additional View",
        description:
          "Another view of the generated application, showing a functional, navigable interface ready to use, with no manual editing afterward.",
      },
    ],
    documentation: {
      overview:
        "AI-OS is an agentic system that takes a text prompt and produces a fully running Next.js application end to end: an LLM generates a structured plan, an agent pipeline writes files to disk, installs dependencies, verifies the build, and serves a live preview — all streamed in real time to a web cockpit through a Zod-validated WebSocket event bus.",
      features: [
        "Agent pipeline orchestrated with LangGraph + LangChain (planner → file generator → verifier → self-correction loop) on top of Claude, with multi-provider support (OpenAI, DeepSeek) configurable per user.",
        "Real-time event bus over WebSocket with a shared Zod schema (`AgentEvent`, 18 types) between the Fastify backend and the Next.js cockpit: agent states, logs, tool calls, and file progress.",
        "Interactive execution graph (@xyflow/react) that visualizes the connected agent DAG, with automatic build verification and an auto-fix loop on failures.",
        "Real Docker container sandbox (dockerode) to install dependencies, build, and serve a live preview of the generated app, with automatic reconciliation of missing dependencies detected via import parsing.",
        "Multi-tenant authentication with NextAuth.js (Auth.js v5) and a JWT bridge to Fastify, with per-user project and event isolation.",
        "Custom IDE shell: Monaco editor, xterm.js terminal, file explorer, and a ChatDock with a persistent per-agent transcript, detachable into a standalone window, animated with GSAP.",
      ],
      techStack:
        "Frontend with React 19 and Next.js 16 (App Router), Tailwind CSS 4 and Radix UI with custom components (class-variance-authority), Zustand for client state, Recharts for metrics, GSAP and Framer Motion for animation, and Monaco Editor + xterm.js + @xyflow/react embedded for the IDE shell. Backend with Fastify and WebSocket, Prisma over PostgreSQL, Redis (ioredis) for state/queues, LangChain + LangGraph orchestrating calls to Anthropic Claude (and alternative providers), Zod validating the end-to-end event contract, and Dockerode for container sandboxing. Monorepo with pnpm workspaces + Turborepo and a shared `@aios/shared` package.",
      challenges:
        "Designing a single, typed event bus (Zod discriminated union) to serve as the contract between an asynchronous agent backend and a real-time React cockpit, without state desync. Orchestrating multiple LLM agents with different autonomy levels (spec levels) without drifting from the generated plan. Building a verification + auto-fix loop capable of detecting broken builds, reconciling missing dependencies, and retrying without human intervention. Isolating each generated project in a real Docker sandbox with dynamic ports, serving a live preview without blocking the rest of the system. Migrating authentication to multi-tenant while preserving per-user WebSocket filtering without breaking in-progress runs.",
    },
  },
  5: {
    description:
      "Comprehensive daily-collections management platform with centralized control over clients, credits, collection routes, and a client portal. Multi-role system with a mobile-first design to maximize usability in the field.",
    gallery: [
      {
        title: "Admin Dashboard",
        description:
          "Centralized panel with weekly collection KPIs, route-based revenue analysis, delinquent client status, and real-time statistics. Trend visualization with interactive charts and quick access to priority routes.",
      },
      {
        title: "Client Management",
        description:
          "Complete client listing with filtering by route and status. Quick view of outstanding balance, last collection, and available actions. Mobile-first optimized search to locate clients in the field without lag.",
      },
      {
        title: "Client Detail and Documents",
        description:
          "Complete client profile with personal data, ID documents (front/back with signed URLs), credit history, debt summary, and reactivation options. Interface for secure editing with real-time validation.",
      },
      {
        title: "Credit Schedule",
        description:
          "Complete installment breakdown (daily/weekly/monthly) with individual status, dynamically calculated due dates, per-installment amount, and applied interest. Delinquency visualization and options to void or edit credits (admin only).",
      },
      {
        title: "Daily Route Closure",
        description:
          "Live preview of the day's collections and an atomic closure transaction. Immutable snapshot capturing paid/unpaid clients, total collected, new credits, and a downloadable PDF. Idempotency guaranteed at the DB level (one closure per day).",
      },
      {
        title: "Routes and Collections Panel",
        description:
          "Operational view of all routes assigned to collectors with a live status of the day's progress, visited clients, amount collected, and upcoming visits. Direct access to daily closure and route-based collection history.",
      },
      {
        title: "Route Detail and Assigned Clients",
        description:
          "Detailed route view with the list of assigned clients, responsible collector, collection statistics, and management options. Lets you see each client on the route, their debt, last collection, and delinquency status in a single view.",
      },
      {
        title: "Theme System (Light/Dark)",
        description:
          "Per-surface mode selector: Admin dark by default, Collector light for the field, Client light for the portal. FOUC-free transition, CSS tokens with WCAG AA contrast, respects prefers-reduced-motion. Preference saved per user.",
      },
      {
        title: "Interactive Digital Receipt",
        description:
          "Server-rendered payment receipt with a unique code, client data, credit, paid installment, and amount. Downloadable as PDF or shareable via WhatsApp with a signed link. Accessible without login via a capability URL.",
      },
    ],
    documentation: {
      overview:
        "CobroDiario is a SaaS platform specialized in daily-collections management for microcredit and finance companies. It centralizes client administration, route assignment to collectors, credit and payment tracking, and offers a secure portal where clients can check their debt and download receipts. Multi-role system with JWT authentication and end-to-end validation with Zod.",
      features: [
        "Centralized client management with document capture (front/back photos)",
        "Collection route system assigned to specific collectors",
        "Credit creation and tracking with automatic installment calculation",
        "Payment recording with atomic transactions and race-condition control",
        "Due-date schedule with delinquency tracking",
        "Digital receipt generation with electronic signature",
        "Client portal with secure access and mandatory password change",
        "Payment voiding (never editing) for corrections",
        "Reactivation of deactivated clients (soft-delete)",
        "Fully responsive, mobile-first design",
        "Multi-role authentication with guards and granular permissions",
        "Secure document storage with signed URLs",
        "Rate limiting and attack protection",
      ],
      techStack:
        "Frontend: Next.js 16 with App Router, React 19, TypeScript, TailwindCSS v4 with a custom design system, GSAP for animations, Zod for validation, TanStack Query for data fetching, Zustand for state. Backend: NestJS with feature-based modules, Prisma v7 with PostgreSQL, JWT for authentication, shared validation with Zod in @repo/types. Infrastructure: Supabase for database and storage, Turborepo for the monorepo, pnpm for dependency management.",
      challenges:
        "Implementing atomic transactions with race-condition control on payments, designing dual client/server validation shared between web and API, building an installment schedule that supports variable frequencies (daily/weekly/monthly), managing stateless authentication with soft-delete and reactivations, optimizing a mobile-first interface for collectors in the field without reliable connectivity, and implementing soft-deletes and auditing without compromising performance.",
    },
  },
};

const enPersonalProjectsText = {
  1: {
    description:
      "Modern news homepage with multiple sections, built as a Frontend Mentor challenge using React and TailwindCSS.",
    documentation: {
      overview:
        "A Frontend Mentor challenge that involves replicating a news homepage with a clean, professional design, including featured articles, a new-articles section, and trending articles.",
      features: [
        "Responsive design with a modern grid layout",
        "Navigation with categories (Home, New, Popular, Trending)",
        "Featured main article with a hero image",
        "New-articles section with a vertical list",
        "Numbered articles with thumbnails at the bottom",
      ],
      techStack:
        "React for reusable components and TailwindCSS for utility-first, responsive styling.",
      challenges:
        "Faithfully replicating the Frontend Mentor design while keeping the layout responsive and preserving the grid structure across the different content sections.",
    },
  },
  2: {
    description:
      "My second professional portfolio with a futuristic dark design, interactive sections, a project gallery, and a functional contact form.",
    documentation: {
      overview:
        "A complete web portfolio with a dark/cyber aesthetic presenting my profile as a Full Stack Web Developer, showcasing a year of experience with technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, and PostgreSQL.",
      features: [
        "Dark design with a background grid and cyan/turquoise accents",
        "Skills section with animated progress bars (HTML, CSS, JS, React, Next.js, PostgreSQL)",
        "Gallery of personal projects and Frontend Mentor challenges",
        "Contact page with social media icons and a functional form",
        "Navigation between sections (About, Education, Projects, Services, Contact)",
        "Smooth animations with Animate.css and typing effects",
      ],
      techStack:
        "HTML5 for semantic structure, CSS3 with grid effects and glowing borders, vanilla JavaScript for interactivity, Bootstrap for responsive components, and Animate.css for animations.",
      challenges:
        "Creating a futuristic design with neon/cyber effects while keeping usability intact, and implementing a project gallery organized by category (personal vs. Frontend Mentor).",
    },
  },
};

function mergeProject(project, overlay) {
  if (!overlay) return project;
  return {
    ...project,
    ...overlay,
    gallery: mergeGallery(project.gallery, overlay.gallery),
    documentation: overlay.documentation
      ? { ...project.documentation, ...overlay.documentation }
      : project.documentation,
  };
}

export function getProfessionalProjects(locale) {
  if (locale !== "en") return esProfessionalProjects;
  return esProfessionalProjects.map((project) =>
    mergeProject(project, enProfessionalProjectsText[project.id]),
  );
}

export function getPersonalProjects(locale) {
  if (locale !== "en") return esProjects;
  return esProjects.map((project) =>
    mergeProject(project, enPersonalProjectsText[project.id]),
  );
}
