"use client";

import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xwpvvggb");
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  // Mostrar toast cuando el formulario se envía correctamente
  useEffect(() => {
    if (state.succeeded) {
      toast.success("¡Mensaje enviado correctamente!", {
        description: "Te responderé lo antes posible.",
        style: {
          background: "#0284c7",
          color: "white",
          border: "none",
        },
      });
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  // Mostrar toast cuando hay errores
  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, verifica los campos e intenta nuevamente.",
        style: {
          background: "#dc2626",
          color: "white",
          border: "none",
        },
      });
    }
  }, [state.errors]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex-1 py-20 px-6 lg:px-12 overflow-hidden"
    >
      {/* Gradiente de fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-background to-blue-300/20" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
                <a
                  href="mailto:im.kevinbolanos.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center hover:bg-primary/20 rounded-lg p-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-sky-600/50 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground">
                        im.kevinbolanos.dev@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/573137751645?text=Hola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center hover:bg-primary/20 rounded-lg p-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-sky-600/50 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Teléfono</p>
                      <p className="text-muted-foreground">+57 313 775 1645</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/Cali,+Valle+del+Cauca/@3.3977688,-76.5222662,13.99z/data=!4m6!3m5!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854!16zL20vMDFwc3Nm?hl=es&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center hover:bg-primary/20 rounded-lg p-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-sky-600/50 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Ubicación</p>
                      <p className="text-muted-foreground">Cali, Colombia</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-8 p-6 h-[300px] bg-card border border-border rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22030.560525593013!2d-76.5413049549881!3d3.449081063862491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1761192569617!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de Cali, Valle del Cauca"
                />
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 w-[80%] mx-auto ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    ¡Gracias por tu mensaje!
                  </h3>
                  <p className="text-muted-foreground">
                    Te responderé lo antes posible.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                      required
                      className="w-full"
                      placeholder="Tu nombre completo"
                    />
                    <ValidationError
                      prefix="Nombre"
                      field="name"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
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
                      required
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
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
                      required
                      rows={6}
                      className="w-full resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                    <ValidationError
                      prefix="Mensaje"
                      field="message"
                      errors={state.errors}
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} className="mr-2" />
                    {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
