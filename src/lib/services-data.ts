// ───────────────────────────────────────────────────────────────────────────
// Service catalog for Premier Landscape & Design.
//
// Christmas Light Installation is the featured, fully developed service.
// Every other service is PROVISIONAL (inferred from the business description)
// and deliberately described in general terms: no promises about scope,
// pricing, timing, supplies, maintenance, takedown or storage until the owner
// confirms them. Hide any service by removing its key from
// site.config.json → services.enabled.
// ───────────────────────────────────────────────────────────────────────────
import {
  Hammer,
  Leaf,
  Lightbulb,
  PencilRuler,
  Shovel,
  Snowflake,
  Sprout,
  TreePine,
  type LucideIcon,
} from "lucide-react";

import { siteConfig, type ServiceKey } from "@/config";
import { SEASON } from "@/config/season";

export interface ServiceConfig {
  key: ServiceKey;
  title: string;
  /** Value used by the estimate form's service dropdown. */
  formLabel: string;
  shortDescription: string;
  icon: LucideIcon;
  /** Path for services with their own page; landscaping services share one. */
  path: string;
  category: "holiday" | "landscaping";
}

const BASE_SERVICES: Record<ServiceKey, Omit<ServiceConfig, "key">> = {
  christmasLights: {
    title: "Christmas Light Installation",
    formLabel: "Christmas Light Installation",
    shortDescription:
      "Make the holidays unforgettable with beautiful Christmas lighting that transforms your home or business into a festive display.",
    icon: Lightbulb,
    path: "/christmas-lights",
    category: "holiday",
  },
  lawnCare: {
    title: "Lawn Care & Maintenance",
    formLabel: "Lawn Care & Maintenance",
    shortDescription: "Keep your lawn looking clean, healthy, and well cared for.",
    icon: Leaf,
    path: "/landscaping",
    category: "landscaping",
  },
  landscapeDesign: {
    title: "Landscape Design & Installation",
    formLabel: "Landscape Design",
    shortDescription:
      "Thoughtful outdoor design that brings beds, plantings, and hardscape features together.",
    icon: PencilRuler,
    path: "/landscaping",
    category: "landscaping",
  },
  mulching: {
    title: "Mulching & Garden Beds",
    formLabel: "Mulching & Garden Beds",
    shortDescription: "Fresh, clean-edged beds that give your property a finished look.",
    icon: Sprout,
    path: "/landscaping",
    category: "landscaping",
  },
  treeShrub: {
    title: "Tree & Shrub Care",
    formLabel: "Tree & Shrub Care",
    shortDescription: "Care for the trees and shrubs that frame your home.",
    icon: TreePine,
    path: "/landscaping",
    category: "landscaping",
  },
  seasonalCleanup: {
    title: "Seasonal Property Cleanup",
    formLabel: "Seasonal Cleanup",
    shortDescription: "Help your property transition cleanly from one season to the next.",
    icon: Shovel,
    path: "/landscaping",
    category: "landscaping",
  },
  snowRemoval: {
    title: "Snow Removal",
    formLabel: "Other",
    shortDescription: "Winter property services for homes and businesses.",
    icon: Snowflake,
    path: "/landscaping",
    category: "landscaping",
  },
  hardscaping: {
    title: "Hardscaping",
    formLabel: "Other",
    shortDescription: "Stone, paver, and other hard-surface features for outdoor spaces.",
    icon: Hammer,
    path: "/landscaping",
    category: "landscaping",
  },
};

export const SERVICES = Object.fromEntries(
  (Object.keys(BASE_SERVICES) as ServiceKey[]).map((key) => {
    const override = siteConfig.services.overrides[key] ?? {};
    return [key, { key, ...BASE_SERVICES[key], ...stripUndefined(override) }];
  }),
) as Record<ServiceKey, ServiceConfig>;

function stripUndefined<T extends Record<string, unknown>>(o: T) {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as Partial<T>;
}

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
export const PRIMARY_SERVICE = SERVICES[SEASON.primaryService];
export const LANDSCAPING_SERVICES = SERVICE_LIST.filter((s) => s.category === "landscaping");

// Estimate-form dropdown. Matches the requested option list; services that
// have no dedicated option (snow removal, hardscaping) fall under "Other".
export const FORM_SERVICE_OPTIONS = [
  "Christmas Light Installation",
  "Lawn Care & Maintenance",
  "Landscape Design",
  "Mulching & Garden Beds",
  "Tree & Shrub Care",
  "Seasonal Cleanup",
  "Other",
] as const;

// ?service= values accepted by the estimate form deep links.
export const FORM_SERVICE_PARAMS: Record<string, (typeof FORM_SERVICE_OPTIONS)[number]> = {
  christmas: "Christmas Light Installation",
  landscaping: "Landscape Design",
};
