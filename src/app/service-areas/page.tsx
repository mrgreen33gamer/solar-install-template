// src/app/service-areas/page.tsx
// SunPeak Solar — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest design consult and install scheduling. Full residential solar, commercial solar, battery storage, EV charger + solar, monitoring, and maintenance across all of Waco.',
    highlights:  ['Home base scheduling', 'All services available', 'Local crews'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full solar coverage for Hewitt homes and businesses. Fast consult scheduling from our Waco base.',
    highlights:  ['Residential & commercial', 'Battery options', 'Transparent proposals'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway's residential neighborhoods with the same transparent pricing and 25-Year Panel Performance Support + 10-Year Workmanship as every other area we cover.",
    highlights:  ['Transparent pricing', '25-Year panel support', 'NABCEP-aligned'],
  },
  {
    city:        'Bellmead',
    slug:        'bellmead-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable solar design and installation for Bellmead residents and businesses.',
    highlights:  ['Residential & commercial', 'NABCEP-aligned installers', 'Local support'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential solar for the China Spring area — ground-mount and ranch-friendly designs when roofs are limited.',
    highlights:  ['Rural coverage', 'Ground-mount options', 'Battery-ready designs'],
  },
  {
    city:        'McGregor',
    slug:        'mcgregor-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Solar for McGregor homes, shops, and light industrial properties.',
    highlights:  ['Shop & residential', 'Commercial options', 'Local crews'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Solar installation and upgrades for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Residential & commercial', 'Battery options'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service solar coverage for Temple. Medical district and surrounding neighborhoods served — residential and commercial.',
    highlights:  ['Full service coverage', 'All neighborhoods', 'Commercial & residential'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco. Call (254) 810-1010 to confirm your address.',
  },
  {
    question: 'Is there a trip charge for outlying areas?',
    answer: 'Most addresses in our primary service area have no separate trip fee on standard design consults. Remote sites are confirmed when you schedule.',
  },
  {
    question: 'Do you offer the same warranties everywhere?',
    answer: 'Yes — 25-Year Panel Performance Support + 10-Year Workmanship applies across our service area on installs we complete.',
  },
  {
    question: 'Can you serve commercial sites outside Waco?',
    answer: 'Yes. Commercial solar, monitoring, and maintenance are available across the same Central Texas footprint.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Coverage Map</span>
          <h1 className={styles.title}>Solar Service Areas Across Central Texas</h1>
          <p className={styles.sub}>
            Based in Waco and serving homes and businesses throughout McLennan and Bell counties — and most addresses within about 60 miles.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {SERVICE_AREAS.map((area, i) => (
            <motion.article
              key={area.city}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
            >
              <div className={styles.cardTop}>
                <h2 className={styles.city}>{area.city}</h2>
                {area.badge ? <span className={styles.badge}>{area.badge}</span> : null}
              </div>
              <p className={styles.county}>{area.county}</p>
              <p className={styles.desc}>{area.description}</p>
              <ul className={styles.highlights}>
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.cardLink}>
                Request a consult in {area.city} →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="Not Sure If We Cover Your Address?"
        subline="Call (254) 810-1010 — we will confirm coverage in under a minute."
        primaryText="Call (254) 810-1010"
        primaryLink="tel:+12548101010"
        secondaryText="Contact Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
