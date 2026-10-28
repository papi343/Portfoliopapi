import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});
const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Yaya Dabo | Développeur Backend & Full-Stack — Laravel · NestJS · React",
  description:
    "Portfolio de Yaya Dabo, étudiant en Génie Logiciel (Licence 3, ISI Dakar) et développeur full-stack freelance depuis 2024. Spécialisé en conception d'API REST (Laravel, NestJS), bases de données (MySQL, PostgreSQL, Prisma) et interfaces React/TypeScript.",
  keywords: [
    "Yaya Dabo",
    "Développeur Backend",
    "Développeur Full-Stack",
    "Laravel",
    "NestJS",
    "Node.js",
    "PHP",
    "React",
    "TypeScript",
    "API REST",
    "MySQL",
    "PostgreSQL",
    "Prisma ORM",
    "Stage Développeur",
    "Développeur Junior",
    "Dakar",
  ],
  authors: [{ name: "Yaya Dabo", url: "https://github.com/papi343" }],
  openGraph: {
    title: "Yaya Dabo | Développeur Backend & Full-Stack",
    description:
      "Conception d'API REST sécurisées (Laravel, NestJS), modélisation de bases de données (MySQL, PostgreSQL, Prisma) et applications web React/TypeScript.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}