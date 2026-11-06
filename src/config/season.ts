// ───────────────────────────────────────────────────────────────────────────
// Seasonal branding — the ONE place to switch the whole site's season.
//
//   Holiday Mode      Christmas logo, red branding, Christmas-lighting hero,
//                     Christmas Light Installation as the primary service.
//   Landscaping Mode  Standard logo, evergreen year-round branding,
//                     landscaping hero, Landscaping as the primary focus.
//
// To switch: change ACTIVE_MODE below and rebuild. Nothing else needs editing.
// (Palette tokens switch via [data-season] in styles.css.)
// ───────────────────────────────────────────────────────────────────────────
import type { ImageKey, ServiceKey } from "./schema";

export type SeasonMode = "holiday" | "landscaping";

export const ACTIVE_MODE: SeasonMode = "holiday";

export interface SeasonConfig {
  logoVariant: "holiday" | "standard";
  primaryService: ServiceKey;
  /** Value of the service dropdown default / CTA deep link. */
  estimateServiceParam: string;
  heroImage: ImageKey;
  heroImageAlt: string;
  /** True while the hero image is a stock photo, not a Premier project. */
  heroIsPlaceholder: boolean;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
  };
  form: { title: string; body: string };
  metaTitle: string;
  metaDescription: string;
}

export const SEASONS: Record<SeasonMode, SeasonConfig> = {
  holiday: {
    logoVariant: "holiday",
    primaryService: "christmasLights",
    estimateServiceParam: "christmas",
    heroImage: "holidayHero",
    heroImageAlt:
      "A two-story home outlined in warm white Christmas lights along the roofline and garage at night (stock photo)",
    heroIsPlaceholder: true,
    hero: {
      eyebrow: "Christmas Light Installation • Dayton, OH",
      headline: "Make Your Home Shine This Holiday Season",
      subheadline:
        "Bring your holiday vision to life with professional Christmas light installation from Premier Landscape & Design. Proudly serving Dayton, Ohio, and surrounding communities.",
      primaryCta: "Request a Christmas Light Estimate",
    },
    form: {
      title: "Let's Light Up Your Holidays",
      body: "Tell us a little about your property and the Christmas lighting project you have in mind.",
    },
    metaTitle: "Christmas Light Installation Dayton OH | Premier Landscape & Design",
    metaDescription:
      "Professional Christmas light installation for homes and businesses in Dayton, Ohio and surrounding communities. Request a holiday lighting estimate from Premier Landscape & Design.",
  },
  landscaping: {
    logoVariant: "standard",
    primaryService: "landscapeDesign",
    estimateServiceParam: "landscaping",
    heroImage: "landscapingHero",
    heroImageAlt:
      "A freshly mulched landscape bed with hydrangeas and arborvitae along a brick home",
    heroIsPlaceholder: false,
    hero: {
      eyebrow: "Landscaping & Design • Dayton, OH",
      headline: "Outdoor Spaces That Look Their Best",
      subheadline:
        "Landscape design, mulching, and property care from Premier Landscape & Design. Proudly serving Dayton, Ohio, and surrounding communities.",
      primaryCta: "Request a Landscaping Estimate",
    },
    form: {
      title: "Let's Talk About Your Property",
      body: "Tell us a little about your property and the landscaping project you have in mind.",
    },
    metaTitle: "Landscaping Dayton OH | Premier Landscape & Design",
    metaDescription:
      "Landscape design, mulching, lawn care and outdoor property services for homes and businesses in Dayton, Ohio and surrounding communities. Request an estimate from Premier Landscape & Design.",
  },
};

export const SEASON: SeasonConfig = SEASONS[ACTIVE_MODE];
export const IS_HOLIDAY = ACTIVE_MODE === "holiday";
