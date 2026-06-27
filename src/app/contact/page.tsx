"use client";
import { useEffect, useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(id);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.nom || !form.email || !form.message) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
          template_params: {
            from_name: form.nom,
            from_email: form.email,
            message: form.message,
          },
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const text = await response.text();
        setError(text || "Une erreur est survenue lors de l’envoi.");
      }
    } catch {
      setError("Impossible de contacter le serveur d’envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden pt-24">

      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,101,132,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-16"
        style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>

        {/* Header */}
        <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}>
          CONTACT
        </p>
        <h1 className="font-black text-5xl md:text-7xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}>
          Construisons quelque<br />chose ensemble.
        </h1>
        <p className="text-[#4a4a6a] text-sm mb-16 max-w-xl">
          Un projet en tête, une question ou juste envie d’échanger ? Je suis toujours ouvert à une bonne conversation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div>
            {sent ? (
              <div className="border border-[#6c63ff]/30 bg-[#6c63ff]/10 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Message envoyé !
                </h3>
                <p className="text-[#4a4a6a] text-sm">
                  Je te répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="space-y-5">

                {/* Nom */}
                <div>
                  <label className="text-xs text-[#4a4a6a] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    NOM
                  </label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#2a2a45] focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-[#4a4a6a] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    EMAIL
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ydabo1876@email.com"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#2a2a45] focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-[#4a4a6a] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet..."
                    rows={5}
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#2a2a45] focus:outline-none focus:border-[#6c63ff]/50 transition-colors resize-none"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 bg-[#6c63ff] hover:bg-[#5a52e0] disabled:bg-[#6c63ff]/50 disabled:cursor-not-allowed text-white rounded-full text-sm transition-all duration-200 w-full justify-center"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  <Send size={14} /> {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {error && (
                  <p className="text-xs text-[#ff6584] mt-2 text-center" style={{ fontFamily: "var(--font-mono)" }}>
                    ⚠️ {error}
                  </p>
                )}

              </div>
            )}
          </div>

          {/* Contact direct */}
          <div className="space-y-6">
            <h2 className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-mono)" }}>
              CONTACT DIRECT
            </h2>

            {[
              {
                icon: <MessageCircle size={18} />,
                label: "WhatsApp",
                value: "+221 783 293 253",
                href: "https://wa.me/221783293253",
                color: "#25d366",
              },
              {
                icon: <Phone size={18} />,
                label: "Appel téléphonique",
                value: "+221 78 329 32 53",
                href: "tel:+221783293253",
                color: "#6c63ff",
              },
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "ydabo1876@email.com",
                href: "mailto:ydabo1876@email.com",
                color: "#ff6584",
              },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 border border-white/5 bg-white/3 rounded-xl p-4 hover:border-white/10 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${item.color}20`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[#4a4a6a] mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    {item.label}
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Réseaux */}
            {/* <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-[#4a4a6a] tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}>
                RÉSEAUX
              </p>
              <div className="flex gap-3">

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
