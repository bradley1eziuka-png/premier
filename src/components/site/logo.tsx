import { Leaf, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";
import { SEASON } from "@/config/season";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo for the active season (Christmas logo in Holiday Mode, standard
// logo in Landscaping Mode — see season.ts and site.config.json → branding.logo).
// The supplied logos have white backgrounds and dark lettering, so on dark
// surfaces they sit on a white tile ("tile"/"tab"); on light surfaces they are
// shown plain. With no logo src a text wordmark fallback is rendered.
export function Logo({
  className,
  variant = "plain",
}: {
  className?: string;
  variant?: "plain" | "tile";
}) {
  if (LOGO.src) {
    return (
      <img
        src={LOGO.src}
        alt={LOGO.alt || `${BUSINESS_NAME} logo`}
        className={cn(
          "w-auto shrink-0 object-contain",
          variant === "tile" ? "rounded-xl bg-white p-2 shadow-lg" : "",
          className,
        )}
      />
    );
  }
  const Icon = SEASON.logoVariant === "holiday" ? Lightbulb : Leaf;
  return (
    <span
      className={cn("flex items-center gap-3", className)}
      role="img"
      aria-label={BUSINESS_NAME}
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-accent text-white">
        <Icon className="size-5" />
      </span>
      <span className="font-display text-xl font-semibold text-primary">Premier</span>
    </span>
  );
}
