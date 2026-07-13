"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Contenido del modal "About me": foto con doble borde animado,
 * identidad y card de descripción. Colores de la sección (#C084FC).
 */
export function AboutContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-7 text-center"
    >
      {/* Foto con doble borde conic-gradient en contra-rotación */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.7 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 18 },
          },
        }}
        className="relative"
      >
        <div className="relative h-40 w-40 sm:h-44 sm:w-44">
          <div
            className="animate-spin-slow absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from -90deg, #C084FC, #4C8BF5, transparent, transparent)",
              padding: "4px",
            }}
          >
            <div className="h-full w-full rounded-full bg-[#050A18]" />
          </div>

          <div
            className="animate-reverse-spin absolute inset-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 90deg, #38BDF8, #C084FC, transparent, transparent)",
              padding: "4px",
            }}
          >
            <div className="h-full w-full rounded-full bg-[#050A18]" />
          </div>

          <div className="absolute inset-3 overflow-hidden rounded-full shadow-2xl">
            <Image
              src={profile.src}
              alt={profile.alt}
              fill
              sizes="176px"
              className="object-cover"
            />
          </div>
        </div>

        {profile.available && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <span className="wf-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-[#EFF4FF]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
              </span>
              Disponible
            </span>
          </div>
        )}
      </motion.div>

      {/* Identidad */}
      <motion.div variants={item}>
        <h3 className="wf-font-display text-3xl font-bold text-[#EFF4FF]">
          {profile.name}
        </h3>
        <p className="wf-font-mono mt-1.5 text-sm text-[#7CB0FF]">
          {profile.title}
        </p>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#94A3C8]">
          <MapPin className="h-4 w-4 text-[#C084FC]" />
          {profile.location}
        </p>
      </motion.div>

      {/* Card de descripción */}
      <motion.div variants={item} className="w-full">
        <div
          className="wf-glass-card rounded-2xl p-5 text-left sm:p-6"
          style={{ borderLeft: "3px solid #C084FC" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#C084FC]" />
            <h4 className="text-sm font-semibold text-[#EFF4FF]">
              Acerca de mí
            </h4>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-[#94A3C8]">
            {profile.bio.paragraphs.map((paragraph) => (
              <p key={paragraph.substring(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
