import { Handshake, Home, Ruler, Sprout } from "lucide-react";

import { SectionHeading } from "./section-heading";

// Grounded in Premier's stated commitments only: workmanship, customer
// service and outdoor property care. No stats, awards, reviews or guarantees.
const REASONS = [
  {
    icon: Ruler,
    title: "Attention to Detail",
    body: "From a clean roofline to crisp bed edges, we care about how the finished work looks up close and from the curb.",
  },
  {
    icon: Handshake,
    title: "Clear Communication",
    body: "Tell us what you have in mind and we'll talk it through plainly, with no pressure and no guesswork.",
  },
  {
    icon: Sprout,
    title: "Outdoor Care, All Seasons",
    body: "Landscaping and property services through the year, plus Christmas lighting when the holidays arrive.",
  },
  {
    icon: Home,
    title: "Homes & Businesses",
    body: "Residential and commercial projects across Dayton and the surrounding areas.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_0%,rgba(36,77,59,0.45),transparent),radial-gradient(50%_60%_at_5%_100%,rgba(122,10,36,0.4),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          light
          eyebrow="Why Choose Premier"
          title="Outdoor Care You Can Count On"
          description="Premier Landscape & Design is committed to quality workmanship, good customer service, and caring for your outdoor property."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_20px_-8px_rgba(167,29,62,0.9)]">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
