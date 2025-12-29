import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Hace un año nació Mar de Becas",
    description: "Una plataforma dedicada a hacer realidad los sueños académicos internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_hace-un-a%C3%B1o-naci%C3%B3-mar-de-becas-una-plataforma-activity-7410703523736088576-M6C3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQHqxLvxRJqxQw/feedshare-shrink_800/feedshare-shrink_800/0/1718654889883?e=1754524800&v=beta&t=placeholder"
  },
  {
    id: 2,
    title: "Historias de éxito",
    description: "Conoce las experiencias de nuestros becarios que lograron sus metas.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7362205992375177218/",
    image: "https://media.licdn.com/dms/image/placeholder"
  },
  {
    id: 3,
    title: "Mar de Becas y Blue Studies",
    description: "Alianza estratégica para impulsar becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_mardebecas-bluestudies-becasinternacionales-activity-7397619878909865984-23HD?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: "https://media.licdn.com/dms/image/placeholder"
  },
  {
    id: 4,
    title: "Bicentenario Chevening",
    description: "Voces que guían el camino hacia las becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_bicentenario-chevening-vocesqueguaedan-activity-7365744777100763136-Cdwi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: "https://media.licdn.com/dms/image/placeholder"
  }
];

export function NewsSection() {
  return (
    <section id="noticias" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Noticias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mantente al día con las últimas novedades de Mar de Becas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl overflow-hidden card-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium">
                  <span>Ver en LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
