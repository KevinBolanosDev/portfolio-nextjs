"use client";

import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useContent } from "@/lib/i18n/use-content";

/**
 * Nodo inicial del pipeline (orchestrator): bienvenida + CTA "Iniciar".
 * Es el único elemento de la pantalla con gradient-border animado
 * permanente, según la regla de performance del DS v3.
 */
export function StartNode({ status = "idle", onStart }) {
  const isIdle = status === "idle";
  const isRunning = status === "running";
  const { t } = useLanguage();
  const { startNode } = useContent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`wf-gradient-border wf-glass-card rounded-2xl ${
        isRunning ? "wf-shimmer" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-5 px-6 py-10 text-center sm:px-12">
        {/* Badge de estado del sistema */}
        <div className="wf-glass flex items-center gap-2 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D399]" />
          </span>
          <span className="wf-font-mono text-xs uppercase tracking-widest text-[#94A3C8]">
            {isRunning ? t("start.running") : t("start.systemReady")}
          </span>
        </div>

        <div>
          <h1 className="wf-font-display wf-text-gradient text-4xl font-bold sm:text-5xl">
            {startNode.title}
          </h1>
          <p className="wf-font-mono mt-2 text-sm text-[#7CB0FF]">
            {startNode.subtitle}
          </p>
        </div>

        <p className="max-w-lg text-pretty text-sm leading-relaxed text-[#94A3C8] sm:text-base">
          {startNode.description}
        </p>

        {status !== "done" ? (
          <motion.button
            type="button"
            onClick={onStart}
            disabled={!isIdle}
            whileHover={isIdle ? { scale: 1.03 } : undefined}
            whileTap={isIdle ? { scale: 0.97 } : undefined}
            className="wf-glow-secondary inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#4C8BF5] px-8 py-3.5 font-semibold text-white transition-opacity disabled:cursor-default disabled:opacity-80"
          >
            {isRunning ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t("start.runningCta")}
              </>
            ) : (
              <>
                <Play className="h-5 w-5 fill-current" />
                {t("start.startCta")}
              </>
            )}
          </motion.button>
        ) : (
          <p className="wf-font-mono flex items-center gap-2 text-xs text-[#34D399]">
            {t("start.pipelineStarted")}
          </p>
        )}

        <p className="wf-font-mono text-[10px] uppercase tracking-widest text-[#5B6A8A]">
          {startNode.slug}
        </p>
      </div>
    </motion.div>
  );
}
