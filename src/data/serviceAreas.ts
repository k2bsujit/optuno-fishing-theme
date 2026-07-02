// Service area content for all 7 /service-areas/[slug]/ pages, sourced from
// https://www.fishcoolrunnings.com/service-areas/[slug]/ (fetched live for
// every area). Driven entirely through ServiceAreaLayout.astro so each page
// file just picks its entry by slug — same pattern as src/data/services.ts.

export interface Neighborhood {
  title: string;
  body: string;
}

export interface ServiceArea {
  slug: string;
  href: string;
  name: string; // display name, e.g. "Hollywood, FL"
  county: string; // "Broward County, Florida"
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  lede: string;
  /** Optional image dropped after the first intro paragraph — only some area pages have one. */
  midImage?: { src: string; alt: string };
  intro: string[];
  fastFacts?: {
    county: string;
    zipCodes?: string;
    homeDock: string;
  };
  neighborhoods: Neighborhood[];
  uniqueHeading: string;
  uniqueParagraphs: string[];
  localImage: { src: string; alt: string };
  landmarks: string[];
  /** Slugs of nearby areas cross-linked in "We Also Pick Up From". */
  nearby: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'fort-lauderdale',
    href: '/service-areas/fort-lauderdale/',
    name: 'Fort Lauderdale',
    county: 'Broward County, Florida',
    metaTitle: 'Fishing Charters from 15th Street & Bahia Mar | Fort Lauderdale Marinas',
    metaDescription:
      'Fort Lauderdale fishing charters out of 15th Street Fisheries and the Bahia Mar area. Sailfish, mahi, snapper. Captain Jason, 10+ years local.',
    heroImage: '/images/gallery/offshore/12-easy-resize.com.webp',
    heroImageAlt: 'Fort Lauderdale fishing charter departing the Cool Runnings dock',
    h1: 'Fort Lauderdale Fishing Charters',
    lede: 'Private charter pickup for Fort Lauderdale guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Fort Lauderdale fishing charters out of the Cox Landing put you on the Gulf Stream in under twenty minutes. Captain Jason runs the 32 ft Contender out of the same docks the local tournament boats use. Same-day options include Fort Lauderdale offshore fishing over the edge or inshore fishing up the Intracoastal toward Whiskey Creek. Pickup is steps from Bahia Mar Yachting Center and the 17th Street Causeway, so most groups walk to the boat from their hotel.',
      'The 15th Street Fisheries dock sits at the south end of the Lauderdale Marina basin, a short idle from Port Everglades and the New River cut. From the slip, a half-day offshore run hits 250 ft of water in about fifteen minutes and the deeper sailfish ledges past 600 ft inside half an hour. That short run is the single biggest reason Fort Lauderdale fishing trips out-fish charters running from anywhere else on the southeast coast. More time with lines wet, less time burning fuel.',
      'The Gulf Stream pushes within five miles of the Fort Lauderdale beach, closer than almost anywhere else in Florida. That ribbon of warm, fast-moving blue water is what brings sailfish, mahi, blackfin tuna, wahoo, and kingfish within reach of a half-day trip. Captain Jason has been working these waters for over a decade and times the morning departure around the tide push out of Port Everglades, when bait stacks at the inlet and predators follow it offshore. Groups looking to keep dinner can switch to bottom fishing over the local reefs and wrecks at 80 to 150 ft, where snapper and grouper hold up year-round.',
      'Inshore trips run the opposite direction. The Intracoastal Waterway between Las Olas Boulevard and the Stranahan River fishes well for snook around dock lights, tarpon during the spring run, and jacks any month of the year. The Rhodan trolling motor lets the boat slip up on mangrove edges and seawalls without spooking fish.',
      'North of the city, Hillsboro Inlet is the other deep cut. It comes into play when wind pushes seas hard against Port Everglades and the bite shifts. Anglers staying anywhere from Las Olas Beach down to John U. Lloyd Beach can be at the dock in under fifteen minutes.',
      'Trips run year-round with no slow season, only different target species. Captain Jason fishes the same water the local tournament fleet fishes, including teams competing in events out of Bahia Mar and Pier 66. Most groups stay closer to Pompano Beach or Dania Beach for the boat ride, then catch the morning bite a few miles offshore.',
    ],
    fastFacts: { county: 'Broward, FL', zipCodes: '33301, 33304, 33308, 33312', homeDock: 'Cox Landing' },
    neighborhoods: [
      { title: 'Las Olas & Downtown Fort Lauderdale', body: 'Hotels along Las Olas Boulevard, the Riverwalk, and the New River put you a five-minute drive from the 15th Street Fisheries dock. This is the easiest pickup for guests staying at the W, Pier 66, or the Riverside — a common pickup point for downtown bachelor parties and corporate groups booking half-day offshore trips.' },
      { title: 'Bahia Mar & The Beach Strip', body: 'The stretch from Bahia Mar south to Sunrise Boulevard and north to A1A is the densest cluster of fishing-friendly hotels in the city. Walk the bridge over the Intracoastal and you are at the boat. Most weekend offshore trips get booked by beach-strip guests who watched the charter fleet leave at sunrise.' },
      { title: 'Coral Ridge & East Lauderdale', body: 'The Coral Ridge canals and the deeper basins north of Sunrise hold snook, tarpon, and jacks year-round. This neighborhood is fifteen minutes north of the dock and a common pickup point for repeat clients booking dawn inshore trips along the seawalls and dock lights.' },
      { title: 'Rio Vista & 17th Street', body: 'Rio Vista runs along the south side of the New River, directly across from the marina — the closest residential neighborhood to the dock. Groups here often run combo half-day trips, starting offshore for sailfish and finishing on the reef for snapper.' },
    ],
    uniqueHeading: 'What Makes Fort Lauderdale Fishing Unique',
    uniqueParagraphs: [
      'Fort Lauderdale fishing has one big advantage over almost every other Florida port: the Gulf Stream sits about five miles offshore here, not twenty or forty. That means the same fish a boat in Tampa needs a full day to reach, we hit in twenty minutes. The downside is the boat traffic.',
      'Port Everglades is one of the busiest inlets in the country between cruise ships, container vessels, and the charter fleet. The cut gets sloppy when an outgoing tide meets an east wind. Captain Jason runs the inlet on the right tide window every trip and reroutes north to Hillsboro Inlet when sea state demands it.',
      'The water clarity along the Fort Lauderdale beach is a real benefit for sight casting and live-bait kite fishing for sailfish in the winter. But it also means picky fish — we run light leader and quality bait, hand-selected at the dock that morning rather than what is left in the freezer.',
      'The reef structure between 80 and 150 ft holds snapper and grouper year-round, but the productive numbers are not the ones on public charts. Ten years of running these reefs has built a list of spots that out-produce the public marks by a wide margin.',
    ],
    localImage: { src: '/images/areas/fort-lauderdale-1.webp', alt: 'Local fishing scene near Fort Lauderdale' },
    landmarks: ['15th Street Fisheries', 'Bahia Mar Yachting Center', 'Lauderdale Marina', 'Port Everglades', 'Las Olas Boulevard', '17th Street Causeway', 'Hillsboro Inlet', 'John U. Lloyd Beach'],
    nearby: ['pompano-beach', 'dania-beach', 'hollywood-fl', 'deerfield-beach'],
  },
  {
    slug: 'pompano-beach',
    href: '/service-areas/pompano-beach/',
    name: 'Pompano Beach',
    county: 'Broward County, Florida',
    metaTitle: 'Pompano Beach Fishing Charters | Hillsboro Inlet & Pompano Pier',
    metaDescription:
      'Pompano Beach fishing charters running offshore through Hillsboro Inlet. Sailfish, kingfish, snapper. Pickup near Pompano Pier and Sands Harbor.',
    heroImage: '/images/gallery/offshore/2-easy-resize.com3.webp',
    heroImageAlt: 'Pompano Beach fishing charter departing the Cool Runnings dock',
    h1: 'Pompano Beach Fishing Charters',
    lede: 'Private charter pickup for Pompano Beach guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Pompano Beach fishing charters run offshore through Hillsboro Inlet, the most reliable cut in the area when the wind is up. Captain Jason picks up Pompano clients from the Fort Lauderdale dock at 15th Street Fisheries or arranges a north-end departure for groups staying near Sands Harbor Marina and the Pompano Beach Pier. The drive south to the boat takes about twenty minutes from most Pompano hotels, and the offshore bite from Hillsboro Inlet rivals anywhere on the coast.',
      'Pompano Beach sits at the north end of Broward County, with the Hillsboro Inlet handling offshore traffic and the Pompano Beach Pier marking the surf line. The reef ledge here drops fast: 80 ft within a mile, 200 ft within three, and the Gulf Stream edge inside seven. That short run is why Pompano-based offshore trips can target sailfish, mahi, and kingfish on half-day schedules without burning the morning getting to fishable water. The bite picks up on the outgoing tide through Hillsboro, when bait flushes out of the Intracoastal and stages along the rocks at the south jetty.',
      'Lighthouse Point sits on the north side of Hillsboro Inlet and is the area’s other fishable bottom. The reefs off Lighthouse Point keep snapper, grouper, and amberjack stacked between 80 and 120 ft, well within range of a half-day bottom fishing trip. Captain Jason fishes these spots out of Cox Landing, running north along the beach in about twenty minutes when the seas are flat. Sands Harbor Marina sits inside the inlet itself, useful for groups looking at a north-end pickup, though most clients prefer the shorter drive to the home dock.',
      'Inshore options in Pompano run through the Intracoastal between the Atlantic Boulevard bridge and Hillsboro Inlet, with productive snook and tarpon water around the bridges and along the seawalls of the Lighthouse Point canals. The Rhodan trolling motor keeps the boat quiet against the structure, which matters when snook are holding tight to the pilings on a falling tide. Spring tarpon migrate through this stretch in big numbers and stage off the inlet before pushing south.',
      'The area sees serious tournament traffic out of the Hillsboro Inlet fleet, and Captain Jason has fished these waters competitively. Groups looking to combine offshore and reef in one trip can split the day, starting on the troll past the inlet at dawn and finishing on the reef for dinner snapper. Deerfield Beach sits a few miles up the coast on the very same drop-off.',
    ],
    neighborhoods: [
      { title: 'Lighthouse Point', body: 'Lighthouse Point sits at the north side of Hillsboro Inlet and is the closest residential neighborhood to the deepwater cut. The canals here run with the tide and hold snook around dock lights, tarpon during the spring, and jacks year-round. Most pickups are inshore trips that start along the seawalls before pushing offshore.' },
      { title: 'Pompano Beach Pier & A1A', body: 'The strip along A1A from the Pompano Beach Pier south to Atlantic Boulevard is the densest hotel cluster, walking distance to the surf line where kingfish runs hit close to the beach in late fall. Groups staying at the Beachcomber or the Wyndham book half-day offshore trips running out of Hillsboro.' },
      { title: 'Cypress Bend & East Pompano', body: 'The Cypress Bend and Cypress Run neighborhoods west of the Intracoastal are about ten minutes from Sands Harbor Marina. Pickup here is straightforward for early offshore departures, with a quick run up Federal Highway to the inlet.' },
    ],
    uniqueHeading: 'What Makes Pompano Beach Fishing Unique',
    uniqueParagraphs: [
      'Hillsboro Inlet is one of the most fishable cuts in South Florida, but it has its own quirks. The rocks on both sides of the inlet narrow the channel and the current rips through on a strong outgoing tide. Captain Jason times the run through the inlet to the tide window and the boat traffic, especially during weekends when the recreational fleet stacks up at the cut.',
      'Once outside, the reef structure off Pompano holds fish year-round but the productive numbers shift by season. Winter sailfish push tight to the beach in cold fronts. Summer mahi run with the weed lines further offshore. Knowing which pattern is on that week is the difference between a slow trip and a heavy cooler.',
      'Bottom fishing off Pompano Beach is excellent but the well-known reefs see a lot of pressure. The spots that consistently produce keeper snapper and grouper are the ones nobody is dropping anchor on, and that knowledge comes from ten years of working the ledge between Hillsboro Inlet and the Boca Inlet.',
    ],
    localImage: { src: '/images/areas/pompano-beach-1.webp', alt: 'Local fishing scene near Pompano Beach' },
    landmarks: ['Hillsboro Inlet', 'Pompano Beach Fishing Pier', 'Sands Harbor Marina', 'Hillsboro Lighthouse', 'Lighthouse Point', 'Pompano Beach Marina'],
    nearby: ['deerfield-beach', 'fort-lauderdale', 'boca-raton'],
  },
  {
    slug: 'hollywood-fl',
    href: '/service-areas/hollywood-fl/',
    name: 'Hollywood, FL',
    county: 'Broward County, Florida',
    metaTitle: 'Hollywood FL Fishing Charters | Anglins Pier & Hollywood Beach',
    metaDescription:
      'Hollywood FL fishing charters with pickup near the Hollywood Broadwalk. Inshore tarpon, offshore mahi, and reef snapper trips. Captain Jason, 10+ years.',
    heroImage: '/images/gallery/offshore/41.webp',
    heroImageAlt: 'Hollywood, FL fishing charter departing the Cool Runnings dock',
    midImage: { src: '/images/gallery/offshore/33.webp', alt: 'Charter action shot near Hollywood, FL' },
    h1: 'Hollywood, FL Fishing Charters',
    lede: 'Private charter pickup for Hollywood, FL guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Hollywood fishing charters out of Cox Landing put guests on fish within a ten-minute boat ride south of Dania Beach and the Port Everglades cut. The Hollywood Broadwalk hotels, North Beach Park, and the Anglins Fishing Pier area all sit within a fifteen-minute drive of the boat, making half-day inshore trips and offshore runs easy to schedule around vacation plans.',
      'Hollywood is the stretch of Broward coast between Dania Beach and Hallandale, with the Hollywood Broadwalk running along the surf line and the Intracoastal Waterway carving a productive inshore route west of A1A. The beach in front of the Hollywood Beach Resort and the Margaritaville Hollywood is the densest hotel zone, and pickups from these properties run about fifteen minutes south on US-1 to the Cool Runnings dock. Once on the water, the offshore ledge starts about a mile and a half off the Hollywood beach. Depths hit roughly 200 ft within three miles of shore, and the Gulf Stream’s western edge runs about seven miles out.',
      'The inshore water between Hollywood and Dania includes the Dania Cutoff Canal, the seawalls of the Hollywood Lakes neighborhood, and the productive flats around the spoil islands south of Port Everglades. Snook hold tight to the dock lights in the canals on falling tides, and tarpon push through the cutoff canal during the spring migration. Our Rhodan trolling motor drifts the seawalls quietly during the early-morning bite without spooking fish.',
      'Hollywood’s offshore fishing is functionally the same as Fort Lauderdale offshore fishing because the boat runs from the same dock, just a few miles south. The Gulf Stream proximity is the same. The reef ledges at 80 to 150 ft hold the same snapper, grouper, and amberjack populations.',
      'North Beach Park and the streets framing the old Sunny Isles Bridge sit on the south end of Hollywood and mark the boundary with Sunny Isles in Miami-Dade. Captain Jason has logged more than a decade working this stretch and runs the morning bite around the Port Everglades tide push, which moves bait south along the Hollywood beach.',
      'Half-day, three-quarter day, and full-day trips all work from a Hollywood pickup. Most families looking for a calm-water introduction to South Florida fishing book the half-day inshore option, with kids landing snapper, jacks, and the occasional snook in protected water. Anglers chasing a tournament target species push out to the offshore ledge.',
    ],
    neighborhoods: [
      { title: 'Hollywood Beach & The Broadwalk', body: 'The Broadwalk from Sheridan Street to Hollywood Boulevard is the main hotel and rental district, with quick US-1 access south to the dock. Most guests staying along the Broadwalk book early-morning offshore departures and are back at the hotel by lunch.' },
      { title: 'Hollywood Lakes', body: 'The Hollywood Lakes neighborhood sits between Federal Highway and the Intracoastal and is the closest inshore water to the city’s hotels. The canals here hold snook on dock lights and the occasional tarpon during the spring. Pickup for inshore trips is easy and the boat is at the seawalls in twenty minutes.' },
      { title: 'Emerald Hills & West Hollywood', body: 'The Emerald Hills area west of I-95 is about a twenty-minute drive to the dock. Families staying in vacation rentals here often book full-day combo trips, mixing offshore trolling with bottom fishing over the reef.' },
    ],
    uniqueHeading: 'What Makes Hollywood, FL Fishing Unique',
    uniqueParagraphs: [
      'Hollywood fishing pairs the protected Intracoastal water for inshore work with the same close-in Gulf Stream access that makes Fort Lauderdale productive. The Dania Cutoff Canal and the spoil islands south of Port Everglades are the area’s best-kept inshore secret, holding snook and small tarpon during the warmer months. The challenge is the tide window.',
      'The cutoff canal fishes well only on a falling tide when bait flushes out toward the inlet, and the productive window is often three hours, not a full day. Captain Jason times the trip around that tide push, which is why the morning departure shifts each week.',
      'Offshore from Hollywood, the same Gulf Stream conditions that bring sailfish close to shore can also turn the seas sloppy when an east wind pushes against the current. On those days, the bite shifts to reef fishing at 80 to 120 ft, where snapper and grouper stay productive in conditions that knock down the offshore trolling bite.',
    ],
    localImage: { src: '/images/gallery/offshore/29.webp', alt: 'Local fishing scene near Hollywood, FL' },
    landmarks: ['Hollywood Beach Broadwalk', 'Anglins Fishing Pier', 'North Beach Park', 'Dania Cutoff Canal', 'Hollywood Beach', 'Hollywood Lakes'],
    nearby: ['dania-beach', 'fort-lauderdale', 'miami'],
  },
  {
    slug: 'dania-beach',
    href: '/service-areas/dania-beach/',
    name: 'Dania Beach',
    county: 'Broward County, Florida',
    metaTitle: 'Dania Beach Fishing Charters | Sport Fishing on the Atlantic',
    metaDescription:
      'Dania Beach fishing charters with pickup near John U. Lloyd Beach and Whiskey Creek. Offshore sailfish, mahi, and reef trips with Captain Jason.',
    heroImage: '/images/gallery/offshore/3.webp',
    heroImageAlt: 'Dania Beach fishing charter departing the Cool Runnings dock',
    h1: 'Dania Beach Fishing Charters',
    lede: 'Private charter pickup for Dania Beach guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Dania Beach fishing charters launch directly across the Port Everglades cut at our 15th Street Fisheries home base, putting Dania guests on the boat in under ten minutes. The Dania Beach Fishing Pier, John U. Lloyd Beach State Park, and Whiskey Creek all sit within five minutes of where the boat ties up, making this the shortest pickup of any service area. Charter options cover offshore trolling for sailfish and mahi, bottom fishing for snapper and grouper, and protected-water inshore trips up the creek.',
      'Dania Beach sits directly south of Port Everglades, with John U. Lloyd Beach State Park forming the southern shoreline of the inlet and Whiskey Creek carving a protected inshore route through the park. The geography here is unique on the Broward coast: the deepwater inlet is two minutes from the beach, and the calm-water creek runs parallel to the ocean for almost two miles. That combination means a charter from Dania can switch between offshore trolling and inshore drifting in the same morning without burning fuel.',
      'Whiskey Creek is the best inshore water in the area and one of the most productive snook spots in Broward County. The creek runs through John U. Lloyd Beach State Park and holds snook, tarpon, jacks, snapper, and the occasional small grouper. Our Rhodan electric motor slips the boat against the mangrove edges and live-oak shade where bigger fish hold up, with no engine noise to spook them. The creek fishes best on the outgoing tide when bait stages at the south jetty.',
      'The Port Everglades south jetty is the area’s signature structure, holding snook, snapper, and jacks year-round along the rock face. From the jetty rocks, the reef rises inside a mile and the bottom falls off to 200 ft three miles out, putting the same offshore species available to Fort Lauderdale fishing trips within easy reach. The Dania Cutoff Canal connects Whiskey Creek to the Intracoastal further north and offers a backup inshore option when the creek itself is crowded.',
      'Half-day trips from Dania often combine the creek with a quick reef stop, while full-day trips push offshore for the sailfish bite. The Dania Beach Fishing Pier itself sits about a mile north of the creek mouth and is the area’s most visible landmark, useful as a pickup reference for guests staying at the nearby hotels. Hollywood is the next stop south, and most Dania trips overlap geographically with what we run for Hollywood guests.',
    ],
    fastFacts: { county: 'Broward, FL', zipCodes: '33004, 33312', homeDock: 'Cox Landing' },
    neighborhoods: [
      { title: 'John U. Lloyd Beach Area', body: 'The state park itself is not residential, but the hotels along Dania Beach Boulevard and the marinas along the cutoff canal are the most common pickup zones. This is the closest service-area pickup to the boat, often under ten minutes door-to-dock.' },
      { title: 'Dania Pointe & East Dania', body: 'The Dania Pointe development and the East Dania residential streets are about fifteen minutes from the dock via the 17th Street Causeway. Pickup here works for both early offshore departures and later inshore trips up Whiskey Creek.' },
      { title: 'West Dania & Sheridan Street Corridor', body: 'Vacation rentals along Sheridan Street and the western Dania residential streets are a quick drive to the boat via Federal Highway. Groups staying in this area book a mix of inshore and offshore depending on the wind that morning.' },
    ],
    uniqueHeading: 'What Makes Dania Beach Fishing Unique',
    uniqueParagraphs: [
      'Dania Beach’s biggest fishing asset is Whiskey Creek, which is also its biggest challenge. The creek is a no-wake zone running through a state park, which means slow boat speeds and shared use with paddlers and kayakers. Captain Jason runs the creek early when paddler traffic is light and the bite is on, then pushes out the south jetty to the reef as the day fills in.',
      'Offshore from Dania, the south side of the Port Everglades cut sees less recreational pressure than the Fort Lauderdale side because most charter boats run out of the north end of the marina. That can mean better fishing on the south reef ledge during peak weekends. The trade-off is the same wind direction issues that affect Port Everglades: an east wind against an outgoing tide makes the cut sloppy, and Captain Jason will reroute north to Hillsboro Inlet on those days.',
    ],
    localImage: { src: '/images/areas/dania-beach-1.webp', alt: 'Local fishing scene near Dania Beach' },
    landmarks: ['Dania Beach Fishing Pier', 'John U. Lloyd Beach State Park', 'Whiskey Creek', 'Port Everglades South Jetty', 'Dania Cutoff Canal'],
    nearby: ['fort-lauderdale', 'hollywood-fl', 'pompano-beach'],
  },
  {
    slug: 'deerfield-beach',
    href: '/service-areas/deerfield-beach/',
    name: 'Deerfield Beach',
    county: 'Broward County, Florida',
    metaTitle: 'Deerfield Beach Fishing Charters | Inshore & Offshore Trips',
    metaDescription:
      'Deerfield Beach fishing charters with offshore access through Hillsboro Inlet. Sailfish, mahi, and reef snapper trips with Captain Jason.',
    heroImage: '/images/gallery/offshore/30.webp',
    heroImageAlt: 'Deerfield Beach fishing charter departing the Cool Runnings dock',
    h1: 'Deerfield Beach Fishing Charters',
    lede: 'Private charter pickup for Deerfield Beach guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Deerfield Beach fishing charters share the same Hillsboro Inlet offshore access as Pompano Beach trips, with pickup from Cox Landing about twenty-five minutes south. The Deerfield Beach International Fishing Pier marks the surf line here. The offshore ledge starts within a mile and a half of the beach, putting sailfish, mahi, and kingfish within range of a half-day offshore trip.',
      'Deerfield Beach is the northernmost service area in Broward County, bordered by Boca Raton to the north and Pompano Beach to the south. The Deerfield Beach International Fishing Pier is the most recognizable landmark on the coast here. The 976 ft pier stretches well into the Atlantic and marks the surf zone where kingfish runs hit close to the beach in late fall and spring.',
      'The offshore ledge starts within a mile and a half of the pier. Depths hit 200 ft about three miles out, and the western wall of the Gulf Stream is roughly seven miles offshore, making this one of the productive offshore zones on the Broward-Palm Beach line.',
      'Hillsboro Inlet is the deepwater cut serving Deerfield offshore fishing, the same inlet that serves Pompano Beach two miles to the south. Captain Jason runs the boat north along the beach from our 15th Street Fisheries home base. The trip from Cox Landing to the Hillsboro reef ledge takes about thirty minutes on a calm morning.',
      'Inshore options in Deerfield include the Intracoastal between Hillsboro Boulevard and the Boca Inlet, with snook around the bridges and tarpon during the spring migration. The Royal Palm Yacht Club basins and the Deerfield Island Park area hold productive water for early-morning inshore charters.',
      'Bottom fishing off Deerfield is a strong half-day option. The reef structure between the pier and the inlet holds snapper, grouper, and amberjack at 80 to 120 ft, with deeper wrecks past 150 ft for groups wanting bigger reef fish. Boca Raton sits five miles north and shares the same offshore ledge, with combo trips often making sense for groups split between the two cities.',
    ],
    neighborhoods: [
      { title: 'Deerfield Beach Pier & A1A', body: 'The hotel and rental strip along A1A from Hillsboro Boulevard north to the pier is the densest tourist zone. Pickup from beach-strip hotels is straightforward, with most guests catching an early offshore departure and back by lunch.' },
      { title: 'Deerfield Island & East Deerfield', body: 'The Deerfield Island Park area and the residential streets east of US-1 sit on the Intracoastal. Inshore pickups from this neighborhood are easy, with the boat working the Intracoastal stretch from Hillsboro Inlet north toward Boca on a falling tide.' },
      { title: 'Cove Marina Area', body: 'The Cove Marina basin and the surrounding canals between Hillsboro Boulevard and the inlet hold snook on dock lights and the occasional tarpon. Pickup from this area works well for dawn inshore trips when the boat traffic in the Intracoastal is light.' },
    ],
    uniqueHeading: 'What Makes Deerfield Beach Fishing Unique',
    uniqueParagraphs: [
      'Deerfield Beach’s offshore access through Hillsboro Inlet is excellent, but the longer run from Cox Landing means trip planning matters more here than in cities closer to the boat. A Deerfield offshore trip typically adds thirty minutes to the boat ride compared to a Fort Lauderdale trip, which is why most Deerfield charters book full-day or three-quarter-day slots rather than tight half-days.',
      'The inshore water between Hillsboro Inlet and the Boca Inlet is some of the least pressured in Broward County because most charter boats stay south. The Hillsboro Boulevard bridge and the Camino Real bridge in Boca create current breaks that fish hold around, but the bridge openings can interrupt a drift — the Rhodan trolling motor keeps the boat positioned during openings without spooking fish.',
    ],
    localImage: { src: '/images/areas/deerfield-beach-1.webp', alt: 'Local fishing scene near Deerfield Beach' },
    landmarks: ['Deerfield Beach International Fishing Pier', 'Hillsboro Inlet', 'Pioneer Park', 'Deerfield Island Park', 'Hillsboro Lighthouse'],
    nearby: ['pompano-beach', 'boca-raton', 'fort-lauderdale'],
  },
  {
    slug: 'boca-raton',
    href: '/service-areas/boca-raton/',
    name: 'Boca Raton',
    county: 'Palm Beach County, Florida',
    metaTitle: 'Boca Raton Fishing Charters | Boca Inlet & Lake Boca',
    metaDescription:
      'Boca Raton fishing charters running through Boca Inlet to the offshore ledge. Calmer Lake Boca for kids. Captain Jason picks up from Boca hotels.',
    heroImage: '/images/gallery/offshore/48409101-535112720307408-4005294163024150528-n.webp',
    heroImageAlt: 'Boca Raton fishing charter departing the Cool Runnings dock',
    midImage: { src: '/images/gallery/offshore/img-53172.webp', alt: 'Charter action shot near Boca Raton' },
    h1: 'Boca Raton Fishing Charters',
    lede: 'Private charter pickup for Boca Raton guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Boca Raton fishing charters cover a twenty-mile run north from our home dock at Cox Landing, with offshore access through Boca Inlet and protected family water inside Lake Boca Raton. The Boca Inlet drops to the offshore ledge fast, with 200 ft of water inside three miles. That depth profile makes this a strong half-day offshore option for groups staying at the Boca Raton Resort or the hotels along Camino Real.',
      'Boca Raton sits on the southern Palm Beach County coast, with the Boca Inlet handling offshore traffic and Lake Boca forming a wide protected basin inside the inlet. The lake is the area’s signature inshore water: a roughly half-mile-wide stretch of clean Intracoastal that fishes well for snook, jacks, and the occasional tarpon, with calmer conditions than the open Intracoastal further south. That calm water is the reason Lake Boca is the best kid-friendly inshore trip on this stretch of coast.',
      'Boca Inlet is the deepwater cut for offshore fishing here, sitting between Spanish River Park to the north and South Inlet Park to the south. The reef edge rises inside a mile of the inlet, with the bottom plunging past 200 ft about three miles offshore. The Gulf Stream edge sits within seven miles, putting sailfish, mahi, kingfish, and blackfin tuna inside reach of a half-day trip. The offshore bite here closely tracks what we see off Deerfield Beach five miles south.',
      'Red Reef Park borders the inlet on its southern shoulder and gives beach-strip guests an easy landmark to point a driver toward. The Gumbo Limbo Nature Center and the surrounding mangrove edges hold snook and jacks year-round, and our Rhodan electric motor lets us work that water quietly during the early-morning bite. South Inlet Park and the surrounding southern shoreline of the cut are the closest inshore pickup zones for offshore trips.',
      'Bottom fishing off Boca Raton is excellent, with productive reef structure between the Boca Inlet and the Hillsboro Inlet five miles south. The 80 to 120 ft zone holds snapper and grouper year-round, and the deeper wrecks past 150 ft hold amberjack alongside heavier reef quarry. Groups split between Boca and Deerfield often book combo trips that fish the ledge between both inlets in the same morning.',
    ],
    neighborhoods: [
      { title: 'Boca Raton Resort & Lake Boca', body: 'The Boca Raton Resort and the surrounding Camino Real corridor sit directly on Lake Boca, making this the easiest pickup for inshore family trips. Walk to the dock at the lake’s edge and the boat is on fish in five minutes.' },
      { title: 'East Boca & Royal Palm Yacht Club', body: 'The Royal Palm Yacht Club basin and the residential canals along East Boca hold snook on dock lights and tarpon during the spring run. These are the highest-end inshore pickup zones in the area and the boat works the seawalls quietly with the trolling motor.' },
      { title: 'Spanish River & North Boca', body: 'Spanish River Park and the north Boca residential streets along A1A are about fifteen minutes from South Inlet Park. Pickup here works for offshore departures running through Boca Inlet, and Spanish River is also a useful inshore stop on a falling tide.' },
      { title: 'West Boca & Lake Wyman', body: 'The Lake Wyman area west of US-1 is about twenty minutes from the inlet and is a quiet inshore option when Lake Boca is busy. Snook hold around the bridges and tarpon push through during the spring migration.' },
    ],
    uniqueHeading: 'What Makes Boca Raton Fishing Unique',
    uniqueParagraphs: [
      'Boca Raton fishing has two distinct personalities: the calm-water Lake Boca trips for families and beginners, and the offshore runs through Boca Inlet that require a heavier boat and a captain who knows the cut. The challenge is the tide window — Lake Boca fishes best on a falling tide when bait flushes toward the inlet, and the productive window for snook on the seawalls is often the two hours either side of the tide change.',
      'Boca Inlet itself is narrower than Hillsboro Inlet and the current rips through on a strong outgoing tide. Captain Jason times the run through the cut to the tide window and the boat traffic. On heavy weekend days, Hillsboro Inlet five miles south is the safer route to the offshore ledge, and the boat reroutes accordingly.',
      'Offshore from Boca, the reef ledge between the Boca Inlet and the Hillsboro Inlet is some of the less-pressured bottom in southeast Florida. Most Broward charter boats stay south and most Palm Beach boats stay north — that seam between the two fleets means the productive numbers along this stretch get worked less than the spots closer to either home base.',
    ],
    localImage: { src: '/images/areas/boca-raton-1.webp', alt: 'Local fishing scene near Boca Raton' },
    landmarks: ['Boca Inlet', 'Lake Boca Raton', 'South Inlet Park', 'Spanish River Park', 'Red Reef Park', 'Gumbo Limbo Nature Center', 'Lake Wyman'],
    nearby: ['deerfield-beach', 'pompano-beach', 'fort-lauderdale'],
  },
  {
    slug: 'miami',
    href: '/service-areas/miami/',
    name: 'Miami',
    county: 'Miami-Dade County, Florida',
    metaTitle: 'Miami Fishing Charters from Haulover & Government Cut',
    metaDescription:
      'Miami fishing charters on request from Haulover or Government Cut. Captain Jason grew up fishing Biscayne Bay before running out of Fort Lauderdale.',
    heroImage: '/images/gallery/offshore/201809131137054-image4.webp',
    heroImageAlt: 'Miami fishing charter departing the Cool Runnings dock',
    h1: 'Miami Fishing Charters',
    lede: 'Private charter pickup for Miami guests. Half, three-quarter, and full days on the 32-foot Contender out of Cox Landing.',
    intro: [
      'Miami fishing charters with Cool Runnings run on request, with departure options from Haulover Marine Center or Government Cut depending on what fits the trip. Captain Jason was raised fishing the Miami area before becoming a tournament regular out of the Fort Lauderdale dock. That Miami background means real knowledge of Biscayne Bay, the Key Biscayne flats, and the offshore push through Government Cut.',
      'Captain Jason Robinson is a South Florida native who grew up fishing Biscayne Bay and the Miami flats before competing in tournaments out of Fort Lauderdale. That Miami background is not a marketing line — it is where Jason learned to read tides, find bait, and work the inshore structure that makes Biscayne Bay one of the most productive inshore fisheries in the country.',
      'Miami trips with Cool Runnings draw on that deep local knowledge. Departure options get arranged around what the trip calls for: offshore through Government Cut for sailfish and mahi, or inshore from the Haulover basin for tarpon and snook in the bay.',
      'Haulover Marine Center sits between Sunny Isles and North Miami Beach, with quick access to both the offshore push out the Haulover Inlet and the inshore water of Dumfoundling Bay. The inlet here fishes well for kingfish and bonito in late fall and early spring, with the offshore reefs holding snapper and grouper at 80 to 120 ft within a few miles of the cut.',
      'Government Cut is the deeper inlet serving downtown Miami and the cruise port, with offshore access to the same Gulf Stream water that runs along the entire southeast coast. The reef structure off Government Cut holds snapper, grouper, and amberjack year-round, and the offshore push to the sailfish ledge takes about twenty minutes from the cut. Stiltsville sits south of Government Cut in the shallows off Key Biscayne and is one of the area’s most recognizable landmarks.',
      'Biscayne Bay is the area’s signature inshore fishery, stretching from downtown Miami south to Key Biscayne and Elliott Key. The Cape Florida lighthouse on the south end of Key Biscayne marks the entrance to the productive flats water that runs south into the national park. Most Miami trips with Cool Runnings book as full-day options to cover the longer logistics.',
    ],
    fastFacts: { county: 'Miami-Dade, FL', zipCodes: '33132, 33139, 33154, 33180', homeDock: 'Cox Landing' },
    neighborhoods: [
      { title: 'Haulover & Bal Harbour', body: 'The Haulover Marine Center and the surrounding Bal Harbour area are the realistic Miami departure point. Hotels along Collins Avenue from Bal Harbour north to Sunny Isles are the easiest pickup zone for Haulover-departure trips. The inlet itself is two minutes from the dock and the offshore ledge starts within a mile of the cut.' },
      { title: 'Government Cut & Downtown Miami', body: 'Downtown Miami hotels and the Brickell area are about fifteen minutes from the Government Cut departure point. This is the deeper inlet for offshore departures and the closest run to the sailfish ledge from a Miami pickup. Pickup logistics for Government Cut trips are arranged in advance.' },
      { title: 'Key Biscayne & Cape Florida', body: 'Key Biscayne sits south of Government Cut and is the access point for the flats water and the Cape Florida lighthouse. Pickup from Key Biscayne hotels works for inshore-focused trips that target bonefish, permit, and tarpon on the flats.' },
    ],
    uniqueHeading: 'What Makes Miami Fishing Unique',
    uniqueParagraphs: [
      'Miami trips with Cool Runnings are bookable but require advance logistics because the home dock is in Fort Lauderdale, not Miami. Most groups asking about Miami fishing get one of two recommendations from Captain Jason: book the boat for a Miami pickup at Haulover with the right advance notice, or book a Fort Lauderdale departure and fish the same Gulf Stream water that runs along the entire southeast coast.',
      'The fish do not care which inlet the boat ran out of, and the offshore bite along Fort Lauderdale fishes the same species in the same depth as the bite off Miami. The biggest Miami-specific challenge is boat traffic — Government Cut is the busiest inlet in Florida between cruise ships, container vessels, and the recreational fleet.',
      'Haulover is calmer but the inlet itself is narrow and the current rips on a strong tide. For most groups, the right answer is a Fort Lauderdale-departure trip that puts more time on the fish and less time on logistics. For groups committed to a Miami anchor, the trip is doable with advance planning.',
    ],
    localImage: { src: '/images/areas/miami-1.webp', alt: 'Local fishing scene near Miami' },
    landmarks: ['Haulover Marine Center', 'Government Cut', 'Biscayne Bay', 'Key Biscayne flats', 'Stiltsville', 'Cape Florida Lighthouse'],
    nearby: ['hollywood-fl', 'dania-beach', 'fort-lauderdale'],
  },
];
