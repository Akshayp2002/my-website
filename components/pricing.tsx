"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { PricingCard } from "@/components/pricing-card";
import { pricingPackages } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 via-violet-50/70 to-zinc-50 grain" />

      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Simple Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Clear packages. Transparent pricing.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
            Prices shown are starting points. The final quote depends on your
            pages, features, and timeline — no hidden charges, ever.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-8 lg:grid-cols-3"
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
