// App.jsx
// Senior Frontend Engineer approach: Single-file React + Tailwind landing page.
// - All components defined and consumed in this file.
// - Responsive, reusable, accessible; no backend or database code.
// - Uses './image.jpeg' for all images per instructions.
// - Includes React import and ReactDOM.render at bottom to mount the app.
// - Features: Header with nav, Hero with CTA + lead form, Promotions, Feature highlights,
//   Social proof, Detailed lead form section, FAQ, Footer.

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

// ----------------------------- Reusable Primitives --------------------------
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
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed";
  const size = "px-4 sm:px-5 py-2.5 text-sm";
  const variants = {
    primary: `bg-${THEME.primary}-600 text-white shadow-lg shadow-${THEME.primary}-600/20 hover:bg-${THEME.primary}-700 focus-visible:ring-${THEME.primary}-600`,
    secondary: `bg-white text-${THEME.neutral}-900 border border-${THEME.neutral}-200 hover:bg-${THEME.neutral}-50 focus-visible:ring-${THEME.primary}-600`,
    ghost: `bg-${THEME.secondary}-50 text-${THEME.secondary}-700 hover:bg-${THEME.secondary}-100 focus-visible:ring-${THEME.secondary}-600`,
    success: `bg-${THEME.success}-600 text-white hover:bg-${THEME.success}-700 focus-visible:ring-${THEME.success}-600`,
  };
  const cls = `${base} ${size} ${variants[variant]} ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}) => (
  <div>
    <label
      htmlFor={name}
      className={`block text-sm font-medium text-${THEME.neutral}-800`}
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
    />
  </div>
);

const TextArea = ({ label, name, value, onChange, placeholder = "" }) => (
  <div className="sm:col-span-2">
    <label
      htmlFor={name}
      className={`block text-sm font-medium text-${THEME.neutral}-800`}
    >
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows="4"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
    />
  </div>
);

// ----------------------------- Header & Nav ---------------------------------
const Header = ({ onOpenLead }) => {
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
              Launchly
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Features
            </a>
            <a
              href="#promotions"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Promotions
            </a>
            <a
              href="#lead"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Lead Form
            </a>
            <a
              href="#faq"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="secondary" href="#promotions">
              See Offers
            </Button>
            <Button variant="primary" onClick={onOpenLead}>
              Get Started
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

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[360px]" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <nav className="flex flex-col gap-2">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Features
            </a>
            <a
              href="#promotions"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Promotions
            </a>
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Lead Form
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              FAQ
            </a>
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="secondary" href="#promotions" className="w-full">
              See Offers
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setOpen(false);
                document
                  .getElementById("lead")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// -------------------------------- Hero --------------------------------------
const Hero = ({ onOpenLead }) => (
  <Section className="relative pt-8 sm:pt-12">
    {/* Decorative gradient background */}
    <div className="absolute inset-0 -z-10">
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-50`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[70%] max-w-3xl rounded-full bg-gradient-to-r from-${THEME.info}-200 via-${THEME.success}-200 to-${THEME.warn}-200 blur-3xl opacity-40`}
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <Badge color={THEME.info}>Limited-time promotion: 20% off annual</Badge>
        <h1
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
        >
          Launch campaigns faster with a conversion‑first toolkit.
        </h1>
        <p
          className={`mt-4 sm:mt-6 text-${THEME.neutral}-600 text-base sm:text-lg max-w-2xl`}
        >
          Capture leads, run promotions, and validate ideas—without complex
          setup. Responsive by default, accessible by design.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button variant="primary" onClick={onOpenLead}>
            Get Started
          </Button>
          <Button variant="secondary" href="#features">
            See Features
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src="./image.jpeg"
                alt="Customer"
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <p className={`text-sm text-${THEME.neutral}-600`}>
            Trusted by 1,000+ marketers · WCAG-conscious · 5‑minute setup
          </p>
        </div>
      </div>

      {/* Visual + Lead mini form */}
      <div className="relative">
        <div
          className={`absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-${THEME.primary}-100 via-white to-${THEME.secondary}-100 blur-2xl opacity-90`}
        />
        <div className="rounded-2xl border border-slate-200 bg-white/80 shadow-xl backdrop-blur">
          <img
            src="./image.jpeg"
            alt="Product"
            className="w-full rounded-t-2xl object-cover aspect-video"
          />
          <div className="p-5 sm:p-6">
            <h3 className={`text-lg font-bold text-${THEME.neutral}-900`}>
              Get a personalized demo
            </h3>
            <LeadMiniForm />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// Mini lead form (hero card)
const LeadMiniForm = () => {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setOk(true);
    setEmail("");
    setTimeout(() => setOk(false), 2500);
  };

  return (
    <form onSubmit={submit} className="mt-3 flex flex-col sm:flex-row gap-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={`flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
      />
      <Button type="submit" variant="primary" className="shrink-0">
        Request Demo
      </Button>
      {ok && (
        <div
          className={`sm:col-span-2 rounded-xl border border-${THEME.success}-200 bg-${THEME.success}-50 px-3 py-2 text-sm text-${THEME.success}-800`}
        >
          Thanks! We’ll reach out shortly.
        </div>
      )}
    </form>
  );
};

