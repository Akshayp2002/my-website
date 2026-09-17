"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { CONTACT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image / visual block */}
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 p-8">
              <div className="absolute inset-0 bg-zinc-950/40" />
              <Image
                src="/about-studio.jpg"
                alt={`${CONTACT.brand} workspace`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-500">
                <span className="text-5xl">✦</span>
                <span className="text-sm font-medium">Studio photo coming soon</span>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-md">
                  <p className="text-sm font-semibold text-violet-300">100% Handmade Design</p>
                  <p className="mt-1 text-2xl font-bold text-white">No templates. No clones.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text block */}
          <FadeIn delay={0.15}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Crafted with care, delivered with speed.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
                <p>
                  {CONTACT.brand} was born from a simple belief: birthdays,
                  weddings, and small businesses deserve a digital experience as
                  beautiful as the moment itself — not another generic template
                  lost in a sea of posts.
                </p>
                <p>
                  We combine thoughtful design, modern motion, and lean code to
                  build websites that feel personal, premium, and effortless to
                  share. Every project is tailored from scratch, turned around
                  in days, and optimized to look flawless on every device.
                </p>
                <p>
                  Whether it is a surprise birthday page, an elegant wedding
                  invitation, or a mini storefront for your shop, we treat each
                  build like it is our own.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: "100+", label: "Sites Delivered" },
                  { value: "2–4", label: "Day Delivery" },
                  { value: "5★", label: "Client Love" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
