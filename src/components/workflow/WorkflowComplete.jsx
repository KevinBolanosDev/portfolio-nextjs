"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useContent } from "@/lib/i18n/use-content";
import { NODE_ICONS } from "./node-icons";

/**
 * Nodo final del pipeline: resumen del run + accesos rápidos que
 * abren el modal de cada sección + botón para reproducir la experiencia.
 */
export function WorkflowComplete({ onReplay, onOpenModal }) {
  const { t } = useLanguage();
  const { workflowSections } = useContent();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: [0.9, 1.04, 1] }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="wf-glass-card wf-glow-success rounded-2xl border-[#34D399]/30"
    >
      <div className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
        >
          <CheckCircle2 className="h-12 w-12 text-[#34D399]" />
        </motion.div>

        <div>
          <h2 className="wf-font-display text-3xl font-bold text-[#EFF4FF]">
            {t("workflowComplete.title")}
          </h2>
          <p className="wf-font-mono mt-2 text-xs text-[#34D399]">
            {t("workflowComplete.status")}
          </p>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-[#94A3C8]">
          {t("workflowComplete.description")}
        </p>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {workflowSections.map((section) => {
            const Icon = NODE_ICONS[section.icon];
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onOpenModal(section.id)}
                className="wf-glass group flex cursor-pointer flex-col items-center gap-2 rounded-xl px-3 py-4 transition-transform hover:scale-[1.03]"
                style={{ borderColor: `${section.color}44` }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{
                    background: `linear-gradient(135deg, ${section.color} 0%, ${section.colorDark} 100%)`,
                  }}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-[#EFF4FF]">
                  {section.title}
                  <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onReplay}
          className="wf-font-mono inline-flex cursor-pointer items-center gap-2 text-xs text-[#5B6A8A] transition-colors hover:text-[#94A3C8]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("workflowComplete.replay")}
        </button>
      </div>
    </motion.div>
  );
}
