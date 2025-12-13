import { motion } from "framer-motion";
import { ExternalLink, FileText, Github } from "lucide-react";

const imageGradients = {
  ecommerce: "from-emerald-600/20 via-teal-600/10 to-cyan-600/20",
  dashboard: "from-blue-600/20 via-indigo-600/10 to-violet-600/20",
  api: "from-orange-600/20 via-amber-600/10 to-yellow-600/20",
  tasks: "from-pink-600/20 via-rose-600/10 to-red-600/20",
};

export function ProjectsCard({ project, index, onViewDocs }) {
  const gradient = imageGradients[project.image] || imageGradients.ecommerce;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image placeholder */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <span className="font-display text-lg font-semibold text-foreground/70">
          {project.title}
        </span>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100"
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Ver código en GitHub"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Ver demo"
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
          <motion.button
            onClick={() => onViewDocs(project)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Ver documentación"
          >
            <FileText className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4 border-t border-border/50 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            Código
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
          <button
            type="button"
            onClick={() => onViewDocs(project)}
            className="ml-auto inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
          >
            <FileText className="h-4 w-4" />
            Docs
          </button>
        </div>
      </div>
    </motion.article>
  );
}
