import { AlertCircle, RefreshCw, WifiOff, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

/**
 * Estado de error genérico
 */
function ErrorState({
  title = "Algo salió mal",
  message = "Ha ocurrido un error inesperado. Por favor, intenta de nuevo.",
  onRetry,
  retryLabel = "Reintentar",
  icon: Icon = AlertCircle,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center",
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <Icon className="h-8 w-8 text-destructive" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md">{message}</p>
      </div>

      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          {retryLabel}
        </Button>
      )}
    </div>
  );
}

/**
 * Error de conexión/red
 */
function NetworkError({ onRetry, className }) {
  return (
    <ErrorState
      title="Sin conexión"
      message="No se pudo establecer conexión con el servidor. Verifica tu conexión a internet e intenta de nuevo."
      icon={WifiOff}
      onRetry={onRetry}
      retryLabel="Reintentar conexión"
      className={className}
    />
  );
}

/**
 * Error 404 - No encontrado
 */
function NotFoundError({ resource = "recurso", onBack, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 px-4 text-center",
        className
      )}
    >
      <div className="relative">
        <span className="text-8xl font-bold text-muted-foreground/20">404</span>
        <XCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-muted-foreground" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">
          {resource} no encontrado
        </h3>
        <p className="text-sm text-muted-foreground max-w-md">
          El {resource} que buscas no existe o ha sido eliminado.
        </p>
      </div>

      {onBack && (
        <Button onClick={onBack} variant="outline">
          Volver atrás
        </Button>
      )}
    </div>
  );
}

/**
 * Error de carga de datos
 */
function DataError({ onRetry, className }) {
  return (
    <ErrorState
      title="Error al cargar datos"
      message="No se pudieron cargar los datos. Por favor, intenta de nuevo más tarde."
      onRetry={onRetry}
      className={className}
    />
  );
}

/**
 * Error boundary fallback
 */
function ErrorBoundaryFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <ErrorState
        title="Error de aplicación"
        message={
          error?.message ||
          "Ha ocurrido un error en la aplicación. Intenta recargar la página."
        }
        onRetry={resetErrorBoundary}
        retryLabel="Recargar"
      />
    </div>
  );
}

export {
    DataError,
    ErrorBoundaryFallback,
    ErrorState,
    NetworkError,
    NotFoundError
};
