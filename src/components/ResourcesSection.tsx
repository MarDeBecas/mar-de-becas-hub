import { Download, FileText, CheckSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "Guía Completa de Postulación",
    description:
      "Todo lo que necesitas saber para preparar una postulación ganadora, paso a paso.",
    type: "PDF",
    pages: "45 páginas",
  },
  {
    icon: CheckSquare,
    title: "Checklist de Documentos",
    description:
      "Lista verificable con todos los documentos necesarios para las principales becas.",
    type: "PDF",
    pages: "12 páginas",
  },
  {
    icon: BookOpen,
    title: "Plantillas de Ensayos",
    description:
      "Estructuras y ejemplos de Statement of Purpose y cartas de motivación exitosas.",
    type: "Pack",
    pages: "5 plantillas",
  },
];

export function ResourcesSection() {
  return (
    <section id="recursos" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Recursos Gratuitos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empieza tu camino{" "}
              <span className="text-gradient">hoy mismo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Descarga nuestros recursos gratuitos y comienza a preparar tu 
              postulación con las mejores herramientas y guías desarrolladas 
              por expertos.
            </p>
            
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">
                ¿Quieres recibir más recursos?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Suscríbete a nuestro newsletter y recibe actualizaciones sobre 
                nuevas becas y contenido exclusivo.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="default" size="default">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 card-elevated flex items-start gap-4 group hover:border-primary border border-transparent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-foreground mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {resource.type} • {resource.pages}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
