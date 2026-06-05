"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const CATEGORIES = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
];

const SKILLS: Record<string, { name: string; level: number; color: string }[]> = {
  backend: [
    { name: "Laravel", level: 92, color: "#ff6584" },
    { name: "NestJS", level: 88, color: "#6c63ff" },
    { name: "Express", level: 90, color: "#6c63ff" },
    { name: "REST APIs", level: 94, color: "#6c63ff" },
    { name: "GraphQL", level: 78, color: "#ff6584" },
    { name: "WebSocket", level: 80, color: "#6c63ff" },
  ],
  frontend: [
    { name: "React", level: 88, color: "#6c63ff" },
    { name: "Next.js", level: 85, color: "#6c63ff" },
    { name: "TypeScript", level: 87, color: "#6c63ff" },
    { name: "Tailwind CSS", level: 90, color: "#ff6584" },
    { name: "React Native", level: 75, color: "#6c63ff" },
    { name: "Framer Motion", level: 70, color: "#ff6584" },
  ],
  database: [
    { name: "PostgreSQL", level: 85, color: "#6c63ff" },
    { name: "MySQL", level: 82, color: "#6c63ff" },
    { name: "Redis", level: 75, color: "#ff6584" },
    { name: "MongoDB", level: 72, color: "#6c63ff" },
    { name: "Prisma", level: 80, color: "#6c63ff" },
  ],
  devops: [
    { name: "Docker", level: 80, color: "#6c63ff" },
    { name: "CI/CD", level: 75, color: "#ff6584" },
    { name: "AWS", level: 70, color: "#ff6584" },
    { name: "Vercel", level: 90, color: "#6c63ff" },
    { name: "Git", level: 95, color: "#6c63ff" },
  ],
};

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
          Un écosystème complet maîtrisé de l'interface au déploiement.
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