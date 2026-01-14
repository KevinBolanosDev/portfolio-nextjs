/**
 * Stack tecnológico y herramientas
 * @module lib/data/technologies
 */

/**
 * @typedef {Object} Technology
 * @property {string} name - Nombre de la tecnología
 * @property {string} color - Color hex de la marca
 * @property {string} icon - Identificador del icono
 * @property {'frontend' | 'backend' | 'database' | 'tools' | 'devops'} category - Categoría
 */

/**
 * Tecnologías de Frontend
 */
export const frontendTech = [
  { name: "HTML5", color: "#E34F26", icon: "html5", category: "frontend" },
  { name: "CSS3", color: "#1572B6", icon: "css3", category: "frontend" },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: "javascript",
    category: "frontend",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: "typescript",
    category: "frontend",
  },
  { name: "React", color: "#61DAFB", icon: "react", category: "frontend" },
  { name: "Next.js", color: "#000000", icon: "nextjs", category: "frontend" },
  {
    name: "TailwindCSS",
    color: "#06B6D4",
    icon: "tailwindcss",
    category: "frontend",
  },
];

/**
 * Tecnologías de Backend
 */
export const backendTech = [
  { name: "Node.js", color: "#339933", icon: "nodejs", category: "backend" },
  { name: "Express", color: "#000000", icon: "express", category: "backend" },
];

/**
 * Bases de datos
 */
export const databaseTech = [
  {
    name: "PostgreSQL",
    color: "#4169E1",
    icon: "postgresql",
    category: "database",
  },
  { name: "MongoDB", color: "#47A248", icon: "mongodb", category: "database" },
];

/**
 * Herramientas de desarrollo
 */
export const toolsTech = [
  { name: "Git", color: "#F05032", icon: "git", category: "tools" },
  { name: "GitHub", color: "#181717", icon: "github", category: "tools" },
  { name: "VS Code", color: "#007ACC", icon: "vscode", category: "tools" },
];

/**
 * Todas las tecnologías organizadas por categoría
 */
export const technologies = {
  frontend: frontendTech,
  backend: backendTech,
  database: databaseTech,
  tools: toolsTech,
};

/**
 * Lista plana de todas las tecnologías
 */
export const allTechnologies = [
  ...frontendTech,
  ...backendTech,
  ...databaseTech,
  ...toolsTech,
];

/**
 * Helpers
 */
export const getTechByName = (name) =>
  allTechnologies.find((t) => t.name.toLowerCase() === name.toLowerCase());

export const getTechsByCategory = (category) =>
  allTechnologies.filter((t) => t.category === category);

export const getTechColor = (name) => {
  const tech = getTechByName(name);
  return tech?.color || "#6B7280";
};
