/**
 * Configuración base de i18n
 * @module lib/i18n/config
 */

export const LOCALES = ["es", "en"];
export const DEFAULT_LOCALE = "en";
export const LOCALE_COOKIE = "wf-locale";

export function resolveLocale(value) {
  return LOCALES.includes(value) ? value : DEFAULT_LOCALE;
}
