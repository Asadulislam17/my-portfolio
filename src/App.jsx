/**
 * ============================================================
 *  Full-Stack Developer Portfolio
 *  React + Tailwind CSS (dark mode: class strategy)
 *  Dark/Light toggle persisted via localStorage
 * ============================================================
 *  HOW TO CUSTOMISE
 *  1. Edit the DATA object (name, email, links, summary)
 *  2. Edit SKILLS, PROJECTS, GOALS arrays
 *  3. tailwind.config.js → darkMode: 'class'
 * ============================================================
 */

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
// ① PERSONAL DATA  ← edit everything here
// ─────────────────────────────────────────────────────────────
const DATA = {
  name:     "Asadul Islam",
  role:     "Full-Stack Developer",
  tagline:  "Full-stack developer building modern web applications with React, Laravel, PHP, and Spring Boot — focused on clean UI and scalable backend APIs.",
  email:    "asadulislam227940@gmail.com",
  github:   "https://github.com/Asadulislam17",
  linkedin: "https://www.linkedin.com/in/asadulislam17/",
  summary:
    "Passionate full-stack developer with hands-on experience in React, Laravel, PHP, and Java Spring Boot. I thrive building products end-to-end — from slick React interfaces to performant backend systems. Currently seeking remote full-stack roles and select freelance engagements.",
};

// ─────────────────────────────────────────────────────────────
// ② SKILLS
// ─────────────────────────────────────────────────────────────
const SKILLS = {
  Frontend: [
    { name: "React",        icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "JavaScript",   icon: "🟨" },
    { name: "HTML5/CSS3",   icon: "🌐" },
    { name: "Vite",         icon: "⚡" },
  ],
  Backend: [
    { name: "Laravel",      icon: "🔴" },
    { name: "PHP",          icon: "🐘" },
    { name: "Spring Boot",  icon: "🍃" },
    { name: "Java",         icon: "☕" },
    { name: "REST APIs",    icon: "🔗" },
  ],
  Databases: [
    { name: "MySQL",        icon: "🐬" },
    { name: "PostgreSQL",   icon: "🐘" },
    { name: "Redis",        icon: "🔥" },
    { name: "Eloquent ORM", icon: "🗄️" },
  ],
};

// ─────────────────────────────────────────────────────────────
// ③ PROJECTS
// ─────────────────────────────────────────────────────────────
// const PROJECTS = [
//   {
//     title:       "Raw PHP & MySQL POS System",
//     description: "A fully functional point-of-sale system built from scratch — no frameworks. Inventory management, real-time sales tracking, role-based access for cashiers & admins, and printable receipts.",
//     stack:       ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
//     gradient:    "from-blue-600 via-blue-500 to-cyan-400",
//     icon:        "🛒",
//     featured:    true,
//   },
//   {
//     title:       "Laravel E-Commerce API",
//     description: "RESTful API backend for an e-commerce platform. Covers authentication, product catalogue, cart management, and Stripe payment integration.",
//     stack:       ["Laravel", "PHP", "MySQL", "Stripe"],
//     gradient:    "from-violet-600 via-purple-500 to-fuchsia-400",
//     icon:        "🛍️",
//     featured:    false,
//   },
//   {
//     title:       "Spring Boot Task Manager",
//     description: "Microservice built with Java Spring Boot exposing CRUD endpoints consumed by a React SPA, secured with JWT authentication.",
//     stack:       ["Spring Boot", "Java", "PostgreSQL", "React"],
//     gradient:    "from-emerald-600 via-teal-500 to-green-400",
//     icon:        "📋",
//     featured:    false,
//   },
//   {
//     title:       "React Admin Dashboard",
//     description: "Responsive admin dashboard with analytics charts, sortable data tables, and full dark-mode support — zero external UI library.",
//     stack:       ["React", "Tailwind CSS", "Recharts"],
//     gradient:    "from-orange-500 via-amber-500 to-yellow-400",
//     icon:        "📊",
//     featured:    false,
//   },
// ];

