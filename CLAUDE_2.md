# CLAUDE.md — Cool Runnings Sportfishing Charters (Astro Rebuild)

This file is the source of truth for this project. Read it fully before writing any
code. If something here conflicts with a later instruction, ask before proceeding.

---

## 1. What we're building

A faithful rebuild of the **Cool Runnings Sportfishing Charters** website
(Fort Lauderdale, FL fishing charter business) in **Astro + Tailwind CSS**, deployed
to **Netlify**.

- **Reference site (content + design authority):** https://www.fishcoolrunnings.com/
- **Goal:** Same navigation, same page structure, same content, same industry feel.
  This is a rebuild, not a redesign. When in doubt, match the reference site.
- **Non-goal:** Do NOT invent a new brand, new business name, or new marketing angle.

The finished site must read as **built by a human web studio**, not AI-generated.
See §7 for exactly what that means.

---

## 2. The business (facts — use these verbatim, never invent)

| Field | Value |
|---|---|
| Business name | Cool Runnings Sportfishing Charters |
| Captain | Captain Jason Robinson |
| Boat | 32 ft Contender |
| Home dock | Cox Landing, Fort Lauderdale |
| Address | 1784 SE 15th St, Fort Lauderdale, FL 33316 |
| Phone | 954-588-0578 (link as `tel:+19545880578`) |
| Email | coolrunningsfishing@gmail.com |
| Hours | Mon–Sun, 7:00 AM – 7:00 PM |
| Reviews | 5.0★ average across 69 Google reviews |
| Booking system | FareHarbor embed: `https://fareharbor.com/embeds/book/coolrunningssportfishingcharters/?full-items=yes` |
| Logo | https://www.fishcoolrunnings.com/images/logo.webp |

**Social links (footer):**
- Facebook: https://www.facebook.com/fishcoolrunnings
- Instagram: https://www.instagram.com/fishcoolrunnings/
- Yelp: https://www.yelp.com/biz/cool-runnings-sport-fishing-miami
- TripAdvisor: https://www.tripadvisor.in/Attraction_Review-g34438-d13156008-Reviews-Cool_Runnings_Charters-Miami_Florida.html

Any phone number, address, or business name that appears on the site MUST match the
table above. Never place fake or placeholder contact details.

---

## 3. Site map (build every page — URLs must match the reference exactly)

Primary nav:
- `/` — Home
- **About**
  - `/about/` — About Us / Captain Jason
  - `/blog/` — Fishing Reports & Blog
- **Fishing Charters** (`/services/` is the index)
  - `/services/offshore-fishing/`
  - `/services/inshore-fishing/`
  - `/services/bottom-fishing/`
  - `/charter-info/`
- **Service Areas** (`/service-areas/` is the index)
  - `/service-areas/fort-lauderdale/`
  - `/service-areas/pompano-beach/`
  - `/service-areas/hollywood-fl/`
  - `/service-areas/dania-beach/`
  - `/service-areas/deerfield-beach/`
  - `/service-areas/boca-raton/`
  - `/service-areas/miami/`
- `/gallery/` — Photos
- `/reviews/` — Reviews
- `/contact/` — Contact

The **Fishing Charters** and **Service Areas** items are **mega-dropdowns** in the
desktop header and **accordions** in the mobile menu. Match this behaviour.

Trailing slashes matter — configure Astro with `trailingSlash: 'always'` so URLs
match the reference site 1:1 (important for SEO parity).

---

## 4. Content rules

1. **Content comes from the reference site.** For each page, read the corresponding
   live URL and reproduce its copy, headings, section order, and structure. Adapt
   wording only to fix obvious typos or to fit a rebuilt component — do not rewrite
   the marketing voice.
2. **Reviews are real, named Google reviews.** Reproduce them as-is from the
   reference site (Michael Goldberg, Mila G, Tony Bragg, Joe, Xianchi Tang,
   Rebeca Chan, etc.). Do not fabricate new testimonials or invent names.
3. **FAQ, service descriptions, captain bio, service-area copy** — pull from the live
   pages. Keep the plain, confident, local-guide tone the reference uses.
