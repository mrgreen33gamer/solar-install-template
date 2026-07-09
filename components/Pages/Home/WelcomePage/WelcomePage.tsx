// Solar Install Hero — Roof Plane with Panel Grid + Inverter Path
// Trade-specific blueprint (not generic house). Draw-in + setTimeout safety.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function BlueprintSchematic({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));

    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 400;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.55s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.28 + i * 0.05}s`;
      window.setTimeout(() => {
        el.style.strokeDashoffset = '0';
      }, 2200 + i * 40);
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <div className={styles.rBadge} aria-hidden="true">
        8.4 kW ARRAY
      </div>
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Roof plane outline (isometric-ish trapezoid) */}
        <path
          data-draw
          d="M48 200 L100 70 L300 70 L340 200 Z"
          className={styles.traceMain}
        />
        {/* Ridge line */}
        <line data-draw x1="100" y1="70" x2="300" y2="70" className={styles.traceAccent} />
        {/* Hip / eave details */}
        <line data-draw x1="48" y1="200" x2="340" y2="200" className={styles.traceDim} />
        <line data-draw x1="174" y1="70" x2="194" y2="200" className={styles.traceDim} />

        {/* Solar panel grid — left roof plane */}
        <rect data-draw x="90" y="90" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="130" y="90" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="90" y="116" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="130" y="116" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="90" y="142" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="130" y="142" width="36" height="22" className={styles.traceAccent} />

        {/* Solar panel grid — right roof plane */}
        <rect data-draw x="210" y="90" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="250" y="90" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="210" y="116" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="250" y="116" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="210" y="142" width="36" height="22" className={styles.traceAccent} />
        <rect data-draw x="250" y="142" width="36" height="22" className={styles.traceAccent} />

        {/* Cell crosshairs on a few modules */}
        <line data-draw x1="90" y1="101" x2="126" y2="101" className={styles.traceDim} />
        <line data-draw x1="108" y1="90" x2="108" y2="112" className={styles.traceDim} />
        <line data-draw x1="250" y1="127" x2="286" y2="127" className={styles.traceDim} />
        <line data-draw x1="268" y1="116" x2="268" y2="138" className={styles.traceDim} />

        {/* DC string home-run toward junction */}
        <polyline
          data-draw
          points="148,153 148,175 190,175 190,200"
          className={styles.traceMain}
        />
        <polyline
          data-draw
          points="228,153 228,168 190,168"
          className={styles.traceMain}
        />

        {/* Conduit down wall to inverter */}
        <line data-draw x1="190" y1="200" x2="190" y2="248" className={styles.traceMain} />
        <rect data-draw x="168" y="248" width="44" height="32" rx="2" className={styles.traceAccent} />
        {/* Inverter vents / label marks */}
        <line data-draw x1="176" y1="258" x2="204" y2="258" className={styles.traceDim} />
        <line data-draw x1="176" y1="266" x2="204" y2="266" className={styles.traceDim} />

        {/* AC run to main panel */}
        <polyline
          data-draw
          points="212,264 250,264 250,248 290,248"
          className={styles.traceMain}
        />
        <rect data-draw x="290" y="232" width="32" height="36" className={styles.traceMain} />
        <line data-draw x1="296" y1="240" x2="316" y2="240" className={styles.traceDim} />
        <line data-draw x1="296" y1="248" x2="316" y2="248" className={styles.traceDim} />
        <line data-draw x1="296" y1="256" x2="310" y2="256" className={styles.traceAccent} />

        {/* Utility meter / disconnect */}
        <circle data-draw cx="306" cy="210" r="12" className={styles.traceDim} />
        <line data-draw x1="306" y1="198" x2="306" y2="222" className={styles.traceDim} />
        <line data-draw x1="306" y1="222" x2="306" y2="232" className={styles.traceAccent} />

        {/* Sun vector arrows (production metaphor) */}
        <path data-draw d="M200 28 L200 52" className={styles.traceAccent} />
        <path data-draw d="M192 42 L200 52 L208 42" className={styles.traceAccent} />
        <path data-draw d="M165 34 L175 48" className={styles.traceDim} />
        <path data-draw d="M235 34 L225 48" className={styles.traceDim} />

        {/* Ground mount hint (optional pad) */}
        <rect data-draw x="48" y="248" width="50" height="28" className={styles.traceDim} />
        <line data-draw x1="56" y1="256" x2="90" y2="256" className={styles.traceDim} />
        <line data-draw x1="56" y1="264" x2="90" y2="264" className={styles.traceDim} />

        {/* Nodes */}
        <circle cx="148" cy="153" r="3" className={styles.node} />
        <circle cx="228" cy="153" r="3" className={styles.node} />
        <circle cx="190" cy="200" r="3.5" className={styles.nodeAccent} />
        <circle cx="190" cy="264" r="3.5" className={styles.nodeAccent} />
        <circle cx="306" cy="250" r="3" className={styles.node} />
        <circle cx="200" cy="28" r="3.5" className={styles.nodeAccent} />
        <circle cx="108" cy="101" r="2.5" className={styles.node} />
        <circle cx="268" cy="127" r="2.5" className={styles.node} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        ROOF ARRAY
      </div>
      <div className={styles.layerLegend} aria-hidden="true">
        <span>
          <i className={styles.legBatt} /> Modules
        </span>
        <span>
          <i className={styles.legFoam} /> DC / AC path
        </span>
        <span>
          <i className={styles.legAir} /> Inverter
        </span>
      </div>
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
  const schematicLabel = 'SunPeak schematic';

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
          <BlueprintSchematic label={schematicLabel} />
        </motion.div>
      </div>
    </section>
  );
}
