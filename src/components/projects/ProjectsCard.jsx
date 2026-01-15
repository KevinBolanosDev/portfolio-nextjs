import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  FileText,
  Github,
  Images,
  Lock,
} from "lucide-react";
import Image from "next/image";

export function ProjectsCard({
  project,
  index,
  onViewDocs,
  onViewGallery,
  isProfessional,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl ${
        isProfessional
          ? "border-sky-600/50 hover:border-sky-700/60 hover:shadow-sky-500/5"
          : "border-yellow-500/50 hover:border-yellow-700/60 hover:shadow-yellow-500/5"
      }`}
    >
      {/* Professional Badge */}
      {isProfessional && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-cyan-700 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          <Briefcase className="h-4 w-4" />
          Profesional
        </div>
      )}

      {/* Image */}
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <div
          className={`border-t ${
            isProfessional ? "border-sky-600/50" : "border-yellow-500/50"
          } my-2`}
        ></div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                isProfessional
                  ? "border-primary/30 bg-sky-600/50 text-primary"
                  : "border-border/50 bg-yellow-500/50 text-secondary-foreground"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border/50 pt-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              Código
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Lock className="h-4 w-4" />
              Privado
            </span>
          )}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
          <div className="ml-auto flex items-center gap-2">
            {project.gallery && project.gallery.length > 0 && (
              <button
                type="button"
                onClick={() => onViewGallery(project)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
              >
                <Images className="h-4 w-4" />
                Galería
              </button>
            )}
            <button
              type="button"
              onClick={() => onViewDocs(project)}
              className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80 cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              Docs
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
