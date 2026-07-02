// Curated selection of real gallery photos from
// https://www.fishcoolrunnings.com/gallery/ (fetched live; full page runs
// 200+ photos across offshore/inshore/bottom/boat folders — this is a
// representative curated set). Served from /public/images/ locally — run
// `node scripts/download-images.mjs` once to pull the files down.

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'Offshore' | 'Inshore' | 'Bottom' | 'Boat';
}

const offshoreFiles = [
  '1.webp', '2.webp', '3.webp', '4.webp', '10.webp', '12.webp', '15.webp',
  '20.webp', '22.webp', '25.webp', '30.webp', '35.webp', '40.webp', '45.webp',
  '50.webp', '60.webp', '70.webp', '80.webp',
];

const offshoreNamed = [
  { file: 'sailfish-boatside.webp', alt: 'Sailfish boatside release on a Cool Runnings offshore charter' },
  { file: 'mahiandsail.webp', alt: 'Mahi and sailfish double catch offshore Fort Lauderdale' },
  { file: 'angler-big-mahi.webp', alt: 'Angler holding a big mahi mahi caught offshore' },
  { file: 'kid-captain-barracuda.webp', alt: 'Young angler with Captain Jason and a barracuda catch' },
  { file: 'wahookings.webp', alt: 'Wahoo and kingfish catch on the Cool Runnings boat' },
  { file: 'bigking.webp', alt: 'Trophy kingfish caught offshore Fort Lauderdale' },
];

export const galleryImages: GalleryImage[] = [
  ...offshoreFiles.map((file) => ({
    src: `/images/gallery/offshore/${file}`,
    alt: 'Offshore fishing charter catch and action aboard Cool Runnings',
    category: 'Offshore' as const,
  })),
  ...offshoreNamed.map((item) => ({
    src: `/images/gallery/offshore/${item.file}`,
    alt: item.alt,
    category: 'Offshore' as const,
  })),
  {
    src: '/images/gallery/inshore/51.webp',
    alt: 'Inshore fishing catch in the Fort Lauderdale Intracoastal',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/inshore/61.webp',
    alt: 'Inshore fishing catch in the Fort Lauderdale Intracoastal',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/inshore/97.webp',
    alt: 'Inshore fishing catch in the Fort Lauderdale Intracoastal',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/inshore/snook1.webp',
    alt: 'Snook caught on an inshore charter near Fort Lauderdale',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/inshore/201809242106293-image4.webp',
    alt: 'Inshore fishing charter action in the Intracoastal',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/inshore/201809242106294-image5.webp',
    alt: 'Inshore fishing charter action in the Intracoastal',
    category: 'Inshore',
  },
  {
    src: '/images/gallery/bottom/angler-mutton-snapper.webp',
    alt: 'Angler holding a mutton snapper from a bottom fishing trip',
    category: 'Bottom',
  },
  {
    src: '/images/gallery/bottom/two-anglers-grouper.webp',
    alt: 'Two anglers with a grouper catch from a bottom fishing trip',
    category: 'Bottom',
  },
  {
    src: '/images/gallery/boat/boat-11.webp',
    alt: 'The Cool Runnings 32 ft Contender at Cox Landing',
    category: 'Boat',
  },
  {
    src: '/images/gallery/boat/contender-clear-water-side.webp',
    alt: 'The Cool Runnings Contender running in clear South Florida water',
    category: 'Boat',
  },
  {
    src: '/images/gallery/boat/contender-clear-water.webp',
    alt: 'The Cool Runnings Contender running in clear South Florida water',
    category: 'Boat',
  },
  {
    src: '/images/gallery/boat/contender-ftl-marina.webp',
    alt: 'The Cool Runnings Contender docked at the Fort Lauderdale marina',
    category: 'Boat',
  },
  {
    src: '/images/gallery/boat/contender-ftl-waterway.webp',
    alt: 'The Cool Runnings Contender on the Fort Lauderdale Intracoastal Waterway',
    category: 'Boat',
  },
];
