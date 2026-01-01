import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-scholarship.jpg";
import heroTopImage from "@/assets/hero-top-image.jpg";
import heroBottomImage from "@/assets/hero-bottom-image.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex flex-col overflow-hidden">
      {/* Top Image */}
      <div className="w-full">
        <img src={heroBottomImage} alt="Becarios internacionales con banderas" className="w-full h-auto object-cover" />
      </div>

      {/* Main Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center -mt-8">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
            Impulsamos tu camino hacia{" "}
            <span className="text-accent">tu beca soñada.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
            En Mar de Becas te acompañamos en cada paso de tu postulación. Con asesoría experta y personalizada, transformamos tu sueño de estudiar en el extranjero en realidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.link/mhr4d9">
                <MessageCircle className="h-5 w-5" />
                Contáctanos por WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicios">
                Ver servicios
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </div>

    </section>
  );
}
