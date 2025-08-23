// App.jsx
// News / Media Website
// - Single-file React app with TailwindCSS utility classes inline.
// - Sections: Header, Headlines, Multimedia, Categories, Footer.
// - Uses './image.jpeg' for all imagery.
// - Responsive, accessible, reusable components; no backend/database code.

import React, { useEffect, useMemo, useState } from "react";

/**
 * Theme tokens for consistent Tailwind utility composition
 * NOTE: Tailwind won't scan dynamic strings in production without safelisting.
 * If purging, consider adding the used color utilities to a safelist.
 */
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  info: "sky",
  neutral: "slate",
  brand: "rose", // subtle news accent for hover chips
};

/* Reusable Button */
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
    subtle: `bg-${THEME.neutral}-50 text-${THEME.neutral}-700 hover:bg-${THEME.neutral}-100 border border-${THEME.neutral}-200`,
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

/* Reusable Card (glassmorphism) */
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

  // Prevent scroll when mobile menu open
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
              DailyNews
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "World", "Politics", "Technology", "Sports"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium transition-colors`}
                >
                  {item}
                </a>
              )
            )}
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
            {["Home", "World", "Politics", "Technology", "Sports"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100 transition-colors`}
                >
                  {item}
                </a>
              )
            )}
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
  <footer className="mt-8 bg-white/80 backdrop-blur border-t border-slate-200/70">
    <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} DailyNews. All Rights Reserved.
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
// Headline Card Component
/////////////////////
const HeadlineCard = ({ title, summary, tag }) => (
  <Card className="p-4 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-base sm:text-lg font-bold text-slate-900">{title}</h3>
      {tag && (
        <span
          className={`shrink-0 inline-flex items-center rounded-lg bg-${THEME.brand}-50 px-2 py-1 text-xs font-semibold text-${THEME.brand}-700 ring-1 ring-${THEME.brand}-100`}
        >
          {tag}
        </span>
      )}
    </div>
    <p className="mt-2 text-slate-700 text-sm">{summary}</p>
  </Card>
);

/////////////////////
// Headlines Section
/////////////////////
const Headlines = () => {
  const items = useMemo(
    () => [
      {
        title: "Global Summit Addresses Climate Action",
        summary:
          "World leaders gathered today to discuss immediate climate policies aimed at reducing carbon emissions and promoting sustainable energy.",
        tag: "World",
      },
      {
        title: "New Tech Unveiled at Major Conference",
        summary:
          "Breakthrough AI and robotics showcased, highlighting future potential in medical, transportation, and automation industries.",
        tag: "Technology",
      },
      {
        title: "Local Sports Team Wins Championship",
        summary:
          "Fans rejoiced as the underdogs clinched the trophy in an intense final match bringing pride to the city.",
        tag: "Sports",
      },
    ],
    []
  );

  return (
    <section className="w-full lg:w-2/3">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">
        Top Headlines
      </h2>
      <div className="space-y-4">
        {items.map((h, i) => (
          <HeadlineCard
            key={i}
            title={h.title}
            summary={h.summary}
            tag={h.tag}
          />
        ))}
      </div>
    </section>
  );
};

/////////////////////
// Media Card Component
/////////////////////
const MediaCard = ({ title }) => (
  <Card className="overflow-hidden">
    <div className="relative">
      <img
        src="./image.jpeg"
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="p-3">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
    </div>
  </Card>
);

/////////////////////
// Multimedia Section
/////////////////////
const Multimedia = () => (
  <section className="w-full lg:w-1/3">
    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Multimedia</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <MediaCard title="Photo: Stunning City Skyline at Night" />
      <MediaCard title="Video: Highlights from the Sports Finals" />
      <MediaCard title="Interview: Insights from Tech Innovators" />
    </div>
  </section>
);

/////////////////////
// Category Chip
/////////////////////
const CategoryChip = ({ label }) => (
  <button
    className={`rounded-xl border border-${THEME.neutral}-200 bg-white/90 px-4 py-2 text-sm text-${THEME.neutral}-700 hover:bg-${THEME.neutral}-50 transition`}
  >
    {label}
  </button>
);

/////////////////////
// Category Card Component (grid)
/////////////////////
const CategoryCard = ({ category }) => (
  <Card className="p-4 text-center hover:shadow-md transition-shadow">
    <h3 className={`font-bold text-${THEME.primary}-700`}>{category}</h3>
  </Card>
);

/////////////////////
// Categories Section
/////////////////////
const Categories = () => (
  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Categories</h2>
    {/* Chips row */}
    <div className="mb-4 flex flex-wrap gap-2">
      {[
        "All",
        "World",
        "Politics",
        "Technology",
        "Sports",
        "Entertainment",
        "Health",
      ].map((c) => (
        <CategoryChip key={c} label={c} />
      ))}
    </div>
    {/* Cards grid */}
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <CategoryCard category="World" />
      <CategoryCard category="Politics" />
      <CategoryCard category="Technology" />
      <CategoryCard category="Sports" />
      <CategoryCard category="Entertainment" />
      <CategoryCard category="Health" />
    </div>
  </section>
);

/////////////////////
// Main App Component
/////////////////////
const App = () => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      {/* Decorative top gradient blur */}
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-r from-${THEME.primary}-100/60 via-${THEME.secondary}-100/60 to-${THEME.accent}-100/60 blur-2xl`}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl">
          {/* Headlines + Multimedia in Responsive Grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Headlines />
            <Multimedia />
          </div>

          {/* Categories */}
          <Categories />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
