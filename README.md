# Momento Web Studio

A clean, light-mode studio landing page for Momenta Studio — selling custom invitation and celebration websites: weddings, engagements, birthdays, anniversaries, housewarmings, baby showers, and more.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

## Project Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Composed landing page |
| `app/layout.tsx` | Root layout + metadata |
| `app/globals.css` | Theme + global styles |
| `app/demos/*` | Interactive live demo routes |
| `components/` | Reusable section components |
| `lib/data.ts` | Centralized content (demos, pricing, contact, services) |
| `public/demos/` | Demo preview screenshots |

## Customization

All landing page content is driven by [lib/data.ts](lib/data.ts). Update:

- `demos` → add/edit demo cards and preview images
- `services` → update "Why Choose Custom Web Pages?"
- `pricingPackages` → edit packages, prices, and WhatsApp messages
- `CONTACT` → set your WhatsApp number, email, and brand name

## Demo Pages

- `/demos/wedding` — Wedding invitation demo
- `/demos/engagement` — Engagement announcement demo
- `/demos/birthday` — Birthday microsite demo
- `/demos/anniversary` — Anniversary tribute demo
- `/demos/housewarming` — Housewarming invitation demo
- `/demos/baby-shower` — Baby shower invitation demo

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Notes

- Place real demo screenshots in `public/demos/` and reference them in `lib/data.ts`.
- Until images are added, graceful CSS fallbacks display a "Preview coming soon" placeholder.
- Static export compatibility is enabled with `images.unoptimized: true` in `next.config.ts`.
"# my-website" 
