/**
 * Configuración declarativa del workflow del home.
 * Cada nodo-sección define su identidad visual (color neón del
 * design system v3), el contenido del modal y los "logs" que se
 * muestran mientras el progreso simulado avanza hacia él.
 * @module lib/data/workflowNodes
 */

/**
 * Nodo inicial (orchestrator). Es el único elemento de la pantalla
 * con borde de gradiente animado permanente.
 */
export const startNode = {
  id: "start",
  title: "Kevin Bolaños",
  subtitle: "Full Stack Developer · Web & AI Agents",
  slug: "workflow/portfolio",
  description:
    "Bienvenido a mi portafolio interactivo. Ejecuta el workflow y descubre cada sección como si fuera un pipeline de automatización: nodo a nodo, igual que trabajo con agentes de IA.",
  color: "#4C8BF5",
  colorDark: "#2D6AE0",
};

/**
 * Secuencia de nodos-sección. El orden del array es el orden
 * de ejecución del pipeline.
 */
export const workflowSections = [
  {
    id: "about",
    step: 1,
    title: "About me",
    slug: "node/about-me",
    icon: "user",
    color: "#C084FC",
    colorDark: "#9333EA",
    glow: "rgba(192, 132, 252, 0.35)",
    duration: 2400,
    summary:
      "Desarrollador full stack de Cali, Colombia, apasionado por crear soluciones digitales innovadoras con un enfoque proactivo y en constante aprendizaje.",
    logs: [
      "Inicializando módulo about-me…",
      "Cargando perfil profesional…",
      "Compilando trayectoria…",
    ],
  },
  {
    id: "skills",
    step: 2,
    title: "Skills & Experience",
    slug: "node/skills-experience",
    icon: "code",
    color: "#A3E635",
    colorDark: "#65A30D",
    glow: "rgba(163, 230, 53, 0.35)",
    duration: 2600,
    summary:
      "Stack moderno de desarrollo web: frontend con React y Next.js, backend con Node.js, y experiencia real construyendo productos de principio a fin.",
    logs: [
      "Escaneando stack tecnológico…",
      "Indexando frontend y backend…",
      "Validando experiencia…",
    ],
  },
  {
    id: "projects",
    step: 3,
    title: "Projects",
    slug: "node/projects",
    icon: "rocket",
    color: "#2DD4BF",
    colorDark: "#0D9488",
    glow: "rgba(45, 212, 191, 0.35)",
    duration: 2800,
    summary:
      "Proyectos profesionales y personales: plataformas SaaS, aplicaciones web completas y experimentos con tecnologías de vanguardia.",
    logs: [
      "Desplegando repositorios…",
      "Construyendo galería de proyectos…",
      "Generando previews…",
    ],
  },
  {
    id: "contact",
    step: 4,
    title: "Contact",
    slug: "node/contact",
    icon: "mail",
    color: "#38BDF8",
    colorDark: "#0284C7",
    glow: "rgba(56, 189, 248, 0.35)",
    duration: 2200,
    summary:
      "¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Hablemos: formulario directo, redes y disponibilidad actual.",
    logs: [
      "Abriendo canal de comunicación…",
      "Verificando disponibilidad…",
      "Listo para conectar…",
    ],
  },
];

/**
 * Paso final del pipeline (nodo "Workflow completado").
 * Tiene su propia fase de progreso, igual que las secciones.
 */
export const completeStep = {
  id: "complete",
  title: "Workflow completado",
  slug: "node/complete",
  color: "#34D399",
  colorDark: "#059669",
  glow: "rgba(52, 211, 153, 0.35)",
  duration: 1600,
  logs: ["Cerrando pipeline…", "Generando resumen…"],
};

/** Total de pasos ejecutables: las 4 secciones + el nodo final. */
export const TOTAL_STEPS = workflowSections.length + 1;

/**
 * Devuelve la config del paso n (0-indexed): sección o nodo final.
 */
export function getStepConfig(stepIndex) {
  return stepIndex < workflowSections.length
    ? workflowSections[stepIndex]
    : completeStep;
}
