"use client";

import Link from "next/link";
import { Check, Crown } from "lucide-react";
import { buildWhatsAppUrl, type PricingPackage } from "@/lib/data";

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <article
      className={`paper-shadow relative flex flex-col rounded-3xl p-8 ${
        pkg.featured
          ? "border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-white"
          : "border border-zinc-100 bg-white"
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-1.5 text-xs font-bold text-white shadow-md">
          <Crown className="h-3.5 w-3.5" />
          MOST LOVED
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-zinc-900">{pkg.title}</h3>
        <p className="mt-1 text-zinc-600">{pkg.subtitle}</p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="text-sm font-medium text-zinc-500">Starting from</span>
          <span className="text-4xl font-extrabold text-zinc-900">
            ₹{pkg.startingFrom.toLocaleString("en-IN")}
          </span>
          {pkg.standardPrice && (
            <span className="text-lg text-zinc-400 line-through">
              ₹{pkg.standardPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-medium text-emerald-600">
          Final quote based on your requirements
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex gap-3 text-zinc-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              <Check className="h-3.5 w-3.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={buildWhatsAppUrl(pkg.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition-transform hover:scale-105 ${
          pkg.featured
            ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/25"
            : "bg-zinc-900 text-white"
        }`}
      >
        {pkg.cta}
      </Link>
    </article>
  );
}
