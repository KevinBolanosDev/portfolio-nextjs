"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/**
 * Toggle ES/EN estilo wf-glass, consistente con los iconos sociales
 * del Footer. Persiste la preferencia en cookie + localStorage.
 */
export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("languageToggle.switchTo")}
      title={t("languageToggle.switchTo")}
      className="wf-glass group inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-[#94A3C8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(76,139,245,0.4)] hover:text-[#7CB0FF] hover:shadow-[0_0_16px_rgba(56,189,248,0.3)]"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="wf-font-mono uppercase tracking-wider">
        <span className={locale === "es" ? "text-[#7CB0FF]" : undefined}>
          ES
        </span>
        <span className="mx-0.5 opacity-40">/</span>
        <span className={locale === "en" ? "text-[#7CB0FF]" : undefined}>
          EN
        </span>
      </span>
    </button>
  );
}
