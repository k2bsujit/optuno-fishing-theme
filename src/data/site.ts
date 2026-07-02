// Single source of truth for every business fact (CLAUDE.md §2).
// Import from here everywhere — never hard-code contact details in components/pages.

export const business = {
  name: 'Cool Runnings Sportfishing Charters',
  captain: 'Captain Jason Robinson',
  boat: '32 ft Contender',
  homeDock: 'Cox Landing, Fort Lauderdale',
  address: {
    street: '1784 SE 15th St',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '33316',
    full: '1784 SE 15th St, Fort Lauderdale, FL 33316',
  },
  phone: {
    display: '954-588-0578',
    href: 'tel:+19545880578',
  },
  email: 'coolrunningsfishing@gmail.com',
  hours: {
    display: 'Mon–Sun: 7:00 AM – 7:00 PM',
    days: 'Monday – Sunday',
    time: '7:00 AM – 7:00 PM',
  },
  reviews: {
    rating: 5.0,
    count: 69,
    source: 'Google',
  },
  bookingUrl:
    'https://fareharbor.com/embeds/book/coolrunningssportfishingcharters/?full-items=yes',
  geo: {
    lat: 26.1033,
    lng: -80.1235,
  },
} as const;

// All site images are served from /public/images/ locally — run
// `node scripts/download-images.mjs` once (see that file's header comment)
// to pull the real assets down from the reference site before building.
export const assets = {
  logo: '/images/logo.webp',
  ogDefault: '/images/og-default.jpg',
} as const;

export const socials = {
  facebook: 'https://www.facebook.com/fishcoolrunnings',
  instagram: 'https://www.instagram.com/fishcoolrunnings/',
  yelp: 'https://www.yelp.com/biz/cool-runnings-sport-fishing-miami',
  tripadvisor:
    'https://www.tripadvisor.in/Attraction_Review-g34438-d13156008-Reviews-Cool_Runnings_Charters-Miami_Florida.html',
} as const;

