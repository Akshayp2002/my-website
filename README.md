# Momento Web Studio

A hyper-modern, premium agency landing page for selling custom digital experiences — personalized birthday wishing sites, digital wedding invitations, mini product pages, and small shop showcases.

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

- `/demos/birthday` — Birthday microsite demo
- `/demos/wedding` — Wedding invitation demo
- `/demos/shop` — Small shop showcase demo
- `/demos/product` — Single product launch demo

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
