import { Calendar, Globe, GraduationCap, MapPin, School, Star, Trophy, Users } from "lucide-react";
import mariluGraduation from "@/assets/marilu-graduation.jpg";
import emmyImage from "@/assets/testimonial-emmy.jpg";
import nayvImage from "@/assets/testimonial-nayvi.jpg";
import royImage from "@/assets/testimonial-roy.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const WHATSAPP_URL = "https://wa.link/mhr4d9";

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-2.5 py-3.5 text-center shadow-sm sm:px-3 sm:py-4">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#2059BA]/10">
        <Icon className="h-4 w-4 text-[#2059BA]" strokeWidth={2} />
      </div>
      <p className="break-words text-base font-bold tabular-nums leading-tight tracking-tight text-[#2059BA] sm:text-lg">
        {value}
      </p>
      <p className="mt-1.5 max-w-[10.5rem] text-[0.6875rem] leading-snug text-muted-foreground sm:max-w-[11rem] sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function CountStat({
  end,
  suffix = "+",
  prefix = "",
  label,
  icon: Icon,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref} className="h-full">
      <StatCard
        icon={Icon}
        label={label}
        value={
          <>
            {prefix}
            {count.toLocaleString("en-US")}
            {suffix}
          </>
        }
      />
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container-wide">
        {/* — Encabezado — */}
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2059BA]/15 bg-[#2059BA]/[0.06] px-4 py-2 text-sm font-semibold text-[#2059BA]">
            <GraduationCap className="h-4 w-4 shrink-0" aria-hidden />
            Sobre Mar de Becas
          </span>
          <h2 className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            Consigue una beca internacional con{" "}
            <span className="text-[#2059BA]">acompañamiento experto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Te guiamos paso a paso para estudiar en las mejores universidades del mundo con financiamiento completo.
          </p>
        </div>

        {/* —
          Móvil: métricas → texto → foto (aspecto fijo).
          lg+: una fila; la foto estira a la misma altura que métricas+texto y se adapta con object-cover.
        — */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.36fr)_1fr] lg:items-stretch lg:gap-x-10">
          {/* Columna derecha en lg: métricas + texto */}
          <div className="flex min-w-0 flex-col gap-4 font-sans lg:order-2">
            <div className="grid w-full grid-cols-3 gap-2 sm:gap-2.5">
              <CountStat end={80} label="Estudiantes asesorados con éxito" icon={Users} />
              <StatCard icon={GraduationCap} label="en becas completas obtenidas" value={<>US$&nbsp;519,364+</>} />
              <CountStat end={1000} label="Miembros en nuestra comunidad" icon={Users} />
            </div>

            <div className="flex min-w-0 flex-col gap-3.5 lg:gap-4">
              <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem]">Marilú Núñez</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2059BA]/15 bg-[#2059BA]/[0.06] px-2.5 py-1 text-xs font-semibold text-[#2059BA] sm:text-[0.8125rem]">
                <Star className="h-3 w-3 fill-[#2059BA]/25 text-[#2059BA]" aria-hidden />
                Fundadora &amp; Asesora Principal
              </span>
              </div>

              <p className="max-w-2xl text-sm leading-snug text-muted-foreground sm:text-[0.9375rem] sm:leading-snug">
              Ingeniera Industrial con MSc en Emprendimiento e Innovación en{" "}
              <strong className="font-semibold text-foreground">University of Edinburgh</strong>. Fundó Mar de Becas
              para acompañar a estudiantes latinoamericanos a obtener becas completas en el Reino Unido y otros países.
              </p>

              <ul className="max-w-2xl space-y-2.5 text-sm leading-snug text-foreground sm:text-[0.9375rem]">
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                  <Globe className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0">+8 años de experiencia acompañando postulaciones a becas internacionales.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                  <School className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0">Ganadora de la Beca Generación del Bicentenario 2024 para posgrado en el Reino Unido.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA]">
                  <Trophy className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0">
                  Seleccionada como joven líder y embajadora PRONABEC, compartiendo su experiencia con la comunidad.
                </span>
              </li>
              </ul>

              <div className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-md items-center gap-3 rounded-xl bg-[#2059BA] px-4 py-3.5 text-left text-white shadow-[0_6px_22px_rgba(32,89,186,0.32)] transition hover:bg-[#1a4a9e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2059BA] focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Calendar className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <span className="space-y-0.5">
                  <span className="block text-xs font-bold uppercase tracking-wide sm:text-[0.8125rem]">
                    Agenda una asesoría
                  </span>
                  <span className="block text-xs font-medium text-white/90 sm:text-[0.8125rem]">
                    Da el primer paso hacia tu beca
                  </span>
                </span>
              </a>

              <div className="flex min-w-0 items-center gap-2.5 sm:max-w-[min(100%,18rem)]">
                <div className="flex shrink-0 -space-x-2">
                  <img
                    src={royImage}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-background object-cover ring-1 ring-border"
                  />
                  <img
                    src={nayvImage}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-background object-cover ring-1 ring-border"
                  />
                  <img
                    src={emmyImage}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-background object-cover ring-1 ring-border"
                  />
                </div>
                <p className="text-xs leading-snug text-muted-foreground sm:text-[0.8125rem]">
                  +80 estudiantes ya consiguieron su beca con nuestro acompañamiento.
                </p>
              </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-0.5">
              <a
                href="https://www.linkedin.com/in/marilu-nu%C3%B1ez-sanchez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA] transition hover:bg-[#2059BA] hover:text-white"
                aria-label="LinkedIn de Marilú Núñez"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mardebecas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2059BA]/10 text-[#2059BA] transition hover:bg-[#2059BA] hover:text-white"
                aria-label="Instagram Mar de Becas"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              </div>
            </div>
          </div>

          {/* Foto: móvil aspecto 3/4; en lg estira a la altura de la columna de métricas + texto */}
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:order-1 lg:mx-0 lg:h-full lg:min-h-0 lg:max-w-none lg:self-stretch">
            <div className="relative h-full min-h-[17.5rem] w-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(32,89,186,0.12)] ring-1 ring-black/[0.04] lg:min-h-0">
              <div className="aspect-[3/4] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-0">
                <img
                  src={mariluGraduation}
                  alt="Marilú Núñez en ceremonia de graduación"
                  className="h-full w-full object-cover object-[center_22%]"
                />
              </div>
              <div className="absolute bottom-3 right-3 left-3 sm:left-auto sm:right-3 sm:max-w-[min(100%,16rem)]">
                <div className="flex items-start gap-2 rounded-xl border border-white/70 bg-white/95 px-3 py-2.5 text-left shadow-lg backdrop-blur-sm sm:px-3.5 sm:py-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2059BA]" aria-hidden />
                  <p className="text-xs font-medium leading-snug text-foreground sm:text-[0.8125rem]">
                    University of Edinburgh
                    <span className="block text-muted-foreground">Experiencia real internacional</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
