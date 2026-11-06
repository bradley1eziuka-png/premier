import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    src: IMAGES.holidayRoofline,
    alt: "A townhouse with warm white lights along the eaves and wrapped shrubs at night",
    label: "Warm White Rooflines",
  },
  {
    src: IMAGES.holidayTrees,
    alt: "A tree wrapped in white and blue lights beside a building at dusk",
    label: "Lit Trees & Landscaping",
  },
  {
    src: IMAGES.holidayMulticolor,
    alt: "A home glowing at dusk with red, green and warm multicolor holiday lighting",
    label: "Classic Multicolor",
  },
];

// Christmas lighting INSPIRATION: licensed stock photography (see /credits),
// clearly disclosed below the grid and never presented as Premier projects.
export function Inspiration({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="inspiration"
      className={`relative scroll-mt-20 bg-gradient-to-b from-secondary/70 to-background ${compact ? "py-14 sm:py-16" : "pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pt-24"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Christmas Lighting Inspiration"
          title="Ideas for Your Holiday Display"
          description="A look at the lighting styles homeowners and businesses often have in mind."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:gap-7">
          {ITEMS.map((item) => (
            <figure
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-primary shadow-[0_20px_40px_-26px_rgba(23,33,42,0.6)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4 text-white">
                <span className="h-px w-6 bg-gold" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Inspiration images are licensed stock photography, not Premier projects.{" "}
          <a href="/credits" className="underline underline-offset-2 hover:text-accent">
            Photo credits
          </a>
        </p>
      </div>
    </section>
  );
}