const PROJECTS = [
  {
    title:       "Lahomes - Real Estate Platform",
    description: "আপনার পছন্দের বাড়ি, ফ্ল্যাট বা প্লট দ্রুত ও সহজে খুঁজে পাওয়ার একটি রিয়েল এস্টেট প্ল্যাটফর্ম। এতে রয়েছে ভেরিফায়েড লিস্টিং এবং সরাসরি এজেন্ট যোগাযোগের সুবিধা।",
    stack:       ["Laravel", "React", "MySQL", "Inertia.js", "Blade"],
    gradient:    "from-emerald-600 via-teal-500 to-cyan-400",
    icon:        "🏠",
    featured:    true,
    url:         "https://lahomes.devfoliox.com/"
  }
];


// ─────────────────────────────────────────────────────────────
// ④ GOALS
// ─────────────────────────────────────────────────────────────
const GOALS = [
  {
    icon:  "💼",
    title: "Full-Stack Roles",
    body:  "Seeking remote or hybrid positions where I can contribute across the entire product — React frontends, PHP/Java backends, and cloud deployments.",
  },
  {
    icon:  "🌍",
    title: "Freelancing",
    body:  "Available for select freelance projects — MVPs, SaaS features, API integrations, or full frontend revamps.",
  },
  {
    icon:  "📈",
    title: "Continuous Growth",
    body:  "Deepening expertise in AWS, Docker, and CI/CD pipelines to ship production-ready, scalable systems.",
  },
];

const NAV_LINKS = ["Hero", "Skills", "Projects", "Goals", "Contact"];

// ─────────────────────────────────────────────────────────────
//  HOOK — dark mode with localStorage persistence
//  Reads saved preference or falls back to system preference
// ─────────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved !== null) return saved === "dark";
    } catch (_) {}
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
  });

  useEffect(() => {
    // Apply / remove the "dark" class on <html> for Tailwind class strategy
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch (_) {}
  }, [dark]);

  return [dark, setDark];
}

// ─────────────────────────────────────────────────────────────
//  HOOK — track active section on scroll
// ─────────────────────────────────────────────────────────────
function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

// Smooth scroll utility
const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

// ═════════════════════════════════════════════════════════════
//  REUSABLE: SectionHeader
// ═════════════════════════════════════════════════════════════
function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4
        text-blue-600 bg-blue-50 border border-blue-100
        dark:text-blue-400 dark:bg-blue-950/50 dark:border-blue-800/40">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight
        text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: ThemeToggle — animated pill switch
