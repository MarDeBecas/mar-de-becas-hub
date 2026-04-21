import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Target, ClipboardList, Lightbulb, ArrowRight,
} from "lucide-react";
import becarioGroupImage from "@/assets/becario-del-mundo-group.png";

const FOR_YOU = [
  "Quieres estudiar en el extranjero pero no sabes por dónde empezar",
  "Te sientes perdido/a con procesos y requisitos",
  "Ya intentaste aplicar y no lo lograste",
  "Buscas acompañamiento real, no solo información",
];

const SOLUTION = [
  { icon: Target,        title: "Mentoría personalizada", desc: "Acompañamiento 1:1 con expertos que ya ganaron becas internacionales." },
  { icon: ClipboardList, title: "Sesiones prácticas",     desc: "6 sesiones en vivo con ejercicios reales que construyen tu aplicación." },
  { icon: Lightbulb,     title: "Feedback directo",       desc: "Revisión detallada de tus documentos para que cada palabra cuente." },
];

const STEPS = [
  { number: "01", title: "Diagnóstico", desc: "Analizamos tu perfil y definimos las becas más adecuadas para ti." },
  { number: "02", title: "Estrategia",  desc: "Construimos tu plan de postulación paso a paso con fechas y prioridades." },
  { number: "03", title: "Aplicación",  desc: "Preparamos cada documento contigo y te acompañamos hasta el final." },
];

const TESTIMONIALS = [
  {
    name: "Meli R.",
    result: "Becaria del Mundo 2025 🌍",
    text: "Me ayudó a entender más sobre la postulación y tener claridad sobre mi proyecto personal.",
    initials: "MR",
    color: "#FFC45F",
  },
  {
    name: "Brenda R.",
    result: "Becaria del Mundo 2025 🇬🇧",
    text: "A través del autoconocimiento entendí mejor quién soy y por qué quiero seguir estudiando.",
    initials: "BR",
    color: "#F9E1DE",
  },
  {
    name: "Alondra R.",
    result: "Becaria del Mundo 2025 ✨",
    text: "Reconocí que mi trayectoria es competitiva a nivel internacional y que mis metas son alcanzables.",
    initials: "AR",
    color: "#FFC45F",
  },
];

function StatCounter({ end, suffix = "", label, last = false }: { end: number; suffix?: string; label: string; last?: boolean }) {
  const { count, ref } = useCountUp({ end, duration: 1800 });
  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-center"
      style={{ borderRight: last ? "none" : "1px solid rgba(255,255,255,0.1)" }}
    >
      <p className="font-display text-3xl font-black leading-none tabular-nums" style={{ color: "#FFC45F", textShadow: "0 0 20px rgba(255,196,95,0.5)" }}>
        {count}{suffix}
      </p>
      <p className="font-sans text-[12px] font-semibold uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
        {label}
      </p>
    </div>
  );
}

export function BecarioDelMundoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} id="curso" className="scroll-mt-20">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #2059BA 0%, #2a4fb0 45%, #A07DE2 100%)",
        }}
      >
        {/* Dots — igual al Hero de Gloria */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            maskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 3rem), transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 3rem), transparent 100%)",
          }}
        />

        {/* Glows — igual al Hero */}
        <div
          className="pointer-events-none absolute right-[-80px] top-[-40px] h-[320px] w-[320px] rounded-full blur-3xl"
          style={{ background: "rgba(249,225,222,0.3)" }}
        />
        <div
          className="pointer-events-none absolute left-[-60px] bottom-[-40px] h-[280px] w-[280px] rounded-full blur-3xl"
          style={{ background: "rgba(160,125,226,0.25)" }}
        />
        <div
          className="pointer-events-none absolute left-1/4 top-1/4 h-[380px] w-[480px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(160,125,226,0.3)" }}
        />
        {/* Glow dorado arriba derecha — igual al Hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 90% 6%, rgba(255,196,95,0.18) 0%, transparent 55%)",
          }}
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
              {/* Badge */}
              <span
                className="inline-block mb-5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wider backdrop-blur-sm"
                style={{
                  background: "rgba(255,196,95,0.15)",
                  border: "1px solid rgba(255,196,95,0.3)",
                  color: "#FFC45F",
                }}
              >
                Programa Intensivo
              </span>

              {/* Headline */}
              <h2
                className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
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
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(255,196,95,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 font-black text-base px-8 py-4 rounded-2xl shadow-xl"
                  style={{ background: "linear-gradient(135deg,#FFC45F,#f5a623)", color: "#0c1f36" }}
                >
                  Ver programa completo
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
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex -space-x-2">
                  {["#FFC45F", "#F9E1DE", "#ffffff"].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-black"
                      style={{ background: c, borderColor: "rgba(255,255,255,0.3)", color: "#0c1f36" }}
                    >
                      {["M", "B", "A"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
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
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {/* Barra navegador */}
                <div
                  className="rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(0,0,0,0.25)" }}
                >
                  <div className="flex gap-1.5">
                    {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div
                    className="flex-1 mx-3 rounded-md px-3 py-1 text-[11px]"
                    style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
                  >
                    becariodelmundo.com
                  </div>
                </div>

                {/* Pantalla */}
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src={becarioGroupImage}
                    alt="Sesión en vivo"
                    className="w-full h-64 md:h-72 object-cover object-top"
                    style={{ filter: "brightness(0.82) saturate(0.95)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(10,20,60,0.7) 0%, rgba(0,0,0,0.0) 45%, transparent 100%)",
                    }}
                  />

                  {/* Badge en vivo */}
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-white/80">Sesión en vivo</span>
                  </div>

                  {/* Texto inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#FFC45F" }}>
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

                {/* Stats con contador animado */}
                <div
                  className="flex mt-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <StatCounter end={200} suffix="+" label="Lista de espera" />
                  <StatCounter end={36} suffix="+" label="Alumnos"  />
                  <StatCounter end={4}  suffix=""  label="Países"   last />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}