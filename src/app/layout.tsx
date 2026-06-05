import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, DM_Sans } from "next/font/google";
// Ignore missing type declarations for global CSS imports in this project setup
// @ts-ignore: Implicitly has an 'any' type because type declarations for CSS are not present
import "./globals.css";
import Navbar from "@/components/Navbar";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
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
  title: "Mon Portfolio",
  description: "Développeur Fullstack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}