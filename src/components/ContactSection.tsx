import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import juntosImage from "@/assets/juntos.jpg";

const WHATSAPP_NUMBER = "51979719879";

const bullets = [
  "Mentoría 100% online — desde cualquier país de Latam",
  "Sesiones en vivo con expertos que ya ganaron becas",
  "Acompañamiento personalizado en cada etapa",
  "Comunidad activa de becarios latinoamericanos",
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/manunez.s/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mardebecas",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mardebecas",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mar.de.becas",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Gun8d1dsdwO0ZQ1UChMJvc",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Marilu, soy ${form.name}.\n\n${form.message}\n\nMi correo: ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section ref={ref} id="contacto" className="relative scroll-mt-20 overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          PARTE SUPERIOR OSCURA — imagen + título
      ══════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>

        {/* Imagen de fondo */}
        <img
          src={juntosImage}
          alt="Equipo Mar de Becas"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay degradado Hero */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(32,89,186,0.92) 0%, rgba(42,79,176,0.88) 45%, rgba(160,125,226,0.85) 100%)",
          }}
        />
        {/* Dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow dorado */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 20% 10%, rgba(255,196,95,0.15) 0%, transparent 55%)",
          }}
        />

        {/* Contenido superior */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-32 md:pb-40">
          <div className="max-w-lg">
            <span
              className="inline-block mb-4 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider"
              style={{
                background: "rgba(255,196,95,0.15)",
                color: "#FFC45F",
                border: "1px solid rgba(255,196,95,0.3)",
              }}
            >
              Contáctanos
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4"
            >
              ¿Lista para ganar
              <br />
              <span style={{ color: "#FFC45F" }}>tu beca?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-white/70 text-base leading-relaxed"
            >
              Escríbenos y te respondemos en menos de 24 horas. Todo es online, desde cualquier lugar de Latam.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          PARTE INFERIOR CLARA — info + form sobresaliente
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#f8f7ff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Izquierda — bullets + redes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8 md:pt-10"
            >
              <ul className="flex flex-col gap-4 mb-10">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#2059BA" }} />
                    <span className="font-sans">{b}</span>
                  </motion.li>
                ))}
              </ul>

              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Síguenos en redes
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                      style={{
                        background: "rgba(32,89,186,0.08)",
                        border: "1px solid rgba(32,89,186,0.15)",
                        color: "#2059BA",
                      }}
                      title={s.label}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Derecha — form sobresaliente desde arriba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="-mt-24 md:-mt-32 relative z-10"
            >
              <div
                className="rounded-3xl p-6 md:p-8 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.98)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <h3 className="font-display text-xl font-black text-gray-900 mb-1">
                  Envíanos un mensaje
                </h3>
                <p className="font-sans text-sm text-gray-400 mb-6">
                  Te responderemos por WhatsApp en menos de 24h
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="¿Cómo te llamas?"
                      className="w-full rounded-xl px-4 py-3 font-sans text-sm text-gray-900 outline-none transition-all"
                      style={{ background: "#f8f7ff", border: "1.5px solid rgba(32,89,186,0.12)" }}
                      onFocus={e => (e.target.style.border = "1.5px solid #2059BA")}
                      onBlur={e  => (e.target.style.border = "1.5px solid rgba(32,89,186,0.12)")}
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Tu correo
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-xl px-4 py-3 font-sans text-sm text-gray-900 outline-none transition-all"
                      style={{ background: "#f8f7ff", border: "1.5px solid rgba(32,89,186,0.12)" }}
                      onFocus={e => (e.target.style.border = "1.5px solid #2059BA")}
                      onBlur={e  => (e.target.style.border = "1.5px solid rgba(32,89,186,0.12)")}
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Tu mensaje
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Cuéntanos sobre tu perfil y qué beca te interesa..."
                      className="w-full rounded-xl px-4 py-3 font-sans text-sm text-gray-900 outline-none transition-all resize-none"
                      style={{ background: "#f8f7ff", border: "1.5px solid rgba(32,89,186,0.12)" }}
                      onFocus={e => (e.target.style.border = "1.5px solid #2059BA")}
                      onBlur={e  => (e.target.style.border = "1.5px solid rgba(32,89,186,0.12)")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 16px 40px rgba(32,89,186,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-display font-black text-base text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg,#2059BA,#A07DE2)" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                  </motion.button>

                  <p className="font-sans text-center text-xs text-gray-400">
                    Al hacer clic se abrirá WhatsApp con tu mensaje listo
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}