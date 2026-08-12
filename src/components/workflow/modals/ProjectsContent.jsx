"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useContent } from "@/lib/i18n/use-content";
import { WorkflowEdges } from "../WorkflowEdge";
import { ProjectDetailModal } from "./ProjectDetailModal";

const TEAL = "#2DD4BF";
const EASE = [0.16, 1, 0.3, 1];

/** Paleta neón: cada edge del pipeline recibe su propio color. */
const EDGE_COLORS = ["#2DD4BF", "#38BDF8", "#818CF8", "#C084FC", "#A3E635"];

/**
 * Nodo de proyecto. La imagen tiene parallax real: se desplaza
 * dentro de su marco según el scroll del modal (useScroll con
 * target del card + container del shell).
 */
function ProjectNode({ project, index, scrollRef, onOpen }) {
  const cardRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: scrollRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: fromLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ root: scrollRef, once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="wf-glass-card wf-glass-card-hover overflow-hidden rounded-2xl"
      style={{ borderLeft: `3px solid ${project.categoryColor}` }}
    >
      {/* Imagen con parallax interno */}
      <div className="relative h-44 overflow-hidden sm:h-48">
        <motion.div
          style={{ y: prefersReduced ? 0 : imageY, scale: 1.12 }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E]/90 via-transparent to-transparent" />

        <span
          className="wf-font-mono absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] backdrop-blur-sm"
          style={{
            backgroundColor: `${project.categoryColor}22`,
            color: project.categoryColor,
            border: `1px solid ${project.categoryColor}55`,
          }}
        >
          {project.category}
        </span>
        <span className="wf-font-mono absolute right-3 top-3 rounded-full bg-[#050A18]/60 px-2.5 py-1 text-[10px] text-[#94A3C8] backdrop-blur-sm">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h4 className="wf-font-display text-lg font-semibold text-[#EFF4FF]">
          {project.title}
        </h4>

        <p className="line-clamp-3 text-sm leading-relaxed text-[#94A3C8]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="wf-font-mono rounded-full border border-[rgba(76,139,245,0.2)] bg-[rgba(76,139,245,0.08)] px-2 py-0.5 text-[10px] text-[#7CB0FF]"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => onOpen(project)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-1 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-[#2DD4BF] to-[#0D9488] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_14px_rgba(45,212,191,0.25)]"
        >
          <Eye className="h-4 w-4" />
          {t("projects.viewFullProject")}
        </motion.button>
      </div>
    </motion.div>
  );
}

/**
 * Contenido del modal "Projects": pipeline vertical en zig-zag con
 * un nodo por proyecto (sin animación de carga — todos visibles),
 * conectados por edges con flujo de datos y partículas, igual que
 * el workflow del home. El detalle abre un modal anidado que
 * fusiona galería + documentación.
 */
export function ProjectsContent({ scrollRef }) {
  const prefersReduced = useReducedMotion();
  const { t } = useLanguage();
  const { professionalProjects, personalProjects } = useContent();
  const [selected, setSelected] = useState(null);

  const containerRef = useRef(null);
  const nodeEls = useRef(new Map());
  const [edges, setEdges] = useState([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  /** Pipeline único: profesionales primero, luego personales. */
  const allProjects = useMemo(
    () => [
      ...professionalProjects.map((p) => ({
        ...p,
        key: `pro-${p.id}`,
        category: t("projects.professional"),
        categoryColor: TEAL,
      })),
      ...personalProjects.map((p) => ({
        ...p,
        key: `per-${p.id}`,
        category: t("projects.personal"),
        categoryColor: "#818CF8",
      })),
    ],
    [professionalProjects, personalProjects, t],
  );

  const setNodeRef = (key) => (el) => {
    if (el) nodeEls.current.set(key, el);
    else nodeEls.current.delete(key);
  };

  // Edges medidos con offsetTop/offsetLeft (coordenadas de layout):
  // getBoundingClientRect devuelve valores escalados mientras el
  // modal anima su entrada (scale 0.95) y desalineaba los edges
  // inferiores. Los offsets son inmunes a transforms.
  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    setSvgSize({
      width: container.offsetWidth,
      height: container.offsetHeight,
    });

    const next = [];
    for (let i = 0; i < allProjects.length - 1; i++) {
      const a = nodeEls.current.get(allProjects[i].key);
      const b = nodeEls.current.get(allProjects[i + 1].key);
      if (!a || !b) continue;

      const x1 = a.offsetLeft + a.offsetWidth / 2;
      const y1 = a.offsetTop + a.offsetHeight;
      const x2 = b.offsetLeft + b.offsetWidth / 2;
      const y2 = b.offsetTop;
      const bend = Math.max(36, (y2 - y1) * 0.5);

      next.push({
        id: `project-edge-${i}`,
        d: `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}`,
        color: EDGE_COLORS[i % EDGE_COLORS.length],
        state: "done",
      });
    }
    setEdges(next);
  }, [allProjects]);

  useEffect(() => {
    measure();
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <>
      <p className="wf-font-mono mb-8 text-center text-xs text-[#5B6A8A]">
        {t("projects.pipelineStatus", allProjects.length)}
      </p>

      <div
        ref={containerRef}
        className="relative flex flex-col gap-20 md:gap-28"
      >
        <WorkflowEdges
          edges={edges}
          width={svgSize.width}
          height={svgSize.height}
          reducedMotion={prefersReduced ?? false}
        />

        {allProjects.map((project, index) => (
          <div
            key={project.key}
            ref={setNodeRef(project.key)}
            className={`relative z-10 w-full max-w-lg ${
              index % 2 === 0
                ? "self-center md:self-start"
                : "self-center md:self-end"
            }`}
          >
            <ProjectNode
              project={project}
              index={index}
              scrollRef={scrollRef}
              onOpen={setSelected}
            />
          </div>
        ))}
      </div>

      <ProjectDetailModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
