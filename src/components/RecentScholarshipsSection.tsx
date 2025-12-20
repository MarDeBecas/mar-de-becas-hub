import { Calendar, MapPin, GraduationCap, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Scholarship {
  id: number;
  name: string;
  country: string;
  institution: string;
  deadline: string;
  level: string;
  coverage: string;
  isUrgent?: boolean;
}

const recentScholarships: Scholarship[] = [
  {
    id: 1,
    name: "Beca Chevening",
    country: "Reino Unido",
    institution: "Gobierno del Reino Unido",
    deadline: "5 Nov 2026",
    level: "Maestría",
    coverage: "100% - Matrícula, manutención y vuelos",
    isUrgent: false,
  },
  {
    id: 2,
    name: "Fulbright",
    country: "Estados Unidos",
    institution: "Departamento de Estado de EE.UU.",
    deadline: "15 Abr 2026",
    level: "Maestría / Doctorado",
    coverage: "100% - Incluye seguro médico",
    isUrgent: true,
  },
  {
    id: 3,
    name: "Beca DAAD",
    country: "Alemania",
    institution: "DAAD",
    deadline: "30 Sep 2026",
    level: "Maestría / Doctorado",
    coverage: "Estipendio mensual + seguro",
    isUrgent: false,
  },
  {
    id: 4,
    name: "Erasmus Mundus",
    country: "Europa",
    institution: "Unión Europea",
    deadline: "10 Ene 2026",
    level: "Maestría",
    coverage: "100% - Incluye movilidad",
    isUrgent: false,
  },
  {
    id: 5,
    name: "Australia Awards",
    country: "Australia",
    institution: "Gobierno de Australia",
    deadline: "1 May 2026",
    level: "Maestría / Doctorado",
    coverage: "100% - Matrícula y manutención",
    isUrgent: true,
  },
  {
    id: 6,
    name: "Beca OEA",
    country: "América",
    institution: "Organización de Estados Americanos",
    deadline: "20 Mar 2026",
    level: "Maestría",
    coverage: "Parcial - Hasta 80%",
    isUrgent: true,
  },
];

export const RecentScholarshipsSection = () => {
  return (
    <section id="becas-recientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Clock className="w-3 h-3 mr-1" />
            Actualizado semanalmente
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Becas Más Recientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con las últimas oportunidades de becas internacionales. 
            Actualizamos esta lista constantemente para que no te pierdas ninguna convocatoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentScholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {scholarship.country}
                  </span>
                </div>
                {scholarship.isUrgent && (
                  <Badge variant="destructive" className="text-xs">
                    ¡Próximo cierre!
                  </Badge>
                )}
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {scholarship.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {scholarship.institution}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-primary/70" />
                  <span className="text-foreground">{scholarship.level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary/70" />
                  <span className="text-foreground">Cierre: {scholarship.deadline}</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground mb-1">Cobertura</p>
                <p className="text-sm font-medium text-foreground">{scholarship.coverage}</p>
              </div>

              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                <a href="https://wa.link/mhr4d9" target="_blank" rel="noopener noreferrer">
                  Más información
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Buscas una beca específica? Te ayudamos a encontrarla
          </p>
          <Button size="lg" asChild>
            <a href="https://wa.link/mhr4d9" target="_blank" rel="noopener noreferrer">
              Consultar por más becas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
