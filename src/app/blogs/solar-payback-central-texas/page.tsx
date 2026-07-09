'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faChartLine, faShieldHalved, faWrench, faClock, faHouseChimney, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Solar payback in Central Texas is not a single magic number. Utility rates, system size, roof orientation, incentives, and how much power you use during daylight hours all move the timeline. Here is a practical framework for Waco-area homeowners — without the sales pitch.",
  },
  {
    type: 'cards',
    heading: 'What Actually Moves Payback',
    cards: [
      { icon: faDollarSign, title: 'Your electric rate and usage', body: 'Higher bills and higher rates generally mean faster payback. Bring 12 months of usage if you can.' },
      { icon: faBolt, title: 'System size vs. real production', body: 'An oversized system on a shaded roof underperforms. Design quality matters more than panel count marketing.' },
      { icon: faChartLine, title: 'Incentives and financing', body: 'Federal and local incentives can change cash flow. Financing can lower monthly pain but may extend break-even.' },
      { icon: faShieldHalved, title: 'Equipment and workmanship warranties', body: 'A cheap system that needs constant repair is not a bargain. Ask about panel performance support and install warranties.' },
      { icon: faWrench, title: 'Roof condition and complexity', body: 'Roof repairs, steep pitches, and multi-story installs add cost — better planned upfront than mid-project.' },
      { icon: faClock, title: 'Timeline to permission-to-operate', body: 'You start saving after interconnection. A clean permit process protects the payback calendar.' },
      { icon: faHouseChimney, title: 'Self-consumption habits', body: 'Running major loads during solar production hours improves economics — batteries can help further.' },
    ],
  },
  {
    type: 'table',
    heading: 'Payback Planning Checklist',
    tableHeaders: ['Step', 'Do This', 'Avoid This'],
    tableRows: [
      ['1', 'Pull 12 months of kWh usage', 'Guessing from one summer bill'],
      ['2', 'Get a shade and roof assessment', 'Buying based on a door-knock pitch'],
      ['3', 'Compare production estimates apples-to-apples', 'Focusing only on panel count'],
      ['4', 'Read warranties in plain English', 'Assuming all warranties are equal'],
      ['5', 'Ask who services the system locally', 'Signing with a company with no local presence'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask for a written production estimate and a firm install price before you commit. Call SunPeak Solar at (254) 810-1010 for a free design consult across Central Texas.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Collect a year of electric bills or usage data',
      'Note roof age and any planned roof work',
      'List evening or critical loads if considering battery',
      'Request a transparent proposal from a local installer',
      'Compare workmanship warranties, not just equipment brands',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Solar Payback in Central Texas: What Waco Homeowners Should Expect"
        description="How long until solar pays for itself in Waco and Central Texas? Real factors that move payback — rates, incentives, system size, and production — explained without the sales pitch."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Solar payback guide for Central Texas homeowners"
        category="Savings"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Real Payback Estimate for Your Home?"
        body="Get a free design consult from SunPeak Solar — NABCEP-aligned installers with transparent proposals."
        buttonText="Request a Design Consult"
        buttonHref="/services/residential-solar"
      />
      <NewsletterSignup variant={1} spot="solar-payback-central-texas-blog" />
    </>
  );
}
