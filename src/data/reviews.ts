// Real, named Google reviews reproduced verbatim from the reference homepage
// (CLAUDE.md §4.2). Do not add or invent testimonials here.

export interface Review {
  name: string;
  tripType: string;
  quote: string;
}

export interface FullReview extends Review {
  /** tripType is '' when the reference site didn't label a trip type for this review. */
  date: string;
}

export const homeReviews: Review[] = [
  {
    name: 'Michael Goldberg',
    tripType: 'Offshore Trip',
    quote:
      'Capt Jason is the real deal! I have been doing private charters for 20 plus years. Capt Jason sensed that it was going to be a great day on the water and we crushed it.',
  },
  {
    name: 'Mila G',
    tripType: 'Offshore Trip',
    quote:
      "Had an amazing fishing experience yesterday with Jason. My husband caught his first Sailfish and first salt water fish in under an hour of setting up. Couldn't recommend Captain Jason more.",
  },
  {
    name: 'Tony Bragg',
    tripType: 'Offshore Trip',
    quote:
      'We had a great day fishing with Jason out of Fort Lauderdale. I highly recommend a day out on Cool Runnings Sport Fishing, we will be heading back out with him again soon.',
  },
  {
    name: 'Joe',
    tripType: 'Offshore Trip',
    quote:
      "Another excellent day on the water with Captain Jason on board cool runnings. Smooth ride on the 32' contender and skills for days. Was my sons first sailfish and he was hooked.",
  },
  {
    name: 'Xianchi Tang',
    tripType: 'Offshore Trip',
    quote:
      'Very nice day with Capt Jason. We got 2 king fish and 4 Blackfin Tuna. One of the Tuna exceeded 30lbs. Highly recommend Capt Jason. One of the best.',
  },
  {
    name: 'Rebeca Chan',
    tripType: 'Offshore Trip',
    quote:
      'It was such a fun experience! It was our first time offshore fishing and it was amazing. My younger son has never caught a fish before and he caught his 1st.',
  },
];

// Full set for /reviews/, sourced from https://www.fishcoolrunnings.com/reviews/
// (fetched live) — a sample of the real 69 Google reviews, reproduced verbatim.
export const allReviews: FullReview[] = [
  { name: 'Michael Goldberg', tripType: 'Offshore Trip', date: 'March 2026', quote: 'Capt Jason is the real deal! I have been doing private charters for 20 plus years. Capt Jason sensed that it was going to be a great day on the water and we crushed it.' },
  { name: 'Mila G', tripType: 'Offshore Trip', date: 'March 2026', quote: "Had an amazing fishing experience yesterday with Jason. My husband caught his first Sailfish and first salt water fish in under an hour of setting up. Couldn't recommend Captain Jason more." },
  { name: 'Tony Bragg', tripType: 'Offshore Trip', date: 'March 2026', quote: 'We had a great day fishing with Jason out of Fort Lauderdale. I highly recommend a day out on Cool Runnings Sport Fishing, we will be heading back out with him again soon.' },
  { name: 'Dustin Johnson', tripType: 'Bottom Fishing Trip', date: 'February 2026', quote: 'Super fun day! We caught a huge barracuda and lots of snappers!' },
  { name: 'Carter Fox', tripType: 'Offshore Trip', date: 'December 2025', quote: 'If you want to catch a fish and have a great time doing it Jason is the captain for you. On my first time out Jason helped me catch a sailfish, mahi, and several other fish.' },
  { name: 'Joe', tripType: 'Offshore Trip', date: 'November 2025', quote: "Another excellent day on the water with Captain Jason on board cool runnings. Smooth ride on the 32' contender and skills for days. Was my sons first sailfish and he was hooked." },
  { name: 'H B', tripType: 'Offshore Trip', date: 'November 2025', quote: "Highly recommend! We asked for mahi's and mahi's exactly what Jason delivered!! If you're looking to get on fish cool runnings is it." },
  { name: 'Johnny Cuellar', tripType: 'Offshore Trip', date: 'November 2025', quote: 'Great captain! Got us hooked up to Mahi mahi within minutes. Highly recommend.' },
  { name: 'Rob Marenco', tripType: '', date: 'November 2025', quote: "Went on my first fishing trip ever and it happened to be with Capt Jason. Honestly, couldn't have asked for a better time. Put us on to fish all day." },
  { name: 'Victor Rivera', tripType: '', date: 'November 2025', quote: 'Went Fishing for the first time with @Fishcoolrunnings. My group had a great time, Capt. Jason was very attentive and knowledgeable. He gave us a great experience.' },
  { name: 'Josiah Emdin', tripType: '', date: 'September 2024', quote: 'Captain Jason was very knowledgeable and took the time to educate the group on technique and different species of fish common in the area. Would absolutely book again.' },
  { name: 'Nick Pisciotta', tripType: 'Offshore Trip', date: 'March 2024', quote: "Captain Jason was awesome!! Caught two sailfish and a king mackerel. Highly knowledgeable. Other boats didn't do good the day we went and he still put us on fish." },
  { name: 'Sue Lim', tripType: '', date: 'March 2024', quote: 'HIGHLY RECOMMEND! Great experience despite the rough water conditions! Captain Jason was so professional and knowledgeable. He always made sure we were safe and having fun.' },
  { name: 'Tony Pham', tripType: '', date: 'March 2024', quote: 'Best ever with the best price in town. Jason not only became a friend but showed us a great time with fish to go home to our wives.' },
  { name: 'Steve Trask', tripType: '', date: 'July 2023', quote: 'Awesome day with Jason. He knows the area and he knows how to create the best experience. Will definitely do it again with him.' },
  { name: 'Rebeca Chan', tripType: 'Offshore Trip', date: 'July 2023', quote: 'It was such a fun experience! It was our first time offshore fishing and it was amazing. My younger son has never caught a fish before and he caught his 1st.' },
  { name: 'Xianchi Tang', tripType: 'Offshore Trip', date: 'May 2023', quote: 'Very nice day with Capt Jason. We got 2 king fish and 4 Blackfin Tuna. One of the Tuna exceeded 30lbs. Highly recommend Capt Jason. One of the best.' },
  { name: 'Catalina Pena', tripType: '', date: 'May 2023', quote: 'Cool Runnings was an excellent boat to be on! The captain made everyone feel super safe and comfortable. We had a great time! I would highly recommend.' },
  { name: 'Jose Antommarchi', tripType: '', date: 'May 2023', quote: 'I had a great experience with captain Jason. Very professional and knowledgeable. Nice boat. Overall an awesome time on the water.' },
  { name: 'Pamela Madera', tripType: '', date: 'May 2023', quote: "I can say as my first fishing experience, it was definitely memorable. Captain Jason is knowledgeable and fun!! I can't wait to book our next trip." },
  { name: 'Ani M', tripType: '', date: 'May 2023', quote: 'Jason is amazing and knowledgeable!!! I had the best time and would recommend!! Can\'t wait to go back!!' },
  { name: 'Freddy Garcia', tripType: '', date: 'May 2023', quote: 'HIGHLY RECOMMENDED! Jason is a knowledgeable and experienced Captain that will make sure you have the best day on the water. Top notch boat.' },
  { name: 'Andres Garcia', tripType: '', date: 'May 2023', quote: 'Jason was very knowledgeable and provides a great learning experience! Highly recommend.' },
  { name: 'Javier Rodriguez', tripType: '', date: 'May 2023', quote: 'Very nice and professional. Had a lovely day on the water fishing. Would recommend Jason 100 times out of 100.' },
];
