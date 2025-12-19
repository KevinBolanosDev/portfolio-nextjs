"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Images, Smartphone, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProjectsGallery({ project, isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project || !project.gallery) return null;

  // Detectar si es imagen móvil por el nombre del archivo o propiedad size
  const isMobileImage = (item) => {
    if (item.size === "tall") return true;
    const mobileKeywords = ["mobile", "movil", "phone", "responsive"];
    return mobileKeywords.some((keyword) =>
      item.src.toLowerCase().includes(keyword)
    );
  };

  // Mapa de tamaños disponibles
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 col-span-2 row-span-2", // 2x2 - Featured
    wide: "md:col-span-2 md:row-span-1 col-span-2 row-span-1", // 2x1 - Panorámico
    tall: "md:col-span-1 md:row-span-2 col-span-1 row-span-2", // 1x2 - Mobile/Vertical
    small: "md:col-span-1 md:row-span-1 col-span-1 row-span-1", // 1x1 - Cuadrado
  };

  // Distribución bento - usa size si existe, sino patrón por defecto
  const getBentoLayout = (item, index) => {
    // Si tiene size definido, usarlo directamente
    if (item.size && sizeClasses[item.size]) {
      return sizeClasses[item.size];
    }

    // Si es móvil por nombre de archivo, usar tall
    if (isMobileImage(item)) {
      return sizeClasses.tall;
    }

    // Patrón por defecto para desktop
    const defaultPattern = [
      "large", // 0: Destacada
      "small", // 1
      "small", // 2
      "wide", // 3
      "small", // 4
      "small", // 5
      "wide", // 6
      "small", // 7
    ];

    return sizeClasses[defaultPattern[index % defaultPattern.length]];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Gallery Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto max-h-[90vh] max-w-6xl overflow-auto rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl md:inset-8 md:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
              aria-label="Cerrar galería"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Images className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white md:text-2xl">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/50">
                    {project.gallery.length} capturas de pantalla
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Grid Gallery - Estilo referencia */}
            <div className="grid auto-rows-[120px] grid-cols-2 gap-3 md:auto-rows-[140px] md:grid-cols-4 md:gap-4">
              {project.gallery.map((item, index) => {
                const isMobile = isMobileImage(item);
                return (
                  <motion.div
                    key={item.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-zinc-950 ${getBentoLayout(
                      item,
                      index
                    )}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image container con aspect ratio correcto */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        quality={90}
                        sizes={
                          isMobile
                            ? "(max-width: 768px) 50vw, 25vw"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                          isMobile
                            ? "object-contain p-2"
                            : "object-cover object-top"
                        }`}
                      />
                    </div>

                    {/* Mobile indicator badge */}
                    {isMobile && (
                      <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                        <Smartphone className="h-3 w-3" />
                        Mobile
                      </div>
                    )}

                    {/* Hover overlay con gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Info on hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h4 className="text-sm font-semibold text-white drop-shadow-lg">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-white/80 line-clamp-1 drop-shadow-lg">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Zoom indicator */}
                    <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Fullscreen Image Viewer */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className={`relative ${
                    isMobileImage(selectedImage)
                      ? "max-h-[85vh] max-w-[380px]"
                      : "max-h-[90vh] max-w-[90vw]"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* High quality image */}
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={isMobileImage(selectedImage) ? 400 : 1600}
                    height={isMobileImage(selectedImage) ? 850 : 1000}
                    quality={100}
                    priority
                    className="rounded-2xl shadow-2xl object-contain"
                    style={{ maxHeight: "85vh", width: "auto" }}
                  />

                  {/* Image info overlay */}
                  <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 md:p-6">
                    <div className="flex items-center gap-2">
                      {isMobileImage(selectedImage) && (
                        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-white">
                          <Smartphone className="h-3.5 w-3.5" />
                          Mobile
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white md:text-xl">
                        {selectedImage.title}
                      </h3>
                    </div>
                    {selectedImage.description && (
                      <p className="mt-2 text-sm text-white/80 md:text-base">
                        {selectedImage.description}
                      </p>
                    )}
                  </div>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-xl transition-transform hover:scale-110"
                    aria-label="Cerrar imagen"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
