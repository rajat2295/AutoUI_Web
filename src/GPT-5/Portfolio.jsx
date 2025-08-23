// App.jsx
// Senior Frontend Engineer approach: Single-file React + Tailwind portfolio site.
// - All components defined and consumed in this file.
// - Responsive, reusable, accessible; no backend or database code.
// - Uses './image.jpeg' for all images per instructions.
// - Includes React import and ReactDOM.render at bottom to mount the app.
// - Features: Header with nav, Hero intro, Project Listings, Galleries, Resume, Footer.

import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

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
const SKILLS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "Vite",
  "Node.js",
  "GraphQL",
  "Accessibility",
  "Jest",
  "Cypress",
  "Design Systems",
  "Figma",
];

const PROJECTS = [
  {
    id: "prj-1",
    title: "Design System & Component Library",
    role: "Frontend Engineer",
    period: "2024",
    tags: ["React", "Tailwind", "Accessibility"],
    image: "./image.jpeg",
    description:
      "Built a scalable design system with 60+ accessible components, theming, and docs site.",
    link: "#",
    highlights: [
      "WCAG AA compliance with automated checks",
      "Tree-shaken builds with Vite + Rollup",
      "Composable APIs and polymorphic components",
    ],
  },
  {
    id: "prj-2",
    title: "E‑commerce Storefront",
    role: "Lead UI Engineer",
    period: "2023",
    tags: ["Next.js", "React", "Performance"],
    image: "./image.jpeg",
    description:
      "Hydration-friendly storefront with edge rendering and Core Web Vitals in the green.",
    link: "#",
    highlights: [
      "Code-splitting and critical CSS inlining",
      "Optimized media and prefetch strategies",
      "A/B testing and analytics instrumentation",
    ],
  },
  {
    id: "prj-3",
    title: "Analytics Dashboard",
    role: "Frontend Engineer",
    period: "2022",
    tags: ["React", "D3", "DX"],
    image: "./image.jpeg",
    description:
      "Interactive charts, custom hooks, and modular layouts with keyboard-accessible widgets.",
    link: "#",
    highlights: [
      "Declarative chart wrappers with D3",
      "High-contrast themes and reduced motion",
      "Robust test coverage with Jest/Cypress",
    ],
  },
  {
    id: "prj-4",
    title: "Content Platform",
    role: "UI/UX Engineer",
    period: "2021",
    tags: ["React", "SSR", "Design"],
    image: "./image.jpeg",
    description:
      "Editorial CMS front-end with rich text, image pipelines, and collaborative workflows.",
    link: "#",
    highlights: [
      "SSR for fast first paint and SEO",
      "Role-based UI and audits",
      "Reusable editor extensions",
    ],
  },
];

const GALLERIES = [
  { id: "gal-1", title: "Product UI", image: "./image.jpeg" },
  { id: "gal-2", title: "Design System", image: "./image.jpeg" },
  { id: "gal-3", title: "Mobile Screens", image: "./image.jpeg" },
  { id: "gal-4", title: "Dashboard", image: "./image.jpeg" },
  { id: "gal-5", title: "Illustrations", image: "./image.jpeg" },
  { id: "gal-6", title: "Branding", image: "./image.jpeg" },
];

const EXPERIENCE = [
  {
    company: "Acme Labs",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    points: [
      "Led design system adoption across 6 product teams.",
      "Improved performance budgets; 30% faster TTI on key flows.",
      "Mentored engineers on accessibility and testing.",
    ],
  },
  {
    company: "Pixelworks",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    points: [
      "Shipped A/B tested features with measurable lift.",
      "Established component standards and lint rules.",
      "Partnered with Design on UX research and prototypes.",
    ],
  },
];

