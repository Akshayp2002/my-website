"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShoppingBag, Star, Truck } from "lucide-react";

export default function ProductDemoPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-20 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:items-center"
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 p-12 text-center backdrop-blur-md">
          <ShoppingBag className="mx-auto mb-6 h-16 w-16 text-violet-300" />
          <p className="text-sm uppercase tracking-widest text-white/60">
            Premium Product
          </p>
          <h2 className="mt-2 text-4xl font-bold">Aura Bottle</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-white/70">(128 reviews)</span>
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Mini Product Page
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">
            A focused, conversion-ready page for a single product or launch.
            Real versions include image galleries, specs, reviews, and an order
            form or WhatsApp checkout.
          </p>

          <ul className="mb-8 space-y-3 text-zinc-300">
            {[
              "Single-product storytelling",
              "Pricing, offer badges & CTA",
              "WhatsApp/Instagram ordering",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <Truck className="h-5 w-5" />
              Free delivery in 2–4 business days
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <a
              href="https://wa.me/919999999999?text=I%20want%20a%20custom%20product%20page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Order This Style
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
