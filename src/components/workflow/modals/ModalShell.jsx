"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NODE_ICONS } from "../node-icons";

/**
 * Cuerpo del modal. Vive en un componente propio para que useScroll
 * se inicialice solo cuando el contenedor scrolleable está montado
 * (si se llama con el modal cerrado, el ref nunca hidrata y Motion
 * lanza el warning "Container ref is defined but not hydrated").
 */
function ModalBody({ section, maxWidth, onClose, children }) {
  const prefersReduced = useReducedMotion();
  const closeRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const barScale = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  // Parallax interno: los orbes se desplazan más lento que el scroll
  const orbTopY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const orbBottomY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const Icon = NODE_ICONS[section.icon];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050A18]/70 p-3 backdrop-blur-[8px] sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wf-modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`wf-glass-strong flex max-h-[88dvh] w-full ${maxWidth} flex-col overflow-hidden rounded-3xl`}
        style={{ borderTop: `2px solid ${section.color}` }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header fijo */}
        <div className="flex items-center gap-4 px-5 pb-4 pt-5 sm:px-8 sm:pt-6">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
            style={{
              background: `linear-gradient(135deg, ${section.color} 0%, ${section.colorDark} 100%)`,
              boxShadow: `0 0 20px ${section.glow}`,
            }}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>

          <div className="min-w-0 flex-1">
            <h2
              id="wf-modal-title"
              className="wf-font-display truncate text-xl font-bold text-[#EFF4FF] sm:text-2xl"
            >
              {section.title}
            </h2>
            <p className="wf-font-mono truncate text-xs text-[#5B6A8A]">
              {section.slug}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="wf-glass cursor-pointer rounded-lg p-2 text-[#94A3C8] transition-colors hover:text-[#EFF4FF]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Barra de progreso de scroll */}
        <div className="relative h-0.5 shrink-0 bg-[rgba(76,139,245,0.12)]">
          <motion.div
            className="absolute inset-0 origin-left"
            style={{
              scaleX: barScale,
              backgroundColor: section.color,
              boxShadow: `0 0 8px ${section.glow}`,
            }}
          />
        </div>

        {/* Contenido scrolleable con parallax interno */}
        <div
          ref={scrollRef}
          className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
        >
          {/* Orbes decorativos en parallax (overflow-hidden: los orbes
              sobresalen del borde y sin clip generan scroll horizontal) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <motion.div
              style={{ y: prefersReduced ? 0 : orbTopY }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full blur-3xl"
            >
              <div
                className="h-full w-full rounded-full opacity-15"
                style={{ backgroundColor: section.color }}
              />
            </motion.div>
            <motion.div
              style={{ y: prefersReduced ? 0 : orbBottomY }}
              className="absolute -left-20 top-[60%] h-64 w-64 rounded-full blur-3xl"
            >
              <div className="h-full w-full rounded-full bg-[#4C8BF5] opacity-10" />
            </motion.div>
          </div>

          <div className="relative px-5 py-6 sm:px-8 sm:py-8">
            {typeof children === "function" ? children(scrollRef) : children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Shell compartido de los modales de sección.
 * - Header fijo con identidad de la sección + botón cerrar.
 * - Barra de progreso de scroll (scroll-linked, color de la sección).
 * - Área de contenido scrolleable con orbes de gradiente en parallax.
 *
 * `children` puede ser una función que recibe el ref del contenedor
 * scrolleable, para que el contenido use whileInView con ese root.
 */
export function ModalShell({ section, maxWidth = "max-w-2xl", onClose, children }) {
  return (
    <AnimatePresence>
      {section && (
        <ModalBody
          key={section.id}
          section={section}
          maxWidth={maxWidth}
          onClose={onClose}
        >
          {children}
        </ModalBody>
      )}
    </AnimatePresence>
  );
}
