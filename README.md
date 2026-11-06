# Premier Landscape & Design — website mockup

Prospect mockup for Premier Landscape & Design (Dayton, OH). TanStack Start + React + Tailwind v4.

```bash
npm install
npm run dev          # preview
npm run build        # production build (writes sitemap only if seo.siteUrl is set)
npm run typecheck && npm run lint
npm run check        # pre-send checklist (placeholders, leaked template text)
```

## Where things live

| What                                              | File                                                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Business facts (name, phone, city, service areas) | `src/config/site.config.json`                                                       |
| **Season switch** (Holiday ↔ Landscaping)         | `src/config/season.ts` → `ACTIVE_MODE`                                              |
| Palette (red/charcoal/evergreen tokens)           | `src/styles.css`                                                                    |
| Logos                                             | `site.config.json` → `branding.logo.holiday / .standard` (files in `public/brand/`) |
| Services catalog (provisional)                    | `src/lib/services-data.ts`                                                          |
| Real project photos                               | `src/lib/work-data.ts` (+ `public/images/work/`)                                    |
| Christmas stock photos (not Premier projects)     | `public/images/christmas/` — sources/licenses in `CREDITS.md` and `/credits`        |
| Estimate form delivery                            | `site.config.json` → `form` (Formspree ID or GHL webhook)                           |

## Before launch

- Add the Christmas + standard logo files and set their paths in `branding.logo` (a text wordmark placeholder shows until then).
- Replace the stock Christmas photos with real Premier project photos (`branding.images` or the files in `public/images/christmas/`) and remove the `/credits` page + footer link if no stock remains.
- Connect the estimate form (`form.provider`); until then it is in demo mode and never reports success.
- Set `seo.siteUrl` (enables canonical URLs, sitemap) and a JPG/PNG `seo.ogImage`.
- Confirm services, email, hours and any additional service cities with the owner.