const EDUCATION = [
  {
    school: "State University",
    degree: "B.Sc. in Computer Science",
    period: "2017 — 2021",
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

// ----------------------------- Header & Nav ---------------------------------
const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

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
              Portfolio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Projects
            </a>
            <a
              href="#galleries"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Galleries
            </a>
            <a
              href="#resume"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button href="#projects" variant="primary">
              View Work
            </Button>
          </div>

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
          open ? "max-h-[320px]" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <nav className="flex flex-col gap-2">
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Projects
            </a>
            <a
              href="#galleries"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Galleries
            </a>
            <a
              href="#resume"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Contact
            </a>
          </nav>
          <Button href="#projects" variant="primary" className="mt-3 w-full">
            View Work
          </Button>
        </div>
      </div>
    </header>
  );
};

// -------------------------------- Hero --------------------------------------
const Hero = () => (
  <Section className="relative pt-8 sm:pt-12">
    {/* Decorative gradient background */}
    <div className="absolute inset-0 -z-10">
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-50`}
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-2">
        <Badge color={THEME.info}>Available for freelance projects</Badge>
        <h1
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
        >
          Building delightful, accessible web experiences.
        </h1>
        <p
          className={`mt-4 sm:mt-6 text-${THEME.neutral}-600 text-base sm:text-lg max-w-2xl`}
        >
          Frontend engineer specializing in React and Tailwind. I craft design
          systems, performant frontends, and developer tooling that scales.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href="#projects" variant="primary">
            See Projects
          </Button>
          <Button href="#resume" variant="secondary">
            View Resume
          </Button>
        </div>

        {/* Social proof / avatars */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src="./image.jpeg"
                alt="Client avatar"
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <p className={`text-sm text-${THEME.neutral}-600`}>
            30+ shipped features • Design system lead • WCAG-conscious
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={`absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-${THEME.primary}-100 via-white to-${THEME.secondary}-100 blur-2xl opacity-90`}
        />
        <img
          src="./image.jpeg"
          alt="Portrait"
          className="w-full rounded-2xl border border-slate-200 shadow-xl object-cover aspect-[4/5]"
        />
      </div>
    </div>
  </Section>
);

// ------------------------------- Projects -----------------------------------
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))],
    []
  );

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <Section id="projects" className="bg-white">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
          >
            Selected Projects
          </h2>
          <p className={`mt-1 text-${THEME.neutral}-600`}>
            A mix of product work, design systems, and performance projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                filter === t
                  ? `border-${THEME.primary}-600 bg-${THEME.primary}-50 text-${THEME.primary}-700`
                  : `border-slate-200 bg-white text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-50`
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <a
          href={`#project-${project.id}`}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((t) => (
                <Badge key={t} color={THEME.success}>
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`line-clamp-1 text-lg font-bold text-${THEME.neutral}-900`}
              >
                {project.title}
              </h3>
              <span
                className={`whitespace-nowrap text-xs font-medium text-${THEME.neutral}-500`}
              >
                {project.period}
              </span>
            </div>
            <p
              className={`mt-1 line-clamp-2 text-sm text-${THEME.neutral}-600`}
            >
              {project.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className={`text-xs text-${THEME.neutral}-500`}>
                {project.role}
              </div>
              <Button variant="secondary" className="!px-3 !py-2 text-xs">
                Case Study
              </Button>
            </div>
          </div>
        </a>
      </article>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <header className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/8] object-cover"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 backdrop-blur hover:bg-white"
              >
                Close
              </button>
            </header>
            <div className="p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((t) => (
                  <Badge key={t} color={THEME.info}>
                    {t}
                  </Badge>
                ))}
              </div>
              <h3
                className={`mt-2 text-2xl font-extrabold text-${THEME.neutral}-900`}
              >
                {project.title}
              </h3>
              <p className={`mt-2 text-sm text-${THEME.neutral}-600`}>
                {project.role} • {project.period}
              </p>
              <p className={`mt-4 text-${THEME.neutral}-700`}>
                {project.description}
              </p>
              <ul className="mt-4 list-disc pl-6 text-sm text-slate-700 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="primary" href={project.link}>
                  Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ------------------------------- Galleries ----------------------------------
