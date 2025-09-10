// App.jsx
// Senior Frontend Engineer approach: Single-file React + Tailwind blog/magazine UI.
// - All components are defined and consumed in this file.
// - Responsive, reusable, accessible; no backend or database code.
// - Uses './image.jpeg' for all images per instructions.
// - Includes React import and ReactDOM.render at bottom to mount the app.
// - Features: Header with nav/search, Hero highlights, Categories, Article feed with pagination,
//   Single article view with comments (mock), Sidebar widgets, Footer.

import React, { useEffect, useMemo, useState } from "react";

// ----------------------------- Theme Tokens ---------------------------------
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  neutral: "slate",
  info: "sky",
  success: "emerald",
  danger: "rose",
  warn: "amber",
};

// ----------------------------- Mock Content ---------------------------------
const CATEGORIES = [
  { id: "world", name: "World" },
  { id: "tech", name: "Tech" },
  { id: "design", name: "Design" },
  { id: "business", name: "Business" },
  { id: "culture", name: "Culture" },
  { id: "science", name: "Science" },
];

const MOCK_ARTICLES = [
  {
    id: "a1",
    title: "Designing with Purpose: The Future of Accessible Interfaces",
    category: "design",
    author: "Alex Rivera",
    date: "2025-08-12",
    readTime: 8,
    image: "./image.jpeg",
    excerpt:
      "How inclusive thinking, semantic HTML, and progressive enhancement lead to resilient user experiences.",
    content:
      "Accessibility is not an afterthought. It is integral to great design. Start with semantic HTML, leverage ARIA only when needed, and ensure your color contrast meets WCAG. Focus on keyboard navigation, logical document structure, and meaningful motion. Performance is part of accessibility—optimize images, minimize scripts, and respect user preferences like reduced motion. Finally, test with real users and assistive technologies whenever possible.",
    tags: ["Accessibility", "UX", "Web"],
    featured: true,
  },
  {
    id: "a2",
    title: "AI in the Newsroom: Augmenting Editorial Workflows",
    category: "business",
    author: "Jamie Patel",
    date: "2025-08-10",
    readTime: 6,
    image: "./image.jpeg",
    excerpt:
      "Newsrooms are adopting AI to accelerate research while upholding editorial integrity and transparency.",
    content:
      "AI can assist with research, summarization, and translation. Editorial guidelines and responsible AI practices ensure accuracy and fairness. Human oversight remains essential. Tooling should be transparent and auditable, minimizing hallucinations and bias.",
    tags: ["AI", "Media", "Ethics"],
    featured: true,
  },
  {
    id: "a3",
    title: "Next-Gen Web Performance: Patterns for Faster Sites",
    category: "tech",
    author: "Jordan Kim",
    date: "2025-08-09",
    readTime: 10,
    image: "./image.jpeg",
    excerpt:
      "Adopt performance budgets, code-splitting, and smart caching to deliver sub-second experiences.",
    content:
      "Set a performance budget—measure CLS, LCP, and INP regularly. Use code-splitting and lazy loading for non-critical components. Prefer modern image formats and responsive images. Cache strategically with immutable assets and short HTML TTLs. Monitor production with real-user metrics.",
    tags: ["Performance", "Lighthouse", "Core Web Vitals"],
    featured: false,
  },
  {
    id: "a4",
    title: "Culture Shift: Remote Collaboration That Actually Works",
    category: "culture",
    author: "Taylor Reese",
    date: "2025-08-05",
    readTime: 7,
    image: "./image.jpeg",
    excerpt:
      "Asynchronous communication and clear decision logs help distributed teams thrive without burnout.",
    content:
      "Remote-first teams need reliable rituals: weekly async updates, clear ownership, and transparent decision logs. Use fewer meetings and more written proposals. Embrace time-zone flexibility and trust.",
    tags: ["Remote Work", "Teams", "Culture"],
    featured: false,
  },
  {
    id: "a5",
    title: "World Briefing: Markets, Policy, and Climate",
    category: "world",
    author: "Casey Nguyen",
    date: "2025-08-03",
    readTime: 5,
    image: "./image.jpeg",
    excerpt:
      "This week’s briefing covers shifting markets, new policy proposals, and climate resilience programs.",
    content:
      "Global markets show mixed signals while policy debates heat up. Climate resilience programs gain traction with public-private partnerships and community-led initiatives.",
    tags: ["World", "Policy", "Climate"],
    featured: false,
  },
  {
    id: "a6",
    title: "Science Snapshot: Materials at the Edge of Possibility",
    category: "science",
    author: "Morgan Li",
    date: "2025-08-01",
    readTime: 9,
    image: "./image.jpeg",
    excerpt:
      "Novel materials promise breakthroughs in energy storage, computing, and sustainable manufacturing.",
    content:
      "Materials science drives innovation in batteries, photonics, and bio-compatible structures. Discoveries often emerge from interdisciplinary collaboration and open data.",
    tags: ["Materials", "Research", "Innovation"],
    featured: false,
  },
];

