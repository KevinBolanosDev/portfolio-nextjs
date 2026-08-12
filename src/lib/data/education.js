/**
 * Datos de educación, experiencia laboral y certificaciones
 * @module lib/data/education
 */

/**
 * @typedef {'in-progress' | 'completed'} EducationStatus
 */

/**
 * Formación académica y bootcamps
 */
export const education = [
  {
    id: 1,
    title: "Bootcamp Full Stack JavaScript MERN",
    institution: "Ada School",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo completo de aplicaciones web usando MongoDB, Express, React y Node.js.",
    certificate:
      "https://learn.ada-school.org/certifications/65451dc4831c9788c54e7f3e",
  },
  {
    id: 2,
    title: "Digital Talent Bootcamp - Habilidades Socioemocionales",
    institution: "Pro Talento",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo de habilidades blandas y competencias para el mundo laboral tech.",
    certificate:
      "https://drive.google.com/file/d/14yp61N17SlazH1oAlCxx4-Yk04biehEK/view?usp=sharing",
  },
];

/**
 * Certificaciones adicionales
 */
export const certifications = [
  {
    id: 1,
    title: "Certificado Curso de IA 2026",
    platform: "Coursera",
    date: "Ene 2026",
    certificate: "https://drive.google.com/file/d/1rjLOx_rMpOZNvqBVSKpXrEz8I-wPrM6F/view?usp=sharing",
  },
  {
    id: 2,
    title: "Crea Landing Page con Wordpress",
    platform: "Talleres donweb",
    date: "Feb 2024",
    certificate: "https://drive.google.com/file/d/1rjLOx_rMpOZNvqBVSKpXrEz8I-wPrM6F/view?usp=sharing",
  },
  {
    id: 3,
    title: "Control de Versiones",
    platform: "Coursera",
    date: "Dic 2023",
    certificate: "https://coursera.org/share/28aebd6ee27f673c2dff82fe107cffe1",
  },
  {
    id: 4,
    title: "Introducción al Desarrollo Front-End",
    platform: "Coursera",
    date: "Nov 2023",
    certificate: "https://coursera.org/share/cdc35b9b295df9c7ee8ad1a5156ba950",
  },
  {
    id: 5,
    title: "Fundamentos de Ciberseguridad",
    platform: "Coursera",
    date: "Oct 2023",
    certificate: "https://coursera.org/share/502eb966559616bcd0a5710cd5468eed",
  },
  {
    id: 6,
    title: "Web Development Fundamentals: Full Stack or Front-end",
    platform: "LinkedIn",
    date: "Ago 2023",
    certificate:
      "https://www.linkedin.com/learning/certificates/fdf1e5b4898afa32a4d8de7632cad3c82625595294b762e10ff6fa1c74a96aee",
  },
];

/**
 * Experiencia laboral / proyectos profesionales
 */
export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Aria Financial Group / Matrix Development",
    period: "Jun 2025 - Presente",
    status: "in-progress",
    description:
      "Desarrollo frontend de dos plataformas SaaS para la industria de seguros, Aria InsurTech y AriaDesk, desde la arquitectura de componentes hasta la integración con APIs y servicios externos.",
    projects: [
      {
        name: "Aria InsurTech",
        achievements: [
          "Centro de administración con +26 módulos (agentes, campañas, distribución de leads) sobre React 19 y Next.js 16 App Router",
          "Marketplace de leads con mapa interactivo de EE. UU. y actualizaciones en tiempo real vía WebSocket",
          "Gestión de estado a tres niveles (TanStack Query, Redux Toolkit, Zustand) manteniendo un rendimiento óptimo",
          "Sistema de diseño propio con tokens de marca estrictos, aplicado con linting y documentación",
        ],
      },
      {
        name: "AriaDesk",
        achievements: [
          "Flujo multi-paso de creación de casos con validación dual cliente/servidor (React Hook Form + Zod)",
          "Integración con Gmail y Google Calendar para campañas de email y gestión de citas",
          "Soporte multi-tenant e internacionalización (inglés/español) con i18next",
          "Dashboard centralizado con KPIs y analítica en tiempo real para gestión de portafolio de agentes",
        ],
      },
    ],
  },
];

/**
 * Helpers para filtrar datos
 */
export const getCompletedEducation = () =>
  education.filter((e) => e.status === "completed");

export const getInProgressEducation = () =>
  education.filter((e) => e.status === "in-progress");

export const getCertificationsByPlatform = (platform) =>
  certifications.filter(
    (c) => c.platform.toLowerCase() === platform.toLowerCase()
  );
