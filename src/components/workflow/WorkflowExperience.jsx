"use client";

import { useReducedMotion } from "framer-motion";
import { FastForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWorkflowRunner } from "@/hooks/use-workflow-runner";
import {
  getStepConfig,
  workflowSections,
} from "@/lib/data/workflowNodes";
import { MODAL_CONTENT, ModalShell } from "./modals";
import { SectionNode } from "./SectionNode";
import { StartNode } from "./StartNode";
import { WorkflowCanvas } from "./WorkflowCanvas";
import { WorkflowComplete } from "./WorkflowComplete";
import { WorkflowEdges } from "./WorkflowEdge";
import { GhostNode } from "./WorkflowNode";

/**
 * Experiencia principal del home: un pipeline de automatización donde
 * cada nodo completado revela una sección del portafolio.
 *
 * Los edges se calculan midiendo los wrappers reales de cada nodo
 * (getBoundingClientRect relativo al contenedor del flow), por lo que
 * funcionan igual en el zig-zag de desktop y en la columna de mobile.
 * Las animaciones de entrada usan solo transform/opacity en el card
 * interno — el wrapper que ancla los edges nunca se transforma.
 */
export function WorkflowExperience() {
  const prefersReduced = useReducedMotion();
  const runner = useWorkflowRunner({ reducedMotion: prefersReduced ?? false });
  const {
    revealedSteps,
    isRunning,
    progress,
    targetStep,
    isCompleted,
    modalId,
  } = runner;

  const flowRef = useRef(null);
  const nodeEls = useRef(new Map());
  const interactedRef = useRef(false);

  const [edges, setEdges] = useState([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [announcement, setAnnouncement] = useState("");

  const revealedSections = Math.min(revealedSteps, workflowSections.length);
  const visibleSections = workflowSections.slice(0, revealedSections);

  const setNodeRef = (id) => (el) => {
    if (el) nodeEls.current.set(id, el);
    else nodeEls.current.delete(id);
  };

  /** Orden actual de la cadena de nodos montados. */
  const getChainOrder = useCallback(() => {
    const order = [
      { id: "start", config: null },
      ...workflowSections
        .slice(0, Math.min(revealedSteps, workflowSections.length))
        .map((s) => ({ id: s.id, config: s })),
    ];
    if (isRunning && targetStep !== null) {
      order.push({ id: "ghost", config: getStepConfig(targetStep) });
    } else if (isCompleted) {
      order.push({ id: "complete", config: getStepConfig(workflowSections.length) });
    }
    return order;
  }, [revealedSteps, isRunning, targetStep, isCompleted]);

  /** Recalcula los paths SVG entre nodos consecutivos. */
  const measure = useCallback(() => {
    const container = flowRef.current;
    if (!container) return;

    const crect = container.getBoundingClientRect();
    setSvgSize({ width: container.offsetWidth, height: container.offsetHeight });

    const chain = getChainOrder()
      .map((item) => ({ ...item, el: nodeEls.current.get(item.id) }))
      .filter((item) => item.el);

    const next = [];
    for (let i = 0; i < chain.length - 1; i++) {
      const a = chain[i].el.getBoundingClientRect();
      const b = chain[i + 1].el.getBoundingClientRect();
      const dest = chain[i + 1];

      const x1 = a.left + a.width / 2 - crect.left;
      const y1 = a.bottom - crect.top;
      const x2 = b.left + b.width / 2 - crect.left;
      const y2 = b.top - crect.top;
      const bend = Math.max(40, (y2 - y1) * 0.5);

      next.push({
        id: `edge-${chain[i].id}-${dest.id}`,
        d: `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}`,
        color: dest.config?.color ?? "#4C8BF5",
        state: dest.id === "ghost" ? "running" : "done",
      });
    }
    setEdges(next);
  }, [getChainOrder]);

  // Re-medir cuando cambia la estructura del pipeline y ante resize
  useEffect(() => {
    measure();
    const container = flowRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [measure]);

  // Cámara: desplazar el viewport al nodo activo (solo tras interacción)
  useEffect(() => {
    if (!interactedRef.current) return;
    let targetId;
    if (isRunning) targetId = "ghost";
    else if (isCompleted) targetId = "complete";
    else if (revealedSteps > 0)
      targetId = workflowSections[revealedSteps - 1]?.id;
    if (!targetId) return;

    const frame = requestAnimationFrame(() => {
      nodeEls.current.get(targetId)?.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "center",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [isRunning, revealedSteps, isCompleted, prefersReduced]);

  // Anuncio para lectores de pantalla al revelar un nodo
  useEffect(() => {
    if (revealedSteps === 0) return;
    const config = getStepConfig(revealedSteps - 1);
    setAnnouncement(`Nodo ${config.title} desbloqueado`);
  }, [revealedSteps]);

  const handleStart = () => {
    interactedRef.current = true;
    runner.start();
  };

  const handleContinue = () => {
    interactedRef.current = true;
    runner.continueRun();
  };

  const handleSkip = () => {
    interactedRef.current = true;
    runner.skipAll();
  };

  const handleReplay = () => {
    interactedRef.current = false;
    runner.replay();
    flowRef.current?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  const modalSection = workflowSections.find((s) => s.id === modalId) ?? null;
  const modalEntry = modalSection ? MODAL_CONTENT[modalSection.id] : null;
  const ghostConfig = targetStep !== null ? getStepConfig(targetStep) : null;
  const ghostAlignment =
    targetStep !== null && targetStep < workflowSections.length
      ? targetStep % 2 === 0
        ? "self-center lg:self-start"
        : "self-center lg:self-end"
      : "self-center";

  const startStatus =
    revealedSteps > 0 ? "done" : isRunning ? "running" : "idle";

  return (
    <section
      id="home"
      className="relative flex-1 overflow-hidden bg-[#050A18]"
    >
      <WorkflowCanvas parallaxEnabled={!prefersReduced} />

      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Saltar la experiencia (a11y / visitantes recurrentes) */}
        {!isCompleted && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={handleSkip}
              className="wf-font-mono inline-flex cursor-pointer items-center gap-1.5 text-xs text-[#5B6A8A] transition-colors hover:text-[#94A3C8]"
            >
              <FastForward className="h-3.5 w-3.5" />
              Saltar intro
            </button>
          </div>
        )}

        <div
          ref={flowRef}
          className="relative flex min-h-[60dvh] flex-col justify-center gap-14 lg:gap-20"
        >
          <WorkflowEdges
            edges={edges.map((edge) =>
              edge.state === "running" ? { ...edge, progress } : edge,
            )}
            width={svgSize.width}
            height={svgSize.height}
            reducedMotion={prefersReduced ?? false}
          />

          <div
            ref={setNodeRef("start")}
            className="relative z-10 w-full max-w-2xl self-center"
          >
            <StartNode status={startStatus} onStart={handleStart} />
          </div>

          {visibleSections.map((section, index) => (
            <div
              key={section.id}
              ref={setNodeRef(section.id)}
              className={`relative z-10 w-full max-w-md ${
                index % 2 === 0
                  ? "self-center lg:self-start"
                  : "self-center lg:self-end"
              }`}
            >
              <SectionNode
                section={section}
                isLatest={index === revealedSections - 1}
                canContinue={!isRunning && !isCompleted}
                onOpenModal={runner.openModal}
                onContinue={handleContinue}
              />
            </div>
          ))}

          {isRunning && ghostConfig && (
            <div
              ref={setNodeRef("ghost")}
              className={`relative z-10 w-full max-w-md ${ghostAlignment}`}
            >
              <GhostNode step={ghostConfig} progress={progress} />
            </div>
          )}

          {isCompleted && (
            <div
              ref={setNodeRef("complete")}
              className="relative z-10 w-full max-w-2xl self-center"
            >
              <WorkflowComplete
                onReplay={handleReplay}
                onOpenModal={runner.openModal}
              />
            </div>
          )}
        </div>
      </div>

      <ModalShell
        section={modalSection}
        maxWidth={modalEntry?.maxWidth}
        onClose={runner.closeModal}
      >
        {(scrollRef) => {
          const Content = modalEntry.Content;
          return <Content scrollRef={scrollRef} />;
        }}
      </ModalShell>
    </section>
  );
}
