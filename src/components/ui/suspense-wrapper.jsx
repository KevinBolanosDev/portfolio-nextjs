"use client";

import { Suspense } from "react";
import { Loading } from "./loading";
import { Skeleton, SkeletonHero, SkeletonProjectCard } from "./skeleton";

/**
 * Wrapper de Suspense con fallback predeterminado
 */
export function SuspenseWrapper({ children, fallback, type = "default" }) {
  const getFallback = () => {
    if (fallback) return fallback;

    switch (type) {
      case "hero":
        return <SkeletonHero />;
      case "project":
        return <SkeletonProjectCard />;
      case "loading":
        return <Loading />;
      case "skeleton":
        return <Skeleton className="h-32 w-full" />;
      default:
        return <Loading message="Cargando contenido..." />;
    }
  };

  return <Suspense fallback={getFallback()}>{children}</Suspense>;
}

/**
 * Suspense para secciones grandes
 */
export function SectionSuspense({ children, fallback }) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className="flex-1 flex items-center justify-center py-20">
            <Loading size="lg" message="Cargando sección..." />
          </div>
        )
      }
    >
      {children}
    </Suspense>
  );
}

/**
 * Suspense para cards/items
 */
export function CardSuspense({ children, count = 1 }) {
  return (
    <Suspense
      fallback={
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, _i) => (
            <SkeletonProjectCard key={`card-skeleton-${crypto.randomUUID()}`} />
          ))}
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
