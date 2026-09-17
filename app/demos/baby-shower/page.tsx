"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Baby, Calendar, Gift, MapPin } from "lucide-react";

export default function BabyShowerDemoPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-violet-50 to-rose-50 px-6 py-20 text-zinc-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-300/20 blur-2xl"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 19) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-700">
          A Little One is on the Way
        </p>
        <h1 className="mb-6 font-serif text-5xl font-light italic tracking-tight md:text-7xl">
          Baby Shower
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600">
          A sample baby shower invitation. Real sites include event timings,
          directions, gift registry hints, ultrasound photo moments, and RSVP.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard icon={Calendar} label="Date" value="12 Oct 2026" />
          <FeatureCard icon={MapPin} label="Venue" value="Cozy Corner" />
          <FeatureCard icon={Gift} label="Gift" value="Registry Link" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-medium text-zinc-900 backdrop-blur-md transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919999999999?text=I%20want%20a%20custom%20baby%20shower%20invitation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Order This Style
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm backdrop-blur-md">
      <Icon className="mx-auto mb-3 h-6 w-6 text-sky-600" />
      <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-900">{value}</p>
    </div>
  );
}
