/**
 * Datos del perfil personal
 * @module lib/data/profile
 */

import { getStorageUrl } from "../supabase";

export const profile = {
  name: "Kevin Andrés Bolaños",
  title: "Full Stack Web Developer",
  location: "Cali, Colombia",
  email: "kevinbolanos.dev@gmail.com",
  src: getStorageUrl("portfolio-images", "profile.jpeg"),
  alt: "Kevin Bolaños",
  size: 100,
  available: true,
  bio: {
    short:
      "Desarrollador full stack apasionado por crear soluciones digitales innovadoras.",
    paragraphs: [
      "Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras. Me especializo en tecnologías como React, Node.js y bases de datos tanto SQL como NoSQL.",
      "Mi enfoque proactivo y mi resiliencia para resolver desafíos me llevan a buscar soluciones efectivas, siempre en constante aprendizaje y expandiendo mis habilidades técnicas.",
      "Actualmente desarrollo plataformas SaaS profesionales como AriaLeads y AireHub, mientras complemento mi formación académica en programación de software.",
    ],
  },
  social: {
    github: "https://github.com/kevinbolanos",
    linkedin: "https://linkedin.com/in/kevinbolanos",
    twitter: null,
    portfolio: "https://kevinbolanos.dev",
  },
};

export const siteConfig = {
  name: "Kevin Bolaños Dev",
  description:
    "Portafolio de Kevin Bolaños - Desarrollador Full Stack especializado en React, Node.js y tecnologías web modernas.",
  url: "https://kevinbolanos.dev",
  ogImage: getStorageUrl("portfolio-images", "og-image.jpg"),
  links: {
    github: "https://github.com/kevinbolanos",
    linkedin: "https://linkedin.com/in/kevinbolanos",
  },
};



