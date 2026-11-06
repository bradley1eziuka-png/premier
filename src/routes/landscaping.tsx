import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { FormSection } from "@/components/site/form-section";
import { LANDSCAPING_ESTIMATE_HREF } from "@/lib/nav";
import { IMAGES } from "@/lib/site-images";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `Landscaping & Landscape Design in Dayton, OH | ${BUSINESS_NAME}`;
const DESCRIPTION =
  "Landscape design, mulching, lawn care and outdoor property services for homes and businesses in Dayton, Ohio and surrounding communities. Request an estimate.";

export const Route = createFileRoute("/landscaping")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/landscaping" }),
  component: LandscapingPage,
});

function LandscapingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Landscaping • Dayton, OH"
        title="Landscaping & Outdoor Property Services"
        description="From landscape design to everyday property care, Premier Landscape & Design helps homes and businesses in Dayton and the surrounding areas look their best."
        image={IMAGES.workHydrangea}
        imageAlt="Mulched landscape bed with hydrangeas and arborvitae along a brick home"
        estimateHref={LANDSCAPING_ESTIMATE_HREF}
        estimateLabel="Request a Landscaping Estimate"
      />
      <Services showLink={false} />
      <Gallery id="landscaping-work" />
      <FormSection id="estimate" />
    </SiteLayout>
  );
}
