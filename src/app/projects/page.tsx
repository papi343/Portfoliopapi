"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Server,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Code2,
} from "lucide-react";

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
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = [
  "Tous",
  "Backend & API",
  "Full-Stack",
  "Temps réel & Mobile",
];

type ProjectLink = {
  label: string;
  url: string;
  type: "backend" | "frontend" | "mobile";
};

type ProjectItem = {
  title: string;
  subtitle: string;
  category: string[];
  badge: string;
  description: string;
  backendHighlights: string[];
  tags: string[];
  demo?: string;
  links: ProjectLink[];
};

const PROJECTS: ProjectItem[] = [
  {
    title: "EventBillet",
    subtitle: "Plateforme de billetterie événementielle & API REST v1",
    category: ["Backend & API", "Full-Stack"],
    badge: "Architecture en couches · Stripe · Queues",
    description:
      "Application complète de gestion d'événements, réservation de billets en ligne et contrôle d'accès par scan de QR codes.",
    backendHighlights: [
      "API REST versionnée (/api/v1) structurée avec Services et Policies Laravel",
      "Protection contre la survente via transactions SQL et verrous en base de données",
      "Paiement sécurisé Stripe (PaymentIntent + Webhook signé) et expiration auto (Job planifié)",
      "Génération de billets PDF à QR code chiffré (DomPDF) et notifications par email (Events/Queues)",
    ],
    tags: [
      "Laravel 13",
      "PHP 8.3",
      "MySQL",
      "Sanctum",
      "Stripe Webhook",
      "Jobs/Queues",
      "React",
      "TypeScript",
    ],
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/EventBillet",
        type: "backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/papi343/front-eventBillets",
        type: "frontend",
      },
    ],
  },
  {
    title: "Gestion RV Hospitaliers (Hopital-RDV)",
    subtitle: "API Médicale NestJS, Dashboard Web & Application Mobile",
    category: ["Backend & API", "Full-Stack", "Temps réel & Mobile"],
    badge: "NestJS · Prisma · RBAC · Socket.IO",
    description:
      "Système complet de gestion des rendez-vous hospitaliers, des plannings de disponibilité des médecins et des dossiers médicaux patients.",
    backendHighlights: [
      "Architecture modulaire NestJS (Auth, Users, Patients, Medecins, Specialties, Appointment, MedicalRecords)",
      "Authentification JWT (Passport) et contrôle d'accès par rôles (PATIENT, DOCTOR, ADMIN)",
      "Modélisation relationnelle Prisma ORM avec contraintes d'intégrité et cascades",
      "Notifications temps réel via WebSocket (Socket.IO), EventEmitter et alertes email (Nodemailer)",
    ],
    tags: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "JWT / RBAC",
      "Socket.IO",
      "React",
      "React Native",
    ],
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/GestionRvHospitaliers_API",
        type: "backend",
      },
      {
        label: "Front Web",
        url: "https://github.com/papi343/frontGestionRvHospitaliers",
        type: "frontend",
      },
      {
        label: "App Mobile",
        url: "https://github.com/papi343/frontGestionRvHospitaliers-Mobile",
        type: "mobile",
      },
    ],
  },
  {
    title: "ChatFlow",
    subtitle: "API de messagerie instantanée temps réel & Client Mobile",
    category: ["Backend & API", "Temps réel & Mobile"],
    badge: "NestJS · WebSocket Gateway · JWT",
    description:
      "Application de messagerie en temps réel supportant les conversations privées et de groupe, les indicateurs de présence et le suivi de lecture.",
    backendHighlights: [
      "API REST et WebSocket Gateway (Socket.IO) sous NestJS pour la diffusion instantanée",
      "Authentification JWT et suivi du statut utilisateur (online / offline, lastSeenAt)",
      "Schéma Prisma relationnel : Users, Conversations (private/group), Participants et Messages",
      "Gestion des états de messages (sent, delivered, read) et validation DTO (class-validator)",
    ],
    tags: [
      "NestJS",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL / MySQL",
      "Socket.IO",
      "JWT",
      "React Native",
    ],
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/chatflow_Api",
        type: "backend",
      },
      {
        label: "Client Mobile",
        url: "https://github.com/papi343/front-Chatflow",
        type: "mobile",
      },
    ],
  },
  {
    title: "TaskFlow",
    subtitle: "API REST NestJS & Interface collaborative de gestion de projets",
    category: ["Backend & API", "Full-Stack"],
    badge: "NestJS · Prisma · Relations N:M",
    description:
      "Plateforme collaborative permettant de créer des projets, d'affecter des membres avec des rôles dédiés et de suivre l'avancement des tâches.",
    backendHighlights: [
      "Architecture modulaire NestJS avec authentification JWT et hachage bcrypt",
      "Modélisation relationnelle Prisma : User, Role, Project, ProjectMember et Task",
      "Contrainte d'unicité composite @@unique([userId, projectId]) sur les membres de projet",
      "Validation des entrées et séparation claire entre l'API REST et le client React/TypeScript",
    ],
    tags: [
      "NestJS",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "JWT",
      "React",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/TaskFlow_API_NestJS",
        type: "backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/papi343/frontTaskFlowAPI",
        type: "frontend",
      },
    ],
  },
  {
    title: "StockSEN",
    subtitle: "Système de gestion de stock, d'inventaire et de facturation",
    category: ["Full-Stack", "Backend & API"],
    badge: "Démo Live · Laravel · React",
    description:
      "Solution complète optimisée pour les commerces locaux permettant le suivi des stocks en temps réel, les alertes de seuil critique et la facturation.",
    backendHighlights: [
      "API REST Laravel gérant le catalogue produits, les mouvements d'entrées/sorties et les ventes",
      "Base de données relationnelle MySQL garantissant la cohérence des quantités en stock",
      "Génération de factures et tableau de bord analytique React déployé sur Vercel",
    ],
    tags: ["Laravel", "PHP", "MySQL", "API REST", "React.js", "Tailwind CSS"],
    demo: "https://front-stock-sen.vercel.app/",
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/StockSen",
        type: "backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/papi343/FrontStockSen",
        type: "frontend",
      },
    ],
  },
  {
    title: "immoAgence",
    subtitle: "Plateforme de gestion et recherche d'annonces immobilières",
    category: ["Full-Stack", "Backend & API"],
    badge: "Démo Live · Architecture Découplée",
    description:
      "Plateforme moderne de publication et de recherche de biens immobiliers (appartements, villas, terrains) pour agences et particuliers.",
    backendHighlights: [
      "API back-end Laravel dédiée à la gestion des biens, des utilisateurs et de la messagerie",
      "Moteur de filtrage et recherche multicritère (type de bien, localisation, budget)",
      "Interface client React moderne et responsive déployée en production",
    ],
    tags: ["Laravel", "PHP", "MySQL", "API REST", "React.js", "Tailwind CSS"],
    demo: "https://frontimmo-agence.vercel.app/",
    links: [
      {
        label: "API Backend",
        url: "https://github.com/papi343/immo-agence",
        type: "backend",
      },
      {
        label: "Frontend",
        url: "https://github.com/papi343/frontimmo-agence",
        type: "frontend",
      },
    ],
  },
  {
    title: "GuoGoree (Go-Gorée)",
    subtitle: "Plateforme de réservation touristique (Excursions & Hébergements)",
    category: ["Backend & API", "Full-Stack"],
    badge: "Collaboration AMBO Tech · Laravel · PostgreSQL",
    description:
      "Plateforme de réservation en ligne de billets d'excursions et d'hébergements touristiques réalisée en collaboration avec l'équipe technique d'AMBO Tech.",
    backendHighlights: [
      "Développement de l'API back-end Laravel gérant les réservations, créneaux et disponibilités",
      "Base de données PostgreSQL modélisant les excursions, hébergements, clients et paiements",
      "Architecture découplée alimentant une application Client et un dashboard Administrateur",
    ],
    tags: ["Laravel", "PHP", "PostgreSQL", "API REST", "React", "TypeScript"],
    links: [
      {
        label: "API Backend v2",
        url: "https://github.com/papi343/Go-Goree-backend2",
        type: "backend",
      },
      {
        label: "API Backend v1",
        url: "https://github.com/papi343/Go-Goree-backend",
        type: "backend",
      },
      {
        label: "App Client",
        url: "https://github.com/papi343/Go-Goree-Clients",
        type: "frontend",
      },
    ],
  },
  {
    title: "IT Quiz",
    subtitle: "API & Plateforme interactive d'évaluation informatique",
    category: ["Backend & API", "Full-Stack"],
    badge: "Laravel · PostgreSQL · Système XP",
    description:
      "Plateforme de quiz technique permettant aux développeurs de tester leurs connaissances (Backend, Frontend, DevOps) avec chronométrage et classement.",
    backendHighlights: [
      "Conception de l'API de gestion des banques de questions, catégories et sessions de jeu",
      "Calcul des scores en temps réel, suivi de progression (XP) et classements (leaderboards)",
      "Persistance relationnelle sous PostgreSQL et Laravel",
    ],
    tags: ["Laravel", "PHP", "PostgreSQL", "React.js", "API REST"],
    links: [
      {
        label: "Code Source GitHub",
        url: "https://github.com/papi343/it-quizz",
        type: "backend",
      },
    ],
  },
  {
    title: "Grade Manager",
    subtitle: "Application de gestion académique et relevés de notes",
    category: ["Full-Stack"],
    badge: "PHP · MySQL · Gestion Académique",
    description:
      "Application web permettant le suivi des notes des étudiants, la gestion des classes/matières et la génération de rapports de performance.",
    backendHighlights: [
      "Modélisation relationnelle des étudiants, classes, matières et évaluations",
      "Calcul automatisé des moyennes, statistiques de réussite et opérations CRUD complètes",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "HTML5"],
    links: [
      {
        label: "Code Source GitHub",
        url: "https://github.com/papi343/grade-manager",
        type: "backend",
      },
    ],
  },
];

