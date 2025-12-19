import { cn } from "@/lib/utils";

/**
 * Componente Skeleton base para mostrar estados de carga
 */
function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

/**
 * Skeleton para texto (párrafos, títulos)
 */
function SkeletonText({ lines = 3, className }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={`skeleton-line-${i}`}
          className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton para avatares/imágenes circulares
 */
function SkeletonAvatar({ size = "md", className }) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return <Skeleton className={cn("rounded-full", sizes[size], className)} />;
}

/**
 * Skeleton para cards de proyectos
 */
function SkeletonProjectCard({ className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden",
        className
      )}
    >
      {/* Imagen */}
      <Skeleton className="aspect-video w-full rounded-none" />

      {/* Contenido */}
      <div className="p-5 space-y-4">
        {/* Título */}
        <Skeleton className="h-6 w-3/4" />

        {/* Descripción */}
        <SkeletonText lines={2} />

        {/* Tags */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>

        {/* Botones */}
        <div className="flex gap-4 pt-4 border-t border-border/50">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16 ml-auto" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton para la galería bento
 */
function SkeletonGallery({ items = 6, className }) {
  const patterns = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div
      className={cn(
        "grid auto-rows-[120px] grid-cols-2 gap-3 md:auto-rows-[140px] md:grid-cols-4 md:gap-4",
        className
      )}
    >
      {Array.from({ length: items }).map((_, i) => (
        <Skeleton
          key={`skeleton-gallery-${i}`}
          className={cn("rounded-2xl", patterns[i % patterns.length])}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton para el navbar
 */
function SkeletonNavbar() {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-9 w-9 rounded-md" />
          <div className="hidden md:flex items-center space-x-8">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-18" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton para el hero/home
 */
function SkeletonHero({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center space-y-6 py-20",
        className
      )}
    >
      {/* Badge */}
      <Skeleton className="h-10 w-48 rounded-full" />

      {/* Título */}
      <Skeleton className="h-16 w-96 max-w-full" />

      {/* Subtítulo */}
      <Skeleton className="h-8 w-80 max-w-full" />

      {/* Descripción */}
      <div className="space-y-2 max-w-2xl">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4 mx-auto" />
      </div>

      {/* Tags */}
      <div className="flex gap-4">
        <Skeleton className="h-10 w-32 rounded-lg" />
        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <Skeleton className="h-14 w-40 rounded-lg" />
        <Skeleton className="h-14 w-32 rounded-lg" />
        <Skeleton className="h-14 w-32 rounded-lg" />
      </div>
    </div>
  );
}

export {
  Skeleton,
  SkeletonAvatar,
  SkeletonGallery,
  SkeletonHero,
  SkeletonNavbar,
  SkeletonProjectCard,
  SkeletonText,
};
