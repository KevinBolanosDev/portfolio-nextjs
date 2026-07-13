"use client";

import { AnimatePresence, motion } from "framer-motion";

const RING_RADIUS = 30;
const RING_CIRC = 2 * Math.PI * RING_RADIUS;

/**
 * Anillo de progreso del nodo en ejecución: porcentaje en mono,
 * y una línea de "log" rotativa estilo terminal de CI.
 */
export function NodeProgress({ progress, color, logs = [], label }) {
  const logIndex = Math.min(
    logs.length - 1,
    Math.floor((progress / 100) * logs.length),
  );
  const currentLog = logs[logIndex] ?? "Procesando…";

  return (
    <div
      className="flex flex-col items-center gap-4"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label={label}
    >
      <div className="relative h-20 w-20">
        <svg
          aria-hidden="true"
          viewBox="0 0 72 72"
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="36"
            cy="36"
            r={RING_RADIUS}
            fill="none"
            stroke="rgba(76, 139, 245, 0.15)"
            strokeWidth="4"
          />
          <circle
            cx="36"
            cy="36"
            r={RING_RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={RING_CIRC}
            strokeDashoffset={RING_CIRC * (1 - progress / 100)}
            style={{
              filter: `drop-shadow(0 0 6px ${color})`,
              transition: "stroke-dashoffset 0.15s linear",
            }}
          />
        </svg>
        <span className="wf-font-mono absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#EFF4FF]">
          {progress}%
        </span>
      </div>

      <div className="wf-font-mono h-5 overflow-hidden text-xs text-[#94A3C8]">
        <AnimatePresence mode="wait">
          <motion.p
            key={logIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <span style={{ color }}>&gt;</span> {currentLog}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
