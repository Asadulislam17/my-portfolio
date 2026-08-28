import React from 'react';

// ═════════════════════════════════════════════════════════════
//  COMPONENT: Footer
// ═════════════════════════════════════════════════════════════
export default function Footer({ DATA }) {
  return (
    <footer className="py-8 text-center border-t bg-white border-gray-100 dark:bg-gray-950 dark:border-gray-800/50">
      <p className="text-sm text-gray-400 dark:text-gray-600">
        Built with React & Tailwind CSS · <span className="text-gray-500 dark:text-gray-500">{DATA.name}</span> · Full-Stack Developer © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
