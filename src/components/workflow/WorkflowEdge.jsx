"use client";

/**
 * Overlay SVG con los edges del pipeline.
 * - Edge "running": el path se dibuja a la par del progreso
 *   (truco pathLength=1 + dashoffset).
 * - Edge "done": línea sólida + dash animado (wf-data-flow) +
 *   partículas SMIL viajando por el path.
 */
export function WorkflowEdges({ edges, width, height, reducedMotion = false }) {
  if (!width || !height || edges.length === 0) return null;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-visible"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {edges.map((edge) => (
        <g key={edge.id} style={{ filter: `drop-shadow(0 0 4px ${edge.color})` }}>
          {/* Guía tenue del recorrido completo */}
          <path d={edge.d} stroke={`${edge.color}33`} strokeWidth="1.5" />

          {edge.state === "running" ? (
            <path
              d={edge.d}
              stroke={edge.color}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - edge.progress / 100}
            />
          ) : (
            <>
              <path
                d={edge.d}
                stroke={`${edge.color}99`}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                className={reducedMotion ? "" : "wf-data-flow"}
                d={edge.d}
                stroke={edge.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 10"
              />
              {!reducedMotion && (
                <>
                  <circle r="3" fill={edge.color}>
                    <animateMotion
                      dur="1.6s"
                      repeatCount="indefinite"
                      path={edge.d}
                    />
                  </circle>
                  <circle r="2" fill="#EFF4FF" opacity="0.8">
                    <animateMotion
                      dur="1.6s"
                      begin="0.8s"
                      repeatCount="indefinite"
                      path={edge.d}
                    />
                  </circle>
                </>
              )}
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
