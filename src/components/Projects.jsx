"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-commerce Full Stack",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "/modern-ecommerce-interface.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/KevinBolanosDev",
    demo: "https://example.com",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo para visualización de datos con gráficos en tiempo real y métricas avanzadas.",
    image: "/analytics-dashboard.png",
    tech: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    github: "https://github.com/KevinBolanosDev",
    demo: "https://example.com",
  },
  {
    title: "API REST Escalable",
    description:
      "API robusta con autenticación JWT, documentación Swagger y arquitectura microservicios.",
    image: "/api-documentation-interface-swagger.jpg",
    tech: ["Node.js", "Express", "JWT", "Docker"],
    github: "https://github.com/KevinBolanosDev",
    demo: "https://example.com",
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación colaborativa para gestión de proyectos con funcionalidades en tiempo real.",
    image: "/task-management-app-interface-kanban-board.jpg",
    tech: ["React", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com/KevinBolanosDev",
    demo: "https://example.com",
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-6 lg:px-12 border-2 h-full border-blue-500"
    >
      <div className="">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo full stack y mi capacidad para crear soluciones
            completas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
