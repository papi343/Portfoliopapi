"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Code2,
  ShieldCheck,
  Database,
  GitBranch,
  Download,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";

const EXPERIENCES = [
  {
    role: "Développeur Full-Stack — Freelance",
    period: "Depuis 2024",
    location: "Dakar, Sénégal",
    highlights: [
      "Réalisation de projets web pour plusieurs clients : conception d'API REST avec Laravel et NestJS, développement front-end avec React.js.",
      "Conception d'EventBillet (plateforme de billetterie) : architecture en couches (Services, Policies), gestion des places en temps réel avec transactions et verrous DB anti-survente, paiement Stripe (webhook signé), billets PDF à QR code chiffré et notifications automatisées (Events/Listeners, Queues).",
      "Contribution, avec l'équipe technique d'AMBO Tech, à l'application web GuoGoree (plateforme de réservation de billets d'excursions et d'hébergements touristiques) : développement de l'API back-end.",
      "Développement d'une plateforme d'annonces en ligne adaptée au marché sénégalais : gestion des annonces, recherche multicritère et messagerie entre utilisateurs.",
      "Mise en place de l'authentification (JWT, Sanctum), de l'autorisation par rôles (RBAC) et de la gestion de données relationnelles (MySQL, PostgreSQL).",
    ],
    tech: ["Laravel", "NestJS", "React.js", "MySQL", "PostgreSQL", "API REST", "Stripe", "Git"],
  },
  {
    role: "Développeur Full-Stack — Think and Code (Équipe technique)",
    period: "Depuis 2025",
    location: "Dakar, Sénégal",
    highlights: [
      "Participation active aux projets techniques de la communauté : développement collaboratif avec Git, revues de code (Pull Requests) et partage de bonnes pratiques d'architecture.",
      "Contribution technique en équipe à l'évolution de la plateforme d'annonces.",
    ],
    tech: ["Git & GitHub", "Code Review", "Travail d'équipe", "Architecture logicielle"],
  },
  {
    role: "Membre — Laravel Sénégal Community",
    period: "Actif",
    location: "Dakar, Sénégal",
    highlights: [
      "Veille technologique continue sur l'écosystème PHP/Laravel, échange de bonnes pratiques et entraide entre développeurs.",
    ],
    tech: ["Laravel", "PHP", "Veille technologique", "Communauté"],
  },
];

const FORMATIONS = [
  {
    degree: "Licence 3 — Génie Logiciel",
    school: "Institut Supérieur d'Informatique (ISI) — Keur Massar, Dakar",
    period: "En cours (Diplôme prévu en 2027)",
    details:
      "Conception logicielle (UML, Merise), architecture d'applications, bases de données relationnelles, programmation orientée objet et développement web/mobile.",
  },
  {
    degree: "BTS en Informatique",
    school: "Institut Supérieur d'Informatique (ISI) — Dakar",
    period: "Juillet 2026",
    details:
      "Algorithmique, développement d'applications, administration de bases de données SQL et réseaux.",
  },
];

const WORK_METHOD = [
  {
    icon: <Database size={18} className="text-indigo-400" />,
    step: "01. Modélisation & Schéma de données",
    description:
      "Avant de coder, je modélise les entités et leurs relations (MCD/MLD, UML, Prisma Schema ou migrations Laravel) avec des contraintes d'intégrité fortes.",
  },
  {
    icon: <Code2 size={18} className="text-pink-400" />,
    step: "02. Architecture Backend Modulaire",
    description:
      "Je structure mes API REST avec une séparation nette des responsabilités (Controllers, Services, DTO/FormRequests, Policies, Repository Pattern et principes DDD).",
  },
  {
    icon: <ShieldCheck size={18} className="text-emerald-400" />,
    step: "03. Sécurité, Validation & Rôles",
    description:
      "Chaque endpoint est protégé : authentification JWT/Sanctum, contrôle d'accès par rôles (RBAC), validation stricte des entrées et transactions SQL sur les opérations critiques.",
  },
  {
    icon: <GitBranch size={18} className="text-amber-400" />,
    step: "04. Tests Postman, Git & Intégration UI",
    description:
      "Je teste systématiquement mes routes avec Postman, versionne mon travail sur GitHub (revues de code) et connecte des interfaces React/TypeScript fluides.",
  },
];

