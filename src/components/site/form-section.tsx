import { Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { EstimateFormCard } from "./estimate-form";

// Estimate form + call card for inner pages (the homepage form lives in the
// hero). Same component, same delivery pipeline.
export function FormSection({ id = "estimate" }: { id?: string }) {
  return (
    <section className="section-pad scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-5xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Get in Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl">
            Prefer to talk it through?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Call us directly and we'll walk through your project, answer your questions, and help
            you plan the details.
          </p>
          <a
            href={BUSINESS_PHONE_TEL}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 font-display text-2xl font-semibold tracking-tight text-primary shadow-[0_2px_20px_-14px_rgba(0,0,0,0.2)] transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="size-6 text-accent" />
            {BUSINESS_PHONE}
          </a>
        </div>
        <EstimateFormCard id={id} />
      </div>
    </section>
  );
}
