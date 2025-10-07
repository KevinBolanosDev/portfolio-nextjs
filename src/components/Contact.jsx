"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-6 lg:px-12 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            ayudarte a convertirlas en realidad.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">
                      kevin.bolanos@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+57 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Colombia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  ¿Por qué trabajar conmigo?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Desarrollo full stack completo</li>
                  <li>• Código limpio y mantenible</li>
                  <li>• Comunicación clara y constante</li>
                  <li>• Entrega puntual de proyectos</li>
                </ul>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 animate-glow"
                >
                  <Send size={18} className="mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
