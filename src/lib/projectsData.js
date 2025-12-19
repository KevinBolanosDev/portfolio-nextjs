// Proyectos profesionales / empresariales
export const professionalProjects = [
  {
    id: 100,
    title: "AriaLeads",
    description:
      "Plataforma SaaS empresarial de gestión integral de leads para la industria de seguros de vida, con dashboards para administradores y agentes.",
    image: "/project-001.png",
    technologies: ["React", "Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    githubUrl: null, // Proyecto privado
    demoUrl: "https://login.arialeads.com",
    documentation: {
      overview:
        "AriaLeads es una plataforma SaaS empresarial de gestión integral de leads (clientes potenciales) desarrollada con tecnologías modernas de React/Next.js. El sistema está diseñado para la compra, venta, distribución y gestión de leads en la industria de seguros de vida y otros sectores comerciales.",
      features: [
        "Sistema de autenticación con roles (Admin/Agent)",
        "Admin Control Center con métricas en tiempo real (+38,000 agentes activos)",
        "Dashboard de agente con KPIs personalizados y seguimiento de premiums",
        "Marketplace de leads con mapa interactivo de USA (+160,000 leads disponibles)",
        "Gestión de leads por categorías (Mailed, Marketplace, Digital, Lead Packs)",
        "Filtros avanzados por estado, condado, campaña y tipo de lead (Gold/Silver)",
        "Sistema financiero con tracking de revenue ($692,659+ en premiums)",
        "Modo claro/oscuro y diseño completamente responsivo",
      ],
      techStack:
        "Frontend con React/Next.js y TailwindCSS para UI moderna. Backend con Node.js y PostgreSQL para gestión de datos a gran escala. Integración con APIs de geolocalización para mapa interactivo.",
      challenges:
        "Desarrollar una plataforma escalable capaz de manejar decenas de miles de agentes y cientos de miles de leads, con dashboards diferenciados para administradores y agentes, manteniendo un rendimiento óptimo.",
    },
  },
];

// Proyectos personales y de práctica
export const projects = [
  {
    id: 1,
    title: "Primer CV",
    description:
      "Mi primer proyecto web: un CV personal construido desde cero con HTML y CSS, aplicando fundamentos de estructura web y diseño visual.",
    image: "/first-cv.png",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/KevinBolanosDev/html_intro_cv",
    demoUrl: "https://kevinbolanosdev.github.io/html_intro_cv/",
    documentation: {
      overview:
        "Este fue mi primer acercamiento al desarrollo web. Un currículum vitae interactivo que muestra mi información profesional, habilidades e intereses tecnológicos con un diseño moderno y responsivo.",
      features: [
        "Diseño visual atractivo con gradientes y tipografía personalizada",
        "Sección de habilidades con barras de progreso",
        "Intereses tecnológicos organizados visualmente",
        "Información de contacto con iconos",
        "Layout estructurado con CSS Grid y Flexbox",
      ],
      techStack:
        "HTML5 semántico para la estructura del documento. CSS3 para estilos, incluyendo gradientes, flexbox y diseño responsivo.",
      challenges:
        "Aprender a estructurar correctamente un documento HTML y aplicar estilos CSS para lograr un diseño profesional fue el primer gran paso en mi camino como desarrollador.",
    },
  },
  {
    id: 2,
    title: "First Portfolio Web",
    description:
      "Mi primer portafolio web con múltiples secciones, navegación entre tabs, información personal, proyectos y formulario de contacto.",
    image: "/first-portfolio.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/KevinBolanosDev/personal-cv",
    demoUrl: "https://kevin-bolanos-dev-cv.netlify.app/",
    documentation: {
      overview:
        "Un portafolio web completo que presenta mi perfil como Desarrollador Full-Stack MERN, con un diseño moderno usando colores oscuros y acentos en verde azulado.",
      features: [
        "Navegación entre secciones (Sobre mí, Educación, Habilidades, Proyectos, Contacto)",
        "Diseño responsivo con elementos geométricos decorativos",
        "Sección de presentación con foto de perfil",
        "Formulario de contacto funcional",
        "Animaciones y transiciones suaves",
      ],
      techStack:
        "HTML5 semántico para la estructura, CSS3 con animaciones y diseño responsivo, JavaScript vanilla para interactividad y navegación.",
      challenges:
        "Crear un diseño visualmente atractivo con formas geométricas flotantes y lograr una navegación fluida entre las diferentes secciones del portafolio.",
    },
  },
  {
    id: 3,
    title: "News Homepage",
    description:
      "Página de noticias moderna con múltiples secciones, desarrollada como challenge de Frontend Mentor usando React y TailwindCSS.",
    image: "/news-homepage.png",
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
    id: 4,
    title: "Second Portfolio Web",
    description:
      "Mi segundo portafolio profesional con diseño oscuro futurista, secciones interactivas, galería de proyectos y formulario de contacto funcional.",
    image: "/second-portfolio.png",
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
