// Blog post index content, sourced from https://www.fishcoolrunnings.com/blog/
// (fetched live). CLAUDE.md's site map does not include individual /blog/[slug]/
// detail pages in scope for this rebuild, so posts render as informational
// cards only — no links to nonexistent detail pages (keeps the "no broken
// links" guardrail intact). If detail pages are added later, wire `href` here.

export interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Can You Catch Big Game Fish in Miami Year Round?',
    category: 'Seasonal Insights',
    readTime: '8 min read',
    date: 'June 23, 2026',
    excerpt:
      'A month-by-month look at what bites off Miami, from winter sailfish to summer marlin, and how the Gulf Stream keeps the calendar full all year.',
    image: '/images/gallery/offshore/img-53172.webp',
    imageAlt: 'Sailfish jumping behind a sportfishing boat off Miami with Government Cut in the background',
  },
  {
    title: 'Is Offshore Fishing in Fort Lauderdale Worth Booking for Your Next Trip?',
    category: 'Charter Guides',
    readTime: '8 min read',
    date: 'June 9, 2026',
    excerpt:
      'A straight answer on whether offshore fishing out of Fort Lauderdale earns the booking, from a captain who runs the trips year-round.',
    image: '/images/gallery/offshore/30.webp',
    imageAlt: 'Offshore sportfishing boat trolling blue water off Fort Lauderdale with rods set',
  },
  {
    title: 'Private Family Fishing Charters in Fort Lauderdale & Miami',
    category: 'Charter Guides',
    readTime: '6 min read',
    date: 'March 13, 2026',
    excerpt:
      'Private charters built for families. Patient instruction, calmer trips for younger kids, and the kind of shared experience that becomes a tradition.',
    image: '/images/gallery/inshore/61.webp',
    imageAlt: 'Family of four reeling in a fish on a private Fort Lauderdale fishing charter',
  },
  {
    title: 'Why Anglers Book Fishing Charters in Fort Lauderdale for Nonstop Action',
    category: 'Charter Guides',
    readTime: '5 min read',
    date: 'February 27, 2026',
    excerpt:
      'The Gulf Stream runs close, the captains know every reef and wreck, and the bite stays year-round — why Fort Lauderdale consistently outproduces other Florida destinations.',
    image: '/images/gallery/offshore/48409101-535112720307408-4005294163024150528-n.webp',
    imageAlt: 'Fort Lauderdale fishing charter heading offshore toward the Gulf Stream at sunrise',
  },
  {
    title: 'What to Pack for a Fort Lauderdale or Miami Fishing Charter',
    category: 'Charter Guides',
    readTime: '5 min read',
    date: 'February 13, 2026',
    excerpt:
      "Sun protection, non-slip shoes, hydration, cash for tipping, and a few small things that separate a great charter day from a miserable one.",
    image: '/images/hero-charter-info.webp',
    imageAlt: 'Cooler, sun shirt, hat, and sunglasses packed for a Fort Lauderdale fishing charter',
  },
  {
    title: 'Choosing Between Inshore and Offshore Charters in Fort Lauderdale',
    category: 'Charter Guides',
    readTime: '6 min read',
    date: 'January 30, 2026',
    excerpt:
      'Inshore means calmer water, lighter tackle, snook and tarpon. Offshore means open ocean, heavy gear, sailfish and mahi. How to pick the right trip.',
    image: '/images/gallery/inshore/97.webp',
    imageAlt: 'Split view of inshore mangrove flats and offshore blue water off Fort Lauderdale',
  },
  {
    title: "When's the Best Time to Go Offshore Fishing in Miami",
    category: 'Seasonal Insights',
    readTime: '6 min read',
    date: 'January 16, 2026',
    excerpt:
      "Miami offshore fishing isn't about luck — it's about the calendar. Sailfish in winter, mahi in spring, blackfin tuna in fall.",
    image: '/images/gallery/offshore/201809131137054-image4.webp',
    imageAlt: 'Offshore sportfishing boat on the Gulf Stream off Miami at sunrise',
  },
  {
    title: 'What a Deep Sea Fishing Trip in Fort Lauderdale Is Like',
    category: 'Charter Guides',
    readTime: '5 min read',
    date: 'January 2, 2026',
    excerpt:
      "Deep sea fishing off Fort Lauderdale isn't a lazy afternoon. Early mornings, Gulf Stream blue water, and the kind of adrenaline that sticks.",
    image: '/images/gallery/offshore/1.webp',
    imageAlt: 'Angler fighting a fish on a Fort Lauderdale deep sea fishing charter in the Gulf Stream',
  },
  {
    title: 'Red Hot Summer Fishing in Fort Lauderdale & South Florida',
    category: 'Fishing Reports',
    readTime: '4 min read',
    date: 'August 3, 2019',
    excerpt:
      'Summer kicked off in live-bait mode flying kites on the edge: blackfin tunas, kingfish, bonita, and even summer sailfish, before mahi season pushed offshore.',
    image: '/images/gallery/offshore/2.webp',
    imageAlt: 'Captain Jason holding a mahi mahi caught on a Fort Lauderdale summer fishing charter',
  },
  {
    title: 'Spring Fishing Report: Sailfish, Tunas & Kingfish off Fort Lauderdale',
    category: 'Fishing Reports',
    readTime: '4 min read',
    date: 'May 2, 2019',
    excerpt:
      'March and April brought double-digit sailfish release days, 30+ lb blackfin tunas, and a 45 lb kingfish on light tackle.',
    image: '/images/gallery/offshore/3.webp',
    imageAlt: 'Sailfish jumping next to the Cool Runnings boat off Fort Lauderdale in spring',
  },
  {
    title: 'Fall Fishing Tactics for Fort Lauderdale & South Florida',
    category: 'Fishing Reports',
    readTime: '6 min read',
    date: 'September 24, 2018',
    excerpt:
      'Fall fishing in South Florida is a challenge. With the right plan, it can be your most productive season — offshore tuna, deep dropping, reef snapper, and the mullet run.',
    image: '/images/gallery/offshore/4.webp',
    imageAlt: 'Captain Jason with a fall blackfin tuna caught offshore of Fort Lauderdale',
  },
];
