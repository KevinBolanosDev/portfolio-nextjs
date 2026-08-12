"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, resolveLocale } from "./config";
import { ui } from "./ui";

const LanguageContext = createContext(null);

function persistLocale(locale) {
  try {
    if (typeof window !== "undefined" && "cookieStore" in window) {
      window.cookieStore
        .set({
          name: LOCALE_COOKIE,
          value: locale,
          path: "/",
          expires: Date.now() + 31536000 * 1000,
          sameSite: "lax",
        })
        .catch(() => {});
    } else {
      // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API is unsupported in Safari/Firefox — documented fallback.
      document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    }
    window.localStorage.setItem(LOCALE_COOKIE, locale);
  } catch {
    // storage no disponible: la preferencia solo dura la sesión
  }
}

/**
 * Provee el locale activo y el helper `t()` de strings de UI.
 * `initialLocale` llega del server (cookie leída en el layout) para
 * que el primer render en cliente no produzca flash de idioma.
 */
export function LanguageProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const [locale, setLocaleState] = useState(() => resolveLocale(initialLocale));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next) => {
    const resolved = resolveLocale(next);
    setLocaleState(resolved);
    persistLocale(resolved);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === "es" ? "en" : "es";
      persistLocale(next);
      return next;
    });
  }, []);

  const t = useMemo(() => {
    const dict = ui[locale];
    return (path, ...args) => {
      const value = path.split(".").reduce((acc, key) => acc?.[key], dict);
      if (typeof value === "function") return value(...args);
      return value ?? path;
    };
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
