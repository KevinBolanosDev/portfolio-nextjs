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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 py-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Columna izquierda - About */}
          <div className="h-full overflow-y-auto scrollbar-hide">
            <About />
          </div>

          {/* Separador vertical (solo desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Columna derecha - Experience */}
          <div className="h-full overflow-hidden">
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}
