"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { CONTACT, buildWhatsAppUrl } from "@/lib/data";

const bookMessage = `Hi ${CONTACT.brand}! I'm interested in a custom invitation / celebration website. Can we chat?`;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-40 md:px-8 lg:px-12 lg:pb-32 lg:pt-48">
      {/* Abstract floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -left-32 top-12 h-[520px] w-[520px] bg-gradient-to-br from-violet-200/60 to-fuchsia-200/40 blur-[90px]" />
        <div className="blob absolute -right-40 bottom-0 h-[480px] w-[480px] bg-gradient-to-br from-amber-200/40 to-rose-200/30 blur-[90px]" style={{ animationDelay: "-6s" }} />
        <div className="ring-accent absolute left-[12%] top-[18%] h-24 w-24" />
        <div className="ring-accent absolute bottom-[22%] right-[14%] h-16 w-16" />
        <div className="arc absolute right-[20%] top-[28%] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Wedding · Birthday · Anniversary · Housewarming · Baby Shower
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
            Invitations and tributes that feel
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              {" "}
              truly personal.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            {CONTACT.brand} designs beautiful, made-to-order websites for the
            moments that matter. One shareable link. A lasting impression.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#demos"
              className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-zinc-900/10 transition-transform hover:scale-105"
            >
              Explore Demos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={buildWhatsAppUrl(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Start Your Order
            </Link>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Loved by 100+ families · 2–3 day delivery · Works perfectly on mobile
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
