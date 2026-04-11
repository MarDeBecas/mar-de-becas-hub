import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ClipboardList,
  Target,
  Rocket,
  ArrowRight,
} from "lucide-react";
import becarioGroupImage from "@/assets/becario-del-mundo-group.png";

const FOR_YOU = [
  "Quieres estudiar en el extranjero pero no sabes por dónde empezar",
  "Te sientes perdido/a con procesos y requisitos",
  "Ya intentaste aplicar y no lo lograste",
  "Buscas acompañamiento real, no solo información",
];

const SOLUTION = [
  { icon: Target, title: "Mentoría personalizada", desc: "Acompañamiento 1:1 con expertos que ya ganaron becas internacionales." },
  { icon: ClipboardList, title: "Sesiones prácticas", desc: "6 sesiones en vivo con ejercicios reales que construyen tu aplicación." },
  { icon: Lightbulb, title: "Feedback directo", desc: "Revisión detallada de tus documentos para que cada palabra cuente." },
];

const STEPS = [
  { number: "01", title: "Diagnóstico", desc: "Analizamos tu perfil y definimos las becas más adecuadas para ti." },
  { number: "02", title: "Estrategia", desc: "Construimos tu plan de postulación paso a paso con fechas y prioridades." },
  { number: "03", title: "Aplicación", desc: "Preparamos cada documento contigo y te acompañamos hasta el final." },
];

const TESTIMONIALS = [
  {
    name: "Meli R.",
    result: "Becaria del Mundo 2025 🌍",
    text: "Me ayudó a entender más sobre la postulación y tener claridad sobre mi proyecto personal.",
    initials: "MR",
    color: "#2059BA",
  },
  {
    name: "Brenda R.",
    result: "Becaria del Mundo 2025 🇬🇧",
    text: "A través del autoconocimiento entendí mejor quién soy y por qué quiero seguir estudiando.",
    initials: "BR",
    color: "#A07DE2",
  },
  {
    name: "Alondra R.",
    result: "Becaria del Mundo 2025 ✨",
    text: "Reconocí que mi trayectoria es competitiva a nivel internacional y que mis metas son alcanzables.",
    initials: "AR",
    color: "#FFC45F",
  },
];

export function BecarioDelMundoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} id="curso" className="scroll-mt-20">

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #0f1f5c 0%, #2d1b69 50%, #1a0b3d 100%)",
        }}
      >
        {/* Orbes */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ background: "rgba(160,125,226,0.25)" }}
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ background: "rgba(32,89,186,0.2)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Texto izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Badge premium */}
              <span
                className="inline-block mb-5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wider backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Programa Intensivo
              </span>

              {/* Headline */}
              <h2
                className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
              >
                Consigue una beca
                <br />
                <span style={{ color: "#FFC45F" }}>internacional</span>
                <br />
                paso a paso
              </h2>

              {/* Subheadline */}
              <p
                className="text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Te guiamos paso a paso con mentoría real para que logres una beca en el extranjero.
              </p>

              {/* CTA */}
              <div className="flex flex-col items-center lg:items-start gap-3 mb-6">
                <motion.a
                  href="https://becariodelmudno.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(255,196,95,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 font-black text-base px-8 py-4 rounded-2xl shadow-xl transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #FFC45F, #f5a623)", color: "#1a0b3d" }}
                >
                  <span>Ver programa completo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Cupos limitados · Próxima generación inicia pronto
                </p>
              </div>

              {/* Social proof */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex -space-x-2">
                  {["#2059BA", "#A07DE2", "#FFC45F"].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-black text-white"
                      style={{ background: c, borderColor: "rgba(255,255,255,0.2)" }}
                    >
                      {["M", "B", "A"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                  +30 estudiantes ya aceptados en el extranjero
                </span>
              </div>
            </motion.div>

            {/* Mockup derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-2xl"
            >
              <div
                className="rounded-2xl p-4 md:p-6 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {/* Barra navegador */}
                <div
                  className="rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                >
                  <div className="flex gap-1.5">
                    {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div
                    className="flex-1 mx-3 rounded-md px-3 py-1 text-[11px]"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    becariodelmundo.com
                  </div>
                </div>

                {/* Pantalla con overlay */}
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src={becarioGroupImage}
                    alt="Sesión en vivo"
                    className="w-full h-64 md:h-72 object-cover object-top"
                    style={{ filter: "brightness(0.55) saturate(0.8)" }}
                  />

                  {/* Overlay degradado */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(26,11,61,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                    }}
                  />

                  {/* Badge en vivo */}
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-white/80">Sesión en vivo</span>
                  </div>

                  {/* Texto inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-[11px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: "#FFC45F" }}
                    >
                      Sesiones en vivo con mentoría real
                    </p>
                    <p className="text-white font-black text-xl leading-tight">
                      Sesión 04: Perfil Competitivo
                    </p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Con Marilú Nuñez · 36 participantes
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { v: "6", l: "Sesiones" },
                    { v: "36+", l: "Alumnos" },
                    { v: "4", l: "Países" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl py-3 text-center"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-lg font-black" style={{ color: "#FFC45F" }}>{s.v}</p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}