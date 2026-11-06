import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ESTIMATE_HREF } from "@/lib/nav";
import { ctaButton } from "./buttons";
import { PlaceholderChip } from "./placeholder-chip";

// Compact dark hero used at the top of every inner page (keeps the
// transparent header legible).
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  placeholder = false,
  estimateHref = ESTIMATE_HREF,
  estimateLabel = "Get an Estimate",
  showCtas = true,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  placeholder?: boolean;
  estimateHref?: string;
  estimateLabel?: string;
  showCtas?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-primary">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/55 to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_100%,rgba(167,29,62,0.3),transparent)]" />
        </div>
      )}
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-36 text-center sm:px-6 sm:pb-20 sm:pt-44">
        <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/25 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-red-light shadow-[0_0_10px_2px_rgba(240,106,128,0.8)]" />
          {eyebrow}
        </p>
        <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {description}
        </p>
        {showCtas && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={estimateHref} className={ctaButton({ variant: "red", size: "lg" })}>
              {estimateLabel}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="size-4" />
              Call {BUSINESS_PHONE}
            </a>
          </div>
        )}
        {children}
      </div>
      {placeholder && (
        <PlaceholderChip className="absolute bottom-3 right-4 sm:right-6">
          Stock photo
        </PlaceholderChip>
      )}
      <div className="light-string absolute inset-x-0 bottom-0" aria-hidden />
    </section>
  );
}
