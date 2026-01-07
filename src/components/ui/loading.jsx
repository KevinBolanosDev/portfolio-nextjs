import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Spinner de carga simple
 */
function Spinner({ size = "md", className }) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <Loader2
      className={cn("animate-spin text-primary", sizes[size], className)}
    />
  );
}

/**
 * Estado de carga con mensaje
 */
function Loading({ message = "Cargando...", size = "md", className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-8",
        className
      )}
    >
      <Spinner size={size} />
      <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
    </div>
  );
}

/**
 * Loading que ocupa toda la pantalla
 */
function LoadingFullScreen({ message = "Cargando..." }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-muted" />
          <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="text-muted-foreground font-medium">{message}</p>
      </div>
    </div>
  );
}

/**
 * Loading para overlay sobre contenido existente
 */
function LoadingOverlay({ message, className }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-inherit",
        className
      )}
    >
      <Loading message={message} />
    </div>
  );
}

/**
 * Dots loading animation
 */
function LoadingDots({ className }) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" />
    </span>
  );
}

/**
 * Pulse loading para botones
 */
function LoadingPulse({ className }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
      <span className="h-2 w-2 rounded-full bg-current animate-pulse [animation-delay:0.2s]" />
      <span className="h-2 w-2 rounded-full bg-current animate-pulse [animation-delay:0.4s]" />
    </div>
  );
}

export {
  Loading,
  LoadingDots,
  LoadingFullScreen,
  LoadingOverlay,
  LoadingPulse,
  Spinner,
};
