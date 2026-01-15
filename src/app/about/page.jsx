import { About } from "@/components/about/About";
import { Experience } from "@/components/about/Experience";

export const metadata = {
  title: "Sobre Mí | Kevin Bolaños",
  description:
    "Conoce más sobre Kevin Bolaños, desarrollador Full Stack especializado en React, Node.js y tecnologías web modernas.",
};

export default function AboutPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* Gradiente de fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-background to-blue-300/20" />

      {/* Contenido principal */}
      <div className="relative z-10 h-full px-6 py-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Columna izquierda - About */}
          <div className="h-full overflow-y-auto scrollbar-hide">
            <About />
          </div>

          {/* Columna derecha - Experience */}
          <div className="h-full overflow-hidden">
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}
