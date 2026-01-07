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
  allTechnologies,
  backendTech,
  databaseTech,
  frontendTech,
  getTechByName,
  getTechColor,
  getTechsByCategory,
  technologies,
  toolsTech,
} from "./technologies";
