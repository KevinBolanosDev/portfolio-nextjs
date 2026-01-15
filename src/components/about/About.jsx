"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { useHydrated } from "@/hooks/use-hydration";
import { profile } from "@/lib/data";
import { TechStack } from "./TechStack";

export function About() {
  const isHydrated = useHydrated();

  return (
    <div className="h-full flex flex-col">
      {/* Header con foto y título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-8"
      >
        {/* Foto de perfil */}
        <div className="relative mb-6">
          <div className="relative w-40 h-40">
            {/* Borde exterior rotando clockwise */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from -90deg, #ca8a04, #0284c7, transparent, transparent)",
                padding: "4px",
              }}
            >
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>

            {/* Borde medio rotando counter-clockwise */}
            <div
              className="absolute inset-2 rounded-full animate-reverse-spin"
              style={{
                background:
                  "conic-gradient(from 90deg, #0ea5e9, #ca8a04, transparent, transparent)",
                padding: "4px",
              }}
            >
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>
            {/* Imagen */}
            <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl">
              <Image
                src={profile.src}
                alt={profile.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Badge de disponibilidad */}
          {profile.available && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600/50 border border-sky-600/20 text-xs font-medium text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Disponible
              </span>
            </div>
          )}
        </div>

        {/* Nombre y título */}
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {profile.name}
        </h1>
        <p className="text-primary font-medium mb-2">{profile.title}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-sky-600" />
          <span>{profile.location}</span>
        </div>
      </motion.div>

      {/* Card de descripción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700/40 to-blue-300/30 rounded-2xl" />
        <div className="relative p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-sky-600" />
            <h3 className="text-sm font-semibold text-foreground">
              Acerca de mí
            </h3>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            {profile.bio.paragraphs.map((paragraph) => (
              <p key={paragraph.substring(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stack tecnológico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1"
      >
        <TechStack />
      </motion.div>
    </div>
  );
}
