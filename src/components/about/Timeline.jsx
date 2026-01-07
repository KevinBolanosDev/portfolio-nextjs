"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { certifications, education, workExperience } from "@/lib/data";

function TimelineItem({ item, index, isLast }) {
  const isCompleted = item.status === "completed";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Línea vertical */}
      {!isLast && (
        <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent" />
      )}

      {/* Punto/Icono */}
      <div
        className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full ${
          isCompleted
            ? "bg-primary/20 text-primary"
            : "bg-accent/20 text-accent-foreground"
        }`}
      >
        {isCompleted ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <Clock className="h-4 w-4" />
        )}
      </div>

      {/* Contenido */}
      <div className="pb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-foreground leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-primary font-medium mt-1">
              {item.institution}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
            <Calendar className="h-3 w-3" />
            {item.period}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-3 mt-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
              isCompleted
                ? "bg-primary/10 text-primary"
                : "bg-accent/10 text-accent-foreground"
            }`}
          >
            {isCompleted ? (
              <>
                <Award className="h-3 w-3" />
                Completado
              </>
            ) : (
              <>
                <Clock className="h-3 w-3" />
                En curso
              </>
            )}
          </span>

          {item.certificate && item.certificate !== "#" && (
            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Ver certificado
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Award className="h-4 w-4" />
        </div>
        <div>
          <h5 className="text-sm font-medium text-foreground leading-tight">
            {cert.title}
          </h5>
          <p className="text-xs text-muted-foreground">{cert.platform}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{cert.date}</span>
        {cert.certificate && cert.certificate !== "#" && (
          <a
            href={cert.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function EducationTimeline({ className }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Formación Académica
          </h3>
          <p className="text-sm text-muted-foreground">Educación y bootcamps</p>
        </div>
      </div>

      <div className="space-y-0">
        {education.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export function CertificationsSection({ className }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-foreground">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Certificaciones
          </h3>
          <p className="text-sm text-muted-foreground">Cursos adicionales</p>
        </div>
      </div>

      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection({ className }) {
  const hasExperience = workExperience && workExperience.length > 0;

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Experiencia Laboral
          </h3>
          <p className="text-sm text-muted-foreground">
            Proyectos profesionales
          </p>
        </div>
      </div>

      {hasExperience ? (
        <div className="space-y-4">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h4 className="font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-sm text-primary font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.description}
              </p>
              {exp.achievements && (
                <ul className="space-y-1">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 px-4 rounded-xl border border-dashed border-border/50 bg-card/30">
          <Briefcase className="h-10 w-10 text-muted-foreground/50 mb-3" />
          <p className="text-sm text-muted-foreground text-center">
            Actualmente enfocado en proyectos freelance y desarrollo de
            plataformas SaaS como AriaLeads y AireHub.
          </p>
        </div>
      )}
    </div>
  );
}
