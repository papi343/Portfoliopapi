"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
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

const CATEGORIES = ["Tous", "Web"];

const PROJECTS = [
  {
    title: "it-quiz",
    description: "Une plateforme interactive de quiz pour tester ses compétences en informatique avec un système de score et de chronométrage en temps réel.",
    tags: ["Laravel", "React", "PostgreSQL"],
    category: "Web",
    demo: "#",
    github: "#",
  },
  {
    title: "grade manager",
    description: "Une application complète de gestion académique pour le suivi des notes des étudiants, des classes et la génération de rapports de performance.",
    tags: ["PHP", "Tailwind", "HTML", "JavaScript"],
    category: "Web",
    demo: "#",
    github: "#",
  },
  {
    title: "StockSEN",
    description: "Une solution complète de gestion de stock, d’inventaire et de facturation optimisée pour les commerces locaux.",
    tags: ["Laravel", "React", "MySQL"],
    category: "Web",
    demo: "https://front-stock-sen.vercel.app/",
    github: {
      frontend: "https://github.com/papi343/FrontStockSen",
      backend: "https://github.com/papi343/StockSen",
    },
  },
  {
    title: "immoAgence",
    description: "Une plateforme moderne de gestion et de recherche de biens immobiliers (appartements, villas, terrains) avec recherche multicritère et mise en relation.",
    tags: ["Laravel", "React", "MySQL"],
    category: "Web",
    demo: "https://frontimmo-agence.vercel.app/",
    github: {
      frontend: "https://github.com/papi343/frontimmo-agence",
      backend: "https://github.com/papi343/immo-agence",
    },
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("Tous");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(id);
  }, []);

  const filtered = active === "Tous"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">

      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,101,132,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-16"
        style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>

        {/* Header */}
        <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}>
          PROJETS
        </p>
        <h1 className="font-black text-5xl md:text-7xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}>
          Ce sur quoi<br />j’ai travaillé
        </h1>
        <p className="text-[#4a4a6a] text-sm mb-12 max-w-xl">
          Une sélection de projets qui mettent en valeur mes compétences et ma passion pour le développement web.
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                active === cat
                  ? "bg-[#6c63ff] text-white"
                  : "border border-white/10 text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/40"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const hasDemo = project.demo && project.demo !== "#";
            const githubObj = typeof project.github === "object" ? project.github : null;
            const hasGithub = project.github && (
              typeof project.github === "string"
                ? project.github !== "#"
                : !!(githubObj?.frontend || githubObj?.backend)
            );

            return (
              <div key={i}
                onClick={() => {
                  if (hasDemo) {
                    window.open(project.demo, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`group border border-white/5 bg-white/3 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  hasDemo 
                    ? "cursor-pointer hover:border-[#6c63ff]/50 hover:bg-white/5 hover:-translate-y-1" 
                    : "hover:border-[#6c63ff]/30"
                }`}
              >

                {/* Catégorie */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-[#4a4a6a] border border-white/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" onClick={(e) => e.stopPropagation()}>
                    {hasGithub && (
                      typeof project.github === "string" ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/50 transition-all"
                          title="Code Source">
                          <GithubIcon size={14} />
                        </a>
                      ) : (
                        <div className="flex gap-2">
                          {githubObj?.frontend && (
                            <a href={githubObj.frontend} target="_blank" rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/50 transition-all relative group/tooltip"
                              title="Code Source (Frontend)">
                              <GithubIcon size={14} />
                              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Front
                              </span>
                            </a>
                          )}
                          {githubObj?.backend && (
                            <a href={githubObj.backend} target="_blank" rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/50 transition-all relative group/tooltip"
                              title="Code Source (Backend)">
                              <GithubIcon size={14} />
                              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Back
                              </span>
                            </a>
                          )}
                        </div>
                      )
                    )}
                    {hasDemo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/50 transition-all"
                        title="Voir la démo">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Titre & description */}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6c63ff] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {project.title}
                  </h3>
                  <p className="text-[#4a4a6a] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-[#6c63ff] border border-[#6c63ff]/20"
                      style={{ fontFamily: "var(--font-mono)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation suivante */}
        <div className="mt-16 flex justify-end">
          <Link href="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#6c63ff]/50 text-[#4a4a6a] hover:text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            Me contacter →
          </Link>
        </div>

      </div>
    </div>
  );
}
