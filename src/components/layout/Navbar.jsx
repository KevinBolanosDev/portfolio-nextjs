"use client";

import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const _currentYear = new Date().getFullYear();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Proyectos" },
    { href: "/about", label: "Acerca de" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Nombre */}
            <div className="flex-shrink-0">
              <a
                href="/home"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                Kevin Bolaños
              </a>
            </div>

            <ThemeToggle />

            {/* Menú Desktop */}
            <ul className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Líneas verticales que se convierten en horizontales */}
                    <span className="absolute left-0 top-0 w-0.5 h-full bg-sky-600 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-full group-hover:h-0.5" />
                    <span className="absolute right-0 bottom-0 w-0.5 h-full bg-sky-600 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-full group-hover:h-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Botón Hamburguesa */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 my-1 ${
                  isMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Fixed con Blur */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay con blur */}
        <button
          type="button"
          className={`absolute inset-0 bg-background/60 backdrop-blur-xl transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Escape" && closeMenu()}
          aria-label="Cerrar menú"
        />

        {/* Panel del menú */}
        <div
          className={`absolute top-16 left-0 right-0 mx-4 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <ul className="p-4 space-y-1">
            {menuItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 75 + 100}ms`
                      : "0ms",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-sky-600/50" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer del menú */}
          <div
            className={`px-6 py-4 border-t border-border/50 transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
          >
            <div className="flex items-center justify-center gap-4">
            <Code2 className="w-5 h-5 text-sky-600" />
            <p className="text-base text-muted-foreground text-center">
              © {_currentYear} Kevin Bolaños
            </p>
            <Code2 className="w-5 h-5 text-sky-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
