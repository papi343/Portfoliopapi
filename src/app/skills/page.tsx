"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Server,
  Database,
  Layout,
  Wrench,
  ShieldCheck,
  Layers,
  GitBranch,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type SkillItem = {
  name: string;
  badge: string;
  status?: "maitrise" | "apprentissage" | "notions";
  description: string;
  highlights: string[];
};

type Category = {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: SkillItem[];
};

const SKILL_CATEGORIES: Category[] = [
  {
    id: "backend",
    label: "Backend & API",
    subtitle:
      "Conception d'API RESTful, architectures modulaires, sécurité et communication temps réel.",
    icon: <Server size={18} className="text-indigo-400" />,
    skills: [
      {
        name: "PHP & Laravel",
        badge: "Stack Principale",
        status: "maitrise",
        description:
          "Développement d'API REST versionnées et d'applications backend structurées en couches.",
        highlights: [
          "Architecture en couches (Services, Policies, Repository Pattern)",
          "Authentification Laravel Sanctum & protection des routes",
          "Événements asynchrones (Events/Listeners, Jobs & Queues)",
          "Intégration Stripe (PaymentIntent & Webhooks signés), génération PDF (DomPDF)",
        ],
      },
      {
        name: "Node.js & NestJS",
        badge: "Stack Principale",
        status: "maitrise",
        description:
          "Création d'API modulaires et typées en TypeScript avec injection de dépendances.",
        highlights: [
          "Architecture modulaire et application des principes DDD",
          "Contrôleurs, Services, Guards, Interceptors & Pipes",
          "Communication temps réel via WebSocket Gateways (Socket.IO)",
          "Validation stricte des entrées via DTO (class-validator, class-transformer)",
        ],
      },
      {
        name: "API REST, Authentification JWT & Rôles",
        badge: "Architecture & Sécurité",
        status: "maitrise",
        description:
          "Conception de contrats d'API clairs, sécurisés et adaptés aux clients web et mobiles.",
        highlights: [
          "Authentification stateless JWT (Passport-JWT, Sanctum) & hachage bcrypt",
          "Gestion fine des rôles et permissions (RBAC, Guards, Policies)",
          "Validation des données, gestion centralisée des erreurs et codes HTTP normalisés",
          "Sécurité des API : Rate Limiting (throttle), QR codes chiffrés, webhooks signés",
        ],
      },
      {
        name: "Autres langages (Java, Python, C++)",
        badge: "Fondamentaux Génie Logiciel",
        status: "maitrise",
        description:
          "Solides bases algorithmiques et programmation orientée objet acquises en Licence Génie Logiciel.",
        highlights: [
          "Programmation Orientée Objet (POO), collections et structures de données",
          "Accès aux données (DAO, JDBC, scripts Python/MySQL)",
          "Conception orientée objet et résolution de problèmes algorithmiques",
        ],
      },
    ],
  },
  {
    id: "database",
    label: "Bases de données & ORM",
    subtitle:
      "Modélisation relationnelle, intégrité transactionnelle et requêtes performantes.",
    icon: <Database size={18} className="text-pink-400" />,
    skills: [
      {
        name: "MySQL & PostgreSQL",
        badge: "SGBD Relationnels",
        status: "maitrise",
        description:
          "Conception, administration et interrogation de bases de données relationnelles en production.",
        highlights: [
          "Schémas normalisés, clés étrangères, indexation et contraintes d'unicité",
          "Transactions SQL et verrous en base de données (protection anti-survente)",
          "Jointures complexes, agrégations et opérations CRUD optimisées",
        ],
      },
      {
        name: "Prisma ORM & Eloquent ORM",
        badge: "ORM & Migrations",
        status: "maitrise",
        description:
          "Modélisation déclarative du schéma de données, migrations versionnées et requêtes typées.",
        highlights: [
          "Prisma Schema (relations 1:1, 1:N, N:M, enums, clés composites) avec NestJS",
          "Eloquent ORM (relations, scopes, eager loading, observers) avec Laravel",
          "Gestion des migrations, seeders et synchronisation des environnements",
          "TypeORM : notions de base",
        ],
      },
      {
        name: "Modélisation (UML & Merise) & Redis",
        badge: "Conception & Cache",
        status: "maitrise",
        description:
          "Analyse fonctionnelle et conception de l'architecture de données avant implémentation.",
        highlights: [
          "Merise : Modèle Conceptuel de Données (MCD) et Modèle Logique (MLD)",
          "UML : Diagrammes de cas d'utilisation, de classes et de séquence",
          "Redis : mise en cache et gestion de files d'attente / sessions",
        ],
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    subtitle:
      "Interfaces web modernes, typées et responsives connectées aux API REST et WebSockets.",
    icon: <Layout size={18} className="text-emerald-400" />,
    skills: [
      {
        name: "JavaScript (ES6+), TypeScript & React.js",
        badge: "Frontend Web",
        status: "maitrise",
        description:
          "Développement de Single Page Applications (SPA) et tableaux de bord interactifs.",
        highlights: [
          "Composants réutilisables, Hooks (useState, useEffect, useContext, custom hooks)",
          "Consommation d'API REST, gestion des tokens JWT et routes protégées",
          "Typage statique avec TypeScript pour sécuriser les contrats de données Front/Back",
          "Next.js (App Router) pour les applications web modernes et le routage",
        ],
      },
      {
        name: "HTML5, CSS3 & Tailwind CSS",
        badge: "UI & Responsive Design",
        status: "maitrise",
        description:
          "Intégration d'interfaces sobres, accessibles et adaptées à tous les écrans (mobile, tablette, desktop).",
        highlights: [
          "Design system utilitaire avec Tailwind CSS",
          "Grilles responsives (Flexbox, CSS Grid) et accessibilité sémantique",
          "Maquettage de base sur Figma",
        ],
      },
      {
        name: "React Native (Expo)",
        badge: "En cours d'apprentissage",
        status: "apprentissage",
        description:
          "Apprentissage actif du développement mobile cross-platform connecté à mes API NestJS.",
        highlights: [
          "Création d'écrans mobiles et navigation (projets ChatFlow Mobile & RV Hospitaliers Mobile)",
          "Connexion aux API REST et WebSockets depuis un client mobile",
          "Montée en compétence continue sur l'écosystème React Native & Expo",
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Outils & Environnement",
    subtitle:
      "Workflow professionnel, tests d'API, gestion de dépendances et travail collaboratif.",
    icon: <Wrench size={18} className="text-amber-400" />,
    skills: [
      {
        name: "Git & GitHub",
        badge: "34+ Dépôts Publics",
        status: "maitrise",
        description:
          "Gestion de version quotidienne en autonomie et en équipe (Think and Code, AMBO Tech).",
        highlights: [
          "Branches fonctionnelles (feature branches), Pull Requests et revues de code",
          "Organisation claire des dépôts Backend et Frontend découplés",
          "Déploiement continu Front-end sur Vercel",
        ],
      },
      {
        name: "Postman & Tests d'API",
        badge: "Qualité API",
        status: "maitrise",
        description:
          "Vérification systématique des endpoints, des statuts HTTP et des scénarios d'authentification.",
        highlights: [
          "Collections Postman structurées par modules et environnements",
          "Tests des flux JWT, payloads de validation, webhooks et cas d'erreurs (401, 403, 422)",
        ],
      },
      {
        name: "Écosystème & Administration BDD",
        badge: "Outils Quotidiens",
        status: "maitrise",
        description:
          "Outils de développement, gestionnaires de paquets et clients de bases de données.",
        highlights: [
          "Gestionnaires & CLI : Composer, npm, Prisma CLI, Artisan, Nest CLI",
          "Clients BDD : pgAdmin, MySQL Workbench, DBeaver",
          "IDE & Outils : VS Code, IntelliJ IDEA, WordPress (CMS), Docker (notions)",
        ],
      },
    ],
  },
];

const FILTER_TABS = [
  { id: "all", label: "Vue complète" },
  { id: "backend", label: "Backend & API" },
  { id: "database", label: "Bases de données" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "tools", label: "Outils & Workflow" },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(id);
  }, []);

  const visibleCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
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
        <div className="max-w-3xl mb-12">
          <p
            className="text-xs text-indigo-400 tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            COMPÉTENCES TECHNIQUES
          </p>
          <h1
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stack technique & Architecture
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Mes compétences sont organisées autour de mon cœur de métier : le{" "}
            <strong className="text-white font-semibold">
              développement Backend (PHP/Laravel, Node.js/NestJS)
            </strong>
            , la{" "}
            <strong className="text-white font-semibold">
              modélisation de bases de données relationnelles (MySQL,
              PostgreSQL, Prisma)
            </strong>{" "}
            et l&apos;intégration{" "}
            <strong className="text-white font-semibold">
              Full-Stack avec React et TypeScript
            </strong>
            . Chaque compétence listée ci-dessous est appliquée dans mes dépôts
            GitHub.
          </p>
        </div>

        {/* Bandeau focus Architecture Backend */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: <ShieldCheck size={18} className="text-indigo-400" />,
              title: "Sécurité & Contrôle d'accès",
              desc: "Authentification JWT / Sanctum, gestion des rôles (RBAC, Guards, Policies), validation DTO & FormRequests.",
            },
            {
              icon: <Layers size={18} className="text-pink-400" />,
              title: "Architecture & Principes DDD",
              desc: "Séparation claire des responsabilités (Controllers, Services, Repositories, Modules) et code maintenable.",
            },
            {
              icon: <GitBranch size={18} className="text-emerald-400" />,
              title: "Intégrité & Temps Réel",
              desc: "Transactions SQL avec verrous anti-survente, files d'attente (Queues), Webhooks signés et WebSockets (Socket.IO).",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/[0.08] bg-[#111520]/80 p-5"
            >
              <div className="flex items-center gap-2.5 mb-2">
                {item.icon}
                <h2
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Filtres par catégorie */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filtrer les compétences par catégorie"
        >
          {FILTER_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "border border-white/10 bg-[#111520] text-slate-300 hover:text-white hover:border-indigo-500/40"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Catégories & Cartes de compétences */}
        <div className="space-y-14">
          {visibleCategories.map((category) => (
            <section
              key={category.id}
              className="space-y-6"
              aria-labelledby={`heading-${category.id}`}
            >
              <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h2
                      id={`heading-${category.id}`}
                      className="text-xl sm:text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {category.label}
                    </h2>
                    <p className="text-xs text-slate-400">{category.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill) => {
                  const isLearning = skill.status === "apprentissage";
                  return (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-white/[0.08] bg-[#111520]/85 p-6 hover:border-indigo-500/35 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <h3
                            className="text-base sm:text-lg font-bold text-white"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {skill.name}
                          </h3>
                          <span
                            className={`text-[11px] px-2.5 py-1 rounded-full font-medium border ${
                              isLearning
                                ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                                : "bg-indigo-500/10 border-indigo-500/25 text-indigo-300"
                            }`}
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {skill.badge}
                          </span>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                          {skill.description}
                        </p>

                        <ul className="space-y-2 border-t border-white/[0.06] pt-4">
                          {skill.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-slate-300"
                            >
                              <CheckCircle2
                                size={14}
                                className={`mt-0.5 shrink-0 ${
                                  isLearning
                                    ? "text-amber-400"
                                    : "text-indigo-400"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Navigation vers Projets */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            Découvre comment ces technologies sont mises en œuvre dans mes
            projets réels.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>Voir mes réalisations & dépôts Git</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}