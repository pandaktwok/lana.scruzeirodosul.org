/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, TweakSlider */
const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────
// SVG Icons (replacements for lucide-react)
// ──────────────────────────────────────────────────────────────
function HeartIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MapPinIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EyeIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function FileSpreadsheetIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l7-2a1 1 0 0 1 .48 0l7 2A1 1 0 0 1 20 6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WalletIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function InfoIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PencilIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

function StarIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SparklesIcon({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────
// Custom Button Component
// ──────────────────────────────────────────────────────────────
const Button = React.forwardRef(({ className = '', variant = 'solid', size = 'md', ...props }, ref) => {
  const baseStyle =
    'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-full select-none';

  const variants = {
    solid: 'bg-[var(--c-accent)] text-[var(--c-cream)] hover:bg-[var(--c-accentDark)] active:scale-[0.98] shadow-md shadow-[var(--c-accent)]/25',
    outline: 'border-2 border-[var(--c-deep)]/30 bg-[var(--c-cream)] text-[var(--c-deep)] hover:bg-[var(--c-peach)]/20 hover:border-[var(--c-deep)]/60 active:scale-[0.98]',
    ghost: 'text-[var(--c-deep)] hover:bg-[var(--c-peach)]/40 hover:text-[var(--c-deep)] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-6 py-2.5 text-sm md:text-base',
    lg: 'px-8 py-3.5 text-base md:text-lg',
  };

  const styles = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return <button ref={ref} className={styles} {...props} />;
});
Button.displayName = 'Button';


const PALETTES = {
  teal: {
    name: "Sereno",
    bg: "#A6D1D3",
    accent: "#D37C4C",
    accentDark: "#C86F3F",
    deep: "#4159A0",
    cream: "#FDFCFC",
    peach: "#ECC9B9",
    ink: "#423938",
  },
  peach: {
    name: "Acolhedor",
    bg: "#ECC9B9",
    accent: "#4159A0",
    accentDark: "#36488A",
    deep: "#D37C4C",
    cream: "#FDFCFC",
    peach: "#A6D1D3",
    ink: "#423938",
  },
  cream: {
    name: "Editorial",
    bg: "#FDFCFC",
    accent: "#D37C4C",
    accentDark: "#C86F3F",
    deep: "#4159A0",
    cream: "#FFF8F2",
    peach: "#ECC9B9",
    ink: "#423938",
  },
  deep: {
    name: "Noite",
    bg: "#4159A0",
    accent: "#D37C4C",
    accentDark: "#C86F3F",
    deep: "#A6D1D3",
    cream: "#FDFCFC",
    peach: "#ECC9B9",
    ink: "#FDFCFC",
  },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "teal",
  "heroLayout": "split",
  "decorIntensity": 1,
  "showCharacters": true
}/*EDITMODE-END*/;

// ──────────────────────────────────────────────────────────────

// ──────────────────────────────────────────────────────────────
// Decorative illustration block (inspired by hero example)
// ──────────────────────────────────────────────────────────────
function HeroIllustration({ p, intensity, showCharacters }) {
  return (
    <div
      className="hero-illustration"
      style={{
        background: `radial-gradient(circle at 50% 30%, ${p.cream}73 0%, transparent 38%), linear-gradient(135deg, ${p.accent} 0%, ${p.peach} 100%)`,
      }}
    >
      {/* Big ring */}
      <div
        className="illu-ring"
        style={{ borderColor: p.deep, opacity: 0.92 }}
      ></div>
      {/* Inner ring */}
      <div
        className="illu-ring-inner"
        style={{ borderColor: p.cream, opacity: 0.55 }}
      ></div>
      {/* Glow */}
      <div className="illu-glow" style={{ background: `${p.cream}` }}></div>
      {/* Bottom wash */}
      <div
        className="illu-wash"
        style={{ background: `${p.peach}99` }}
      ></div>
      {/* Smile arcs */}
      <div
        className="illu-arc illu-arc-1"
        style={{ borderTopColor: `${p.ink}26` }}
      ></div>
      <div
        className="illu-arc illu-arc-2"
        style={{ borderTopColor: `${p.ink}26` }}
      ></div>

      {/* Floating "speech bubbles" — empathy theme */}
      {intensity >= 1 && (
        <>
          <Bubble
            style={{ top: "12%", left: "8%", background: p.cream, color: p.deep, transform: "rotate(-6deg)" }}
            label="você é incrível"
            tail="bl"
          />
          <Bubble
            style={{ top: "62%", right: "8%", background: p.deep, color: p.cream, transform: "rotate(4deg)" }}
            label="estamos com você"
            tail="br"
          />
        </>
      )}
      {intensity >= 2 && (
        <Bubble
          style={{ top: "8%", right: "12%", background: p.peach, color: p.ink, transform: "rotate(8deg)" }}
          label="respira ✿"
          tail="bl"
        />
      )}

      {/* Book Image */}
      {showCharacters && (
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            width: "62%",
            transform: "translateX(-50%)",
            zIndex: 4,
          }}
        >
          <img
            src="https://bimagem.sccruzeirodosul.org/logo_uteis/livro_lana.png"
            alt="Livro LANA"
            className="hero-book-img"
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.3))",
              transform: "rotate(-2deg)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      )}

      {/* Stars / sparkles */}
      <Star style={{ top: "18%", left: "42%" }} color={p.cream} />
      <Star style={{ top: "70%", left: "35%" }} color={p.deep} size={14} />
      <Star style={{ top: "30%", right: "20%" }} color={p.deep} size={10} />
    </div>
  );
}

