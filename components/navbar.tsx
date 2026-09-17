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

const ctaMessage = `Hi ${CONTACT.brand}! I'd like to order a custom invitation / celebration website. Can we discuss my requirements?`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="paper-shadow mx-4 mt-4 rounded-2xl border border-zinc-200/80 bg-white/80 px-6 py-4 backdrop-blur-xl md:mx-8 lg:mx-auto lg:max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-lg font-bold text-white shadow-md shadow-violet-500/20">
              M
            </span>
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              {CONTACT.brand}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={buildWhatsAppUrl(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition-transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-4 border-t border-zinc-100 pt-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-zinc-600 hover:text-zinc-900"
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
                  className="block rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white"
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
