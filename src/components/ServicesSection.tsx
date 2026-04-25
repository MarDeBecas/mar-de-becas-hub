import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Search, FileText, BookOpen, Users } from "lucide-react";

import imgMexicano   from "@/assets/services/becario-mexicano.png";
import imgColombiana from "@/assets/services/becaria-estudiando.png";
import imgCubana     from "@/assets/services/becario-cubana.png";
import imgPeruano    from "@/assets/services/becario-peruano.png";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Exploración de perfil",
    badge: null,
    subtitle: "Tu punto de partida",
    description:
      "Sesión 1:1 para mapear tu perfil académico y profesional, identificar tus fortalezas y encontrar la beca ideal para ti. Sin compromisos.",
    image: imgMexicano,
    imageAlt: "Sesión de exploración de perfil",
    color: "#2059BA",
    gradient: "linear-gradient(135deg,#2059BA,#A07DE2)",
    cardBg: "linear-gradient(145deg,#f0f4ff 0%,#ece8ff 100%)",
    borderColor: "rgba(32,89,186,0.18)",
  },
  {
    number: "02",
    icon: FileText,
    title: "Preparación de documentos",
    badge: null,
    subtitle: "Documentos que impactan",
    description:
      "CV académico, cartas de motivación y ensayos redactados bajo estándares internacionales que destacan tu perfil ante los comités de selección.",
    image: imgColombiana,
    imageAlt: "Preparación de documentos académicos",
    color: "#2059BA",
    gradient: "linear-gradient(135deg,#2059BA,#A07DE2)",
    cardBg: "linear-gradient(145deg,#f0f4ff 0%,#ece8ff 100%)",
    borderColor: "rgba(32,89,186,0.18)",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Postulación completa",
    badge: null,
    subtitle: "Acompañamiento 360°",
    description:
      "Revisión y feedback personalizado en cada etapa — desde la selección de universidades hasta el envío final de tu candidatura.",
    image: imgCubana,
    imageAlt: "Proceso de postulación a beca",
    color: "#7c52d4",
    gradient: "linear-gradient(135deg,#A07DE2,#2059BA)",
    cardBg: "linear-gradient(145deg,#f5f0ff 0%,#eef3ff 100%)",
    borderColor: "rgba(160,125,226,0.25)",
  },
  {
    number: "04",
    icon: Users,
    title: "Preparación de entrevistas",
    badge: null,
    subtitle: "Comunica con confianza",
    description:
      "Mock interviews reales con técnicas de comunicación efectiva para que llegues seguro/a y preparado/a al día más importante de tu proceso.",
    image: imgPeruano,
    imageAlt: "Preparación para entrevista de beca",
    color: "#7c52d4",
    gradient: "linear-gradient(135deg,#A07DE2,#2059BA)",
    cardBg: "linear-gradient(145deg,#f5f0ff 0%,#eef3ff 100%)",
    borderColor: "rgba(160,125,226,0.25)",
  },
];


export function ServicesSection() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section
      id="servicios"
      className="relative py-16 md:py-24 overflow-hidden scroll-mt-20"
      style={{ background: "#f8f7ff" }}
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -left-48 -top-20 h-[500px] w-[500px] rounded-full blur-[150px]"
        style={{ background: "rgba(32,89,186,0.07)" }}
      />
      <div
        className="pointer-events-none absolute -right-48 top-1/2 h-[400px] w-[400px] rounded-full blur-[150px]"
        style={{ background: "rgba(160,125,226,0.09)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 md:gap-14 items-start">

          {/* ── LEFT: heading + service tabs ──────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span
                className="inline-flex items-center px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest"
                style={{ background: "rgba(160,125,226,0.06)", border: "1.5px solid rgba(160,125,226,0.35)", color: "#A07DE2" }}
              >
                Servicios
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="font-display text-4xl md:text-5xl font-black text-gray-900"
            >
              Así podemos ayudarte
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-sans text-sm md:text-base text-gray-400 leading-relaxed"
            >
              Transformamos tu perfil en una historia ganadora y te llevamos de la idea a la beca
            </motion.p>

            {/* Service tabs */}
            <div className="flex flex-col gap-1.5">
              {services.map((item, i) => {
                const isActive = active === i;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: 0.18 + i * 0.07 }}
                    className="relative flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-200 group"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.95)" : "transparent",
                      boxShadow: isActive ? "0 4px 22px rgba(0,0,0,0.07)" : "none",
                      border: isActive
                        ? `1.5px solid ${item.borderColor}`
                        : "1.5px solid transparent",
                    }}
                  >
                    {/* Dot indicator */}
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? item.gradient : "#d1d5db",
                      }}
                    />

                    <span
                      className="font-display font-bold text-sm md:text-[0.95rem] transition-colors duration-200 flex-1"
                      style={{ color: isActive ? "#0c1f36" : "#9ca3af" }}
                    >
                      {item.title}
                    </span>

                    {item.badge && (
                      <span
                        className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider flex-shrink-0"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg,#FFC45F,#f5a623)"
                            : "#f3f4f6",
                          color: isActive ? "#0c1f36" : "#9ca3af",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}

                    {isActive && (
                      <ArrowRight
                        className="w-3.5 h-3.5 flex-shrink-0 opacity-50"
                        style={{ color: item.color }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.link/mhr4d9"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.52 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 48px rgba(32,89,186,0.28)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 font-display font-black text-sm text-white px-6 py-3.5 shadow-xl"
              style={{
                background: "linear-gradient(135deg,#2059BA,#A07DE2)",
                borderRadius: "16px",
              }}
            >
              Agenda tu sesión
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* ── RIGHT: animated service card ──────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.975 }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden shadow-2xl"
              style={{
                borderRadius: "28px",
                background: s.cardBg,
                border: `1.5px solid ${s.borderColor}`,
              }}
            >
              {/* Pagination dots */}
              <div className="flex items-center justify-end gap-1.5 px-5 pt-5 pb-3">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: i === active ? s.gradient : "#d1d5db",
                      width: i === active ? 20 : 6,
                    }}
                  />
                ))}
              </div>

              {/* Image */}
              <div
                className="mx-4 overflow-hidden"
                style={{ borderRadius: "18px", aspectRatio: "16/9" }}
              >
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover scale-[1.18] origin-center"
                />
              </div>

              {/* Content */}
              <div className="px-5 pt-5 pb-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: s.gradient }}
                  >
                    <s.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p
                      className="font-sans text-[11px] font-bold uppercase tracking-widest mb-0.5"
                      style={{ color: s.color }}
                    >
                      {s.subtitle}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-black text-gray-900 leading-tight">
                      {s.title}
                      {s.badge && (
                        <span
                          className="ml-2 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider align-middle"
                          style={{
                            background: "linear-gradient(135deg,#FFC45F,#f5a623)",
                            color: "#0c1f36",
                          }}
                        >
                          {s.badge}
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
                  {s.description}
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://wa.link/mhr4d9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 font-display font-black text-sm text-white py-3 px-5 shadow-lg transition-opacity hover:opacity-90"
                    style={{ background: s.gradient, borderRadius: "14px" }}
                  >
                    Empezar ahora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActive((active + 1) % services.length)}
                    className="flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-base transition-all hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      color: s.color,
                      border: `1.5px solid ${s.borderColor}`,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}
                    aria-label="Siguiente servicio"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
