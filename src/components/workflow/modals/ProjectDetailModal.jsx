"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ImageOff,
  Layers,
  ListChecks,
  Loader2,
  Lock,
  Mountain,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const TEAL = "#2DD4BF";

// Detecta capturas móviles/verticales para darles una tarjeta más angosta
const MOBILE_KEYWORDS = ["mobile", "movil", "phone", "responsive"];
const isMobileImage = (item) =>
  item.size === "tall" ||
  MOBILE_KEYWORDS.some((keyword) => item.src.toLowerCase().includes(keyword));

function DocBlock({ icon: Icon, title, children }) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#EFF4FF]">
        <Icon className="h-4 w-4" style={{ color: TEAL }} />
        {title}
      </h4>
      {children}
    </div>
  );
}

// Flecha de navegación con glow neón teal sutil (se intensifica en hover).
function NavArrow({ direction, onClick }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={isPrev ? "Imagen anterior" : "Imagen siguiente"}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border text-[#2DD4BF] backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-[#050A18]/90 sm:h-12 sm:w-12 ${
        isPrev ? "left-2 sm:left-4" : "right-2 sm:right-4"
      }`}
      style={{
        borderColor: "rgba(45,212,191,0.35)",
        backgroundColor: "rgba(5,10,24,0.7)",
        boxShadow: "0 0 10px rgba(45,212,191,0.15)",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = "rgba(45,212,191,0.9)";
        event.currentTarget.style.boxShadow = "0 0 18px rgba(45,212,191,0.55)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(45,212,191,0.35)";
        event.currentTarget.style.boxShadow = "0 0 10px rgba(45,212,191,0.15)";
      }}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}

/**
 * Visor a pantalla completa de una captura del carrusel. Se monta por
 * encima del modal de detalle (z-70). El clic en el fondo la cierra y
 * detiene la propagación para no cerrar también el modal padre. Con más
 * de una imagen muestra flechas para recorrer la galería.
 */
function ImageLightbox({ image, index, total, onClose, onPrev, onNext }) {
  const showNav = total > 1;
  // "loading" | "loaded" | "error". Se reinicia en cada cambio de imagen
  // (navegación o apertura) para mostrar feedback mientras carga desde
  // Supabase, que puede tardar unos segundos en arrancar en frío.
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (image) setStatus("loading");
  }, [image]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050A18]/95 p-4 backdrop-blur-md"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          {showNav && <NavArrow direction="prev" onClick={onPrev} />}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            // Tamaño fijo (no shrink-to-fit): reserva el espacio ANTES de
            // que la imagen resuelva sus dimensiones, así el contenedor
            // nunca colapsa mientras carga (a diferencia de width/height
            // intrínsecos, que dependen de la imagen ya cargada).
            className={`relative ${
              isMobileImage(image)
                ? "h-[75vh] w-[min(85vw,420px)]"
                : "h-[80vh] w-[min(92vw,1400px)]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={image.src}
              src={image.src}
              alt={image.title}
              fill
              quality={100}
              priority
              sizes={isMobileImage(image) ? "420px" : "92vw"}
              className="rounded-2xl object-contain shadow-2xl"
              onLoad={() => setStatus("loaded")}
              onError={() => setStatus("error")}
            />

            {/* Feedback mientras carga o si falla (p. ej. Supabase en frío) */}
            {status === "loading" && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Loader2
                  className="h-8 w-8 animate-spin"
                  style={{ color: TEAL }}
                />
              </div>
            )}
            {status === "error" && (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#5B6A8A]">
                <ImageOff className="h-8 w-8" />
                <p className="text-xs">No se pudo cargar la imagen</p>
              </div>
            )}

            {/* Info de la imagen + contador */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-[#050A18]/95 via-[#050A18]/40 to-transparent p-5">
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#EFF4FF]">
                    {image.title}
                  </h3>
                  {image.description && (
                    <p className="mt-1 text-sm leading-relaxed text-[#94A3C8]">
                      {image.description}
                    </p>
                  )}
                </div>
                {showNav && (
                  <span className="wf-font-mono shrink-0 text-xs text-[#2DD4BF]">
                    {index + 1} / {total}
                  </span>
                )}
              </div>
            </div>

            {/* Cerrar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar imagen ampliada"
              className="absolute -right-3 -top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#EFF4FF] text-[#050A18] shadow-xl transition-transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>

          {showNav && <NavArrow direction="next" onClick={onNext} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Cuerpo del modal de detalle. Componente propio para que los
 * listeners se monten solo cuando el modal está abierto.
 */
function DetailBody({ project, onClose }) {
  const closeRef = useRef(null);
  // Índice de la captura abierta en el visor ampliado (null = cerrado).
  const [selectedIndex, setSelectedIndex] = useState(null);

  const gallery = project.gallery?.length
    ? project.gallery
    : [
        {
          src: project.image,
          title: project.title,
          description: project.description,
          size: "large",
        },
      ];

  const docs = project.documentation;

  // Navegación circular por la galería (memoizada para no re-suscribir
  // el listener de teclado en cada render).
  const showPrev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length
      ),
    [gallery.length]
  );
  const showNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length]
  );

  // Foco inicial en el botón de cerrar al abrir el modal.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    // Captura + stopImmediatePropagation: las teclas actúan SOLO aquí, sin
    // llegar al listener del ModalShell de Projects. Con el visor abierto,
    // Esc lo cierra primero y las flechas recorren la galería; si está
    // cerrado, Esc cierra el modal.
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopImmediatePropagation();
        if (selectedIndex !== null) {
          setSelectedIndex(null);
        } else {
          onClose();
        }
        return;
      }
      if (selectedIndex === null) return;
      if (event.key === "ArrowRight") {
        event.stopImmediatePropagation();
        showNext();
      } else if (event.key === "ArrowLeft") {
        event.stopImmediatePropagation();
        showPrev();
      }
    };
    document.addEventListener("keydown", onKeyDown, { capture: true });
    return () =>
      document.removeEventListener("keydown", onKeyDown, { capture: true });
  }, [onClose, selectedIndex, showPrev, showNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050A18]/80 p-3 backdrop-blur-[8px] sm:p-6"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wf-project-detail-title"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="wf-glass-strong flex max-h-[88dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl"
        style={{ borderTop: `2px solid ${TEAL}` }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-5 pb-4 pt-5 sm:px-8 sm:pt-6">
          <div className="min-w-0 flex-1">
            <h3
              id="wf-project-detail-title"
              className="wf-font-display truncate text-xl font-bold text-[#EFF4FF] sm:text-2xl"
            >
              {project.title}
            </h3>
            <p className="wf-font-mono truncate text-xs text-[#5B6A8A]">
              project/{project.key}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del proyecto"
            className="wf-glass cursor-pointer rounded-lg p-2 text-[#94A3C8] transition-colors hover:text-[#EFF4FF]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Contenido scrolleable: galería + documentación */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-5 sm:px-8">
          {/* Galería: carrusel infinito de derecha a izquierda.
              Se pausa al pasar el cursor por encima (ver globals.css).
              Se renderiza dos veces el set para un bucle sin costuras:
              cada grupo tiene el mismo ancho y translateX(-50%) equivale
              exactamente a un grupo completo. */}
          <div className="wf-marquee wf-marquee-mask relative -mx-5 overflow-hidden sm:-mx-8">
            <div className="wf-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
                >
                  {gallery.map((item, index) => {
                    const isMobile = isMobileImage(item);
                    return (
                      <button
                        type="button"
                        key={`${item.src}-${copy}-${index}`}
                        // El duplicado (copy 1) es decorativo: fuera del
                        // orden de tabulación para no repetir el foco.
                        tabIndex={copy === 1 ? -1 : undefined}
                        aria-label={`Ampliar imagen: ${item.title}`}
                        onClick={() => setSelectedIndex(index)}
                        className={`group/slide relative h-44 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[rgba(76,139,245,0.25)] bg-[#0F1A2E] transition-colors hover:border-[rgba(45,212,191,0.6)] sm:h-56 ${
                          isMobile
                            ? "w-[128px] sm:w-[160px]"
                            : "w-[280px] sm:w-[360px]"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes={isMobile ? "160px" : "360px"}
                          className={`transition-transform duration-500 group-hover/slide:scale-105 ${
                            isMobile
                              ? "object-contain p-1.5"
                              : "object-cover object-top"
                          }`}
                        />
                        {/* Indicador de zoom (aparece al pasar el cursor) */}
                        <span className="pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#050A18]/60 text-[#EFF4FF] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/slide:opacity-100">
                          <ZoomIn className="h-4 w-4" />
                        </span>
                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#050A18]/90 via-transparent to-transparent p-3 text-left opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100">
                          <p className="text-xs font-semibold text-[#EFF4FF]">
                            {item.title}
                          </p>
                          {item.description && (
                            <p className="mt-0.5 line-clamp-2 text-[10px] leading-tight text-[#94A3C8]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Documentación compacta */}
          {docs && (
            <div className="mt-6 space-y-5">
              <DocBlock icon={Layers} title="Descripción general">
                <p className="text-sm leading-relaxed text-[#94A3C8]">
                  {docs.overview}
                </p>
              </DocBlock>

              {docs.features?.length > 0 && (
                <DocBlock icon={ListChecks} title="Características">
                  <ul className="grid gap-x-6 gap-y-1.5 md:grid-cols-2">
                    {docs.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#94A3C8]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor: TEAL,
                            boxShadow: `0 0 6px ${TEAL}80`,
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </DocBlock>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <DocBlock icon={Layers} title="Stack técnico">
                  <p className="text-xs leading-relaxed text-[#94A3C8]">
                    {docs.techStack}
                  </p>
                </DocBlock>
                <DocBlock icon={Mountain} title="Desafíos">
                  <p className="text-xs leading-relaxed text-[#94A3C8]">
                    {docs.challenges}
                  </p>
                </DocBlock>
              </div>
            </div>
          )}
        </div>

        {/* Footer con acciones */}
        <div className="flex flex-wrap items-center gap-3 border-t border-[rgba(76,139,245,0.15)] px-5 py-4 sm:px-8">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#2DD4BF] to-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(45,212,191,0.3)]"
            >
              <ExternalLink className="h-4 w-4" />
              Ver en producción
            </motion.a>
          )}

          {project.githubUrl ? (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="wf-glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-[#EFF4FF] transition-colors hover:border-[rgba(45,212,191,0.5)]"
            >
              <Github className="h-4 w-4" />
              Ver en GitHub
            </motion.a>
          ) : (
            <span className="wf-font-mono inline-flex items-center gap-1.5 rounded-full border border-[rgba(30,48,85,0.6)] px-3 py-1.5 text-xs text-[#5B6A8A]">
              <Lock className="h-3 w-3" />
              código privado
            </span>
          )}
        </div>
      </motion.div>

      {/* Visor de imagen ampliada (por encima del modal) */}
      <ImageLightbox
        image={selectedIndex !== null ? gallery[selectedIndex] : null}
        index={selectedIndex ?? 0}
        total={gallery.length}
        onClose={() => setSelectedIndex(null)}
        onPrev={showPrev}
        onNext={showNext}
      />
    </motion.div>
  );
}

/**
 * Modal anidado de detalle de proyecto: fusiona la galería (bento)
 * y la documentación en una sola vista, con CTAs a GitHub y demo.
 */
export function ProjectDetailModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <DetailBody key={project.key} project={project} onClose={onClose} />
      )}
    </AnimatePresence>
  );
}