4. If a page on the reference site has content you cannot access, STOP and ask the
   user rather than inventing filler.
5. All CTAs point to the real destinations: "Book A Charter" → the FareHarbor embed
   URL; "Call" → `tel:+19545880578`; contact form → `/contact/`.

---

## 5. Images

Priority order for every image slot:

1. **Reuse the real image from the reference site.** Same business, same assets.
   Download from `https://www.fishcoolrunnings.com/images/...` (hero, gallery,
   captain, sponsors, press badges, logo) and store locally under `/public/images/`
   or `/src/assets/`. Keep the same subject in the same slot.
2. **AI-generated replacement** — only if a specific image can't be retrieved AND an
   AI image would genuinely fit the scene (e.g. an offshore fishing action shot).
   It must match the nautical/sportfishing subject and look like real photography,
   not illustration.
3. **Placeholder** — if neither works, use `https://placehold.co/` sized to the slot
   (e.g. `https://placehold.co/1200x630?text=Offshore+Fishing`) and leave a
   `TODO: replace image` comment so the user can swap it later.

- **Logo:** always use `https://www.fishcoolrunnings.com/images/logo.webp`
  (download to `/public/images/logo.webp`).
- Serve images as WebP where possible, use Astro's `<Image>` / `astro:assets` for
  local images, set explicit `width`/`height` and meaningful `alt` text (the alt
  text on the reference site is descriptive and SEO-aware — match that quality).
- Never leave broken image links. Every `<img>` must resolve.

---

## 6. Tech stack & project conventions

- **Framework:** Astro (latest). Static output (`output: 'static'`).
- **Styling:** Tailwind CSS via the official Astro Tailwind integration. Utility-first;
  extract repeated patterns into `.astro` components, not into a soup of `@apply`.
- **Deployment target:** Netlify (static). Include a `netlify.toml` if helpful.
- **Language:** TypeScript for any component logic; keep JS minimal.
- **No heavy client JS frameworks.** Islands only where genuinely needed
  (mobile menu toggle, mega-dropdown, gallery lightbox, FAQ accordion). Prefer
  vanilla JS / small Astro scripts over React unless there's a real reason.

**Suggested structure:**
```
src/
  components/
    Header.astro          # desktop nav + mega-dropdowns
    MobileMenu.astro       # accordion mobile nav
    Footer.astro
    Hero.astro
    CharterCard.astro
    ReviewCard.astro
    FaqAccordion.astro
    BookingCta.astro       # reusable "Book A Charter" band
    ServiceAreaLayout.astro
  layouts/
    BaseLayout.astro       # <head>, meta, header, footer, slots
  pages/
    index.astro
    about.astro
    blog.astro
    charter-info.astro
    gallery.astro
    reviews.astro
    contact.astro
    services/
      index.astro
      offshore-fishing.astro
      inshore-fishing.astro
      bottom-fishing.astro
    service-areas/
      index.astro
      [area].astro         # or one file per area if content differs enough
  data/
    site.ts                # business facts from §2 (single source of truth)
    services.ts
    serviceAreas.ts
    reviews.ts
    faqs.ts
public/
  images/
  favicon...
```

- Put every business fact from §2 in `src/data/site.ts` and import it. Phone,
  address, email, booking URL appear in ONE place only.
- The 7 service-area pages share a layout; drive them from `serviceAreas.ts` data
  so they're consistent and easy to edit.

---

## 7. "Human-made, not AI-generated" — what this means here

The reference site is already a polished, human-designed site. Matching it faithfully
is the main way to hit this bar. On top of that, actively avoid the current AI tells:

- **Match the reference's real design language** (colours, spacing, section rhythm,
  the ocean/deep-navy palette, the confident local voice). Don't substitute a generic
  "AI startup" look: no cream-and-terracotta serif combo, no near-black page with a
  single acid-green accent, no broadsheet hairline-rule layout.
- **Real photography over decoration.** Use the actual boat/catch/captain photos.
  A fishing charter sells the experience — lead with characteristic imagery, not a
  big-number-with-gradient-accent hero.
- **No filler copy.** Every line should say something specific (a species, a location,
  a real detail). Don't add invented awards, stats, or "trusted by 10,000+" banners.