// ------------------------------ Promotions ----------------------------------
const Promotions = () => {
  const promos = useMemo(
    () => [
      {
        title: "Early‑bird Annual",
        desc: "Save 20% when paying yearly. Cancel anytime.",
        tag: "Limited",
        color: THEME.success,
      },
      {
        title: "Starter Plan",
        desc: "Perfect for MVPs and small launches.",
        tag: "Popular",
        color: THEME.info,
      },
      {
        title: "Teams",
        desc: "Seat-based pricing with shared workspaces.",
        tag: "New",
        color: THEME.accent,
      },
    ],
    []
  );

  return (
    <Section id="promotions" className="bg-white">
      <div className="flex items-end justify-between">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
          >
            Promotions
          </h2>
          <p className={`mt-1 text-${THEME.neutral}-600`}>
            Pick a plan that grows with the business.
          </p>
        </div>
        <Button variant="secondary" href="#lead" className="hidden sm:inline">
          Claim Offer
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {promos.map((p, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <Badge color={p.color}>{p.tag}</Badge>
              <h3
                className={`mt-3 text-xl font-semibold text-${THEME.neutral}-900`}
              >
                {p.title}
              </h3>
              <p className={`mt-1 text-${THEME.neutral}-600`}>{p.desc}</p>
              <Button href="#lead" variant="primary" className="mt-4">
                Get Offer
              </Button>
            </div>
            <img
              src="./image.jpeg"
              alt={p.title}
              className="w-full object-cover aspect-[16/7]"
            />
          </article>
        ))}
      </div>
    </Section>
  );
};

