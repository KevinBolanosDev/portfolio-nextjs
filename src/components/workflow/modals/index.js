import { AboutContent } from "./AboutContent";
import { ContactContent } from "./ContactContent";
import { ProjectsContent } from "./ProjectsContent";
import { SkillsContent } from "./SkillsContent";

export { ModalShell } from "./ModalShell";

/**
 * Registry de contenido por sección: componente + ancho del modal.
 * El ancho varía según la densidad del contenido de cada vista.
 */
export const MODAL_CONTENT = {
  about: { Content: AboutContent, maxWidth: "max-w-2xl" },
  skills: { Content: SkillsContent, maxWidth: "max-w-4xl" },
  projects: { Content: ProjectsContent, maxWidth: "max-w-6xl" },
  contact: { Content: ContactContent, maxWidth: "max-w-5xl" },
};
