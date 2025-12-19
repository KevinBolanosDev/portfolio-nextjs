import { cn } from "@/lib/utils";
import {
  FileQuestion,
  FolderOpen,
  ImageOff,
  Inbox,
  Search,
} from "lucide-react";
import { Button } from "./button";

/**
 * Estado vacío genérico
 */
function EmptyState({
  title = "Sin datos",
  message = "No hay elementos para mostrar.",
  icon: Icon = Inbox,
  action,
  actionLabel,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center",
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md">{message}</p>
      </div>

      {action && actionLabel && (
        <Button onClick={action} variant="outline">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

/**
 * Sin resultados de búsqueda
 */
function NoSearchResults({ query, onClear, className }) {
  return (
    <EmptyState
      title="Sin resultados"
      message={
        query
          ? `No se encontraron resultados para "${query}"`
          : "No se encontraron resultados para tu búsqueda."
      }
      icon={Search}
      action={onClear}
      actionLabel="Limpiar búsqueda"
      className={className}
    />
  );
}

/**
 * Sin proyectos
 */
function NoProjects({ className }) {
  return (
    <EmptyState
      title="Sin proyectos"
      message="Aún no hay proyectos para mostrar. ¡Pronto habrá novedades!"
      icon={FolderOpen}
      className={className}
    />
  );
}

/**
 * Sin imágenes en galería
 */
function NoGalleryImages({ className }) {
  return (
    <EmptyState
      title="Sin imágenes"
      message="Este proyecto aún no tiene capturas de pantalla disponibles."
      icon={ImageOff}
      className={className}
    />
  );
}

/**
 * Contenido no disponible
 */
function ContentNotAvailable({ type = "contenido", className }) {
  return (
    <EmptyState
      title={`${type} no disponible`}
      message={`El ${type.toLowerCase()} no está disponible en este momento.`}
      icon={FileQuestion}
      className={className}
    />
  );
}

export {
  ContentNotAvailable,
  EmptyState,
  NoGalleryImages,
  NoProjects,
  NoSearchResults,
};
