import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-scholarship.jpg";
export function HeroSection() {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "3s"
    }} />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-20">
        <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-up opacity-0 stagger-1">
          Tu puerta a las mejores universidades del mundo
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
          Impulsamos tu camino hacia una{" "}
          <span className="text-accent">beca internacional</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">En Mar de Becas te acompañamos en cada paso de tu postulación. Con asesoría experta y personalizada, transformamos tu sueño de estudiar en el extranjero en realidad.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20información%20sobre%20becas" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Contáctanos por WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#becas">
              Ver becas destacadas
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up opacity-0 stagger-5">
          {[{
          number: "500+",
          label: "Becarios asesorados"
        }, {
          number: "25",
          label: "Países destino"
        }, {
          number: "95%",
          label: "Tasa de éxito"
        }, {
          number: "8",
          label: "Años de experiencia"
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>)}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>;
}