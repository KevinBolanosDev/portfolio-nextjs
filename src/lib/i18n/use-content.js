"use client";

import { useMemo } from "react";
import {
  getCertifications,
  getCompleteStep,
  getEducation,
  getPersonalProjects,
  getProfessionalProjects,
  getProfile,
  getSiteConfig,
  getStartNode,
  getWorkExperience,
  getWorkflowSections,
} from "./content";
import { useLanguage } from "./LanguageProvider";

/**
 * Contenido largo (bio, workflow, proyectos, experiencia) en el locale activo.
 * Memoizado por locale: sin esto, cada render devuelve arrays/funciones con
 * identidad nueva, lo que rompe la memoización de los useCallback/useEffect
 * que consumen este hook (getChainOrder/measure en WorkflowExperience,
 * allProjects en ProjectsContent) y provoca un loop de renders infinito.
 */
export function useContent() {
  const { locale } = useLanguage();

  return useMemo(() => {
    const workflowSections = getWorkflowSections(locale);
    const completeStep = getCompleteStep(locale);

    return {
      profile: getProfile(locale),
      siteConfig: getSiteConfig(locale),
      startNode: getStartNode(locale),
      workflowSections,
      completeStep,
      getStepConfig: (stepIndex) =>
        stepIndex < workflowSections.length
          ? workflowSections[stepIndex]
          : completeStep,
      education: getEducation(locale),
      certifications: getCertifications(locale),
      workExperience: getWorkExperience(locale),
      professionalProjects: getProfessionalProjects(locale),
      personalProjects: getPersonalProjects(locale),
    };
  }, [locale]);
}
