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
