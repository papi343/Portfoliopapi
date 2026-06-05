"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/skills", label: "Compétences" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-bold text-lg"
          style={{ fontFamily: "var(--font-display)" }}>
          V. Nom
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                pathname === href
                  ? "bg-[#6c63ff] text-white"
                  : "text-[#4a4a6a] hover:text-white hover:bg-white/5"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#4a4a6a] hover:text-white"
          onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a12] px-6 py-4 flex flex-col gap-2">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                pathname === href ? "bg-[#6c63ff] text-white" : "text-[#4a4a6a] hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
