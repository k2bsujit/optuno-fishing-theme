// Charter/service data — single source for the home page charter cards, the
// /services/ index, and the 3 detail pages. Content pulled verbatim (prose
// lightly reflowed for the rebuilt component structure) from the reference
// site's own copy (CLAUDE.md §4).
//
// Note on links: the reference site's long-form body copy and FAQ answers
// are threaded with inline links to About, Gallery, Reviews, Service Areas,
// Blog, and Charter Info. Body/FAQ text here is stored as plain strings (no
// inline links) to keep this content decoupled from routing — real
// navigation is available via the dedicated "Other Trip Types" cross-link
// cards and the booking/call CTAs on every section. All Milestone B pages
// referenced by the original site now exist in this build.

export interface Step {
  title: string;
  body: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: 'offshore-fishing' | 'inshore-fishing' | 'bottom-fishing';
  href: string;
  title: string; // full title, e.g. "Offshore Fishing Charters"
  tag: string; // short tag used on the reference cards, e.g. "Offshore Fishing"
  species: string[]; // quick species chips, used on the /services/ index cards
  cardDescription: string; // short card copy from the homepage "Our Charters" section
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  heroSubtitle: string;
  itemBookingUrl: string; // trip-specific FareHarbor deep link
  bookTripLabel: string;
  intro: string[];
  secondaryImage: { src: string; alt: string };
  whyDifferent: {
    eyebrow: string;
    heading: string;
    body: string;
    image: { src: string; alt: string };
  };
  knowBeforeBook: {
    eyebrow: string;
    heading: string;
    bullets: string[];
  };
  dayPlay: {
    eyebrow: string;
    heading: string;
    image: { src: string; alt: string };
    steps: Step[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    bullets: string[];
  };
  faqs: Faq[];
}

export const pricingNote =
  'Trip pricing varies by season, party size, and trip length. Half-day, 3/4-day, and full-day options available. Call 954-588-0578 or use the booking form below for a quote. Ask about the discount on your 3rd booking.';

// Images are served from /public/images/ locally — run
// `node scripts/download-images.mjs` once to pull the real assets down.
export const services: Service[] = [
  {
    slug: 'offshore-fishing',
    href: '/services/offshore-fishing/',
    title: 'Offshore Fishing Charters',
    tag: 'Offshore Fishing',
    species: ['Sailfish', 'Mahi Mahi', 'Tuna', 'Wahoo', 'Kingfish', 'Marlin'],
    cardDescription:
      'Run the Gulf Stream off Fort Lauderdale for sailfish, mahi, tuna, wahoo, and the occasional marlin. Half, three-quarter, and full days on a 32-foot Contender.',
    metaTitle: 'Fort Lauderdale Offshore Fishing Charters | Mahi & Sailfish',
    metaDescription:
      'Fort Lauderdale offshore fishing charters with Captain Jason. Sailfish, mahi, tuna, and wahoo in the Gulf Stream. Call 954-588-0578 to book.',
    heroImage: '/images/gallery/offshore/12-easy-resize.com.webp',
    heroImageAlt: 'Offshore Fishing Charters on the 32 Contender out of Fort Lauderdale',
    h1: 'Fort Lauderdale Offshore Fishing Charters',
    heroSubtitle: 'Sailfish, mahi, tuna, wahoo, and marlin on a 32-foot Contender out of Cox Landing.',
    itemBookingUrl:
      'https://fareharbor.com/embeds/book/coolrunningssportfishingcharters/items/736620/?full-items=yes&flow=1650138',
    bookTripLabel: 'Book A Offshore Fishing Trip',
    intro: [
      'Fort Lauderdale puts you on the doorstep of the Gulf Stream like few places on the East Coast. The current runs in close enough that a half-day trip on the Cool Runnings offshore boat can hand you a screaming reel before the city skyline is out of sight. Captain Jason has spent more than a decade reading these waters out of Cox Landing, and the boat carries gear matched to every bite the Atlantic might offer that morning.',
      'Fort Lauderdale offshore fishing charters mean Gulf Stream access in under 20 minutes. The current sweeps north past Port Everglades only a few miles east of the beach. That warm-water highway is what brings mahi mahi crashing weed lines, sailfish tailing on the surface in winter, and blackfin tuna stacked up off the wrecks.',
      "We don't guess where to fish. Every trip starts with a read of the day — water temps, bait pods, the report from the morning boats, and where the fleet is working. Some mornings that means a long troll along the color change for mahi and wahoo. Some afternoons it means setting kites in the sailfish lanes off Hillsboro Inlet. Other days the bite is on the deep wrecks and we drop chunks for tuna.",
      'The species list is real Fort Lauderdale offshore. Mahi mahi school along the floating weed lines in spring and summer, with the bigger bull dolphin showing in May and June. Sailfish are the winter and early-spring headliner here, and Fort Lauderdale sits squarely on the Sailfish Alley flyway. Blackfin and yellowfin tuna stack up on the deep humps and wrecks.',
      'Wahoo show up on the high-speed troll near the reefs and shelves, especially around new and full moons. Kingfish hammer slow-trolled live baits over the reef edges. Marlin, both blue and white, are the bonus on long runs to the deeper water in spring. Cobia patrol the wrecks and free-jumping rays year-round.',
      'The boat for the job is a 32-foot Contender with twin Yamaha 300 outboards — wide, dry, and quick enough to make the run to the next bite without burning an hour of fishing time. We provide tackle, live and dead bait, ice chests, rods and reels rigged for the day, plus all required Florida saltwater licenses for the whole party. You bring sun protection, soft-soled shoes, food, and a camera.',
      'We clean and bag your catch at the dock at the end of the day. Trips run roughly four hours for a half day, six hours for a three-quarter, and eight hours for a full day. The heaviest pelagic action almost always wants the longer slots.',
      'Captain Jason has placed and won in world-renowned tournaments out of South Florida and has been featured on Bass2Billfish with Peter Miller. That tournament-level boat handling is the same approach you get on a private charter. We keep the party small — two to three guests is the sweet spot, four maximum — so everyone gets real rod time when the bite turns on.',
    ],
    secondaryImage: {
      src: '/images/services/offshore-fishing-1.webp',
      alt: 'Offshore Fishing action shot off Fort Lauderdale',
    },
    whyDifferent: {
      eyebrow: 'Where We Fish Offshore',
      heading: 'Why the Gulf Stream Sets Fort Lauderdale Apart',
      body: 'The single biggest reason Fort Lauderdale produces is the proximity of the Gulf Stream. The axis of the current sits roughly five to twelve miles offshore here, closer than most of the East Coast, and that warm-water edge is where the pelagic action lives. From the home dock at Cox Landing we can be on the color change in 15 to 20 minutes, fishing kite baits or trolling spreaders before slower boats have even cleared Port Everglades. We work the reef lines toward the Dania-side beaches for kingfish and sailfish. The deep wrecks off the 17th Street Causeway hold blackfin tuna, and the long ledges past Hillsboro Inlet light up when the wahoo bite turns on. A decade working this stretch of coast has shown us the rhythms — where mahi school after a south wind, which wrecks hold tuna after a cold front, when the sailfish push through on a north breeze.',
      image: {
        src: '/images/gallery/offshore/44.webp',
        alt: 'Where we fish for offshore fishing out of Fort Lauderdale',
      },
    },
    knowBeforeBook: {
      eyebrow: 'Know Before You Book',
      heading: 'What Makes Offshore Different From Inshore',
      bullets: [
        'Trips are longer — four hours minimum, six to eight is more common for serious pelagic fishing',
        'Conditions are open-ocean — swell and chop are normal even on calm forecasts',
        'Motion sickness is real — take meds the night before and the morning of if you are prone',
        'Departures are early, often before sunrise, to hit the best feeding windows',
        'Catches are bigger and stronger — expect to fight a fish for 15 to 45 minutes solo',
        'Weather calls happen — the captain may reschedule if the forecast turns unsafe',
        'Live bait and kite fishing means slower starts — the action turns on once the spread is set',
        'Bring layers — even Florida mornings on the Gulf Stream can be cool at 30 knots',
      ],
    },
    dayPlay: {
      eyebrow: 'On the Water',
      heading: 'How a Day Offshore Plays Out',
      image: {
        src: '/images/services/offshore-fishing-2.webp',
        alt: 'Cool Runnings offshore fishing trip in progress',
      },
      steps: [
        { title: 'Pre-Dawn Departure', body: 'Meet at the home dock in Cox Landing before sunrise. Quick brief on what we are targeting, where we are running, and how the spread is set.' },
        { title: 'Short Run to the Stream', body: 'Idle out the no-wake zone, then a 15 to 20 minute run east to the Gulf Stream color change, the reef edge, or whichever pelagic pattern is on that day.' },
        { title: 'Set the Spread', body: 'Live bait kite rigs for sailfish, deep diving plugs and trolling lures for mahi, wahoo, and kingfish, or chunk bait setups over the deep wrecks for blackfin tuna.' },
        { title: 'Work the Pattern', body: 'Move with the bait, the birds, and the floating weeds. The captain runs the boat, the mate handles the rigs, and you fish — every bite is yours to fight start to finish.' },
        { title: 'Run In and Clean Up', body: 'Photos with the catch on the way back to the dock. We clean and bag your fillets right at Cox Landing so you go home with cooler-ready fish.' },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Anglers Choose Cool Runnings',
      heading: 'Why Anglers Pick Offshore With Us',
      bullets: [
        'Tournament-placed captain with over a decade fishing the Fort Lauderdale Gulf Stream',
        '32-foot Contender with twin Yamaha 300s, wide cockpit, dry ride, room for four',
        'Short run to the action from Cox Landing',
        'All gear, bait, ice, and Florida fishing licenses provided',
        'Catch cleaning and bagging at the dock included',
        'Featured on Bass2Billfish with Peter Miller',
        'Four-guest maximum keeps every angler on a rod when the bite hits',
      ],
    },
    faqs: [
      { question: 'How far offshore do you run for the Gulf Stream off Fort Lauderdale?', answer: 'The Gulf Stream sits roughly five to twelve miles east of Fort Lauderdale, much closer than most of the East Coast. From our home dock in Cox Landing we are typically on the color change inside 20 minutes, which is what makes a half-day trip realistic for serious pelagic fishing here. On a full-day trip we might push further north or south depending on where the bait and the bite are holding.' },
      { question: 'What species can I actually expect to catch offshore in Fort Lauderdale?', answer: 'The realistic target list changes with the season. Sailfish are the winter and early-spring headliner here, and Fort Lauderdale sits on Sailfish Alley. Mahi mahi school the weed lines spring through summer. Blackfin tuna stack on the deep wrecks fall through winter. Wahoo show up around new and full moons on the high-speed troll. Kingfish bite the reefs almost year-round. Cobia and the occasional marlin round it out.' },
      { question: 'How long should I book for an offshore trip?', answer: 'Half-day trips run about four hours and work for sailfish or mahi when the bite is close in. Three-quarter day at six hours gives more time to work a longer pattern, which is usually our most popular slot. Full days at eight hours are the call for serious pelagic chasing, multi-species days, or if you want a real shot at a marlin.' },
      { question: 'How early do offshore trips leave?', answer: 'Most offshore trips out of Fort Lauderdale leave before sunrise. The dawn bite is the best bite for sailfish, kingfish, and tuna, and we want lines in the water when the light comes up. Captain Jason confirms the exact dock time the day before your trip based on conditions and tide.' },
      { question: 'Do I need a fishing license?', answer: "No. Florida law covers everyone fishing on a licensed charter boat under the captain's saltwater fishing license, so you do not need to buy your own. We carry all the required permits and Coast Guard safety equipment. You just show up with sun protection, soft-soled shoes, snacks, drinks, and a camera." },
      { question: 'What if the weather turns bad?', answer: 'Safety calls always come from the captain. If the offshore forecast turns dangerous, we reschedule with no penalty. Fort Lauderdale offshore conditions can change quickly, especially in winter with strong north winds against the Gulf Stream, and we will not push a trip when it is unsafe to be out.' },
    ],
  },
  {
    slug: 'inshore-fishing',
    href: '/services/inshore-fishing/',
    title: 'Inshore Fishing Charters',
    tag: 'Inshore Fishing',
    species: ['Snook', 'Tarpon', 'Redfish', 'Seatrout', 'Jack Crevalle', 'Barracuda'],
    cardDescription:
      'Sight fish the flats and work the Intracoastal channels for snook, tarpon, redfish, and seatrout. Quiet trolling motor on a 32 Contender means no spooked fish.',
    metaTitle: 'Fort Lauderdale Inshore Fishing Charters | Snook & Tarpon',
    metaDescription:
      'Fort Lauderdale inshore fishing charters with Captain Jason. Sight fish the flats and Intracoastal for snook, tarpon, redfish, and seatrout.',
    heroImage: '/images/gallery/inshore/ea7aa9c9-eae9-46af-8c27-12fc2d8e001c.webp',
    heroImageAlt: 'Inshore Fishing Charters on the 32 Contender out of Fort Lauderdale',
    h1: 'Fort Lauderdale Inshore Fishing Charters',
    heroSubtitle: 'Snook, tarpon, redfish, and seatrout in the Intracoastal, flats, and channels around Fort Lauderdale.',
    itemBookingUrl:
      'https://fareharbor.com/embeds/book/coolrunningssportfishingcharters/items/736523/?full-items=yes&flow=1650138',
    bookTripLabel: 'Book A Inshore Fishing Trip',
    intro: [
      'Shallow water fishing in South Florida strips away the noise and puts you right in the thick of it. Snook lurk under docks, redfish slide across the flats, and tarpon roll through channels as the tide swings. Our Fort Lauderdale inshore fishing charters work the same water Captain Jason grew up on, with a Rhodan trolling motor that gets you in close without spooking a fish. Trips run out of Cox Landing, with quick access to Whiskey Creek, the Intracoastal, and the Stranahan River system.',
      'Fort Lauderdale inshore fishing charters open up a side of South Florida most visitors never see. The Intracoastal Waterway runs the length of the city, fed by the New River and Stranahan River, with mangrove edges, dock lines, deeper channels, and grass flats all within minutes of the home dock. That mix of structure is why snook, tarpon, redfish, spotted seatrout, jack crevalle, barracuda, and snapper all live within an easy run of the home dock.',
      'The fish play their own schedule. Snook stack up under lit docks and bridge shadows after dark, and the early-morning low-light hours are when they crush a live bait or a plug worked across a piling. Tarpon roll through the deeper channels and around inlets, biggest fish in late spring and summer when they migrate up the coast, smaller juveniles in the backwaters year-round. Redfish work the grass flats and oyster bars on a moving tide, and we sight fish them when the water is clear.',
      'Spotted seatrout hold over the deeper grass and bite small jigs and shrimp. Jacks blow up bait pods in the channels and will fight harder than any fish their size has a right to. Barracuda hang on the edges of the flats and crush a fast-moving tube lure.',
      'The boat for inshore is the same 32-foot Contender, with the Rhodan trolling motor doing the close-in work. The Rhodan is whisper-quiet and holds position with GPS spot-lock, which matters when you are casting at fish in two feet of water. We run light spinning gear, 10 to 20 pound class for most of the inshore species, with live shrimp, pilchards, mullet, jigs, and topwater plugs depending on what is working.',
      'Inshore trips work for almost anyone. Half-day at four hours is the most popular slot, but full-day inshore trips are absolutely on the table if you want to chase tarpon hard or work multiple tide phases. Kids do great inshore because the action stays close and steady.',
      "Beginners learn the basics fast because the casting distances are short. Experienced anglers love it for the technical side — reading water, working the trolling motor in tight quarters, and setting the hook on a snook that just inhaled your bait under a dock.",
      'Same as every Cool Runnings trip, we carry all the gear, bait, ice, coolers, and Florida fishing licenses for your party. We clean and bag any keeper fish at the dock when we get in. Catch and release is the standard for snook, tarpon, and redfish, all of which are heavily regulated in Florida. Captain Jason handles every release to give the fish the best shot at swimming off strong.',
    ],
    secondaryImage: {
      src: '/images/services/inshore-fishing-1.webp',
      alt: 'Inshore Fishing on the Cool Runnings 32 Contender',
    },
    whyDifferent: {
      eyebrow: 'The Inshore Playbook',
      heading: 'Fishing the Intracoastal Like a Local',
      body: 'The Fort Lauderdale Intracoastal is not one fishery, it is a stack of small fisheries that change with the tide, the time of day, and the season. We fish the New River for snook in the heat of summer when the bigger fish push into the cooler, deeper water. Whiskey Creek and the mangroves hold tarpon on the spring migration and redfish that work the grass flats on a moving tide. The bridges at Las Olas Boulevard and 17th Street Causeway are night-bite snook spots after the lights come on, and the dock lines through the Las Olas finger islands hold fish almost year-round. Captain Jason has been fishing this water since he was a kid — the Rhodan trolling motor on the Contender means we can ease into spots that bigger, louder boats blow out before they ever drop a bait.',
      image: {
        src: '/images/gallery/inshore/snook1.webp',
        alt: 'Where we fish for inshore fishing out of Fort Lauderdale',
      },
    },
    knowBeforeBook: {
      eyebrow: 'Know Before You Book',
      heading: 'When Inshore Beats Offshore',
      bullets: [
        'First-time anglers or kids — the bite is steady and the boat stays calm',
        'Anyone prone to seasickness — no open-ocean swell',
        'Sight-fishing enthusiasts — you can see the fish you are casting to',
        'Catch-and-release purists — snook, tarpon, and redfish are nearly all released',
        'Light-tackle fans — 10 to 20 pound spinning gear is the standard',
        'Shorter weather windows — inshore is fishable when offshore is blown out',
        'Photographers — you stay close to the mangroves, bridges, and skyline shots',
        'Half-day fishermen — four hours inshore can mean a dozen species shots',
      ],
    },
    dayPlay: {
      eyebrow: 'On the Water',
      heading: 'The Inshore Routine',
      image: {
        src: '/images/gallery/inshore/201809242106293-image4.webp',
        alt: 'Cool Runnings inshore fishing trip in progress',
      },
      steps: [
        { title: 'Tide-Timed Departure', body: 'Inshore trips run on the tide, not the clock. Captain Jason picks the launch time based on when the fish will be most active — dawn for snook, moving tide for redfish, slack for tarpon.' },
        { title: 'Bait Up and Run', body: "Quick stop for live shrimp or pilchards if the bite calls for it, then a short run to the day's first spot in the Intracoastal, the flats, or the river system." },
        { title: 'Trolling Motor In', body: 'Engines off, Rhodan trolling motor down, and we ease into casting range. Stealth matters in skinny water — spook a snook off a dock once and it is gone for an hour.' },
        { title: 'Work the Spot', body: 'Cast, retrieve, set the hook, fight the fish. Captain Jason coaches the technique, repositions the boat, and finds the next pocket of fish when the bite slows.' },
        { title: 'Photos and Release', body: 'Quick photo of any catch-and-release fish, then a clean release. Keeper species like snapper get iced down. Back to the dock for cleaning and bagging.' },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Anglers Choose Cool Runnings',
      heading: 'Why Inshore Charters Hit Different',
      bullets: [
        'Lifelong South Florida captain who learned this water as a kid',
        'Rhodan trolling motor keeps the boat quiet in skinny water',
        'Steady action close to the marina means more bites per hour',
        "Great for kids, first-timers, and anglers who don't love rough water",
        'Light-tackle spin gear for snook, tarpon, redfish, jacks, and seatrout',
        'Catch-and-release done right by a captain who handles every fish',
        'Fishable on days when offshore is blown out',
      ],
    },
    faqs: [
      { question: 'What species do you target inshore around Fort Lauderdale?', answer: 'The Fort Lauderdale inshore list is snook, tarpon, redfish, spotted seatrout, jack crevalle, barracuda, and snapper. Snook live on the dock lines and under bridge lights, tarpon roll through the deeper channels and around the inlets, redfish work the grass flats on the tide, and seatrout hold over deeper grass. Snook, tarpon, and redfish are mostly catch-and-release under Florida regulations.' },
      { question: 'Is inshore fishing good for kids and first-time anglers?', answer: 'Inshore is the best option for kids and beginners by a wide margin. The boat stays in calm water inside the Intracoastal, the run is short, the bite stays steady, and the casts are short enough for a brand new angler to learn fast. A half-day inshore trip is the right length for kids and new anglers.' },
      { question: 'What is the best time of year for inshore fishing in Fort Lauderdale?', answer: 'Inshore fishes year-round here. Snook are strongest spring and fall, and get aggressive on the dock lines after dark in summer. Tarpon are biggest in late spring and summer during the migration, with juveniles around year-round. Redfish work the grass flats best in fall and winter. Seatrout pick up in cooler months.' },
      { question: 'Do I need to know how to fish to go inshore?', answer: 'No experience required. Captain Jason coaches casting, retrieving, hook-setting, and fighting fish in real time. The casts inshore are short, usually 20 to 40 feet, so even a complete beginner can put the bait where it needs to be with five minutes of instruction.' },
      { question: 'Can we keep the fish we catch?', answer: 'Some yes, some no. Snook, tarpon, and redfish are heavily regulated in Florida and are nearly always catch-and-release on our boat. Snapper and seatrout that meet the legal slot can come home with you. Captain Jason handles every release carefully to give the fish the best shot at swimming off strong.' },
      { question: 'What is the difference between inshore and offshore fishing for a first trip?', answer: 'Inshore stays in calm, sheltered water inside the Intracoastal, runs short distances, uses light spinning tackle, and produces steady action on smaller-to-medium fish like snook, redfish, and tarpon. Offshore runs five to twelve miles out to the Gulf Stream, uses heavier gear, and targets bigger pelagic fish. Inshore is better for kids, beginners, and anyone prone to seasickness.' },
    ],
  },
  {
    slug: 'bottom-fishing',
    href: '/services/bottom-fishing/',
    title: 'Bottom Fishing Charters',
    tag: 'Bottom Fishing',
    species: ['Mangrove Snapper', 'Mutton Snapper', 'Grouper', 'Amberjack', 'Triggerfish', 'Cobia'],
    cardDescription:
      'Drop baits over reefs and wrecks off Fort Lauderdale for snapper, grouper, amberjack, triggerfish, and more. Steady action, dinner-quality fish, half or full days.',
    metaTitle: 'Fort Lauderdale Bottom Fishing Charters | Snapper & Grouper',
    metaDescription:
      'Fort Lauderdale bottom fishing charters with Captain Jason. Drop baits over reefs and wrecks for snapper, grouper, amberjack, and triggerfish.',
    heroImage: '/images/gallery/offshore/f4ecda89-893e-40db-984b-2b7337e58647.webp',
    heroImageAlt: 'Bottom Fishing Charters on the 32 Contender out of Fort Lauderdale',
    h1: 'Fort Lauderdale Bottom Fishing Charters',
    heroSubtitle: 'Reef and wreck fishing for snapper, grouper, and amberjack on the structure off Fort Lauderdale.',
    itemBookingUrl:
      'https://fareharbor.com/embeds/book/coolrunningssportfishingcharters/items/736661/?full-items=yes&flow=1650138',
    bookTripLabel: 'Book A Bottom Fishing Trip',
    intro: [
      'Bottom fishing off Fort Lauderdale is where steady action meets dinner-quality fish. The reefs and wrecks east of the beach hold mangrove snapper, yellowtail snapper, mutton snapper, and four kinds of grouper, plus the bigger fights when amberjack and cobia move in on the wrecks. Our Fort Lauderdale bottom fishing charters are the right call when you want a cooler full of fillets without a long offshore run. Trips depart from Cox Landing with a quick run to the structure that produces.',
      'Fort Lauderdale bottom fishing charters work the layered reef system that runs the length of the South Florida coast. The first reef line sits in 30 to 60 feet of water just a couple miles off the beach and holds mangrove snapper, yellowtail snapper, and the smaller groupers year-round. The second and third reefs out to 80 or 100 feet bring in the bigger mutton snapper, gag grouper, and red grouper, plus amberjack stacked up on the high-relief wrecks.',
      'Push past 150 feet to the deep ledges and you get into snowy grouper, vermilion snapper, golden tile fish, and the bigger barrel fish on the right tackle. Captain Jason has spent years cataloging which structure produces in which conditions, with GPS marks off Hillsboro Inlet, off Port Everglades, and down toward the Dania-Hollywood shoreline.',
      'The species list is what makes bottom fishing the most consistent trip we run. Mangrove snapper are the steady producer — school up on almost any reef structure, hit shrimp and small live baits hard, and make outstanding table fare. Yellowtail snapper bite a chum slick like nothing else. Mutton snapper are the trophy of the reef, big enough to test your drag.',
      'Red grouper, black grouper, and gag grouper hide in the rocks and you have to muscle them out fast before they wrap you up. Greater amberjack stack on the deep wrecks and will absolutely whip you — an AJ over 50 pounds is a real fight on stand-up gear. Triggerfish are the bonus from the reef, small but stubborn. Cobia patrol the wrecks year-round.',
      'The boat handles all of it. The 32-foot Contender with twin Yamaha 300s gets us to the deep ledges fast and holds anchor or drift cleanly over the reef. We run conventional gear with heavy weights for the deeper drops, lighter spinning gear for the chum-and-yellowtail approach, and stout stand-up tackle for the amberjack on the wrecks.',
      'Bottom fishing trips suit a wide range of anglers. Beginners do well because the technique is straightforward — drop, feel the bite, lift the rod, reel hard. Kids stay engaged because the bite is constant once you find a productive piece of structure. Experienced anglers love the size class on the deep wrecks and ledges.',
      'We supply heavy bottom rigs, conventional reels, terminal tackle, cut bait and live wells, plus iced coolers and the saltwater fishing license that covers your full party. We clean and bag every keeper fish at the dock. Snapper and grouper fillets are some of the best eating in Florida, and most parties go home with enough fish for several dinners.',
    ],
    secondaryImage: {
      src: '/images/services/bottom-fishing-1.webp',
      alt: 'Bottom Fishing catch from a Cool Runnings charter',
    },
    whyDifferent: {
      eyebrow: 'Reef & Wreck Intel',
      heading: 'Knowing Which Structure Produces and When',
      body: 'The Fort Lauderdale reef system is one of the most accessible structure fisheries in Florida. Knowing which spot to drop on a given day is the difference between a slow afternoon and a cooler full of fillets. The shallow first reef in 30 to 60 feet holds mangrove snapper and small groupers year-round. The second and third reefs out toward 100 feet are where the mutton snapper and bigger gag and red grouper live. The high-relief wrecks in 80 to 150 feet are amberjack and cobia structure and have produced some of our best stand-up fights. Decades on these reefs have shown us where the fish hold — which way the current pushes after a north wind, which wrecks reload after a strong full-moon tide, and how to drop a chum slick that lights up a yellowtail snapper bite.',
      image: {
        src: '/images/gallery/offshore/img-0648.webp',
        alt: 'Where we fish for bottom fishing out of Fort Lauderdale',
      },
    },
    knowBeforeBook: {
      eyebrow: 'Know Before You Book',
      heading: 'How Bottom Fishing Works on Our Boat',
      bullets: [
        'Anchored or drifting over reef and wreck structure in 30 to 150-plus feet',
        'Heavier conventional tackle for the deep stuff, light spin for the chum bite',
        'Steady, constant action once we are on a productive piece of structure',
        'Most catch is keeper-quality and goes home cleaned and bagged',
        'Trip works in most weather windows when offshore is too rough',
        'Bottom fish fight hard and short, very different from a long pelagic battle',
        'Some snags are normal — structure fishing means losing a rig every now and then',
        'Kids and beginners pick up the technique fast — drop, feel, lift, reel',
      ],
    },
    dayPlay: {
      eyebrow: 'On the Water',
      heading: 'Setting Up Over Structure',
      image: {
        src: '/images/gallery/offshore/003feb9d-d356-4059-8270-6fd1897b9105.webp',
        alt: 'Cool Runnings bottom fishing trip in progress',
      },
      steps: [
        { title: 'Quick Run Offshore', body: 'Run 10 to 30 minutes east from the home dock to the first productive structure, depending on whether we are working the shallow reef, the wrecks, or the deep ledges.' },
        { title: 'Mark the Fish', body: 'Captain Jason watches the sonar to find the fish on the structure before we drop. Wasting time on dead spots is what kills bottom trips, so we look first and drop second.' },
        { title: 'Anchor or Drift', body: 'Set the boat to keep baits in the strike zone. Some structure fishes best on anchor, some on a controlled drift, some on the Rhodan trolling motor for fine positioning.' },
        { title: 'Drop, Feel, Lift', body: 'Send the bait to the bottom, then lift it a foot or two off the rocks. Wait for the bite, set the hook, and reel hard to pull the fish away from structure before it wraps you.' },
        { title: 'Iced Down and Cleaned', body: 'Every keeper hits the ice immediately to lock in the quality of the fillets. Back at the dock we clean and bag your fish so it goes home ready to cook.' },
      ],
    },
    whyChoose: {
      eyebrow: 'Why Anglers Choose Cool Runnings',
      heading: 'Why Reef Trips Always Produce',
      bullets: [
        'Most consistent action of the three trip types — the reef almost always bites',
        'Big haul of dinner-quality fillets to take home and cook',
        'Suits beginners, kids, and experienced anglers equally well',
        'Fishable in most weather windows when offshore is blown out',
        'Captain Jason has years of GPS marks on the productive structure',
        'Cleaning and bagging at the dock means easy transition from boat to kitchen',
        'Half-day option keeps the cost down without sacrificing the catch',
      ],
    },
    faqs: [
      { question: 'What species can I expect on a bottom fishing trip off Fort Lauderdale?', answer: 'The realistic Fort Lauderdale bottom list runs deep: mangrove snapper, yellowtail snapper, mutton snapper, red grouper, black grouper, gag grouper, greater amberjack, triggerfish, cobia, reef sharks, barracuda, and vermilion snapper. On full-day deep-drop trips we add snowy grouper, black belly rosefish, barrel fish, and golden tile fish.' },
      { question: 'How deep do you fish on a bottom trip?', answer: 'Depths run from 30 feet on the shallow first reef to 150 feet on the deep wrecks, with deep-drop trips pushing 600 feet for snowy grouper and tile fish on full-day runs. Shallow reef works for kids and beginners; the deep wrecks bring in the amberjack and bigger mutton snapper.' },
      { question: 'Can I keep what I catch on a bottom trip?', answer: 'Yes, most bottom fish are keeper species and come home with you. Mangrove snapper, yellowtail snapper, mutton snapper, the various grouper species, triggerfish, and amberjack all have legal slots and bag limits, which Captain Jason follows to the letter. We ice the fish down immediately, then clean and bag everything at the dock.' },
      { question: 'Is bottom fishing harder than inshore or offshore?', answer: 'Bottom fishing is the most beginner-friendly of the three trip types in terms of technique — drop the bait, lift it a foot off the structure, wait for the bite, set the hook, reel hard. Kids pick it up in five minutes. The harder part is the strength to pull a fish away from the structure before it wraps you up.' },
      { question: 'How long should a bottom fishing trip be?', answer: 'Half-day at four hours is plenty for a solid mangrove snapper and yellowtail bite. Three-quarter day at six hours is the most flexible slot, hitting both shallow reef and deeper wrecks. Full-day at eight hours opens up the deep-drop trips and gives the most time to chase a trophy amberjack.' },
      { question: 'What if the wreck or reef is not biting that day?', answer: 'We move. Captain Jason carries dozens of marked spots on the GPS across the shallow reef, mid-depth wrecks, and deep ledges. If the first drop is slow, we pick up and try the next piece of structure.' },
    ],
  },
];