// --------------------------- Reusable Primitives ----------------------------
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

const Badge = ({ color = THEME.info, children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-${color}-200 bg-${color}-50 px-2.5 py-1 text-xs font-semibold text-${color}-700 ${className}`}
  >
    {children}
  </span>
);

const Button = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";
  const size = "px-4 sm:px-5 py-2.5 text-sm";
  const variants = {
    primary: `bg-${THEME.primary}-600 text-white shadow-lg shadow-${THEME.primary}-600/20 hover:bg-${THEME.primary}-700 focus-visible:ring-${THEME.primary}-600`,
    secondary: `bg-white text-${THEME.neutral}-900 border border-${THEME.neutral}-200 hover:bg-${THEME.neutral}-50 focus-visible:ring-${THEME.primary}-600`,
    ghost: `bg-${THEME.secondary}-50 text-${THEME.secondary}-700 hover:bg-${THEME.secondary}-100 focus-visible:ring-${THEME.secondary}-600`,
  };
  const cls = `${base} ${size} ${variants[variant]} ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

// Compact avatar with name
const Author = ({ name, date }) => (
  <div className="flex items-center gap-3">
    <img
      src="./image.jpeg"
      alt={name}
      className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"
    />
    <div className="text-xs">
      <p className={`font-medium text-${THEME.neutral}-900`}>{name}</p>
      <p className={`text-${THEME.neutral}-500`}>
        {new Date(date).toLocaleDateString()}
      </p>
    </div>
  </div>
);

// ----------------------------- Header & Nav ---------------------------------
const Header = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    onSearch(q);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img
                src="./image.jpeg"
                alt="Brand Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`text-xl sm:text-2xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
            >
              Magzine
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#latest"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Latest
            </a>
            <a
              href="#categories"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Categories
            </a>
            <a
              href="#trending"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Trending
            </a>
            <a
              href="#newsletter"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Newsletter
            </a>
          </nav>

          {/* Desktop search */}
          <form onSubmit={submit} className="hidden md:flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className={`w-56 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
            />
            <Button type="submit" variant="secondary">
              Search
            </Button>
          </form>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden inline-flex items-center justify-center rounded-xl p-2 text-${THEME.neutral}-700 hover:bg-${THEME.neutral}-100 focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <nav className="flex flex-col gap-2">
            <a
              href="#latest"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Latest
            </a>
            <a
              href="#categories"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Categories
            </a>
            <a
              href="#trending"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Trending
            </a>
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Newsletter
            </a>
          </nav>
          <form onSubmit={submit} className="mt-4 flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className={`flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
            />
            <Button type="submit" variant="primary" className="shrink-0">
              Search
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};

// ------------------------------ Hero Highlights -----------------------------
const Hero = ({ featured }) => (
  <Section className="relative pt-8 sm:pt-12">
    {/* Decorative gradient background */}
    <div className="absolute inset-0 -z-10">
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-50`}
      />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
      {/* Lead feature spans two columns */}
      {featured[0] && <FeatureCard article={featured[0]} large />}
      {/* Two smaller features */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8">
        {featured.slice(1, 3).map((a) => (
          <FeatureCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  </Section>
);

const FeatureCard = ({ article, large = false }) => (
  <a
    href={`#article-${article.id}`}
    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow ${
      large ? "lg:col-span-2" : ""
    }`}
  >
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className={`w-full object-cover ${
          large ? "aspect-[16/7]" : "aspect-[16/9]"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <Badge color={THEME.success} className="backdrop-blur">
          {article.featured ? "Featured" : article.category}
        </Badge>
        <h2 className="mt-3 text-white text-2xl sm:text-3xl font-extrabold drop-shadow">
          {article.title}
        </h2>
        <p className="mt-2 hidden sm:block max-w-2xl text-white/90 text-sm drop-shadow">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center gap-3 text-white/90 text-xs">
          <Author name={article.author} date={article.date} />
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">{article.readTime} min read</span>
        </div>
      </div>
    </div>
  </a>
);

// ------------------------------ Categories Row ------------------------------
const Categories = ({ active, onChange }) => (
  <Section id="categories" className="py-8 sm:py-10">
    <div className="flex items-center justify-between">
      <h3 className={`text-xl sm:text-2xl font-bold text-${THEME.neutral}-900`}>
        Browse by Category
      </h3>
      <a
        href="#latest"
        className={`hidden sm:inline text-sm font-medium text-${THEME.primary}-700 hover:underline`}
      >
        See all articles
      </a>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <CategoryChip
        label="All"
        selected={active === "all"}
        onClick={() => onChange("all")}
      />
      {CATEGORIES.map((c) => (
        <CategoryChip
          key={c.id}
          label={c.name}
          selected={active === c.id}
          onClick={() => onChange(c.id)}
        />
      ))}
    </div>
  </Section>
);

const CategoryChip = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
      selected
        ? `border-${THEME.primary}-600 bg-${THEME.primary}-50 text-${THEME.primary}-700`
        : `border-slate-200 bg-white text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-50`
    }`}
  >
    {label}
  </button>
);

// ------------------------------ Article Feed --------------------------------
const ArticleFeed = ({
  articles,
  onOpenArticle,
  page,
  totalPages,
  onPageChange,
}) => (
  <Section id="latest" className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main list */}
      <div className="lg:col-span-2">
        <h3 className={`text-2xl font-bold text-${THEME.neutral}-900`}>
          Latest Articles
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((a) => (
            <ArticleCard
              key={a.id}
              article={a}
              onOpen={() => onOpenArticle(a)}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="secondary"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className={page === 1 ? "opacity-50 cursor-not-allowed" : ""}
          >
            Previous
          </Button>
          <p className={`text-sm text-${THEME.neutral}-600`}>
            Page {page} of {totalPages}
          </p>
          <Button
            variant="secondary"
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            className={
              page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            Next
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <Sidebar />
      </aside>
    </div>
  </Section>
);

const ArticleCard = ({ article, onOpen }) => (
  <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
    <a href={`#article-${article.id}`} onClick={onOpen}>
      <img
        src={article.image}
        alt={article.title}
        className="w-full aspect-[16/10] object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-2">
          <Badge color={THEME.info}>{article.category}</Badge>
          <span className={`text-xs text-${THEME.neutral}-500`}>
            {article.readTime} min read
          </span>
        </div>
        <h4
          className={`mt-2 line-clamp-2 text-lg font-bold text-${THEME.neutral}-900`}
        >
          {article.title}
        </h4>
        <p className={`mt-1 line-clamp-2 text-sm text-${THEME.neutral}-600`}>
          {article.excerpt}
        </p>
        <div className="mt-4">
          <Author name={article.author} date={article.date} />
        </div>
      </div>
    </a>
  </article>
);

