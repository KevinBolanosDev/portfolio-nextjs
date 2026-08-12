import { getStorageUrl } from "../supabase";

// Proyectos profesionales / empresariales
export const professionalProjects = [
  {
    id: 1,
    title: "Aria Insurtech",
    description:
      "Aria InsurTech es una plataforma SaaS empresarial a gran escala para la gestión de clientes potenciales de seguros de un extremo a otro, creada con React 19 y Next.js 16 (App Router). El sistema cubre el ciclo de vida completo de compra, venta, distribución y gestión de clientes potenciales en los sectores comerciales y de seguros de vida, un mercado integrado, análisis financieros, un motor de recompensas/gamificación y un programa de socios afiliados.",
    image: getStorageUrl("portfolio-images", "projects/ariainsurtech/login.png"),
    technologies: ["React.js", "Next.js", "TailwindCSS", "Shadcn/ui"],
    githubUrl: null, // Proyecto privado
    demoUrl: "https://ariainsurtech.com",
    gallery: [
  {
    src: getStorageUrl("portfolio-images", "projects/ariainsurtech/dashboard.png"),
    title: "Dashboard Principal",
    description:
      "Panel de control administrativo con métricas en tiempo real, gestión de agentes y seguimiento financiero centralizado.",
    size: "large",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/ariainsurtech/aria-tech.png"),
    title: "AriaTech Agent",
    description:
      "Portal SaaS para agentes con herramientas de underwriting, productos de suscripción y acceso SSO a AriaDesk.",
    size: "wide",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/ariainsurtech/aria-rewards.png"),
    title: "Aria Rewards",
    description:
      "Sistema de gamificación con catálogo de recompensas, acumulación de puntos por actividad y tracking de órdenes de SWAG.",
    size: "wide",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/ariainsurtech/aria-training.png"),
    title: "Training Center",
    description:
      "Plataforma de cursos self-paced con video resources, módulos de bootcamp y certificación para agentes.",
    size: "wide",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/ariainsurtech/marketplace.png"),
    title: "Marketplace de Leads",
    description:
      "Marketplace con mapa interactivo de EE.UU., filtros por estado/condado, campañas de mailing y sistema de Lead Packs con WebSocket en tiempo real.",
    size: "large",
  },
],
    documentation: {
      overview:
        "AriaInsurTech es una plataforma SaaS empresarial a gran escala para la gestión de clientes potenciales de seguros de un extremo a otro, creada con React 19 y Next.js 16 (App Router). El sistema cubre el ciclo de vida completo de compra, venta, distribución y gestión de clientes potenciales en los sectores comerciales y de seguros de vida, un mercado integrado, análisis financieros, un motor de recompensas/gamificación y un programa de socios afiliados.",
      features: [
        "Sistema de autenticación basado en roles (Admin/Agent) con middleware JWT, actualización automática de tokens y protección de rutas",
        "Centro de control de administración con más de 26 módulos de gestión que incluyen gestión de agentes, gestión de campañas, distribución de paquetes de clientes potenciales y supervisión financiera.",
        "Mercado líder con mapa interactivo de disponibilidad en EE. UU. tipo de cliente potencial (enviado por correo, mercado, digital, paquetes de clientes potenciales) y nivel (oro/plata).",
        "Mercado de productos SaaS con gestión de suscripciones, códigos promocionales, códigos de descuento y un flujo de pago completo.",
        "Gestión de leads por categorías (Mailed, Marketplace, Digital, Lead Packs)",
        "Panel de agentes con KPI personalizados, sistema de billetera/créditos, carrito de compras y gestión de pedidos.",
      ],
      techStack:
        "Frontend creado con React 19 / Next.js 16 (App Router) y Shadcn/ui + Radix UI con TailwindCSS para una interfaz moderna basada en componentes. Gestión de estado a través de TanStack React Query (estado del servidor), Redux Toolkit + Persist (estado global del cliente) y Zustand (almacenes de funciones aisladas). Visualización de datos con Recharts. Animaciones vía Motion (Framer Motion). Arrastra y suelta con @dnd-kit. Generación de PDF con @react-pdf/renderer + pdf-lib. Implementado con Docker y en contenedores para entornos de producción.",
      challenges:
        "Creación de una plataforma escalable y multifunción con más de 26 módulos de administración y más de 12 módulos de agentes, cada uno con distintos flujos de datos y permisos. Gestionar estados complejos a través de tres soluciones de gestión de estados diferentes (React Query, Redux, Zustand) manteniendo un rendimiento óptimo. Implementar un sistema de diseño personalizado con tokens de marca estrictos (sin valores hexadecimales codificados), reglas seleccionadas de degradado/color, todo ello aplicado mediante linting y documentación. Admite análisis financieros en tiempo real.",
    },
  },
  {
    id: 2,
    title: "AriaDesk",
  description:
    "Plataforma integral de gestión de agencias de seguros con control centralizado de portafolio, casos, campañas y análisis en tiempo real. Integración con Gmail y Google Calendar.",
  image: getStorageUrl("portfolio-images", "projects/ariadesk/login.png"),
  technologies: ["Next.js 15", "React 19", "Redux Toolkit", "TailwindCSS v4", "i18n"],
  githubUrl: null, // Proyecto privado
  demoUrl: "https://aria-desk.com/home",
  gallery: [
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/login.png"),
      title: "Autenticación con Google",
      description:
        "Sistema de login seguro con SSO integrado para acceso rápido a la plataforma.",
      size: "large",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/dashboard.png"),
      title: "Dashboard Principal",
      description:
        "Panel centralizado con KPIs, análisis en tiempo real y acceso rápido a herramientas principales.",
      size: "wide",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/cases.png"),
      title: "Gestión de Casos",
      description:
        "Flujo multi-paso para creación y seguimiento de casos con validación en tiempo real.",
      size: "wide",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/book-of-business.png"),
      title: "Portafolio de Seguros",
      description:
        "Vista centralizada de clientes, pólizas activas y gestión de relaciones.",
      size: "small",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/campaigns.png"),
      title: "Campañas de Email",
      description:
        "Creación y programación de campañas con integración directa a Gmail.",
      size: "small",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/ariadesk/wizard-chat.png"),
      title: "Herramientas & Chat",
      description:
        "Acceso rápido a herramientas, Wizard Chat inteligente y centro de soporte.",
      size: "tall",
    },
  ],
  documentation: {
    overview:
      "AriaDesk es una plataforma SaaS diseñada para agentes de seguros, centralizando la gestión de su negocio. Permite administrar portafolio de clientes, casos complejos, campañas de marketing, análisis de rendimiento e integración con herramientas externas.",
    features: [
      "Gestión centralizada de portafolio de seguros (Book of Business)",
      "Flujo de creación de casos multi-paso con validación",
      "Campañas de email integradas con Gmail",
      "Dashboard con analytics y KPIs en tiempo real",
      "Soporte multi-carriers con gestión unificada",
      "Integración con Google Calendar para citas y recordatorios",
      "Sistema de permisos y gestión de usuarios",
      "Diseño completamente responsivo (desktop y mobile)",
      "Internacionalización (English/Spanish)",
    ],
    techStack:
      "Next.js 15 con App Router, React 19, Redux Toolkit para estado global, React Hook Form + Zod para validación, TailwindCSS v4, i18next para multiidioma. Integración con APIs REST y Google Services.",
    challenges:
      "Diseñar flujos complejos multi-paso con persistencia de borradores, validación dual client/server, integración seamless con Gmail y Google Calendar, soporte multi-tenant con headers JWT-based.",
  },
  },
  {
  id: 4,
  title: "IA OS System Agentic",
  description:
    "AI-OS es una plataforma que convierte un prompt de texto en una aplicación Next.js funcional de extremo a extremo: un pipeline de agentes LLM (LangChain + LangGraph) planifica, genera archivos, instala dependencias, verifica el build y sirve una preview en vivo dentro de un sandbox Docker real — todo transmitido en tiempo real a un cockpit tipo IDE con grafo de ejecución, editor, terminal y chat por agente.",
  image: getStorageUrl("portfolio-images", "projects/iaossystem/workflow-in-action.png"),
  technologies: ["React.js", "Next.js", "Fastify", "LangGraph", "Prisma", "Docker"],
  githubUrl: "https://github.com/KevinBolanosDev/ia-os-agents-operation",
  demoUrl: null,
  gallery: [
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/workflow.png"),
      title: "Grafo de Orquestación (DAG)",
      description:
        "Visualización interactiva del pipeline de agentes conectados (@xyflow/react), con estados en vivo — idle, thinking, executing, done, error — transmitidos por WebSocket.",
      size: "large",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/agents.png"),
      title: "Vista de Agentes",
      description:
        "Wizard de creación de agentes con plantillas, selección de modelo/proveedor LLM y niveles de spec (system/balanced/free) para controlar su autonomía.",
      size: "wide",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/tools.png"),
      title: "Herramientas y Sandbox",
      description:
        "Panel de herramientas y MCPs ejecutables, con sandbox real en contenedores Docker (dockerode) e integraciones OAuth para publicación en GitHub.",
      size: "wide",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/workflow-completed.png"),
      title: "Run Completado con Auto-Verificación",
      description:
        "Resultado de un run finalizado: verificación automática del build y loop de auto-corrección que reconcilia dependencias faltantes sin intervención manual.",
      size: "wide",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/ide-workspace-and-chat.png"),
      title: "IDE Shell + Chat Dock",
      description:
        "Cockpit tipo IDE con explorador de archivos, editor Monaco, terminal xterm.js y ChatDock con transcript persistente por agente, desacoplable a ventana propia.",
      size: "large",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/result-prompt-agents.png"),
      title: "Resultado: App Generada desde un Prompt",
      description:
        "Preview en vivo de una aplicación Next.js completa, generada de extremo a extremo por el pipeline de agentes a partir de un único prompt.",
      size: "large",
    },
    {
      src: getStorageUrl("portfolio-images", "projects/iaossystem/result-prompt-agents-02.png"),
      title: "Resultado: App Generada — Vista Adicional",
      description:
        "Otra vista de la aplicación generada, mostrando una interfaz funcional y navegable lista para usarse, sin edición manual posterior.",
      size: "large",
    },
  ],
  documentation: {
    overview:
      "AI-OS es un sistema agéntico que toma un prompt de texto y produce una aplicación Next.js corriendo de extremo a extremo: un LLM genera un plan estructurado, un pipeline de agentes escribe archivos en disco, instala dependencias, verifica el build y sirve una preview en vivo — todo transmitido en tiempo real a un cockpit web mediante un bus de eventos WebSocket validado con Zod.",
    features: [
      "Pipeline de agentes orquestado con LangGraph + LangChain (planner → generador de archivos → verificador → loop de auto-corrección) sobre Claude, con soporte multi-proveedor (OpenAI, DeepSeek) configurable por usuario.",
      "Bus de eventos en tiempo real vía WebSocket con esquema Zod compartido (`AgentEvent`, 18 tipos) entre el backend Fastify y el cockpit Next.js: estados de agente, logs, tool calls y progreso de archivos.",
      "Grafo de ejecución interactivo (@xyflow/react) que visualiza el DAG de agentes conectados, con verificación automática de build y auto-fix loop ante fallos.",
      "Sandbox real en contenedores Docker (dockerode) para instalar dependencias, compilar y servir preview en vivo de la app generada, con reconciliación automática de dependencias faltantes detectadas por parseo de imports.",
      "Autenticación multi-tenant con NextAuth.js (Auth.js v5) y puente JWT hacia Fastify, con aislamiento de proyectos y eventos por usuario.",
      "IDE shell propio: editor Monaco, terminal xterm.js, explorador de archivos y ChatDock con transcript persistente por agente, desacoplable a ventana independiente, animado con GSAP.",
    ],
    techStack:
      "Frontend con React 19 y Next.js 16 (App Router), Tailwind CSS 4 y Radix UI con componentes propios (class-variance-authority), Zustand para estado de cliente, Recharts para métricas, GSAP y Framer Motion para animación, y Monaco Editor + xterm.js + @xyflow/react embebidos para el IDE shell. Backend con Fastify y WebSocket, Prisma sobre PostgreSQL, Redis (ioredis) para estado/colas, LangChain + LangGraph orquestando llamadas a Anthropic Claude (y proveedores alternativos), Zod validando el contrato de eventos de extremo a extremo, y Dockerode para el sandboxing en contenedores. Monorepo con pnpm workspaces + Turborepo y paquete compartido `@aios/shared`.",
    challenges:
      "Diseñar un bus de eventos único y tipado (unión discriminada de Zod) que sirviera de contrato entre un backend de agentes asíncronos y un cockpit React en tiempo real, sin desincronización de estado. Orquestar múltiples agentes LLM con distintos niveles de autonomía (spec levels) sin que se desviaran del plan generado. Construir un loop de verificación + auto-fix capaz de detectar builds rotos, reconciliar dependencias faltantes y reintentar sin intervención humana. Aislar cada proyecto generado en un sandbox Docker real con puertos dinámicos, sirviendo preview en vivo sin bloquear el resto del sistema. Migrar la autenticación a multi-tenant preservando el filtrado de WebSocket por usuario sin romper runs en curso.",
  },
},
  {
  id: 5,
  title: "Cobro Diario",
  description:
    "Plataforma integral de gestión de cobranza diaria con control centralizado de clientes, créditos, rutas de cobro y portal cliente. Sistema multi-rol con diseño mobile-first para maximizar usabilidad en campo.",
  image: getStorageUrl("portfolio-images", "projects/cobrodiario/dashboard.png"),
  technologies: ["Next.js 16", "React 19", "NestJS", "Prisma v7", "TypeScript", "Zod", "TailwindCSS", "GSAP", "Supabase"],
  githubUrl: "https://github.com/KevinBolanosDev/accounts-receivable-management",
  demoUrl: "https://accounts-receivable-management-web.vercel.app/admin/login",
  gallery: [
    {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/dashboard.png"),
    title: "Dashboard Administrativo",
    description:
      "Panel centralizado con KPIs de cobranza semanal, análisis de recaudación por ruta, estado de clientes morosos y estadísticas en tiempo real. Visualización de tendencias con gráficos interactivos y acceso rápido a rutas prioritarias.",
    size: "large",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/clients.png"),
    title: "Gestión de Clientes",
    description:
      "Listado completo de clientes con filtrado por ruta y estado. Vista rápida de saldo pendiente, última cobranza y acciones. Búsqueda optimizada mobile-first para ubicar clientes en campo sin lag.",
    size: "wide",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/clients-details.png"),
    title: "Detalle de Cliente y Documentos",
    description:
      "Perfil completo del cliente con datos personales, documentos de identidad (frente/reverso con URLs firmadas), historial de créditos, resumen de deuda y opciones de reactivación. Interfaz para edición segura con validación en tiempo real.",
    size: "wide",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/credits-details.png"),
    title: "Cronograma de Crédito",
    description:
      "Desglose completo de cuotas (diarias/semanales/mensuales) con estado individual, fechas de vencimiento calculadas dinámicamente, monto de cada cuota e interés aplicado. Visualización de mora y opciones para anular o editar créditos (admin only).",
    size: "small",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/closure.png"),
    title: "Cierre Diario de Ruta",
    description:
      "Preview en vivo de cobranzas del día y transacción atómica de cierre. Snapshot inmutable que captura clientes pagados/impagos, total recaudado, créditos nuevos y PDF descargable. Idempotencia garantizada por BD (único cierre/día).",
    size: "small",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/routes-payments.png"),
    title: "Panel de Rutas y Cobranzas",
    description:
      "Vista operativa de todas las rutas asignadas a cobradores con estado vivo de avance del día, clientes visitados, monto recaudado y próximos a visitar. Acceso directo a cierre diario y histórico de cobranzas por ruta.",
    size: "small",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/routes-details.png"),
    title: "Detalle de Ruta y Clientes Asignados",
    description:
      "Vista detallada de ruta con lista de clientes asignados, cobrador responsable, estadísticas de cobranza y opciones de gestión. Permite ver cada cliente en la ruta, su deuda, última cobranza y estado de mora con una sola vista.",
    size: "tall",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/theme-dark-light.png"),
    title: "Sistema de Temas (Claro/Oscuro)",
    description:
      "Selector de modo por superficie: Admin oscuro por defecto, Cobrador claro para campo, Cliente claro para portal. Transición sin FOUC, tokens CSS con contraste WCAG AA, respeta prefers-reduced-motion. Preferencia guardada por usuaria.",
    size: "tall",
  },
  {
    src: getStorageUrl("portfolio-images", "projects/cobrodiario/receipt.png"),
    title: "Recibo Digital Interactivo",
    description:
      "Comprobante de pago server-rendered con código único, datos del cliente, crédito, cuota pagada y monto. Descargable como PDF o compartible por WhatsApp con enlace firmado. Accesible sin login vía capability URL.",
    size: "tall",
  },
  ],
  documentation: {
    overview:
      "CobroDiario es una plataforma SaaS especializada en gestión de cobranza diaria para empresas de microcrédito y financieras. Centraliza la administración de clientes, asignación de rutas a cobradores, seguimiento de créditos y pagos, además de ofrecer un portal seguro donde los clientes consultan su deuda y descargan recibos. Sistema multi-rol con autenticación JWT y validación end-to-end con Zod.",
    features: [
      "Gestión centralizada de clientes con captura de documentos (foto frente/reverso)",
      "Sistema de rutas de cobro asignadas a cobradores específicos",
      "Creación y seguimiento de créditos con cálculo automático de cuotas",
      "Registro de pagos con transacciones atómicas y control de carrera",
      "Cronograma de vencimientos con seguimiento de mora",
      "Generación de recibos digitales con firma electrónica",
      "Portal cliente con acceso seguro y cambio obligatorio de contraseña",
      "Anulación de pagos (nunca edición) para correcciones",
      "Reactivación de clientes dados de baja (soft-delete)",
      "Diseño completamente responsivo mobile-first",
      "Autenticación multi-rol con guards y permisos granulares",
      "Almacenamiento seguro de documentos con URLs firmadas",
      "Rate limiting y protección contra ataques",
    ],
    techStack:
      "Frontend: Next.js 16 con App Router, React 19, TypeScript, TailwindCSS v4 con Design System personalizado, GSAP para animaciones, Zod para validación, TanStack Query para data fetching, Zustand para estado. Backend: NestJS con módulos por feature, Prisma v7 con PostgreSQL, JWT para autenticación, validación compartida con Zod en @repo/types. Infraestructura: Supabase para base de datos y almacenamiento, Turborepo para monorepo, pnpm para gestión de dependencias.",
    challenges:
      "Implementar transacciones atómicas con control de carrera en pagos, diseñar validación dual client/server compartida entre web y API, crear cronograma de cuotas que soporte frecuencias variables (diaria/semanal/mensual), gestionar autenticación stateless con soft-delete y reactivaciones, optimizar interfaz mobile-first para cobradores en campo sin conexión confiable, implementar soft-deletes y auditoría sin comprometer rendimiento.",
  },
}
];

