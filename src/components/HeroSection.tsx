import { useId } from "react";
import { MessageCircle, Search, Star } from "lucide-react";
import florenceImage from "@/assets/hero/Mujer_Florencia.png";
import logoChevening from "@/assets/hero/Chevening.png";
import logoErasmus from "@/assets/hero/Erasmus-Mundus.png";
import logoPronabec from "@/assets/hero/PRONABEC.png";

const WHATSAPP_URL = "https://wa.link/mhr4d9";

const partnerLogos = [
  { id: "chevening", src: logoChevening, alt: "Chevening" },
  { id: "erasmus", src: logoErasmus, alt: "Erasmus Mundus" },
  { id: "pronabec", src: logoPronabec, alt: "PRONABEC" },
] as const;

/** Velo progresivo sobre la foto hacia la derecha (sin corte duro). */
const PHOTO_SOFT_BLEND = {
  background: `linear-gradient(
    to right,
    transparent 0%,
    transparent 32%,
    rgba(32, 89, 186, 0.03) 52%,
    rgba(32, 89, 186, 0.08) 68%,
    rgba(160, 125, 226, 0.12) 82%,
    rgba(160, 125, 226, 0.2) 94%,
    rgba(32, 89, 186, 0.12) 100%
  )`,
} as const;

/** Franja ancha de fusión al borde derecho de la foto (encaja con el panel). */
const PHOTO_EDGE_FUSION = {
  background: `linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(249, 225, 222, 0.06) 18%,
    rgba(160, 125, 226, 0.12) 40%,
    rgba(160, 125, 226, 0.22) 62%,
    rgba(32, 89, 186, 0.28) 82%,
    rgba(32, 89, 186, 0.34) 100%
  )`,
} as const;

/** Borde izquierdo del panel: funde con la foto (evita línea vertical). */
const PANEL_LEFT_FUSION = {
  background: `linear-gradient(
    90deg,
    rgba(32, 89, 186, 0.5) 0%,
    rgba(32, 89, 186, 0.22) 28%,
    rgba(160, 125, 226, 0.1) 55%,
    rgba(160, 125, 226, 0.03) 78%,
    transparent 100%
  )`,
} as const;

const PARTICLE_DOTS: readonly [number, number, number, number][] = [
  [100, 120, 2.2, 0.4],
  [240, 90, 1.6, 0.28],
  [400, 180, 2.6, 0.42],
  [540, 100, 1.8, 0.32],
  [680, 220, 2.1, 0.38],
  [750, 70, 1.4, 0.24],
  [160, 340, 1.7, 0.3],
  [460, 300, 2.3, 0.36],
  [620, 380, 1.5, 0.26],
  [740, 340, 2, 0.34],
  [80, 480, 1.9, 0.27],
  [320, 460, 2.4, 0.38],
  [520, 520, 1.6, 0.22],
  [700, 480, 2.2, 0.33],
  [220, 640, 1.4, 0.25],
  [440, 700, 2, 0.35],
  [600, 760, 1.8, 0.29],
  [760, 660, 2.4, 0.31],
  [140, 820, 1.6, 0.23],
  [380, 880, 2.1, 0.36],
  [560, 900, 1.3, 0.21],
  [720, 860, 1.9, 0.3],
  [300, 240, 1.2, 0.2],
  [650, 540, 1.1, 0.18],
];

const STAR_SPARKLES: readonly [number, number, number][] = [
  [620, 160, 4.5],
  [480, 280, 3.8],
  [340, 140, 3.2],
  [720, 400, 4],
  [200, 520, 3.5],
  [580, 580, 3],
  [420, 720, 4.2],
  [680, 780, 3.3],
  [240, 380, 2.8],
  [520, 200, 2.5],
];

function HeroParticlesSparkles({ gradientId }: { gradientId: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="65%" stopColor="#F9E1DE" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#A07DE2" stopOpacity="0" />
        </radialGradient>
      </defs>
      {PARTICLE_DOTS.map(([cx, cy, r, o], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={`url(#${gradientId})`}
          className={i % 4 === 0 ? "animate-hero-sparkle" : i % 4 === 2 ? "animate-hero-sparkle-delayed" : ""}
          opacity={o}
        />
      ))}
      {STAR_SPARKLES.map(([x, y, s], i) => (
        <g
          key={`st-${i}`}
          transform={`translate(${x},${y})`}
          className={i % 2 === 0 ? "animate-hero-sparkle" : "animate-hero-sparkle-delayed"}
          opacity={0.55}
        >
          <path
            d={`M0,-${s} L0,${s} M-${s},0 L${s},0`}
            stroke="#F9E1DE"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          <circle r="0.9" fill="#FFC45F" opacity={0.9} />
        </g>
      ))}
    </svg>
  );
}

