import { createFileRoute } from "@tanstack/react-router";
import { Building2, ClipboardList, Home, MessageSquare, Sparkles, TreePine } from "lucide-react";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Inspiration } from "@/components/site/inspiration";
import { SectionHeading } from "@/components/site/section-heading";
import { FormSection } from "@/components/site/form-section";
import { FinalCta } from "@/components/site/final-cta";
import { CHRISTMAS_ESTIMATE_HREF } from "@/lib/nav";
import { IMAGES } from "@/lib/site-images";
import { SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `Christmas Light Installation in Dayton, OH | ${BUSINESS_NAME}`;
const DESCRIPTION =
  "Professional Christmas light installation for homes and businesses in Dayton, Ohio and surrounding communities. Request a holiday lighting estimate from Premier Landscape & Design.";

export const Route = createFileRoute("/christmas-lights")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/christmas-lights" }),
  component: ChristmasLightsPage,
});

const FOCUS = [
  {
    icon: Home,
    title: "Rooflines & Exteriors",
    body: "Light the lines of your home so its shape stands out after dark.",
  },
  {
    icon: TreePine,
    title: "Trees & Landscaping",
    body: "Bring trees, shrubs and landscape beds into your holiday display.",
  },
  {
    icon: Building2,
    title: "Homes & Businesses",
    body: "Residential and commercial properties in Dayton and the surrounding areas.",
  },
];

const STEPS = [
  {
    icon: MessageSquare,
    title: "Tell Us Your Vision",
    body: "Share your property and the look you have in mind through the form or a quick call.",
  },
  {
    icon: ClipboardList,
    title: "Discuss the Details",
    body: "We talk through your goals, your property and what's possible.",
  },
  {
    icon: Sparkles,
    title: "Light It Up",
    body: "With a plan in place, your Christmas lighting project moves forward.",
  },
];

function ChristmasLightsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Christmas Light Installation • Dayton, OH"
        title="Professional Christmas Light Installation in Dayton, Ohio"
        description={SERVICES.christmasLights.shortDescription}
        image={IMAGES.holidayHero}
        imageAlt="A two-story home outlined in warm white Christmas lights at night (stock photo)"
        placeholder
        estimateHref={CHRISTMAS_ESTIMATE_HREF}
        estimateLabel="Request a Christmas Light Estimate"
      />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Holiday Lighting"
            title="Make the Holidays Unforgettable"
            description="From a classic roofline to a fully lit landscape, tell us the look you're picturing and we'll talk through how to bring it to life."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:gap-7">
            {FOCUS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_22px_45px_-24px_rgba(122,10,36,0.4)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_20px_-8px_rgba(167,29,62,0.9)]">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-primary">
                  {title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Inspiration compact />

      <section className="section-pad bg-primary text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeading
            light
            eyebrow="How It Works"
            title="A Simple Path to a Brilliant Display"
            description="Three straightforward steps from first conversation to a glowing home."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="text-center sm:text-left">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-red-light text-red-light sm:mx-0">
                  <Icon className="size-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-red-light">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FormSection id="estimate" />
      <FinalCta />
    </SiteLayout>
  );
}
