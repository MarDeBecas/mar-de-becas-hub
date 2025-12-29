import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emmyImage from "@/assets/testimonial-emmy.jpg";
import nayvImage from "@/assets/testimonial-nayvi.jpg";
import royImage from "@/assets/testimonial-roy.jpg";
import wendyImage from "@/assets/testimonial-wendy.jpg";

const testimonials = [{
  id: 1,
  name: "Emmy Taboada",
  scholarship: "Beca Generación del Bicentenario",
  country: "Reino Unido",
  university: "University of Edinburgh, Reino Unido",
  quote: "La ayuda de Marilú en este proceso fue fundamental. Recuerdo que desde la primera asesoría pude hacer mi timeline de los pasos y consideraciones importantes que debía tener. Eso me ayudó mucho a poder organizarme. Además, cada vez que surgían dudas en este proceso siempre recurría a ella para preguntar y ella siempre estaba dispuesta en ayudar. Agradezco mucho su constancia a todos los mensajes que le envié, porque en realidad fueron muchos",
  image: emmyImage
}, {
  id: 2,
  name: "Nayvi Pablo",
  scholarship: "Ireland Fellowship",
  country: "Irlanda",
  university: "University of Galway, Irlanda",
  quote: "Gracias a la mentoría de Marilu, fortalecí mis ensayos y me preparé con seguridad para la entrevista con la Embajada de Irlanda. Su guía fue fundamental para lograr una beca de Irish Aid y ser admitida en maestría en Género, Globalización Derechos en la Universidad de Galway. Más allá de lo académico, me ayudó a confiar en mi misma y siempre le estaré agradecida por su generosidad y compromiso.",
  image: nayvImage
}, {
  id: 3,
  name: "Roy Chirinos",
  scholarship: "Beca Generación del Bicentenario",
  country: "Reino Unido",
  university: "University College London, Reino Unido",
  quote: "Recomiendo al equipo de Mar de Becas, fundado por Marilú, a quienes buscan hacer una maestría en el extranjero. Su asesoría fue clave para entender el proceso, comparar opciones y acceder a financiamiento mediante becas. Gracias a su guía, postulé y gané la Beca Generación del Bicentenario (BGB). Destaco su experiencia, cercanía y disposición en cada etapa del camino.",
  image: royImage
}, {
  id: 4,
  name: "Wendy Dávila",
  scholarship: "Beca Generación del Bicentenario 2025",
  country: "Reino Unido",
  university: "University of Southampton, Reino Unido",
  quote: "Marilú, no tengo palabras para agradecer tu apoyo incondicional. Tu orientación experta con los documentos, sumado a tu motivación constante, fue fundamental para que pudiera culminar mi postulación y superar la subsanación. Tus consejos son un tesoro. Realmente espero que muchas más personas descubran el valor de tu experiencia para que puedan alcanzar sus objetivos académicos en el extranjero. Elegir la asesoría correcta, como tú, abre un mundo de posibilidades.",
  image: wendyImage
}];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl p-8 card-elevated relative transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
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
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conoce a quienes confiaron en nosotros y hoy cumplen sus sueños 
            académicos en las mejores universidades del mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
