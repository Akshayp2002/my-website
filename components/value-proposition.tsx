"use client";

import { Heart, Share2, Sparkles, Users, Zap, PenTool } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { services, type Service } from "@/lib/data";

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  users: Users,
  "share-2": Share2,
  zap: Zap,
  "pen-tool": PenTool,
};

function ValueCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <div className="paper-shadow group relative overflow-hidden rounded-3xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50/60 p-8 transition-all hover:-translate-y-1 hover:border-violet-200">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-zinc-900">{service.title}</h3>
      <p className="leading-relaxed text-zinc-600">{service.description}</p>
    </div>
  );
}

export function ValueProposition() {
  return (
    <section id="services" className="relative px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-gradient-to-bl from-violet-100/60 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-700">
            Why choose us?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Thoughtful design for real celebrations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
            A printed card gets lost. A social post disappears. A custom site
            stays with you, tells your story beautifully, and makes guests feel
            genuinely welcome.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ValueCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
