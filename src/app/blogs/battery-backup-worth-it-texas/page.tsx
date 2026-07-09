'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faShieldHalved, faClock, faHouseChimney, faDollarSign, faCarBattery, faChartLine } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Battery backup is one of the most asked questions we hear in Central Texas. Storms, grid events, and rising rates make storage attractive — but not every home needs the same capacity. Here is how to decide if a battery is worth it for your situation.",
  },
  {
    type: 'cards',
    heading: 'When Batteries Make Sense',
    cards: [
      { icon: faBolt, title: 'Frequent or long outages', body: 'If you lose power often — or need medical equipment, wells, or refrigeration online — storage has clear value.' },
      { icon: faHouseChimney, title: 'Critical loads you must protect', body: 'You do not always need whole-home backup. Critical-load panels can lower cost while covering essentials.' },
      { icon: faDollarSign, title: 'Self-consumption goals', body: 'Use more of your own solar after sunset instead of exporting at low rates and buying high later.' },
      { icon: faChartLine, title: 'Rate structures that reward storage', body: 'Time-of-use or demand-sensitive bills can improve battery economics.' },
      { icon: faCarBattery, title: 'EV charging overnight', body: 'Stored solar can reduce charging costs when the car plugs in after dark.' },
      { icon: faShieldHalved, title: 'Peace of mind', body: 'Some buyers value resilience more than pure ROI — and that is a valid reason when sized honestly.' },
      { icon: faClock, title: 'Solar-ready electrical design', body: 'New solar installs can be designed for easier battery add-ons later if you are not ready now.' },
    ],
  },
  {
    type: 'table',
    heading: 'Battery Decision Framework',
    tableHeaders: ['Question', 'If Yes…', 'If No…'],
    tableRows: [
      ['Do outages disrupt critical loads?', 'Prioritize battery capacity', 'Solar-only may be enough'],
      ['Do you want evening self-consumption?', 'Model storage economics', 'Focus on array size first'],
      ['Is whole-home backup required?', 'Budget for larger capacity', 'Consider critical-load design'],
      ['Is the inverter storage-ready?', 'Retrofit may be simpler', 'Plan hybrid/storage-ready gear'],
      ['Is local service available?', 'Proceed with confidence', 'Risk of orphaned equipment'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask for backup duration in hours for your critical loads — not vague marketing claims. Call SunPeak Solar at (254) 810-1010 for a battery consult.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List essential circuits you need during an outage',
      'Note how long outages typically last at your address',
      'Decide whole-home vs critical-load backup goals',
      'Ask if your existing solar is storage-compatible',
      'Request a written capacity and price proposal',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Is Battery Backup Worth It in Texas?"
        description="Storm outages, time-of-use rates, and energy independence — when a home battery makes sense in Central Texas, and when it may not."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Home battery backup worth it in Texas guide"
        category="Storage"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Curious About Battery Backup?"
        body="SunPeak Solar sizes storage honestly for Central Texas homes — no oversell."
        buttonText="Explore Battery Storage"
        buttonHref="/services/battery-storage"
      />
      <NewsletterSignup variant={1} spot="battery-backup-worth-it-texas-blog" />
    </>
  );
}
