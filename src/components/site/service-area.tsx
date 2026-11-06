import { MapPin, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";

// Only Dayton is named; surrounding communities are described generally.
// Specific cities must come from the owner before being listed.
export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-20 bg-secondary/60 py-12 sm:py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-5">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_20px_-8px_rgba(122,10,36,0.8)]">
            <MapPin className="size-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Service Area
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              Serving Dayton, Ohio, and Surrounding Areas
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Not sure if your property is in range? Give us a call and ask.
            </p>
          </div>
        </div>
        <a
          href={BUSINESS_PHONE_TEL}
          className="inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold text-primary shadow-[0_2px_16px_-12px_rgba(0,0,0,0.2)] transition-colors hover:border-accent hover:text-accent"
        >
          <Phone className="size-4 text-accent" />
          {BUSINESS_PHONE}
        </a>
      </div>
    </section>
  );
}
