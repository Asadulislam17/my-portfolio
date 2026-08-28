
// ═════════════════════════════════════════════════════════════
//  REUSABLE: SectionHeader
// ═════════════════════════════════════════════════════════════
export function SectionHeader({ label, title, subtitle }) {
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