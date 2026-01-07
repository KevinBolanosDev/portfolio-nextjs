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
    title: "Asistente Técnico en Programación de Software",
    institution: "Politécnico PIO",
    period: "Sep 2024 - Presente",
    status: "in-progress",
    description:
      "Formación técnica en desarrollo de software, algoritmos y estructuras de datos.",
    certificate: null,
  },
  {
    id: 2,
    title: "Backend Specialization with Java",
    institution: "Oracle Next Education - Alura Latam",
    period: "Jun 2024 - Presente",
    status: "in-progress",
    description:
      "Especialización en desarrollo backend con Java, Spring Boot y arquitectura de microservicios.",
    certificate: null,
  },
  {
    id: 3,
    title: "Bootcamp Full Stack JavaScript MERN",
    institution: "Ada School",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo completo de aplicaciones web usando MongoDB, Express, React y Node.js.",
    certificate: "#", // TODO: Agregar URL real del certificado
  },
  {
    id: 4,
    title: "Digital Talent Bootcamp - Habilidades Socioemocionales",
    institution: "Pro Talento",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo de habilidades blandas y competencias para el mundo laboral tech.",
    certificate: "#", // TODO: Agregar URL real del certificado
  },
];

/**
 * Certificaciones adicionales
 */
export const certifications = [
  {
    id: 1,
    title: "Control de Versiones",
    platform: "Coursera",
    date: "Dic 2023",
    certificate: "#", // TODO: Agregar URL real
  },
  {
    id: 2,
    title: "Introducción al Desarrollo Front-End",
    platform: "Coursera",
    date: "Nov 2023",
    certificate: "#",
  },
  {
    id: 3,
    title: "Fundamentos de Ciberseguridad",
    platform: "Coursera",
    date: "Oct 2023",
    certificate: "#",
  },
  {
    id: 4,
    title: "Web Development Fundamentals: Full Stack or Front-end",
    platform: "LinkedIn",
    date: "Ago 2023",
    certificate: "#",
  },
];

/**
 * Experiencia laboral / proyectos profesionales
 */
export const workExperience = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "Freelance",
    period: "2024 - Presente",
    status: "in-progress",
    description:
      "Desarrollo de plataformas SaaS empresariales como AriaLeads y AireHub para la industria de seguros.",
    achievements: [
      "Desarrollo de sistema de gestión de leads para +38,000 agentes",
      "Implementación de dashboards con métricas en tiempo real",
      "Arquitectura de aplicaciones con Next.js, React y PostgreSQL",
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
