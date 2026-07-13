"use client";

import { motion } from "framer-motion";
import { NodeProgress } from "./NodeProgress";

/**
 * Nodo "fantasma": placeholder con borde punteado que ocupa la
 * posición del siguiente nodo mientras el progreso avanza hacia él.
 * Al llegar a 100% se reemplaza por el SectionNode real.
 */
export function GhostNode({ step, progress }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="wf-shimmer flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed bg-[#0F1A2E]/25 px-6 py-8 backdrop-blur-sm"
      style={{ borderColor: `${step.color}66` }}
    >
      <NodeProgress
        progress={progress}
        color={step.color}
        logs={step.logs}
        label={`Cargando ${step.title}`}
      />
      <p className="wf-font-mono mt-3 text-[10px] uppercase tracking-widest text-[#5B6A8A]">
        {step.slug}
      </p>
    </motion.div>
  );
}
