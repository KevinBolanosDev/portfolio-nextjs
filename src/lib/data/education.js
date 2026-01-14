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
    period: "Mar 2025 - Presente",
    status: "in-progress",
    description:
      "Formación técnica en desarrollo de software, algoritmos y estructuras de datos.",
    certificate: null,
  },
  {
    id: 2,
    title: "Bootcamp Full Stack JavaScript MERN",
    institution: "Ada School",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo completo de aplicaciones web usando MongoDB, Express, React y Node.js.",
    certificate:
      "https://learn.ada-school.org/certifications/65451dc4831c9788c54e7f3e", // TODO: Agregar URL real del certificado
  },
  {
    id: 3,
    title: "Digital Talent Bootcamp - Habilidades Socioemocionales",
    institution: "Pro Talento",
    period: "Mar 2023 - Nov 2023",
    status: "completed",
    description:
      "Desarrollo de habilidades blandas y competencias para el mundo laboral tech.",
    certificate:
      "https://drive.google.com/file/d/1hTnPY2dipDhNZo-GRH-dhwd2g48LHh6K/view?usp=sharing", // TODO: Agregar URL real del certificado
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
    certificate: "https://coursera.org/share/28aebd6ee27f673c2dff82fe107cffe1", // TODO: Agregar URL real
  },
  {
    id: 2,
    title: "Introducción al Desarrollo Front-End",
    platform: "Coursera",
    date: "Nov 2023",
    certificate: "https://coursera.org/share/cdc35b9b295df9c7ee8ad1a5156ba950",
  },
  {
    id: 3,
    title: "Fundamentos de Ciberseguridad",
    platform: "Coursera",
    date: "Oct 2023",
    certificate: "https://coursera.org/share/502eb966559616bcd0a5710cd5468eed",
  },
  {
    id: 4,
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
    title: "Desarrollador Full Stack",
    company: "Freelance",
    period: "2025",
    status: "completed",
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
