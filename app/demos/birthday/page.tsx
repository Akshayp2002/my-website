"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cake, Calendar, Heart, Music } from "lucide-react";

export default function BirthdayDemoPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-fuchsia-900 to-rose-900 px-6 py-20 text-white">
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 blur-xl"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <Cake className="h-8 w-8 text-amber-300" />
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
          Happy Birthday!
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
          This is a sample birthday wishing experience. Real sites include the
          recipient's name, photos, messages from friends, music, and an RSVP.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard icon={Calendar} label="Event Date" value="Coming Soon" />
          <FeatureCard icon={Heart} label="Personalized" value="With Love" />
          <FeatureCard icon={Music} label="Ambiance" value="Music + Photos" />
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
            href="https://wa.me/919999999999?text=I%20want%20a%20custom%20birthday%20wishing%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-fuchsia-900 transition-transform hover:scale-105"
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
