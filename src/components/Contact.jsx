import React, { useState } from 'react';
import { SectionHeader } from './Reusables';

// ✅ ব্র্যাকেটের ভেতর { DATA } প্রোপস যুক্ত করা হলো এবং শুরুতে export default দেওয়া হলো
export default function Contact({ DATA }) {
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-60 rounded-full blur-3xl pointer-events-none bg-blue-100/60 dark:bg-blue-900/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Let's work together"
          title="Get in Touch"
          subtitle="Have a project or an opportunity? Drop me a message and I'll get back to you."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="rounded-2xl p-8 border shadow-xl bg-white border-gray-100 shadow-gray-100/80 dark:bg-gray-900/80 dark:border-gray-800 dark:shadow-none">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project or opportunity..." className={`${inputCls} resize-none`} />
              </div>
              {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
              <button onClick={handleSubmit} className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] ${sent ? "bg-green-500 hover:bg-green-400 text-white" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35"}`}>
                {sent ? "✅ Message sent!" : "Send Message"}
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 group bg-white border-gray-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 dark:bg-gray-900/70 dark:border-gray-800 dark:hover:border-blue-800/50 dark:hover:shadow-blue-950/20">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>{s.icon}</div>
                <div>
                  <div className="text-xs font-medium mb-0.5 text-gray-400 dark:text-gray-500">{s.label}</div>
                  <div className="text-sm font-medium transition-colors text-gray-700 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">{s.value}</div>
                </div>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
