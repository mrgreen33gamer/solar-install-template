// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for SunPeak Solar — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Residential Solar',
    text:     "Our summer electric bills were out of control. SunPeak Solar designed a clean roof array, handled the utility paperwork, and had us producing power within two weeks. Production matches what they promised — and the install crew was respectful of our roof and landscaping.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Battery Storage',
    text:     'We added battery backup after one too many storms knocked power out. Avery\'s team sized the storage correctly, walked us through the app, and we coasted through the next outage without a generator. Clear pricing, no upsell games.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'EV Charger + Solar',
    text:     'Had three companies quote solar + EV charging. SunPeak was honest about panel layout and amperage we actually needed — not just the biggest system. Clean install, charger works great, and they explained monitoring in plain English.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Commercial Solar',
    text:     'They put a commercial array on our warehouse roof over a weekend so we would not disrupt operations. Permits, interconnection, and commissioning were handled end-to-end. Professional from design to flip of the switch.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Solar Maintenance',
    text:     'Signed up for maintenance after our previous installer vanished. SunPeak cleaned panels, checked inverters, and fixed a ground-fault we did not know we had. Production jumped. My new go-to solar company for life.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'System Monitoring',
    text:     'Their monitoring caught a string underperformance before we noticed on the bill. Same-week fix, clear report, no drama. Worth every penny of the plan.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Residential Solar',
    text:     'From first site survey to first production day, SunPeak communicated every step. Financing options were explained without pressure. Highly recommend for Central Texas homeowners.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Battery Storage',
    text:     'Ranch property with unreliable grid. Battery + solar package has been rock solid. Crew treated the place with respect and finished on schedule. Thank you.',
  },
];

export default reviews;
