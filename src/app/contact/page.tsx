"use client";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  Download,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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

export default function ContactPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(id);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    setError("");

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Si EmailJS n'est pas configuré, ouvrir le client mail directement
    if (serviceId === "YOUR_SERVICE_ID") {
      const subject = encodeURIComponent(
        `Contact Portfolio — ${form.nom.trim()}`
      );
      const body = encodeURIComponent(
        `Bonjour Yaya,\n\n${form.message.trim()}\n\n---\nDe : ${form.nom.trim()} (${form.email.trim()})`
      );
      window.location.href = `mailto:ydabo1876@gmail.com?subject=${subject}&body=${body}`;
      setLoading(false);
      setSent(true);
      return;
    }

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: form.nom,
              from_email: form.email,
              message: form.message,
            },
          }),
        }
      );

      if (response.ok) {
        setSent(true);
      } else {
        const text = await response.text();
        setError(
          text ||
            "Une erreur est survenue lors de l'envoi. Vous pouvez m'écrire directement à ydabo1876@gmail.com."
        );
      }
    } catch {
      setError(
        "Impossible de contacter le serveur d'envoi. Utilisez le bouton Email direct ci-contre."
      );
    } finally {
      setLoading(false);
    }
  };

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
        className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
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
        <div className="max-w-3xl mb-14">
          <p
            className="text-xs text-indigo-400 tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            CONTACT & OPPORTUNITÉS
          </p>
          <h1
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Échangeons sur vos projets ou opportunités de stage
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Vous recrutez un{" "}
            <strong className="text-white">
              stagiaire Backend / Full-Stack / Bases de données
            </strong>{" "}
            ou un <strong className="text-white">développeur junior</strong> ?
            Vous avez un besoin en développement d&apos;API (Laravel, NestJS) ou
            d&apos;application web (React) ? Contactez-moi directement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Formulaire de contact */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111520]/90 p-6 sm:p-8">
              <h2
                className="text-lg font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Envoyer un message
              </h2>

              {sent ? (
                <div className="border border-emerald-500/30 bg-emerald-500/10 rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2
                    size={36}
                    className="text-emerald-400 mx-auto"
                  />
                  <h3
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message pris en compte !
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais à l&apos;adresse indiquée.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({ nom: "", email: "", message: "" });
                    }}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-xs text-slate-200 hover:text-white"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="contact-nom"
                      className="text-xs text-slate-300 tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Votre nom / Entreprise *
                    </label>
                    <input
                      id="contact-nom"
                      name="nom"
                      type="text"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Ex: Jean Dupont — Recruteur / Tech Lead"
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs text-slate-300 tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Votre adresse email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="prenom.nom@entreprise.com"
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-xs text-slate-300 tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Votre message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre opportunité de stage, poste junior ou projet technique..."
                      rows={5}
                      className="w-full bg-[#090b10] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-all duration-200 w-full justify-center shadow-lg shadow-indigo-600/20"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Send size={15} />
                    <span>
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </span>
                  </button>

                  {error && (
                    <div className="p-3.5 rounded-xl border border-pink-500/30 bg-pink-500/10 text-xs text-pink-200 space-y-2">
                      <p>⚠️ {error}</p>
                      <a
                        href={`mailto:ydabo1876@gmail.com?subject=${encodeURIComponent(
                          `Contact Portfolio — ${form.nom}`
                        )}&body=${encodeURIComponent(form.message)}`}
                        className="inline-block underline font-semibold text-white"
                      >
                        Ouvrir directement votre messagerie (ydabo1876@gmail.com)
                      </a>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Coordonnées directes, Réseaux & CV */}
          <div className="lg:col-span-5 space-y-4">
            <h2
              className="text-xs text-slate-300 tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              COORDONNÉES DIRECTES
            </h2>

            {[
              {
                icon: <Mail size={18} />,
                label: "Email professionnel",
                value: "ydabo1876@gmail.com",
                href: "mailto:ydabo1876@gmail.com",
                color: "#ec4899",
              },
              {
                icon: <Phone size={18} />,
                label: "Téléphone",
                value: "+221 78 329 32 53",
                href: "tel:+221783293253",
                color: "#6366f1",
              },
              {
                icon: <MessageCircle size={18} />,
                label: "WhatsApp",
                value: "+221 78 329 32 53",
                href: "https://wa.me/221783293253",
                color: "#10b981",
              },
              {
                icon: <GithubIcon size={18} />,
                label: "GitHub (34+ dépôts publics)",
                value: "github.com/papi343",
                href: "https://github.com/papi343",
                color: "#a855f7",
              },
              {
                icon: <LinkedinIcon size={18} />,
                label: "LinkedIn",
                value: "linkedin.com/in/yaya-dabo",
                href: "https://www.linkedin.com/in/yaya-dabo-a04041380/",
                color: "#3b82f6",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-white/[0.08] bg-[#111520]/85 rounded-xl p-4 hover:border-indigo-500/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[11px] text-slate-400 mb-0.5"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-500 group-hover:text-white transition-colors"
                />
              </a>
            ))}

            {/* Localisation */}
            <div className="flex items-center gap-3.5 border border-white/[0.08] bg-[#111520]/85 rounded-xl p-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p
                  className="text-[11px] text-slate-400 mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Localisation
                </p>
                <p className="text-white text-sm font-medium">
                  Keur Massar, Dakar, Sénégal (Présentiel / Hybride / Remote)
                </p>
              </div>
            </div>

            {/* Carte Téléchargement CV */}
            <div className="pt-2">
              <a
                href="/cv.pdf"
                download="CV_Yaya_Dabo_Developpeur_Backend_FullStack.pdf"
                className="flex items-center justify-between rounded-2xl border border-indigo-500/35 bg-indigo-600/15 hover:bg-indigo-600 p-5 text-white transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/25 group-hover:bg-white/20 flex items-center justify-center">
                    <Download size={18} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Télécharger mon CV complet (PDF)
                    </p>
                    <p
                      className="text-xs text-indigo-200 group-hover:text-white/90"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Mis à jour — Yaya Dabo (Backend / Full-Stack)
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

