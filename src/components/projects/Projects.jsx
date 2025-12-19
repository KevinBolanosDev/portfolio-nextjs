"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import { useState } from "react";

import { professionalProjects, projects } from "@/lib/projectsData";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectsDocs } from "./ProjectsDocs";
import { ProjectsGallery } from "./ProjectsGallery";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryProject, setGalleryProject] = useState(null);

  return (
    <section id="proyectos" className="w-full flex-1 py-12">
      <div className="px-6 mx-auto h-full overflow-y-auto scrollbar-hide">
        {/* Main header */}
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

        {/* Professional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos Profesionales
              </h3>
              <p className="text-sm text-muted-foreground">
                Aplicaciones desarrolladas para empresas y clientes reales
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectsCard
                key={project.id}
                project={project}
                index={index}
                onViewDocs={setSelectedProject}
                onViewGallery={setGalleryProject}
                isProfessional
              />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground">
              Proyectos de práctica y aprendizaje
            </span>
          </div>
        </div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent-foreground">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos Personales
              </h3>
              <p className="text-sm text-muted-foreground">
                Portafolios, challenges de Frontend Mentor y proyectos de
                aprendizaje
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectsCard
                key={project.id}
                project={project}
                index={index}
                onViewDocs={setSelectedProject}
                onViewGallery={setGalleryProject}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Documentation modal */}
      <ProjectsDocs
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      {/* Gallery modal */}
      <ProjectsGallery
        project={galleryProject}
        isOpen={galleryProject !== null}
        onClose={() => setGalleryProject(null)}
      />
    </section>
  );
}
