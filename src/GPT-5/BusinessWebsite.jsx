// // App.jsx
// // Senior Frontend Engineer approach: Single-file React app with Tailwind CSS classes inline.
// // - All components are defined and consumed within this file.
// // - Responsive, accessible, and reusable UI with semantic HTML.
// // - Uses './image.jpeg' as the image source as requested.
// // - Includes React and ReactDOM imports and render call at bottom.
// // - No backend/database code; purely frontend.

// // Imports
// import React, { useState, useMemo } from "react";
// import ReactDOM from "react-dom"; // Note: In React 18+, prefer createRoot from 'react-dom/client'. ReactDOM.render is used here per instructions.

// // Shared design tokens (JS variables for easy reuse within Tailwind utility composition)
// const COLORS = {
//   primary: "indigo",
//   accent: "violet",
//   dark: "slate",
// };

// const NAV_LINKS = [
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#team", label: "Team" },
//   { href: "#contact", label: "Contact" },
// ];

// // Utility components

// // Section wrapper for consistent spacing and max-width
// const Section = ({ id, className = "", children }) => (
//   <section
//     id={id}
//     className={`w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ${className}`}
//   >
//     <div className="mx-auto max-w-7xl">{children}</div>
//   </section>
// );

// // Section header with title and optional subtitle
// const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }) => {
//   const alignMap = {
//     left: "text-left",
//     center: "text-center",
//     right: "text-right",
//   };
//   return (
//     <div className={`mb-10 sm:mb-12 ${alignMap[align] || "text-center"}`}>
//       {eyebrow && (
//         <p
//           className={`uppercase tracking-widest text-${COLORS.accent}-500 font-semibold text-xs sm:text-sm`}
//         >
//           {eyebrow}
//         </p>
//       )}
//       <h2
//         className={`mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-${COLORS.dark}-900`}
//       >
//         {title}
//       </h2>
//       {subtitle && (
//         <p
//           className={`mt-4 text-${COLORS.dark}-600 max-w-3xl ${
//             align !== "center" ? "" : "mx-auto"
//           }`}
//         >
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// };

// // Button with variants and full accessibility
// const Button = ({
//   children,
//   href = "#",
//   variant = "primary",
//   className = "",
//   onClick,
//   type = "button",
// }) => {
//   const base =
//     "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const size = "px-5 py-3 text-sm sm:text-base";
//   const variants = {
//     primary: `bg-${COLORS.primary}-600 text-white hover:bg-${COLORS.primary}-700 focus:ring-${COLORS.primary}-600`,
//     secondary: `bg-white text-${COLORS.dark}-900 border border-${COLORS.dark}-200 hover:bg-${COLORS.dark}-50 focus:ring-${COLORS.primary}-600`,
//     ghost: `bg-transparent text-${COLORS.primary}-700 hover:bg-${COLORS.primary}-50 focus:ring-${COLORS.primary}-600`,
//   };
//   const cls = `${base} ${size} ${variants[variant]} ${className}`;
//   return href ? (
//     <a href={href} className={cls} onClick={onClick}>
//       {children}
//     </a>
//   ) : (
//     <button type={type} className={cls} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// // Card container
// const Card = ({ className = "", children }) => (
//   <div
//     className={`rounded-2xl border border-slate-200/70 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
//   >
//     {children}
//   </div>
// );

// // Header and navigation
// const Header = () => {
//   const [open, setOpen] = useState(false);

//   // Lock body scroll when mobile nav is open
//   React.useEffect(() => {
//     if (open) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [open]);

