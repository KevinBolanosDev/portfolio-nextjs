"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
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
      id="about"
      className="py-20 px-6 lg:px-12 border-2 h-full border-blue-500"
    >
      <div>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Acerca de mí
          </h2>

          <div className="grid gap-12 items-center">
            <div className="w-1/2 mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                Soy un desarrollador full stack apasionado por crear soluciones
                digitales innovadoras. Con experiencia en el desarrollo de
                aplicaciones web modernas, me especializo en tecnologías como
                React, Node.js, y bases de datos tanto SQL como NoSQL.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                Mi enfoque proactivo y mi resistencia para resolver desafíos me
                llevan a buscar soluciones efectivas, siempre buscando
                crecimiento, aprendizaje continuo y expandiendo constantemente
                mis habilidades técnicas.
              </p>

              <p className="text-muted-foreground leading-relaxed text-pretty">
                Actualmente estoy estudiando Asistente Técnico en Programación
                de Software en el Politécnico PIO, complementando mi formación
                con especializaciones en desarrollo backend con Java y múltiples
                certificaciones en tecnologías web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
