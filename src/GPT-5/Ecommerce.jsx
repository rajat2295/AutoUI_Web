// App.jsx
// Senior Frontend Engineer approach: Single-file React + Tailwind e-commerce UI.
// - All components defined and consumed in this file.
// - Responsive, reusable, accessible components; no backend or database code.
// - Uses './image.jpeg' for all images.
// - Includes React and ReactDOM imports and render call at bottom (per instruction).
// - Features: Product catalog grid, product details modal, cart drawer, checkout/payment (mock), header, footer.

import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

// ---- Theme tokens (for quick palette swaps in Tailwind class strings) ----
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

// ---- Mock Catalog Data (static, no backend) ----
const CATEGORIES = ["All", "Accessories", "Apparel", "Home", "Gadgets"];
const MOCK_PRODUCTS = [
  {
    id: "p-1",
    name: "Minimalist Backpack",
    price: 89.99,
    rating: 4.6,
    category: "Accessories",
    image: "./image.jpeg",
    badge: "Best Seller",
    description:
      "Durable, lightweight backpack ideal for daily carry and travel.",
    colors: ["Black", "Navy", "Olive"],
  },
  {
    id: "p-2",
    name: "Classic Tee",
    price: 24.5,
    rating: 4.4,
    category: "Apparel",
    image: "./image.jpeg",
    badge: "New",
    description: "Soft cotton tee with a timeless fit and premium feel.",
    colors: ["White", "Charcoal", "Sky"],
  },
  {
    id: "p-3",
    name: "Ceramic Mug",
    price: 16,
    rating: 4.8,
    category: "Home",
    image: "./image.jpeg",
    badge: "Eco",
    description: "Hand-finished mug with a comfortable handle and matte glaze.",
    colors: ["Cream", "Forest", "Cobalt"],
  },
  {
    id: "p-4",
    name: "Wireless Earbuds",
    price: 129,
    rating: 4.2,
    category: "Gadgets",
    image: "./image.jpeg",
    badge: "Limited",
    description:
      "Noise-isolating earbuds with all-day battery and quick charge.",
    colors: ["White", "Black"],
  },
  {
    id: "p-5",
    name: "Linen Throw",
    price: 59,
    rating: 4.7,
    category: "Home",
    image: "./image.jpeg",
    badge: "Trending",
    description:
      "Breathable throw with a soft, textured finish for any season.",
    colors: ["Sand", "Sage"],
  },
  {
    id: "p-6",
    name: "Canvas Tote",
    price: 29.99,
    rating: 4.5,
    category: "Accessories",
    image: "./image.jpeg",
    badge: null,
    description: "Everyday tote with reinforced straps and interior pocket.",
    colors: ["Natural", "Ink"],
  },
];

// ---- Utility components ----
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

const Badge = ({ color = THEME.info, children }) => (
  <span
    className={`inline-flex items-center rounded-full border border-${color}-200 bg-${color}-50 px-2.5 py-1 text-xs font-semibold text-${color}-700`}
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
    danger: `bg-${THEME.danger}-600 text-white hover:bg-${THEME.danger}-700 focus-visible:ring-${THEME.danger}-600`,
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

const QuantityInput = ({ value, onChange, min = 1, max = 99 }) => (
  <div className="inline-flex items-center rounded-lg border border-slate-200 overflow-hidden">
    <button
      type="button"
      className="px-3 py-2 text-slate-700 hover:bg-slate-50"
      onClick={() => onChange(Math.max(min, value - 1))}
      aria-label="Decrease quantity"
    >
      −
    </button>
    <input
      className="w-12 text-center px-2 py-2 outline-none text-slate-900"
      type="number"
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        const n = Number(e.target.value);
        if (!Number.isNaN(n)) onChange(Math.max(min, Math.min(max, n)));
      }}
      aria-label="Quantity"
    />
    <button
      type="button"
      className="px-3 py-2 text-slate-700 hover:bg-slate-50"
      onClick={() => onChange(Math.min(max, value + 1))}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
);

