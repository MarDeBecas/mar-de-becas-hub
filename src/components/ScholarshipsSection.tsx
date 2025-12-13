import { useState } from "react";
import { Calendar, MapPin, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    id: 1,
    name: "Beca Chevening",
    country: "Reino Unido",
    deadline: "2 de noviembre, 2025",
    funding: "Financiamiento completo",
    description:
      "Programa de becas del gobierno británico para futuros líderes. Cubre matrícula, manutención, vuelos y más.",
    tags: ["Maestría", "Liderazgo"],
  },
  {
    id: 2,
    name: "Beca Fulbright",
    country: "Estados Unidos",
    deadline: "15 de mayo, 2025",
    funding: "Financiamiento completo",
    description:
      "La beca más prestigiosa para estudios de posgrado en EE.UU. Incluye matrícula, seguro y estipendio mensual.",
    tags: ["Maestría", "Doctorado"],
  },
  {
    id: 3,
    name: "DAAD",
    country: "Alemania",
    deadline: "Octubre 2025",
    funding: "Parcial/Completo",
    description:
      "Servicio Alemán de Intercambio Académico. Diversas opciones de becas para estudios e investigación.",
    tags: ["Maestría", "Investigación"],
  },
  {
    id: 4,
    name: "Erasmus Mundus",
    country: "Europa",
    deadline: "Variable por programa",
    funding: "Financiamiento completo",
    description:
      "Programas de maestría conjunta en múltiples universidades europeas. Experiencia multicultural única.",
    tags: ["Maestría", "Internacional"],
  },
  {
    id: 5,
    name: "Fundación Carolina",
    country: "España",
    deadline: "Junio 2025",
    funding: "Parcial/Completo",
    description:
      "Becas enfocadas en profesionales con excelente desempeño académico, liderazgo y compromiso social. Másteres alineados a los ODS.",
    tags: ["Maestría", "Desarrollo"],
  },
  {
    id: 6,
    name: "Generación Bicentenario - PRONABEC",
    country: "Varios países",
    deadline: "Variable",
    funding: "Parcial/Completo",
    description:
      "Alianzas con universidades de toda América. Opciones en múltiples áreas de estudio.",
    tags: ["Maestría", "Regional"],
  },
];

const countries = ["Todos", "Reino Unido", "Estados Unidos", "Alemania", "Europa", "Australia", "Varios países"];
const fundingTypes = ["Todos", "Financiamiento completo", "Parcial/Completo"];

export function ScholarshipsSection() {
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const [selectedFunding, setSelectedFunding] = useState("Todos");

  const filteredScholarships = scholarships.filter((scholarship) => {
    const countryMatch =
      selectedCountry === "Todos" || scholarship.country === selectedCountry;
    const fundingMatch =
      selectedFunding === "Todos" || scholarship.funding === selectedFunding;
    return countryMatch && fundingMatch;
  });

  return (
    <section id="becas" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Becas Destacadas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oportunidades que{" "}
            <span className="text-gradient">transforman vidas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conoce las becas internacionales más prestigiosas y encuentra la que 
            mejor se adapte a tu perfil y objetivos profesionales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-card border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <select
              value={selectedFunding}
              onChange={(e) => setSelectedFunding(e.target.value)}
              className="bg-card border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {fundingTypes.map((funding) => (
                <option key={funding} value={funding}>
                  {funding}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-card rounded-2xl p-6 card-elevated flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {scholarship.name}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {scholarship.country}
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {scholarship.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-foreground font-medium">Cierre:</span>
                  <span className="text-muted-foreground">
                    {scholarship.deadline}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {scholarship.funding}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {scholarship.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#contacto">Necesito ayuda para aplicar</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a
              href="https://wa.me/51999999999?text=Hola,%20necesito%20ayuda%20para%20aplicar%20a%20una%20beca"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿No encuentras tu beca? Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
