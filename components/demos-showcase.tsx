"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { DemoCard } from "@/components/demo-card";
import { demos } from "@/lib/data";

export function DemosShowcase() {
  return (
    <section id="demos" className="relative px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gradient-to-r from-rose-100/50 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Portfolio & Previews
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            See what we have created.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
            Browse real client sites and preview designs. Every project is built
            from scratch with your photos, colors, and story.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {demos.map((demo) => (
            <StaggerItem key={demo.id}>
              <DemoCard demo={demo} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
