"use client";

import { useHydrated } from "@/hooks/use-hydration";
import { Skeleton } from "./skeleton";

/**
 * Componente que solo renderiza sus hijos después de la hidratación
 * Útil para envolver contenido que puede causar mismatch de hidratación
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido a renderizar después de hidratación
 * @param {React.ReactNode} props.fallback - Contenido a mostrar durante SSR (opcional)
 * @param {string} props.fallbackType - Tipo de skeleton: 'text', 'card', 'hero', etc.
 *
 * @example
 * <ClientOnly fallback={<Skeleton className="h-10 w-32" />}>
 *   <DynamicComponent />
 * </ClientOnly>
 */
export function ClientOnly({ children, fallback = null }) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return fallback;
  }

  return children;
}

/**
 * Componente que muestra un skeleton durante la hidratación
 *
 * @example
 * <HydratedContent skeleton={<SkeletonCard />}>
 *   <ActualCard />
 * </HydratedContent>
 */
export function HydratedContent({ children, skeleton }) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return skeleton || <Skeleton className="h-full w-full" />;
  }

  return children;
}

/**
 * Wrapper para animaciones que pueden causar problemas de hidratación
 * Retrasa la animación hasta después de la hidratación
 *
 * @example
 * <AnimationSafe>
 *   <motion.div animate={{ opacity: 1 }}>Content</motion.div>
 * </AnimationSafe>
 */
export function AnimationSafe({ children, fallback }) {
  const hydrated = useHydrated();

  if (!hydrated) {
    // Durante SSR, renderizar sin animaciones
    return fallback || <div className="opacity-0">{children}</div>;
  }

  return children;
}

/**
 * Componente para contenido que solo existe en el navegador
 * No renderiza nada durante SSR
 *
 * @example
 * <BrowserOnly>
 *   <LocalStorageComponent />
 * </BrowserOnly>
 */
export function BrowserOnly({ children }) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return null;
  }

  return children;
}

/**
 * HOC para hacer componentes seguros para hidratación
 *
 * @param {React.ComponentType} Component - Componente a envolver
 * @param {React.ReactNode} fallback - Fallback durante hidratación
 *
 * @example
 * const SafeComponent = withHydration(DynamicComponent, <Skeleton />);
 */
export function withHydration(Component, fallback = null) {
  return function HydratedComponent(props) {
    const hydrated = useHydrated();

    if (!hydrated) {
      return fallback;
    }

    return <Component {...props} />;
  };
}
