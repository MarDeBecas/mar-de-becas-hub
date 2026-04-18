import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import newsAniversario    from "@/assets/news-aniversario.jpg";
import newsCierreBecario  from "@/assets/news-cierre-becario.jpg";
import newsPronabec       from "@/assets/news-pronabec.jpg";
import newsBlueStudies    from "@/assets/news-blue-studies.jpg";
import newsAiesec         from "@/assets/news-aiesec.png";
import newsImpacto2025    from "@/assets/news-impacto-2025.jpg";

const newsItems = [
  {
    id: 1,
    title: "Impacto 2025",
    description: "Nuestro impacto en la comunidad de becarios este año.",
    url: "https://www.linkedin.com/posts/mardebecas_impactomar-de-becas-activity-7412133452214579200-ivUe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsImpacto2025,
  },
  {
    id: 2,
    title: "Hace un año nació Mar de Becas",
    description: "Una plataforma dedicada a hacer realidad los sueños académicos internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_hace-un-a%C3%B1o-naci%C3%B3-mar-de-becas-una-plataforma-activity-7410703523736088576-M6C3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsAniversario,
  },
  {
    id: 3,
    title: "Cierre de Becario del Mundo",
    description: "Conoce las experiencias de nuestros becarios que lograron sus metas.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7362205992375177218/",
    image: newsCierreBecario,
  },
  {
    id: 4,
    title: "Mar de Becas y Blue Studies",
    description: "Alianza estratégica para impulsar becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_mardebecas-bluestudies-becasinternacionales-activity-7397619878909865984-23HD?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsBlueStudies,
  },
  {
    id: 5,
    title: "Somos Embajadores PRONABEC",
    description: "Voces que guían el camino hacia las becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_bicentenario-chevening-vocesqueguaedan-activity-7365744777100763136-Cdwi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsPronabec,
  },
  {
    id: 6,
    title: "Semana de las Experiencias AIESEC",
    description: "Mi camino de liderazgo a través de becas internacionales.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7407513742248194049",
    image: newsAiesec,
  },
];

function NewsCard({ item }: { item: typeof newsItems[0] }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 group overflow-hidden"
      style={{
        width: "clamp(260px, 30vw, 320px)",
        borderRadius: "20px",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(32,89,186,0.15)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <span
          className="self-start text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: "rgba(32,89,186,0.09)", color: "#2059BA" }}
        >
          LinkedIn
        </span>
        <h3 className="font-display font-black text-sm text-gray-900 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center gap-1 mt-1" style={{ color: "#2059BA" }}>
          <span className="font-sans text-xs font-semibold">Ver publicación</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

export function NewsSection() {
  const doubled = [...newsItems, ...newsItems];

  return (
    <section
      id="noticias"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#f8f7ff" }}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "rgba(32,89,186,0.05)" }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-4"
        >
          <span
            className="inline-flex items-center px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest"
            style={{ background: "rgba(32,89,186,0.05)", border: "1.5px solid rgba(32,89,186,0.3)", color: "#2059BA" }}
          >
            Noticias
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight"
        >
          Lo último de Mar de Becas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="font-sans text-gray-400 text-sm md:text-base mt-3"
        >
          Mantente al día con nuestras novedades y logros
        </motion.p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />

        {/* Marquee */}
        <div className="marquee-wrapper overflow-hidden">
          <div className="marquee-track flex gap-5 w-max px-5">
            {doubled.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
