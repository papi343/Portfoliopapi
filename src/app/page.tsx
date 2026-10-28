"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Mail,
  Download,
  ArrowRight,
  Server,
  Database,
  Layers,
  ShieldCheck,
  ExternalLink,
  Code2,
  CheckCircle2,
} from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
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
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
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
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ME = {
  prenom: "Yaya",
  nom: "Dabo",
  email: "ydabo1876@gmail.com",
  github: "https://github.com/papi343",
  linkedin: "https://www.linkedin.com/in/yaya-dabo-a04041380/",
  tagline:
    "Étudiant en Génie Logiciel (Licence 3, ISI Dakar) et développeur full-stack freelance depuis 2024. Je conçois des API REST sécurisées, des architectures backend modulaires (Laravel, NestJS) et des applications web complètes avec React et TypeScript.",
};

const ROLES = [
  "Développeur Backend (Laravel · NestJS)",
  "Développeur Full-Stack (React · TypeScript)",
  "Concepteur d'API REST & Architectures Modulaires",
  "Modélisation & Bases de Données (MySQL · PostgreSQL)",
];

const CORE_TECHS = [
  "PHP · Laravel",
  "Node.js · NestJS",
  "API REST & JWT",
  "Prisma ORM",
  "MySQL",
  "PostgreSQL",
  "React · TypeScript",
  "Tailwind CSS",
  "WebSocket (Socket.IO)",
  "Git & GitHub",
];

