import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { Hero } from "@/components/site/hero";
import { FeaturedChristmas } from "@/components/site/featured-christmas";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Inspiration } from "@/components/site/inspiration";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { About } from "@/components/site/about";
import { ServiceArea } from "@/components/site/service-area";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { HOME_DESCRIPTION, HOME_TITLE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  component: Index,
});

// Section order follows the conversion plan: hero + form → featured service →
// trust → inspiration → secondary services → real work → about → area → CTA.
function Index() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturedChristmas />
      <WhyChooseUs />
      <Inspiration />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
}