//   return (
//     <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/75 border-b border-slate-200">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 sm:h-20 items-center justify-between">
//           {/* Brand */}
//           <a href="#" className="flex items-center gap-3">
//             <img
//               src="./image.jpeg"
//               alt="Brand Logo"
//               className="h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200"
//             />
//             <span
//               className={`text-xl sm:text-2xl font-extrabold tracking-tight text-${COLORS.dark}-900`}
//             >
//               Acme Business
//             </span>
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-6">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className={`text-${COLORS.dark}-700 hover:text-${COLORS.primary}-700 transition-colors text-sm font-medium`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           {/* CTA (desktop) */}
//           <div className="hidden md:flex items-center gap-3">
//             <Button href="#contact" variant="primary">
//               Get a Quote
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             aria-label="Toggle navigation menu"
//             className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 text-${COLORS.dark}-700 hover:bg-${COLORS.dark}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${COLORS.primary}-600`}
//             onClick={() => setOpen((v) => !v)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               {open ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav Drawer */}
//       <div
//         className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
//           open ? "max-h-96" : "max-h-0"
//         }`}
//       >
//         <div className="px-4 sm:px-6 lg:px-8 pb-6">
//           <nav className="flex flex-col gap-3">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className={`rounded-lg px-4 py-3 text-${COLORS.dark}-800 hover:bg-${COLORS.dark}-100 transition-colors`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//           <div className="mt-4">
//             <Button href="#contact" variant="primary" className="w-full">
//               Get a Quote
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Hero section
// const Hero = () => (
//   <Section className="pt-10 sm:pt-12 lg:pt-16">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//       <div>
//         <p
//           className={`inline-flex items-center gap-2 rounded-full border border-${COLORS.primary}-200 bg-${COLORS.primary}-50 text-${COLORS.primary}-700 px-3 py-1 text-xs font-semibold`}
//         >
//           Trusted by modern businesses
//         </p>
//         <h1
//           className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-${COLORS.dark}-900`}
//         >
//           Build a better digital presence.
//         </h1>
//         <p
//           className={`mt-4 sm:mt-6 text-${COLORS.dark}-600 text-base sm:text-lg max-w-2xl`}
//         >
//           We design and develop high-performance web experiences using React and
//           Tailwind. From concept to launch, our team delivers results that
//           scale.
//         </p>
//         <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
//           <Button href="#services" variant="primary">
//             Explore Services
//           </Button>
//           <Button href="#contact" variant="secondary">
//             Talk to Us
//           </Button>
//         </div>
//         <div className="mt-8 flex items-center gap-6">
//           <div className="flex -space-x-3">
//             {/* Sample avatar cluster */}
//             {[0, 1, 2].map((i) => (
//               <img
//                 key={i}
//                 src="./image.jpeg"
//                 alt="Happy client"
//                 className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
//               />
//             ))}
//           </div>
//           <p className={`text-sm text-${COLORS.dark}-600`}>
//             100% client satisfaction • Fast turnaround • Transparent pricing
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <div
//           className={`absolute -inset-4 -z-10 bg-gradient-to-tr from-${COLORS.primary}-100 via-white to-${COLORS.accent}-100 rounded-3xl blur-2xl opacity-80`}
//         />
//         <img
//           src="./image.jpeg"
//           alt="Business illustration"
//           className="w-full rounded-2xl border border-slate-200 shadow-lg object-cover aspect-video"
//         />
//       </div>
//     </div>
//   </Section>
// );

// // About section
// const About = () => (
//   <Section id="about" className="bg-slate-50/60 rounded-[2.5rem]">
//     <SectionHeader
//       eyebrow="About"
//       title="We turn ideas into delightful products"
//       subtitle="Our multidisciplinary team blends strategy, design, and engineering to deliver outcomes, not just output."
//     />
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//       {[
//         {
//           title: "Strategy-First",
//           desc: "We align every deliverable with clear business goals, ensuring measurable impact.",
//           icon: (
//             <svg
//               className={`h-6 w-6 text-${COLORS.primary}-600`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6l4 2"
//               />
//             </svg>
//           ),
//         },
//         {
//           title: "Quality at Speed",
//           desc: "Lean processes and proven tooling enable rapid iteration without sacrificing quality.",
//           icon: (
//             <svg
//               className={`h-6 w-6 text-${COLORS.primary}-600`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           ),
//         },
//         {
//           title: "Long-Term Partners",
//           desc: "We support growth beyond launch, with maintainable code and clear documentation.",
//           icon: (
//             <svg
//               className={`h-6 w-6 text-${COLORS.primary}-600`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8c-1.657 0-3 1.79-3 4s1.343 4 3 4 3-1.79 3-4-1.343-4-3-4z"
//               />
//             </svg>
//           ),
//         },
//       ].map((item, idx) => (
//         <Card key={idx} className="p-6">
//           <div className="flex items-start gap-4">
//             <div
//               className={`rounded-xl bg-${COLORS.primary}-50 p-3 ring-1 ring-${COLORS.primary}-100`}
//             >
//               {item.icon}
//             </div>
//             <div>
//               <h3 className={`text-lg font-semibold text-${COLORS.dark}-900`}>
//                 {item.title}
//               </h3>
//               <p className={`mt-2 text-${COLORS.dark}-600`}>{item.desc}</p>
//             </div>
//           </div>
//         </Card>
//       ))}
//     </div>
//   </Section>
// );