- **Restraint with motion.** Subtle scroll reveals and hover states are fine.
  Avoid stacked entrance animations on everything — over-animation reads as AI.
- **Consistent, specific microcopy.** Buttons name the action ("Book A Charter",
  "See the Trip", "Read the Captain's Story"), and stay consistent across the site.
- **Structural devices must mean something.** Don't add 01 / 02 / 03 numbered markers
  unless the content is genuinely a sequence.
- **Details that signal a real build:** proper favicon, real OG/meta tags per page,
  a working (mock is fine) contact form, correct `tel:` and `mailto:` links,
  a real sitemap, and no lorem ipsum anywhere.

---

## 8. SEO & head (match reference parity)

- Per-page `<title>` and `meta description` mirroring the reference (e.g. home:
  "Fort Lauderdale Fishing Charters | Cool Runnings Sportfishing").
- Open Graph + Twitter card tags per page; default OG image at
  `/images/og-default.jpg`.
- Geo meta for the local business (Fort Lauderdale: `26.1033;-80.1235`).
- Add `LocalBusiness` / `Organization` JSON-LD schema with the §2 details.
- Generate `sitemap.xml` (`@astrojs/sitemap`) and a sensible `robots.txt`.
- Canonical URLs on every page. `trailingSlash: 'always'`.
- Semantic HTML: one `<h1>` per page, logical heading order, `nav`/`main`/`footer`
  landmarks, alt text on all images.

---

## 9. Quality floor (non-negotiable)

- Fully responsive, mobile-first. Test the mega-dropdown → mobile accordion behaviour.
- Visible keyboard focus states; nav and menus operable by keyboard.
- Respect `prefers-reduced-motion`.
- Lighthouse: aim 90+ on Performance, Accessibility, Best Practices, SEO.
- No console errors. No broken links or images. All internal links use trailing
  slashes and resolve.
- Run a build (`astro build`) and fix any errors before calling a page done.

---

## 10. Working process — CORE PAGES FIRST

We are shipping a **deployable core site first**, then expanding. Check in with the
user between phases. Do not build ahead of the current phase.

### Milestone A — Core site (build + deploy this first)

Pages in scope for Milestone A:
- `/` — Home
- `/services/` — Fishing Charters index
- `/services/offshore-fishing/`
- `/services/inshore-fishing/`
- `/services/bottom-fishing/`
- `/contact/`

Phases:
1. **Scaffold** — Astro project, Tailwind, `BaseLayout`, `site.ts` data, `Header`,
   `MobileMenu`, `Footer`, reusable `BookingCta`. Extract the real palette/type from
   the reference first (see prompt). Shell must render with no errors.
2. **Home page** — full build matching `/`. Review with user.
3. **Service pages** — `/services/` index + offshore / inshore / bottom, driven by
   `services.ts` data so the three detail pages stay consistent.
4. **Contact** — `/contact/` with a working (mock-submit is fine) form, real address,
   phone, email, hours, and a map/embed if the reference has one.
5. **Core SEO + polish** — per-page meta/OG/canonical, JSON-LD LocalBusiness, sitemap
   (core routes), accessibility + Lighthouse pass, `astro build` clean. Prep Netlify.

**Nav during Milestone A:** build the full `Header`/mega-dropdown component, but drive
which links render from a flag in `site.ts` (e.g. `nav.serviceAreas.enabled = false`).
Show ONLY links whose pages exist in this milestone, so there are zero broken/404
links in the deployed core. Milestone B just flips the flags on.

### Milestone B — Remaining pages (after core is deployed & approved)

- `/about/`, `/blog/`, `/charter-info/`
- `/service-areas/` index + the 7 area pages (data-driven from `serviceAreas.ts`)
- `/gallery/`, `/reviews/`
- Enable the full nav (mega-dropdowns for Fishing Charters + Service Areas).
- Full-site SEO parity + final Lighthouse pass.

Show your plan and confirm the palette/typography match against the reference before
building large sections. Prefer asking over assuming — especially for anything
involving contact details, real reviews, or images you can't retrieve.
