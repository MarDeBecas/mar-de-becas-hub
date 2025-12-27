import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Scholarship {
  id: number;
  name: string;
  country: string;
  flag: string;
  deadline: string;
  level: string;
  coverage: string;
  isUrgent?: boolean;
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Beca Chevening",
    country: "Reino Unido",
    flag: "🇬🇧",
    deadline: "5 Nov 2026",
    level: "Maestría",
    coverage: "100%",
    isUrgent: false,
  },
  {
    id: 2,
    name: "Fulbright",
    country: "Estados Unidos",
    flag: "🇺🇸",
    deadline: "15 Abr 2026",
    level: "Maestría / Doctorado",
    coverage: "100%",
    isUrgent: true,
  },
  {
    id: 3,
    name: "Beca DAAD",
    country: "Alemania",
    flag: "🇩🇪",
    deadline: "30 Sep 2026",
    level: "Maestría / Doctorado",
    coverage: "Estipendio",
    isUrgent: false,
  },
  {
    id: 4,
    name: "Erasmus Mundus",
    country: "Europa",
    flag: "🇪🇺",
    deadline: "10 Ene 2026",
    level: "Maestría",
    coverage: "100%",
    isUrgent: false,
  },
  {
    id: 5,
    name: "Australia Awards",
    country: "Australia",
    flag: "🇦🇺",
    deadline: "1 May 2026",
    level: "Maestría / Doctorado",
    coverage: "100%",
    isUrgent: true,
  },
  {
    id: 6,
    name: "Fundación Carolina",
    country: "España",
    flag: "🇪🇸",
    deadline: "Jun 2026",
    level: "Maestría",
    coverage: "Parcial/Completo",
    isUrgent: false,
  },
  {
    id: 7,
    name: "Beca OEA",
    country: "América",
    flag: "🌎",
    deadline: "20 Mar 2026",
    level: "Maestría",
    coverage: "Hasta 80%",
    isUrgent: true,
  },
  {
    id: 8,
    name: "Generación Bicentenario",
    country: "Varios países",
    flag: "🇵🇪",
    deadline: "Jun 2026",
    level: "Maestría",
    coverage: "100%",
    isUrgent: false,
  },
];

export const RecentScholarshipsSection = () => {
  return (
    <section id="becas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Oportunidades Internacionales
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Becas Destacadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce las becas internacionales más prestigiosas para tu formación profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{scholarship.flag}</span>
                  <span className="text-sm text-muted-foreground">
                    {scholarship.country}
                  </span>
                </div>
                {scholarship.isUrgent && (
                  <Badge variant="destructive" className="text-xs">
                    ¡Próximo!
                  </Badge>
                )}
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {scholarship.name}
              </h3>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-muted-foreground">{scholarship.level}</span>
                <Badge variant="secondary">{scholarship.coverage}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{scholarship.deadline}</span>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                  <a href="https://wa.link/mhr4d9" target="_blank" rel="noopener noreferrer">
                    Info
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
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