// // Services section
// const Services = () => {
//   const services = useMemo(
//     () => [
//       {
//         title: "Product Design",
//         desc: "User research, UX/UI, prototyping, and design systems built for scale.",
//         features: ["Design Systems", "Interactive Prototypes", "Accessibility"],
//       },
//       {
//         title: "Web Development",
//         desc: "Modern, performant React frontends with robust tooling and testing.",
//         features: ["React + Vite", "Tailwind CSS", "TypeScript Ready"],
//       },
//       {
//         title: "Performance & SEO",
//         desc: "Core Web Vitals optimization and content structure for discoverability.",
//         features: ["Lighthouse Audits", "SEO Structure", "Analytics Setup"],
//       },
//       {
//         title: "Maintenance",
//         desc: "Reliable ongoing support, refactors, and incremental improvements.",
//         features: ["CI/CD Friendly", "Automated Testing", "Version Upgrades"],
//       },
//     ],
//     []
//   );

//   return (
//     <Section id="services">
//       <SectionHeader
//         eyebrow="Services"
//         title="Solutions designed for outcomes"
//         subtitle="Pick a service or combine them for an end-to-end engagement."
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//         {services.map((svc, idx) => (
//           <Card key={idx} className="p-6 flex flex-col">
//             <div
//               className={`h-12 w-12 rounded-xl bg-${COLORS.accent}-50 ring-1 ring-${COLORS.accent}-100 flex items-center justify-center`}
//             >
//               <span className={`text-${COLORS.accent}-700 font-bold`}>
//                 {idx + 1}
//               </span>
//             </div>
//             <h3
//               className={`mt-4 text-xl font-semibold text-${COLORS.dark}-900`}
//             >
//               {svc.title}
//             </h3>
//             <p className={`mt-2 text-${COLORS.dark}-600`}>{svc.desc}</p>
//             <ul className="mt-4 flex-1 space-y-2">
//               {svc.features.map((f, i) => (
//                 <li
//                   key={i}
//                   className={`flex items-center gap-2 text-${COLORS.dark}-700`}
//                 >
//                   <svg
//                     className={`h-4 w-4 text-${COLORS.primary}-600`}
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 01.023 1.32l-.083.094-7 7a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L9 11.585l6.293-6.292a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   {f}
//                 </li>
//               ))}
//             </ul>
//             <Button href="#contact" variant="ghost" className="mt-6">
//               Learn more
//             </Button>
//           </Card>
//         ))}
//       </div>
//     </Section>
//   );
// };

// // Team section
// const Team = () => {
//   const members = [
//     { name: "Alex Johnson", role: "Founder & Principal", img: "./image.jpeg" },
//     { name: "Taylor Smith", role: "Lead Designer", img: "./image.jpeg" },
//     { name: "Jordan Lee", role: "Frontend Engineer", img: "./image.jpeg" },
//     { name: "Casey Nguyen", role: "Product Manager", img: "./image.jpeg" },
//   ];

//   return (
//     <Section id="team" className="bg-white">
//       <SectionHeader
//         eyebrow="Team"
//         title="Meet the experts"
//         subtitle="A tight-knit team that partners closely with clients to deliver exceptional results."
//       />
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//         {members.map((m, idx) => (
//           <div key={idx} className="group">
//             <div className="relative overflow-hidden rounded-2xl border border-slate-200">
//               <img
//                 src={m.img}
//                 alt={`${m.name} - ${m.role}`}
//                 className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <h3
//               className={`mt-3 text-lg font-semibold text-${COLORS.dark}-900`}
//             >
//               {m.name}
//             </h3>
//             <p className={`text-${COLORS.dark}-600`}>{m.role}</p>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// // Contact section with basic client-side validation (no backend)
// const Contact = () => {
//   const initialState = { name: "", email: "", message: "" };
//   const [form, setForm] = useState(initialState);
//   const [status, setStatus] = useState(null);

