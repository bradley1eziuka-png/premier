import { ArrowRight } from "lucide-react";

import { LANDSCAPING_SERVICES } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";

// Secondary services: six balanced cards (3 × 2 on desktop). Descriptions are
// intentionally general: no scope, pricing or timing promises until the owner
// confirms each offering. Hardscaping is covered under Landscape Design.
export function Services({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Landscaping & Property Services"
          title="Year-Round Outdoor Property Care"
          description="Beyond the holidays, Premier Landscape & Design helps keep your property looking its best in every season."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {LANDSCAPING_SERVICES.map(({ key, icon: Icon, title, shortDescription }) => (
            <article
              key={key}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_45px_-24px_rgba(122,10,36,0.45)]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-burgundy to-accent transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-primary">
                {title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {shortDescription}
              </p>
            </article>
          ))}
        </div>
        {showLink && (
          <div className="mt-10 text-center">
            <a
              href="/landscaping"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
            >
              Explore Landscaping
              <ArrowRight className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
