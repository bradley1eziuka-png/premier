import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { About } from "@/components/site/about";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ServiceArea } from "@/components/site/service-area";
import { FinalCta } from "@/components/site/final-cta";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `About Premier Landscape & Design | Dayton, OH`;
const DESCRIPTION = `Learn about ${BUSINESS_NAME}, serving homeowners and businesses in Dayton, Ohio and surrounding communities with landscaping and Christmas light installation.`;

export const Route = createFileRoute("/about")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Premier"
        title="Beautiful Outdoor Spaces. Brilliant Holiday Displays."
        description="Landscaping and Christmas light installation for homes and businesses in Dayton and the surrounding areas."
        showCtas={false}
      />
      <About />
      <WhyChooseUs />
      <ServiceArea />
      <FinalCta />
    </SiteLayout>
  );
}
