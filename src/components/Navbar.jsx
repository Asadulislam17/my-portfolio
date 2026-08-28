import React, { useState, useEffect } from 'react';
import { scrollTo } from '../utils/scroll'; // ✅ সঠিক পাথ: এক ধাপ পেছনে গিয়ে utils ফোল্ডার


// ═════════════════════════════════════════════════════════════
//  COMPONENT: ThemeToggle
// ═════════════════════════════════════════════════════════════
function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-gray-200 dark:bg-blue-600"
    >
      <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm shadow transition-all duration-300 bg-white dark:bg-gray-900 ${dark ? "translate-x-7" : "translate-x-0"}`}>
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Navbar
// ═════════════════════════════════════════════════════════════
export default function Navbar({ dark, setDark, active, DATA, NAV_LINKS }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800/60" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="font-extrabold text-lg tracking-tight transition-colors text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          <span className="text-blue-500">&lt;</span>{DATA.name.split(" ")[0]}<span className="text-blue-500"> /&gt;</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} className={`text-sm font-medium transition-colors duration-200 ${active === link.toLowerCase() ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop: theme toggle + CV + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle dark={dark} setDark={setDark} />
          
          {/* ✅ আপনার রিকোয়েস্ট করা CV ডাউনলোড বাটন */}
          <a href="/my-cv.pdf" download="Asadul_Islam_CV.pdf" className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-950">
            Download CV
          </a>

          <a href={`mailto:${DATA.email}`} className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20">
            Hire Me
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4 border-t bg-white dark:bg-gray-950 border-gray-100 dark:border-gray-800">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => { scrollTo(link); setMenuOpen(false); }} className="text-left text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              {link}
            </button>
          ))}
          <a href="/my-cv.pdf" download="Asadul_Islam_CV.pdf" className="text-center text-sm font-semibold py-2 rounded-xl border border-blue-500 text-blue-500">Download CV</a>
        </div>
      </div>
    </nav>
  );
}
