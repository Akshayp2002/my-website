"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { CONTACT, buildWhatsAppUrl } from "@/lib/data";

const bookMessage = `Hi ${CONTACT.brand}! I'm interested in a custom website and would like to book a build. Can we chat?`;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-40 md:px-8 lg:px-12 lg:pb-32 lg:pt-48">
      {/* Soft gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="flex flex-col items-center text-center">
          {/* Pill badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Crafted for birthdays, weddings, shops & launches
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Turn special moments into
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              {" "}
              unforgettable
            </span>{" "}
            digital memories.
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {CONTACT.brand} designs premium, made-for-you web experiences — from
            birthday surprises and wedding invitations to mini-shops and product
            launches. Beautiful, shareable, and live in days.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#demos"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-zinc-950 shadow-xl shadow-white/10 transition-transform hover:scale-105"
            >
              Explore Demos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={buildWhatsAppUrl(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Book Your Site
            </Link>
          </div>

          {/* Trust microcopy */}
          <p className="mt-8 text-sm text-zinc-500">
            Trusted by 100+ clients · 2–4 day delivery · 100% mobile-ready
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