const Galleries = () => {
  const [active, setActive] = useState("All");
  const groups = useMemo(() => ["All", "UI", "Brand", "Product"], []);
  const filtered = useMemo(() => {
    // In a real app, filter by group; here all items reused
    return GALLERIES;
  }, [active]);

  return (
    <Section id="galleries">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
          >
            Galleries
          </h2>
          <p className={`mt-1 text-${THEME.neutral}-600`}>
            A snapshot of visual work and explorations.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                active === g
                  ? `border-${THEME.primary}-600 bg-${THEME.primary}-50 text-${THEME.primary}-700`
                  : `border-slate-200 bg-white text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-50`
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filtered.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 text-xs font-medium text-white">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};

// -------------------------------- Resume ------------------------------------
const Resume = () => {
  return (
    <Section id="resume" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Summary + Skills */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-4">
              <img
                src="./image.jpeg"
                alt="Profile"
                className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
              />
              <div>
                <h3 className={`text-lg font-bold text-${THEME.neutral}-900`}>
                  Alex Johnson
                </h3>
                <p className={`text-sm text-${THEME.neutral}-600`}>
                  Senior Frontend Engineer
                </p>
              </div>
            </div>
            <p className={`mt-4 text-${THEME.neutral}-700`}>
              I design and build accessible, performant frontends with React and
              Tailwind. Advocate for design systems, maintainability, and great
              developer experience.
            </p>

            <h4
              className={`mt-6 text-sm font-semibold text-${THEME.neutral}-900`}
            >
              Skills
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className={`rounded-full border border-${THEME.secondary}-200 bg-${THEME.secondary}-50 px-3 py-1 text-xs font-semibold text-${THEME.secondary}-700`}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Button href="#contact" variant="primary">
                Get in Touch
              </Button>
              <Button href="#" variant="secondary">
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* Experience + Education */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
                Experience
              </h4>
              <ul className="mt-3 space-y-4">
                {EXPERIENCE.map((job, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <p
                        className={`text-sm font-semibold text-${THEME.neutral}-900`}
                      >
                        {job.role} • {job.company}
                      </p>
                      <p className="text-xs text-slate-500">{job.period}</p>
                    </div>
                    <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 space-y-1">
                      {job.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
                Education
              </h4>
              <ul className="mt-3 space-y-3">
                {EDUCATION.map((ed, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div>
                      <p
                        className={`text-sm font-semibold text-${THEME.neutral}-900`}
                      >
                        {ed.degree}
                      </p>
                      <p className="text-xs text-slate-500">{ed.school}</p>
                    </div>
                    <p className="text-xs text-slate-500">{ed.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div
              id="contact"
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
                Contact
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoRow
                  color={THEME.primary}
                  title="Email"
                  text="hello@alex.dev"
                  iconPath="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
                <InfoRow
                  color={THEME.success}
                  title="Location"
                  text="Remote-first, Global"
                  iconPath="M12 2C8.13 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.13-7-7-7z"
                />
                <InfoRow
                  color={THEME.warn}
                  title="Status"
                  text="Open to opportunities"
                  iconPath="M12 6v6l4 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const InfoRow = ({ color, title, text, iconPath }) => (
  <div className="flex items-center gap-3">
    <div
      className={`h-10 w-10 rounded-xl bg-${color}-50 ring-1 ring-${color}-100 flex items-center justify-center text-${color}-700`}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d={iconPath}
        />
      </svg>
    </div>
    <div>
      <p className={`text-sm text-${THEME.neutral}-600`}>{title}</p>
      <p className={`font-medium text-${THEME.neutral}-900`}>{text}</p>
    </div>
  </div>
);

// -------------------------------- Footer ------------------------------------
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
              Portfolio
            </span>
          </a>
          <p className={`mt-4 max-w-lg text-${THEME.neutral}-600`}>
            Building reliable, performant web experiences with modern React and
            Tailwind practices.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Explore
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#projects"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#galleries"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Galleries
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Connect
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#contact"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className={`text-sm text-${THEME.neutral}-500`}>
          © {new Date().getFullYear()} Alex Johnson. All rights reserved.
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

// --------------------------------- App --------------------------------------
const App = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header />
      <Hero />
      <Projects />
      <Galleries />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
