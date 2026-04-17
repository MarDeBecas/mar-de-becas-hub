import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Search, FileText, BookOpen, Users, GraduationCap } from "lucide-react";
import imgColombiana from "@/assets/services/becaria-estudiando.png";
import imgCubana     from "@/assets/services/becario-cubana.png";
import imgPeruano    from "@/assets/services/becario-peruano.png";
import logoChevening from "@/assets/hero/Chevening.png";
import logoErasmus   from "@/assets/hero/Erasmus-Mundus.png";
import logoPronabec  from "@/assets/hero/PRONABEC.png";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Exploración de perfil",
    badge: "GRATIS",
    description: "Sesión 1:1 para mapear tu perfil y encontrar tu beca ideal. Sin compromisos.",
    color: "#FFC45F",
    gradient: "linear-gradient(135deg,#FFC45F,#f5a623)",
    dotColor: "linear-gradient(135deg,#FFC45F,#f5a623)",
    highlight: true,
  },
  {
    number: "02",
    icon: FileText,
    title: "Preparación de documentos",
    description: "CV académico, cartas de motivación y ensayos bajo estándares internacionales.",
    color: "#2059BA",
    gradient: "linear-gradient(135deg,#2059BA,#A07DE2)",
    dotColor: "linear-gradient(135deg,#2059BA,#A07DE2)",
    highlight: false,
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Postulación completa",
    description: "Acompañamiento 360° con revisión y feedback personalizado en cada etapa.",
    color: "#A07DE2",
    gradient: "linear-gradient(135deg,#A07DE2,#2059BA)",
    dotColor: "linear-gradient(135deg,#A07DE2,#2059BA)",
    highlight: false,
  },
  {
    number: "04",
    icon: Users,
    title: "Preparación de entrevistas",
    description: "Mock interviews reales con técnicas de comunicación efectiva.",
    color: "#2059BA",
    gradient: "linear-gradient(135deg,#2059BA,#6c4ec9)",
    dotColor: "linear-gradient(135deg,#2059BA,#6c4ec9)",
    highlight: false,
  },
];

