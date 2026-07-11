"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
  { id: "cms", label: "CMS" },
];

const SKILLS: Record<string, { name: string; level: number; color: string }[]> = {
  backend: [
    { name: "Laravel", level: 92, color: "#ff6584" },
    { name: "Java", level: 70, color: "#6c63ff" },
    { name: "Python", level: 70, color: "#ff6584" },
    { name: "REST APIs", level: 94, color: "#6c63ff" },
    { name: "C", level: 70, color: "#ff6584" },
    { name: "C++", level: 70, color: "#6c63ff" },

  ],
  frontend: [
    { name: "React", level: 88, color: "#6c63ff" },
    { name: "Next.js", level: 60, color: "#6c63ff" },
    { name: "Tailwind CSS", level: 90, color: "#ff6584" },
  ],
  database: [
    { name: "PostgreSQL", level: 85, color: "#6c63ff" },
    { name: "MySQL", level: 82, color: "#6c63ff" },
    { name: "Redis", level: 75, color: "#ff6584" },
  ],
  devops: [
    { name: "Git", level: 95, color: "#6c63ff" },
  ],
  cms: [
    { name: "WordPress", level: 80, color: "#ff6584" },
  ],
};

const REPOSITORIES = [
  {
    name: "immoAgence (Backend)",
    description: "API de gestion immobilière robuste avec gestion des utilisateurs, des biens et de la messagerie.",
    url: "https://github.com/papi343/immo-agence",
    category: "backend",
    tech: ["Laravel", "REST API", "MySQL"],
  },
  {
    name: "immoAgence (Frontend)",
    description: "Interface client web moderne pour la recherche, le filtrage et la consultation de biens immobiliers.",
    url: "https://github.com/papi343/frontimmo-agence",
    category: "frontend",
    tech: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    name: "StockSEN (Backend)",
    description: "Moteur backend complet pour le suivi des ventes, la gestion de stocks et la facturation commerciale.",
    url: "https://github.com/papi343/StockSen",
    category: "backend",
    tech: ["Laravel", "MySQL", "PHP"],
  },
  {
    name: "StockSEN (Frontend)",
    description: "Tableau de bord interactif pour la gestion d'inventaire en temps réel et la facturation.",
    url: "https://github.com/papi343/FrontStockSen",
    category: "frontend",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
];

export default function SkillsPage() {
  const [active, setActive] = useState("backend");
  const [show, setShow] = useState(false);
  const [animated, setAnimated] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(id);
  }, []);

  // Anime les barres à chaque changement de catégorie
  useEffect(() => {
    setAnimated(false);
    const id = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">

      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-16"
        style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>

        {/* Header */}
        <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}>
          COMPÉTENCES
        </p>
        <h1 className="font-black text-5xl md:text-7xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}>
          Mes compétences
        </h1>
        <p className="text-[#4a4a6a] text-sm mb-12 max-w-xl">
          Un écosystème complet maîtrisé de l’interface au déploiement.
        </p>

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                active === cat.id
                  ? "bg-[#6c63ff] text-white"
                  : "border border-white/10 text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/40"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Barres de compétences */}
        <div ref={barsRef} className="grid md:grid-cols-2 gap-6">
          {SKILLS[active].map((skill, i) => (
            <div key={skill.name} className="bg-white/3 border border-white/5 rounded-xl p-5"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-white" style={{ fontFamily: "var(--font-mono)" }}>
                  {skill.name}
                </span>
                <span className="text-xs text-[#4a4a6a]" style={{ fontFamily: "var(--font-mono)" }}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    background: skill.color,
                    transitionDelay: `${i * 80}ms`,
                  }} />
              </div>
            </div>
          ))}
        </div>

        {/* Section Dépôts Git */}
        <div className="mt-24 border-t border-white/5 pt-20 relative">
          {/* Background glow specific to repositories section */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none z-0"
            style={{ background: "radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)" }} />

          <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4 relative z-10"
            style={{ fontFamily: "var(--font-mono)" }}>
            PROJETS & RÉPOSITORIES GITHUB
          </p>
          <h2 className="font-black text-3xl md:text-5xl text-white mb-5 relative z-10"
            style={{ fontFamily: "var(--font-display)" }}>
            Dépôts Git & Codes Sources
          </h2>
          <p className="text-[#8888aa] text-sm mb-12 max-w-xl relative z-10 leading-relaxed">
            Explorez directement les codes sources et l&apos;architecture de mes projets majeurs. Chaque dépôt témoigne de mes standards de qualité et de mes choix techniques.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            {REPOSITORIES.map((repo) => {
              const isBackend = repo.category === "backend";
              const gradientLine = isBackend 
                ? "bg-gradient-to-r from-[#ff6584] to-[#ff85a0]" 
                : "bg-gradient-to-r from-[#6c63ff] to-[#8d87ff]";

              return (
                <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] rounded-2xl p-7 transition-all duration-300 hover:border-[#6c63ff]/40 hover:bg-white/[0.05] hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(108,99,255,0.08)]"
                >
                  {/* Neon top border line */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${gradientLine}`} />

                  {/* Large background watermark GitHub icon */}
                  <div className="absolute right-4 bottom-4 text-white/[0.02] group-hover:text-white/[0.06] transition-all duration-300 pointer-events-none transform group-hover:scale-110">
                    <GithubIcon size={120} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-5">
                      <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold border ${
                        isBackend
                          ? "border-[#ff6584]/20 text-[#ff6584] bg-[#ff6584]/5"
                          : "border-[#6c63ff]/20 text-[#6c63ff] bg-[#6c63ff]/5"
                      }`}>
                        {repo.category}
                      </span>
                      <span className="text-[#4a4a6a] group-hover:text-white transition-colors duration-200">
                        <GithubIcon size={20} />
                      </span>
                    </div>

                    <h3 className="text-white font-extrabold text-xl mb-3 group-hover:text-[#6c63ff] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-display)" }}>
                      {repo.name}
                    </h3>
                    
                    <p className="text-[#8888aa] text-sm leading-relaxed mb-6 group-hover:text-[#a5a5c5] transition-colors duration-200">
                      {repo.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {repo.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-[#8c8cb0] border border-white/5 font-mono group-hover:border-white/10 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-[#6c63ff] group-hover:text-white transition-colors font-mono font-bold">
                      <span>Explorer le code source</span>
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation suivante */}
        <div className="mt-16 flex justify-end">
          <Link href="/projects"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#6c63ff]/50 text-[#4a4a6a] hover:text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            Voir mes projets →
          </Link>
        </div>

      </div>
    </div>
  );
}