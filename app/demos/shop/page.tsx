"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Search,
  ShoppingCart,
  SlidersHorizontal,
} from "lucide-react";

const products = [
  { name: "Cream Hoodie", price: "₹1,499", tag: "Best Seller" },
  { name: "Minimal Tote", price: "₹899", tag: "New" },
  { name: "Ceramic Vase", price: "₹1,199", tag: "Trending" },
  { name: "Linen Shirt", price: "₹1,299", tag: null },
];

export default function ShopDemoPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 px-6 py-20 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-emerald-600/10 blur-[140px]" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            Small Shop Showcase
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A clean, browsable storefront for small businesses. Real versions
            connect to your inventory, payment, and WhatsApp order flow.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              readOnly
              placeholder="Search products..."
              className="h-10 w-56 rounded-full border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-zinc-300">
              <SlidersHorizontal className="h-4 w-4" /> Filter
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-zinc-300">
              <ShoppingCart className="h-4 w-4" /> Cart (0)
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-violet-500/40"
            >
              {product.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-2.5 py-1 text-xs font-medium text-white">
                  {product.tag}
                </span>
              )}
              <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900">
                <ShoppingCart className="h-10 w-10 text-zinc-600" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-zinc-100">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-violet-300">
                    {product.price}
                  </p>
                </div>
                <button className="rounded-full p-2 transition-colors hover:bg-white/10">
                  <Heart className="h-4 w-4 text-zinc-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919999999999?text=I%20want%20a%20small%20shop%20showcase%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Order This Style
          </a>
        </div>
      </div>
    </div>
  );
}
