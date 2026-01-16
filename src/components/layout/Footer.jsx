"use client";
import { Code } from "lucide-react";
import { socialLinks } from "@/lib/data/footer";

export function Footer() {
  const _currentYear = new Date().getFullYear();

  return (
    <footer className="h-[80px] border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className=" container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-10 md:flex-row">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 text-lg">
            <Code className="h-5 w-5 text-sky-600" />
            <span className="font-medium">Kevin Bolaños</span>
            <Code className="h-5 w-5 text-sky-600" />
          </div>

          {/* Social Links */}
          <div className="flex text-base items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full p-2 transition-all hover:bg-accent"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5 text-sky-600 transition-colors group-hover:text-yellow-600" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Optional: Tech stack badge */}
        <div className="flex justify-center mx-auto mt-2">
          <p className="text-sm sm:text-lg text-muted-foreground/60">
            Copyright © {_currentYear} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
