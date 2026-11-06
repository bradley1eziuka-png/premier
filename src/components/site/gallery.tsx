import { WORK } from "@/lib/work-data";
import { SectionHeading } from "./section-heading";

// Real, finished landscaping work only. Source photos are 414px square, so the
// grid keeps them at small/medium sizes (never full-bleed).
export function Gallery({ id = "our-work", limit }: { id?: string; limit?: number }) {
  const items = limit ? WORK.slice(0, limit) : WORK;
  return (
    <section id={id} className="scroll-mt-20 bg-secondary/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="Our Work Speaks for Itself"
          description="Finished landscaping projects from Premier Landscape & Design: clean beds, fresh mulch, and well-kept properties."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-14px_rgba(0,0,0,0.25)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={414}
                height={414}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:opacity-100 max-sm:from-primary/75" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:opacity-100 sm:p-4">
                <span className="hidden h-px w-5 bg-red-light sm:block" />
                <span className="text-[0.72rem] font-semibold leading-tight tracking-wide sm:text-sm">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
