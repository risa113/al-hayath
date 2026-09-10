import { ShieldCheck } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ goAdmin }) {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="text-lg font-black tracking-tight">
          <span className="gradient-text">MT</span> Portfolio
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <button onClick={goAdmin} className="flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-300/10">
          <ShieldCheck size={16} /> Admin
        </button>
      </div>
    </nav>
  );
}
