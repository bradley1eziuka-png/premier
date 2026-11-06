import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Gallery } from "@/components/site/gallery";
import { Inspiration } from "@/components/site/inspiration";
import { FinalCta } from "@/components/site/final-cta";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `Our Work | Landscaping Projects in Dayton, OH | ${BUSINESS_NAME}`;
const DESCRIPTION =
  "See finished landscaping projects from Premier Landscape & Design in the Dayton, Ohio area, plus Christmas lighting inspiration.";

export const Route = createFileRoute("/our-work")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/our-work" }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Work"
        title="Our Work Speaks for Itself"
        description="Finished landscaping projects from Premier Landscape & Design, with Christmas lighting inspiration for the holidays."
        showCtas={false}
      />
      <Gallery id="landscaping-work" />
      <Inspiration />
      <FinalCta />
    </SiteLayout>
  );
}
