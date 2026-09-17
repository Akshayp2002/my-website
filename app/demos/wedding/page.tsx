"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Music, Utensils } from "lucide-react";

export default function WeddingDemoPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-amber-900 to-stone-900 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/15 blur-2xl"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 19) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.25, 0.1] }}
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
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-200">
          Save the Date
        </p>
        <h1 className="mb-6 font-serif text-5xl font-light italic tracking-tight md:text-7xl">
          Alex & Jordan
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
          A sample digital wedding invitation. Real sites feature couple photos,
          event schedule, venue map, RSVP form, and music playback.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard icon={Calendar} label="Date" value="12 June 2026" />
          <FeatureCard icon={MapPin} label="Venue" value="Rose Garden" />
          <FeatureCard icon={Utensils} label="Reception" value="7:00 PM" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919999999999?text=I%20want%20a%20custom%20digital%20wedding%20invitation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-900 transition-transform hover:scale-105"
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
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
      <Icon className="mx-auto mb-3 h-6 w-6 text-amber-300" />
      <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
