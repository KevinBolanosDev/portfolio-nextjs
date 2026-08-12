/**
 * Exportaciones centralizadas de datos
 * @module lib/data
 */

// Education & Experience
export {
  certifications,
  education,
  getCertificationsByPlatform,
  getCompletedEducation,
  getInProgressEducation,
  workExperience,
} from "./education";

// Profile
export { profile, siteConfig } from "./profile";

// Technologies
export {
  aiTech,
  allTechnologies,
  backendTech,
  databaseTech,
  devopsTech,
  frontendTech,
  getTechByName,
  getTechColor,
  getTechsByCategory,
  technologies,
  toolsTech,
} from "./technologies";
