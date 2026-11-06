import { ArrowRight, Building2, Home, Lightbulb, TreePine } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { CHRISTMAS_ESTIMATE_HREF } from "@/lib/nav";
import { IMAGES } from "@/lib/site-images";
import { PRIMARY_SERVICE, SERVICES } from "@/lib/services-data";
import { ctaButton } from "./buttons";
import { PlaceholderChip } from "./placeholder-chip";
import { SectionHeading } from "./section-heading";

const HIGHLIGHTS = [
  { icon: Home, label: "Rooflines & exteriors" },
  { icon: TreePine, label: "Trees & landscaping" },
  { icon: Building2, label: "Homes & businesses" },
];

// Featured primary service. Uses Christmas lighting imagery only (licensed stock
// photo until real project photos exist).
export function FeaturedChristmas() {
  const service = SERVICES.christmasLights ?? PRIMARY_SERVICE;
  return (
    <section
      id="christmas-lights"
      className="relative scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(23,33,42,0.6)]">
            <img
              src={IMAGES.holidayFeatured}
              alt="A Victorian-style building outlined in warm white Christmas lights with illuminated shrubs (stock photo)"
              width={1300}
              height={975}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <PlaceholderChip className="absolute bottom-3 right-3" />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-4 -left-4 -z-10 hidden size-40 rounded-3xl bg-burgundy/15 sm:block"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Featured Service"
            title={service.title}
            description={service.shortDescription}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-primary shadow-[0_2px_16px_-12px_rgba(0,0,0,0.2)]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-[1.15rem]" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={CHRISTMAS_ESTIMATE_HREF} className={ctaButton({ variant: "red", size: "lg" })}>
              <Lightbulb className="size-4" />
              Request an Estimate
            </a>
            <a href="/christmas-lights" className={ctaButton({ variant: "outline", size: "lg" })}>
              Learn More
              <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Prefer to talk it through?{" "}
            <a href={BUSINESS_PHONE_TEL} className="font-semibold text-accent hover:underline">
              Call {BUSINESS_PHONE}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