const Price = ({ value, className = "" }) => (
  <span className={`font-semibold text-${THEME.neutral}-900 ${className}`}>
    ${value.toFixed(2)}
  </span>
);

// ---- Header & Navigation with Cart ----
const Header = ({ onOpenCart, cartCount }) => {
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
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`text-xl sm:text-2xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
            >
              Shoply
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#catalog"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Catalog
            </a>
            <a
              href="#payments"
              className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 text-sm font-medium`}
            >
              Payments
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="secondary" href="#payments">
              Payment Options
            </Button>
            <button
              onClick={onOpenCart}
              className={`relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-${THEME.neutral}-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
            >
              <span className="mr-2">Cart</span>
              <svg
                className={`h-5 w-5 text-${THEME.primary}-600`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m5-9v9m6-9l2 9"
                />
              </svg>
              {cartCount > 0 && (
                <span
                  className={`absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-${THEME.danger}-600 px-1.5 text-[11px] font-bold leading-none text-white`}
                >
                  {cartCount}
                </span>
              )}
            </button>
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
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <nav className="flex flex-col gap-2">
            <a
              href="#catalog"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Catalog
            </a>
            <a
              href="#payments"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100`}
            >
              Payments
            </a>
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                onOpenCart();
              }}
              variant="primary"
            >
              Open Cart
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// ---- Hero ----
const Hero = () => (
  <Section className="relative pt-8 sm:pt-12">
    <div className="absolute inset-0 -z-10">
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-60`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[70%] max-w-3xl rounded-full bg-gradient-to-r from-${THEME.info}-200 via-${THEME.success}-200 to-${THEME.warn}-200 blur-3xl opacity-50`}
      />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <Badge color={THEME.info}>Free shipping on orders over $75</Badge>
        <h1
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
        >
          Discover products made to last.
        </h1>
        <p
          className={`mt-4 sm:mt-6 text-${THEME.neutral}-600 text-base sm:text-lg max-w-2xl`}
        >
          Elevate everyday essentials with thoughtful design. Shop quality goods
          across accessories, apparel, home, and tech.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href="#catalog" variant="primary">
            Shop Now
          </Button>
          <Button href="#payments" variant="secondary">
            Payment Options
          </Button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-${THEME.primary}-100 via-white to-${THEME.secondary}-100 blur-2xl opacity-90`}
        />
        <img
          src="./image.jpeg"
          alt="Store showcase"
          className="w-full rounded-2xl border border-slate-200 shadow-xl object-cover aspect-video"
        />
      </div>
    </div>
  </Section>
);

// ---- Catalog: Filters + Product Grid + Product Card + Quick View ----
const Catalog = ({ onAddToCart, onQuickView }) => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = [...MOCK_PRODUCTS];
    if (category !== "All")
      items = items.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // featured -> original
    }
    return items;
  }, [category, sort, search]);

  return (
    <Section id="catalog" className="bg-white">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
          >
            Catalog
          </h2>
          <p className={`mt-1 text-${THEME.neutral}-600`}>
            Browse curated products across categories.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="col-span-2 sm:col-span-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-${THEME.neutral}-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={`rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-${THEME.neutral}-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low-High</option>
            <option value="price-desc">Price: High-Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={() => onAddToCart(p, 1)}
            onQuickView={() => onQuickView(p)}
          />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div
          className={`mt-12 rounded-2xl border border-slate-200 bg-${THEME.info}-50 px-6 py-8 text-center text-${THEME.neutral}-700`}
        >
          No products found. Try adjusting filters or search terms.
        </div>
      )}
    </Section>
  );
};

