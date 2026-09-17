"use client";

import Link from "next/link";
import { Check, Crown } from "lucide-react";
import { buildWhatsAppUrl, type PricingPackage } from "@/lib/data";

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-8 ${
        pkg.featured
          ? "border-2 border-violet-400/50 bg-gradient-to-br from-violet-950/60 to-zinc-950/80 shadow-2xl shadow-violet-900/20"
          : "border border-white/10 bg-white/5"
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
          <Crown className="h-3.5 w-3.5" />
          BEST VALUE
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
        <p className="mt-1 text-zinc-400">{pkg.subtitle}</p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-extrabold text-white">
            ₹{pkg.offerPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-lg text-zinc-500 line-through">
            ₹{pkg.standardPrice.toLocaleString("en-IN")}
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-emerald-400">
          Limited-time special offer
        </p>
      </div>

      {/* Feature list */}
      <ul className="mb-8 flex-1 space-y-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex gap-3 text-zinc-300">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="h-3.5 w-3.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={buildWhatsAppUrl(pkg.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition-transform hover:scale-105 ${
          pkg.featured
            ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25"
            : "bg-white text-zinc-950"
        }`}
      >
        {pkg.cta}
      </Link>
    </article>
  );
}
