// ============================================================================
// DATA-DRIVEN CONTENT FILE
// ----------------------------------------------------------------------------
// This file centralizes every piece of content that appears on the landing page.
// To add, remove, or edit items, simply update the arrays below.
// No component code needs to be touched for routine content changes.
// ============================================================================

export type DemoCategory =
  | "Wedding"
  | "Engagement"
  | "Birthday"
  | "Anniversary"
  | "Housewarming"
  | "Baby Shower"
  | "Other";

export interface Demo {
  /** Unique id — used as React key */
  id: string;
  /** Visual category badge shown on the card */
  category: DemoCategory;
  /** Project title */
  title: string;
  /** Short description (1-2 sentences) */
  description: string;
  /**
   * Path to the preview image.
   * Place screenshots inside /public/demos/ and reference them as "/demos/your-file.png".
   */
  image: string;
  /**
   * URL that the "Live Demo" button opens.
   * Use an internal path like "/demos/wedding" for built-in demos,
   * or an absolute external URL like "https://client-site.com" for live client work.
   */
  demoUrl: string;
  /**
   * Optional hint shown next to the demo button.
   * e.g. "Opens external site" for live client links.
   */
  demoHint?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "heart" | "sparkles" | "users" | "share-2" | "zap" | "pen-tool";
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  /** Starting price shown to visitors; final quote depends on requirements */
  startingFrom: number;
  /** Optional reference full price shown with strikethrough */
  standardPrice?: number;
  /** Bullet list of included features */
  features: string[];
  /** CTA label */
  cta: string;
  /** WhatsApp message pre-filled when the user clicks "Order Now" */
  whatsappMessage: string;
  /** Whether this card should be visually highlighted as featured */
  featured?: boolean;
}

// ----------------------------------------------------------------------------
// 1. DEMO SHOWCASE ARRAY
// Mix internal preview demos with live client sites you have built.
// For external sites, use an absolute URL (https://...) and add a demoHint.
// ----------------------------------------------------------------------------
export const demos: Demo[] = [
  {
    id: "live-wedding-client",
    category: "Wedding",
    title: "A Recent Wedding Invite",
    description:
      "A real wedding invitation we designed for a client. Clean typography, RSVP form, couple photos, and a warm, personal flow.",
    image: "/demos/wedding-preview.jpg",
    demoUrl: "https://example-client-wedding.com",
    demoHint: "Opens a live client website",
  },
  {
    id: "birthday-wish",
    category: "Birthday",
    title: "Birthday Wish Page",
    description:
      "Surprise someone with a personalized microsite: photo gallery, music, handwritten-style messages, and celebratory details.",
    image: "/demos/birthday-preview.jpg",
    demoUrl: "/demos/birthday",
  },
  {
    id: "anniversary-celebration",
    category: "Anniversary",
    title: "Anniversary Tribute",
    description:
      "Celebrate years of togetherness with a romantic timeline, shared memories, and a heartfelt message for your partner.",
    image: "/demos/anniversary-preview.jpg",
    demoUrl: "/demos/anniversary",
  },
  {
    id: "housewarming-invite",
    category: "Housewarming",
    title: "Housewarming Invitation",
    description:
      "Invite guests to your new home with directions, ceremony timings, and a warm, modern design they will remember.",
    image: "/demos/housewarming-preview.jpg",
    demoUrl: "/demos/housewarming",
  },
  {
    id: "engagement-invite",
    category: "Engagement",
    title: "Engagement Announcement",
    description:
      "Elegant save-the-date style page to announce your engagement with photos, date, venue, and a warm call to celebrate.",
    image: "/demos/engagement-preview.jpg",
    demoUrl: "/demos/engagement",
  },
  {
    id: "baby-shower-invite",
    category: "Baby Shower",
    title: "Baby Shower Invite",
    description:
      "A soft, joyful invitation for baby showers with event details, gift registry hints, and cute photo moments.",
    image: "/demos/baby-shower-preview.jpg",
    demoUrl: "/demos/baby-shower",
  },
];