//   const onChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const onSubmit = (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
//       setStatus({ type: "error", msg: "Please fill out all fields." });
//       return;
//     }
//     // Simulate send (no backend as requested)
//     setStatus({
//       type: "success",
//       msg: "Thanks! Your message has been prepared. This demo does not send data.",
//     });
//     setForm(initialState);
//   };

//   return (
//     <Section id="contact" className="bg-slate-50/60 rounded-[2.5rem]">
//       <SectionHeader
//         eyebrow="Contact"
//         title="Let’s build something great"
//         subtitle="Tell us about your goals. We’ll reach out with a tailored plan."
//       />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//         {/* Contact card */}
//         <Card className="p-6 lg:col-span-1">
//           <h3 className={`text-xl font-semibold text-${COLORS.dark}-900`}>
//             Get in touch
//           </h3>
//           <p className={`mt-2 text-${COLORS.dark}-600`}>
//             Prefer email or a quick call? We’re responsive and flexible.
//           </p>
//           <div className="mt-6 space-y-4">
//             <div className="flex items-center gap-3">
//               <div
//                 className={`h-10 w-10 rounded-xl bg-${COLORS.primary}-50 ring-1 ring-${COLORS.primary}-100 flex items-center justify-center`}
//               >
//                 <svg
//                   className={`h-5 w-5 text-${COLORS.primary}-700`}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 8V7a2 2 0 00-2-2h-3M7 5H6a2 2 0 00-2 2v1m0 8v1a2 2 0 002 2h1m10 0h1a2 2 0 002-2v-1M3 8h18M3 16h18"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className={`text-sm text-${COLORS.dark}-600`}>
//                   Business hours
//                 </p>
//                 <p className={`font-medium text-${COLORS.dark}-900`}>
//                   Mon–Fri, 9am–6pm
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div
//                 className={`h-10 w-10 rounded-xl bg-${COLORS.primary}-50 ring-1 ring-${COLORS.primary}-100 flex items-center justify-center`}
//               >
//                 <svg
//                   className={`h-5 w-5 text-${COLORS.primary}-700`}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
//                   />
//                   <path
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className={`text-sm text-${COLORS.dark}-600`}>Email</p>
//                 <p className={`font-medium text-${COLORS.dark}-900`}>
//                   hello@acmebusiness.dev
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div
//                 className={`h-10 w-10 rounded-xl bg-${COLORS.primary}-50 ring-1 ring-${COLORS.primary}-100 flex items-center justify-center`}
//               >
//                 <svg
//                   className={`h-5 w-5 text-${COLORS.primary}-700`}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 5h18M8 5v14m8-14v14M3 19h18"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className={`text-sm text-${COLORS.dark}-600`}>Location</p>
//                 <p className={`font-medium text-${COLORS.dark}-900`}>
//                   Remote-first, global
//                 </p>
//               </div>
//             </div>
//           </div>
//           <img
//             src="./image.jpeg"
//             alt="Office"
//             className="mt-6 w-full rounded-xl border border-slate-200 object-cover aspect-video"
//           />
//         </Card>

