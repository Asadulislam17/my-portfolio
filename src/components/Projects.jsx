import React from 'react';
import { SectionHeader } from './Reusables'; // হেডার মডিউল লিংক করা হলো

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
export default function Projects({ PROJECTS }) {
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