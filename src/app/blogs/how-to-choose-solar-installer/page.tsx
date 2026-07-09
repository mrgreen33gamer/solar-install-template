'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faShieldHalved, faWrench, faClock, faHouseChimney, faDollarSign, faFileContract, faUsers } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Choosing a solar installer in Waco is as important as choosing the panels themselves. A great design on paper can fail if workmanship, communication, or local support falls short. Use this checklist before you sign.",
  },
  {
    type: 'cards',
    heading: 'Installer Checklist',
    cards: [
      { icon: faShieldHalved, title: 'Credentials and insurance', body: 'Ask for proof of bonding/insurance and how crews are trained. NABCEP-aligned practices are a strong signal.' },
      { icon: faFileContract, title: 'Written scope and warranties', body: 'You should see equipment list, production estimate, workmanship warranty, and what is excluded — in writing.' },
      { icon: faDollarSign, title: 'Transparent pricing', body: 'Beware of “today only” pressure. A real proposal stands on its own without countdown timers.' },
      { icon: faWrench, title: 'Local service after install', body: 'Who answers when production drops in year three? Local companies still answer phones.' },
      { icon: faUsers, title: 'Design quality, not just sales', body: 'Shade analysis, roof assessment, and electrical review matter more than free gift cards.' },
      { icon: faClock, title: 'Permit and interconnection process', body: 'Ask who handles paperwork and typical timelines to permission-to-operate.' },
      { icon: faHouseChimney, title: 'Roof and electrical craftsmanship', body: 'Flashings, wire management, and labeling separate pros from quick flips.' },
    ],
  },
  {
    type: 'table',
    heading: 'Red Flags vs Green Flags',
    tableHeaders: ['Topic', 'Green Flag', 'Red Flag'],
    tableRows: [
      ['Proposal', 'Written production + firm price', 'Verbal-only quotes'],
      ['Sales style', 'Time to review at home', 'Sign today or lose the deal'],
      ['Warranties', 'Clear workmanship term', 'Only manufacturer parts coverage'],
      ['Service', 'Local phone number and techs', 'Out-of-state call center only'],
      ['Design', 'Site survey before final price', 'Size from a photo only'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Interview at least two installers and compare production estimates, warranties, and who does the roof work. Call SunPeak Solar at (254) 810-1010 — no high-pressure sales.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Request proof of insurance and local references',
      'Compare written proposals side by side',
      'Ask who installs (employees vs random subs)',
      'Confirm monitoring and maintenance options',
      'Read workmanship warranty terms carefully',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Choose a Solar Installer in Waco, TX"
        description="Licenses, warranties, design quality, and red flags. A practical checklist for hiring a solar installer you can trust in Central Texas."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="How to choose a solar installer in Waco TX"
        category="Buying Guide"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Transparent Proposal?"
        body="SunPeak Solar is locally owned in Waco — NABCEP-aligned installers, clear warranties, no high-pressure tactics."
        buttonText="Talk to SunPeak Solar"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-to-choose-solar-installer-blog" />
    </>
  );
}
