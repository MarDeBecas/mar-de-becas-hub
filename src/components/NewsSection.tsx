import { ArrowRight, ChevronRight, GraduationCap, Globe, Megaphone, Sparkles, Users } from "lucide-react";
import newsAniversario from "@/assets/news-aniversario.jpg";
import newsPronabec from "@/assets/news-pronabec.jpg";
import newsAiesec from "@/assets/news-aiesec.png";
import newsImpacto2025 from "@/assets/news-impacto-2025.jpg";
import newsFoundherGlasgow from "@/assets/news-foundher-glasgow.jpg";
import newsFoundherScholarships from "@/assets/news-foundher-scholarships.jpg";

const WHATSAPP_URL = "https://wa.link/mhr4d9";
const LINKEDIN_COMPANY = "https://www.linkedin.com/company/mardebecas/";

type NewsType = "evento" | "logro" | "testimonio" | "historia";

const typeStyles: Record<NewsType, { label: string; className: string }> = {
  evento: {
    label: "Evento",
    className: "border-cyan-500/25 bg-cyan-500/15 text-cyan-800 dark:text-cyan-100",
  },
  logro: {
    label: "Logro",
    className: "border-emerald-500/30 bg-emerald-500/12 text-emerald-900 dark:text-emerald-100",
  },
  testimonio: {
    label: "Testimonio",
    className: "border-[#2059BA]/30 bg-[#2059BA]/10 text-[#2059BA]",
  },
  historia: {
    label: "Historia",
    className: "border-[#A07DE2]/35 bg-[#A07DE2]/12 text-[#5b3d8a] dark:text-[#e8dcff]",
  },
};

type NewsItem = {
  id: number;
  title: string;
  description: string;
  preview: string;
  url: string;
  image: string;
  type: NewsType;
};

// ⭐ NOTICIA PRINCIPAL (CAMBIADA A FOUNDHER GLASGOW)
const featuredNews: NewsItem & { lead: string } = {
  id: 7,
  title: "FoundHer en Glasgow: una experiencia internacional transformadora",
  lead: "Desde Perú hasta Escocia: una historia real de liderazgo y becas internacionales.",
  description:
  "Una experiencia que conecta liderazgo femenino con oportunidades globales en Glasgow.",
  preview: "",
  url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_foundher-scotland-glasgow-ugcPost-7439940932726231040-NuAV",
  image: newsFoundherGlasgow,
  type: "historia",
  };

const secondaryNews: NewsItem[] = [
  {
    id: 8,
    title: "FoundHer Scholarships: formando líderes globales",
    preview: "Un programa que impulsa a mujeres a alcanzar oportunidades internacionales.",
    description: "Historias de liderazgo y acceso a becas a través de FoundHer.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_foundher-scholarships-leaders-ugcPost-7445465453361057792-FxpF",
    image: newsFoundherScholarships,
    type: "logro",
    },
  {
     id: 6,
     title: "Semana de las Experiencias AIESEC",
     preview: "Un espacio para compartir, aprender y conectar con líderes que están transformando el mundo.",
     description:
       "Mi camino de liderazgo a través de becas internacionales. Conecta con historias reales y oportunidades AIESEC.",
     url: "https://www.linkedin.com/feed/update/urn:li:activity:7407513742248194049",
     image: newsAiesec,
     type: "evento",
   },
  
  {
    id: 1,
    title: "Impacto 2025",
    preview: "Conoce el impacto que estamos generando en la comunidad de becarios.",
    description: "Nuestro impacto en la comunidad de becarios este año.",
    url: "https://www.linkedin.com/posts/mardebecas_impactomar-de-becas-activity-7412133452214579200-ivUe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsImpacto2025,
    type: "logro",
  },
  {
    id: 5,
    title: "Somos Embajadores PRONABEC",
    preview: "Voces que guían el camino hacia las becas internacionales.",
    description: "Voces que guían el camino hacia las becas internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_bicentenario-chevening-vocesqueguaedan-activity-7365744777100763136-Cdwi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsPronabec,
    type: "testimonio",
  },
  {
    id: 2,
    title: "Hace un año nació Mar de Becas",
    preview: "Una plataforma dedicada a hacer realidad los sueños académicos internacionales.",
    description: "Una plataforma dedicada a hacer realidad los sueños académicos internacionales.",
    url: "https://www.linkedin.com/posts/marilu-nu%C3%B1ez-sanchez_hace-un-a%C3%B1o-naci%C3%B3-mar-de-becas-una-plataforma-activity-7410703523736088576-M6C3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABPIVs4BdVcLbbdcEIGyw8c3MxGmABxi0KA",
    image: newsAniversario,
    type: "historia",
  },
  {
    id: 6,
    title: "Semana de las Experiencias AIESEC",
    preview: "Un espacio para compartir, aprender y conectar con líderes que están transformando el mundo.",
    description:
      "Mi camino de liderazgo a través de becas internacionales. Conecta con historias reales y oportunidades AIESEC.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7407513742248194049",
    image: newsAiesec,
    type: "evento",
  },
];

