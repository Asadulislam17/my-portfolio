import React from 'react';
import { SectionHeader } from './Reusables';

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
export default function Skills({ SKILLS }) {
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