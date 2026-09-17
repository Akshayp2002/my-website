"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { CONTACT, buildWhatsAppUrl } from "@/lib/data";

const inquiryMessage = `Hi ${CONTACT.brand}! I'd like to request a custom website. Here are my requirements: `;

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Birthday Wishes",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = `${inquiryMessage}\n\nName: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\nDetails: ${form.message}`;
    window.open(buildWhatsAppUrl(fullMessage), "_blank");
  };

  return (
    <section id="contact" className="px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            Start Your Project
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let us build something memorable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Tell us what you need. We will reply on WhatsApp or email within a
            few hours with a plan and a quote.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <FadeIn className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">Direct contact</h3>
              <p className="mt-2 text-zinc-400">
                Prefer to reach out directly? We are one message away.
              </p>

              <div className="mt-8 space-y-5">
                <Link
                  href={buildWhatsAppUrl(inquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-zinc-500">WhatsApp</p>
                    <p className="font-medium text-white">+91 {CONTACT.whatsappNumber.slice(2)}</p>
                  </div>
                </Link>

                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400"
                  >
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="font-medium text-white">{CONTACT.email}</p>
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Inquiry form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/50"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="type" className="text-sm font-medium text-zinc-300">
                    Project Type
                  </label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-white outline-none transition-colors focus:border-violet-400/50"
                  >
                    <option>Birthday Wishes</option>
                    <option>Wedding Invitation</option>
                    <option>Mini Shop / Product Page</option>
                    <option>Other Custom Build</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/50"
                    placeholder="I want a birthday microsite with photos, music, and a surprise message..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02]"
              >
                Send Inquiry via WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