/** Tres curvas: arriba-derecha, abajo-derecha, detrás del título — blanco / rosa / oro. */
function HeroSweepingWaves() {
  const id = useId().replace(/:/g, "");
  const wid = `hw-${id}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <filter id={`${wid}-soft`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 820 -20 C 760 120, 680 220, 620 340 S 520 520, 440 620"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.26"
        strokeWidth="0.65"
        strokeLinecap="round"
        filter={`url(#${wid}-soft)`}
      />
      <path
        d="M 880 1020 C 780 880, 720 760, 640 640 S 520 480, 360 400"
        fill="none"
        stroke="#F9E1DE"
        strokeOpacity="0.32"
        strokeWidth="0.7"
        strokeLinecap="round"
        filter={`url(#${wid}-soft)`}
      />
      <path
        d="M 120 340 C 280 300, 420 380, 520 360 S 700 320, 780 280"
        fill="none"
        stroke="#FFC45F"
        strokeOpacity="0.2"
        strokeWidth="0.55"
        strokeLinecap="round"
        filter={`url(#${wid}-soft)`}
      />
    </svg>
  );
}

function HeroLightTrails() {
  const id = useId().replace(/:/g, "");
  const gid = `ht-${id}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gid}-pink`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F9E1DE" stopOpacity="0" />
          <stop offset="50%" stopColor="#F9E1DE" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#A07DE2" stopOpacity="0" />
        </linearGradient>
        <filter id={`${gid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 40 160 C 200 80, 380 200, 500 140 S 720 80, 780 20"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="0.6"
        strokeLinecap="round"
        filter={`url(#${gid}-soft)`}
      />
      <path
        d="M 680 200 C 560 360, 480 520, 420 700"
        fill="none"
        stroke={`url(#${gid}-pink)`}
        strokeWidth="0.65"
        strokeLinecap="round"
        filter={`url(#${gid}-soft)`}
      />
      <path
        d="M 500 780 C 620 680, 740 560, 820 420"
        fill="none"
        stroke="#FFC45F"
        strokeOpacity="0.22"
        strokeWidth="0.55"
        strokeLinecap="round"
        filter={`url(#${gid}-soft)`}
      />
    </svg>
  );
}

export function HeroSection() {
  const particleGradId = `hpart-${useId().replace(/:/g, "")}`;

  return (
    <section id="inicio" className="relative isolate h-[100svh] max-h-[100svh] w-full overflow-hidden bg-[#2059BA]">
      <div
        className="
          mx-auto grid h-full min-h-0 w-full max-w-[1920px]
          grid-cols-1 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-stretch
        "
      >
        {/* Izquierda ~38% — foto + fusión ancha (sin línea recta al panel) */}
        <div className="relative z-[1] hidden h-full min-h-0 w-full lg:block">
          <img
            src={florenceImage}
            alt="Joven con mochila y mapa frente a una ciudad europea al atardecer"
            className="absolute inset-0 h-full w-full object-cover object-[26%_center] lg:object-[20%_center]"
          />
          <div className="absolute inset-0" style={PHOTO_SOFT_BLEND} aria-hidden />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-72 lg:w-80 xl:w-96"
            style={PHOTO_EDGE_FUSION}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-[-5%] right-0 z-[1] w-40 translate-x-1/4 blur-3xl lg:w-52 lg:translate-x-[15%]"
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(160,125,226,0.2) 45%, rgba(32,89,186,0.15) 100%)",
            }}
            aria-hidden
          />
        </div>

        {/* Derecha: solapa ligeramente la foto + degradado en el borde izquierdo */}
        <div
          className="
            relative z-[2] flex h-full min-h-0 w-full flex-col overflow-hidden
            px-5 pb-[clamp(0.75rem,3dvh,1.75rem)] pt-[clamp(4.5rem,11dvh,6.5rem)] sm:px-8
            lg:-ml-10 lg:w-[calc(100%+2.5rem)] lg:max-w-none lg:pl-5 lg:pr-8 lg:pb-[clamp(0.75rem,3dvh,1.75rem)] lg:pt-[clamp(4.25rem,10dvh,6rem)]
            xl:-ml-12 xl:w-[calc(100%+3rem)] xl:pl-6 xl:pr-10 2xl:pr-12
            [box-shadow:inset_56px_0_100px_-36px_rgba(32,89,186,0.45)]
          "
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2059BA] via-[#2a4fb0] to-[#A07DE2]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 hero-vibrant-mesh opacity-[0.95]" aria-hidden />

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(42%,280px)] lg:w-[min(38%,320px)]"
            style={PANEL_LEFT_FUSION}
            aria-hidden
          />

          <div
            className="pointer-events-none absolute right-[-120px] top-[-40px] h-[340px] w-[340px] rounded-full bg-[#F9E1DE]/35 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[10%] top-[28%] h-[260px] w-[260px] rounded-full bg-[#A07DE2]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[8%] right-[6%] h-[300px] w-[300px] rounded-full bg-[#F9E1DE]/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[25%] top-[20%] h-[380px] w-[480px] -translate-x-1/2 rounded-full bg-[#A07DE2]/45 blur-[120px] animate-hero-orb"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[8%] top-[35%] h-[300px] w-[340px] rounded-full bg-[#2059BA]/50 blur-[100px] animate-hero-orb-slow"
            aria-hidden
          />
          {/* Glow inferior derecho (referencia) */}
          <div
            className="pointer-events-none absolute -bottom-[8%] -right-[5%] h-[min(55%,480px)] w-[min(95%,700px)] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(160,125,226,0.5)_0%,rgba(249,225,222,0.12)_45%,transparent_70%)] blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[45%] w-[75%] opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 85% 95%, rgba(160,125,226,0.35) 0%, rgba(32,89,186,0.15) 40%, transparent 65%)",
            }}
            aria-hidden
          />

          <div
            className="pointer-events-none absolute right-0 top-0 h-[50%] w-[70%] mix-blend-screen opacity-[0.85]"
            style={{
              background:
                "radial-gradient(ellipse 50% 42% at 90% 6%, rgba(255,255,255,0.18) 0%, rgba(255,196,95,0.14) 22%, transparent 55%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_72%_8%,rgba(255,196,95,0.2),transparent_50%)]"
            aria-hidden
          />

          <HeroLightTrails />
          <HeroSweepingWaves />
          <HeroParticlesSparkles gradientId={particleGradId} />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1.6px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-3rem),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-3rem),transparent_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle,rgba(255,255,255,0.12)_1.2px,transparent_2px)] [background-size:82px_82px] [mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-3rem),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-3rem),transparent_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1838]/28 via-transparent to-[#1a0d2e]/18"
            aria-hidden
          />

          <div className="relative z-10 flex h-full min-h-0 w-full min-w-0 flex-1 flex-col items-center overflow-hidden font-display">
            <div
              className="
                flex h-full min-h-0 w-full max-w-[38rem] flex-col justify-center gap-y-[clamp(0.45rem,1.85dvh,1.35rem)]
                overflow-hidden text-left xl:max-w-[42rem] 2xl:max-w-[44rem]
                [@media(max-height:700px)]:gap-y-[clamp(0.3rem,1.2dvh,0.85rem)]
              "
            >
            <div
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/30 bg-white/[0.14] px-3 py-[clamp(0.35rem,1.1dvh,0.65rem)] text-[clamp(0.7rem,1.6dvh,0.8125rem)] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_20px_56px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:px-4 sm:py-2"
              role="note"
            >
              <span className="flex items-center gap-1 text-[#FFC45F]" aria-hidden>
                <Star className="h-3.5 w-3.5 fill-[#FFC45F] text-[#FFC45F] drop-shadow-[0_0_10px_rgba(255,196,95,0.85)]" />
                <span className="text-white">4.9/5</span>
              </span>
              <span className="text-white/40">|</span>
              <span className="text-white">+500 Becas Ganadas</span>
            </div>

            <h1
              className="w-full max-w-none text-balance text-[clamp(1.2rem,calc(0.95rem+1.8vw+0.65dvh),2.65rem)] font-bold uppercase leading-[1.06] tracking-[0.024em] text-white xl:leading-[1.06]"
              style={{
                textShadow: "0 2px 18px rgba(255,255,255,0.08), 0 2px 28px rgba(0,0,0,0.35)",
              }}
            >
              Tu camino hacia un posgrado en el extranjero empieza aquí.
            </h1>

            <p className="w-full max-w-none text-[clamp(0.8rem,1.35dvh+0.4rem,1.06rem)] font-normal leading-snug text-white/95 sm:leading-relaxed">
              Asesoría experta y personalizada para ganar becas internacionales de excelencia.
            </p>

            <div className="relative flex w-full max-w-none shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div
                className="pointer-events-none absolute left-[-5%] top-1/2 h-[140px] w-[min(105%,340px)] -translate-y-1/2 rounded-full bg-[#FFC45F]/30 blur-[56px] sm:left-0"
                aria-hidden
              />
              <span className="relative inline-flex">
                <span className="absolute -inset-4 rounded-2xl bg-[#FFC45F]/50 blur-3xl" aria-hidden />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative inline-flex h-[clamp(2.65rem,7.5dvh,3.35rem)] items-center justify-center gap-2 rounded-2xl
                    border border-white/25 bg-[#FFC45F] bg-gradient-to-b from-[#ffecc8] via-[#FFC45F] to-[#e8a82e]
                    px-[clamp(1.25rem,3.5vw,2.25rem)] text-[clamp(0.62rem,1.35dvh,0.7rem)] font-bold uppercase tracking-[0.14em] text-[#082448]
                    shadow-[0_0_0_1px_rgba(255,255,255,0.55)_inset,0_3px_8px_rgba(0,0,0,0.1)_inset,0_14px_48px_rgba(255,196,95,0.55),0_0_72px_-4px_rgba(255,196,95,0.85)]
                    transition hover:brightness-[1.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.65)_inset,0_18px_56px_rgba(255,196,95,0.65),0_0_88px_2px_rgba(255,196,95,0.5)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9E1DE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2059BA]
                  "
                >
                  <MessageCircle className="h-[1.2rem] w-[1.2rem] shrink-0 opacity-88" strokeWidth={2} aria-hidden />
                  Agenda una asesoría
                </a>
              </span>
              <a
                href="#testimonios"
                className="
                  inline-flex h-[clamp(2.65rem,7.5dvh,3.35rem)] items-center justify-center rounded-2xl border border-white/[0.28] bg-white/[0.08]
                  px-[clamp(1.25rem,3.5vw,2.25rem)] text-[clamp(0.62rem,1.35dvh,0.7rem)] font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_20px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.14)_inset]
                  backdrop-blur-[10px] transition hover:border-white/40 hover:bg-white/[0.12] hover:shadow-[0_0_28px_rgba(255,255,255,0.1),0_1px_0_rgba(255,255,255,0.2)_inset]
                  sm:text-[clamp(0.68rem,1.4dvh,0.78rem)]
                "
              >
                Casos de éxito
              </a>
            </div>

            <div className="flex min-h-0 w-full flex-col gap-y-[clamp(0.5rem,2dvh,1.25rem)]">
              <div className="flex w-full shrink-0 items-center gap-3 sm:gap-4">
                  <span className="h-px min-w-8 flex-1 bg-gradient-to-r from-transparent to-white/25 sm:min-w-12" aria-hidden />
                  <a
                    href="#servicios"
                    className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-1 py-0.5 text-[clamp(0.62rem,1.35dvh,0.78rem)] font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:text-white"
                  >
                    <Search className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
                    Explora las becas
                  </a>
                  <span className="h-px min-w-8 flex-1 bg-gradient-to-l from-transparent to-white/25 sm:min-w-12" aria-hidden />
              </div>

                <div className="grid min-h-0 w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3 lg:gap-4">
                {partnerLogos.map(({ id, src, alt }) => (
                  <div
                    key={id}
                    className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center rounded-xl border border-white/50 bg-white/[0.96] px-3 py-[clamp(0.45rem,1.8dvh,1.1rem)] shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:px-4"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="block max-h-[min(4.5rem,14dvh)] w-full max-w-full object-contain sm:max-h-[min(4.75rem,15dvh)]"
                    />
                  </div>
                ))}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
