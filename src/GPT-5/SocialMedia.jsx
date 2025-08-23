// App.jsx
// Senior Frontend Engineer approach: Single-file React app with Tailwind CSS.
// - Social media website with Header, Profiles, Posts (Feed), Messaging, and Footer.
// - All components defined and consumed within this file; no backend or database code.
// - Uses './image.jpeg' for all images.
// - Responsive layout with mobile-first grid and accessible interactions.

import React, { useMemo, useState, useEffect, useRef } from "react";

// Theme tokens for consistent Tailwind utility composition
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  success: "emerald",
  info: "sky",
  neutral: "slate",
};

// Utility: Reusable Button with variants
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ariaLabel,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";
  const size = "px-4 py-2 text-sm";
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

// Utility: Card shell with soft glassmorphism
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-${THEME.neutral}-200/70 bg-white/90 shadow-[0_6px_24px_-8px_rgba(2,6,23,0.15)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

// Header with search, actions, and sticky glass background
const Header = ({ onToggleCompose }) => {
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
              SocialSphere
            </span>
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search posts, people, and messages"
                className={`w-full rounded-xl border border-slate-200 bg-white/80 pl-11 pr-4 py-2 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
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

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={onToggleCompose}>
              Create
            </Button>
            <Button variant="secondary">Settings</Button>
            <button
              aria-label="Menu"
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

          {/* Mobile create */}
          <div className="md:hidden">
            <Button variant="primary" onClick={onToggleCompose}>
              Post
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`w-full rounded-xl border border-slate-200 bg-white/80 pl-11 pr-4 py-2 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
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
          <div className="flex items-center gap-2">
            <Button
              className="flex-1"
              variant="ghost"
              onClick={onToggleCompose}
            >
              Create
            </Button>
            <Button className="flex-1" variant="secondary">
              Settings
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Profile Sidebar with stats and quick actions
const ProfileSidebar = () => {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <img
            src="./image.jpeg"
            alt="Profile"
            className="h-16 w-16 rounded-2xl object-cover ring-1 ring-slate-200"
          />
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Alex Johnson
            </h2>
            <p className="text-sm text-slate-600">Frontend Engineer</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 text-center">
          {[
            { label: "Posts", value: "182" },
            { label: "Followers", value: "12.4k" },
            { label: "Following", value: "890" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-slate-900 font-semibold">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          <Button className="flex-1" variant="primary">
            Follow
          </Button>
          <Button className="flex-1" variant="secondary">
            Message
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold text-slate-900">
          Suggested Profiles
        </h3>
        <ul className="mt-4 space-y-3">
          {["Taylor Smith", "Jordan Lee", "Casey Nguyen"].map((n) => (
            <li key={n} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="./image.jpeg"
                  alt={n}
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                />
                <div>
                  <p className="text-sm font-medium text-slate-900">{n}</p>
                  <p className="text-xs text-slate-500">Suggested for you</p>
                </div>
              </div>
              <Button
                variant="subtle"
                className={`!bg-${THEME.primary}-50 !text-${THEME.primary}-700 hover:!bg-${THEME.primary}-100`}
              >
                Follow
              </Button>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold text-slate-900">Trends</h3>
        <div className="mt-3 space-y-2">
          {["#React19", "#TailwindCSS", "#WebAccessibility", "#DX"].map((t) => (
            <a
              key={t}
              href="#"
              className="block text-sm text-slate-700 hover:text-indigo-700"
            >
              {t}
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Composer component
const Composer = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [privacy, setPrivacy] = useState("Public");

  const handlePost = () => {
    const content = text.trim();
    if (!content) return;
    onSubmit({ content, privacy });
    setText("");
    setPrivacy("Public");
  };

  return (
    <Card className="p-4 sm:p-6">
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
            placeholder="Share something with your network..."
            className={`w-full resize-y rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
          />
          <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <IconButton label="Image">
                <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10M4 19h16M4 15l4-4 4 4 4-4 4 4" />
              </IconButton>
              <IconButton label="GIF">
                <path d="M4 12a8 8 0 1016 0 8 8 0 10-16 0zm8-4v8m-4-4h8" />
              </IconButton>
              <IconButton label="Poll">
                <path d="M6 20V10m6 10V4m6 16v-6" />
              </IconButton>
              <select
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
                className={`rounded-lg border border-slate-200 bg-white/90 px-2 py-1 text-xs text-${THEME.neutral}-700`}
              >
                {["Public", "Followers", "Only me"].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <Button variant="primary" onClick={handlePost}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Small Icon button used in Composer and PostActions
const IconButton = ({ children, onClick, label }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-${THEME.neutral}-600 hover:text-${THEME.primary}-700 hover:bg-${THEME.neutral}-50`}
  >
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
    >
      {children}
    </svg>
  </button>
);

// Single Post component
const Post = ({ post, onLike, onComment }) => {
  return (
    <Card className="p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <img
          src="./image.jpeg"
          alt={post.user}
          className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {post.user}
              </p>
              <p className="text-xs text-slate-500">
                {post.time} • {post.privacy}
              </p>
            </div>
            <button
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              aria-label="More"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-slate-800">{post.content}</p>

          {post.image && (
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
              <img
                src="./image.jpeg"
                alt="Post attachment"
                className="w-full object-cover aspect-video"
              />
            </div>
          )}

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
            <button
              onClick={() => onLike(post.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-${THEME.neutral}-100`}
            >
              <svg
                className={`h-5 w-5 ${
                  post.liked ? `text-${THEME.primary}-600` : "text-slate-500"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C14.46 4.99 15.96 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>{post.likes}</span>
            </button>
            <button
              onClick={() => onComment(post.id)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100"
            >
              <svg
                className="h-5 w-5 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8-1.263 0-2.465-.213-3.563-.6L3 20l.832-3.328A7.94 7.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{post.comments.length}</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100">
              <svg
                className="h-5 w-5 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12v7a1 1 0 001 1h7M20 12V5a1 1 0 00-1-1h-7M20 12l-8 8M4 12l8-8"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>

          {/* Comments preview */}
          {post.comments.length > 0 && (
            <div className="mt-4 space-y-3">
              {post.comments.slice(0, 2).map((c) => (
                <div key={c.id} className="flex items-start gap-2">
                  <img
                    src="./image.jpeg"
                    alt={c.user}
                    className="h-7 w-7 rounded-full object-cover ring-1 ring-slate-200"
                  />
                  <div className="flex-1 rounded-xl bg-slate-50 px-3 py-2">
                    <p className="text-xs font-medium text-slate-800">
                      {c.user}
                    </p>
                    <p className="text-sm text-slate-700">{c.text}</p>
                  </div>
                </div>
              ))}
              {post.comments.length > 2 && (
                <button
                  className={`text-xs font-medium text-${THEME.primary}-700 hover:underline`}
                >
                  View {post.comments.length - 2} more comment(s)
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// Feed combines Composer + list of Posts
const Feed = ({ posts, setPosts }) => {
  const handleCreate = ({ content, privacy }) => {
    setPosts((prev) => [
      {
        id: Date.now(),
        user: "Alex Johnson",
        content,
        image: false,
        time: "Just now",
        likes: 0,
        liked: false,
        privacy,
        comments: [],
      },
      ...prev,
    ]);
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  };

  const handleComment = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: `${id}-${p.comments.length + 1}`,
                  user: "You",
                  text: "Nice!",
                },
              ],
            }
          : p
      )
    );
  };

  return (
    <div className="space-y-4">
      <Composer onSubmit={handleCreate} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
};

// Messaging List + Chat pane
const Messaging = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: "Taylor Smith", last: "Let’s sync tomorrow?", unread: 2 },
    { id: 2, name: "Jordan Lee", last: "Shipping the PR now.", unread: 0 },
    { id: 3, name: "Casey Nguyen", last: "Draft looks great!", unread: 0 },
  ]);
  const [activeId, setActiveId] = useState(1);
  const [messages, setMessages] = useState({
    1: [
      {
        id: "m1",
        from: "Taylor",
        text: "Hey! Let’s sync tomorrow?",
        time: "9:12",
      },
      { id: "m2", from: "You", text: "Sounds good. 10am?", time: "9:13" },
    ],
    2: [
      { id: "m3", from: "Jordan", text: "Shipping the PR now.", time: "12:20" },
      { id: "m4", from: "You", text: "Awesome, thanks!", time: "12:22" },
    ],
    3: [{ id: "m5", from: "Casey", text: "Draft looks great!", time: "16:47" }],
  });
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const activeConv = useMemo(
    () => conversations.find((c) => c.id === activeId),
    [conversations, activeId]
  );
  const msgs = messages[activeId] || [];

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [activeId, msgs.length]);

  const send = () => {
    const txt = input.trim();
    if (!txt) return;
    setMessages((prev) => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] || []),
        {
          id: `${activeId}-${Date.now()}`,
          from: "You",
          text: txt,
          time: "now",
        },
      ],
    }));
    setConversations((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, last: txt, unread: 0 } : c))
    );
    setInput("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Conversation list */}
      <Card className="p-4 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Messages</h3>
          <Button variant="ghost">New</Button>
        </div>
        <div className="mt-3 space-y-1">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`w-full rounded-xl px-3 py-2 text-left hover:bg-slate-50 ${
                activeId === c.id
                  ? `bg-${THEME.primary}-50 ring-1 ring-${THEME.primary}-100`
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src="./image.jpeg"
                  alt={c.name}
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-slate-900">
                      {c.name}
                    </p>
                    {c.unread > 0 && (
                      <span
                        className={`ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-${THEME.primary}-600 px-1.5 text-[10px] font-semibold text-white`}
                      >
                        {c.unread}
                      </span>
                    )}
                  </div>
                  <p className="truncate text-xs text-slate-600">{c.last}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Chat pane */}
      <Card className="p-4 lg:col-span-3 flex flex-col">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <img
            src="./image.jpeg"
            alt={activeConv?.name}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">
              {activeConv?.name}
            </p>
            <p className="text-xs text-slate-500">Active now</p>
          </div>
          <IconButton label="Call">
            <path d="M6.5 5h11A1.5 1.5 0 0119 6.5v11A1.5 1.5 0 0117.5 19h-11A1.5 1.5 0 015 17.5v-11A1.5 1.5 0 016.5 5z" />
          </IconButton>
          <IconButton label="More">
            <path d="M12 6h.01M12 12h.01M12 18h.01" />
          </IconButton>
        </div>

        <div
          ref={scrollRef}
          className="mt-3 flex-1 overflow-y-auto space-y-2 pr-1"
        >
          {msgs.map((m) => {
            const mine = m.from === "You";
            return (
              <div
                key={m.id}
                className={`flex ${mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    mine
                      ? `bg-${THEME.primary}-600 text-white`
                      : "bg-slate-50 text-slate-800 border border-slate-200"
                  }`}
                >
                  <p className="font-medium">{mine ? "You" : m.from}</p>
                  <p>{m.text}</p>
                  <p
                    className={`mt-0.5 text-[10px] ${
                      mine ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {m.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={`Message ${activeConv?.name || ""}...`}
            className={`flex-1 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
          />
          <Button variant="primary" onClick={send}>
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Footer with gradient bar
const Footer = () => (
  <footer className="mt-6 bg-white/80 backdrop-blur border-t border-slate-200/70">
    <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} SocialSphere. All rights reserved.
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

// Main App: 3-column responsive layout
function App() {
  const [showComposeHint, setShowComposeHint] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 101,
      user: "Jane Smith",
      time: "2h",
      privacy: "Public",
      content:
        "Loving the new React features and concurrent rendering improvements!",
      image: true,
      likes: 124,
      liked: false,
      comments: [
        { id: "c1", user: "Taylor", text: "Absolutely same here!" },
        { id: "c2", user: "Jordan", text: "Performance gains are impressive." },
        { id: "c3", user: "Casey", text: "Can’t wait to roll this out." },
      ],
    },
    {
      id: 102,
      user: "Alex Johnson",
      time: "5h",
      privacy: "Followers",
      content: "Exploring Tailwind CSS—shipping UI so much faster 🚀",
      image: false,
      likes: 89,
      liked: true,
      comments: [{ id: "c4", user: "Jane", text: "It’s a game changer!" }],
    },
  ]);

  const onToggleCompose = () => {
    setShowComposeHint(true);
    setTimeout(() => setShowComposeHint(false), 2000);
    const el = document.getElementById("composer-anchor");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header onToggleCompose={onToggleCompose} />

      {/* Subtle top background accents for aesthetic */}
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-r from-${THEME.primary}-100/60 via-${THEME.secondary}-100/60 to-${THEME.accent}-100/60 blur-2xl`}
        />
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Sidebar: Profile */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <ProfileSidebar />
        </aside>

        {/* Center Feed */}
        <section className="lg:col-span-6 order-1 lg:order-2 space-y-4">
          <div id="composer-anchor" />
          {showComposeHint && (
            <div
              className={`rounded-xl border border-${THEME.primary}-200 bg-${THEME.primary}-50 px-4 py-2 text-${THEME.primary}-800 text-sm`}
            >
              Composer is ready below. Share something!
            </div>
          )}
          <Feed posts={posts} setPosts={setPosts} />
        </section>

        {/* Right Sidebar: Messaging */}
        <aside className="lg:col-span-3 order-3">
          <Messaging />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
