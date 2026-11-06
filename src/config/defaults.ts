// ───────────────────────────────────────────────────────────────────────────
// Default copy and image paths for Premier Landscape & Design. Any copy field
// can be overridden in site.config.json → content. Seasonal (Holiday vs
// Landscaping) hero copy lives in season.ts. Do not add unconfirmed business
// facts here: no years in business, licenses, insurance, ratings, or reviews.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  about: {
    eyebrow: "About Premier",
    title: "Beautiful Outdoor Spaces. Brilliant Holiday Displays.",
    body: "Premier Landscape & Design helps homeowners and businesses throughout Dayton and the surrounding areas enhance their outdoor spaces. From landscaping and property maintenance to festive Christmas light installations, we're dedicated to creating outdoor environments that look their best throughout the seasons.",
  },
  faqs: [
    {
      q: "How do I request a Christmas light installation estimate?",
      a: "Use the estimate form on this page or call (937) 216-6464. Tell us about your property and the look you have in mind, and Premier will follow up with next steps.",
    },
    {
      q: "Do you install Christmas lights on homes and businesses?",
      a: "Yes. Premier Landscape & Design works with both residential and commercial properties.",
    },
    {
      q: "Which areas around Dayton do you serve?",
      a: "Premier is based in Dayton, Ohio and serves the surrounding areas. If you're not sure whether your property is in range, reach out and ask.",
    },
    {
      q: "Can I request landscaping and Christmas lighting services?",
      a: "Yes. Premier offers both, so feel free to mention everything you're considering when you get in touch.",
    },
    {
      q: "How far in advance should I inquire about Christmas lighting?",
      a: "We recommend reaching out as early as you can so Premier can talk through your project and availability with you. Call (937) 216-6464 or send an estimate request to get started.",
    },
  ],
  footerBlurb:
    "Christmas light installation and professional landscaping for homes and businesses in Dayton, Ohio and the surrounding areas.",
  finalCta: {
    title: "Let's Light Up Your Holidays",
    body: "Tell us a little about your property and the Christmas lighting project you have in mind.",
  },
  seo: {
    description:
      "Premier Landscape & Design provides professional Christmas light installation and landscaping in Dayton, Ohio and surrounding communities. Request an estimate today.",
  },
} as const;

export const DEFAULT_IMAGES = {
  // Licensed STOCK photography (Wikimedia Commons, see /credits and
  // CREDITS.md). NOT Premier projects: replace with real project photos.
  holidayHero: "/images/christmas/hero-warm-white-home.webp",
  holidayFeatured: "/images/christmas/featured-warm-white-estate.webp",
  holidayRoofline: "/images/christmas/roofline-warm-white.webp",
  holidayMulticolor: "/images/christmas/multicolor-home.webp",
  holidayTrees: "/images/christmas/lit-tree-landscape.webp",
  // Landscaping Mode hero. Source photo is only 414px wide: replace with a
  // larger original before switching the site to Landscaping Mode.
  landscapingHero: "/images/work/hydrangea-arborvitae-bed.webp",
  // Real Premier landscaping photos (optimized WebP copies of ../Images).
  workBrickWalkway: "/images/work/brick-walkway-mulch-bed.webp",
  workGrasses: "/images/work/curved-bed-ornamental-grasses.webp",
  workMaple: "/images/work/japanese-maple-mulch-bed.webp",
  workHydrangea: "/images/work/hydrangea-arborvitae-bed.webp",
  workBoulder: "/images/work/boulder-wall-backyard.webp",
  workHosta: "/images/work/hosta-mulch-bed.webp",
} as const;