//         {/* Form */}
//         <Card className="p-6 lg:col-span-2">
//           <form
//             onSubmit={onSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//           >
//             <div className="col-span-1">
//               <label
//                 htmlFor="name"
//                 className={`block text-sm font-medium text-${COLORS.dark}-800`}
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 value={form.name}
//                 onChange={onChange}
//                 placeholder="Jane Doe"
//                 className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-${COLORS.dark}-900 placeholder-${COLORS.dark}-400 focus:outline-none focus:ring-2 focus:ring-${COLORS.primary}-600`}
//               />
//             </div>
//             <div className="col-span-1">
//               <label
//                 htmlFor="email"
//                 className={`block text-sm font-medium text-${COLORS.dark}-800`}
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={onChange}
//                 placeholder="jane@company.com"
//                 className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-${COLORS.dark}-900 placeholder-${COLORS.dark}-400 focus:outline-none focus:ring-2 focus:ring-${COLORS.primary}-600`}
//               />
//             </div>
//             <div className="col-span-1 md:col-span-2">
//               <label
//                 htmlFor="message"
//                 className={`block text-sm font-medium text-${COLORS.dark}-800`}
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={form.message}
//                 onChange={onChange}
//                 placeholder="Tell us about your project..."
//                 className={`mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-${COLORS.dark}-900 placeholder-${COLORS.dark}-400 focus:outline-none focus:ring-2 focus:ring-${COLORS.primary}-600`}
//               />
//             </div>
//             <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
//               <Button type="submit" variant="primary">
//                 Send Message
//               </Button>
//               <p className={`text-sm text-${COLORS.dark}-600`}>
//                 We’ll respond within 1 business day.
//               </p>
//             </div>
//             {/* Status message */}
//             {status && (
//               <div className="col-span-1 md:col-span-2">
//                 <div
//                   className={`rounded-lg p-4 ${
//                     status.type === "success"
//                       ? `bg-${COLORS.primary}-50 text-${COLORS.primary}-800 border border-${COLORS.primary}-200`
//                       : "bg-red-50 text-red-800 border border-red-200"
//                   }`}
//                 >
//                   {status.msg}
//                 </div>
//               </div>
//             )}
//           </form>
//         </Card>
//       </div>
//     </Section>
//   );
// };

// // Footer
// const Footer = () => (
//   <footer className="mt-16 border-t border-slate-200 bg-white">
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="md:col-span-2">
//           <a href="#" className="flex items-center gap-3">
//             <img
//               src="./image.jpeg"
//               alt="Brand Logo"
//               className="h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200"
//             />
//             <span
//               className={`text-xl font-extrabold tracking-tight text-${COLORS.dark}-900`}
//             >
//               Acme Business
//             </span>
//           </a>
//           <p className={`mt-4 max-w-lg text-${COLORS.dark}-600`}>
//             Crafting reliable, performant web experiences with modern React and
//             Tailwind practices.
//           </p>
//         </div>
//         <div>
//           <h4 className={`text-sm font-semibold text-${COLORS.dark}-900`}>
//             Company
//           </h4>
//           <ul className="mt-3 space-y-2">
//             <li>
//               <a
//                 href="#about"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#team"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 Team
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 Services
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h4 className={`text-sm font-semibold text-${COLORS.dark}-900`}>
//             Connect
//           </h4>
//           <ul className="mt-3 space-y-2">
//             <li>
//               <a
//                 href="#contact"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className={`text-${COLORS.dark}-600 hover:text-${COLORS.primary}-700`}
//               >
//                 Twitter
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <p className={`text-sm text-${COLORS.dark}-500`}>
//           © {new Date().getFullYear()} Acme Business. All rights reserved.
//         </p>
//         <div className="flex items-center gap-4">
//           <a
//             href="#"
//             className={`text-sm text-${COLORS.dark}-500 hover:text-${COLORS.primary}-700`}
//           >
//             Privacy
//           </a>
//           <span className="text-slate-300">•</span>
//           <a
//             href="#"
//             className={`text-sm text-${COLORS.dark}-500 hover:text-${COLORS.primary}-700`}
//           >
//             Terms
//           </a>
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// // App container with background and layout
// const App = () => {
//   return (
//     <div
//       className={`min-h-screen bg-gradient-to-b from-white via-white to-${COLORS.dark}-50`}
//     >
//       {/* Header */}
//       <Header />

//       {/* Hero */}
//       <Hero />

//       {/* About */}
//       <About />

//       {/* Services */}
//       <Services />

//       {/* Team */}
//       <Team />

//       {/* Contact */}
//       <Contact />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };
// export default App;

// // V2 Better design and asthetics

// App.jsx
// Enhanced aesthetics: richer color system, gradients, glassmorphism, soft shadows, and improved contrast.
// - All components in one file with inline Tailwind classes.
// - Uses './image.jpeg' for images.
// - Responsive across breakpoints, accessible focus styles, keyboard friendly.
// - ReactDOM.render at bottom as requested (note: React 18 prefers createRoot).

import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

// Color theme map for easy swapping across components
const THEME = {
  primary: "indigo",
  secondary: "violet",
  accent: "fuchsia",
  success: "emerald",
  info: "sky",
  warning: "amber",
  neutral: "slate",
};

