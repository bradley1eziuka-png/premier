import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const TITLE = `Photo Credits | ${BUSINESS_NAME}`;
const DESCRIPTION =
  "Sources and licenses for the stock Christmas lighting photography on this site.";

export const Route = createFileRoute("/credits")({
  head: () => pageHead({ title: TITLE, description: DESCRIPTION, path: "/credits" }),
  component: CreditsPage,
});

// Stock Christmas lighting photos (Wikimedia Commons). These are NOT Premier
// projects. Crops and resizing were applied; no other edits.
const CREDITS = [
  {
    use: "Homepage hero",
    title: "2014 Waunakee Christmas Lights",
    author: "Corey Coyle",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:2014_Waunakee_Christmas_Lights_-_panoramio.jpg",
  },
  {
    use: "Featured service",
    title: "Victorian Estate main building, Nestlenook Farm",
    author: "EgorovaSvetlana",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Victorian_Estate_main_building_Nestlenook_Farm_Jackson_New_Hampshire_White_Mountains.jpg",
  },
  {
    use: "Inspiration: Warm White Rooflines",
    title: "Christmas lights on a townhouse along Old Dairy Court (2020-01-09)",
    author: "Famartin",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:2020-01-09_01_15_33_Christmas_lights_on_a_townhouse_along_Old_Dairy_Court_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg",
  },
  {
    use: "Inspiration: Lit Trees & Landscaping",
    title: "Whitehouse With Lights Auckland",
    author: "Ingolfson",
    license: "Public domain",
    licenseUrl: "",
    source: "https://commons.wikimedia.org/wiki/File:Whitehouse_With_Lights_Auckland.jpg",
  },
  {
    use: "Inspiration: Classic Multicolor",
    title: "Russell Avenue North, Minneapolis, Holiday Lights",
    author: "Tony Webster",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Russell_Avenue_North_-_Minneapolis_-_Holiday_Lights_(24181255831).jpg",
  },
];

function CreditsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Photo Credits"
        title="Photo Credits"
        description="The Christmas lighting photos on this site are licensed stock photography, shown for inspiration. They are not Premier Landscape & Design projects."
        showCtas={false}
      />
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
            {CREDITS.map((c) => (
              <li key={c.title} className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {c.use}
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold text-primary">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Photo by {c.author} ·{" "}
                  {c.licenseUrl ? (
                    <a
                      href={c.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-accent"
                    >
                      {c.license}
                    </a>
                  ) : (
                    c.license
                  )}{" "}
                  ·{" "}
                  <a
                    href={c.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-accent"
                  >
                    Source (Wikimedia Commons)
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Images were cropped and resized for web use. Landscaping photos in the Our Work section
            are Premier Landscape &amp; Design projects.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
