"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FlyingShips } from "./FlyingShips";

/**
 * Pseudo-random determinista: mismo resultado en SSR y cliente,
 * evita mismatch de hidratación al generar las estrellas.
 */
function seeded(i, salt) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function makeStarShadows(count, salt) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = (seeded(i, salt) * 100).toFixed(2);
    const y = (seeded(i, salt + 7) * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh currentColor`);
  }
  return shadows.join(", ");
}

const STARS_SMALL = makeStarShadows(90, 1);
const STARS_LARGE = makeStarShadows(35, 5);

/**
 * Fondo del workflow: mesh de gradientes animado, estrellas CSS,
 * dot-pattern y orbes nebulosa, cada capa con un factor de parallax
 * distinto que responde al mouse (desactivado en mobile/reduced motion).
 * Todo CSS puro — sin WebGL — siguiendo la guía de performance del DS v3.
 */
export function WorkflowCanvas({ parallaxEnabled = true }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (!parallaxEnabled) return;
    const onMove = (event) => {
      mx.set((event.clientX / window.innerWidth) * 2 - 1);
      my.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallaxEnabled, mx, my]);

  // Capas más lejanas se mueven menos (factor menor)
  const starsFarX = useTransform(sx, (v) => v * -5);
  const starsFarY = useTransform(sy, (v) => v * -3);
  const starsNearX = useTransform(sx, (v) => v * -12);
  const starsNearY = useTransform(sy, (v) => v * -7);
  const dotsX = useTransform(sx, (v) => v * -18);
  const dotsY = useTransform(sy, (v) => v * -10);
  const orbsX = useTransform(sx, (v) => v * -28);
  const orbsY = useTransform(sy, (v) => v * -16);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Capa 1: mesh de gradientes radiales con drift lento */}
      <div className="wf-mesh absolute -inset-[8%]" />

      {/* Capa 2: estrellas lejanas */}
      <motion.div
        style={{ x: starsFarX, y: starsFarY }}
        className="absolute inset-0 text-[#7CB0FF]/60"
      >
        <div
          className="wf-twinkle absolute h-px w-px rounded-full"
          style={{ boxShadow: STARS_SMALL }}
        />
      </motion.div>

      {/* Capa 3: estrellas cercanas (más grandes) */}
      <motion.div
        style={{ x: starsNearX, y: starsNearY }}
        className="absolute inset-0 text-[#EFF4FF]/70"
      >
        <div
          className="wf-twinkle-delayed absolute h-[2px] w-[2px] rounded-full"
          style={{ boxShadow: STARS_LARGE }}
        />
      </motion.div>

      {/* Capa 4: dot-pattern del canvas de workflow */}
      <motion.div
        style={{ x: dotsX, y: dotsY }}
        className="wf-dot-pattern absolute -inset-[4%] opacity-70"
      />

      {/* Capa 5: orbes nebulosa */}
      <motion.div style={{ x: orbsX, y: orbsY }} className="absolute inset-0">
        <div className="animate-float absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#4C8BF5]/15 blur-3xl" />
        <div className="animate-float-delayed absolute -right-24 top-2/3 h-96 w-96 rounded-full bg-[#818CF8]/10 blur-3xl" />
        <div className="animate-float absolute left-1/3 -bottom-32 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
      </motion.div>

      {/* Capa 6: naves cruzando el viewport (detrás del contenido) */}
      <FlyingShips />

      {/* Viñeta inferior para fundir con el footer */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A18] to-transparent" />
    </div>
  );
}
