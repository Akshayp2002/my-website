"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Demo } from "@/lib/data";

const categoryStyles: Record<string, string> = {
  Wedding: "bg-rose-500/15 text-rose-700",
  Engagement: "bg-violet-500/15 text-violet-700",
  Birthday: "bg-amber-500/15 text-amber-700",
  Anniversary: "bg-fuchsia-500/15 text-fuchsia-700",
  Housewarming: "bg-emerald-500/15 text-emerald-700",
  "Baby Shower": "bg-sky-500/15 text-sky-700",
  Other: "bg-zinc-200/70 text-zinc-900",
};

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <article className="paper-shadow group flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white transition-all hover:-translate-y-1 hover:border-violet-200">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
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
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
        <div className="image-fallback-overlay absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400">
          <span className="text-4xl">✦</span>
          <span className="text-sm font-medium">Preview coming soon</span>
        </div>
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
            categoryStyles[demo.category] ?? "bg-zinc-200/70 text-zinc-900"
          }`}
        >
          {demo.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-zinc-900">{demo.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-zinc-600">
          {demo.description}
        </p>
        <Link
          href={demo.demoUrl}
          target={demo.demoUrl.startsWith("http") ? "_blank" : undefined}
          rel={demo.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          {demo.demoUrl.startsWith("http") ? "View Live Site" : "Preview Demo"}
          <ExternalLink className="h-4 w-4" />
        </Link>
        {demo.demoHint && (
          <p className="mt-2 text-xs text-zinc-500">{demo.demoHint}</p>
        )}
      </div>
    </article>
  );
}
