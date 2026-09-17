"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Demo } from "@/lib/data";

const categoryStyles: Record<string, string> = {
  Birthday: "bg-amber-500/20 text-amber-300",
  Wedding: "bg-rose-500/20 text-rose-300",
  Shop: "bg-emerald-500/20 text-emerald-300",
  Product: "bg-sky-500/20 text-sky-300",
};

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-900/15">
      {/* Preview image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={demo.image}
          alt={`${demo.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            target.parentElement?.classList.add("image-fallback");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        <div className="image-fallback-overlay absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-500">
          <span className="text-4xl">✦</span>
          <span className="text-sm font-medium">Preview coming soon</span>
        </div>
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
            categoryStyles[demo.category] ?? "bg-white/10 text-white"
          }`}
        >
          {demo.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-zinc-400">
          {demo.description}
        </p>
        <Link
          href={demo.demoUrl}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105"
        >
          Live Demo
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
