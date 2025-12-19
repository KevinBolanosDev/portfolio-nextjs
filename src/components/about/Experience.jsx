"use client";

import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Asistente Técnico en Programación de Software",
    company: "Politécnico PIO",
    location: "Presente",
    period: "Septiembre 2024 - Presente",
    description:
      "Formación técnica en desarrollo de software, algoritmos y estructuras de datos.",
    status: "En curso",
  },
  {
    title: "Bootcamp Desarrollo Full Stack MERN",
    company: "Ada School",
    location: "Completado",
    period: "Marzo 2023 - Noviembre 2023",
    description:
      "Desarrollo completo de aplicaciones web usando MongoDB, Express, React y Node.js.",
    status: "Completado",
  },
];

const certifications = [
  "Introducción al Desarrollo Frontend",
  "Control de Versiones con Git",
  "Fundamentos de Ciberseguridad",
  "Desarrollo Web Full Stack",
];

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 px-6 lg:px-12 bg-muted/30  border-2 h-full border-blue-500"
    >
      <div className="flex flex-col justify-between h-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Experiencia & Educación
          </h2>

          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.period}`}
                className={`bg-card border border-border rounded-lg p-6 transition-all duration-500 hover:border-primary/50 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 lg:mt-0">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3 text-pretty">
                  {exp.description}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    exp.status === "En curso"
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {exp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Certificaciones Adicionales
          </h3>
          <div className="flex flex-wrap justify-center gap-3 cursor-pointer">
            {certifications.map((cert, index) => (
              <span
                key={cert}
                className={`px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground transition-all duration-500 hover:border-primary/50 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
