"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { technologies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useContent } from "@/lib/i18n/use-content";
import { TechIcon } from "@/lib/icons";

const EASE = [0.16, 1, 0.3, 1];
const LIME = "#A3E635";

function SectionHeader({ icon: Icon, title, subtitle, viewport }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: EASE }}
      className="mb-5 flex items-center gap-3"
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-[#050A18]"
        style={{
          background: `linear-gradient(135deg, ${LIME} 0%, #65A30D 100%)`,
          boxShadow: "0 0 16px rgba(163, 230, 53, 0.3)",
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="wf-font-display text-lg font-semibold text-[#EFF4FF]">
          {title}
        </h3>
        <p className="text-sm text-[#5B6A8A]">{subtitle}</p>
      </div>
    </motion.div>
  );
}

// Dimensiones fijas del box principal de cada nodo (h-20 w-28 en px).
const NODE_W = 112;
const NODE_H = 80;
const GAP = 20;
const MAX_COLS = 6;

/** Orden de las categorías y su color de acento para el label + glow. */
const CATEGORY_GROUPS = [
  { key: "frontend", labelKey: "skills.categoryFrontend", color: "#38BDF8" },
  { key: "backend", labelKey: "skills.categoryBackend", color: "#A3E635" },
  { key: "database", labelKey: "skills.categoryDatabase", color: "#4C8BF5" },
  { key: "devops", labelKey: "skills.categoryDevops", color: "#2DD4BF" },
  { key: "ai", labelKey: "skills.categoryAi", color: "#D97757" },
  { key: "tools", labelKey: "skills.categoryTools", color: "#C084FC" },
];

function CategoryLabel({ label, color }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      />
      <span
        className="wf-font-mono text-xs uppercase tracking-widest"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

/** Conector horizontal entre dos nodos (con flujo de datos animado). */
function HConnector({ reverse }) {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full overflow-visible"
      style={reverse ? { transform: "scaleX(-1)" } : undefined}
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="rgba(163, 230, 53, 0.25)"
        strokeWidth="1.5"
      />
      <line
        className="wf-data-flow"
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke={LIME}
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeLinecap="round"
      />
      <circle cx="0" cy="50%" r="2.5" fill={LIME} />
      <circle cx="100%" cy="50%" r="2.5" fill={LIME} />
    </svg>
  );
}

/** Conector vertical: baja al siguiente escalón de la escalera. */
function VConnector() {
  return (
    <svg aria-hidden="true" className="h-full w-full overflow-visible">
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="rgba(163, 230, 53, 0.25)"
        strokeWidth="1.5"
      />
      <line
        className="wf-data-flow"
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke={LIME}
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeLinecap="round"
      />
      <circle cx="50%" cy="0" r="2.5" fill={LIME} />
      <circle cx="50%" cy="100%" r="2.5" fill={LIME} />
    </svg>
  );
}

/**
 * Pipeline de tecnologías en escalera (layout boustrophedon) para UNA
 * categoría: la fila par fluye → derecha, baja un escalón al llegar
 * a la última columna, y la fila impar fluye ← izquierda. Los nodos
 * son estáticos (solo icono + nombre); la animación de flujo de
 * datos vive en los conectores (edges).
 */
function TechPipeline({ items, viewport }) {
  const containerRef = useRef(null);
  const [cols, setCols] = useState(1);

  // El contenedor scrolleable del modal recorta el overflow horizontal
  // (overflow-x-hidden), así que las columnas se calculan a partir del
  // ancho real disponible para que las cajas de tamaño fijo (h-20 w-28)
  // siempre quepan, incluso en mobile. Se tope además por items.length
  // para que categorías chicas (p. ej. 2 tecnologías) no queden con un
  // grid ancho y mayormente vacío.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;

    const measure = () => {
      const fitCols = Math.floor(
        (container.offsetWidth + GAP) / (NODE_W + GAP),
      );
      setCols(Math.max(1, Math.min(MAX_COLS, fitCols, items.length)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [items.length]);

  const rows = Math.ceil(items.length / cols);

  const cells = [];
  items.forEach((tech, i) => {
    const row = Math.floor(i / cols);
    const pos = i % cols;
    const isReverseRow = row % 2 === 1;
    const col = isReverseRow ? cols - 1 - pos : pos;

    cells.push({
      type: "node",
      key: tech.name,
      tech,
      gridColumn: col * 2 + 1,
      gridRow: row * 2 + 1,
    });

    if (i < items.length - 1) {
      const nextRow = Math.floor((i + 1) / cols);
      if (nextRow === row) {
        cells.push({
          type: "h",
          key: `h-${tech.name}`,
          gridColumn: Math.min(col, col + (isReverseRow ? -1 : 1)) * 2 + 2,
          gridRow: row * 2 + 1,
          reverse: isReverseRow,
        });
      } else {
        cells.push({
          type: "v",
          key: `v-${tech.name}`,
          gridColumn: col * 2 + 1,
          gridRow: row * 2 + 2,
        });
      }
    }
  });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: EASE }}
      className="grid items-stretch justify-center"
      style={{
        gridTemplateColumns: Array.from({ length: cols * 2 - 1 }, (_, i) =>
          i % 2 === 0 ? `${NODE_W}px` : `${GAP}px`,
        ).join(" "),
        gridTemplateRows: Array.from({ length: rows * 2 - 1 }, (_, i) =>
          i % 2 === 0 ? `${NODE_H}px` : "20px",
        ).join(" "),
      }}
    >
      {cells.map((cell) => {
        if (cell.type === "node") {
          return (
            <div
              key={cell.key}
              className="group h-20 w-28"
              style={{ gridColumn: cell.gridColumn, gridRow: cell.gridRow }}
            >
              <div
                className="wf-glass flex h-full flex-col items-center justify-center gap-1.5 rounded-xl p-2 transition-all duration-300 hover:border-[var(--tech-border)] hover:shadow-[0_0_18px_var(--tech-glow)]"
                style={{
                  "--tech-glow": `${cell.tech.color}40`,
                  "--tech-border": `${cell.tech.color}66`,
                }}
              >
                <div
                  className="rounded-lg p-1.5 text-[#EFF4FF] transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${cell.tech.color}18` }}
                >
                  <TechIcon
                    icon={cell.tech.icon}
                    color={cell.tech.color}
                    className="h-5 w-5"
                  />
                </div>
                <span className="line-clamp-1 text-center text-[10px] leading-tight text-[#94A3C8] transition-colors group-hover:text-[#EFF4FF]">
                  {cell.tech.name}
                </span>
              </div>
            </div>
          );
        }

        return (
          <div
            key={cell.key}
            style={{ gridColumn: cell.gridColumn, gridRow: cell.gridRow }}
          >
            {cell.type === "h" ? (
              <HConnector reverse={cell.reverse} />
            ) : (
              <VConnector />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

function ExperienceCards({ viewport, workExperience }) {
  const { t } = useLanguage();

  if (!workExperience || workExperience.length === 0) {
    return (
      <div className="wf-glass flex flex-col items-center rounded-xl border-dashed px-4 py-8 text-center">
        <Briefcase className="mb-3 h-10 w-10 text-[#5B6A8A]" />
        <p className="text-sm text-[#94A3C8]">
          {t("skills.fallbackExperience")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {workExperience.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, delay: index * 0.1, ease: EASE }}
          className="wf-glass-card rounded-2xl p-5"
          style={{ borderLeft: `3px solid ${LIME}` }}
        >
          <div className="mb-2 flex items-start justify-between gap-4">
            <div>
              <h4 className="font-semibold text-[#EFF4FF]">{exp.title}</h4>
              <p className="wf-font-mono text-sm text-[#7CB0FF]">
                {exp.company}
              </p>
            </div>
            <span className="wf-font-mono shrink-0 text-xs text-[#5B6A8A]">
              {exp.period}
            </span>
          </div>

          <p className="mb-3 text-sm leading-relaxed text-[#94A3C8]">
            {exp.description}
          </p>

          {exp.achievements && (
            <ul className="space-y-1.5">
              {exp.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-2 text-xs text-[#94A3C8]"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#34D399]" />
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function EducationTimeline({ viewport, education }) {
  const { t } = useLanguage();

  return (
    <div>
      {education.map((edu, index) => {
        const isCompleted = edu.status === "completed";
        const isLast = index === education.length - 1;

        return (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: index * 0.1, ease: EASE }}
            className="relative pl-9"
          >
            {!isLast && (
              <div
                className="absolute left-[11px] top-9 bottom-0 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(163, 230, 53, 0.4), transparent)",
                }}
              />
            )}

            <div
              className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: isCompleted
                  ? "rgba(52, 211, 153, 0.15)"
                  : "rgba(251, 191, 36, 0.15)",
                color: isCompleted ? "#34D399" : "#FBBF24",
                boxShadow: isCompleted
                  ? "0 0 10px rgba(52, 211, 153, 0.3)"
                  : "0 0 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <Clock className="h-4 w-4" />
              )}
            </div>

            <div className="pb-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold leading-tight text-[#EFF4FF]">
                    {edu.title}
                  </h4>
                  <p className="wf-font-mono mt-1 text-sm text-[#7CB0FF]">
                    {edu.institution}
                  </p>
                </div>
                <span className="wf-font-mono flex shrink-0 items-center gap-1.5 text-xs text-[#5B6A8A]">
                  <Calendar className="h-3 w-3" />
                  {edu.period}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-[#94A3C8]">
                {edu.description}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span
                  className="wf-font-mono inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px]"
                  style={{
                    backgroundColor: isCompleted
                      ? "rgba(52, 211, 153, 0.12)"
                      : "rgba(251, 191, 36, 0.12)",
                    color: isCompleted ? "#34D399" : "#FBBF24",
                    border: `1px solid ${
                      isCompleted
                        ? "rgba(52, 211, 153, 0.3)"
                        : "rgba(251, 191, 36, 0.3)"
                    }`,
                  }}
                >
                  {isCompleted ? (
                    <>
                      <Award className="h-3 w-3" />
                      {t("skills.statusCompleted")}
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3" />
                      {t("skills.statusInProgress")}
                    </>
                  )}
                </span>

                {edu.certificate && edu.certificate !== "#" && (
                  <a
                    href={edu.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#7CB0FF] hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("skills.viewCertificate")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function CertificationRows({ viewport, certifications }) {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.3, delay: index * 0.06, ease: EASE }}
          className="wf-glass group flex items-center justify-between rounded-xl p-3 transition-colors hover:border-[rgba(163,230,53,0.4)]"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: "rgba(163, 230, 53, 0.12)",
                color: LIME,
              }}
            >
              <Award className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h5 className="truncate text-sm font-medium leading-tight text-[#EFF4FF]">
                {cert.title}
              </h5>
              <p className="wf-font-mono text-xs text-[#5B6A8A]">
                {cert.platform}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="wf-font-mono text-xs text-[#5B6A8A]">
              {cert.date}
            </span>
            {cert.certificate && cert.certificate !== "#" && (
              <a
                href={cert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("skills.viewCertificateAria", cert.title)}
                className="rounded-md p-1.5 text-[#5B6A8A] transition-colors hover:text-[#7CB0FF]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Contenido del modal "Skills & Experience": stack tecnológico,
 * experiencia laboral, formación académica y certificaciones.
 * Cada bloque se revela al hacer scroll DENTRO del modal
 * (whileInView con root en el contenedor scrolleable del shell).
 */
export function SkillsContent({ scrollRef }) {
  const { t } = useLanguage();
  const { education, certifications, workExperience } = useContent();
  const viewport = {
    root: scrollRef,
    once: true,
    margin: "0px 0px -40px 0px",
  };

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader
          icon={Cpu}
          title={t("skills.techStackTitle")}
          subtitle={t("skills.techStackSubtitle")}
          viewport={viewport}
        />
        <div className="space-y-8">
          {CATEGORY_GROUPS.map((group) => {
            const items = technologies[group.key];
            if (!items?.length) return null;
            return (
              <div key={group.key}>
                <CategoryLabel label={t(group.labelKey)} color={group.color} />
                <TechPipeline items={items} viewport={viewport} />
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader
          icon={Briefcase}
          title={t("skills.experienceTitle")}
          subtitle={t("skills.experienceSubtitle")}
          viewport={viewport}
        />
        <ExperienceCards viewport={viewport} workExperience={workExperience} />
      </section>

      <section>
        <SectionHeader
          icon={GraduationCap}
          title={t("skills.educationTitle")}
          subtitle={t("skills.educationSubtitle")}
          viewport={viewport}
        />
        <EducationTimeline viewport={viewport} education={education} />
      </section>

      <section>
        <SectionHeader
          icon={BookOpen}
          title={t("skills.certificationsTitle")}
          subtitle={t("skills.certificationsSubtitle")}
          viewport={viewport}
        />
        <CertificationRows viewport={viewport} certifications={certifications} />
      </section>
    </div>
  );
}
