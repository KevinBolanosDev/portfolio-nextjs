"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getStepConfig, TOTAL_STEPS } from "@/lib/data/workflowNodes";

const STORAGE_KEY = "wf-runner-v1";
const REVEAL_PAUSE_MS = 350;

/**
 * Máquina de estados del pipeline del home.
 *
 * Pasos (0-indexed): 0..3 = secciones, 4 = nodo final "completado".
 * `revealedSteps` cuenta cuántos pasos ya se revelaron; mientras
 * `isRunning` es true, el progreso simulado avanza hacia el paso
 * `revealedSteps` (el siguiente sin revelar).
 *
 * El progreso usa rAF con easing smoothstep + un wobble senoidal
 * que se atenúa al final, para que se sienta como un pipeline real
 * (acelera, duda, remata) y no como una barra lineal.
 */
export function useWorkflowRunner({ reducedMotion = false } = {}) {
  const [revealedSteps, setRevealedSteps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [modalId, setModalId] = useState(null);

  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const runningRef = useRef(false);

  const cancelTimers = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    rafRef.current = null;
    timeoutRef.current = null;
  }, []);

  // Restaurar avance previo de la misma sesión (evita repetir la
  // intro al volver al home). Solo en cliente, tras hidratar.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (typeof saved.revealedSteps === "number" && saved.revealedSteps > 0) {
        setRevealedSteps(Math.min(saved.revealedSteps, TOTAL_STEPS));
        setHasStarted(true);
      }
    } catch {
      // storage no disponible: la experiencia funciona igual
    }
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ revealedSteps }));
    } catch {
      // ignorar: persistencia es opcional
    }
  }, [revealedSteps, hasStarted]);

  useEffect(() => cancelTimers, [cancelTimers]);

  const runStep = useCallback(
    (stepIndex) => {
      if (runningRef.current || stepIndex >= TOTAL_STEPS) return;
      setHasStarted(true);

      if (reducedMotion) {
        setRevealedSteps(stepIndex + 1);
        return;
      }

      runningRef.current = true;
      setIsRunning(true);
      setProgress(0);

      const { duration } = getStepConfig(stepIndex);
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = t * t * (3 - 2 * t);
        const wobble = Math.sin(t * 14) * 0.04 * (1 - t);
        const pct = Math.max(0, Math.min(1, eased + wobble));
        setProgress(Math.round(pct * 100));

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        setProgress(100);
        timeoutRef.current = setTimeout(() => {
          runningRef.current = false;
          setIsRunning(false);
          setRevealedSteps(stepIndex + 1);
        }, REVEAL_PAUSE_MS);
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    [reducedMotion],
  );

  /** Arranca el pipeline desde el nodo de inicio. */
  const start = useCallback(() => {
    if (revealedSteps === 0) runStep(0);
  }, [revealedSteps, runStep]);

  /** Avanza al siguiente paso sin revelar. */
  const continueRun = useCallback(() => {
    runStep(revealedSteps);
  }, [revealedSteps, runStep]);

  /** Revela todo el pipeline de inmediato (saltar intro / a11y). */
  const skipAll = useCallback(() => {
    cancelTimers();
    runningRef.current = false;
    setIsRunning(false);
    setProgress(0);
    setHasStarted(true);
    setRevealedSteps(TOTAL_STEPS);
  }, [cancelTimers]);

  /** Reinicia la experiencia desde cero. */
  const replay = useCallback(() => {
    cancelTimers();
    runningRef.current = false;
    setIsRunning(false);
    setProgress(0);
    setHasStarted(false);
    setRevealedSteps(0);
    setModalId(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorar
    }
  }, [cancelTimers]);

  const openModal = useCallback((id) => setModalId(id), []);
  const closeModal = useCallback(() => setModalId(null), []);

  return {
    revealedSteps,
    isRunning,
    progress,
    hasStarted,
    isCompleted: revealedSteps >= TOTAL_STEPS,
    // Paso hacia el que avanza el progreso mientras corre
    targetStep: isRunning ? revealedSteps : null,
    modalId,
    start,
    continueRun,
    skipAll,
    replay,
    openModal,
    closeModal,
  };
}