function FeaturedCard() {
  const t = typeStyles[featuredNews.type];
  return (
    <a
      href={featuredNews.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full min-h-[17.5rem] flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-black/[0.06] sm:min-h-[22rem] lg:min-h-[26rem]"
    >
      <img
        src={featuredNews.image}
        alt={featuredNews.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#2059BA]/55 to-[#A07DE2]/35"
        aria-hidden
      />
      <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
        <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          Destacado
        </span>
        <span className="rounded-full border border-white/35 bg-teal-600/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm">
          {t.label}
        </span>
      </div>
      <div className="relative z-10 p-5 sm:p-7 lg:p-8">
        <h3 className="max-w-xl text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          {featuredNews.title}
        </h3>
        <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
          {featuredNews.lead}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2059BA] shadow-lg transition group-hover:bg-[#F8F4EE]">
          Ver historia completa
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </a>
  );
}

function SecondaryCard({ item }: { item: NewsItem }) {
  const t = typeStyles[item.type];
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-0 items-stretch gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-3 pr-2 shadow-[0_4px_20px_rgba(32,89,186,0.06)] transition hover:border-[#2059BA]/25 hover:shadow-md sm:gap-4 sm:p-4"
    >
      <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-xl sm:h-[5.25rem] sm:w-[5.25rem]">
        <img src={item.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-0.5">
        <span
          className={`mb-1.5 w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide ${t.className}`}
        >
          {t.label}
        </span>
        <h4 className="line-clamp-2 text-sm font-bold leading-snug text-foreground transition group-hover:text-[#2059BA] sm:text-base">
          {item.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground sm:text-sm">{item.preview}</p>
      </div>
      <div className="flex shrink-0 items-center self-center pr-1 text-muted-foreground transition group-hover:text-[#2059BA]">
        <ChevronRight className="h-5 w-5" aria-hidden />
      </div>
    </a>
  );
}

export function NewsSection() {
  return (
    <section id="noticias" className="section-padding bg-muted/40">
      <div className="container-wide">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#A07DE2]/20 bg-[#A07DE2]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#5b3d8a] sm:text-sm">
            <Megaphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            Noticias
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
            Historias reales que{" "}
            <span className="text-[#2059BA]">
              te acercan a tu beca <span aria-hidden>🌍</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Inspírate con experiencias, logros y oportunidades de nuestra comunidad.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-border/60 bg-card px-4 py-6 shadow-sm sm:px-8 sm:py-7 lg:mb-12">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                <Users className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <p className="text-sm leading-snug text-muted-foreground sm:text-[0.9375rem]">
                <strong className="font-bold text-[#2059BA]">80+</strong> estudiantes lograron becas internacionales
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                <GraduationCap className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <p className="text-sm leading-snug text-muted-foreground sm:text-[0.9375rem]">
                <strong className="font-bold text-[#2059BA]">US$ 519,364+</strong> en financiamiento obtenido
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                <Globe className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <p className="text-sm leading-snug text-muted-foreground sm:text-[0.9375rem]">
                <strong className="font-bold text-[#2059BA]">20+</strong> países alcanzados por nuestra comunidad
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:items-stretch lg:gap-8">
          <div className="min-h-0 lg:flex lg:flex-col">
            <FeaturedCard />
          </div>
          <div className="flex min-h-0 flex-col gap-4">
            {secondaryNews.map((item) => (
              <SecondaryCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-[#2059BA]/15 bg-[#2059BA]/[0.04] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7 lg:mt-14">
          <p className="flex max-w-xl items-start gap-3 text-left text-foreground">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#A07DE2]" aria-hidden />
            <span>
              <strong className="font-semibold">¿Te imaginas ser el próximo?</strong>{" "}
              <span className="text-muted-foreground">Tú también puedes lograrlo. Empieza hoy tu camino.</span>
            </span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0 sm:items-center">
            <a
              href={LINKEDIN_COMPANY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2059BA] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1a4a9e]"
            >
              Ver todas las historias
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#2059BA]/30 bg-background px-6 py-3 text-sm font-semibold text-[#2059BA] transition hover:border-[#2059BA] hover:bg-[#2059BA]/5"
            >
              Quiero lograr esto también
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