// Navigation links
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

// Utility: Section wrapper for consistent spacing
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

// Utility: Section header
const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";
  return (
    <div className={`mb-10 sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`inline-block rounded-full border border-${THEME.info}-200 bg-${THEME.info}-50 px-3 py-1 text-xs font-semibold tracking-widest text-${THEME.info}-700 uppercase`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-${THEME.neutral}-900`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-${THEME.neutral}-600 ${
            alignClass === "text-center" ? "mx-auto" : ""
          } max-w-3xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Utility: Button with variants
const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99]";
  const size = "px-5 py-3 text-sm sm:text-base";
  const variants = {
    primary: `bg-${THEME.primary}-600 text-white shadow-lg shadow-${THEME.primary}-600/20 hover:bg-${THEME.primary}-700 focus-visible:ring-${THEME.primary}-600`,
    secondary: `bg-white text-${THEME.neutral}-900 border border-${THEME.neutral}-200 hover:bg-${THEME.neutral}-50 focus-visible:ring-${THEME.primary}-600`,
    ghost: `bg-${THEME.secondary}-50 text-${THEME.secondary}-700 hover:bg-${THEME.secondary}-100 focus-visible:ring-${THEME.secondary}-600`,
    success: `bg-${THEME.success}-600 text-white hover:bg-${THEME.success}-700 focus-visible:ring-${THEME.success}-600`,
  };
  const cls = `${base} ${size} ${variants[variant]} ${className}`;
  return href ? (
    <a href={href} className={cls} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

// Utility: Card
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border border-${THEME.neutral}-200/70 bg-white/90 shadow-[0_6px_24px_-8px_rgba(2,6,23,0.15)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

// Header with glassmorphism
const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span
              className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-${THEME.neutral}-200`}
            >
              <img
                src="./image.jpeg"
                alt="Brand Logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`text-xl sm:text-2xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
            >
              Acme Business
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-${THEME.neutral}-700 hover:text-${THEME.primary}-700 transition-colors text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href="#contact" variant="primary">
              Get a Quote
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
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-${THEME.neutral}-800 hover:bg-${THEME.neutral}-100 transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href="#contact" variant="primary" className="mt-4 w-full">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

// Hero with layered gradient + accent rings
const Hero = () => (
  <Section className="relative pt-10 sm:pt-12 lg:pt-16">
    {/* Decorative gradient background */}
    <div className={`pointer-events-none absolute inset-0 -z-10`}>
      <div
        className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl rounded-full bg-gradient-to-r from-${THEME.primary}-200 via-${THEME.secondary}-200 to-${THEME.accent}-200 blur-3xl opacity-60`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[70%] max-w-3xl rounded-full bg-gradient-to-r from-${THEME.info}-200 via-${THEME.success}-200 to-${THEME.warning}-200 blur-3xl opacity-50`}
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-${THEME.primary}-300 bg-${THEME.primary}-50 px-3 py-1 text-xs font-semibold text-${THEME.primary}-700`}
        >
          New: Performance-first builds
        </span>
        <h1
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-${THEME.neutral}-900`}
        >
          Elevate the brand with delightful web experiences.
        </h1>
        <p
          className={`mt-4 sm:mt-6 text-${THEME.neutral}-600 text-base sm:text-lg max-w-2xl`}
        >
          A studio focused on React and Tailwind engineering—shipping fast,
          accessible, and maintainable products.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href="#services" variant="primary">
            Explore Services
          </Button>
          <Button href="#about" variant="ghost">
            How We Work
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src="./image.jpeg"
                alt="Happy client"
                className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <p className={`text-sm text-${THEME.neutral}-600`}>
            50+ shipped projects · WCAG-conscious · Transparent pricing
          </p>
        </div>
      </div>

      {/* Visual */}
      <div className="relative">
        <div
          className={`absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-${THEME.primary}-100 via-white to-${THEME.secondary}-100 blur-2xl opacity-90`}
        />
        <div className="relative rounded-2xl border border-slate-200 bg-white/80 shadow-xl backdrop-blur">
          <img
            src="./image.jpeg"
            alt="Business illustration"
            className="w-full rounded-2xl object-cover aspect-video"
          />
          {/* Accent ring */}
          <div
            className={`pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-${THEME.accent}-400 to-${THEME.secondary}-400 blur-xl opacity-70`}
          />
        </div>
      </div>
    </div>
  </Section>
);

// About with colorful icon chips
const About = () => (
  <Section
    id="about"
    className="bg-white/60 rounded-[2.5rem] ring-1 ring-slate-200 backdrop-blur"
  >
    <SectionHeader
      eyebrow="About"
      title="We turn ideas into scalable products"
      subtitle="Strategy, design, and engineering—woven together to deliver measurable outcomes."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {[
        {
          title: "Strategy-First",
          desc: "We map initiatives to outcomes with lean roadmaps and clarity.",
          color: THEME.primary,
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          ),
        },
        {
          title: "Quality at Speed",
          desc: "Rapid iteration with battle-tested tooling and patterns.",
          color: THEME.success,
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ),
        },
        {
          title: "Long-Term Partners",
          desc: "Maintainable code, docs, and evolution beyond launch.",
          color: THEME.accent,
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4" strokeWidth="2" />
            </svg>
          ),
        },
      ].map((item, idx) => (
        <Card key={idx} className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`rounded-xl p-3 ring-1 bg-${item.color}-50 ring-${item.color}-100 text-${item.color}-700`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className={`text-lg font-semibold text-${THEME.neutral}-900`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-${THEME.neutral}-600`}>{item.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

// Services with multi-color accents
const Services = () => {
  const services = useMemo(
    () => [
      {
        title: "Product Design",
        desc: "User research, UX/UI, prototyping, and systems that scale.",
        features: ["Design Systems", "Interactive Prototypes", "Accessibility"],
        color: THEME.secondary,
      },
      {
        title: "Web Development",
        desc: "Modern React frontends with robust testing and DX.",
        features: ["React + Vite", "Tailwind CSS", "TypeScript Ready"],
        color: THEME.primary,
      },
      {
        title: "Performance & SEO",
        desc: "Core Web Vitals and discoverability from the start.",
        features: ["Lighthouse Audits", "SEO Structure", "Analytics Setup"],
        color: THEME.info,
      },
      {
        title: "Maintenance",
        desc: "Reliable support, refactors, and continuous improvement.",
        features: ["CI/CD Friendly", "Automated Testing", "Version Upgrades"],
        color: THEME.success,
      },
    ],
    []
  );

  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="Solutions designed for outcomes"
        subtitle="Select the services needed, or combine for end‑to‑end delivery."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((svc, idx) => (
          <Card key={idx} className="p-6 flex flex-col">
            <div
              className={`h-12 w-12 rounded-xl bg-${svc.color}-50 ring-1 ring-${svc.color}-100 flex items-center justify-center`}
            >
              <span className={`text-${svc.color}-700 font-bold`}>
                {idx + 1}
              </span>
            </div>
            <h3
              className={`mt-4 text-xl font-semibold text-${THEME.neutral}-900`}
            >
              {svc.title}
            </h3>
            <p className={`mt-2 text-${THEME.neutral}-600`}>{svc.desc}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {svc.features.map((f, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-${THEME.neutral}-700`}
                >
                  <svg
                    className={`h-4 w-4 text-${svc.color}-600`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 01.023 1.32l-.083.094-7 7a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L9 11.585l6.293-6.292a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              variant="ghost"
              className={`mt-6 bg-${svc.color}-50 hover:bg-${svc.color}-100 text-${svc.color}-700`}
            >
              Learn more
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Team with subtle hover color glow
const Team = () => {
  const members = [
    { name: "Alex Johnson", role: "Founder & Principal", img: "./image.jpeg" },
    { name: "Taylor Smith", role: "Lead Designer", img: "./image.jpeg" },
    { name: "Jordan Lee", role: "Frontend Engineer", img: "./image.jpeg" },
    { name: "Casey Nguyen", role: "Product Manager", img: "./image.jpeg" },
  ];

  return (
    <Section id="team">
      <SectionHeader
        eyebrow="Team"
        title="Meet the experts"
        subtitle="A tight-knit team that partners closely to deliver exceptional results."
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {members.map((m, idx) => (
          <div key={idx} className="group">
            <div
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-md transition-all duration-300 group-hover:shadow-xl`}
            >
              <img
                src={m.img}
                alt={`${m.name} - ${m.role}`}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-${THEME.neutral}-900/20 to-transparent`}
              />
            </div>
            <h3
              className={`mt-3 text-lg font-semibold text-${THEME.neutral}-900`}
            >
              {m.name}
            </h3>
            <p className={`text-${THEME.neutral}-600`}>{m.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Contact with improved feedback styling
const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(null);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill out all fields." });
      return;
    }
    setStatus({
      type: "success",
      msg: "Thanks! Your message has been prepared. This demo does not send data.",
    });
    setForm(initialState);
  };

  return (
    <Section id="contact" className="relative">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute right-10 top-0 h-24 w-24 rounded-full bg-${THEME.warning}-300 blur-2xl opacity-40`}
        />
        <div
          className={`absolute left-10 bottom-0 h-24 w-24 rounded-full bg-${THEME.info}-300 blur-2xl opacity-40`}
        />
      </div>

      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something great"
        subtitle="Tell us about goals and constraints—receive a tailored plan."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <Card className="p-6 lg:col-span-1">
          <h3 className={`text-xl font-semibold text-${THEME.neutral}-900`}>
            Get in touch
          </h3>
          <p className={`mt-2 text-${THEME.neutral}-600`}>
            Prefer email or a quick call? We’re responsive and flexible.
          </p>
          <div className="mt-6 space-y-4">
            <InfoRow
              color={THEME.primary}
              title="Business hours"
              text="Mon–Fri, 9am–6pm"
              iconPath="M21 8V7a2 2 0 00-2-2h-3M7 5H6a2 2 0 00-2 2v1m0 8v1a2 2 0 002 2h1m10 0h1a2 2 0 002-2v-1M3 8h18M3 16h18"
            />
            <InfoRow
              color={THEME.success}
              title="Email"
              text="hello@acmebusiness.dev"
              iconPath="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
            <InfoRow
              color={THEME.accent}
              title="Location"
              text="Remote-first, global"
              iconPath="M12 2C8.13 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.13-7-7-7z"
            />
          </div>
          <img
            src="./image.jpeg"
            alt="Office"
            className="mt-6 w-full rounded-xl border border-slate-200 object-cover aspect-video"
          />
        </Card>

        <Card className="p-6 lg:col-span-2">
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@company.com"
            />
            <TextArea
              label="Message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us about your project..."
            />
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button type="submit" variant="primary">
                Send Message
              </Button>
              <p className={`text-sm text-${THEME.neutral}-600`}>
                We’ll respond within 1 business day.
              </p>
            </div>
            {status && (
              <div className="col-span-1 md:col-span-2">
                <div
                  className={`rounded-xl px-4 py-3 border ${
                    status.type === "success"
                      ? `bg-${THEME.success}-50 text-${THEME.success}-800 border-${THEME.success}-200`
                      : `bg-rose-50 text-rose-800 border-rose-200`
                  }`}
                >
                  {status.msg}
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
};

// Small subcomponents for Contact form and Info rows
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
      className={`mt-2 w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
    />
  </div>
);

const TextArea = ({ label, name, value, onChange, placeholder = "" }) => (
  <div className="col-span-1 md:col-span-2">
    <label
      htmlFor={name}
      className={`block text-sm font-medium text-${THEME.neutral}-800`}
    >
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows="5"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-2 w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-${THEME.neutral}-900 placeholder-${THEME.neutral}-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-${THEME.primary}-600`}
    />
  </div>
);

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

// Footer with gradient top border
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
              Acme Business
            </span>
          </a>
          <p className={`mt-4 max-w-lg text-${THEME.neutral}-600`}>
            Crafting reliable, performant web experiences with modern React and
            Tailwind practices.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-semibold text-${THEME.neutral}-900`}>
            Company
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="#about"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`text-${THEME.neutral}-600 hover:text-${THEME.primary}-700`}
              >
                Services
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
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className={`text-sm text-${THEME.neutral}-500`}>
          © {new Date().getFullYear()} Acme Business. All rights reserved.
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

// App root with soft gradient background
const App = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-${THEME.info}-50 to-${THEME.neutral}-50`}
    >
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

// Render the App (as requested)
export default App;
