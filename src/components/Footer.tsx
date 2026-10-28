import Link from "next/link";
import { Download, Mail, MapPin, Terminal, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07090e] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12 pb-10 border-b border-white/[0.06]">
          {/* Colonne 1 : Profil & Positionnement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Terminal size={16} />
              </span>
              <span
                className="font-bold text-lg text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Yaya Dabo
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Étudiant en Génie Logiciel (Licence 3, ISI Keur Massar) et
              développeur full-stack freelance depuis 2024. Spécialisé en
              architecture backend, conception d&apos;API REST (Laravel, NestJS)
              et bases de données relationnelles.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ fontFamily: "var(--font-mono)" }}>
                Disponible : Stage (Backend / Full-Stack / BDD) & Poste Junior
              </span>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-slate-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/about", label: "À propos & Parcours" },
                { href: "/skills", label: "Compétences techniques" },
                { href: "/projects", label: "Projets & Dépôts Git" },
                { href: "/contact", label: "Me contacter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Liens directs & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-slate-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contact & Liens vérifiables
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin size={15} className="text-indigo-400 shrink-0" />
                <span>Keur Massar, Dakar, Sénégal</span>
              </li>
              <li>
                <a
                  href="mailto:ydabo1876@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  <Mail size={15} className="text-indigo-400 shrink-0" />
                  <span style={{ fontFamily: "var(--font-mono)" }}>
                    ydabo1876@gmail.com
                  </span>
                </a>
              </li>
              <li className="pt-1 flex flex-wrap gap-2">
                <a
                  href="https://github.com/papi343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-indigo-500/40 hover:text-white text-xs transition-all"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span>GitHub (papi343)</span>
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yaya-dabo-a04041380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-indigo-500/40 hover:text-white text-xs transition-all"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href="/cv.pdf"
                  download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs transition-all"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <Download size={12} />
                  <span>CV PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p style={{ fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Yaya Dabo — Développeur Backend &
            Full-Stack.
          </p>
          <p style={{ fontFamily: "var(--font-mono)" }}>
            Construit avec Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
