import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config";
import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  COPY,
} from "@/lib/site-config";
import { CHRISTMAS_ESTIMATE_HREF, NAV_LINKS } from "@/lib/nav";
import { Logo } from "./logo";

const FOOTER_SERVICE_LINKS = [
  { label: "Christmas Light Installation", href: "/christmas-lights" },
  { label: "Landscaping & Property Services", href: "/landscaping" },
  { label: "Our Work", href: "/our-work" },
  { label: "Request an Estimate", href: CHRISTMAS_ESTIMATE_HREF },
];

const SOCIAL_LABELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google",
  yelp: "Yelp",
  nextdoor: "Nextdoor",
  youtube: "YouTube",
};

// Optional details — each line renders only if the client provided it.
function ContactDetails() {
  const { address, hours, social } = siteConfig.business;
  const addressLine = [
    address.street,
    [address.city, address.state].filter(Boolean).join(", "),
    address.zip,
  ]
    .filter(Boolean)
    .join(address.street ? ", " : " ")
    .trim();
  const socials = Object.entries(social).filter(([, url]) => url);
  if (!BUSINESS_EMAIL && !addressLine && !hours.length && !socials.length) return null;
  return (
    <div className="mt-6 space-y-3 text-sm text-white/70">
      {BUSINESS_EMAIL && (
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="flex items-center gap-2.5 transition-colors hover:text-red-light"
        >
          <Mail className="size-4 text-red-light" />
          {BUSINESS_EMAIL}
        </a>
      )}
      {addressLine && (
        <p className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-red-light" />
          {address.street ? addressLine : `${addressLine} & surrounding areas`}
        </p>
      )}
      {hours.length > 0 && (
        <ul className="space-y-0.5">
          {hours.map((row) => (
            <li key={row.days}>
              <span className="font-semibold text-white/85">{row.days}:</span> {row.hours}
            </li>
          ))}
        </ul>
      )}
      {socials.length > 0 && (
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          {socials.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/85 transition-colors hover:text-red-light"
            >
              {SOCIAL_LABELS[key] ?? key}
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white">
      <div className="light-string absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-14">
          <div>
            <Logo variant="tile" className="h-28" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {COPY.footerBlurb}
            </p>
            <a
              href={BUSINESS_PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-red-light/60 hover:bg-white/10"
            >
              <Phone className="size-4 text-red-light" />
              {BUSINESS_PHONE}
            </a>
            <ContactDetails />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-red-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-red-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/55 sm:text-left">
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/55">
            <a href="/credits" className="transition-colors hover:text-red-light">
              Photo credits
            </a>{" "}
            · Dayton, OH
          </p>
        </div>
      </div>
    </footer>
  );
}
