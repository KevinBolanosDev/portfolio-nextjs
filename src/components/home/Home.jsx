"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { useHydrated } from "@/hooks/use-hydration";
import { Button } from "../ui/button";

export function Home() {
  // Usar hook de hidratación para evitar mismatch SSR/Client
  const isHydrated = useHydrated();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh)] flex-1 flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Imagen de fondo con efecto degradado profesional */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://dmzuhmxpktahdtzwuwci.supabase.co/storage/v1/object/public/portfolio-images/background.jpg')",
        }}
      />
      {/* Overlay degradado para desvanecer la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Gradiente de fondo animado (sobre la imagen) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20 animate-pulse-slow" />

      {/* Efectos de fondo sutiles */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
      </div> */}

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-sky-600/10 border border-sky-600/20 rounded-full text-sm text-sky-600 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span className="font-medium">Disponible para proyectos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Hola, soy{" "}
          <span className="text-foreground font-bold bg-gradient-to-r from-primary to-accent bg-clip-text">
            Kevin Bolaños
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance font-light"
        >
          Desarrollador Full Stack especializado en Frontend y crear{" "}
          <span className="text-foreground font-medium">
            experiencias web modernas.
          </span>
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          Transformo ideas en soluciones digitales robustas y escalables usando
          <span className="text-sky-600 font-medium">
            {" "}
            React.js y Next.js
          </span>{" "}
          para el frontend,
          <span className="text-sky-600 font-medium"> Node.js</span> para el
          backend, tecnologías de vanguardia.
        </motion.p>

        {/* Iconos de tecnologías */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isHydrated ? 1 : 0,
            scale: isHydrated ? 1 : 0.9,
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-card border-sky-600/40 border-2 rounded-lg hover:border-sky-700/70 hover:border-3 transition-colors">
            <Code2 className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Clean Code</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border-yellow-600/40 border-2 rounded-lg hover:border-yellow-700/70 hover:border-3 transition-colors">
            <Rocket className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium">Escalable</span>
          </div>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="group px-8 py-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 cursor-pointer"
            >
              Ver mis proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-border text-foreground rounded-lg font-medium hover:bg-muted hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              Sobre mí
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-border text-foreground rounded-lg font-medium hover:bg-muted hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              Contactar
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