const EXTRA_REPOSITORIES = [
  {
    name: "TailleDeReve E-commerce",
    description:
      "Plateforme e-commerce à architecture découplée : API Backend Laravel et Frontend dynamique React.",
    url: "https://github.com/papi343/TailleDeReve-E-commerce",
    category: "Full-Stack",
    tech: ["Laravel", "React", "MySQL"],
  },
  {
    name: "laravel-realtime-api",
    description:
      "Expérimentation et mise en place d'événements et diffusion temps réel avec Laravel.",
    url: "https://github.com/papi343/laravel-realtime-api",
    category: "Backend API",
    tech: ["Laravel", "PHP", "Realtime"],
  },
  {
    name: "gestion_incidents",
    description:
      "Application structurée en couches (DAO, Models, Database, Menu) en Python pour le suivi d'incidents.",
    url: "https://github.com/papi343/gestion_incidents",
    category: "Backend / DAO",
    tech: ["Python", "DAO Pattern", "Base de données"],
  },
  {
    name: "Gestion_utilisateurs & Location",
    description:
      "Systèmes CRUD d'authentification, gestion des utilisateurs et gestion de location de véhicules en PHP/MySQL.",
    url: "https://github.com/papi343/PROJET-LOCATION-VOITURE",
    category: "Backend PHP",
    tech: ["PHP", "MySQL", "CRUD", "Auth"],
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("Tous");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(id);
  }, []);

  const filtered =
    active === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active));

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
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
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p
            className="text-xs text-indigo-400 tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            RÉALISATIONS & ARCHITECTURE
          </p>
          <h1
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projets Backend & Full-Stack
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Sélection de projets vérifiables issus de mes{" "}
            <strong className="text-white">34+ dépôts GitHub</strong>. Chaque
            projet met en œuvre des problématiques concrètes :{" "}
            <strong className="text-white">
              conception d&apos;API REST, authentification JWT/Sanctum, gestion
              des rôles, relations entre entités, transactions SQL et interfaces
              React/TypeScript
            </strong>
            .
          </p>
        </div>

        {/* Bandeau de synthèse Backend */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-white/[0.08] bg-[#111520]/80 p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
              <Server size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                API REST & Temps Réel
              </p>
              <p className="text-[11px] text-slate-400">
                Laravel 13, NestJS, Socket.IO, Webhooks
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#111520]/80 p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-400 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Authentification & Rôles
              </p>
              <p className="text-[11px] text-slate-400">
                JWT, Sanctum, Guards, Policies, RBAC
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#111520]/80 p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <Database size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Modélisation & Transactions
              </p>
              <p className="text-[11px] text-slate-400">
                MySQL, PostgreSQL, Prisma ORM, Eloquent
              </p>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filtrer les projets par domaine"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = active === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "border border-white/10 bg-[#111520] text-slate-300 hover:text-white hover:border-indigo-500/40"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grille des projets détaillés */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/[0.08] bg-[#111520]/90 p-6 sm:p-7 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Badges supérieurs */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[11px] px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.badge}
                  </span>
                  {project.demo && (
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Démo en ligne
                    </span>
                  )}
                </div>

                {/* Titre & Sous-titre */}
                <h2
                  className="text-xl sm:text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h2>
                <p
                  className="text-xs text-indigo-300 mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Focus Backend & Fonctionnalités */}
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 mb-5">
                  <p
                    className="text-[11px] uppercase tracking-wider text-slate-400 mb-2.5 font-semibold"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Architecture & Fonctionnalités Clés
                  </p>
                  <ul className="space-y-2">
                    {project.backendHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-indigo-400 mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.07]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liens GitHub & Démo */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                          link.type === "backend"
                            ? "border-pink-500/30 bg-pink-500/10 text-pink-200 hover:bg-pink-500/20"
                            : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-indigo-500/40 hover:text-white"
                        }`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {link.type === "backend" ? (
                          <Code2 size={13} />
                        ) : (
                          <GithubIcon size={13} />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-all"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <ExternalLink size={12} />
                      <span>Voir la démo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Autres Dépôts & Profil GitHub Complet */}
        <section className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p
                className="text-xs text-pink-400 tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                EXPLORATION DE CODE
              </p>
              <h2
                className="font-extrabold text-2xl sm:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Autres dépôts & travaux pratiques (34+ dépôts Git)
              </h2>
            </div>
            <a
              href="https://github.com/papi343?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:border-indigo-500/40 text-xs text-white transition-all"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <GithubIcon size={15} />
              <span>Voir les 34 dépôts sur github.com/papi343</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXTRA_REPOSITORIES.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-[#111520]/80 p-5 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] text-indigo-300 border border-white/10"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {repo.category}
                    </span>
                    <span className="text-slate-400 group-hover:text-white transition-colors">
                      <GithubIcon size={16} />
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {repo.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Navigation suivante */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            Intéressé par mon profil pour un stage ou un poste de développeur
            junior ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>Me contacter maintenant</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