const ProductCard = ({ product, onAdd, onQuickView }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-[4/3] w-full object-cover"
      />
      {product.badge && (
        <div className="absolute left-3 top-3">
          <Badge color={THEME.success}>{product.badge}</Badge>
        </div>
      )}
      <button
        onClick={onQuickView}
        className={`absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-${THEME.neutral}-800 ring-1 ring-slate-200 backdrop-blur hover:bg-white`}
      >
        Quick View
      </button>
    </div>
    <div className="p-4">
      <h3
        className={`line-clamp-1 text-base font-semibold text-${THEME.neutral}-900`}
      >
        {product.name}
      </h3>
      <div className="mt-1 flex items-center gap-2">
        <Price value={product.price} />
        <span className={`text-xs text-${THEME.neutral}-500`}>·</span>
        <Rating value={product.rating} />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className={`text-xs font-medium text-${THEME.neutral}-500`}>
          {product.category}
        </span>
        <Button
          onClick={onAdd}
          variant="primary"
          className="!px-3 !py-2 text-xs"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  </div>
);

const Rating = ({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <svg
            key={i}
            className={`h-4 w-4 ${
              filled ? `text-${THEME.warn}-500` : "text-slate-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        );
      })}
      <span className={`ml-1 text-xs text-${THEME.neutral}-600`}>
        {value.toFixed(1)}
      </span>
    </span>
  );
};

// ---- Product Modal (Quick View / Details) ----
const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product?.colors?.[0] || "");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !!product);
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 md:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl border border-slate-200 object-cover aspect-square"
            />
          </div>
          <div className="p-4 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-xl font-bold text-${THEME.neutral}-900`}>
                {product.name}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Price value={product.price} />
              <span className="text-slate-300">•</span>
              <Rating value={product.rating} />
            </div>
            <p className={`mt-3 text-${THEME.neutral}-600`}>
              {product.description}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="mt-4">
                <p className={`text-sm font-medium text-${THEME.neutral}-800`}>
                  Color
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`rounded-lg border px-3 py-1.5 text-sm ${
                        color === c
                          ? `border-${THEME.primary}-600 bg-${THEME.primary}-50 text-${THEME.primary}-700`
                          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex items-center justify-between">
              <QuantityInput value={qty} onChange={setQty} />
              <Button
                variant="primary"
                onClick={() => {
                  onAddToCart(product, qty, color);
                  onClose();
                }}
              >
                Add to Cart
              </Button>
            </div>
            <p className={`mt-3 text-xs text-${THEME.neutral}-500`}>
              Ships in 2–3 business days. 30-day returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Cart Drawer ----
const CartDrawer = ({
  open,
  items,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onCheckout,
}) => {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 6.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div
      className={`fixed inset-0 z-[70] ${open ? "" : "pointer-events-none"}`}
    >
      <div
        className={`absolute inset-0 bg-slate-900/50 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h3 className={`text-lg font-semibold text-${THEME.neutral}-900`}>
              Your Cart
            </h3>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 && (
              <div
                className={`rounded-xl border border-slate-200 bg-${THEME.info}-50 p-4 text-${THEME.neutral}-700`}
              >
                Cart is empty. Start shopping from the catalog.
              </div>
            )}
            <ul className="space-y-4">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <img
                    src="./image.jpeg"
                    alt={it.name}
                    className="h-20 w-20 rounded-lg border border-slate-200 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          className={`truncate text-sm font-semibold text-${THEME.neutral}-900`}
                        >
                          {it.name}
                        </p>
                        {it.color && (
                          <p className="text-xs text-slate-500">
                            Color: {it.color}
                          </p>
                        )}
                        <Price value={it.price} className="text-sm" />
                      </div>
                      <button
                        onClick={() => onRemove(it.id)}
                        className="rounded-md px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantityInput
                        value={it.qty}
                        onChange={(v) =>
                          v > it.qty ? onIncrement(it.id) : onDecrement(it.id)
                        }
                      />
                      <span className={`text-sm text-${THEME.neutral}-700`}>
                        Item total: ${(it.price * it.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="border-t border-slate-200 p-5">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="font-medium text-slate-900">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tax</span>
                <span className="font-medium text-slate-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="font-bold text-slate-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              className="mt-4 w-full"
              variant="primary"
              onClick={onCheckout}
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </Button>
            <Button
              className="mt-2 w-full"
              variant="secondary"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

// ---- Payments / Checkout (Mock UI Only) ----
const Payments = ({ onPlaceOrder, cartItems }) => {
  const [step, setStep] = useState(1);
  const [ship, setShip] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [pay, setPay] = useState({ card: "", name: "", expiry: "", cvv: "" });
  const [agreed, setAgreed] = useState(false);

  const subtotal = cartItems.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 6.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const canNextFromShipping =
    ship.name && ship.address && ship.city && ship.zip;
  const canPlace =
    agreed &&
    pay.card &&
    pay.name &&
    pay.expiry &&
    pay.cvv &&
    cartItems.length > 0;

  return (
    <Section id="payments" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Steps */}
        <div className="lg:col-span-2">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-${THEME.neutral}-900`}
          >
            Checkout
          </h2>
          <p className={`mt-1 text-${THEME.neutral}-600`}>
            Secure payment. No backend calls in this demo.
          </p>

          {/* Stepper */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Shipping", "Payment", "Review"].map((label, i) => {
              const s = i + 1;
              const active = step === s;
              const done = step > s;
              return (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${
                    active
                      ? `border-${THEME.primary}-600 bg-${THEME.primary}-50`
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      done
                        ? `bg-${THEME.success}-600 text-white`
                        : active
                        ? `bg-${THEME.primary}-600 text-white`
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {s}
                  </span>
                  <span
                    className={`text-sm ${
                      active ? `text-${THEME.primary}-700` : "text-slate-700"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step content */}
          <div className="mt-6 space-y-6">
            {step === 1 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3
                  className={`text-lg font-semibold text-${THEME.neutral}-900`}
                >
                  Shipping Information
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Full name"
                    name="ship-name"
                    value={ship.name}
                    onChange={(e) => setShip({ ...ship, name: e.target.value })}
                  />
                  <Field
                    label="Address"
                    name="ship-address"
                    value={ship.address}
                    onChange={(e) =>
                      setShip({ ...ship, address: e.target.value })
                    }
                  />
                  <Field
                    label="City"
                    name="ship-city"
                    value={ship.city}
                    onChange={(e) => setShip({ ...ship, city: e.target.value })}
                  />
                  <Field
                    label="ZIP/Postal Code"
                    name="ship-zip"
                    value={ship.zip}
                    onChange={(e) => setShip({ ...ship, zip: e.target.value })}
                  />
                </div>
                <div className="mt-4 flex items-center justify-end gap-3">
                  <Button
                    variant="primary"
                    onClick={() => setStep(2)}
                    disabled={!canNextFromShipping}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3
                  className={`text-lg font-semibold text-${THEME.neutral}-900`}
                >
                  Payment Details
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Card Number"
                    name="card"
                    value={pay.card}
                    onChange={(e) => setPay({ ...pay, card: e.target.value })}
                    placeholder="4242 4242 4242 4242"
                  />
                  <Field
                    label="Name on Card"
                    name="card-name"
                    value={pay.name}
                    onChange={(e) => setPay({ ...pay, name: e.target.value })}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Expiry"
                    name="card-expiry"
                    value={pay.expiry}
                    onChange={(e) => setPay({ ...pay, expiry: e.target.value })}
                    placeholder="MM/YY"
                  />
                  <Field
                    label="CVV"
                    name="card-cvv"
                    value={pay.cvv}
                    onChange={(e) => setPay({ ...pay, cvv: e.target.value })}
                    placeholder="123"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setStep(3)}
                    disabled={!pay.card || !pay.name || !pay.expiry || !pay.cvv}
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3
                  className={`text-lg font-semibold text-${THEME.neutral}-900`}
                >
                  Review & Confirm
                </h3>
                <p className={`mt-1 text-sm text-${THEME.neutral}-600`}>
                  Verify details before placing an order (demo only).
                </p>
                <ul className="mt-4 divide-y divide-slate-100">
                  {cartItems.map((it) => (
                    <li key={it.id} className="flex items-center gap-3 py-3">
                      <img
                        src="./image.jpeg"
                        alt=""
                        className="h-14 w-14 rounded-lg border border-slate-200 object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {it.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          Qty: {it.qty} {it.color ? `• ${it.color}` : ""}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        ${(it.price * it.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <label className="mt-4 flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span className={`text-sm text-${THEME.neutral}-700`}>
                    I agree to the terms and confirm this is a demo checkout (no
                    real payment).
                  </span>
                </label>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="secondary" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => onPlaceOrder({ ship, pay })}
                    disabled={!canPlace}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className={`text-lg font-semibold text-${THEME.neutral}-900`}>
              Order Summary
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="font-medium text-slate-900">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tax</span>
                <span className="font-medium text-slate-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="font-bold text-slate-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <div
              className={`mt-4 rounded-xl border border-${THEME.success}-200 bg-${THEME.success}-50 p-3 text-sm text-${THEME.success}-800`}
            >
              Free shipping on $75+ orders automatically applied.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// ---- Footer ----
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
              Shoply
            </span>
          </a>
          <p className={`mt-4 max-w-lg text-${THEME.neutral}-600`}>
            Quality essentials with thoughtful design. Built with React and
            Tailwind.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Shop
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#catalog"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Catalog
              </a>
            </li>
            <li>
              <a
                href="#payments"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Payments
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Support
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Returns
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className={`text-sm text-${THEME.neutral}-500`}>
          © {new Date().getFullYear()} Shoply. All rights reserved.
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

// ---- Generic Field (reused) ----
const Field = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <div className="col-span-1">
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
      className={`mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
    />
  </div>
);

// ---- App Container ----
const App = () => {
  // Cart: { id, name, price, qty, color? }
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(null);

  const handleAddToCart = (product, qty = 1, color = "") => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.color === color
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.color === color
            ? { ...i, qty: Math.min(99, i.qty + qty) }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          qty,
          color,
        },
      ];
    });
  };

  const increment = (id) =>
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.min(99, i.qty + 1) } : i
      )
    );
  const decrement = (id) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
    );
  const remove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const onPlaceOrder = () => {
    // Demo only: "place" order locally
    setOrderPlaced({
      id: "ORDER-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      at: new Date().toLocaleString(),
      items: cart,
    });
    setCart([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => setOrderPlaced(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      {/* Order toast */}
      {orderPlaced && (
        <div className="fixed inset-x-0 top-3 z-[80] flex justify-center px-4">
          <div
            className={`max-w-md w-full rounded-xl border border-${THEME.success}-200 bg-${THEME.success}-50 px-4 py-3 text-${THEME.success}-900 shadow-lg`}
          >
            <p className="font-semibold">Order placed!</p>
            <p className="text-sm">
              Reference: {orderPlaced.id} • {orderPlaced.at}
            </p>
          </div>
        </div>
      )}

      <Header onOpenCart={() => setDrawerOpen(true)} cartCount={cartCount} />
      <Hero />
      <Catalog
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
          setDrawerOpen(true);
        }}
        onQuickView={(p) => setModalProduct(p)}
      />
      <Payments onPlaceOrder={onPlaceOrder} cartItems={cart} />
      <Footer />

      <CartDrawer
        open={drawerOpen}
        items={cart}
        onClose={() => setDrawerOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
        onCheckout={() => {
          setDrawerOpen(false);
          document
            .getElementById("payments")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

// Render the App (per instruction)
// Note: In React 18+, prefer createRoot from 'react-dom/client'. Kept ReactDOM.render for this task scope.
export default App;
