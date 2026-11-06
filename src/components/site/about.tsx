import { COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <SectionHeading align="left" eyebrow={COPY.about.eyebrow} title={COPY.about.title} />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {COPY.about.body}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-lg pb-10 lg:max-w-none">
          <img
            src={IMAGES.workMaple}
            alt="Dark mulch bed with a Japanese maple and boulder beside a brick home"
            width={414}
            height={414}
            loading="lazy"
            className="aspect-[5/4] w-[78%] rounded-2xl border border-border object-cover shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)]"
          />
          <img
            src={IMAGES.workHydrangea}
            alt="Hydrangeas and arborvitae in a mulched bed along a brick wall"
            width={414}
            height={414}
            loading="lazy"
            className="absolute bottom-0 right-0 aspect-square w-[52%] rounded-2xl border-4 border-background object-cover shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
