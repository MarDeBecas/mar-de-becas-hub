import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Users, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Asesoría de diagnóstico de perfil",
    description: "Analizamos tu perfil y encontramos las becas que mejor se ajustan a tus metas.",
    features: [
      "Análisis de perfil académico y profesional",
      "Selección estratégica de becas",
      "Planificación de timeline de postulación",
      "Resumen personalizado de las becas más adecuadas para ti",
    ],
    color: "#2059BA",
  },
  {
    icon: FileText,
    title: "Preparación de Documentos",
    description: "Desarrollo y revisión de todos los documentos necesarios para tu aplicación, asegurando que cada palabra refleje tu potencial.",
    features: [
      "Ensayos para postular a becas",
      "Cartas de motivación",
      "CV académico internacional",
      "Revisión de otros documentos",
    ],
    color: "#A07DE2",
  },
  {
    icon: BookOpen,
    title: "Postulación a beca completa",
    description: "Acompañamiento completo desde la selección de programas hasta la postulación final.",
    features: [
      "Revisión de requisitos en la plataforma oficial",
      "Revisión y validación de documentos necesarios",
      "Acompañamiento para la entrevista",
      "Sesiones individuales de feedback personalizado",
    ],
    color: "#2059BA",
  },
  {
    icon: Users,
    title: "Preparación de Entrevistas",
    description: "Simulacros y coaching para que llegues seguro y preparado a cada entrevista, ya sea presencial o virtual.",
    features: [
      "Mock interviews personalizadas",
      "Feedback detallado",
      "Técnicas de comunicación efectiva",
      "Manejo de nervios y confianza",
    ],
    color: "#A07DE2",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="servicios"
      className="py-24 scroll-mt-20"
      style={{ background: "#f8f7ff" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider"
            style={{
              background: "rgba(32,89,186,0.08)",
              color: "#2059BA",
              border: "1px solid rgba(32,89,186,0.2)",
            }}
          >
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Te acompañamos en cada{" "}
            <span style={{ color: "#2059BA" }}>paso del camino</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Desde la preparación de tu perfil hasta la entrevista final, ofrecemos
            servicios diseñados para maximizar tus posibilidades de éxito.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
              style={{
                border: `1.5px solid ${service.color}25`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1.5px solid ${service.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = `1.5px solid ${service.color}25`;
              }}
            >
              {/* Icono + título */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${service.color}, #A07DE2)` }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-black text-gray-900 leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${service.color}15` }}
                    >
                      <CheckCircle
                        className="w-3 h-3"
                        style={{ color: service.color }}
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Barra inferior de color */}
              <div
                className="h-1 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}, #A07DE2)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="https://wa.link/mhr4d9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(32,89,186,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 font-black text-base px-8 py-4 rounded-2xl text-white shadow-lg transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #2059BA, #A07DE2)" }}
          >
            Solicitar información de servicios
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}