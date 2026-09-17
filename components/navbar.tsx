"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CONTACT, buildWhatsAppUrl } from "@/lib/data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const ctaMessage = `Hi ${CONTACT.brand} team! I'd like to book a custom website. Can we discuss my requirements?`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glassmorphic navbar */}
      <nav className="mx-4 mt-4 rounded-2xl border border-white/10 bg-zinc-950/70 px-6 py-4 shadow-2xl shadow-violet-900/10 backdrop-blur-xl md:mx-8 lg:mx-auto lg:max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white shadow-lg shadow-violet-500/20">
              M
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              {CONTACT.brand}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href={buildWhatsAppUrl(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-zinc-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={buildWhatsAppUrl(ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