const PILLARS = [
  {
    icon: <Server size={20} className="text-indigo-400" />,
    title: "Développement Backend & API REST",
    description:
      "Conception d'API RESTful structurées avec Laravel et NestJS : architecture modulaire, principes DDD, authentification JWT/Sanctum, contrôle d'accès par rôles (RBAC, Guards, Policies) et WebSockets temps réel.",
    tags: ["Laravel", "NestJS", "JWT / Sanctum", "Socket.IO", "Validation DTO"],
  },
  {
    icon: <Database size={20} className="text-pink-400" />,
    title: "Bases de Données & Modélisation",
    description:
      "Conception de schémas relationnels (UML, Merise MCD/MLD), gestion des relations entre entités, transactions SQL avec verrous anti-survente et requêtes optimisées via Prisma ORM et Eloquent.",
    tags: ["MySQL", "PostgreSQL", "Prisma ORM", "Eloquent", "Transactions SQL"],
  },
  {
    icon: <Layers size={20} className="text-emerald-400" />,
    title: "Applications Full-Stack & Interfaces",
    description:
      "Développement d'interfaces clientes réactives et tableaux de bord d'administration connectés aux API, avec gestion d'état propre, typage TypeScript et design responsive.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "React Native (apprentissage)"],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "EventBillet — Plateforme de billetterie",
    badge: "Laravel 13 · API REST v1 · Stripe",
    description:
      "Architecture en couches (Services, Policies), réservation avec transactions et verrous DB anti-survente, webhook Stripe signé, billets PDF à QR code chiffré et files d'attente (Queues).",
    tech: ["Laravel", "MySQL", "Stripe Webhook", "Sanctum", "React", "TypeScript"],
    backendUrl: "https://github.com/papi343/EventBillet",
    frontendUrl: "https://github.com/papi343/front-eventBillets",
  },
  {
    title: "Gestion RV Hospitaliers (Hopital-RDV)",
    badge: "NestJS · Prisma · WebSocket · RBAC",
    description:
      "API REST modulaire pour la gestion des rendez-vous médicaux, plannings médecins et dossiers patients. Authentification JWT, rôles (PATIENT, DOCTOR, ADMIN), notifications Socket.IO et emails.",
    tech: ["NestJS", "Prisma ORM", "MySQL", "Socket.IO", "JWT", "React"],
    backendUrl: "https://github.com/papi343/GestionRvHospitaliers_API",
    frontendUrl: "https://github.com/papi343/frontGestionRvHospitaliers",
  },
  {
    title: "StockSEN & immoAgence (Démos en ligne)",
    badge: "Laravel · React · MySQL · Déployés",
    description:
      "Deux plateformes full-stack en production : gestion de stock et facturation commerciale (StockSEN) et gestion d'annonces immobilières multicritères (immoAgence).",
    tech: ["Laravel", "API REST", "MySQL", "React.js", "Tailwind CSS"],
    backendUrl: "https://github.com/papi343/StockSen",
    frontendUrl: "https://github.com/papi343/FrontStockSen",
    demoUrl: "https://front-stock-sen.vercel.app/",
  },
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        t.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          45
        );
      } else {
        t.current = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => {
      if (t.current) clearTimeout(t.current);
    };
  }, [displayed, typing, roleIndex]);

  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden">
      {/* Halos lumineux sobres */}
      <div
        className="absolute top-16 left-1/4 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.11) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-20"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(14px)",
          transition: "all 0.6s ease",
        }}
      >
        {/* SECTION HERO */}
        <section className="grid lg:grid-cols-12 gap-10 items-center pb-20 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ fontFamily: "var(--font-mono)" }}>
                Recherche de Stage (Backend · Full-Stack · BDD) & Poste Junior
              </span>
            </div>

            {/* Nom & Positionnement */}
            <h1
              className="font-extrabold tracking-tight text-white leading-[1.08] text-4xl sm:text-6xl md:text-7xl mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ME.prenom} <span className="text-indigo-400">{ME.nom}</span>
            </h1>

            <p
              className="text-lg sm:text-xl font-semibold text-slate-200 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Développeur Backend & Full-Stack —{" "}
              <span className="text-indigo-400">Laravel · NestJS · React</span>
            </p>

            {/* Typewriter */}
            <div
              className="text-sm sm:text-base text-indigo-300/90 mb-6 min-h-[1.75rem] flex items-center"
              style={{ fontFamily: "var(--font-mono)" }}
              aria-live="polite"
            >
              <span className="text-pink-400 mr-2">&gt;</span>
              <span>{displayed}</span>
              <span
                className="ml-0.5 text-indigo-400"
                style={{ animation: "blink 1s step-end infinite" }}
              >
                _
              </span>
            </div>

            {/* Présentation claire */}
            <p className="text-slate-300 max-w-2xl text-base leading-relaxed mb-8">
              {ME.tagline}
            </p>

            {/* Badges technologiques principaux */}
            <div className="flex flex-wrap gap-2 mb-9 max-w-2xl">
              {CORE_TECHS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg border border-white/10 bg-[#111520] text-xs text-slate-200 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Boutons d'action principaux */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-600/20 transition-all duration-200"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Explorer mes projets</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="/cv.pdf"
                download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-indigo-500/40 text-white rounded-xl text-sm font-medium transition-all duration-200"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Download size={15} className="text-indigo-400" />
                <span>Télécharger mon CV</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white rounded-xl text-sm transition-all duration-200"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Me contacter</span>
              </Link>
            </div>

            {/* Liens directs vérifiables */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={ME.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-indigo-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <GithubIcon size={16} />
                <span>github.com/papi343</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={ME.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-indigo-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${ME.email}`}
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-indigo-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Mail size={16} />
                <span>{ME.email}</span>
              </a>
            </div>
          </div>

          {/* Carte Synthèse & Architecture Backend (Colonne droite) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-[#111520]/90 p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span
                  className="text-[11px] text-slate-400"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  profil-technique.json
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p
                    className="text-slate-400 uppercase tracking-wider text-[10px] mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Positionnement
                  </p>
                  <p className="text-white font-semibold text-sm">
                    Backend Developer / Full-Stack Developer
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <p
                      className="text-indigo-400 font-bold text-xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Depuis 2024
                    </p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Freelance Full-Stack & Projets d&apos;équipe
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <p
                      className="text-pink-400 font-bold text-xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      34+ Dépôts
                    </p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Projets publics vérifiables sur GitHub
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <p
                    className="text-slate-400 uppercase tracking-wider text-[10px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Points forts Backend
                  </p>
                  <ul className="space-y-1.5 text-slate-200">
                    {[
                      "API REST (Laravel & NestJS)",
                      "Auth JWT / Sanctum & Rôles (RBAC)",
                      "Modélisation MySQL, PostgreSQL & Prisma",
                      "Transactions SQL, WebSockets & Stripe",
                    ].map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2
                          size={13}
                          className="text-indigo-400 shrink-0"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-indigo-300 font-medium">
                      Formation actuelle
                    </p>
                    <p className="text-xs text-white font-semibold">
                      Licence 3 Génie Logiciel — ISI Dakar
                    </p>
                  </div>
                  <ShieldCheck size={18} className="text-indigo-400 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION PILIERS TECHNIQUES */}
        <section className="py-20 border-b border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p
                className="text-xs text-indigo-400 tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                SPÉCIALISATION TECHNIQUE
              </p>
              <h2
                className="text-2xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Conception de systèmes fiables de bout en bout
              </h2>
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>Voir toutes mes compétences</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.08] bg-[#111520]/80 p-6 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION APERÇU PROJETS PHARES */}
        <section className="pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p
                className="text-xs text-pink-400 tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                RÉALISATIONS VÉRIFIABLES
              </p>
              <h2
                className="text-2xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Projets Backend & Full-Stack Récents
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>Explorer les 9 projets & dépôts GitHub</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="rounded-2xl border border-white/[0.08] bg-[#111520]/80 p-6 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span
                    className="inline-block text-[11px] text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-3 py-1 rounded-full mb-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {proj.badge}
                  </span>
                  <h3
                    className="text-lg font-bold text-white mb-2.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <a
                      href={proj.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-pink-500/50 hover:text-white text-xs text-slate-300 transition-all"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <Code2 size={13} className="text-pink-400" />
                      <span>API Back</span>
                    </a>
                    <a
                      href={proj.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-indigo-500/50 hover:text-white text-xs text-slate-300 transition-all"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <GithubIcon size={13} />
                      <span>Front</span>
                    </a>
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium ml-auto transition-all"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <ExternalLink size={12} />
                        <span>Démo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-600 text-indigo-300 hover:text-white text-sm font-medium transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>Voir tous mes projets détaillés et mes dépôts GitHub</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}