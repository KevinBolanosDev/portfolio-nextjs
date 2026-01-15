"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/use-hydration";
import {
  CertificationsSection,
  EducationTimeline,
  ExperienceSection,
} from "./Timeline";

export function Experience() {
  const isHydrated = useHydrated();

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-2xl text-center font-bold text-foreground mb-1">
          Experiencia & Educación
        </h2>
        <p className="text-muted-foreground text-sm text-center">
          Mi trayectoria profesional y formación académica
        </p>
      </motion.div>

      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-hide">
        {/* Timeline de educación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <EducationTimeline />
        </motion.div>

        {/* Experiencia laboral */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExperienceSection />
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHydrated ? 1 : 0, y: isHydrated ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CertificationsSection />
        </motion.div>
      </div>
    </div>
  );
}
