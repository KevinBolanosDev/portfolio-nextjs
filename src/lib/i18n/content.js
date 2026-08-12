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
    title: "Software Programming Technical Assistant",
    description:
      "Technical training in software development, algorithms, and data structures.",
  },
  2: {
    title: "Full Stack JavaScript MERN Bootcamp",
    description:
      "End-to-end web application development using MongoDB, Express, React, and Node.js.",
  },
  3: {
    title: "Digital Talent Bootcamp - Soft Skills",
    description:
      "Development of soft skills and competencies for the tech workplace.",
  },
};

const enCertificationsText = {
  1: { title: "Version Control" },
  2: { title: "Introduction to Front-End Development" },
  3: { title: "Cybersecurity Fundamentals" },
  4: { title: "Web Development Fundamentals: Full Stack or Front-end" },
};

const enWorkExperienceText = {
  1: {
    title: "Full Stack Developer",
    description:
      "Development of enterprise SaaS platforms like AriaLeads and AireHub for the insurance industry.",
    achievements: [
      "Built a lead management system for 38,000+ agents",
      "Implemented dashboards with real-time metrics",
      "Architected applications with Next.js, React, and PostgreSQL",
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
    achievements:
      enWorkExperienceText[item.id]?.achievements ?? item.achievements,
  }));
}

/** Aplica un overlay de galería (title/description) por índice, preservando el resto. */
function mergeGallery(gallery, overlay) {
  if (!gallery || !overlay) return gallery;
  return gallery.map((item, index) => ({ ...item, ...overlay[index] }));
}

const enProfessionalProjectsText = {
  1: {
    description:
      "Aria InsurTech is a full-scale enterprise SaaS platform for end-to-end insurance lead management, built with React 19 and Next.js 16 (App Router). The system covers the complete lifecycle of buying, selling, distributing, and managing leads across life insurance and commercial sectors — featuring differentiated dashboards for administrators and agents, a built-in marketplace, financial analytics, a rewards/gamification engine, and a partner affiliate program.",
    gallery: [
      {
        title: "Login Page",
        description:
          "Secure authentication system with a modern design and a compelling call-to-action.",
      },
      {
        description:
          "Admin panel with real-time metrics: 38,734 total agents, 98.3% active.",
      },
      {
        description:
          "Personalized agent dashboard with KPIs, leads, and premium tracking ($692,659+).",
      },
      {
        title: "Lead Management",
        description:
          "Lead management system with advanced filters, Gold/Silver categories, and export.",
      },
      {
        title: "Lead Marketplace",
        description:
          "Interactive US map with 160,000+ available leads and filters by state/county.",
      },
      {
        description:
          "Support system with tickets, incidents, and case tracking.",
      },
    ],
    documentation: {
      overview:
        "AriaLeads is an enterprise SaaS platform for end-to-end lead management, built with modern React/Next.js technologies. The system is designed for buying, selling, distributing, and managing leads in the life insurance industry and other commercial sectors.",
      features: [
        "Role-based authentication system (Admin/Agent)",
        "Admin Control Center with real-time metrics (38,000+ active agents)",
        "Agent dashboard with personalized KPIs and premium tracking",
        "Lead marketplace with interactive US map (160,000+ leads available)",
        "Lead management by category (Mailed, Marketplace, Digital, Lead Packs)",
        "Advanced filters by state, county, campaign, and lead type (Gold/Silver)",
        "Financial system with revenue tracking ($692,659+ in premiums)",
        "Light/dark mode and a fully responsive design",
      ],
      techStack:
        "Frontend built with React.js/Next.js and Shadcn with TailwindCSS for a modern UI. Backend in Python for large-scale data management. Integrated with geolocation APIs for the interactive map.",
      challenges:
        "Building a scalable platform capable of handling tens of thousands of agents and hundreds of thousands of leads, with differentiated dashboards for admins and agents, while keeping performance optimal.",
    },
  },
  2: {
    description:
      "Comprehensive platform for insurance agents with a metrics dashboard, achievement system, training bootcamp, and carrier management. Includes integration with AriaLeads.",
    gallery: [
      {
        title: "Login Page",
        description:
          "Authentication system with a live dashboard preview and real-time analytics.",
      },
      {
        title: "Main Dashboard",
        description:
          "Panel with KPIs: Monthly Premium $4,749, Active Policies 37, Team Members 979, Persistency 97.3%.",
      },
      {
        title: "Achievement System",
        description:
          "Achievement badges with rankings, badge progress (22% completion), and an achievement journey.",
      },
      {
        description:
          "Course center with AIRE Mortgage Protection Training and instructor management.",
      },
      {
        title: "Training Center",
        description:
          "Training center with categorized videos, learning progress, and content management.",
      },
      {
        description:
          "Mobile view for managing carrier partnerships, premiums, and policies.",
      },
      {
        title: "Mobile Navigation",
        description:
          "Responsive menu with all sections: Dashboard, Leaderboard, Tools, Leads, Policies, etc.",
      },
      {
        title: "AriaLeads Integration",
        description:
          "AriaLeads embedded within AireHub for unified lead and premium management.",
      },
    ],
    documentation: {
      overview:
        "AireHub is a comprehensive platform designed for life insurance agents that centralizes all the tools they need for daily operations. It includes a metrics dashboard, a gamified badge system, a training bootcamp, carrier management, and full integration with AriaLeads for lead management.",
      features: [
        "Real-time KPI dashboard (Premium, Policies, Team Members, Persistency)",
        "Achievement badge system with rankings and gamified progress",
        "Course bootcamp with AIRE Mortgage Protection Training",
        "Training center with categorized videos and progress tracking",
        "Quick access to Zoom, WhatsApp, Slack, and social media",
        "Carrier management with partnerships and metrics",
        "Fully responsive design (desktop and mobile)",
        "Seamless integration with AriaLeads for lead management",
      ],
      techStack:
        "Next.js 14 with App Router for the frontend, React.js for components, shadcn/ui for the design system, TailwindCSS for utility-first styling. Modular architecture with microservice integration.",
      challenges:
        "Integrating AriaLeads as a module within AireHub while keeping UI consistency, implementing the badge gamification system, and building a training bootcamp with progress tracking.",
    },
  },
};

