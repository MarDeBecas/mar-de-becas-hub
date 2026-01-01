import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import newsAniversario from "@/assets/news-aniversario.jpg";
import newsCierreBecario from "@/assets/news-cierre-becario.jpg";
import newsPronabec from "@/assets/news-pronabec.jpg";
import newsBlueStudies from "@/assets/news-blue-studies.jpg";
import newsAiesec from "@/assets/news-aiesec.png";
import newsImpacto2025 from "@/assets/news-impacto-2025.jpg";

const newsItems = [
  {
    id: 1,
    title: "Impacto 2025",
    description: "Nuestro impacto en la comunidad de becarios este año.",
    url: "https://www.linkedin.com/posts/mardebecas_impactomar-de-becas-activity-7412133452214579200-ivUe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsImpacto2025
  },
  {
    id: 2,
    title: "Hace un año nació Mar de Becas",
    description: "Una plataforma dedicada a hacer realidad los sueños académicos internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_hace-un-a%C3%B1o-naci%C3%B3-mar-de-becas-una-plataforma-activity-7410703523736088576-M6C3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsAniversario
  },
  {
    id: 3,
    title: "Cierre de Becario del Mundo",
    description: "Conoce las experiencias de nuestros becarios que lograron sus metas.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7362205992375177218/",
    image: newsCierreBecario
  },
  {
    id: 4,
    title: "Mar de Becas y Blue Studies",
    description: "Alianza estratégica para impulsar becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_mardebecas-bluestudies-becasinternacionales-activity-7397619878909865984-23HD?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsBlueStudies
  },
  {
    id: 5,
    title: "Somos Embajadores PRONABEC",
    description: "Voces que guían el camino hacia las becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_bicentenario-chevening-vocesqueguaedan-activity-7365744777100763136-Cdwi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsPronabec
  },
  {
    id: 6,
    title: "Semana de las Experiencias AIESEC",
    description: "Mi camino de liderazgo a través de becas internacionales.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7407513742248194049",
    image: newsAiesec
  }
];

function NewsCard({ item, index }: { item: typeof newsItems[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-card rounded-xl overflow-hidden card-elevated hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
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
  );
}

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
