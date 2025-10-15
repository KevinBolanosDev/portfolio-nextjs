"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDropzone from "./ReactDropzone";
import { Button } from "./ui/button";

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAbout = () => {
    router.push("/about");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <ReactDropzone />
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Hola, soy <span className="text-primary">Kevin</span>
        </h1>

        <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance">
          Desarrollador Full Stack especializado en crear{" "}
          <span className="text-accent">experiencias web excepcionales</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Me especializo en el desarrollo de aplicaciones web modernas usando
          React, Node.js, y tecnologías de vanguardia. Transformo ideas en
          soluciones digitales robustas y escalables.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 animate-glow"
          >
            Ver mis proyectos
          </Button>
          <Button
            onClick={handleAbout}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 animate-glow"
          >
            Sobre mi
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300"
          >
            Contactar
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
}