// Shared simple inline icon glyphs (not brand logo marks) — used by Footer
// and the /contact/ page so both stay in sync from one place.
export const socialIcons = [
  {
    label: 'Facebook',
    href: socials.facebook,
    icon: 'M13.5 9H16l.5-3h-3V4.5c0-.9.25-1.5 1.55-1.5H16.5V.1C16.2.06 15.2 0 14 0c-2.5 0-4.2 1.53-4.2 4.33V6H7v3h2.8v9h3.7V9Z',
  },
  {
    label: 'Instagram',
    href: socials.instagram,
    icon: 'M8 0C5.83 0 5.56.01 4.7.05 3.85.09 3.27.22 2.76.42a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 .42 3.34C.22 3.85.09 4.43.05 5.29.01 6.14 0 6.41 0 8.58c0 2.17.01 2.44.05 3.3.04.85.17 1.43.37 1.94.21.53.5.98.94 1.42.44.44.89.73 1.42.94.51.2 1.09.33 1.94.37.86.04 1.13.05 3.3.05s2.44-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37a4.9 4.9 0 0 0 1.42-.94c.44-.44.73-.89.94-1.42.2-.51.33-1.09.37-1.94.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.85-.17-1.43-.37-1.94a4.9 4.9 0 0 0-.94-1.42A4.9 4.9 0 0 0 13.24.42C12.73.22 12.15.09 11.3.05 10.44.01 10.17 0 8 0Zm0 1.44c2.14 0 2.39.01 3.23.05.78.03 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.27 1.48.04.84.05 1.09.05 3.23s-.01 2.39-.05 3.23c-.03.78-.16 1.2-.27 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.48.27-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-.78-.03-1.2-.16-1.48-.27a2.48 2.48 0 0 1-.92-.6 2.48 2.48 0 0 1-.6-.92c-.11-.28-.24-.7-.27-1.48-.04-.84-.05-1.09-.05-3.23s.01-2.39.05-3.23c.03-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.48-.27.84-.04 1.09-.05 3.23-.05Zm0 2.45a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34Zm5.23-6.94a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0Z',
  },
  {
    label: 'Yelp',
    href: socials.yelp,
    icon: 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm.7 3.1c.9 0 2.4.7 2.9 1.5.2.3 0 .6-.3.7L8.1 6.9c-.4.15-.75-.2-.6-.6L8.4 3.5c.05-.25.15-.4.3-.4ZM4.6 5.9c.15 0 .3.1.4.3l2 3.3c.2.35-.1.75-.5.65L3.2 9.2c-.3-.1-.45-.4-.3-.7.4-.9 1.3-2 1.7-2.6Zm7 2.3 3 1c.35.1.4.55.15.8-.65.65-2 1.4-2.95 1.4-.25 0-.4-.15-.4-.4l-.2-2.15c-.05-.4.35-.75.4-.65ZM7 9.9c.3-.15.65 0 .7.35l.4 3.2c.05.35-.25.65-.6.55-.95-.25-2.35-1.1-2.85-1.9-.2-.3 0-.6.3-.7L7 9.9Z',
  },
  {
    label: 'Tripadvisor',
    href: socials.tripadvisor,
    icon: 'M8 2.2C5.9.7 3.1.7 1 2.2l-1 .7h2c-.7.6-1 1.5-1 2.4a2.8 2.8 0 0 0 5.5.8L8 8l1.5-2A2.8 2.8 0 0 0 15 5.3c0-.9-.4-1.8-1-2.4h2l-1-.7c-2.1-1.5-4.9-1.5-7 0Zm-4.2 2A1.9 1.9 0 1 1 3.8 8a1.9 1.9 0 0 1 0-3.8Zm8.4 0A1.9 1.9 0 1 1 12.2 8a1.9 1.9 0 0 1 0-3.8ZM3.8 5.3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8.4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  },
] as const;

export interface NavChild {
  label: string;
  href: string;
  /** Milestone A flag — only enabled links render in Header/MobileMenu. */
  enabled: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  enabled: boolean;
  children?: NavChild[];
}

// Milestone A (core site): Home, Fishing Charters index + 3 detail pages, Contact.
// Milestone B (About, Blog, Charter Info, Service Areas + 7 area pages, Gallery,
// Reviews) has now shipped — every nav item below is enabled. The `enabled`
// flag is kept (rather than removed) so a future page can be staged as
// `false` before it's ready, without touching Header/MobileMenu.
export const nav: NavItem[] = [
  {
    label: 'About Us',
    href: '/about/',
    enabled: true,
    children: [
      { label: 'Captain Jason', href: '/about/', enabled: true },
      { label: 'Fishing Reports & Blog', href: '/blog/', enabled: true },
    ],
  },
  {
    label: 'Fishing Charters',
    href: '/services/',
    enabled: true,
    children: [
      { label: 'Offshore Fishing Charters', href: '/services/offshore-fishing/', enabled: true },
      { label: 'Inshore Fishing Charters', href: '/services/inshore-fishing/', enabled: true },
      { label: 'Bottom Fishing Charters', href: '/services/bottom-fishing/', enabled: true },
      { label: 'Charter Info', href: '/charter-info/', enabled: true },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas/',
    enabled: true,
    children: [
      { label: 'Fort Lauderdale', href: '/service-areas/fort-lauderdale/', enabled: true },
      { label: 'Pompano Beach', href: '/service-areas/pompano-beach/', enabled: true },
      { label: 'Hollywood, FL', href: '/service-areas/hollywood-fl/', enabled: true },
      { label: 'Dania Beach', href: '/service-areas/dania-beach/', enabled: true },
      { label: 'Deerfield Beach', href: '/service-areas/deerfield-beach/', enabled: true },
      { label: 'Boca Raton', href: '/service-areas/boca-raton/', enabled: true },
      { label: 'Miami', href: '/service-areas/miami/', enabled: true },
    ],
  },
  { label: 'Photos', href: '/gallery/', enabled: true },
  { label: 'Reviews', href: '/reviews/', enabled: true },
  { label: 'Contact', href: '/contact/', enabled: true },
];
