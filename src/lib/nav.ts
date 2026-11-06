// Primary navigation + shared CTA targets. Every "Get an Estimate" link in the
// site points at ESTIMATE_HREF so the form always opens pre-selected to the
// active season's primary service (see estimate-form.tsx).
import { SEASON } from "@/config/season";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Christmas Lights", href: "/christmas-lights" },
  { label: "Landscaping", href: "/landscaping" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ESTIMATE_HREF = `/?service=${SEASON.estimateServiceParam}#estimate`;
export const CHRISTMAS_ESTIMATE_HREF = "/?service=christmas#estimate";
export const LANDSCAPING_ESTIMATE_HREF = "/?service=landscaping#estimate";
