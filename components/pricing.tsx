"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { PricingCard } from "@/components/pricing-card";
import { pricingPackages } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      {/* Background gradient accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-violet-950/10 to-zinc-950" />

      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Fixed-price packages. No surprises.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Straightforward pricing for our most-loved builds. Every package
            includes design, development, mobile testing, and delivery.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
          staggerDelay={0.12}
        >
          {pricingPackages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <PricingCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
