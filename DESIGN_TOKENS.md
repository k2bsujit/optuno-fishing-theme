# Design tokens — Cool Runnings rebuild

Source: visual read of https://www.fishcoolrunnings.com/ (homepage, offshore-fishing,
contact). **Caveat:** I could not open a live DevTools/computed-styles pass this
session (browser inspection tool was unreachable), so these hex values are a
best-effort match to the reference's stated deep navy / ocean / teal direction,
not measured pixel values. Treat as a first pass — flag any visible mismatch
against the live site during Phase 1 review and I'll correct the Tailwind config.

## Color

| Token | Hex | Use |
|---|---|---|
| `navy-950` | `#081826` | Footer background |
| `navy-900` | `#0B2036` | Header background (scrolled), mobile menu panel |
| `navy-800` | `#123048` | Header background (top of page), dark section bands |
| `ocean-600` | `#0F5C8C` | Primary buttons, links, "Book A Charter" CTA |
| `ocean-500` | `#1670A8` | Button/link hover state |
| `teal-500` | `#1FA9A0` | Accent — stat badges, active nav underline, focus rings |
| `teal-400` | `#38BDB2` | Lighter accent hover |
| `sand-100` | `#F5F2EA` | Light neutral section background (alternating sections) |
| `sand-50` | `#FBFAF6` | Card backgrounds on sand sections |
| white / navy-950 | — | Body text on light / dark backgrounds |

## Typography

- **Display (headings):** Montserrat — bold (700) for H1/H2, semibold (600) for H3.
  Matches the confident, geometric sans the reference uses for headline treatment.
- **Body:** Inter — regular (400) body copy, medium (500) for buttons/labels.
- Both loaded from Google Fonts in `BaseLayout.astro` (self-hosting can follow later
  as a performance pass).

## Spacing scale

- Base: Tailwind default 4px scale.
- Section rhythm: `section` = 5rem (80px) vertical padding desktop,
  `section-sm` = 3rem (48px) mobile — matches the reference's generous
  breathing room between homepage sections (hero, charters, captain, reviews, FAQ).
- Container: max-w-7xl, px-4 mobile / px-6 tablet / px-8 desktop.

## Header / section rhythm notes

- Sticky header, top announcement bar ("Half-Day to Full-Day Charters · Book Now!")
  above the main nav row.
- Logo left, primary nav center/right, phone number + "Book A Charter" button
  right-aligned on desktop.
- Mega-dropdowns for "Fishing Charters" and "Service Areas" open below the nav row
  as a full-width or column panel; mobile collapses each into an accordion.
