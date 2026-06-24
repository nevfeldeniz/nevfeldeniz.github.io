"use client";

const links = [
  { href: "#about", label: "Hakkımda" },
  { href: "#timeline", label: "Yolculuk" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          NDS<span className="text-brand-500">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-400 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-zinc-950 font-medium transition"
        >
          İletişime Geç
        </a>
      </nav>
    </header>
  );
}