// ═════════════════════════════════════════════════════════════
function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        bg-gray-200 dark:bg-blue-600"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm shadow transition-all duration-300
          bg-white dark:bg-gray-900
          ${dark ? "translate-x-7" : "translate-x-0"}`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Navbar
// ═════════════════════════════════════════════════════════════
function Navbar({ dark, setDark }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800/60"
        : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => scrollTo("hero")}
          className="font-extrabold text-lg tracking-tight transition-colors
            text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          <span className="text-blue-500">&lt;</span>
          {DATA.name.split(" ")[0]}
          <span className="text-blue-500"> /&gt;</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.toLowerCase()
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle dark={dark} setDark={setDark} />
          <a href={`mailto:${DATA.email}`}
            className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200
              bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20">
            Hire Me
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4 border-t
          bg-white dark:bg-gray-950 border-gray-100 dark:border-gray-800">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => { scrollTo(link); setMenuOpen(false); }}
              className="text-left text-sm font-medium transition-colors
                text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Hero
// ═════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gray-50 dark:bg-gray-950">

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse
          bg-blue-200/50 dark:bg-blue-700/15" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
          bg-violet-200/40 dark:bg-violet-700/10" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle,#3b82f6 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold
          bg-blue-50 border border-blue-200 text-blue-700
          dark:bg-blue-950/60 dark:border-blue-700/40 dark:text-blue-300">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
          Available for work
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight
          text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            {DATA.name}
          </span>
          <br />
          <span className="text-gray-400 dark:text-gray-500">{DATA.role}</span>
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed
          text-gray-500 dark:text-gray-400">
          {DATA.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo("Projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl
              transition-all duration-200 active:scale-95
              bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35">
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button onClick={() => scrollTo("Contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl border
              transition-all duration-200 active:scale-95
              bg-white hover:bg-gray-50 text-gray-700 border-gray-200
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700">
            Get in Touch
          </button>
        </div>

        {/* Tech pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-2">
          {["React", "Laravel", "PHP", "Spring Boot", "MySQL", "Tailwind"].map((tech) => (
            <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full
              bg-gray-100 text-gray-600 border border-gray-200
              dark:bg-gray-800/70 dark:text-gray-400 dark:border-gray-700/50">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-gray-300 dark:text-gray-700">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent animate-bounce" />
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
//  REUSABLE: SkillBadge
// ═════════════════════════════════════════════════════════════
function SkillBadge({ name, icon }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium cursor-default
      transition-all duration-200 group
      bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 text-gray-700 hover:text-blue-700
      dark:bg-gray-800/60 dark:hover:bg-blue-950/40 dark:border-gray-700/40 dark:hover:border-blue-700/50 dark:text-gray-300 dark:hover:text-blue-300">
      <span className="text-base group-hover:scale-110 transition-transform duration-200">{icon}</span>
      {name}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Skills
// ═════════════════════════════════════════════════════════════
function Skills() {
  const meta = {
    Frontend:  { label: "FE", cls: "text-blue-600 bg-blue-50 border-blue-100 dark:text-blue-400 dark:bg-blue-950/50 dark:border-blue-800/40" },
    Backend:   { label: "BE", cls: "text-violet-600 bg-violet-50 border-violet-100 dark:text-violet-400 dark:bg-violet-950/50 dark:border-violet-800/40" },
    Databases: { label: "DB", cls: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/50 dark:border-emerald-800/40" },
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="What I work with"
          title="Skills & Technologies"
          subtitle="A curated set of tools I use to ship products — from pixel to production."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}
              className="rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg
                bg-gray-50 hover:bg-white border-gray-100 hover:border-blue-100 hover:shadow-blue-50
                dark:bg-gray-950/70 dark:hover:bg-gray-950 dark:border-gray-800 dark:hover:border-blue-900/50 dark:hover:shadow-blue-950/20">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-extrabold ${meta[category].cls}`}>
                  {meta[category].label}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => <SkillBadge key={s.name} {...s} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