function Bubble({ style, label, tail }) {
  return (
    <div className="bubble" style={style}>
      <span>{label}</span>
      <span className={`bubble-tail tail-${tail}`} style={{ background: style.background }}></span>
    </div>
  );
}

function Star({ style, color, size = 18 }) {
  return (
    <svg
      className="sparkle"
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"
        fill={color}
      />
    </svg>
  );
}

function Character({ color, face, mirror, style }) {
  return (
    <div className="character" style={{ ...style, transform: mirror ? "scaleX(-1)" : "none" }}>
      <svg viewBox="0 0 120 160" width="100%" height="auto" preserveAspectRatio="xMidYMax meet">
        {/* body */}
        <path
          d="M30 160 Q30 90 60 90 Q90 90 90 160 Z"
          fill={color}
        />
        {/* neck */}
        <rect x="52" y="80" width="16" height="14" fill={face} opacity="0.95" />
        {/* head */}
        <circle cx="60" cy="58" r="32" fill={face} />
        {/* hair */}
        <path d="M28 50 Q30 22 60 22 Q92 22 92 52 Q88 38 60 38 Q34 38 28 50 Z" fill={color} />
        {/* smile */}
        <path d="M48 66 Q60 76 72 66" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* eyes */}
        <circle cx="50" cy="56" r="2.5" fill={color} />
        <circle cx="70" cy="56" r="2.5" fill={color} />
        {/* cheeks */}
        <circle cx="44" cy="64" r="3" fill="#E89A7D" opacity="0.7" />
        <circle cx="76" cy="64" r="3" fill="#E89A7D" opacity="0.7" />
        {/* arm raised */}
        <path d="M86 100 Q108 90 102 70 Q98 64 92 68 Q90 80 82 90 Z" fill={color} />
      </svg>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Header
// ──────────────────────────────────────────────────────────────
function Header({ p }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header" style={{ background: `${p.cream}BB`, borderColor: `${p.deep}26` }}>
      <div className="nav-inner" style={{ padding: scrolled ? "0.45rem 1.5rem" : "0.85rem 1.5rem", transition: "padding 0.3s ease" }}>
        <a href="#top" className="logo" aria-label="LANA — Projeto CRIAR">
          <LogoMark p={p} scrolled={scrolled} />
        </a>
        <nav className="nav-links" aria-label="primary">
          <a href="#projeto">O Projeto</a>
          <a href="#numeros">Impacto</a>
          <a href="#autor">O Autor</a>
          <a href="#galeria">Galeria</a>
        </nav>
        <div className="nav-cta">
          <a href="#contato" className="btn btn-ghost" style={{ color: p.deep }}>Saiba mais</a>
          <a href="#doar" className="btn btn-primary" style={{ background: p.accent, color: p.cream, boxShadow: `0 10px 20px -8px ${p.accent}80` }}>
            Doar via FIA
          </a>
        </div>
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="abrir menu"
          style={{ color: p.deep }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <div className="nav-mobile" style={{ background: p.cream, borderColor: `${p.deep}26` }}>
          <a href="#projeto">O Projeto</a>
          <a href="#numeros">Impacto</a>
          <a href="#autor">O Autor</a>
          <a href="#galeria">Galeria</a>
          <a href="#doar" className="btn btn-primary" style={{ background: p.accent, color: p.cream }}>Doar via FIA</a>
        </div>
      )}
    </header>
  );
}

