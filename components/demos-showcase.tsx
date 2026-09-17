"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { DemoCard } from "@/components/demo-card";
import { demos } from "@/lib/data";

export function DemosShowcase() {
  return (
    <section id="demos" className="px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            Live Demos & Showcase
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            See what we can build for you.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Browse interactive examples. Each project is fully customizable —
            colors, photos, music, messages, and more.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-8 md:grid-cols-2"
          staggerDelay={0.12}
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
