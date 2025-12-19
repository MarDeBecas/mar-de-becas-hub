import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emmy Taboada",
    scholarship: "Beca BGC",
    country: "Reino Unido",
    university: "University of Oxford",
    quote:
      "La ayuda de Marilú en este proceso fue fundamental. Recuerdo que desde la primera asesoría pude hacer mi timeline de los pasos y consideraciones importantes que debía tener. Eso me ayudó mucho a poder organizarme. Además, cada vez que surgían dudas en este proceso siempre recurría a ella para preguntar y ella siempre estaba dispuesta en ayudar. Agradezco mucho su constancia a todos los mensajes que le envié, porque en realidad fueron muchos",
    image: "AR",
  },
  {
    id: 2,
    name: "Nayvi Pablo",
    scholarship: "Beca Fulbright",
    country: "Estados Unidos",
    university: "Columbia University",
    quote:
      "Gracias a la mentoría de Marilu, fortalecí mis ensayos y me preparé con seguridad para la entrevista con la Embajada de Irlanda. Su guía fue fundamental para lograr una beca de Irish Aid y ser admitida en maestría en Género, Globalización Derechos en la Universidad de Galway. Más allá de lo académico, me ayudó a confiar en mi misma y siempre le estaré agradecida por su generosidad y compromiso.",
    image: "CM",
  },
  {
    id: 3,
    name: "María José Torres",
    scholarship: "DAAD",
    country: "Alemania",
    university: "TU Munich",
    quote:
      "Marilú no solo me ayudó con los documentos, sino que me dio la confianza que necesitaba. Su metodología es impecable y su compromiso es genuino. 100% recomendada.",
    image: "MT",
  },
  {
    id: 4,
    name: "Luis Fernando García",
    scholarship: "Erasmus Mundus",
    country: "Europa",
    university: "Programa conjunto UE",
    quote:
      "Apliqué dos veces antes sin éxito. Con la asesoría de Mar de Becas, entendí qué me faltaba y logré una postulación ganadora. La inversión más valiosa que hice en mi carrera.",
    image: "LG",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Historias de <span className="text-gradient">éxito real</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conoce a quienes confiaron en nosotros y hoy cumplen sus sueños 
            académicos en las mejores universidades del mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 card-elevated relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.scholarship}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.university}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
