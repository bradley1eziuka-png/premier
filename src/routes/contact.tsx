import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { FormSection } from "@/components/site/form-section";
import { ServiceArea } from "@/components/site/service-area";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `Contact & Request an Estimate | ${BUSINESS_NAME} | Dayton, OH`;
const DESCRIPTION =
  "Request a Christmas light installation or landscaping estimate from Premier Landscape & Design in Dayton, Ohio, or call (937) 216-6464.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/contact" }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Share a few details about your property and we'll help you take the next step."
        showCtas={false}
      />
      <FormSection id="estimate" />
      <ServiceArea />
    </SiteLayout>
  );
}
