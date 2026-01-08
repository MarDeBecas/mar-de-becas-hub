import { Target, Eye, Heart, GraduationCap, Users, UserCheck } from "lucide-react";
import mariluGraduation from "@/assets/marilu-graduation.jpg";
import { useCountUp } from "@/hooks/useCountUp";

function ImpactCounter({ end, label, suffix = "+", prefix = "", formatNumber = false, icon: Icon }: { end: number; label: string; suffix?: string; prefix?: string; formatNumber?: boolean; icon?: React.ComponentType<{ className?: string }> }) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  const displayValue = formatNumber ? count.toLocaleString('en-US') : count;
  
  return (
    <div 
      ref={ref} 
      className="text-center p-4 bg-primary/5 rounded-xl animate-fade-in"
    >
      {Icon && (
        <div className="flex justify-center mb-2">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <p className="text-2xl font-bold text-primary">
        {prefix}{displayValue}{suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return <section id="nosotros" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conoce a <span className="text-gradient">Mar de Becas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos un equipo apasionado por abrir puertas a la educación internacional, 
            guiando a talentosos profesionales hacia las mejores oportunidades de becas en el mundo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Marilú Profile */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden card-elevated">
              <img alt="Marilú Nuñez - Asesora de Becas" className="w-full h-full object-cover" src={mariluGraduation} />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">8+</p>
              <p className="text-sm opacity-90">Años de experiencia</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Marilú Nuñez
            </h3>
            <p className="text-primary font-medium text-lg">
              Fundadora & Asesora Principal
            </p>
            <p className="text-muted-foreground leading-relaxed">Marilu Nuñez es fundadora de Mar de Becas y asesora especializada en becas internacionales de posgrado. Es Ingeniera Industrial y cuenta con un <strong className="text-foreground font-semibold">MSc en Emprendimiento e Innovación en The University of Edinburgh (Reino Unido)</strong>. Con más de ocho años de experiencia, ha acompañado a jóvenes peruanos y latinoamericanos a ingresar a universidades de prestigio en el extranjero, logrando becas cubiertas al 100% en países como <strong className="text-foreground font-semibold">Australia, Reino Unido e Irlanda.</strong></p>
            <p className="text-muted-foreground leading-relaxed">Fue ganadora de la <strong className="text-foreground font-semibold">Beca Generación del Bicentenario 2024</strong> para cursar estudios de posgrado en el Reino Unido y finalista de la <strong className="text-foreground font-semibold">Beca Chevening 2024</strong>. Además, ha sido seleccionada como becaria en foros internacionales de liderazgo juvenil en Italia y Países Bajos, y reconocida como <strong className="text-foreground font-semibold">joven líder por la Cámara de Comercio de Lima</strong>, así como <strong className="text-foreground font-semibold">embajadora oficial de PRONABEC</strong>.</p>
            
            <h4 className="text-xl font-bold text-foreground pt-4">Nuestro impacto</h4>
            <div className="grid grid-cols-3 gap-4">
              <ImpactCounter end={80} label="Asesorados" icon={UserCheck} />
              <ImpactCounter end={519364} label="en becas completas" prefix="US$ " suffix="" formatNumber={true} icon={GraduationCap} />
              <ImpactCounter end={1000} label="Miembros en nuestra comunidad" icon={Users} />
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/marilu-nu%C3%B1ez-sanchez/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/mardebecas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          icon: Target,
          title: "Nuestra Misión",
          description: "Democratizar el acceso a la educación internacional, brindando asesoría personalizada que transforme el potencial de cada postulante en oportunidades reales de becas."
        }, {
          icon: Eye,
          title: "Nuestra Visión",
          description: "Ser el referente latinoamericano en asesoría de becas, reconocidos por nuestro compromiso con el éxito de cada estudiante y nuestra contribución al desarrollo profesional de la región."
        }, {
          icon: Heart,
          title: "Nuestros Valores",
          description: "Excelencia, compromiso, cercanía y transparencia guían cada paso de nuestro trabajo. Creemos en el poder transformador de la educación y en el potencial de cada persona."
        }].map((item, index) => <div key={index} className="bg-card p-8 rounded-2xl card-elevated text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}