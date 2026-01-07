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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50" />
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-2 ring-primary/20">
            <Image
              src={profile.src}
              alt={profile.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Badge de disponibilidad */}
          {profile.available && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary backdrop-blur-sm">
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
          <MapPin className="h-4 w-4" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
        <div className="relative p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" />
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
