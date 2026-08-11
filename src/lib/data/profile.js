/**
 * Datos del perfil personal
 * @module lib/data/profile
 */

import { getStorageUrl } from "../supabase";

export const profile = {
  name: "Kevin Andrés Bolaños",
  title: "Full Stack Web Developer",
  location: "Candelaria, Valle del Cauca, Colombia",
  email: "im.kevinbolanos.dev@gmail.com",
  src: getStorageUrl("portfolio-images", "profile.jpeg"),
  alt: "Kevin Bolaños",
  size: 100,
  available: true,
  bio: {
    short:
      "Desarrollador full stack apasionado por crear soluciones digitales innovadoras.",
    paragraphs: ["Desarrollador full stack enfocado en la creación de aplicaciones web modernas, escalables y centradas en la experiencia del usuario.",
 
    "Tengo experiencia trabajando con React.js o Next.js, utilizando herramientas como TailwindCSS y Shadcn para construir interfaces eficientes y mantenibles. Además, manejo JavaScript y TypeScript, lo que me permite desarrollar soluciones robustas y bien estructuradas.",
 
    "Complemento mi perfil como desarrollador backend usando Node.js, nestjs, desarrollo de APIs y construcción de sistemas CRUD, así como buen desarrollo en base de datos SQL y NoSQL como  PostgreSQL y MongoDB con Prisma. También tengo experiencia utilizando Docker y servicios como Supabase para db entornos cloud.",
 
    "También tengo conocimientos en como desplegar aplicaciones web en entornos de producción, desarrollo o testing utilizando servicios como Netlify, Vercel, Railway, Render asegurando que las aplicaciones sean accesibles y confiables para los usuarios finales.",

    "Me caracterizo por ser una persona proactiva, disciplinada, resiliente y orientada a la resolución de problemas, siempre en constante aprendizaje para mejorar mis habilidades y    aportar valor en cada proyecto."]
  },
  social: {
    github: "https://github.com/kevinbolanos",
    linkedin: "https://linkedin.com/in/kevinbolanos",
    twitter: null,
    portfolio: "https://imkevinbolanosdev.com",
  },
};

export const siteConfig = {
  name: "Kevin Bolaños Dev",
  description:
    "Portafolio de Kevin Bolaños - Desarrollador Full Stack especializado en React, Node.js y tecnologías web modernas.",
  url: "https://imkevinbolanosdev.com",
  ogImage: getStorageUrl("portfolio-images", "og-image.jpg"),
  links: {
    github: "https://github.com/kevinbolanos",
    linkedin: "https://linkedin.com/in/kevinbolanos",
  },
};



