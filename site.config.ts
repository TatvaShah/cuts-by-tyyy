import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Cuts by Tyyy",
  tagline: "Clean line ups, fades and tapers in Scarborough, plus house calls.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Scarborough (Warden and Lawrence), ON",
  siteUrl: "https://cuts-by-tyyy-ca.vercel.app",

  theme: {
    preset: "barber-bold",
  },

  hero: {
    eyebrow: "Barbering in Scarborough",
    headline: "Clean line ups, fades and tapers",
    subhead: "Cuts by Tyyy offers line ups, fades and low, mid and super low tapers in Scarborough, at Warden and Lawrence. House calls are available. Book through the booking page, or send an Instagram message.",
    images: [
      { src: "/images/post-2.jpg", alt: "A mid taper haircut from Cuts by Tyyy in Scarborough", width: 1080, height: 1921 },
      { src: "/images/post-8.jpg", alt: "A curly cut and taper from Cuts by Tyyy in Scarborough", width: 640, height: 1136 },
      { src: "/images/post-4.jpg", alt: "A super low taper from Cuts by Tyyy in Scarborough", width: 1080, height: 1921 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Line ups, fades and tapers",
    "Low, mid and super low tapers",
    "Warden and Lawrence, Scarborough",
    "House calls by Instagram DM",
  ],

  about: {
    title: "Welcome to Cuts by Tyyy",
    body: [
      "Cuts by Tyyy is a Scarborough barber offering clean line ups, fades and tapers, including low, mid and super low tapers. The chair is at Warden and Lawrence. House calls are available by Instagram DM.",
      "Book through the booking page, or send an Instagram message.",
    ],
    image: { src: "/images/post-2.jpg", alt: "A mid taper haircut from Cuts by Tyyy in Scarborough", width: 1080, height: 1921 },
  },

  menu: {
    label: "Services",
    title: "Cuts and tapers",
    variant: "list",
    showPrices: false,
    priceNote: "Book through the booking page, or send an Instagram message for pricing.",
    groups: [
      {
        title: "In the chair",
        items: [
          { name: "Line ups" },
          { name: "Fades" },
          { name: "Low, mid and super low tapers" },
        ],
      },
      {
        title: "House calls",
        items: [
          { name: "House calls", description: "Send an Instagram message to ask about a house call." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/post-2.jpg", width: 1080, height: 1921, alt: "A mid taper haircut from Cuts by Tyyy in Scarborough", caption: "A mid taper", href: "https://www.instagram.com/reel/Df5lmggKP3g/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1921, alt: "A super low taper from Cuts by Tyyy in Scarborough", caption: "A super low taper", href: "https://www.instagram.com/reel/Df0YQFiKTwF/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1921, alt: "A low taper buzz from the back, by Cuts by Tyyy in Scarborough", caption: "A low taper buzz", href: "https://www.instagram.com/reel/DfwIdLSxFEW/" },
      { src: "/images/post-8.jpg", width: 640, height: 1136, alt: "A curly cut and taper from Cuts by Tyyy in Scarborough", caption: "A curly cut and taper", href: "https://www.instagram.com/reel/DMW6Dr7tmxv/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "cutsbytyyy",
    embeds: ["https://www.instagram.com/reel/Df5lmggKP3g/", "https://www.instagram.com/reel/Df0YQFiKTwF/", "https://www.instagram.com/reel/DfwIdLSxFEW/"],
  },

  order: {
    label: "How to book",
    title: "Book a cut",
    intro: "Book through the booking page, or send an Instagram message. For a house call, send a message. Cuts by Tyyy is at Warden and Lawrence in Scarborough.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi Cuts by Tyyy! I would like to book a cut.\nPreferred day and time:\nShop or house call:\nCut or style:",
    links: [
      { label: "Book now", href: "https://cutsbytyyy.setmore.com/" },
      { label: "Message on Instagram", href: "https://ig.me/m/cutsbytyyy" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the booking page, or send an Instagram message. For a house call, send a message." },
    { q: "Where are you based?", a: "Cuts by Tyyy is in Scarborough, at Warden and Lawrence." },
    { q: "What cuts do you offer?", a: "Line ups, fades and tapers, including low, mid and super low tapers, plus house calls." },
  ],

  contact: {
    title: "Contact",
    area: "Warden and Lawrence, Scarborough, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/cutsbytyyy/" },
    ],
  },

  seo: {
    title: "Cuts by Tyyy | Line ups, fades and tapers in Scarborough",
    description: "Scarborough barber at Warden and Lawrence, offering line ups, fades, low, mid and super low tapers, and house calls. Book online or by Instagram DM.",
    keywords: ["Cuts by Tyyy", "Scarborough barber", "mid taper Scarborough", "house call barber Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
