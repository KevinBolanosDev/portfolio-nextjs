import { About } from "@/components/about/About";
import { Experience } from "@/components/about/Experience";

function AboutPage() {
  return (
    <main className="relative flex-1 flex gap-10 px-6 py-12 overflow-hidden">
      {/* Gradiente de fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 w-1/2">
        <About id="about" />
      </div>
      <div className="relative z-10 w-1/2">
        <Experience id="experience" />
      </div>
    </main>
  );
}

export default AboutPage;
