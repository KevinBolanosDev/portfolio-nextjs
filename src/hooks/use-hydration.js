"use client";

import { useEffect, useState } from "react";

/**
 * Hook para detectar si el componente está hidratado (montado en el cliente)
 * Útil para evitar mismatches de hidratación entre servidor y cliente
 *
 * @returns {boolean} true si el componente está hidratado en el cliente
 *
 * @example
 * const isHydrated = useHydrated();
 *
 * if (!isHydrated) {
 *   return <Skeleton />; // Mostrar skeleton durante SSR
 * }
 *
 * return <DynamicContent />; // Contenido real después de hidratación
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}

/**
 * Hook para ejecutar código solo después de la hidratación
 * Evita ejecutar código que depende del cliente durante SSR
 *
 * @param {Function} callback - Función a ejecutar después de la hidratación
 * @param {Array} deps - Dependencias del efecto
 *
 * @example
 * useAfterHydration(() => {
 *   // Este código solo se ejecuta en el cliente después de la hidratación
 *   window.addEventListener('resize', handleResize);
 * }, []);
 */
export function useAfterHydration(callback, deps = []) {
  const hydrated = useHydrated();

  useEffect(() => {
    if (hydrated) {
      return callback();
    }
  }, [hydrated, ...deps]);
}

/**
 * Hook para obtener un valor que puede diferir entre servidor y cliente
 * Retorna el valor del servidor durante SSR y el valor del cliente después de hidratación
 *
 * @param {Function} clientValue - Función que retorna el valor del cliente
 * @param {any} serverValue - Valor a usar durante SSR (debe ser estable)
 * @returns {any} serverValue durante SSR, clientValue después de hidratación
 *
 * @example
 * const windowWidth = useClientValue(
 *   () => window.innerWidth,
 *   1024 // Valor por defecto para SSR
 * );
 */
export function useClientValue(clientValue, serverValue) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return serverValue;
  }

  return typeof clientValue === "function" ? clientValue() : clientValue;
}

/**
 * Hook para detectar si estamos en el cliente
 * Similar a useHydrated pero más semántico
 *
 * @returns {boolean} true si estamos en el navegador/cliente
 */
export function useIsClient() {
  return useHydrated();
}

/**
 * Hook para manejar valores que dependen de window/document
 * Automáticamente retorna undefined durante SSR
 *
 * @param {Function} getValue - Función que obtiene el valor (puede usar window/document)
 * @param {any} fallback - Valor de fallback durante SSR
 * @returns {any} El valor o el fallback
 *
 * @example
 * const scrollY = useBrowserValue(() => window.scrollY, 0);
 * const isDark = useBrowserValue(
 *   () => window.matchMedia('(prefers-color-scheme: dark)').matches,
 *   false
 * );
 */
export function useBrowserValue(getValue, fallback = undefined) {
  const [value, setValue] = useState(fallback);
  const hydrated = useHydrated();

  useEffect(() => {
    if (hydrated) {
      try {
        setValue(getValue());
      } catch {
        setValue(fallback);
      }
    }
  }, [hydrated, getValue, fallback]);

  return value;
}