const universityLogos = [
  { src: logoChevening, alt: "Chevening" },
  { src: logoErasmus,   alt: "Erasmus Mundus" },
  { src: logoPronabec,  alt: "PRONABEC" },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Parallax — los círculos de fondo se mueven más lento que las fotos
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgCircleY  = useTransform(scrollYProgress, [0, 1], ["0%",  "18%"]);
  const midCircleY = useTransform(scrollYProgress, [0, 1], ["0%",  "10%"]);
  const fgCircleY  = useTransform(scrollYProgress, [0, 1], ["0%",  "4%"]);

  return (
    <section
      ref={ref}
      id="servicios"
      className="relative py-16 md:py-24 overflow-hidden scroll-mt-20"
      style={{ background: "#f8f7ff" }}
    >
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute -left-48 -top-20 h-[500px] w-[500px] rounded-full blur-[150px]"
        style={{ background: "rgba(32,89,186,0.07)" }} />
      <div className="pointer-events-none absolute -right-48 top-1/2 h-[400px] w-[400px] rounded-full blur-[150px]"
        style={{ background: "rgba(160,125,226,0.09)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Grid principal ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ═══════════════════════════════════════════════════════════════════
              LADO IZQUIERDO — Collage regla de 3 + parallax
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative w-full"
            style={{ minHeight: "clamp(420px, 85vw, 540px)" }}
          >

            {/* ── CAPA 0: blob SVG ────────────────────────────────────────── */}
            <svg
              viewBox="0 0 520 520"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient id="blobSvc" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dce8ff" />
                  <stop offset="100%" stopColor="#ecdeff" />
                </linearGradient>
              </defs>
              <path
                d="M 262 52 C 378 28, 478 115, 466 242 C 454 362, 368 458, 244 460 C 118 462, 36 370, 48 248 C 60 120, 148 76, 262 52 Z"
                fill="url(#blobSvc)"
              />
            </svg>

            {/* ── CAPA 1 (parallax lento): círculos de COLOR DE FONDO ──────── */}
            <motion.div style={{ y: bgCircleY }} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
              {/* Dorado — top right — conecta con card 01 */}
              <motion.div
                animate={{ x: [0, 6, 0], y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full"
                style={{
                  width: 56, height: 56,
                  top: "6%", right: "8%",
                  background: "linear-gradient(135deg,#FFC45F,#f5a623)",
                  opacity: 0.22,
                  filter: "blur(1px)",
                }}
              />
              {/* Morado — left center — conecta con card 03 */}
              <motion.div
                animate={{ x: [0, -7, 0], y: [0, 6, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute rounded-full"
                style={{
                  width: 44, height: 44,
                  top: "46%", left: "4%",
                  background: "linear-gradient(135deg,#A07DE2,#2059BA)",
                  opacity: 0.22,
                  filter: "blur(1px)",
                }}
              />
              {/* Azul — bottom center — conecta con card 04 */}
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, 7, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute rounded-full"
                style={{
                  width: 36, height: 36,
                  bottom: "12%", left: "34%",
                  background: "linear-gradient(135deg,#2059BA,#6c4ec9)",
                  opacity: 0.2,
                  filter: "blur(1px)",
                }}
              />
            </motion.div>

            {/* ── CAPA 2 (parallax medio): círculo sólido icono — 4° elemento */}
            <motion.div
              style={{ y: midCircleY, zIndex: 8 }}
              className="absolute"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute flex items-center justify-center rounded-full shadow-xl"
                style={{
                  width: "clamp(56px, 14vw, 76px)",
                  height: "clamp(56px, 14vw, 76px)",
                  top: "2%", right: "18%",
                  background: "linear-gradient(135deg,#2059BA,#A07DE2)",
                  zIndex: 8,
                }}
              >
                <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            {/* ── CAPA 3 (parallax normal): las 3 fotos principales ────────── */}
            <motion.div style={{ y: fgCircleY }} className="absolute inset-0" style={{ zIndex: 10 }}>

              {/* FOTO GRANDE — colombiana (foco principal) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
                className="absolute overflow-hidden shadow-2xl"
                style={{
                  width: "clamp(220px, 55%, 300px)",
                  aspectRatio: "1/1",
                  top: "8%",
                  left: "4%",
                  borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%",
                  zIndex: 12,
                }}
              >
                <img src={imgColombiana} alt="Becaria estudiando" className="w-full h-full object-cover" />
              </motion.div>

              {/* FOTO MEDIANA — cubana */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
                className="absolute overflow-hidden shadow-xl"
                style={{
                  width: "clamp(145px, 34%, 185px)",
                  aspectRatio: "1/1",
                  top: "10%",
                  right: "2%",
                  borderRadius: "45% 55% 38% 62% / 58% 42% 62% 38%",
                  zIndex: 11,
                }}
              >
                <img src={imgCubana} alt="Becaria en proceso" className="w-full h-full object-cover" />
              </motion.div>

              {/* FOTO PEQUEÑA — peruano */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.28 }}
                className="absolute overflow-hidden shadow-xl"
                style={{
                  width: "clamp(155px, 38%, 210px)",
                  aspectRatio: "1/1",
                  bottom: "6%",
                  right: "6%",
                  borderRadius: "55% 45% 60% 40% / 42% 58% 45% 55%",
                  zIndex: 11,
                }}
              >
                <img src={imgPeruano} alt="Becario en entrevista" className="w-full h-full object-cover" />
              </motion.div>

            </motion.div>

            {/* ── CAPA 4: badge "6 Becas" integrado al collage ─────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="absolute flex flex-col items-center justify-center rounded-full shadow-xl text-center"
              style={{
                width: "clamp(72px, 18vw, 96px)",
                height: "clamp(72px, 18vw, 96px)",
                bottom: "16%",
                left: "6%",
                background: "linear-gradient(135deg,#2059BA,#A07DE2)",
                zIndex: 15,
              }}
            >
              <span className="font-display font-black text-2xl text-white leading-none">6</span>
              <span className="font-sans text-[9px] text-white/80 leading-tight px-2 mt-0.5">
                becas<br />ganadas
              </span>
            </motion.div>

          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              LADO DERECHO — título + steps
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col gap-5">

            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                Consigue la beca de tus sueños con{" "}
                <span style={{ color: "#2059BA" }}>asesoría experta personalizada</span>
              </h2>
              <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed">
                Te acompañamos en cada paso del proceso — desde conocer tu perfil hasta ganar tu beca.
              </p>
            </motion.div>

            {/* Steps numerados */}
            <div className="flex flex-col gap-3">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 + i * 0.09 }}
                  whileHover={{
                    y: -2,
                    boxShadow: s.highlight
                      ? "0 12px 36px rgba(255,196,95,0.2)"
                      : "0 8px 28px rgba(32,89,186,0.1)",
                    transition: { duration: 0.2 },
                  }}
                  className="relative cursor-default overflow-hidden"
                  style={{
                    borderRadius: "20px",
                    background: s.highlight
                      ? "linear-gradient(135deg,#fffbf0,#fff8e6)"
                      : "rgba(255,255,255,0.92)",
                    border: s.highlight
                      ? "1.5px solid rgba(255,196,95,0.4)"
                      : "1px solid rgba(0,0,0,0.06)",
                    boxShadow: s.highlight
                      ? "0 6px 24px rgba(255,196,95,0.1)"
                      : "0 2px 14px rgba(0,0,0,0.04)",
                    padding: "14px 16px",
                  }}
                >
                  {/* Glow hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{ borderRadius: "20px" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{
                      width: "100%", height: "100%", borderRadius: "20px",
                      background: `radial-gradient(ellipse at top left, ${s.color}20 0%, transparent 65%)`,
                    }} />
                  </motion.div>

                  {/* Conector — círculo de color alineado con los del collage */}
                  <div
                    className="absolute left-0 inset-y-0 w-1 rounded-r-full"
                    style={{ background: s.gradient }}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    {/* Número */}
                    <span
                      className="font-display font-black text-xs flex-shrink-0 w-6 text-center"
                      style={{ color: s.color }}
                    >
                      {s.number}
                    </span>

                    {/* Icono */}
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: s.gradient }}
                    >
                      <s.icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                    </div>

                    {/* Texto */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="font-display text-sm md:text-base font-black text-gray-900">
                          {s.title}
                        </h3>
                        {s.highlight && (
                          <span
                            className="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider flex-shrink-0"
                            style={{ background: "linear-gradient(135deg,#FFC45F,#f5a623)", color: "#0c1f36" }}
                          >
                            GRATIS
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    {/* Flecha hover */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <ArrowRight className="w-4 h-4" style={{ color: s.color }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <motion.a
                href="https://wa.link/mhr4d9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(32,89,186,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 font-display font-black text-sm md:text-base w-full px-8 py-4 text-white shadow-xl"
                style={{ background: "linear-gradient(135deg,#2059BA,#A07DE2)", borderRadius: "20px" }}
              >
                Agendar mi sesión de perfilamiento gratis
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="font-sans text-center text-sm text-gray-400 mt-3">
                Empieza hoy mismo
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}