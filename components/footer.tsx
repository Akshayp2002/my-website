"use client";

import Link from "next/link";
import { CONTACT, buildWhatsAppUrl } from "@/lib/data";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const quickMessage = `Hi ${CONTACT.brand}! I'd like to know more about your custom web experiences.`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          {/* Brand column */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white">
                M
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                {CONTACT.brand}
              </span>
            </Link>
            <p className="mt-4 text-zinc-400">{CONTACT.tagline}</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-sm font-semibold text-white">Navigate</p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Contact</p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={buildWhatsAppUrl(quickMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {CONTACT.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {year} {CONTACT.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
