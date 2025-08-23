// App.jsx
// Forum / Community Website
// - Single-file React app with TailwindCSS utility classes inline.
// - Sections: Header, Threads, Discussions, Moderation Panel, Footer.
// - Uses './image.jpeg' for avatars/images.
// - Responsive, accessible, reusable components; no backend/database code.

import React, { useEffect, useMemo, useState } from "react";

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
  const size = "px-4 py-2 text-sm";
  const variants = {
    primary: `bg-${THEME.primary}-600 text-white shadow-lg shadow-${THEME.primary}-600/20 hover:bg-${THEME.primary}-700 focus-visible:ring-${THEME.primary}-600`,
    secondary: `bg-white text-${THEME.neutral}-900 border border-${THEME.neutral}-200 hover:bg-${THEME.neutral}-50 focus-visible:ring-${THEME.primary}-600`,
    ghost: `bg-${THEME.secondary}-50 text-${THEME.secondary}-700 hover:bg-${THEME.secondary}-100 focus-visible:ring-${THEME.secondary}-600`,
    danger: `bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-600`,
    warn: `bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-500`,
    neutral: `bg-${THEME.neutral}-600 text-white hover:bg-${THEME.neutral}-700 focus-visible:ring-${THEME.neutral}-600`,
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
              CommunityHub
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Threads", "Discussions", "Moderation"].map((item) => (
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
            <Button variant="ghost">New Thread</Button>
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
            {["Home", "Threads", "Discussions", "Moderation"].map((item) => (
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
              New Thread
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
        © {new Date().getFullYear()} CommunityHub. All Rights Reserved.
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
// Thread Card Component
/////////////////////
const ThreadCard = ({ title, author, replies, tags = [] }) => (
  <Card className="p-4 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Started by {author}
        </p>
      </div>
      <div
        className={`shrink-0 inline-flex items-center rounded-lg bg-${THEME.primary}-50 px-2 py-1 text-xs font-semibold text-${THEME.primary}-700 ring-1 ring-${THEME.primary}-100`}
      >
        {replies} replies
      </div>
    </div>
    {tags.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className={`inline-flex items-center rounded-md bg-${THEME.secondary}-50 px-2 py-0.5 text-[11px] font-medium text-${THEME.secondary}-700 ring-1 ring-${THEME.secondary}-100`}
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </Card>
);

/////////////////////
// Threads Section
/////////////////////
const Threads = () => {
  const threadData = useMemo(
    () => [
      {
        title: "What's new in React 19?",
        author: "Jane D.",
        replies: 12,
        tags: ["React", "Release"],
      },
      {
        title: "Tailwind vs. CSS Modules",
        author: "Chris B.",
        replies: 8,
        tags: ["Styling", "Best Practices"],
      },
      {
        title: "Best Practices for Community Moderation",
        author: "Alex P.",
        replies: 20,
        tags: ["Moderation", "Guidelines"],
      },
      {
        title: "How do you structure large scale React apps?",
        author: "Maria G.",
        replies: 15,
        tags: ["Architecture", "Patterns"],
      },
    ],
    []
  );

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Latest Threads
        </h2>
        <Button variant="primary" className="hidden sm:inline-flex">
          Start Thread
        </Button>
      </div>
      <div className="space-y-3">
        {threadData.map((t, idx) => (
          <ThreadCard
            key={idx}
            title={t.title}
            author={t.author}
            replies={t.replies}
            tags={t.tags}
          />
        ))}
      </div>
      <div className="mt-4 sm:hidden">
        <Button variant="primary" className="w-full">
          Start Thread
        </Button>
      </div>
    </section>
  );
};

/////////////////////
// Discussion Component
/////////////////////
const Discussion = ({ user, comment, time = "now" }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/90 p-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="./image.jpeg"
          alt={user}
          className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"
        />
        <h4 className="font-semibold text-sm text-slate-900">{user}</h4>
      </div>
      <span className="text-[11px] text-slate-500">{time}</span>
    </div>
    <p className="text-slate-700 text-sm mt-2">{comment}</p>
  </div>
);

/////////////////////
// Discussions Section
/////////////////////
const Discussions = () => {
  const discussions = useMemo(
    () => [
      {
        user: "Sam W.",
        comment:
          "I think React 19 hooks are going to simplify our state management.",
        time: "2h",
      },
      {
        user: "Laura H.",
        comment: "Using Tailwind has sped up my workflow massively.",
        time: "5h",
      },
      {
        user: "Michael R.",
        comment: "Moderation needs both clear rules and active admins.",
        time: "1d",
      },
    ],
    []
  );

  return (
    <section className="w-full mt-6">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">
        Recent Discussions
      </h2>
      <div className="space-y-3">
        {discussions.map((d, idx) => (
          <Discussion
            key={idx}
            user={d.user}
            comment={d.comment}
            time={d.time}
          />
        ))}
      </div>
    </section>
  );
};

/////////////////////
// Moderation Section
/////////////////////
const ModerationPanel = () => (
  <Card className="p-4 h-fit">
    <h3 className="text-xl font-semibold text-slate-900 mb-3">
      Moderation Panel
    </h3>
    <ul className="space-y-3 text-sm text-slate-700">
      <li className="flex justify-between items-center">
        <span>Flagged Posts</span>
        <Button variant="danger" className="px-2 py-1 text-xs">
          Review
        </Button>
      </li>
      <li className="flex justify-between items-center">
        <span>User Reports</span>
        <Button variant="warn" className="px-2 py-1 text-xs">
          Check
        </Button>
      </li>
      <li className="flex justify-between items-center">
        <span>Banned Users</span>
        <Button variant="neutral" className="px-2 py-1 text-xs">
          Manage
        </Button>
      </li>
      <li className="flex justify-between items-center">
        <span>Community Guidelines</span>
        <Button variant="primary" className="px-2 py-1 text-xs">
          Edit
        </Button>
      </li>
    </ul>
    {/* Quick actions */}
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Button variant="secondary" className="w-full">
        Audit Log
      </Button>
      <Button variant="ghost" className="w-full">
        Settings
      </Button>
    </div>
  </Card>
);

/////////////////////
// Compose Widget (optional helper)
/////////////////////
const Composer = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const post = () => {
    const t = text.trim();
    if (!t) return;
    onSubmit(t);
    setText("");
  };
  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <img
          src="./image.jpeg"
          alt="You"
          className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
        />
        <div className="flex-1">
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share an update with the community..."
            className={`w-full resize-y rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
          />
          <div className="mt-3 flex items-center justify-end gap-2">
            <Button variant="secondary">Preview</Button>
            <Button variant="primary" onClick={post}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

/////////////////////
// Main App Component
/////////////////////
const App = () => {
  const [posts, setPosts] = useState([
    {
      user: "Taylor S.",
      comment: "Welcome everyone! Excited to see this forum grow.",
      time: "3h",
    },
  ]);

  const addPost = (text) => {
    setPosts((prev) => [
      { user: "You", comment: text, time: "Just now" },
      ...prev,
    ]);
  };

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
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left/Main column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Composer */}
            <Composer onSubmit={addPost} />

            {/* Threads */}
            <Threads />

            {/* Discussions */}
            <section className="w-full mt-2">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Recent Discussions
              </h2>
              <div className="space-y-3">
                {posts.map((p, idx) => (
                  <Discussion
                    key={idx}
                    user={p.user}
                    comment={p.comment}
                    time={p.time}
                  />
                ))}
                {/* Extra sample discussions */}
                <Discussion
                  user="Laura H."
                  comment="Using Tailwind has sped up my workflow massively."
                  time="5h"
                />
                <Discussion
                  user="Michael R."
                  comment="Moderation needs both clear rules and active admins."
                  time="1d"
                />
              </div>
            </section>
          </div>

          {/* Right/Sidebar */}
          <aside className="lg:col-span-4">
            <ModerationPanel />
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
