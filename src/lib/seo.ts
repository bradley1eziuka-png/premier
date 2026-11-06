// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, driven by site.config.json and
// the active season (src/config/season.ts).
import { DEFAULT_CONTENT } from "@/config/defaults";
import { SEASON } from "@/config/season";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

// Social platforms don't render SVG previews, so the SVG files
// are never advertised as the share image. Set seo.ogImage to a
// real JPG/PNG/WebP when one exists.
function shareImage(image?: string) {
  const candidate = seo.ogImage || image || IMAGES[SEASON.heroImage];
  return /\.svg$/i.test(candidate) ? "" : absolute(candidate);
}

export const HOME_TITLE = seo.title || SEASON.metaTitle;
export const HOME_DESCRIPTION =
  seo.description || SEASON.metaDescription || DEFAULT_CONTENT.seo.description;

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const ogImage = shareImage(image);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}

// schema.org LocalBusiness. Only fields the business confirmed are emitted:
// name, phone, city/state and the Dayton service area. No ratings, hours,
// price range, or street address are invented.
export function localBusinessJsonLd() {
  const a = business.address;
  const hasAddress = Boolean(a.street || a.city || a.state || a.zip);
  const sameAs = Object.values(business.social).filter(Boolean);
  const image = shareImage();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description: HOME_DESCRIPTION,
    telephone: BUSINESS_PHONE,
    ...(image && { image }),
    ...(SITE_URL && { url: SITE_URL }),
    ...(business.email && { email: business.email }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(a.street && { streetAddress: a.street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.serviceAreas.length > 0 && {
      areaServed: business.serviceAreas.map((name) => ({ "@type": "Place", name })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}