// ------------------------------ Features ------------------------------------
const Features = () => {
  const features = [
    {
      title: "Lead Capture",
      desc: "Flexible forms with validation and consent controls.",
      iconPath:
        "M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z",
      color: THEME.primary,
    },
    {
      title: "Fast & Responsive",
      desc: "Optimized layout, responsive grid, and accessible UI.",
      iconPath: "M12 6v6l4 2",
      color: THEME.success,
    },
    {
      title: "Promotion Blocks",
      desc: "Reusable content cards for offers and CTAs.",
      iconPath: "M5 13l4 4L19 7",
      color: THEME.info,
    },
    {
      title: "A/B Ready",
      desc: "Modular sections to test copy and visuals.",
      iconPath: "M16 12a4 4 0 10-8 0 4 4 0 008 0z",
      color: THEME.warn,
    },
  ];
  return (
    <Section id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`h-12 w-12 rounded-xl bg-${f.color}-50 ring-1 ring-${f.color}-100 flex items-center justify-center text-${f.color}-700`}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={f.iconPath}
                />
              </svg>
            </div>
            <h3
              className={`mt-4 text-lg font-semibold text-${THEME.neutral}-900`}
            >
              {f.title}
            </h3>
            <p className={`mt-2 text-${THEME.neutral}-600`}>{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// ------------------------------ Lead Form (main) ----------------------------
const LeadForm = () => {
  const initial = {
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
    consent: false,
  };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.consent) {
      setStatus({
        type: "error",
        msg: "Please provide name, email, and consent.",
      });
      return;
    }
    setStatus({
      type: "success",
      msg: "Thanks! Your lead has been captured locally for this demo.",
    });
    setForm(initial);
  };

  return (
    <Section id="lead" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pitch card */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Badge color={THEME.accent}>Get started</Badge>
            <h3 className={`mt-3 text-2xl font-bold text-${THEME.neutral}-900`}>
              Tell us about the goals
            </h3>
            <p className={`mt-2 text-${THEME.neutral}-600`}>
              Share a few details and receive a tailored walkthrough and
              pricing.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckIcon /> Response within 1 business day
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> No obligation, no credit card
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Best practices and sample templates
              </li>
            </ul>
            <img
              src="./image.jpeg"
              alt="Team"
              className="mt-6 w-full rounded-xl border border-slate-200 object-cover aspect-video"
            />
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={submit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Alex Morgan"
              required
            />
            <Input
              label="Work Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="alex@company.com"
              required
            />
            <Input
              label="Company"
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Company Inc."
            />
            <div>
              <label
                htmlFor="size"
                className={`block text-sm font-medium text-${THEME.neutral}-800`}
              >
                Company Size
              </label>
              <select
                id="size"
                name="size"
                value={form.size}
                onChange={onChange}
                className={`mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-${THEME.neutral}-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
              >
                <option value="">Select</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
            </div>
            <TextArea
              label="What are you looking to achieve?"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Briefly describe goals, timelines, and constraints..."
            />
            <label className="sm:col-span-2 mt-1 flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={onChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span className={`text-sm text-${THEME.neutral}-700`}>
                I consent to be contacted about this request. This is a demo—no
                data is sent.
              </span>
            </label>
            <div className="sm:col-span-2 flex items-center gap-3">
              <Button type="submit" variant="primary">
                Request Consultation
              </Button>
              <Button type="button" variant="secondary" href="#promotions">
                View Offers
              </Button>
            </div>

            {status && (
              <div
                className={`sm:col-span-2 rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? `border-${THEME.success}-200 bg-${THEME.success}-50 text-${THEME.success}-800`
                    : `border-${THEME.danger}-200 bg-${THEME.danger}-50 text-${THEME.danger}-800`
                }`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

const CheckIcon = () => (
  <svg
    className={`h-4 w-4 text-${THEME.success}-600`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 01.023 1.32l-.083.094-7 7a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L9 11.585l6.293-6.292a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// ------------------------------ FAQ -----------------------------------------
const FAQ = () => {
  const items = [
    {
      q: "Is this a real signup?",
      a: "This is a front-end demo only. No data is sent to a server, and no backend code is included.",
    },
    {
      q: "Can I customize the branding?",
      a: "Yes. Colors, typography, and layout are driven by Tailwind utility classes and simple theme tokens.",
    },
    {
      q: "Is it responsive?",
      a: "The layout adapts from mobile to desktop using responsive grid and spacing utilities.",
    },
    {
      q: "Accessibility considerations?",
      a: "Focus states, color contrast, and semantics are considered. Always validate with your own audits.",
    },
  ];
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq">
      <div className="max-w-3xl">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
        >
          FAQ
        </h2>
        <div className="mt-6 space-y-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                className="w-full px-4 sm:px-5 py-4 text-left flex items-center justify-between gap-3"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`font-medium text-${THEME.neutral}-900`}>
                  {it.q}
                </span>
                <svg
                  className={`h-5 w-5 text-${
                    THEME.neutral
                  }-500 transition-transform ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden px-4 sm:px-5 pb-4">
                  <p className={`text-${THEME.neutral}-600`}>{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ------------------------------ Footer --------------------------------------
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
              Launchly
            </span>
          </a>
          <p className={`mt-4 max-w-lg text-${THEME.neutral}-600`}>
            Conversion‑focused landing pages built with modern React + Tailwind
            practices.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Explore
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#features"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#promotions"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Promotions
              </a>
            </li>
            <li>
              <a
                href="#lead"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Lead Form
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Legal
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className={`text-sm text-${THEME.neutral}-500`}>
          © {new Date().getFullYear()} Launchly. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`text-sm text-${THEME.neutral}-500 hover:text-${THEME.primary}-700`}
          >
            Status
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="#"
            className={`text-sm text-${THEME.neutral}-500 hover:text-${THEME.primary}-700`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// -------------------------------- App Root ----------------------------------
const App = () => {
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", leadOpen);
  }, [leadOpen]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header
        onOpenLead={() => {
          setLeadOpen(true);
          document
            .getElementById("lead")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Hero
        onOpenLead={() => {
          setLeadOpen(true);
          document
            .getElementById("lead")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Promotions />
      <Features />
      <LeadForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
