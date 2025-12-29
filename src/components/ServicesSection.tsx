import { FileText, Users, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [{
  icon: GraduationCap,
  title: "Asesoría de diagnóstico de perfil",
  description: "Analizamos tu perfil y encontramos las becas que mejor se ajustan a tus metas.",
  features: ["Análisis de perfil académico y profesional", "Selección estratégica de becas", "Planificación de timeline de postulación", "Resumen personalizado de las becas más adecuadas para ti"]
}, {
  icon: FileText,
  title: "Preparación de Documentos",
  description: "Desarrollo y revisión de todos los documentos necesarios para tu aplicación, asegurando que cada palabra refleje tu potencial.",
  features: ["Ensayos para postular a becas", "Cartas de motivación", "CV académico internacional", "Revisión de otros documentos"]
}, {
  icon: BookOpen,
  title: "Postulación a beca completa",
  description: "Acompañamiento completo desde la selección de programas hasta la postulación final.",
  features: ["Revisión de requisitos en la plataforma oficial", "Revisión y validación de documentos necesarios", "Acompañamiento para la entrevista", "Sesiones individuales de feedback personalizado"]
}, {
  icon: Users,
  title: "Preparación de Entrevistas",
  description: "Simulacros y coaching para que llegues seguro y preparado a cada entrevista, ya sea presencial o virtual.",
  features: ["Mock interviews personalizadas", "Feedback detallado", "Técnicas de comunicación efectiva", "Manejo de nervios y confianza"]
}];
export function ServicesSection() {
  return <section id="servicios" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Te acompañamos en cada{" "}
            <span className="text-gradient">paso del camino</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desde la preparación de tu perfil hasta la entrevista final, 
            ofrecemos servicios diseñados para maximizar tus posibilidades de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => <div key={index} className="bg-card rounded-2xl p-8 card-elevated group hover:bg-primary transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                    <CheckCircle className="w-4 h-4 text-accent group-hover:text-primary-foreground flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="xl" asChild>
            <a href="https://wa.link/mhr4d9" target="_blank" rel="noopener noreferrer">Solicitar información de servicios</a>
          </Button>
        </div>
      </div>
    </section>;
}