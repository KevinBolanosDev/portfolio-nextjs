/**
 * Stack tecnológico y herramientas
 * @module lib/data/technologies
 */

/**
 * @typedef {Object} Technology
 * @property {string} name - Nombre de la tecnología
 * @property {string} color - Color hex de la marca
 * @property {string} icon - Identificador del icono
 * @property {'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'tools'} category - Categoría
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
  {
    name: "React Native",
    color: "#61DAFB",
    icon: "react",
    category: "frontend",
  },
  { name: "Expo Go", color: "#4630EB", icon: "expo", category: "frontend" },
];

/**
 * Tecnologías de Backend
 */
export const backendTech = [
  { name: "Node.js", color: "#339933", icon: "nodejs", category: "backend" },
  { name: "Express", color: "#000000", icon: "express", category: "backend" },
  { name: "NestJS", color: "#E0234E", icon: "nestjs", category: "backend" },
  {
    name: "Supabase",
    color: "#3FCF8E",
    icon: "supabase",
    category: "backend",
  },
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
 * Despliegue / infraestructura (CI/CD, hosting, contenedores)
 */
export const devopsTech = [
  { name: "Docker", color: "#2496ED", icon: "docker", category: "devops" },
  { name: "Vercel", color: "#FFFFFF", icon: "vercel", category: "devops" },
  { name: "Railway", color: "#D3D3D3", icon: "railway", category: "devops" },
  { name: "Render", color: "#46E3B7", icon: "render", category: "devops" },
  { name: "Netlify", color: "#00C7B7", icon: "netlify", category: "devops" },
];

/**
 * Herramientas y asistentes de IA
 */
export const aiTech = [
  {
    name: "Antigravity",
    color: "#4285F4",
    icon: "antigravity",
    category: "ai",
  },
  { name: "Cursor", color: "#FFFFFF", icon: "cursor", category: "ai" },
  {
    name: "Claude Code",
    color: "#D97757",
    icon: "claude",
    category: "ai",
  },
  { name: "Claude", color: "#D97757", icon: "claude", category: "ai" },
  { name: "ChatGPT", color: "#10A37F", icon: "chatgpt", category: "ai" },
  { name: "MiniMax", color: "#E73562", icon: "minimax", category: "ai" },
  { name: "DeepSeek", color: "#5786FE", icon: "deepseek", category: "ai" },
];

/**
 * Herramientas de desarrollo (control de versiones, editor, testing de APIs)
 */
export const toolsTech = [
  { name: "Git", color: "#F05032", icon: "git", category: "tools" },
  { name: "GitHub", color: "#181717", icon: "github", category: "tools" },
  { name: "VS Code", color: "#007ACC", icon: "vscode", category: "tools" },
  { name: "Postman", color: "#FF6C37", icon: "postman", category: "tools" },
];

/**
 * Todas las tecnologías organizadas por categoría
 */
export const technologies = {
  frontend: frontendTech,
  backend: backendTech,
  database: databaseTech,
  devops: devopsTech,
  ai: aiTech,
  tools: toolsTech,
};

/**
 * Lista plana de todas las tecnologías
 */
export const allTechnologies = [
  ...frontendTech,
  ...backendTech,
  ...databaseTech,
  ...devopsTech,
  ...aiTech,
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
