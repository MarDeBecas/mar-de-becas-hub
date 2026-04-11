import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import emmyImage from "@/assets/testimonial-emmy.jpg";
import nayvImage from "@/assets/testimonial-nayvi.jpg";
import royImage from "@/assets/testimonial-roy.jpg";
import wendyImage from "@/assets/testimonial-wendy.jpg";

const testimonials = [
  {
    id: 1,
    name: "Emmy Taboada",
    result: "Aceptada en Reino Unido",
    university: "University of Edinburgh · Beca Bicentenario",
    quote: "Pasé de no saber por dónde empezar a tener un plan claro y lograr mi beca. La mentoría cambió completamente mi proceso.",
    full: "La ayuda de Marilú en este proceso fue fundamental. Desde la primera asesoría pude hacer mi timeline de pasos importantes. Cada vez que surgían dudas siempre recurría a ella y siempre estaba dispuesta a ayudar. Agradezco mucho su constancia a todos los mensajes que le envié, porque en realidad fueron muchos.",
    image: emmyImage,
    color: "#2059BA",
  },
  {
    id: 2,
    name: "Nayvi Pablo",
    result: "Aceptada en Irlanda",
    university: "University of Galway · Ireland Fellowship",
    quote: "Pasé de sentirme perdida a llegar segura a mi entrevista con la Embajada. Sin ese acompañamiento no lo hubiera logrado.",
    full: "Gracias a la mentoría de Marilú, fortalecí mis ensayos y me preparé con seguridad para la entrevista con la Embajada de Irlanda. Su guía fue fundamental para lograr la beca. Más allá de lo académico, me ayudó a confiar en mí misma y siempre le estaré agradecida por su generosidad y compromiso.",
    image: nayvImage,
    color: "#A07DE2",
  },
  {
    id: 3,
    name: "Roy Chirinos",
    result: "Aceptado en Reino Unido",
    university: "University College London · Beca Bicentenario",
    quote: "La asesoría me dio claridad en cada etapa. Entendí el proceso, comparé opciones y finalmente gané la beca.",
    full: "Recomiendo al equipo de Mar de Becas a quienes buscan hacer una maestría en el extranjero. Su asesoría fue clave para entender el proceso, comparar opciones y acceder a financiamiento mediante becas. Destaco su experiencia, cercanía y disposición en cada etapa del camino.",
    image: royImage,
    color: "#2059BA",
  },
  {
    id: 4,
    name: "Wendy Dávila",
    result: "Aceptada en Reino Unido",
    university: "University of Southampton · Beca Bicentenario",
    quote: "Tenía muchas dudas y miedos. La orientación fue clave para culminar mi postulación con confianza y éxito.",
    full: "Marilú, no tengo palabras para agradecer tu apoyo incondicional. Tu orientación experta con los documentos, sumado a tu motivación constante, fue fundamental para culminar mi postulación. Tus consejos son un tesoro. Elegir la asesoría correcta, como tú, abre un mundo de posibilidades.",
    image: wendyImage,
    color: "#A07DE2",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="testimonios"
      className="py-20 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block mb-4 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider"
            style={{
              background: "rgba(32,89,186,0.08)",
              color: "#2059BA",
              border: "1px solid rgba(32,89,186,0.2)",
            }}
          >
            Resultados reales
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Historias reales de estudiantes
            <br />
            <span style={{ color: "#2059BA" }}>que ya lo lograron</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Aceptados en universidades y becas internacionales.
          </p>
          <p className="text-sm text-gray-400 mt-2 font-medium">
            +30 estudiantes aceptados en el extranjero
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative">
          {/* Fade derecho */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 z-10"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />

          <div
            className="overflow-x-auto pb-4 -mx-6 px-6"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-4 items-start" style={{ width: "max-content" }}>
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-white rounded-2xl p-5 flex-shrink-0 transition-all duration-300"
                  style={{
                    width: "320px",
                    scrollSnapAlign: "start",
                    boxShadow: expanded === t.id
                      ? "0 20px 48px rgba(0,0,0,0.12)"
                      : "0 4px 20px rgba(0,0,0,0.08)",
                    border: `1.5px solid ${expanded === t.id ? t.color + "50" : t.color + "20"}`,
                  }}
                >
                  {/* Resultado */}
                  <p className="text-base font-bold mb-3 leading-snug" style={{ color: t.color }}>
                    {t.result}
                  </p>

                  {/* Foto + nombre */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                      style={{ border: `2px solid ${t.color}30` }}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm leading-tight">{t.name}</p>
                      <p className="text-xs leading-tight mt-0.5" style={{ color: "#9ca3af" }}>
                        {t.university}
                      </p>
                    </div>
                  </div>

                  {/* Quote corto siempre visible */}
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  {/* Expand — texto completo */}
                  <AnimatePresence>
                    {expanded === t.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500 text-xs leading-relaxed mt-3 overflow-hidden"
                      >
                        {t.full}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Botón leer más */}
                  <button
                    onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                    className="flex items-center gap-1 mt-3 text-xs font-bold transition-all duration-200"
                    style={{ color: t.color }}
                  >
                    {expanded === t.id ? "Leer menos" : "Leer más"}
                    <motion.div
                      animate={{ rotate: expanded === t.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.div>
                  </button>

                  {/* Barra color */}
                  <div
                    className="h-0.5 rounded-full mt-4"
                    style={{ background: `linear-gradient(90deg, ${t.color}, #A07DE2)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://becariodelmudno.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 hover:gap-3"
            style={{ color: "#2059BA" }}
          >
            Ver programa completo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}