// Proyectos personales y de práctica
export const projects = [
  {
    id: 1,
    title: "News Homepage",
    description:
      "Página de noticias moderna con múltiples secciones, desarrollada como challenge de Frontend Mentor usando React y TailwindCSS.",
    image: getStorageUrl("portfolio-images", "projects/news-homepage.png"),
    technologies: ["React", "TailwindCSS"],
    githubUrl:
      "https://github.com/KevinBolanosDev/news-homepage-frontend-mentor",
    demoUrl: "https://news-homepage-mentor-solution.netlify.app/",
    documentation: {
      overview:
        "Un challenge de Frontend Mentor que consiste en replicar una página de noticias con un diseño limpio y profesional, incluyendo artículos destacados, sección de novedades y artículos trending.",
      features: [
        "Diseño responsivo con grid layout moderno",
        "Navegación con categorías (Home, New, Popular, Trending)",
        "Artículo principal destacado con imagen hero",
        "Sección de noticias nuevas con lista vertical",
        "Artículos numerados con thumbnails en la parte inferior",
      ],
      techStack:
        "React para componentes reutilizables y TailwindCSS para estilos utility-first con diseño responsivo.",
      challenges:
        "Replicar fielmente el diseño de Frontend Mentor manteniendo el layout responsivo y la estructura de grid para las diferentes secciones de contenido.",
    },
  },
  {
    id: 2,
    title: "Second Portfolio Web",
    description:
      "Mi segundo portafolio profesional con diseño oscuro futurista, secciones interactivas, galería de proyectos y formulario de contacto funcional.",
    image: getStorageUrl("portfolio-images", "projects/second-portfolio.png"),
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Animate.css"],
    githubUrl: "https://github.com/KevinBolanosDev/kevin-b-portfolio-dev",
    demoUrl: "https://kevin-b-portfolio-dev.netlify.app/",
    documentation: {
      overview:
        "Portafolio web completo con estética dark/cyber que presenta mi perfil como Full Stack Web Developer, mostrando un año de experiencia en tecnologías como HTML, CSS, JavaScript, React, NodeJS, MongoDB y PostgreSQL.",
      features: [
        "Diseño oscuro con grid de fondo y acentos en cyan/turquesa",
        "Sección de Skills con barras de progreso animadas (HTML, CSS, JS, React, NextJS, PostgreSQL)",
        "Galería de proyectos propios y challenges de Frontend Mentor",
        "Página de contacto con iconos de redes sociales y formulario funcional",
        "Navegación entre secciones (About, Education, Projects, Services, Contact)",
        "Animaciones suaves con Animate.css y efectos de escritura",
      ],
      techStack:
        "HTML5 para estructura semántica, CSS3 con efectos de grid y bordes luminosos, JavaScript vanilla para interactividad, Bootstrap para componentes responsivos y Animate.css para animaciones.",
      challenges:
        "Crear un diseño futurista con efectos de neón/cyber manteniendo la usabilidad, e implementar una galería de proyectos organizada por categorías (propios vs Frontend Mentor).",
    },
  },
];