const enPersonalProjectsText = {
  1: {
    title: "First CV",
    description:
      "My first web project: a personal résumé built from scratch with HTML and CSS, applying the fundamentals of web structure and visual design.",
    documentation: {
      overview:
        "This was my first foray into web development. An interactive résumé showcasing my professional background, skills, and tech interests with a modern, responsive design.",
      features: [
        "Attractive visual design with gradients and custom typography",
        "Skills section with progress bars",
        "Tech interests organized visually",
        "Contact information with icons",
        "Layout structured with CSS Grid and Flexbox",
      ],
      techStack:
        "Semantic HTML5 for document structure. CSS3 for styling, including gradients, flexbox, and responsive design.",
      challenges:
        "Learning to properly structure an HTML document and apply CSS styling to achieve a professional look was the first big step on my path as a developer.",
    },
  },
  2: {
    description:
      "My first web portfolio with multiple sections, tab navigation, personal info, projects, and a contact form.",
    documentation: {
      overview:
        "A complete web portfolio presenting my profile as a Full-Stack MERN Developer, with a modern design using dark colors and teal accents.",
      features: [
        "Navigation between sections (About, Education, Skills, Projects, Contact)",
        "Responsive design with decorative geometric elements",
        "Intro section with a profile photo",
        "Functional contact form",
        "Smooth animations and transitions",
      ],
      techStack:
        "Semantic HTML5 for structure, CSS3 with animations and responsive design, vanilla JavaScript for interactivity and navigation.",
      challenges:
        "Creating a visually appealing design with floating geometric shapes and achieving smooth navigation between the portfolio's different sections.",
    },
  },
  3: {
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
  4: {
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
