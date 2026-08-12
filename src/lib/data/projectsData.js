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
