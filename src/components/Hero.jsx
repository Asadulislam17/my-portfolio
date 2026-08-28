import React from 'react';
import { scrollTo } from '../utils/scroll';

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Hero
// ═════════════════════════════════════════════════════════════
export default function Hero({ DATA }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950">

      {/* Ambient shadows / blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse bg-blue-200/50 dark:bg-blue-700/15" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-violet-200/40 dark:bg-violet-700/10" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Background Dot grid */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle,#3b82f6 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* ✅ গ্রিড লেআউট: মোবাইলে নিচে, ডেসকলাপে পাশাপাশি যাবে আপনার বায়ো এবং ছবি */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center text-left pt-16">
        
        {/* টেক্সট কন্টেন্ট (বাম পাশে ৮ কলাম) */}
        <div className="md:col-span-7 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/60 dark:border-blue-700/40 dark:text-blue-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
            Available for work
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              {DATA.name}
            </span>
            <br />
            <span className="text-gray-400 dark:text-gray-500 text-2xl sm:text-3xl">{DATA.role}</span>
          </h1>

          <p className="text-base sm:text-lg mb-8 leading-relaxed text-gray-500 dark:text-gray-400">
            {DATA.tagline}
          </p>

          {/* Action Call to Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => scrollTo("Projects")}
              className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all active:scale-95">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={() => scrollTo("Contact")}
              className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl border bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition-all active:scale-95">
              Get in Touch
            </button>
          </div>

          {/* Tech pills stack */}
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-2">
            {["React", "Laravel", "PHP", "Spring Boot", "MySQL", "Tailwind"].map((tech) => (
              <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 dark:bg-gray-800/70 dark:text-gray-400 dark:border-gray-700/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ✅ আপনার রিকোয়েস্ট করা ছবি সেকশন (ডান পাশে ৫ কলাম) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-violet-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            {/* 📁 Hero.jsx ফাইলের ভেতর ইমেজ ট্যাগটি এইভাবে পরিবর্তন করুন */}
            <img 
              src="/profile.png" 
              alt={DATA.name} 
              // ✅ এখানে object-cover এর পাশে object-top যুক্ত করা হয়েছে
              className="w-full h-full object-cover object-top rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl relative z-10"
              onError={(e) => { e.target.src = "https://unsplash.com"; }}
            />

          </div>
        </div>

      </div>

      {/* Scroll indicator cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 dark:text-gray-700">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
