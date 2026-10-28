"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download, Terminal } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/skills", label: "Compétences" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#090b10]/85 backdrop-blur-xl">
      <nav
        aria-label="Navigation principale"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Identité */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-200">
            <Terminal size={16} />
          </span>
          <div className="flex flex-col">
            <span
              className="font-bold text-base tracking-tight text-white leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Yaya Dabo
            </span>
            <span
              className="text-[10px] text-slate-400 tracking-wider uppercase mt-0.5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Backend · Full-Stack
            </span>
          </div>
        </Link>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] rounded-full p-1">
          {LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Actions rapides Desktop */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/papi343"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Yaya Dabo"
            className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            GitHub
          </a>
          <a
            href="/cv.pdf"
            download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600/15 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-medium transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#090b10]/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-2">
          {LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white font-medium"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {label}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center gap-3">
            <a
              href="https://github.com/papi343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-slate-200 hover:border-indigo-500/40"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              GitHub (34+ dépôts)
            </a>
            <a
              href="/cv.pdf"
              download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <Download size={13} />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