export default function AboutPage() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)",
        }}
      />

      <div
        className="max-w-6xl mx-auto px-6 py-14"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(14px)",
          transition: "all 0.6s ease",
        }}
      >
        {/* En-tête */}
        <div className="max-w-3xl mb-14">
          <p
            className="text-xs text-indigo-400 tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            À PROPOS & PARCOURS
          </p>
          <h1
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Étudiant en Génie Logiciel & Développeur orienté Backend
          </h1>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Je suis <strong className="text-white">Yaya Dabo</strong>, étudiant
            en <strong className="text-white">Licence 3 Génie Logiciel</strong>{" "}
            à l&apos;Institut Supérieur d&apos;Informatique (ISI Keur Massar,
            Dakar) et{" "}
            <strong className="text-white">
              développeur full-stack freelance depuis 2024
            </strong>
            .
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            Attiré par la conception de produits numériques fiables et
            d&apos;API REST bien architecturées, je construis des applications de
            bout en bout avec <strong className="text-white">Laravel</strong>,{" "}
            <strong className="text-white">NestJS</strong>,{" "}
            <strong className="text-white">React / TypeScript</strong> et des
            bases de données relationnelles (
            <strong className="text-white">MySQL, PostgreSQL, Prisma</strong>).
            Je travaille avec Git au quotidien, aussi bien en autonomie
            qu&apos;en équipe (revues de code), et je lis régulièrement la
            documentation technique en anglais (niveau B2).
          </p>
        </div>

        {/* Objectifs de candidature */}
        <section className="rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.07] p-6 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs text-indigo-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span style={{ fontFamily: "var(--font-mono)" }}>
                  OBJECTIFS PROFESSIONNELS ACTUELS
                </span>
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                À la recherche d&apos;un Stage ou d&apos;un poste de Développeur
                Junior
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Je souhaite intégrer une équipe technique exigeante pour
                contribuer à des projets concrets et continuer à progresser sur
                des problématiques d&apos;architecture et de mise en production.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 pt-2">
                {[
                  "Stage en développement Backend (Laravel / NestJS)",
                  "Stage en développement Full-Stack (React / API)",
                  "Stage en Bases de données & Modélisation SQL",
                  "Poste de Développeur Junior (Backend / Full-Stack)",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center gap-2 text-xs text-slate-200"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href="/cv.pdf"
                download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Download size={14} />
                <span>Télécharger mon CV (PDF)</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-medium transition-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>Me proposer une opportunité</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Ma manière de travailler */}
        <section className="mb-16">
          <p
            className="text-xs text-indigo-400 tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            MÉTHODOLOGIE
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ma manière de concevoir et développer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORK_METHOD.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/[0.08] bg-[#111520]/85 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-sm font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.step}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expériences & Formation sur 2 colonnes */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          {/* Expériences professionnelles & communautaires */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <Briefcase size={20} className="text-indigo-400" />
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Expériences & Collaborations
              </h2>
            </div>

            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.role}
                  className="rounded-2xl border border-white/[0.08] bg-[#111520]/85 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3
                      className="text-base sm:text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <span className="text-indigo-400 mt-1">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formation, Langues & Savoir-être */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <GraduationCap size={20} className="text-pink-400" />
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Formations académiques
                </h2>
              </div>

              <div className="space-y-4">
                {FORMATIONS.map((f) => (
                  <div
                    key={f.degree}
                    className="rounded-2xl border border-white/[0.08] bg-[#111520]/85 p-5"
                  >
                    <span
                      className="inline-block text-[11px] text-pink-300 bg-pink-500/10 border border-pink-500/25 px-2.5 py-0.5 rounded-full mb-2"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {f.period}
                    </span>
                    <h3
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f.degree}
                    </h3>
                    <p className="text-xs text-indigo-300 mb-2">{f.school}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {f.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Savoir-être & Langues */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#111520]/85 p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-emerald-400" />
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Savoir-être & Langues
                </h3>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[11px] uppercase tracking-wider text-slate-400"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Qualités professionnelles
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Rigueur & souci de qualité",
                    "Prise en compte des retours (Code Review)",
                    "Autonomie",
                    "Esprit d'équipe",
                    "Résolution de problèmes",
                    "Curiosité technique",
                  ].map((soft) => (
                    <span
                      key={soft}
                      className="text-xs px-3 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.06]"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
                <p
                  className="text-[11px] uppercase tracking-wider text-slate-400"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Langues
                </p>
                <p>
                  <strong className="text-white">Français :</strong> Courant /
                  Natif
                </p>
                <p>
                  <strong className="text-white">Anglais (B2) :</strong> Lecture
                  fluide de documentation technique et veille
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation suivante */}
        <div className="pt-8 border-t border-white/[0.08] flex justify-end">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>Découvrir mes compétences détaillées</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}