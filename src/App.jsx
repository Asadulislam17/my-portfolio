import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Goals from "./components/Goals";     // ✅ Goals ইম্পোর্ট করা হলো
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { scrollTo } from "./utils/scroll";   // ✅ সঠিক utils পাথ থেকে scrollTo আনা হলো


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
    }  catch {
      // খালি ব্লক এরর এড়াতে একটি সাধারণ কমেন্ট বা কনসোল লগ দেওয়া হলো
      console.log("Theme loading error caught");
    }
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

// ═════════════════════════════════════════════════════════════
//  ROOT: App
//  useDarkMode applies "dark" to <html> and persists to localStorage
// ═════════════════════════════════════════════════════════════
export default function App() {
  const [dark, setDark] = useDarkMode();
  const active = useActiveSection(); 

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

      {/* ✅ আপনার সবকটি কম্পোনেন্ট এখন সঠিক প্রোপস সহ এখানে মডিউলার হিসেবে লিংকড */}
      <Navbar dark={dark} setDark={setDark} active={active} DATA={DATA} NAV_LINKS={NAV_LINKS} scrollTo={scrollTo} />
      <Hero DATA={DATA} scrollTo={scrollTo} />
      <Skills SKILLS={SKILLS} />
      <Projects PROJECTS={PROJECTS} />
      <Goals DATA={DATA} GOALS={GOALS} />
      <Contact DATA={DATA} />
      <Footer DATA={DATA} />
    </div>
  );
}
