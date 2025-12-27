import { Globe, Rocket, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sessions = [
  {
    number: 1,
    title: "Propósito y Visión de Liderazgo",
    description: "Define tu propósito y metas mediante un test de fortalezas y diseña tu hoja de ruta hacia la beca.",
  },
  {
    number: 2,
    title: "Panorama Global de Becas (Parte I)",
    description: "Inmersión en tipos de becas y requisitos clave. Aprende a usar buscadores especializados.",
  },
  {
    number: 3,
    title: "Estrategia de Selección (Parte II)",
    description: "Análisis del proceso de postulación y lista personalizada de 3 becas para tu perfil.",
  },
  {
    number: 4,
    title: "Perfil Competitivo y CV Internacional",
    description: "Transforma tu CV bajo estándares globales y optimiza tu LinkedIn. Panel con ex-becarios ganadores.",
  },
  {
    number: 5,
    title: "El Arte de la Carta de Motivación",
    description: "Estructura de carta ganadora con metodología STAR y redacción guiada con casos exitosos.",
  },
  {
    number: 6,
    title: "Pitch Personal y Simulación de Entrevista",
    description: "Entrenamiento ante jurados con simulación de entrevista real y feedback inmediato.",
  },
];

export function BecarioDelMundoSection() {
  return (
    <section id="programa" className="py-20 bg-gradient-to-b from-primary/5 to-background -mb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Programa Intensivo
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Becario del Mundo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¿No sabes por dónde empezar? Nuestro programa más exitoso con la guía de 
            <span className="text-primary font-semibold"> Marilu Nuñez </span> 
            y ex-becarios ganadores de EE.UU., Corea, Reino Unido y más.
          </p>
          <p className="text-foreground font-medium mt-4">
            6 sesiones prácticas para transformar tu perfil y lograr esa beca que sueñas.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            <BookOpen className="inline-block w-6 h-6 mr-2 text-primary" />
            Ruta de Formación
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session.number}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {session.number}
                  </span>
                  <h4 className="font-semibold text-foreground">{session.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{session.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* CTA */}
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            <Rocket className="inline-block w-6 h-6 mr-2 text-primary" />
            ¡Inscríbete en la siguiente edición!
          </h3>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a 
              href="https://forms.gle/7HnCBj5sxFTy3Rbt6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Quiero ser Becario del Mundo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