// ----------------------------------------------------------------------------
// 2. VALUE PROPOSITION / SERVICES ARRAY
// Update this array to change the "Why Choose Custom Web Pages?" section.
// ----------------------------------------------------------------------------
export const services: Service[] = [
  {
    id: "personal-touch",
    title: "Made for Your Moment",
    description:
      "Every design is built around your story — your colors, photos, words, and feelings. Nothing mass-produced, nothing generic.",
    icon: "heart",
  },
  {
    id: "share-easily",
    title: "One Link, Every Guest",
    description:
      "Send your invitation or tribute through WhatsApp, email, or print it on a card. Guests open it instantly — no app needed.",
    icon: "share-2",
  },
  {
    id: "beautiful-interactions",
    title: "Details That Delight",
    description:
      "Smooth animations, gentle music, photo galleries, RSVP forms, maps, and little surprises that make people smile.",
    icon: "sparkles",
  },
  {
    id: "fast-reliable",
    title: "Ready in 1 Day",
    description:
      "We move quickly so you don't have to worry. Share your details, approve the preview, and your site goes live the same day.",
    icon: "zap",
  },
  {
    id: "real-support",
    title: "Human Support",
    description:
      "Talk directly to the designer. Ask questions, request changes, and get honest guidance on what works best for your occasion.",
    icon: "users",
  },
  {
    id: "lasting-keepasake",
    title: "A Keepsake Forever",
    description:
      "Unlike a story that disappears, your page stays live as a beautiful memory you and your loved ones can revisit anytime.",
    icon: "pen-tool",
  },
];

// ----------------------------------------------------------------------------
// 3. PRICING PACKAGES ARRAY
// Update this array to change the featured offers in the pricing section.
// ----------------------------------------------------------------------------
export const pricingPackages: PricingPackage[] = [
  {
    id: "wedding-package",
    title: "Wedding Invitation",
    subtitle: "Your big day, beautifully announced",
    startingFrom: 1999,
    standardPrice: 3999,
    features: [
      "Multi-section wedding website",
      "Couple story + photo gallery",
      "RSVP form + guest count tracking",
      "Event map, timings, calendar link",
      "Background music + smooth animations",
      "WhatsApp-shareable link",
      "2 rounds of revisions",
    ],
    cta: "Order Wedding Site",
    whatsappMessage:
      "Hi! I'm interested in the Wedding Invitation Package (starting from ₹1,999). Please share the next steps.",
    featured: true,
  },
  {
    id: "celebration-package",
    title: "Celebration Package",
    subtitle: "Engagement, anniversary, housewarming, baby shower",
    startingFrom: 1499,
    standardPrice: 2999,
    features: [
      "Custom invitation or tribute site",
      "Event details + photo gallery",
      "Map / directions + timings",
      "Personalized message section",
      "Music + elegant animations",
      "Mobile-first + shareable link",
      "2 rounds of revisions",
    ],
    cta: "Order Celebration Site",
    whatsappMessage:
      "Hi! I'm interested in the Celebration Package (starting from ₹1,499). Please share the next steps.",
  },
  {
    id: "birthday-package",
    title: "Birthday Wishes",
    subtitle: "A joyful surprise for someone special",
    startingFrom: 999,
    standardPrice: 2499,
    features: [
      "1-page personalized birthday microsite",
      "Photo gallery + custom message section",
      "Background music + confetti animation",
      "Mobile & desktop responsive",
      "Shareable link ready in 1 day",
      "1 round of revisions",
    ],
    cta: "Order Birthday Site",
    whatsappMessage:
      "Hi! I'm interested in the Birthday Wishes Package (starting from ₹999). Please share the next steps.",
  },
];

// ----------------------------------------------------------------------------
// 4. BUSINESS / CONTACT DETAILS
// Update these constants to change the phone, email, and social links used
// throughout the site.
// ----------------------------------------------------------------------------
export const CONTACT = {
  /** WhatsApp number in international format, no + or spaces */
  whatsappNumber: "919876543210",
  /** Business email address */
  email: "hello@momentastudio.in",
  /** Brand / agency name */
  brand: "Momenta Studio",
  /** Tagline used in the navbar / footer */
  tagline: "Custom invitation and celebration websites, designed with heart.",
} as const;

// Helper to build WhatsApp click-to-chat URLs
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}