function LogoMark({ p, scrolled }) {
  return (
    <div className="logo-mark">
      <img
        src="https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logo_uteis/logo_criar.png"
        alt="Projeto CRIAR"
        style={{
          height: scrolled ? "42px" : "55px",
          width: "auto",
          display: "block",
          transition: "height 0.3s ease",
        }}
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Hero
// ──────────────────────────────────────────────────────────────
function Hero({ p, layout, intensity, showCharacters }) {
  return (
    <section
      className={`hero hero-${layout}`}
      id="top"
      style={{ background: p.bg, color: p.ink }}
    >
      <div className="hero-inner">
        <div className="hero-copy">
          <span
            className="pill"
            style={{ background: `${p.cream}D9`, color: p.deep, boxShadow: `0 4px 0 0 ${p.deep}1f` }}
          >
            <span className="pill-dot" style={{ background: p.accent }}></span>
            Uma história sobre cyberbullying
          </span>

          <h1
            className="hero-title"
            style={{
              color: p.cream,
              textShadow: `0 6px 0 ${p.deep}59`,
            }}
          >
            Construindo um futuro melhor com{" "}
            <span style={{ color: p.accent, textShadow: `0 6px 0 ${p.deep}59` }}>empatia</span>,{" "}
            <span style={{ color: p.deep, textShadow: `0 6px 0 ${p.cream}80` }}>arte</span> e{" "}
            <span style={{ color: p.accent, textShadow: `0 6px 0 ${p.deep}59` }}>cuidado</span>.
          </h1>

          <p className="hero-sub" style={{ color: `${p.ink}D9` }}>
            Apoie o <strong>Projeto CRIAR</strong> e contribua para tornar o ambiente escolar mais seguro, acolhedor e positivo para crianças e adolescentes. Doe via FIA e faça parte dessa transformação.
          </p>

          <div className="hero-ctas">
            <a
              href="#doar"
              className="btn btn-primary btn-lg"
              style={{ background: p.accent, color: p.cream, boxShadow: `0 14px 28px -10px ${p.accent}AA, 0 4px 0 ${p.accentDark}` }}
            >
              Quero doar agora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projeto"
              className="btn btn-ghost btn-lg"
              style={{ color: p.deep, background: `${p.cream}80` }}
            >
              Conhecer o projeto
            </a>
          </div>

          <div className="hero-trust" style={{ color: `${p.ink}A0`, display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img
              src="https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/FIA.png"
              alt="FIA Logo"
              style={{ height: "26px", width: "auto", display: "block" }}
            />
            <span>Dedução em IR · 100% do recurso aplicado em Criciúma</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-illustration">
            <img
              src="https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logo_uteis/livro_lana.png"
              alt="Livro LANA"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <Marquee p={p} />
    </section>
  );
}

function Marquee({ p }) {
  const logos = [
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/CMDCA.png", alt: "CMDCA" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/Dicave.png", alt: "Dicave" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/Bramatal.png", alt: "Bramatal" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/Anjo.png", alt: "Anjo" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/giassi.png", alt: "Giassi" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/prefeitura_criciuma.png", alt: "Prefeitura de Criciúma" },
    { src: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logos/FIA.png", alt: "FIA" }
  ];

  const track = [...logos, ...logos];

  return (
    <div className="marquee" style={{ borderColor: `${p.deep}26` }}>
      <div className="marquee-track" style={{ gap: "6rem" }}>
        {[...track, ...track, ...track].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: "44px",
              width: "auto",
              display: "inline-block",
              verticalAlign: "middle",
              filter: "grayscale(100%) opacity(0.8) contrast(1.1)",
              transition: "filter 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "grayscale(100%) opacity(0.8) contrast(1.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// CTA banner
// ──────────────────────────────────────────────────────────────
function CTAStrip({ p }) {
  return (
    <section className="cta-strip" id="doar-strip" style={{ background: p.cream }}>
      <div className="cta-card" style={{ background: p.deep, color: p.cream }}>
        <div className="cta-card-mark" style={{ background: p.accent, color: p.cream }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
              stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"
            />
          </svg>
        </div>
        <div className="cta-card-text">
          <p className="cta-eyebrow" style={{ color: p.peach }}>Chamada para Ação</p>
          <h2 style={{ color: p.cream }}>Seja um protagonista da mudança.</h2>
          <p className="cta-body">
            Doe agora via <strong>FIA — Fundo da Infância e Adolescência</strong> e garanta
            que o <strong>LANA</strong> chegue às mãos de quem precisa, combatendo a
            violência digital com educação.
          </p>
        </div>
        <a
          href="#doar"
          className="btn btn-primary btn-xl"
          style={{ background: p.accent, color: p.cream, boxShadow: `0 4px 0 ${p.accentDark}` }}
        >
          Doar agora →
        </a>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Legado / 84 anos
// ──────────────────────────────────────────────────────────────
function Autor({ p }) {
  return (
    <section id="autor" className="autor" style={{ background: p.peach, color: p.ink }}>
      <div className="autor-inner">
        <div className="autor-eyebrow" style={{ color: p.deep }}>
          <span className="eyebrow-line" style={{ background: p.deep }}></span>
          Quem conta essa história
        </div>
        <div className="autor-grid">
          <div className="autor-image-container">
            <img
              src="https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/Giovani%201.jpeg"
              alt="Geovane Kubiaki Bahireski"
              className="autor-image"
            />
          </div>
          <div className="autor-body">
            <h2 className="autor-title" style={{ color: p.deep, marginBottom: "1.5rem" }}>
              BIOGRAFIA DO AUTOR
            </h2>
            <p>
              Geovane Kubiaki Bahireski (1993), o tio Geovane, é catarinense e membro fundador da Academia de Letras do Brasil de Santa Catarina – seccional de Içara. O autor faz sua estreia na literatura infantil com um tema atual urgente: segurança digital das crianças na internet.
            </p>
            <p>
              Palestrante e fonoaudiólogo clínico infantil, formado pela Faculdade IELUSC de Joinville, SC, dedica-se ao atendimento especializado de trocas de fala. Dessa experiência de contato direto com as crianças, busca inspiração para poesias e textos para o público infantil, além de crônicas e textos acadêmicos dentro da temática educação e desenvolvimento infantil. É mestrando em Saúde Coletiva pela UNESC.
            </p>
            <div className="autor-contacts">
              <a
                href="https://instagram.com/dr.geovanekubiaki"
                target="_blank"
                rel="noopener noreferrer"
                className="autor-contact-link"
                style={{ color: p.deep }}
              >
                <InstagramIcon />
                <span>@dr.geovanekubiaki</span>
              </a>
              <a
                href="mailto:geovanebahireski@gmail.com"
                className="autor-contact-link"
                style={{ color: p.deep }}
              >
                <MailIcon />
                <span>geovanebahireski@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Numbers
// ──────────────────────────────────────────────────────────────
function Numbers({ p }) {
  const stats = [
    { n: "25", l: "escolas atendidas", sub: "na rede pública e privada" },
    { n: "750+", l: "alunos atendidos", sub: "diretamente em sala" },
    { n: "3000+", l: "livros LANA distribuídos", sub: "apoio socioemocional" },
    { n: "3°", l: "Edição do livro LANA", sub: "revisada e ampliada" },
  ];
  return (
    <section id="numeros" className="numbers" style={{ background: p.cream }}>
      <div className="numbers-inner">
        <div className="numbers-head">
          <span className="eyebrow" style={{ color: p.accent }}>Números que inspiram</span>
          <h2 style={{ color: p.ink }}>
            Cada doação se transforma em <em style={{ color: p.deep, fontStyle: "normal" }}>impacto real</em>.
          </h2>
        </div>
        <div className="numbers-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className="number-card"
              style={{
                background: i % 2 === 0 ? p.bg : p.peach,
                color: p.ink,
                boxShadow: `0 8px 0 0 ${p.deep}26`,
              }}
            >
              <div className="number-n" style={{ color: i === 0 ? p.deep : i === 1 ? p.accent : i === 2 ? p.deep : p.accent }}>
                {s.n}
              </div>
              <div className="number-l">{s.l}</div>
              <div className="number-sub" style={{ color: `${p.ink}99` }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Project / About LANA
// ──────────────────────────────────────────────────────────────
function Project({ p }) {
  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path d="M4 6h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9l-5 4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: "Conversar é proteger",
      body: "Palestras nas escolas usam a história do LANA para abrir o diálogo sobre cyberbullying — sem julgamento, com empatia.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path d="M12 3l9 4-9 4-9-4 9-4Zm0 8l9 4-9 4-9-4 9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: "Arte que ensina",
      body: "Distribuímos o livro LANA e ofertamos oficinas de escrita criativa e ilustração — porque a arte abre portas que a palavra nua não alcança.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      ),
      title: "Rede de apoio",
      body: "Levamos orientação a pais, professores e mediadores. Quem está próximo das crianças precisa ter as palavras certas",
    },
  ];

  return (
    <section id="projeto" className="project" style={{ background: p.bg, color: p.ink }}>
      <div className="project-inner">
        <div className="project-head">
          <span className="eyebrow" style={{ color: p.deep }}>O Projeto CRIAR apresenta</span>
          <h2 style={{ color: p.cream, textShadow: `0 4px 0 ${p.deep}40` }}>
            LANA — uma história que vira ferramenta.
          </h2>
          <p className="project-lead" style={{ color: `${p.ink}D9` }}>
            LANA é mais que um livro: é um ponto de partida para abrir conversas
            sobre violência digital nas escolas. Três frentes, um propósito.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((pi, i) => (
            <div
              key={i}
              className="pillar"
              style={{
                background: p.cream,
                color: p.ink,
                boxShadow: `0 10px 0 0 ${p.deep}1f`,
              }}
            >
              <div className="pillar-icon" style={{ background: p.peach, color: p.deep }}>
                {pi.icon}
              </div>
              <h3 style={{ color: p.deep }}>{pi.title}</h3>
              <p style={{ color: `${p.ink}CC` }}>{pi.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Gallery (placeholders)
// ──────────────────────────────────────────────────────────────
function Gallery({ p }) {
  const tiles = [
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/escola2.jpeg",
      label: "Rodas de conversa nas escolas",
      tall: true
    },
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/landa%20La%C3%A7amento.jpg",
      label: "Lançamento oficial do livro",
    },
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/marista2.jpeg",
      label: "Atividades de integração",
    },
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/marista%204.jpeg",
      label: "Dinâmicas de empatia",
      tall: true
    },
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/marista1.jpeg",
      label: "Formação de mediadores",
    },
    {
      url: "https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/lana/escola1.jpeg",
      label: "Oficinas criativas com alunos",
    }
  ];
  return (
    <section id="galeria" className="gallery" style={{ background: p.cream }}>
      <div className="gallery-inner">
        <div className="gallery-head">
          <span className="eyebrow" style={{ color: p.accent }}>Galeria</span>
          <h2 style={{ color: p.ink }}>O projeto em movimento.</h2>
          <p style={{ color: `${p.ink}99` }}>Registros dos encontros, oficinas e bastidores.</p>
        </div>
        <div className="gallery-grid">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`gallery-tile ${t.tall ? "tile-tall" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.75)), url(${t.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#FFFFFF",
              }}
            >
              <div className="tile-label" style={{ marginTop: "auto", fontWeight: "700", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// Creative Pricing / Support Plans
// ──────────────────────────────────────────────────────────────
function CreativePricing({ p }) {
  const [hovered0, setHovered0] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <section className="testi py-24 relative overflow-hidden" id="doar" style={{ background: p.bg }}>
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <span className="eyebrow" style={{ color: p.deep }}>
            Apoie a Lana
          </span>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold font-fredoka leading-tight" style={{ color: p.cream, textShadow: `0 4px 0 ${p.deep}40` }}>
              Ajudar a chegarmos mais longe
            </h2>
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 h-2 rounded-full blur-[2px] opacity-35"
              style={{ background: p.deep }}
            />
          </div>
          <p className="font-nunito text-base md:text-lg mt-6 leading-relaxed text-[var(--c-cream)] max-w-2xl mx-auto">
            Doe para os projetos da Sociedade Cultural Cruzeiro do Sul e ajude a Lana e outros projetos a chegarem às{" "}
            <span 
              className="font-fredoka font-black uppercase tracking-wider px-2 py-0.5 rounded-lg text-sm md:text-base inline-block border-2 shadow-[2px_2px_0px_0px]" 
              style={{ 
                color: p.deep, 
                background: p.cream,
                borderColor: p.deep,
                boxShadow: `2px 2px 0 0 ${p.deep}`,
              }}
            >
              CRIANÇAS
            </span>{" "}
            e{" "}
            <span 
              className="font-fredoka font-black uppercase tracking-wider px-2 py-0.5 rounded-lg text-sm md:text-base inline-block border-2 shadow-[2px_2px_0px_0px]" 
              style={{ 
                color: p.accent, 
                background: p.cream,
                borderColor: p.deep,
                boxShadow: `2px 2px 0 0 ${p.deep}`,
              }}
            >
              ADOLESCENTES
            </span>{" "}
            da região.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Quanto você pode doar! */}
          <div
            className="relative group transition-all duration-300 flex flex-col justify-between"
            style={{
              transform: "rotate(-1deg)",
            }}
            onMouseEnter={() => setHovered0(true)}
            onMouseLeave={() => setHovered0(false)}
          >
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: p.cream,
                border: `3px solid ${p.deep}`,
                borderRadius: "1.5rem",
                boxShadow: hovered0 ? `12px 12px 0 0 ${p.deep}` : `6px 6px 0 0 ${p.deep}`,
                transform: hovered0 ? "translate(-4px, -4px)" : "translate(0, 0)",
              }}
            />
            <div className="relative p-8 flex flex-col justify-between h-full min-h-[440px]">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 font-fredoka text-lg font-bold"
                    style={{
                      borderColor: p.deep,
                      background: p.peach,
                      color: p.deep,
                    }}
                  >
                    1º
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-bold tracking-wide leading-tight" style={{ color: p.deep }}>
                      Quanto você pode doar!
                    </h3>
                    <p className="font-nunito text-xs mt-1 font-extrabold uppercase tracking-wider" style={{ color: p.accent }}>
                      Faça parte dessa história!
                    </p>
                  </div>
                </div>

                <div className="h-[2px] w-full mb-6" style={{ background: `${p.deep}20` }} />

                <div className="space-y-4 font-nunito">
                  {/* PF info */}
                  <div 
                    className="p-4 rounded-2xl border-2 transition-transform duration-200 hover:scale-[1.02]"
                    style={{
                      background: `${p.peach}22`,
                      borderColor: `${p.deep}20`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-fredoka text-3xl font-black" style={{ color: p.accent }}>
                        6%
                      </span>
                      <div className="flex flex-col">
                        <span className="font-fredoka text-xs font-bold uppercase tracking-wider leading-none" style={{ color: p.deep }}>
                          Pessoa Física
                        </span>
                        <span className="text-[11px] mt-1 opacity-80 leading-normal" style={{ color: p.ink }}>
                          Pode doar até 6% do seu Imposto de Renda devido.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PJ info */}
                  <div 
                    className="p-4 rounded-2xl border-2 transition-transform duration-200 hover:scale-[1.02]"
                    style={{
                      background: `${p.peach}22`,
                      borderColor: `${p.deep}20`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-fredoka text-3xl font-black" style={{ color: p.deep }}>
                        1%
                      </span>
                      <div className="flex flex-col">
                        <span className="font-fredoka text-xs font-bold uppercase tracking-wider leading-none" style={{ color: p.deep }}>
                          Pessoa Jurídica
                        </span>
                        <span className="text-[11px] mt-1 opacity-80 leading-normal" style={{ color: p.ink }}>
                          Pode doar até 1% do imposto (empresas no Lucro Real).
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Conta para doação */}
          <div
            className="relative group transition-all duration-300 flex flex-col justify-between"
            style={{
              transform: "rotate(1deg)",
            }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: p.cream,
                border: `3px solid ${p.deep}`,
                borderRadius: "1.5rem",
                boxShadow: hovered1 ? `12px 12px 0 0 ${p.deep}` : `6px 6px 0 0 ${p.deep}`,
                transform: hovered1 ? "translate(-4px, -4px)" : "translate(0, 0)",
              }}
            />
            <div className="relative p-8 flex flex-col justify-between h-full min-h-[440px]">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 font-fredoka text-lg font-bold"
                    style={{
                      borderColor: p.deep,
                      background: p.peach,
                      color: p.deep,
                    }}
                  >
                    2º
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-bold tracking-wide leading-tight" style={{ color: p.deep }}>
                      Conta para doação
                    </h3>
                    <p className="font-nunito text-[10px] md:text-xs mt-1 font-semibold leading-tight" style={{ color: `${p.ink}99` }}>
                      Doar na conta do FIA vinculado à Sociedade Cultural Cruzeiro do Sul
                    </p>
                  </div>
                </div>

                <div className="h-[2px] w-full mb-6" style={{ background: `${p.deep}20` }} />

                <div className="space-y-3 font-nunito">
                  {[
                    { label: "Banco", val: "Banco do Brasil" },
                    { label: "Agência", val: "3226-3" },
                    { label: "Conta", val: "18.892-1" },
                    { label: "CNPJ", val: "17.704.824/0001-45" },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-dashed transition-all hover:bg-white/60"
                      style={{
                        borderColor: `${p.deep}25`,
                        background: `${p.peach}15`
                      }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-70" style={{ color: p.ink }}>
                        {item.label}
                      </span>
                      <span className="font-fredoka text-xs md:text-sm font-bold text-right select-all" style={{ color: p.deep }} title="Clique para selecionar e copiar">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Onde seu dinheiro chega */}
          <div
            className="relative group transition-all duration-300 flex flex-col justify-between"
            style={{
              transform: "rotate(-1.5deg)",
            }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: p.cream,
                border: `3px solid ${p.deep}`,
                borderRadius: "1.5rem",
                boxShadow: hovered2 ? `12px 12px 0 0 ${p.deep}` : `6px 6px 0 0 ${p.deep}`,
                transform: hovered2 ? "translate(-4px, -4px)" : "translate(0, 0)",
              }}
            />
            <div className="relative p-8 flex flex-col justify-between h-full min-h-[440px]">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 font-fredoka text-lg font-bold"
                    style={{
                      borderColor: p.deep,
                      background: p.peach,
                      color: p.deep,
                    }}
                  >
                    3º
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-bold tracking-wide leading-tight" style={{ color: p.deep }}>
                      Onde seu dinheiro chega
                    </h3>
                    <p className="font-nunito text-xs mt-1 font-semibold leading-tight" style={{ color: `${p.ink}B3` }}>
                      Ajudar a garantir o desenvolvimento de nossas crianças e adolescentes.
                    </p>
                  </div>
                </div>

                <div className="h-[2px] w-full mb-6" style={{ background: `${p.deep}20` }} />

                <div className="space-y-4 font-nunito text-left">
                  {/* Projeto 1 */}
                  <div className="relative pl-3 border-l-2" style={{ borderColor: p.accent }}>
                    <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full" style={{ background: p.accent }} />
                    <h4 className="font-fredoka text-xs font-bold leading-tight uppercase" style={{ color: p.deep }}>
                      Projeto CRIAR - LANA
                    </h4>
                    <p className="text-[10px] font-bold opacity-75 uppercase tracking-wider mt-0.5" style={{ color: p.accent }}>
                      Uma história sobre cyberbullying
                    </p>
                    <p className="text-[11px] mt-1 leading-normal" style={{ color: p.ink }}>
                      A LANA conscientizando sobre cyberbullying.
                    </p>
                  </div>

                  {/* Projeto 2 */}
                  <div className="relative pl-3 border-l-2" style={{ borderColor: p.deep }}>
                    <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full" style={{ background: p.deep }} />
                    <h4 className="font-fredoka text-xs font-bold leading-tight uppercase" style={{ color: p.deep }}>
                      Projeto CRIAR II - LANA
                    </h4>
                    <p className="text-[10px] font-bold opacity-75 uppercase tracking-wider mt-0.5" style={{ color: p.deep }}>
                      Uma história sobre o autismo
                    </p>
                    <p className="text-[11px] mt-1 leading-normal" style={{ color: p.ink }}>
                      Continuação do projeto, a LANA agora vai falar sobre autismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background doodles matching children's book theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 left-20 text-5xl rotate-12" style={{ color: p.deep }}>
          ✎
        </div>
        <div className="absolute bottom-40 right-20 text-5xl -rotate-12" style={{ color: p.deep }}>
          ✏️
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Media / clipping
// ──────────────────────────────────────────────────────────────
function Media({ p }) {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Real news articles about the project to use as a high-quality fallback
  const fallbackClips = [
    { 
      title: "Projeto CRIAR lança livro infantil sobre cyberbullying em Criciúma", 
      pubDate: new Date("2024-11-22T12:00:00Z").toISOString(), 
      link: "https://www.engeplus.com.br/noticia/educacao/2024/projeto-criar-lanca-livro-infantil-sobre-cyberbullying-em-criciuma" 
    },
    { 
      title: "Projeto Criar lança livro infantil sobre cyberbullying com apoio da UNESC", 
      pubDate: new Date("2024-11-24T12:00:00Z").toISOString(), 
      link: "https://www.unesc.net/portal/blog/post/projeto-criar-lanca-livro-infantil-sobre-cyberbullying-com-apoio-da-unesc" 
    },
    { 
      title: "Projeto Criar lança livro infantil sobre cyberbullying em parceria com a DPCAMI", 
      pubDate: new Date("2024-11-20T12:00:00Z").toISOString(), 
      link: "https://sulnoticias.com/noticia/projeto-criar-lanca-livro-infantil-sobre-cyberbullying/1973" 
    },
  ];

  useEffect(() => {
    // Links encoded to prevent 422 Unprocessable Entity errors in API parsers
    const linksDosFeeds = [
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fengeplus.com.br%2Fsearch%2Fprojeto%2Blana%2Ffeed%2F&api_key=zousgegbydkr5dr8oya6ka4z9hswtafipetyqlwt',
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.4oito.com.br%2Fsearch%2Fprojeto%2Blana%2Ffeed%2F&api_key=zousgegbydkr5dr8oya6ka4z9hswtafipetyqlwt',
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fndmais.com.br%2Fsearch%2Fsociedade%2Bcultural%2Bcruzeiro%2Bdo%2Bsul%2Ffeed%2F&api_key=zousgegbydkr5dr8oya6ka4z9hswtafipetyqlwt'
    ];

    Promise.all(
      linksDosFeeds.map(url => 
        fetch(url)
          .then(resposta => {
            if (!resposta.ok) throw new Error("Erro de rede");
            return resposta.json();
          })
      )
    )
      .then(resultados => {
        let todasAsNoticias = [];

        resultados.forEach(feed => {
          if (feed.status === 'ok' && feed.items) {
            todasAsNoticias = todasAsNoticias.concat(feed.items);
          }
        });

        if (todasAsNoticias.length > 0) {
          // Ordena da notícia mais nova para a mais velha
          todasAsNoticias.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          setNoticias(todasAsNoticias.slice(0, 6));
        } else {
          setNoticias(fallbackClips);
        }
        setLoading(false);
      })
      .catch(erro => {
        console.error('Erro ao buscar os feeds RSS:', erro);
        setError(true);
        setNoticias(fallbackClips);
        setLoading(false);
      });
  }, []);

  const getSourceTag = (link) => {
    if (link.includes("engeplus")) return "Engeplus";
    if (link.includes("4oito")) return "Portal 4oito";
    if (link.includes("ndmais")) return "ND Mais";
    if (link.includes("sulnoticias")) return "Sul Notícias";
    if (link.includes("unesc")) return "Portal UNESC";
    return "Notícia";
  };

  return (
    <section className="media" style={{ background: p.cream }}>
      <div className="media-inner">
        <div className="media-head">
          <span className="eyebrow" style={{ color: p.accent }}>Na mídia</span>
          <h2 style={{ color: p.ink }}>Falaram sobre a gente.</h2>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <span className="font-fredoka text-lg animate-pulse" style={{ color: p.deep }}>
              Carregando notícias da mídia regional...
            </span>
          </div>
        ) : (
          <ul className="media-list" id="feed-noticias">
            {noticias.map((c, i) => {
              const dataFormatada = new Date(c.pubDate).toLocaleDateString('pt-BR');
              return (
                <li key={i} className="media-row" style={{ borderColor: `${p.ink}1A` }}>
                  <span className="media-tag" style={{ background: p.bg, color: p.deep }}>
                    {getSourceTag(c.link)}
                  </span>
                  <span className="media-title" style={{ color: p.ink }}>
                    {c.title}
                  </span>
                  <span className="media-date" style={{ color: `${p.ink}80` }}>
                    {dataFormatada}
                  </span>
                  <a 
                    className="media-link hover:underline" 
                    style={{ color: p.accent }} 
                    href={c.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ler →
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

function Footer({ p }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--c-ink)] text-[var(--c-cream)] border-t border-[var(--c-deep)]/20 pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--c-cream)]/10 items-start">
          
          {/* Column 1: Info and Branding */}
          <div className="lg:col-span-5">
            <a
              href="https://sccruzeirodosul.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/foot-logo"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-md p-1 overflow-hidden">
                <img
                  src="https://pub-164c034eeb904c41b6bd30aff7725757.r2.dev/logo_sccs/logo_sccs_alt.png"
                  alt="Logo Sociedade Cultural Cruzeiro do Sul"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-fredoka text-sm font-bold tracking-wide text-[var(--c-cream)] leading-tight max-w-[220px]">
                  SOCIEDADE CULTURAL CRUZEIRO DO SUL
                </span>
                <span className="text-[9px] font-extrabold text-[var(--c-bg)] tracking-widest uppercase leading-none mt-1">
                  Projeto Criar
                </span>
              </div>
            </a>

            <p className="mt-6 font-nunito text-xs md:text-sm text-[var(--c-cream)]/70 leading-relaxed max-w-sm">
              O Projeto Criar é realizado pela Sociedade Cultural Cruzeiro do Sul. Para saber mais sobre a nossa atuação e outras iniciativas, acesse <a href="https://sccruzeirodosul.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--c-accent)] transition-colors">nosso site</a>.
            </p>

            {/* Address & Visitation invitation based on copy */}
            <div className="mt-8 flex items-start gap-2.5 bg-white/5 p-4 rounded-2xl border border-white/5 font-nunito text-xs text-[var(--c-cream)]/80">
              <MapPinIcon className="size-5 text-[var(--c-accent)] shrink-0" />
              <div>
                <p className="font-bold text-[var(--c-cream)]">Conheça-nos de perto</p>
                <p className="mt-1 leading-normal text-[var(--c-cream)]/70">
                  Agende uma visita presencial em uma de nossas escolas parceiras ou em nosso polo de Criciúma/SC para acompanhar de perto o impacto real do seu apoio.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Transparency breakdown - 'Sua doação com total clareza' */}
          <div className="lg:col-span-4">
            <h3 className="font-fredoka text-[var(--c-bg)] text-base font-bold uppercase tracking-wider">
              Sua doação com total clareza.
            </h3>
            
            <p className="mt-4 font-nunito text-xs md:text-sm text-[var(--c-cream)]/70 leading-relaxed">
              Acompanhe o destino dos recursos através do Portal da Transparência de Criciúma e junte-se a nós em uma visita presencial para conhecer o impacto real do seu apoio.
            </p>

            {/* Financial application progress tracking indicators */}
            <div className="mt-6 space-y-3.5">
              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--c-cream)]/80 mb-1">
                  <span>Impressão de livros LANA</span>
                  <span className="font-bold text-[var(--c-bg)]">14,52%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--c-cream)]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--c-accent)] rounded-full" style={{ width: "14.52%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--c-cream)]/80 mb-1">
                  <span>Apresentações & Palestras</span>
                  <span className="font-bold text-[var(--c-bg)]">43,57%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--c-cream)]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--c-deep)] rounded-full" style={{ width: "43.57%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--c-cream)]/80 mb-1">
                  <span>Administração & Prestação de Contas</span>
                  <span className="font-bold text-[var(--c-bg)]">34,64%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--c-cream)]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--c-accent)] rounded-full" style={{ width: "34.64%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--c-cream)]/80 mb-1">
                  <span>Mídia & Divulgação</span>
                  <span className="font-bold text-[var(--c-bg)]">7,26%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--c-cream)]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--c-deep)] rounded-full" style={{ width: "7.26%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Useful links based on copy */}
          <div className="lg:col-span-3">
            <h3 className="font-fredoka text-[var(--c-bg)] text-base font-bold uppercase tracking-wider">
              Links Úteis
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://transparencia.criciuma.sc.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-nunito text-xs md:text-sm font-bold text-[var(--c-cream)] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <EyeIcon className="size-4 text-[var(--c-bg)]" />
                    <span>Portal da Transparência</span>
                  </div>
                  <ExternalLinkIcon className="size-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Fazendo download de: Relatório de Prestação e Impacto Social consolidado do Projeto CRIAR (Formato PDF).");
                  }}
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-nunito text-xs md:text-sm font-bold text-[var(--c-cream)] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileSpreadsheetIcon className="size-4 text-[var(--c-bg)]" />
                    <span>Relatórios de Impacto</span>
                  </div>
                  <ExternalLinkIcon className="size-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/cruzeirodosul.cric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-nunito text-xs md:text-sm font-bold text-[var(--c-cream)] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="size-4 text-[var(--c-accent)]" />
                    <span>Instagram</span>
                  </div>
                  <ExternalLinkIcon className="size-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copywrite disclosures bottom */}
        <div className="mt-12 pt-4 flex flex-col md:flex-row gap-6 items-center justify-between text-xs font-semibold text-[var(--c-cream)]/50 font-nunito">
          <div className="flex flex-wrap gap-2 justify-center text-center">
            <span>© {currentYear} LANA - Projeto CRIAR.</span>
            <span>CNPJ Facilitador/FIA: 18.068.965/0001-44</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="size-4 text-[var(--c-bg)]" />
            <span>Recursos 100% fiscalizados pelo MPT & CMDCA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────────
// App
// ──────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const p = PALETTES[t.palette] || PALETTES.teal;

  // Set CSS variables on root
  useEffect(() => {
    const r = document.documentElement;
    Object.entries(p).forEach(([k, v]) => r.style.setProperty(`--c-${k}`, v));
  }, [p]);

  return (
    <>
      <Header p={p} />
      <Hero p={p} layout={t.heroLayout} intensity={t.decorIntensity} showCharacters={t.showCharacters} />
      <CTAStrip p={p} />
      <Project p={p} />
      <Numbers p={p} />
      <Autor p={p} />
      <Gallery p={p} />
      <CreativePricing p={p} />
      <Media p={p} />
      <Footer p={p} />

      <TweaksPanel>
        <TweakSection label="Paleta">
          <TweakColor
            label="Esquema"
            value={[p.bg, p.accent, p.deep]}
            options={[
              ["#A6D1D3", "#D37C4C", "#4159A0"],
              ["#ECC9B9", "#4159A0", "#D37C4C"],
              ["#FDFCFC", "#D37C4C", "#4159A0"],
              ["#4159A0", "#D37C4C", "#A6D1D3"],
            ]}
            onChange={(v) => {
              const keys = ["teal", "peach", "cream", "deep"];
              const sigs = [
                "#A6D1D3,#D37C4C,#4159A0",
                "#ECC9B9,#4159A0,#D37C4C",
                "#FDFCFC,#D37C4C,#4159A0",
                "#4159A0,#D37C4C,#A6D1D3",
              ];
              const idx = sigs.indexOf(Array.isArray(v) ? v.join(",") : v);
              setTweak("palette", keys[idx] ?? "teal");
            }}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Layout"
            value={t.heroLayout}
            options={[
              { value: "split", label: "Dividido" },
              { value: "centered", label: "Central" },
            ]}
            onChange={(v) => setTweak("heroLayout", v)}
          />
          <TweakSlider
            label="Decoração"
            value={t.decorIntensity}
            min={0}
            max={2}
            step={1}
            onChange={(v) => setTweak("decorIntensity", v)}
          />
          <TweakToggle
            label="Personagens"
            value={t.showCharacters}
            onChange={(v) => setTweak("showCharacters", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
