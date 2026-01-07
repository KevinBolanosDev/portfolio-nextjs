import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, X } from "lucide-react";

export function ProjectsDocs({ project, isOpen, onClose }) {
  if (!project) return null;

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
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto max-h-[90vh] max-w-3xl overflow-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:inset-10 md:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              aria-label="Cerrar documentación"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {project.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  Ver en GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver Demo
                </a>
              </div>
            </div>

            {/* Documentation sections */}
            <div className="space-y-8">
              {/* Overview */}
              <section>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  📋 Descripción General
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.documentation.overview}
                </p>
              </section>

              {/* Features */}
              <section>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  ✨ Características Principales
                </h3>
                <ul className="space-y-2">
                  {project.documentation.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack */}
              <section>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  🛠️ Stack Tecnológico
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.documentation.techStack}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Challenges */}
              <section>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  🎯 Desafíos y Soluciones
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {project.documentation.challenges}
                </p>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
