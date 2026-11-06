// ───────────────────────────────────────────────────────────────────────────
// Derived business values used across the site. The source of truth is
// src/config/site.config.json (business facts) and src/config/season.ts
// (seasonal branding) — edit those, not this file.
// ───────────────────────────────────────────────────────────────────────────
import { DEFAULT_CONTENT } from "@/config/defaults";
import { SEASON } from "@/config/season";
import { siteConfig } from "@/config";

const { business, seo, content } = siteConfig;

export const BUSINESS_NAME = business.name;
export const BUSINESS_SHORT_NAME = business.shortName || business.name;
export const BUSINESS_PHONE = business.phone;
export const BUSINESS_EMAIL = business.email;

// Phone normalized for tel: links — derived from the display value so one
// edit updates every call button. Assumes a US number.
const digits = BUSINESS_PHONE.replace(/\D/g, "");
export const BUSINESS_PHONE_TEL = `tel:+${digits.length === 10 ? "1" : ""}${digits}`;

const { city, state } = business.address;
export const LOCATION_LABEL = [city, state].filter(Boolean).join(", ");

export const SITE_URL = seo.siteUrl.replace(/\/+$/, "");

// Logo for the active season. Empty src → text wordmark placeholder.
export const LOGO = siteConfig.branding.logo[SEASON.logoVariant];

function withDefaults<T extends Record<string, string>>(
  defaults: T,
  overrides: { [K in keyof T]?: string | undefined },
): { [K in keyof T]: string } {
  const out: Record<string, string> = { ...defaults };
  for (const [k, v] of Object.entries(overrides)) if (v) out[k] = v;
  return out as { [K in keyof T]: string };
}

export const COPY = {
  hero: withDefaults(SEASON.hero, content.hero),
  about: withDefaults(DEFAULT_CONTENT.about, content.about),
  faqs: content.faqs && content.faqs.length > 0 ? content.faqs : DEFAULT_CONTENT.faqs,
  footerBlurb: content.footerBlurb || DEFAULT_CONTENT.footerBlurb,
  finalCta: withDefaults({ title: SEASON.form.title, body: SEASON.form.body }, content.finalCta),
  testimonials: content.testimonials,
};
