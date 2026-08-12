/**
 * Diccionario de strings de interfaz (botones, labels, toasts, aria-labels).
 * El contenido largo (bio, proyectos, experiencia) vive en ./content.js
 * @module lib/i18n/ui
 */

export const ui = {
  es: {
    languageToggle: {
      label: "Idioma",
      switchTo: "Switch to English",
    },
    common: {
      processing: "Procesando…",
      loadingAria: (title) => `Cargando ${title}`,
    },
    start: {
      running: "Ejecutando",
      systemReady: "Sistema listo",
      runningCta: "Ejecutando…",
      startCta: "Iniciar workflow",
      pipelineStarted: "✓ pipeline iniciado",
    },
    workflowExperience: {
      skipIntro: "Saltar intro",
      nodeUnlocked: (title) => `Nodo ${title} desbloqueado`,
    },
    sectionNode: {
      completed: "Completado",
      viewDetails: "Ver detalles",
      continueCta: "Continuar",
    },
    workflowComplete: {
      title: "Workflow completado",
      status: "4/4 nodos · exit 0 · pipeline ok",
      description:
        "Ya conoces el mapa completo. Explora cualquier sección directamente desde aquí, o vuelve a ejecutar el pipeline cuando quieras.",
      replay: "Reproducir de nuevo",
    },
    about: {
      heading: "Acerca de mí",
      available: "Disponible",
    },
    skills: {
      techStackTitle: "Stack Tecnológico",
      techStackSubtitle: "Tecnologías y herramientas que domino",
      experienceTitle: "Experiencia Laboral",
      experienceSubtitle: "Proyectos profesionales",
      educationTitle: "Formación Académica",
      educationSubtitle: "Educación y bootcamps",
      certificationsTitle: "Certificaciones",
      certificationsSubtitle: "Cursos adicionales",
      fallbackExperience:
        "Actualmente enfocado en proyectos freelance y desarrollo de plataformas SaaS como AriaLeads y AireHub.",
      statusCompleted: "Completado",
      statusInProgress: "En curso",
      viewCertificate: "Ver certificado",
      viewCertificateAria: (title) => `Ver certificado: ${title}`,
    },
    contact: {
      intro:
        "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad.",
      infoTitle: "Información de Contacto",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      locationLabel: "Ubicación",
      locationValue: "Cali, Colombia",
      whatsappGreeting: "Hola",
      mapTitle: "Mapa de ubicación de Cali, Valle del Cauca",
      successTitle: "¡Gracias por tu mensaje!",
      successDescription: "Te responderé lo antes posible.",
      toastSuccessTitle: "¡Mensaje enviado correctamente!",
      toastSuccessDescription: "Te responderé lo antes posible.",
      toastErrorTitle: "Error al enviar el mensaje",
      toastErrorDescription:
        "Por favor, verifica los campos e intenta nuevamente.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      sending: "Enviando...",
      send: "Enviar Mensaje",
    },
    projects: {
      professional: "Profesional",
      personal: "Personal",
      pipelineStatus: (count) => `pipeline/projects · ${count} nodos · exit 0`,
      viewFullProject: "Ver proyecto completo",
    },
    projectDetail: {
      prevImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      imageLoadError: "No se pudo cargar la imagen",
      closeLightbox: "Cerrar imagen ampliada",
      closeDetail: "Cerrar detalle del proyecto",
      expandImageAria: (title) => `Ampliar imagen: ${title}`,
      overview: "Descripción general",
      features: "Características",
      techStack: "Stack técnico",
      challenges: "Desafíos",
      viewLive: "Ver en producción",
      viewGithub: "Ver en GitHub",
      privateCode: "código privado",
    },
    modalShell: {
      close: "Cerrar",
    },
    footer: {
      rights: (year) => `Copyright © ${year} Todos los derechos reservados.`,
      mailSubject: "Consulta desde el portafolio",
      mailBody:
        "Hola Kevin, me gustaría contactarte para cotizar un proyecto.",
    },
  },
  en: {
    languageToggle: {
      label: "Language",
      switchTo: "Cambiar a Español",
    },
    common: {
      processing: "Processing…",
      loadingAria: (title) => `Loading ${title}`,
    },
    start: {
      running: "Running",
      systemReady: "System ready",
      runningCta: "Running…",
      startCta: "Start workflow",
      pipelineStarted: "✓ pipeline started",
    },
    workflowExperience: {
      skipIntro: "Skip intro",
      nodeUnlocked: (title) => `Node ${title} unlocked`,
    },
    sectionNode: {
      completed: "Completed",
      viewDetails: "View details",
      continueCta: "Continue",
    },
    workflowComplete: {
      title: "Workflow completed",
      status: "4/4 nodes · exit 0 · pipeline ok",
      description:
        "You now know the full map. Explore any section directly from here, or replay the pipeline whenever you want.",
      replay: "Replay",
    },
    about: {
      heading: "About me",
      available: "Available",
    },
    skills: {
      techStackTitle: "Tech Stack",
      techStackSubtitle: "Technologies and tools I work with",
      experienceTitle: "Work Experience",
      experienceSubtitle: "Professional projects",
      educationTitle: "Education",
      educationSubtitle: "Degrees and bootcamps",
      certificationsTitle: "Certifications",
      certificationsSubtitle: "Additional courses",
      fallbackExperience:
        "Currently focused on freelance projects and building SaaS platforms like AriaLeads and AireHub.",
      statusCompleted: "Completed",
      statusInProgress: "In progress",
      viewCertificate: "View certificate",
      viewCertificateAria: (title) => `View certificate: ${title}`,
    },
    contact: {
      intro:
        "Have a project in mind? I'd love to hear your ideas and help you bring them to life.",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      locationLabel: "Location",
      locationValue: "Cali, Colombia",
      whatsappGreeting: "Hello",
      mapTitle: "Map of Cali, Valle del Cauca",
      successTitle: "Thanks for your message!",
      successDescription: "I'll get back to you as soon as possible.",
      toastSuccessTitle: "Message sent successfully!",
      toastSuccessDescription: "I'll get back to you as soon as possible.",
      toastErrorTitle: "Failed to send message",
      toastErrorDescription: "Please check the fields and try again.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sending: "Sending...",
      send: "Send Message",
    },
    projects: {
      professional: "Professional",
      personal: "Personal",
      pipelineStatus: (count) => `pipeline/projects · ${count} nodes · exit 0`,
      viewFullProject: "View full project",
    },
    projectDetail: {
      prevImage: "Previous image",
      nextImage: "Next image",
      imageLoadError: "Couldn't load the image",
      closeLightbox: "Close expanded image",
      closeDetail: "Close project detail",
      expandImageAria: (title) => `Expand image: ${title}`,
      overview: "Overview",
      features: "Features",
      techStack: "Tech stack",
      challenges: "Challenges",
      viewLive: "View live",
      viewGithub: "View on GitHub",
      privateCode: "private code",
    },
    modalShell: {
      close: "Close",
    },
    footer: {
      rights: (year) => `Copyright © ${year} All rights reserved.`,
      mailSubject: "Inquiry from portfolio",
      mailBody: "Hi Kevin, I'd like to get in touch about a project quote.",
    },
  },
};
