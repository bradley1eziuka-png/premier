// Optional brand color override. With no colors set in site.config.json this
// returns "" and the palette from styles.css (including the active season's
// [data-season] palette) is untouched.
import { siteConfig } from "@/config";

export function brandColorCss() {
  const { primary, accent } = siteConfig.branding.colors;
  const rules: string[] = [];
  if (primary) {
    rules.push(
      `--primary:${primary}`,
      `--foreground:${primary}`,
      `--card-foreground:${primary}`,
      `--popover-foreground:${primary}`,
      `--secondary-foreground:${primary}`,
      `--ink:${primary}`,
      `--ink-soft:color-mix(in oklab, ${primary} 86%, white)`,
    );
  }
  if (accent) {
    rules.push(`--accent:${accent}`, `--ring:${accent}`);
  }
  return rules.length ? `:root,:root[data-season]{${rules.join(";")}}` : "";
}
