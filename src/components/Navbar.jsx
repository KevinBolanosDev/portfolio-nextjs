"use client";

import { useState } from "react";
import { ThemeToggle } from "./ui/theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Proyectos" },
    { href: "/about", label: "Acerca de" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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

          <div>
            <ThemeToggle />
          </div>

          {/* Menú Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Líneas verticales que se convierten en horizontales */}
                  <span className="absolute left-0 top-0 w-0.5 h-full bg-primary opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-full group-hover:h-0.5"></span>
                  <span className="absolute right-0 bottom-0 w-0.5 h-full bg-primary opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-full group-hover:h-0.5"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Menú Móvil */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-4 space-y-2 border-t border-border/50">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay para cerrar menú en móvil */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}