// ------------------------------ Sidebar Widgets -----------------------------
const Sidebar = () => (
  <div className="grid grid-cols-1 gap-6">
    <Trending />
    <Newsletter />
    <TagCloud />
  </div>
);

const Trending = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <h5 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
      Trending
    </h5>
    <ul className="mt-3 space-y-3">
      {MOCK_ARTICLES.slice(0, 5).map((a) => (
        <li key={a.id} className="flex gap-3">
          <img
            src="./image.jpeg"
            alt=""
            className="h-14 w-20 rounded-lg object-cover border border-slate-200"
          />
          <div className="min-w-0">
            <p
              className={`line-clamp-2 text-sm font-medium text-${THEME.neutral}-900`}
            >
              {a.title}
            </p>
            <p className="text-xs text-slate-500">
              {new Date(a.date).toLocaleDateString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setOk(true);
    setEmail("");
    setTimeout(() => setOk(false), 3000);
  };
  return (
    <div
      id="newsletter"
      className="rounded-2xl border border-slate-200 bg-white p-5"
    >
      <h5 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
        Subscribe to our newsletter
      </h5>
      <p className={`mt-1 text-sm text-${THEME.neutral}-600`}>
        Weekly highlights and editor picks. No spam.
      </p>
      <form onSubmit={submit} className="mt-3 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
        />
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </form>
      {ok && (
        <div
          className={`mt-3 rounded-xl border border-${THEME.success}-200 bg-${THEME.success}-50 p-3 text-sm text-${THEME.success}-800`}
        >
          Subscribed! Please check inbox to confirm.
        </div>
      )}
    </div>
  );
};

const TagCloud = () => {
  const tags = Array.from(new Set(MOCK_ARTICLES.flatMap((a) => a.tags))).slice(
    0,
    12
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h5 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
        Popular Tags
      </h5>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className={`rounded-full border border-${THEME.secondary}-200 bg-${THEME.secondary}-50 px-3 py-1 text-xs font-semibold text-${THEME.secondary}-700`}
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
};

// ------------------------------ Article Modal -------------------------------
const ArticleModal = ({ article, onClose, onSubmitComment }) => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !!article);
  }, [article]);

  if (!article) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) {
      setStatus({ type: "error", msg: "Please add a name and a comment." });
      return;
    }
    onSubmitComment(article.id, {
      name,
      text: comment,
      date: new Date().toISOString(),
    });
    setStatus({ type: "success", msg: "Comment added (local demo only)." });
    setComment("");
    setName("");
    setTimeout(() => setStatus(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <article className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <header className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/6] object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 backdrop-blur hover:bg-white"
          >
            Close
          </button>
        </header>

        <div className="p-5 sm:p-8">
          <div className="flex items-center gap-2">
            <Badge color={THEME.info}>{article.category}</Badge>
            <span className={`text-xs text-${THEME.neutral}-500`}>
              {article.readTime} min read
            </span>
          </div>
          <h2
            className={`mt-2 text-2xl sm:text-3xl font-extrabold text-${THEME.neutral}-900`}
          >
            {article.title}
          </h2>
          <div className="mt-3">
            <Author name={article.author} date={article.date} />
          </div>
          <p className={`mt-5 whitespace-pre-line text-${THEME.neutral}-700`}>
            {article.content}
          </p>

          {/* Comments */}
          <section className="mt-8">
            <h3 className={`text-lg font-semibold text-${THEME.neutral}-900`}>
              Comments
            </h3>
            <CommentList articleId={article.id} />

            <form
              onSubmit={submit}
              className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`sm:col-span-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
              />
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className={`sm:col-span-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
              />
              <div className="sm:col-span-5">
                <Button type="submit" variant="primary">
                  Post Comment
                </Button>
              </div>
              {status && (
                <div
                  className={`sm:col-span-5 rounded-xl border ${
                    status.type === "success"
                      ? `border-${THEME.success}-200 bg-${THEME.success}-50 text-${THEME.success}-800`
                      : `border-${THEME.danger}-200 bg-${THEME.danger}-50 text-${THEME.danger}-800`
                  } px-4 py-3 text-sm`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </section>
        </div>
      </article>
    </div>
  );
};

// Local comment store (in-memory for demo; no backend)
const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState(() => {
    const key = `comments:${articleId}`;
    const val = sessionStorage.getItem(key);
    return val ? JSON.parse(val) : [];
  });

  useEffect(() => {
    const key = `comments:${articleId}`;
    sessionStorage.setItem(key, JSON.stringify(comments));
  }, [comments, articleId]);

  // Listen for new comments via custom event
  useEffect(() => {
    const handler = (e) => {
      if (e.detail.articleId !== articleId) return;
      setComments((prev) => [e.detail.comment, ...prev].slice(0, 100));
    };
    window.addEventListener("demo:add-comment", handler);
    return () => window.removeEventListener("demo:add-comment", handler);
  }, [articleId]);

  if (comments.length === 0) {
    return (
      <div
        className={`mt-3 rounded-xl border border-slate-200 bg-${THEME.info}-50 p-4 text-sm text-${THEME.neutral}-700`}
      >
        No comments yet. Be the first to share thoughts.
      </div>
    );
  }

  return (
    <ul className="mt-3 space-y-3">
      {comments.map((c, i) => (
        <li key={i} className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className={`text-sm font-semibold text-${THEME.neutral}-900`}>
              {c.name}
            </p>
            <p className="text-xs text-slate-500">
              {new Date(c.date).toLocaleString()}
            </p>
          </div>
          <p className={`mt-1 text-sm text-${THEME.neutral}-700`}>{c.text}</p>
        </li>
      ))}
    </ul>
  );
};

// helper to dispatch new comment to CommentList components
const submitCommentGlobal = (articleId, comment) => {
  window.dispatchEvent(
    new CustomEvent("demo:add-comment", { detail: { articleId, comment } })
  );
};

// ------------------------------- Footer -------------------------------------
const Footer = () => (
  <footer className="mt-16 bg-white/80 backdrop-blur border-t border-slate-200/70">
    <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img
                src="./image.jpeg"
                alt="Brand Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`text-xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
            >
              Magzine
            </span>
          </a>
          <p className={`mt-4 max-w-lg text-${THEME.neutral}-600`}>
            Independent voices on design, tech, culture, and beyond—crafted with
            React and Tailwind.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Explore
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#latest"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#trending"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Trending
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            About
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className={`text-sm text-${THEME.neutral}-500`}>
          © {new Date().getFullYear()} Magzine. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`text-sm text-${THEME.neutral}-500 hover:text-${THEME.primary}-700`}
          >
            Privacy
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="#"
            className={`text-sm text-${THEME.neutral}-500 hover:text-${THEME.primary}-700`}
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// ------------------------------- App Root -----------------------------------
const App = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [page, setPage] = useState(1);
  const [openArticle, setOpenArticle] = useState(null);

  // Filter + search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = [...MOCK_ARTICLES];
    if (activeCat !== "all") {
      list = list.filter((a) => a.category === activeCat);
    }
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q)
      );
    }
    // Sort by date desc (latest first)
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return list;
  }, [query, activeCat]);

  // Pagination (client-side)
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    setPage(1);
  }, [query, activeCat]); // reset page when filters change
  const paged = useMemo(
    () => filtered.slice((page - 1) * pageSize, page * pageSize),
    [filtered, page]
  );

  const featured = useMemo(() => MOCK_ARTICLES.filter((a) => a.featured), []);
  const openArticleById = (a) => setOpenArticle(a);

  const handleSubmitComment = (articleId, c) => {
    submitCommentGlobal(articleId, c);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header onSearch={setQuery} />
      <Hero featured={featured} />
      <Categories active={activeCat} onChange={setActiveCat} />
      <ArticleFeed
        articles={paged}
        onOpenArticle={openArticleById}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      <Footer />

      <ArticleModal
        article={openArticle}
        onClose={() => setOpenArticle(null)}
        onSubmitComment={handleSubmitComment}
      />
    </div>
  );
};

export default App;
