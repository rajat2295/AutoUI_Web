// App.jsx
// Directory/Listing Website — Themed Conversion
// - Single file with all functional components defined inline and consumed by App.
// - Uses './image.jpeg' for all imagery.
// - Responsive, accessible, and focused on reusability.
// - No backend/database code, purely frontend.

// Imports
import React, { useMemo, useState, useEffect } from "react";

// Theme tokens for consistent Tailwind utility composition
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  info: "sky",
  neutral: "slate",
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

// Reusable Card with glassmorphism
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-${THEME.neutral}-200/70 bg-white/90 shadow-[0_6px_24px_-8px_rgba(2,6,23,0.15)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

// Star Rating (read-only)
const Stars = ({ value = 0, outOf = 5 }) => {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${value} out of ${outOf}`}
    >
      {Array.from({ length: outOf }).map((_, i) => {
        const fill =
          i < full
            ? "text-amber-500"
            : i === full && hasHalf
            ? "text-amber-400"
            : "text-slate-300";
        return (
          <svg
            key={i}
            className={`h-4 w-4 ${fill}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {i < full ? (
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.951-.69l1.07-3.292z" />
            ) : i === full && hasHalf ? (
              <path d="M10 2c.318 0 .636.184.77.552l1.07 3.292a1 1 0 00.951.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-.506-.173V2z" />
            ) : (
              <path d="M10 2l-1.07 3.292a1 1 0 01-.951.69H4.517c-.969 0-1.372 1.24-.589 1.81L6.73 9.82a1 1 0 01.364 1.118l-1.07 3.292c-.3.921.755 1.688 1.54 1.118l2.802-2.035a1 1 0 01.635-.183V2z" />
            )}
          </svg>
        );
      })}
      <span className="ml-1 text-xs font-medium text-slate-600">
        {value.toFixed(1)}
      </span>
    </div>
  );
};

// Header with glass background and search anchor
const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img
                src="./image.jpeg"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              DirectoryApp
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Listings", "Reviews"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium transition-colors`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Add Listing</Button>
            <Button variant="secondary">Sign In</Button>
          </div>

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
            {["Home", "Listings", "Reviews"].map((item) => (
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
              Add Listing
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

// Search Bar with filters
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const submit = (e) => {
    e.preventDefault();
    onSearch({ query, category });
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6">
      {/* Decorative gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute -top-12 left-1/2 -translate-x-1/2 h-40 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-50`}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Find places near you
        </h2>
        <Card className="p-4">
          <form
            onSubmit={submit}
            className="grid grid-cols-1 md:grid-cols-7 gap-3"
          >
            <div className="md:col-span-4">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, category, or keywords..."
                  className={`w-full rounded-xl border border-slate-200 bg-white/90 pl-11 pr-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
                />
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
            </div>
            <div className="md:col-span-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2.5 text-${THEME.neutral}-900`}
              >
                {["All", "Restaurant", "Gym", "Electronics"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <Button type="submit" variant="primary" className="w-full">
                Search
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

// Listing Card
const ListingCard = ({ item }) => (
  <Card className="overflow-hidden">
    <div className="relative">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-44 object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute left-3 bottom-3">
        <span
          className={`inline-flex items-center rounded-lg bg-${THEME.primary}-600/90 px-2 py-1 text-xs font-semibold text-white ring-1 ring-white/20`}
        >
          {item.category}
        </span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        </div>
        <Stars value={item.rating} />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Button variant="secondary">View Details</Button>
        <Button variant="ghost">Save</Button>
      </div>
    </div>
  </Card>
);

// Listings Grid with filter + empty state
const Listings = ({ items }) => {
  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Card className="p-8 text-center">
          <p className="text-slate-700">
            No listings match the current search.
          </p>
        </Card>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Top Listings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((listing) => (
          <ListingCard key={listing.id} item={listing} />
        ))}
      </div>
    </section>
  );
};

// Reviews List
const Reviews = ({ reviews }) => (
  <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
    <h2 className="text-lg font-semibold text-slate-900 mb-4">
      Latest Reviews
    </h2>
    <Card className="p-4 sm:p-6 space-y-4">
      {reviews.map((review, idx) => (
        <div
          key={review.id}
          className={`pb-4 ${
            idx !== reviews.length - 1 ? "border-b border-slate-200/70" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="./image.jpeg"
              alt={review.user}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
            />
            <p className="font-medium text-slate-900 text-sm">
              {review.user} on{" "}
              <span className={`text-${THEME.primary}-700`}>
                {review.listing}
              </span>
            </p>
          </div>
          <p className="mt-2 text-slate-700 text-sm">{review.text}</p>
        </div>
      ))}
    </Card>
  </section>
);

// Footer with gradient accent
const Footer = () => (
  <footer className="mt-8 bg-white/80 backdrop-blur border-t border-slate-200/70">
    <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} DirectoryApp. Built with React & Tailwind.
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

// Main App Component
const App = () => {
  // Base data
  const baseListings = useMemo(
    () => [
      {
        id: 1,
        name: "Modern Cafe",
        category: "Restaurant",
        img: "./image.jpeg",
        description: "A cozy place with artisan coffee and pastries.",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Fitness Hub",
        category: "Gym",
        img: "./image.jpeg",
        description: "State-of-the-art gym with professional trainers.",
        rating: 4.8,
      },
      {
        id: 3,
        name: "Tech World",
        category: "Electronics",
        img: "./image.jpeg",
        description: "Latest gadgets and electronics at great prices.",
        rating: 4.2,
      },
      {
        id: 4,
        name: "Green Park",
        category: "Restaurant",
        img: "./image.jpeg",
        description: "Healthy salads and fresh bowls with seasonal produce.",
        rating: 4.0,
      },
      {
        id: 5,
        name: "Pulse Studio",
        category: "Gym",
        img: "./image.jpeg",
        description: "HIIT classes and group workouts with energetic trainers.",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Gizmo Planet",
        category: "Electronics",
        img: "./image.jpeg",
        description: "Smart home devices and accessories.",
        rating: 4.1,
      },
    ],
    []
  );

  const [filters, setFilters] = useState({ query: "", category: "All" });

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return baseListings.filter((l) => {
      const matchQuery =
        q.length === 0 ||
        l.name.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q);
      const matchCategory =
        filters.category === "All" || l.category === filters.category;
      return matchQuery && matchCategory;
    });
  }, [baseListings, filters]);

  // Dummy reviews consistent with provided sample
  const reviews = useMemo(
    () => [
      {
        id: 1,
        user: "Jane Doe",
        listing: "Modern Cafe",
        text: "Loved the atmosphere and the coffee was amazing!",
      },
      {
        id: 2,
        user: "John Smith",
        listing: "Fitness Hub",
        text: "Great trainers, very professional and motivating.",
      },
    ],
    []
  );

  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header />
      <main className="flex-grow">
        <Search onSearch={setFilters} />
        <Listings items={filtered} />
        <Reviews reviews={reviews} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
