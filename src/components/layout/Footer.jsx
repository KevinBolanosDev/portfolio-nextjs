"use client";
import { socialLinks } from "@/lib/data/footer";

/**
 * Path de ola tileable (viewBox 1440x90): termina a la misma altura
 * en la que empieza, así el <use> duplicado encaja sin saltos.
 */
const WAVE_PATH =
  "M0 45 C 120 15, 240 15, 360 45 S 600 75, 720 45 S 960 15, 1080 45 S 1320 75, 1440 45 L 1440 90 L 0 90 Z";

function WaveLayer({ className, color, opacity }) {
  return (
    <div className={`absolute inset-x-0 bottom-0 h-full w-[200%] ${className}`}>
      <svg
        aria-hidden="true"
        className="h-full w-full"
        viewBox="0 0 2880 90"
        preserveAspectRatio="none"
        fill={color}
        fillOpacity={opacity}
      >
        <path d={WAVE_PATH} />
        <path d={WAVE_PATH} transform="translate(1440 0)" />
      </svg>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(76,139,245,0.15)] bg-[rgba(15,26,46,0.45)] backdrop-blur-[20px]">
      {/* Olas neón animadas de fondo */}
      <div aria-hidden="true" className="absolute inset-0">
        <WaveLayer className="wf-wave-slow" color="#818CF8" opacity="0.12" />
        <WaveLayer className="wf-wave" color="#38BDF8" opacity="0.14" />
        {/* Velo para garantizar la legibilidad del texto sobre las olas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/60 via-transparent to-[#050A18]/40" />
      </div>

      <div className="relative z-10 mx-auto flex flex-col items-center gap-3 px-4 py-6">
        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="wf-glass group rounded-full p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(76,139,245,0.4)] hover:shadow-[0_0_16px_rgba(56,189,248,0.3)]"
              >
                <Icon className="h-5 w-5 text-[#94A3C8] transition-colors group-hover:text-[#7CB0FF]" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="wf-font-mono text-xs text-[#94A3C8]">
          Copyright © {currentYear} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
