import { ArrowRight, Phone } from "lucide-react";

import { SEASON } from "@/config/season";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { ESTIMATE_HREF } from "@/lib/nav";
import { ctaButton } from "./buttons";

// Closing CTA band — deep burgundy in Holiday Mode, evergreen in Landscaping
// Mode (via --burgundy). Points to the estimate form on the homepage.
export function FinalCta() {
  return (
    <section id="final-cta" className="relative isolate overflow-hidden bg-burgundy">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(240,106,128,0.28),transparent),linear-gradient(to_bottom,transparent,rgba(23,33,42,0.55))]"
        aria-hidden
      />
      <div className="light-string absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {COPY.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          {COPY.finalCta.body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={ESTIMATE_HREF} className={ctaButton({ variant: "white", size: "lg" })}>
            {SEASON.hero.primaryCta}
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
      </div>
    </section>
  );
}
