"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================
   CONFIGURACIÓN DE LAS NAVES — ajusta los valores aquí
   ============================================================
   - Tamaño: ancho en píxeles de cada nave.
     Referencia: 20em ≈ 320px (bastante grande); los defaults
     son más sutiles. Sube/baja estos números a gusto.
   - FLIGHT_SPEED: velocidad de crucero en px/segundo.
   - REST_DELAY: pausa en ms entre que una nave sale de pantalla
     y vuelve a aparecer (pediste ~2 segundos).
   ============================================================ */
const FIGHTER_SIZE = 110;
const ROCKET_SIZE = 80;
const FLIGHT_SPEED = 240;
const REST_DELAY = 2000;

const SIDES = ["left", "right", "top", "bottom"];

function edgePoint(side, w, h, margin) {
  switch (side) {
    case "left":
      return { x: -margin, y: Math.random() * h };
    case "right":
      return { x: w + margin, y: Math.random() * h };
    case "top":
      return { x: Math.random() * w, y: -margin };
    default:
      return { x: Math.random() * w, y: h + margin };
  }
}

/**
 * Genera un vuelo aleatorio: entra por un borde del viewport y
 * sale por otro distinto, en línea recta y a velocidad constante.
 */
function randomFlight(size) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const margin = size * 1.5;

  const fromSide = SIDES[Math.floor(Math.random() * SIDES.length)];
  let toSide = fromSide;
  while (toSide === fromSide) {
    toSide = SIDES[Math.floor(Math.random() * SIDES.length)];
  }

  const from = edgePoint(fromSide, w, h, margin);
  const to = edgePoint(toSide, w, h, margin);
  const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
  const distance = Math.hypot(to.x - from.x, to.y - from.y);

  return { from, to, angle, duration: distance / FLIGHT_SPEED };
}

/** Llama del propulsor, anclada a la cola (izquierda) de la nave. */
function Thruster({ width, height }) {
  return (
    <div
      className="absolute right-full top-1/2 -translate-y-1/2"
      style={{ width, height }}
    >
      <div className="wf-flame absolute inset-0 rounded-full bg-gradient-to-l from-[#FB923C] via-[#F87171]/60 to-transparent blur-[2px]" />
      <div className="wf-flame-fast absolute inset-y-1/4 left-[35%] right-0 rounded-full bg-gradient-to-l from-[#FBBF24] to-transparent blur-[1px]" />
    </div>
  );
}

/** Caza estelar estilizado (apunta hacia la derecha, cola a la izquierda). */
function StarFighter({ size }) {
  return (
    <div className="relative" style={{ width: size, height: size * 0.4 }}>
      <Thruster width={size * 0.32} height={size * 0.13} />
      <svg
        viewBox="0 0 100 40"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Ala superior */}
        <path
          d="M22 2 L70 12 L70 17 L22 13 Z"
          fill="#162240"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        {/* Ala inferior */}
        <path
          d="M22 38 L70 28 L70 23 L22 27 Z"
          fill="#162240"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        {/* Fuselaje */}
        <path d="M8 17 L72 14 L97 20 L72 26 L8 23 Z" fill="#94A3C8" />
        <path d="M8 17 L72 14 L97 20 L72 26 L8 23 Z" fill="#050A18" opacity="0.25" />
        {/* Cabina */}
        <ellipse cx="68" cy="20" rx="6" ry="3.5" fill="#38BDF8" opacity="0.95" />
        {/* Detalle del fuselaje */}
        <rect x="14" y="18.5" width="22" height="3" rx="1.5" fill="#4C8BF5" opacity="0.7" />
      </svg>
    </div>
  );
}

/** Cohete clásico (apunta hacia la derecha, cola a la izquierda). */
function Rocket({ size }) {
  return (
    <div className="relative" style={{ width: size, height: size * 0.45 }}>
      <Thruster width={size * 0.38} height={size * 0.18} />
      <svg
        viewBox="0 0 100 45"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Aletas */}
        <path d="M18 7 L36 14 L27 22.5 Z" fill="#F87171" />
        <path d="M18 38 L36 31 L27 22.5 Z" fill="#F87171" />
        {/* Cuerpo */}
        <path
          d="M22 22.5 C22 14 36 9 55 9 C76 9 91 15.5 97 22.5 C91 29.5 76 36 55 36 C36 36 22 31 22 22.5 Z"
          fill="#E2E8F0"
        />
        {/* Punta */}
        <path
          d="M80 12.5 C88 15 94 19 97 22.5 C94 26 88 30 80 32.5 C84 29 86 26 86 22.5 C86 19 84 16 80 12.5 Z"
          fill="#F87171"
        />
        {/* Ventana */}
        <circle cx="58" cy="22.5" r="6" fill="#38BDF8" stroke="#162240" strokeWidth="2" />
      </svg>
    </div>
  );
}

/**
 * Lanza un objeto volador en trayectorias rectas aleatorias entre
 * bordes del viewport, en loop infinito con pausa entre vuelos.
 * El primer vuelo se genera en cliente (useEffect) — nada en SSR.
 */
function FlyingObject({ size, initialDelay = 0, children }) {
  const [flight, setFlight] = useState(null);
  const timerRef = useRef(null);
  const counterRef = useRef(0);

  const launch = useCallback(() => {
    counterRef.current += 1;
    setFlight({ ...randomFlight(size), id: counterRef.current });
  }, [size]);

  useEffect(() => {
    timerRef.current = setTimeout(launch, initialDelay);
    return () => clearTimeout(timerRef.current);
  }, [launch, initialDelay]);

  if (!flight) return null;

  return (
    <motion.div
      key={flight.id}
      initial={{ x: flight.from.x, y: flight.from.y }}
      animate={{ x: flight.to.x, y: flight.to.y }}
      transition={{ duration: flight.duration, ease: "linear" }}
      onAnimationComplete={() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(launch, REST_DELAY);
      }}
      className="absolute left-0 top-0 opacity-50 will-change-transform"
    >
      <div style={{ transform: `rotate(${flight.angle}deg)` }}>{children}</div>
    </motion.div>
  );
}

/**
 * Capa de naves de fondo: un caza estelar y un cohete cruzando el
 * viewport en todas las direcciones, detrás de todo el contenido.
 * Se desactiva por completo con prefers-reduced-motion.
 */
export function FlyingShips() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <FlyingObject size={FIGHTER_SIZE} initialDelay={600}>
        <StarFighter size={FIGHTER_SIZE} />
      </FlyingObject>

      <FlyingObject size={ROCKET_SIZE} initialDelay={2600}>
        <Rocket size={ROCKET_SIZE} />
      </FlyingObject>
    </div>
  );
}
