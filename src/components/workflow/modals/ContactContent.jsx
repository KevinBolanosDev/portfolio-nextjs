"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

// Campos editables sólidos (no vidrio), según la regla de legibilidad del DS
const inputClass =
  "w-full rounded-lg border border-[rgba(30,48,85,0.6)] bg-[#0A1528] px-4 py-2.5 text-sm text-[#EFF4FF] placeholder:text-[#5B6A8A] transition-all focus:border-[#4C8BF5] focus:outline-none focus:shadow-[0_0_16px_rgba(76,139,245,0.25)]";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "im.kevinbolanos.dev@gmail.com",
    href: "mailto:im.kevinbolanos.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+57 313 775 1645",
    href: "https://wa.me/573137751645?text=Hola",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cali, Colombia",
    href: "https://www.google.com/maps/place/Cali,+Valle+del+Cauca/@3.3977688,-76.5222662,13.99z/data=!4m6!3m5!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854!16zL20vMDFwc3Nm",
  },
];

/**
 * Contenido del modal "Contact": misma funcionalidad de la vista
 * anterior (Formspree + toasts + mapa) con estética v3.
 */
export function ContactContent() {
  const [state, handleSubmit] = useForm("xwpvvggb");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("¡Mensaje enviado correctamente!", {
        description: "Te responderé lo antes posible.",
        style: { background: "#0284c7", color: "white", border: "none" },
      });
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, verifica los campos e intenta nuevamente.",
        style: { background: "#dc2626", color: "white", border: "none" },
      });
    }
  }, [state.errors]);

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.p
        variants={item}
        className="mb-7 text-center text-sm leading-relaxed text-[#94A3C8]"
      >
        ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
        ayudarte a convertirlas en realidad.
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Columna: información de contacto + mapa */}
        <div className="space-y-5">
          <motion.h3
            variants={item}
            className="wf-font-display text-lg font-semibold text-[#EFF4FF]"
          >
            Información de Contacto
          </motion.h3>

          <div className="space-y-3">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  variants={item}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="wf-glass group flex items-center gap-4 rounded-xl p-3 transition-colors hover:border-[rgba(56,189,248,0.4)]"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)",
                      boxShadow: "0 0 14px rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#EFF4FF]">
                      {link.label}
                    </p>
                    <p className="wf-font-mono truncate text-xs text-[#94A3C8]">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            variants={item}
            className="wf-glass-card h-[240px] overflow-hidden rounded-2xl p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22030.560525593013!2d-76.5413049549881!3d3.449081063862491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1761192569617!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Cali, Valle del Cauca"
            />
          </motion.div>
        </div>

        {/* Columna: formulario */}
        <div>
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 0.15,
                }}
                className="wf-glow-success flex h-16 w-16 items-center justify-center rounded-full bg-[#34D399]"
              >
                <CheckCircle className="h-8 w-8 text-[#050A18]" />
              </motion.div>
              <h3 className="wf-font-display text-xl font-semibold text-[#EFF4FF]">
                ¡Gracias por tu mensaje!
              </h3>
              <p className="text-sm text-[#94A3C8]">
                Te responderé lo antes posible.
              </p>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              variants={item}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="wf-contact-name"
                  className="mb-2 block text-sm font-medium text-[#EFF4FF]"
                >
                  Nombre
                </label>
                <input
                  id="wf-contact-name"
                  name="name"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Tu nombre completo"
                />
                <ValidationError
                  prefix="Nombre"
                  field="name"
                  errors={state.errors}
                  className="mt-1 text-sm text-[#F87171]"
                />
              </div>

              <div>
                <label
                  htmlFor="wf-contact-email"
                  className="mb-2 block text-sm font-medium text-[#EFF4FF]"
                >
                  Email
                </label>
                <input
                  id="wf-contact-email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="tu@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-[#F87171]"
                />
              </div>

              <div>
                <label
                  htmlFor="wf-contact-message"
                  className="mb-2 block text-sm font-medium text-[#EFF4FF]"
                >
                  Mensaje
                </label>
                <textarea
                  id="wf-contact-message"
                  name="message"
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                <ValidationError
                  prefix="Mensaje"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-[#F87171]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={!state.submitting ? { scale: 1.02 } : undefined}
                whileTap={!state.submitting ? { scale: 0.97 } : undefined}
                className="wf-glow-secondary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#4C8BF5] px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {state.submitting ? "Enviando..." : "Enviar Mensaje"}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
