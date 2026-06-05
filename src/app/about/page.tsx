"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STACK = [
  "TypeScript · React · React Native pour les frontends modernes",
  "NestJS · Laravel · Java pour des APIs backend robustes",
  "Docker · CI/CD · AWS pour une infrastructure fiable",
  "PostgreSQL · Redis pour des données performantes",
];

export default function AboutPage() {
  const [show, setShow] = useState(false);
  useEffect(() => { const id = setTimeout(() => setShow(true), 80); return () => clearTimeout(id); }, []);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">

      {/* Orbe */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-16"
        style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>

        {/* Eyebrow */}
        <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}>
          À PROPOS
        </p>

        {/* Headline */}
        <h1 className="font-black leading-tight mb-16 text-5xl md:text-7xl max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}>
          Architecte de systèmes,<br />curieux par nature.
        </h1>

        {/* Numéro décoratif */}
        <div className="absolute top-24 right-8 text-[200px] font-black text-white/3 leading-none select-none pointer-events-none"
          style={{ fontFamily: "var(--font-display)" }}>
          02
        </div>

        {/* Deux colonnes */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Vision */}
          <div>
            <h2 className="text-xs tracking-widest uppercase text-[#4a4a6a] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}>
              VISION
            </h2>
            <p className="text-[#8888aa] leading-relaxed text-sm">
              Je crois que les bons logiciels ne se codent pas — ils se conçoivent.
              À chaque système que je touche, je pense en termes de frontières, de contrats
              et d'évolution long terme. Microservices, architectures event-driven, séparation
              des domaines — ce ne sont pas des mots à la mode, ce sont des outils que j'explore
              activement pour construire des choses qui passent à l'échelle.
            </p>
          </div>

          {/* Ce que j'apporte */}
          <div>
            <h2 className="text-xs tracking-widest uppercase text-[#4a4a6a] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}>
              CE QUE J'APPORTE
            </h2>
            <p className="text-[#8888aa] leading-relaxed text-sm mb-6">
              Je construis des solutions fullstack complètes et prêtes pour la production —
              du schéma de base de données à l'UI déployée. Mon stack couvre :
            </p>
            <ul className="space-y-2">
              {STACK.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#6c63ff]"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="text-[#ff6584] mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Curiosité */}
        <div className="border border-white/5 bg-white/2 rounded-2xl p-8 mb-12">
          <h2 className="text-xs tracking-widest uppercase text-[#4a4a6a] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}>
            CURIOSITÉ
          </h2>
          <p className="text-[#8888aa] leading-relaxed text-sm max-w-2xl">
            Je suis le genre d'ingénieur qui lit des architecture decision records pour le plaisir.
            Qu'il s'agisse d'un nouveau pattern d'orchestration, d'un outil de distributed tracing
            ou d'un article sur les algorithmes de consensus — si ça rend les systèmes plus intelligents,
            je veux le comprendre.
          </p>
        </div>

        {/* Ticker bas */}
        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-[#2a2a45] tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}>
            — TOUJOURS EN TRAIN DE CONSTRUIRE. TOUJOURS EN TRAIN D'APPRENDRE. —
          </p>
        </div>

        {/* Navigation suivante */}
        <div className="mt-12 flex justify-end">
          <Link href="/skills"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#6c63ff]/50 text-[#4a4a6a] hover:text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            Voir mes compétences →
          </Link>
        </div>

      </div>
    </div>
  );
}