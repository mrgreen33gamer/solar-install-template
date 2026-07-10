// SunPeak Welcome — unique "Array Production Console" (not blueprint / materials grid).
// CSS roof array + live metrics + storage strip. Zero stock photos.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

const METRICS = [
  { label: 'Live output', value: '6.8 kW', bar: 78 },
  { label: 'Today', value: '31.2 kWh', bar: 64 },
  { label: 'Offset', value: '94%', bar: 94 },
  { label: 'Battery', value: '82%', bar: 82 },
];

const MODULE_ROWS = 4;
const MODULE_COLS = 5;

function ArrayProductionConsole() {
  return (
    <div className={styles.prodConsole} aria-label="SunPeak array production console">
      <div className={styles.consoleTop} aria-hidden="true">
        <span className={styles.consoleLed} />
        <span className={styles.consoleBrand}>SUNPEAK · SITE MONITOR</span>
        <span className={styles.consoleChip}>8.4 kW</span>
      </div>

      <header className={styles.consoleHead}>
        <div>
          <p className={styles.consoleEyebrow}>Design proposal preview</p>
          <h2 className={styles.consoleTitle}>Array Console</h2>
        </div>
        <div className={styles.consoleStatus}>
          <span className={styles.statusPulse} />
          Producing
        </div>
      </header>

      {/* Isometric-ish roof with CSS modules */}
      <div className={styles.arrayStage} aria-hidden="true">
        <div className={styles.sunBurst} />
        <div className={styles.roofDeck}>
          <div className={styles.roofRidge} />
          <div className={styles.moduleGrid}>
            {Array.from({ length: MODULE_ROWS * MODULE_COLS }).map((_, i) => (
              <motion.span
                key={i}
                className={styles.module}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: [0.55, 1, 0.7, 1] }}
                transition={{
                  duration: 2.8,
                  delay: 0.4 + (i % MODULE_COLS) * 0.08 + Math.floor(i / MODULE_COLS) * 0.05,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
              />
            ))}
          </div>
          <div className={styles.inverterBox}>
            <span>INV</span>
          </div>
          <div className={styles.batteryBox}>
            <span className={styles.battFill} />
            <em>BAT</em>
          </div>
        </div>
        <div className={styles.arrayMeta}>
          <span>20 modules · south plane</span>
          <span>Enphase-ready path</span>
        </div>
      </div>

      <ul className={styles.metricList} role="list">
        {METRICS.map((m, i) => (
          <motion.li
            key={m.label}
            className={styles.metricRow}
            role="listitem"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
          >
            <div className={styles.metricLabelRow}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue}>{m.value}</span>
            </div>
            <div className={styles.metricTrack}>
              <motion.div
                className={styles.metricFill}
                initial={{ width: 0 }}
                animate={{ width: `${m.bar}%` }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
              />
            </div>
          </motion.li>
        ))}
      </ul>

      <footer className={styles.consoleFoot} aria-hidden="true">
        <span>25-yr panel support</span>
        <span className={styles.consoleRule} />
        <span>NABCEP-aligned crews</span>
      </footer>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Trusted Solar Installer — Since 2016";
  const headlineLines = ['Power Your Home.', 'Cut Your Bill.'];
  const headlineAccent = 'SunPeak Solar.';
  const subheadline =
    'Residential & Commercial Solar Installation. Transparent design proposals. Battery storage & EV charging. 25-Year Panel Performance Support + 10-Year Workmanship. Serving Waco and Central Texas with NABCEP-aligned installers.';
  const primaryCta = { label: 'Call (254) 810-1010', href: 'tel:+12548101010' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Free Design Consult',
    'No High-Pressure Sales',
    'NABCEP-Aligned',
    'Since 2016',
    '25-Year Panel Support',
  ];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <ArrayProductionConsole />
        </motion.div>
      </div>
    </section>
  );
}