//  REUSABLE: ProjectCard
// ═════════════════════════════════════════════════════════════
// এখানে url প্রোপার্টি ডি-স্ট্রাকচার (destructure) করে নেওয়া হয়েছে
function ProjectCard({ title, description, stack, gradient, icon, featured, url }) {
  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className={`block relative rounded-2xl overflow-hidden border transition-all duration-300 group
        hover:-translate-y-1 hover:shadow-2xl no-underline cursor-pointer
        bg-white border-gray-100 hover:shadow-gray-200/60
        dark:bg-gray-950/80 dark:border-gray-800 dark:hover:shadow-gray-950/60
        ${featured ? "ring-2 ring-blue-500/25 dark:ring-blue-500/20" : ""}`}
    >

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 text-xs font-bold px-2.5 py-1 rounded-full
          bg-blue-600 text-white shadow-md shadow-blue-600/30">
          ⭐ Featured
        </div>
      )}

      {/* Gradient banner */}
      <div className={`h-44 bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl drop-shadow-lg">{icon}</span>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 transition-colors duration-200
          text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md
              bg-gray-100 text-gray-600 border border-gray-200
              dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}


// ═════════════════════════════════════════════════════════════
//  COMPONENT: Projects
// ═════════════════════════════════════════════════════════════
function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="What I've built"
          title="Projects"
          subtitle="A selection of real and practice projects across the full stack."
        />
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Goals
// ═════════════════════════════════════════════════════════════
function Goals() {
  const stats = [
    { value: "3+",   label: "Years Coding"     },
    { value: "5",  label: "Projects Built"   },
    { value: "4",    label: "Core Tech Stacks" },
    { value: "Open", label: "To Freelance"     },
  ];

  return (
    <section id="goals" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Where I'm headed"
          title="Experience & Goals"
          subtitle={DATA.summary}
        />

        {/* Goal cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {GOALS.map((g) => (
            <div key={g.title}
              className="rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                bg-gray-50 border-gray-100 hover:border-blue-100 hover:shadow-blue-50
                dark:bg-gray-950/70 dark:border-gray-800 dark:hover:border-blue-900/40 dark:hover:shadow-blue-950/20">
              <div className="text-3xl mb-4">{g.icon}</div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{g.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{g.body}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-4 text-center border
              bg-gray-50 border-gray-100 dark:bg-gray-950/60 dark:border-gray-800">
              <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{s.value}</div>
              <div className="text-xs font-medium mt-1 text-gray-500 dark:text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Contact
// ═════════════════════════════════════════════════════════════
function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Replace with EmailJS / Formspree for real emails
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  // Shared input classes — light + dark variants via Tailwind
  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200
    bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400
    focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10
    dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-600
    dark:focus:border-blue-500 dark:focus:bg-gray-800`;

  const socials = [
    {
      label: "Email", value: DATA.email, href: `mailto:${DATA.email}`,
      iconBg: "bg-blue-50 text-blue-500 dark:bg-blue-950/60 dark:text-blue-400",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
    },
    {
      label: "GitHub", value: "View my repositories", href: DATA.github,
      iconBg: "bg-gray-100 text-gray-600 dark:bg-gray-700/60 dark:text-gray-300",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
            </svg>,
    },
    {
      label: "LinkedIn", value: "Connect with me", href: DATA.linkedin,
      iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
            </svg>,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-60 rounded-full blur-3xl pointer-events-none
        bg-blue-100/60 dark:bg-blue-900/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Let's work together"
          title="Get in Touch"
          subtitle="Have a project or an opportunity? Drop me a message and I'll get back to you."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact form */}
          <div className="rounded-2xl p-8 border shadow-xl
            bg-white border-gray-100 shadow-gray-100/80
            dark:bg-gray-900/80 dark:border-gray-800 dark:shadow-none">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputCls} resize-none`} />
              </div>
              {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
              <button onClick={handleSubmit}
                className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]
                  ${sent
                    ? "bg-green-500 hover:bg-green-400 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35"}`}>
                {sent ? "✅ Message sent!" : "Send Message"}
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 group
                  bg-white border-gray-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50
                  dark:bg-gray-900/70 dark:border-gray-800 dark:hover:border-blue-800/50 dark:hover:shadow-blue-950/20">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5 text-gray-400 dark:text-gray-500">{s.label}</div>
                  <div className="text-sm font-medium transition-colors
                    text-gray-700 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
                    {s.value}
                  </div>
                </div>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity
                  text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Footer
// ═════════════════════════════════════════════════════════════
// function Footer() {
//   return (
//     <footer className="py-8 text-center border-t
//       bg-white border-gray-100 dark:bg-gray-950 dark:border-gray-800/50">
//       <p className="text-sm text-gray-400 dark:text-gray-600">
//         Built with React & Tailwind CSS ·{" "}
//         <span className="text-gray-500 dark:text-gray-500">{DATA.name}</span>
//         {" "}© {new Date().getFullYear()}
//       </p>
//     </footer>
//   );
// }
function Footer() {
  return (
    <footer className="py-8 text-center border-t bg-white border-gray-100 dark:bg-gray-950 dark:border-gray-800/50">
      <p className="text-sm text-gray-400 dark:text-gray-600">
        Built with React & Tailwind CSS · <span className="text-gray-500 dark:text-gray-500">{DATA.name}</span>· Full-Stack Developer © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// export default Footer;

// ═════════════════════════════════════════════════════════════
//  ROOT: App
//  useDarkMode applies "dark" to <html> and persists to localStorage
// ═════════════════════════════════════════════════════════════
export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

        body, * { font-family: 'Outfit', sans-serif; }
        code, .font-mono, [class*="font-mono"] { font-family: 'JetBrains Mono', monospace; }

        /* Smooth colour transitions across the whole page on theme change */
        *, *::before, *::after {
          transition-property: background-color, border-color, color, fill, stroke, box-shadow;
          transition-duration: 220ms;
          transition-timing-function: cubic-bezier(0.4,0,0.2,1);
        }

        html { scroll-behavior: smooth; }

        /* Custom scrollbar — theme-aware */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .dark ::-webkit-scrollbar-track { background: #030712; }
        .dark ::-webkit-scrollbar-thumb { background: #1e3a5f; }
      `}</style>

      {/* Navbar receives dark + setDark to render the toggle */}
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}