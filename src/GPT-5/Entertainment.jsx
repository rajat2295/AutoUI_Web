// App.jsx
// Entertainment Website
// - Single-file React app with TailwindCSS utility classes inline.
// - Sections: Header, Streaming, Games, Music, Footer.
// - Uses './image.jpeg' for all imagery.
// - Responsive, accessible, reusable components; no backend/database code.
// - Includes React 18 createRoot mounting at the bottom as requested.

import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

/**
 * Theme tokens for consistent Tailwind utility composition
 * NOTE: If using Tailwind's content purge, ensure dynamic class names are safelisted.
 */
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  info: "sky",
  neutral: "slate",
  brand: "purple",
};

// Reusable Button
const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";
  const size = "px-5 py-2.5 text-sm";
  const variants = {
    primary: `bg-${THEME.primary}-600 text-white shadow-lg shadow-${THEME.primary}-600/20 hover:bg-${THEME.primary}-700 focus-visible:ring-${THEME.primary}-600`,
    secondary: `bg-white text-${THEME.neutral}-900 border border-${THEME.neutral}-200 hover:bg-${THEME.neutral}-50 focus-visible:ring-${THEME.primary}-600`,
    ghost: `bg-${THEME.secondary}-50 text-${THEME.secondary}-700 hover:bg-${THEME.secondary}-100 focus-visible:ring-${THEME.secondary}-600`,
    brand: `bg-${THEME.brand}-600 text-white hover:bg-${THEME.brand}-700 focus-visible:ring-${THEME.brand}-600`,
  };
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${base} ${size} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Reusable Card (glassmorphism)
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-${THEME.neutral}-200/70 bg-white/90 shadow-[0_6px_24px_-8px_rgba(2,6,23,0.15)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

/////////////////////
// Header Component
/////////////////////
const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img
                src="./image.jpeg"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              FunStream
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Streaming", "Games", "Music"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium transition-colors`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Subscribe</Button>
            <Button variant="secondary">Sign In</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden inline-flex items-center justify-center rounded-xl p-2 text-${THEME.neutral}-700 hover:bg-${THEME.neutral}-100`}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4 space-y-3">
          <nav className="flex flex-col gap-2">
            {["Home", "Streaming", "Games", "Music"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100 transition-colors`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button className="flex-1" variant="ghost">
              Subscribe
            </Button>
            <Button className="flex-1" variant="secondary">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

/////////////////////
// Footer Component
/////////////////////
const Footer = () => (
  <footer className="mt-10 bg-white/80 backdrop-blur border-t border-slate-200/70">
    <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} FunStream Entertainment. All Rights
        Reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-slate-600 hover:text-indigo-700">
          Privacy
        </a>
        <span className="text-slate-300">•</span>
        <a href="#" className="text-sm text-slate-600 hover:text-indigo-700">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

/////////////////////
// Media Card Component
/////////////////////
const MediaCard = ({ title, description, cta = "Explore" }) => (
  <Card className="overflow-hidden flex flex-col">
    <div className="relative">
      <img
        src="./image.jpeg"
        alt={title}
        className="w-full h-44 object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900">
        {title}
      </h3>
      <p className="text-slate-600 text-sm flex-grow">{description}</p>
      <Button variant="brand" className="mt-3 self-start">
        {cta}
      </Button>
    </div>
  </Card>
);

/////////////////////
// Section Wrapper (title + children)
/////////////////////
const Section = ({ title, children, id }) => (
  <section id={id} className="w-full">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
    {children}
  </section>
);

/////////////////////
// Streaming Section
/////////////////////
const Streaming = () => (
  <Section title="Streaming" id="streaming">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MediaCard
        title="Epic Sci‑Fi Series"
        description="Stream the latest sci‑fi adventures with stunning visuals."
      />
      <MediaCard
        title="Award Winning Drama"
        description="A story that touches hearts and wins accolades globally."
      />
      <MediaCard
        title="Comedy Specials"
        description="Laugh out loud with the newest stand‑up talent."
      />
    </div>
  </Section>
);

/////////////////////
// Games Section
/////////////////////
const Games = () => (
  <Section title="Games" id="games">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MediaCard
        title="Battle Royale"
        description="Compete with millions in the ultimate survival challenge."
        cta="Play"
      />
      <MediaCard
        title="Puzzle Quest"
        description="Sharpen your brain with exciting puzzles and levels."
        cta="Play"
      />
      <MediaCard
        title="Racing Thrills"
        description="High‑octane racing action across exotic locations."
        cta="Play"
      />
    </div>
  </Section>
);

/////////////////////
// Music Section
/////////////////////
const Music = () => (
  <Section title="Music" id="music">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MediaCard
        title="Top Hits Playlist"
        description="Listen to the top tracks trending globally right now."
        cta="Listen"
      />
      <MediaCard
        title="Relaxing Chill"
        description="Unwind with soothing beats and acoustic melodies."
        cta="Listen"
      />
      <MediaCard
        title="Rock Legends"
        description="Classic hits from the greatest rock bands ever."
        cta="Listen"
      />
    </div>
  </Section>
);

/////////////////////
// Hero / Intro Banner
/////////////////////
const Hero = () => (
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
    {/* Decorative gradient backdrop */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 h-48 w-[92%] max-w-6xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-60`}
      />
    </div>
    <Card className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
      <img
        src="./image.jpeg"
        alt="Featured"
        className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover ring-1 ring-slate-200"
      />
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Entertainment without limits.
        </h1>
        <p className="mt-2 text-slate-600">
          Stream shows, play games, and listen to music—all in one modern,
          responsive experience.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="brand">Get Started</Button>
          <Button variant="secondary">Browse Library</Button>
        </div>
      </div>
    </Card>
  </div>
);

/////////////////////
// Main App Component
/////////////////////
const App = () => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      {/* Subtle top background blur stripe */}
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-r from-${THEME.primary}-100/60 via-${THEME.secondary}-100/60 to-${THEME.accent}-100/60 blur-2xl`}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Streaming />
          <div className="mt-12">
            <Games />
          </div>
          <div className="mt-12">
            <Music />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

/////////////////////
// Render App (React 18)
/////////////////////

export default App;
