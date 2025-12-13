import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDocs } from "./ProjectDocs";

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos" className="py-24">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo full stack y mi capacidad para crear soluciones
            completas.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDocs={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Documentation modal */}
      <ProjectDocs
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
