"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Images, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProjectsGallery({ project, isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project || !project.gallery) return null;

  // Bento grid sizes - alternating patterns for visual interest
  const getBentoSize = (index) => {
    const patterns = [
      "col-span-2 row-span-2", // Large
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-2", // Tall
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
    ];
    return patterns[index % patterns.length];
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
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md"
          />

          {/* Gallery Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto max-h-[90vh] max-w-5xl overflow-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:inset-10 md:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              aria-label="Cerrar galería"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Images className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Galería de capturas · {project.gallery.length} imágenes
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Grid Gallery */}
            <div className="grid auto-rows-[150px] grid-cols-2 gap-4 md:auto-rows-[180px] md:grid-cols-4 md:gap-6">
              {project.gallery.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-secondary/30 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${getBentoSize(index)}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Info */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h4 className="font-medium text-white">{item.title}</h4>
                    {item.description && (
                      <p className="mt-1 text-xs text-white/70 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fullscreen Image Viewer */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-h-[90vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="rounded-lg object-contain"
                  />

                  {/* Image info */}
                  <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {selectedImage.title}
                    </h3>
                    {selectedImage.description && (
                      <p className="mt-1 text-sm text-white/70">
                        {selectedImage.description}
                      </p>
                    )}
                  </div>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
