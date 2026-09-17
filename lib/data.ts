// ============================================================================
// DATA-DRIVEN CONTENT FILE
// ----------------------------------------------------------------------------
// This file centralizes every piece of content that appears on the landing page.
// To add, remove, or edit items, simply update the arrays below.
// No component code needs to be touched for routine content changes.
// ============================================================================

export type DemoCategory = "Birthday" | "Wedding" | "Shop" | "Product";

export interface Demo {
  /** Unique id — used as React key and slug */
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
  /** Route that the "Live Demo" button opens */
  demoUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "sparkles" | "heart" | "trending-up" | "share-2" | "zap" | "pen-tool";
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  /** Standard fixed price (shown with strikethrough) */
  standardPrice: number;
  /** Limited-time special offer price */
  offerPrice: number;
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
// Update this array to add / remove / edit live demo cards.
// ----------------------------------------------------------------------------
export const demos: Demo[] = [
  {
    id: "birthday-wish-1",
    category: "Birthday",
    title: "Personalized Birthday Experience",
    description:
      "A heartfelt, interactive birthday microsite with photo galleries, music, confetti, and a custom message board.",
    image: "/demos/birthday-preview.jpg",
    demoUrl: "/demos/birthday",
  },
  {
    id: "wedding-invite-1",
    category: "Wedding",
    title: "Digital Wedding Invitation",
    description:
      "An elegant invitation with RSVP handling, event timeline, couple story gallery, and guest directions.",
    image: "/demos/wedding-preview.jpg",
    demoUrl: "/demos/wedding",
  },
  {
    id: "local-shop-1",
    category: "Shop",
    title: "Mini Product Showcase",
    description:
      "A compact storefront for local businesses with product cards, pricing, and direct WhatsApp ordering.",
    image: "/demos/shop-preview.jpg",
    demoUrl: "/demos/shop",
  },
  {
    id: "product-launch-1",
    category: "Product",
    title: "Small Product Launch Page",
    description:
      "A high-converting single-page launch site with hero gallery, feature list, testimonials, and inquiry CTA.",
    image: "/demos/product-preview.jpg",
    demoUrl: "/demos/product",
  },
];

// ----------------------------------------------------------------------------
// 2. VALUE PROPOSITION / SERVICES ARRAY
// Update this array to change the "Why Choose Custom Web Pages?" section.
// ----------------------------------------------------------------------------
export const services: Service[] = [
  {
    id: "permanent-memories",
    title: "Permanent Memories",
    description:
      "Unlike a fleeting social post, a custom web page lives forever and becomes a keepsake you can revisit anytime.",
    icon: "heart",
  },
  {
    id: "interactive-experiences",
    title: "Interactive Experiences",
    description:
      "Add music, animations, galleries, RSVP forms, maps, and confetti to make moments feel truly special.",
    icon: "sparkles",
  },
  {
    id: "professional-edge",
    title: "Professional Edge",
    description:
      "A branded microsite gives your event or local shop a polished, premium impression that builds trust instantly.",
    icon: "trending-up",
  },
  {
    id: "easy-sharing",
    title: "Effortless Sharing",
    description:
      "Share a single memorable link via WhatsApp, email, or invitation cards — no apps or logins required for guests.",
    icon: "share-2",
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description:
      "From brief to live site in days, not weeks, so you never miss the perfect moment.",
    icon: "zap",
  },
  {
    id: "made-for-you",
    title: "Made For You",
    description:
      "Every color, font, photo, and message is tailored to your story — no cookie-cutter templates.",
    icon: "pen-tool",
  },
];

// ----------------------------------------------------------------------------
// 3. PRICING PACKAGES ARRAY
// Update this array to change the featured offers in the pricing section.
// ----------------------------------------------------------------------------
export const pricingPackages: PricingPackage[] = [
  {
    id: "birthday-package",
    title: "Birthday Wishes Package",
    subtitle: "Everything you need to make someone feel celebrated",
    standardPrice: 3999,
    offerPrice: 2499,
    features: [
      "1-page personalized birthday microsite",
      "Photo gallery + custom message section",
      "Background music + confetti animation",
      "Mobile & desktop responsive",
      "Shareable link ready in 2–3 days",
      "1 round of free revisions",
    ],
    cta: "Order Birthday Site",
    whatsappMessage:
      "Hi! I'm interested in the Birthday Wishes Package (special offer ₹2,499). Please share the next steps.",
    featured: true,
  },
  {
    id: "wedding-package",
    title: "Wedding Invitation Package",
    subtitle: "A stunning digital invitation for your big day",
    standardPrice: 5999,
    offerPrice: 3999,
    features: [
      "Multi-section wedding invitation",
      "Couple story gallery + timeline",
      "RSVP form + guest count tracking",
      "Event location map & calendar link",
      "Music + smooth scroll animations",
      "Mobile-first, WhatsApp-shareable link",
      "2 rounds of free revisions",
    ],
    cta: "Order Wedding Site",
    whatsappMessage:
      "Hi! I'm interested in the Wedding Invitation Package (special offer ₹3,999). Please share the next steps.",
    featured: true,
  },
  {
    id: "shop-package",
    title: "Mini Shop Showcase",
    subtitle: "A clean storefront for your local business",
    standardPrice: 4999,
    offerPrice: 3499,
    features: [
      "Up to 8 product/service cards",
      "WhatsApp order button per product",
      "About section + contact details",
      "Opening hours + location info",
      "Google-friendly + shareable link",
      "Delivered in 3–4 days",
      "1 round of free revisions",
    ],
    cta: "Order Shop Site",
    whatsappMessage:
      "Hi! I'm interested in the Mini Shop Showcase Package (special offer ₹3,499). Please share the next steps.",
    featured: false,
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
  email: "hello@youragency.com",
  /** Brand / agency name */
  brand: "Momento Web Studio",
  /** Tagline used in the navbar / footer */
  tagline: "Custom digital experiences for your moments & business.",
} as const;

// Helper to build WhatsApp click-to-chat URLs
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}
