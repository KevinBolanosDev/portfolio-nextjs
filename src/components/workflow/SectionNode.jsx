"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NODE_ICONS } from "./node-icons";

/**
 * Card-nodo de una sección del portafolio ya revelada.
 * Estados: el último nodo revelado ofrece "Continuar" para avanzar
 * el pipeline; los anteriores quedan en done pero siguen abriendo
 * su modal de detalles.
 */
export function SectionNode({ section, isLatest, canContinue, onOpenModal, onContinue }) {
  const Icon = NODE_ICONS[section.icon];
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isLatest ? 1 : 0.88, scale: [0.9, 1.04, 1] }}
      transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      className="wf-glass-card wf-glass-card-hover rounded-2xl"
      style={{
        borderLeft: `3px solid ${section.color}`,
        boxShadow: isLatest
          ? `0 8px 32px rgba(0,0,0,0.3), 0 0 32px ${section.glow}, inset 0 1px 0 rgba(255,255,255,0.05)`
          : undefined,
      }}
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          {/* Icono con gradiente del color de la sección */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
            style={{
              background: `linear-gradient(135deg, ${section.color} 0%, ${section.colorDark} 100%)`,
              boxShadow: `0 0 16px ${section.glow}`,
            }}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="wf-font-display text-lg font-semibold text-[#EFF4FF]">
              {section.title}
            </h3>
            <p className="wf-font-mono truncate text-[11px] text-[#5B6A8A]">
              {section.slug}
            </p>
          </div>

          <span className="wf-font-mono flex shrink-0 items-center gap-1 rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-2.5 py-1 text-[10px] text-[#34D399]">
            <Check className="h-3 w-3" />
            {t("sectionNode.completed")}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-[#94A3C8]">
          {section.summary}
        </p>

        {/* Stats decorativas estilo plataforma de automatización */}
        <p className="wf-font-mono flex items-center gap-1.5 text-[11px] text-[#5B6A8A]">
          <Zap className="h-3 w-3 text-[#FBBF24]" />
          {(section.duration / 1000).toFixed(1)}s · exit 0 · #0{section.step}
        </p>

        <div className="flex flex-wrap gap-3">
          <motion.button
            type="button"
            onClick={() => onOpenModal(section.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="wf-glass inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#EFF4FF] transition-colors hover:border-[rgba(76,139,245,0.4)]"
          >
            <Eye className="h-4 w-4" />
            {t("sectionNode.viewDetails")}
          </motion.button>

          {isLatest && canContinue && (
            <motion.button
              type="button"
              onClick={onContinue}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#4C8BF5] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_16px_rgba(56,189,248,0.3)]"
            >
              {t("sectionNode.continueCta")}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
