import { useState } from "react";
import { ArrowRight, BookOpen, ChevronRight, GraduationCap, Mail, Shield, type LucideIcon } from "lucide-react";
import logo from "@/assets/logo-mar-de-becas.png";

const WHATSAPP_URL = "https://wa.link/mhr4d9";

const footerLinks = {
  servicios: [
    { label: "Asesoría de Becas", href: "#servicios" },
    { label: "Preparación de Documentos", href: "#servicios" },
    { label: "Coaching de Entrevistas", href: "#servicios" },
    { label: "Talleres Grupales", href: "#servicios" },
  ],
  recursos: [
    { label: "Becas Destacadas", href: "#servicios" },
    { label: "Noticias", href: "#noticias" },
    { label: "FAQ", href: "#contacto" },
    { label: "Guías y Plantillas", href: "#servicios" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "#", placeholder: true },
    { label: "Términos de Servicio", href: "#", placeholder: true },
    { label: "Cookies", href: "#", placeholder: true },
    { label: "Libro de Reclamaciones", href: "#", placeholder: true },
  ],
};

const accent = "#A07DE2";

function FooterColumnHeader({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <h4 className="mb-6 flex items-center gap-2.5 text-base font-bold tracking-tight text-white">
      <span className="h-2 w-2 shrink-0 rounded-sm" style={{ backgroundColor: accent }} aria-hidden />
      <Icon className="h-5 w-5 shrink-0" style={{ color: accent }} strokeWidth={2} aria-hidden />
      {title}
    </h4>
  );
}

function FooterLink({
  href,
  label,
  placeholder,
}: {
  href: string;
  label: string;
  placeholder?: boolean;
}) {
  if (placeholder) {
    return (
      <li>
        <span
          className="flex items-center gap-2 py-1.5 text-sm text-white/45"
          title="Próximamente"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full opacity-50" style={{ backgroundColor: accent }} aria-hidden />
          <span className="min-w-0 flex-1">{label}</span>
        </span>
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-2 py-1.5 text-sm text-white/70 transition hover:text-white"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full opacity-80" style={{ backgroundColor: accent }} aria-hidden />
        <span className="min-w-0 flex-1">{label}</span>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-white/70" aria-hidden />
      </a>
    </li>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="pie-de-pagina" className="bg-[#0a0e1f] font-sans text-white antialiased">
      <div className="container-wide pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Marca + newsletter */}
          <div className="space-y-8 lg:col-span-4">
            <div>
              <img src={logo} alt="Mar de Becas" className="mb-6 h-14 w-auto sm:h-16" />
              <p className="max-w-sm text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
                Impulsamos el camino de talentosos profesionales hacia las mejores{" "}
                <span className="font-semibold" style={{ color: accent }}>
                  becas internacionales.
                </span>
              </p>
              <p className="mt-4 text-sm text-white/80">Tu sueño académico, nuestra misión.</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                {
                  href: "https://www.instagram.com/manunez.s/",
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  href: "https://www.linkedin.com/company/mardebecas",
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: "https://www.youtube.com/@mardebecas",
                  label: "YouTube",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
                {
                  href: "https://www.tiktok.com/@mar.de.becas",
                  label: "TikTok",
                  path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
                },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white hover:ring-white/20"
                >
                  <svg className="h-[1.15rem] w-[1.15rem]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 sm:p-6">
              <div className="mb-3 flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A07DE2]/20 text-[#A07DE2]"
                  aria-hidden
                >
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-semibold leading-snug text-white">Recibe oportunidades y recursos exclusivos</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">Tips, convocatorias y novedades en tu correo.</p>
                </div>
              </div>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#060912] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-[#A07DE2]/0 transition focus:border-[#A07DE2]/40 focus:ring-2 focus:ring-[#A07DE2]/25"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition hover:brightness-110"
                  style={{ backgroundColor: accent }}
                  aria-label="Ir a contacto para completar tu interés"
                >
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </button>
              </form>
              <p className="mt-3 text-[0.6875rem] leading-relaxed text-white/40">
                Por ahora te llevamos a la sección de contacto; pronto activaremos el boletín.
              </p>
            </div>
          </div>

          {/* Enlaces */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <div>
              <FooterColumnHeader icon={GraduationCap} title="Servicios" />
              <ul className="space-y-0.5">
                {footerLinks.servicios.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </ul>
            </div>
            <div>
              <FooterColumnHeader icon={BookOpen} title="Recursos" />
              <ul className="space-y-0.5">
                {footerLinks.recursos.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </ul>
            </div>
            <div>
              <FooterColumnHeader icon={Shield} title="Legal" />
              <ul className="space-y-0.5">
                {footerLinks.legal.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} placeholder={link.placeholder} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left sm:text-sm">
          <p>© {new Date().getFullYear()} Mar de Becas. Todos los derechos reservados.</p>
          <p className="text-white/70">
            Hecho con <span className="text-red-500">❤️</span> para futuros becarios
          </p>
        </div>
      </div>
    </footer>
  );
}
