import { ArrowRight, Phone } from "lucide-react";

import { SEASON } from "@/config/season";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";
import { EstimateFormCard } from "./estimate-form";
import { PlaceholderChip } from "./placeholder-chip";

// Two-column hero: eyebrow + headline + support copy + CTAs on the left,
// estimate form card on the right. On mobile it stacks (copy → CTAs → form)
// and sizes to its content, so the next section never peeks out as a strip.
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-primary lg:min-h-[92svh]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] max-lg:[mask-image:linear-gradient(to_bottom,#000_62%,transparent)] lg:inset-0 lg:h-auto">
        <img
          src={IMAGES[SEASON.heroImage]}
          alt={SEASON.heroImageAlt}
          className="h-full w-full object-cover object-[42%_62%] lg:object-[50%_60%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/30 to-primary/10 max-lg:from-primary/55 max-lg:via-primary/45 max-lg:to-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_12%_100%,rgba(122,10,36,0.35),transparent)]" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(38%_34%_at_24%_62%,rgba(15,22,30,0.5),transparent)] lg:block" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[92svh] lg:py-32">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-light shadow-[0_0_10px_2px_rgba(240,106,128,0.8)]" />
              {COPY.hero.eyebrow}
            </p>

            <h1 className="font-display text-balance text-[2.6rem] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              {COPY.hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.85)] sm:text-lg lg:text-xl">
              {COPY.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#estimate" className={ctaButton({ variant: "red", size: "lg" })}>
                {COPY.hero.primaryCta}
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

          <div className="lg:pl-4">
            <EstimateFormCard id="estimate" />
          </div>
        </div>
      </div>

      {SEASON.heroIsPlaceholder && (
        <PlaceholderChip className="absolute bottom-3 right-4 sm:right-6">
          Stock photo
        </PlaceholderChip>
      )}
      <div className="light-string absolute inset-x-0 bottom-0" aria-hidden />
    </section>
  );
}
