# Portfolio Web - Kevin Bolaños

Portfolio web personal desarrollado con tecnologías modernas de React/Next.js que presenta mi perfil como Desarrollador Full Stack, y enfoque en Frontend, proyectos profesionales y personales, stack tecnológico y formulario de contacto.

![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Storage-3ECF8E?style=flat-square&logo=supabase)

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Secciones del Portfolio](#secciones-del-portfolio)
- [Arquitectura](#arquitectura)

## Características

- **Diseño Moderno y Responsivo**: UI elegante con soporte completo para dispositivos móviles y desktop
- **Tema Claro/Oscuro**: Sistema de temas con `next-themes` y persistencia de preferencias
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Optimización de Rendimiento**: Turbopack habilitado para desarrollo y build
- **Manejo de Hidratación**: Hook personalizado para evitar mismatch SSR/Client
- **Almacenamiento en la Nube**: Imágenes servidas desde Supabase Storage
- **Formulario de Contacto Funcional**: Integración con Formspree
- **Linting Moderno**: Configuración de Biome para código limpio

## Tecnologías

### Frontend

| Tecnología    | Versión  | Descripción                       |
| ------------- | -------- | --------------------------------- |
| Next.js       | 15.5.9   | Framework de React con App Router |
| React         | 19.1.0   | Biblioteca de UI                  |
| TailwindCSS   | 4.0      | Framework de CSS utility-first    |
| Framer Motion | 12.23.22 | Biblioteca de animaciones         |
| Lucide React  | 0.544.0  | Iconos SVG                        |

### Backend & Servicios

| Tecnología | Descripción                              |
| ---------- | ---------------------------------------- |
| Supabase   | Almacenamiento de imágenes (Storage)     |
| Formspree  | Procesamiento de formularios de contacto |

### Herramientas de Desarrollo

| Herramienta | Versión | Descripción          |
| ----------- | ------- | -------------------- |
| Biome       | 2.2.0   | Linter y formateador |
| PostCSS     | -       | Procesador de CSS    |

## Estructura del Proyecto

```
portfolio-web/
├── src/
│   ├── app/                      # App Router de Next.js
│   │   ├── home/                 # Página de inicio
│   │   ├── about/                # Página "Acerca de"
│   │   ├── projects/             # Página de proyectos
│   │   ├── contact/              # Página de contacto
│   │   ├── layout.jsx            # Layout principal
│   │   ├── page.jsx              # Página raíz (redirect)
│   │   └── globals.css           # Estilos globales
│   │
│   ├── components/
│   │   ├── home/                 # Componente Hero principal
│   │   ├── about/                # Componentes de perfil y tech stack
│   │   │   ├── About.jsx
│   │   │   ├── TechStack.jsx
│   │   │   ├── Timeline.jsx
│   │   │   └── Experience.jsx
│   │   ├── projects/             # Galería y cards de proyectos
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectsCard.jsx
│   │   │   ├── ProjectsGallery.jsx
│   │   │   └── ProjectsDocs.jsx
│   │   ├── contact/              # Formulario de contacto
│   │   ├── layout/               # Navbar, Footer, ThemeProvider
│   │   └── ui/                   # Componentes reutilizables (Button, Card, Input, etc.)
│   │
│   ├── lib/
│   │   ├── data/                 # Datos estáticos
│   │   │   ├── profile.js        # Información personal
│   │   │   ├── projectsData.js   # Proyectos profesionales y personales
│   │   │   ├── technologies.js   # Stack tecnológico
│   │   │   └── education.js      # Educación y experiencia
│   │   ├── icons/                # Iconos de tecnologías personalizados
│   │   ├── supabase.js           # Cliente y helpers de Supabase
│   │   └── utils.js              # Utilidades (cn para clases)
│   │
│   └── hooks/
│       └── use-hydration.js      # Hook para manejo de hidratación
│
├── biome.json                    # Configuración de Biome
├── tailwind.config.js            # Configuración de Tailwind
├── next.config.mjs               # Configuración de Next.js
└── package.json
```

## Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm, pnpm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/KevinBolanosDev/portfolio-nextjs.git
cd portfolio-web
```

2. **Instalar dependencias**

```bash
npm install
# o
pnpm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env.local
```

4. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

```
http://localhost:3000
```

## Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

## Scripts Disponibles

| Script   | Comando          | Descripción                                 |
| -------- | ---------------- | ------------------------------------------- |
| `dev`    | `npm run dev`    | Inicia servidor de desarrollo con Turbopack |
| `build`  | `npm run build`  | Genera build de producción                  |
| `start`  | `npm run start`  | Inicia servidor de producción               |
| `lint`   | `npm run lint`   | Ejecuta Biome para verificar código         |
| `format` | `npm run format` | Formatea código con Biome                   |

## Secciones del Portfolio

### Home

Página principal con:

- Badge de disponibilidad animado
- Título y subtítulo con gradientes
- Descripción del perfil profesional
- Badges de "Clean Code" y "Escalable"
- CTAs hacia proyectos, about y contacto
- Fondo con imagen y overlays de gradiente

### About (Acerca de)

Información personal completa:

- Foto de perfil con badge de disponibilidad
- Nombre, título y ubicación
- Biografía en múltiples párrafos
- **TechStack**: Stack tecnológico organizado por categorías
  - Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, TailwindCSS
  - Backend: Node.js, Express
  - Bases de datos: PostgreSQL, MongoDB
  - Herramientas: Git, GitHub, VS Code

### Projects (Proyectos)

Galería de proyectos dividida en:

#### Proyectos Profesionales

- **AriaLeads**: Plataforma SaaS de gestión de leads para seguros de vida
- **AireHub**: Plataforma integral para agentes de seguros con gamificación

#### Proyectos Personales

- Primer CV (HTML/CSS)
- First Portfolio Web (HTML/CSS/JS)
- News Homepage (React/TailwindCSS)
- Second Portfolio Web (Bootstrap/Animate.css)

Cada proyecto incluye:

- Imagen destacada
- Descripción
- Tecnologías utilizadas
- Links a GitHub y demo
- Galería de capturas
- Documentación detallada

### Contact (Contacto)

Formulario de contacto funcional:

- Información de contacto (email, teléfono, ubicación)
- Mapa de Google Maps embebido
- Formulario con validación (nombre, email, mensaje)
- Integración con Formspree para envío de emails

## Arquitectura

### Patrones Utilizados

- **App Router**: Estructura de rutas basada en carpetas de Next.js 15
- **Client Components**: Componentes interactivos con `"use client"`
- **Composition Pattern**: Componentes UI reutilizables en `/ui`
- **Data Layer**: Datos separados en `/lib/data` para fácil mantenimiento
- **Custom Hooks**: `useHydrated` para manejo de SSR/Client

### Sistema de Temas

```jsx
// ThemeProvider envuelve toda la app
<ThemeProvider>
  <Navbar />
  <main>{children}</main>
  <Footer />
</ThemeProvider>
```

El toggle de tema utiliza `next-themes` con soporte para:

- Tema claro (light)
- Tema oscuro (dark)
- Preferencia del sistema

### Supabase Storage

Las imágenes se almacenan en Supabase Storage y se acceden mediante:

```js
import { getStorageUrl } from "@/lib/supabase";

// Obtener URL de imagen
const imageUrl = getStorageUrl("portfolio-images", "projects/project-001.png");
```

### Animaciones

Framer Motion se utiliza para:

- Animaciones de entrada (fade in, slide up)
- Transiciones entre estados
- Efectos hover en cards y botones

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenido */}
</motion.div>
```

---

## Autor

**Kevin Andrés Bolaños**

- Email: im.kevinbolanos.dev@gmail.com
- LinkedIn: [linkedin.com/in/kevinbolanosdev](www.linkedin.com/in/kevinbolanosdev)
- GitHub: [github.com/KevinBolanosDev](https://github.com/KevinBolanosDev)
- Ubicación: Cali, Colombia

---

## Licencia

Este proyecto es privado y de uso personal.
