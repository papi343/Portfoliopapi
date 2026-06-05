"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Link as Linkedin, Mail, Download, ArrowRight } from "lucide-react";

// ✏️ MODIFIE CES DONNÉES AVEC LES TIENNES
const ME = {
  prenom: "Votre",
  nom: "Nom",
  email: "votre@email.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  tagline: "Je conçois et développe des applications modernes alliant performance, design et accessibilité.",
};

const ROLES = [
  "développeur fullstack",
  "architecte backend",
  "développeur React Native",
  "passionné de systèmes",
];

const TECHS = [
  "React", "Next.js", "TypeScript", "NestJS", "Laravel",
  "Node.js", "PostgreSQL", "Redis", "Docker", "AWS",
  "GraphQL", "Prisma", "React Native", "Tailwind", "Git",
];

export default function HomePage() {
  // --- Typewriter ---
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        t.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        t.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => { if (t.current) clearTimeout(t.current); };
  }, [displayed, typing, roleIndex]);

  // --- Mount animation ---
  const [show, setShow] = useState(false);
  useEffect(() => { const id = setTimeout(() => setShow(true), 80); return () => clearTimeout(id); }, []);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden">

      {/* Étoiles */}
      {Array.from({ length: 45 }).map((_, i) => (
        <div key={i} className="absolute w-px h-px rounded-full bg-white" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${3 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite`,
          "--op": 0.15 + Math.random() * 0.5,
        } as React.CSSProperties} />
      ))}

      {/* Orbes de lumière */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,101,132,0.08) 0%, transparent 70%)" }} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
            {ME.prenom[0]}. {ME.nom.split(" ")[0]}
          </span>
          <div className="hidden md:flex gap-1">
            {[["Accueil", "/"], ["À propos", "/about"], ["Compétences", "/skills"], ["Projets", "/projects"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={href} href={href}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  href === "/" ? "bg-[#6c63ff] text-white" : "text-[#4a4a6a] hover:text-white hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-28"
        style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>

        {/* Eyebrow */}
        <p className="text-[#4a4a6a] text-sm tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}>
          SALUT, JE SUIS
        </p>

        {/* Nom */}
        <h1 className="font-black leading-none mb-6 text-7xl md:text-9xl"
          style={{ fontFamily: "var(--font-display)" }}>
          <span className="block">{ME.prenom}</span>
          <span className="block">{ME.nom}</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl text-[#6c63ff] mb-8 h-8" style={{ fontFamily: "var(--font-mono)" }}>
          | {displayed}
          <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
        </div>

        {/* Tagline */}
        <p className="text-[#4a4a6a] max-w-xl text-base leading-relaxed mb-10">
          {ME.tagline}
        </p>

        {/* Pills de techno */}
        <div className="flex flex-wrap gap-2 mb-12 max-w-2xl">
          {TECHS.map((tech) => (
            <span key={tech}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#4a4a6a] hover:border-[#6c63ff]/50 hover:text-[#6c63ff] transition-colors cursor-default"
              style={{ fontFamily: "var(--font-mono)" }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/projects"
            className="flex items-center gap-2 px-6 py-3 bg-[#6c63ff] hover:bg-[#5a52e0] text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            Voir mes projets <ArrowRight size={14} />
          </Link>
          <Link href="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#6c63ff]/50 text-[#4a4a6a] hover:text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            Me contacter
          </Link>
          <a href="#" download
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#ff6584]/50 text-[#4a4a6a] hover:text-white rounded-full text-sm transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}>
            <Download size={13} /> Télécharger CV
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-5">
          <span className="text-xs text-[#4a4a6a] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}>SOCIAL</span>
          {[
            
            { href: ME.linkedin, icon: <Linkedin size={17} /> },
            { href: `mailto:${ME.email}`, icon: <Mail size={17} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#4a4a6a] hover:text-white hover:border-[#6c63ff]/50 transition-all duration-200">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Ticker bas de page */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: "ticker 25s linear infinite" }}>
          {[...Array(2)].map((_, j) =>
            ["TOUJOURS EN TRAIN DE CONSTRUIRE", "TOUJOURS EN TRAIN D'APPRENDRE", "TOUJOURS EN TRAIN D'ITÉRER"].map((txt) => (
              <span key={`${j}-${txt}`} className="text-xs text-[#2a2a45] tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}>
                — {txt}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}