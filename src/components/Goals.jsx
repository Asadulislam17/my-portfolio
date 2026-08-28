import React from 'react';
import { SectionHeader } from './Reusables'; // ✅ একই ফোল্ডারে থাকলে এটি ঠিক আছে


// ✅ ব্র্যাকেটের ভেতর { DATA, GOALS } প্রোপস যুক্ত করা হলো এবং শুরুতে export default দেওয়া হলো
export default function Goals({ DATA, GOALS }) {
  const stats = [
    { value: "3+",   label: "Years Coding"     },
    { value: "5",    label: "Projects Built"   },
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
