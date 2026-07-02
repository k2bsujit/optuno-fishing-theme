// Homepage-specific image paths — served from /public/images/ locally.
// Run `node scripts/download-images.mjs` once to pull the real assets down
// from the reference site before building (see that file's header comment).

const BASE = '/images';

export const hero = {
  src: `${BASE}/gallery/boat/image121.webp`,
  alt: 'Cool Runnings 32 ft Contender heading out past the Hilton with a superyacht behind, Fort Lauderdale Intracoastal',
};

export const captain = {
  src: `${BASE}/staff/captain-jason-robinson.webp`,
  alt: 'Captain Jason Robinson, owner of Cool Runnings Sportfishing Charters in Fort Lauderdale',
};

export const press = [
  {
    src: `${BASE}/press/texas-insider-fishing-report.webp`,
    alt: 'Texas Insider Fishing Report featuring Captain Jason Robinson',
  },
  {
    src: `${BASE}/press/florida-insider-fishing-report.webp`,
    alt: 'Florida Insider Fishing Report featuring Captain Jason Robinson',
  },
];

export const sponsors = [
  { src: `${BASE}/sponsors/bass-pro-shops.webp`, alt: 'Bass Pro Shops' },
  { src: `${BASE}/sponsors/chaos-rods.webp`, alt: 'Chaos Rods' },
  { src: `${BASE}/sponsors/cmor-mapping.webp`, alt: 'CMOR Mapping' },
  { src: `${BASE}/sponsors/rr-tackle.webp`, alt: 'R&R Tackle' },
  { src: `${BASE}/sponsors/scanstrut.svg`, alt: 'Scanstrut' },
  { src: `${BASE}/sponsors/tigress.webp`, alt: 'Tigress Outriggers & Gear' },
];

export const gallery = [
  { src: `${BASE}/gallery/offshore/mahiandsail.webp`, alt: 'Cool Runnings fishing charter action shot — mahi and sailfish catch' },
  { src: `${BASE}/gallery/offshore/sailrelease.webp`, alt: 'Cool Runnings fishing charter action shot — sailfish release' },
  { src: `${BASE}/gallery/offshore/kings.webp`, alt: 'Cool Runnings fishing charter action shot — kingfish catch' },
  { src: `${BASE}/gallery/inshore/snook1.webp`, alt: 'Cool Runnings fishing charter action shot — inshore snook catch' },
  { src: `${BASE}/gallery/offshore/bottom-fishing.webp`, alt: 'Cool Runnings fishing charter action shot — bottom fishing catch' },
  { src: `${BASE}/gallery/offshore/wahookings.webp`, alt: 'Cool Runnings fishing charter action shot — wahoo and kingfish catch' },
];
