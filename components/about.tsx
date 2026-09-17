"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { CONTACT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-tl from-fuchsia-100/50 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-100 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-violet-200/60" />
              <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full border border-fuchsia-200/60" />
              <Image
                src="/about-studio.jpg"
                alt={`${CONTACT.brand} workspace`}
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-400">
                <span className="text-5xl">✦</span>
                <span className="text-sm font-medium">Studio photo coming soon</span>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="rounded-2xl border border-zinc-100 bg-white/90 p-6 shadow-sm backdrop-blur-md">
                  <p className="text-sm font-semibold text-violet-700">100% Handmade Design</p>
                  <p className="mt-1 text-2xl font-bold text-zinc-900">No templates. No clones.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-violet-700">
                About Momenta
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                Built for moments that matter.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-600">
                <p>
                  {CONTACT.brand} was born from the belief that weddings,
                  birthdays, anniversaries, and housewarmings deserve more than
                  a generic template or a disappearing social post.
                </p>
                <p>
                  We design each site by hand — combining soft color, refined
                  motion, and clean code — so your invitation feels personal,
                  premium, and effortless to share with family and friends.
                </p>
                <p>
                  Every build is tailored from scratch, delivered in a few days,
                  and tested to look beautiful on phones, tablets, and desktops.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: "100+", label: "Sites Delivered" },
                  { value: "2–4", label: "Day Delivery" },
                  { value: "5★", label: "Client Love" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-zinc-900 md:text-3xl">{stat.value}</p>
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
