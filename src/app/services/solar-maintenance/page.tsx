// SunPeak Solar — Solar Maintenance Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faSolarPanel, faIndustry, faBatteryFull,
  faCarBattery, faChartLine, faTools, faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export default function SolarMaintenancePage() {

  const expectations = [
    { icon: faSearch,       title: "Full System Check", description: "Visual array inspection, inverter status, and production review." },
    { icon: faFileContract, title: "Findings in Plain English", description: "What we found, what can wait, and what needs attention now." },
    { icon: faCheckCircle,  title: "Cleaning & Minor Fixes", description: "Debris, soiling, and simple corrections that recover production." },
    { icon: faShieldHalved, title: "Repair Quotes Before Work", description: "If larger repairs are needed, you get a written price first." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Orphaned System Friendly", description: "Previous installer gone? We still service many third-party systems." },
    { icon: faWrench,       title: "Texas Dust & Pollen", description: "Central Texas soiling is real — cleaning can restore lost production." },
    { icon: faShieldHalved, title: "Honest Recommendations", description: "We will not invent emergencies to sell unnecessary work." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule a free design consult.", icon: faHeadset },
    { number: 2, title: "Site Survey & Design", description: "We assess roof, shade, and usage, then present a clear system design.", icon: faSearch },
    { number: 3, title: "Written Proposal", description: "Equipment, production estimate, and firm price before you commit.", icon: faFileContract },
    { number: 4, title: "Install & Activate", description: "Permits, install, interconnection, monitoring — warrantied workmanship.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 10,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest design and install scheduling.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and light commercial coverage.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular project route.", badge: "" },
    { town: "China Spring", benefit: "Rural and acreage property coverage.", badge: "" },
    { town: "Temple",       benefit: "Full solar service for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Transparent written proposal", us: "✅ Always", others: "❌ Sales-only estimates" },
    { feature: "25-Year Panel Performance Support + 10-Year Workmanship", us: "✅ Every install", others: "❌ Rare or limited" },
    { feature: "NABCEP-aligned installers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Local ownership — not a franchise call center", us: "✅ Since 2016", others: "❌ Often out-of-state" },
    { feature: "Battery & EV integration options", us: "✅ Designed in", others: "❌ Upsell later" },
  ];

  const faq = [
    { question: "How often should solar panels be maintained?", answer: "Many Central Texas systems benefit from annual checks and cleaning depending on dust, pollen, and bird activity." },
    { question: "Do you service systems you did not install?", answer: "Often yes. We assess access, equipment, and safety first." },
    { question: "Will cleaning void my warranty?", answer: "Proper professional cleaning should not — we follow manufacturer guidance." },
    { question: "What if you find a failed inverter?", answer: "We document it, explain options, and provide a flat-rate repair or replacement quote." },
    { question: "Is maintenance a long contract?", answer: "Month-to-month style plans available — no multi-year lock-in." },
    { question: "Can monitoring pair with maintenance?", answer: "Yes — monitoring plus scheduled service is the best long-term combo." },
  ];

  const crossServices = [
    { icon: faChartLine, title: "System Monitoring", body: "Catch issues between visits.", link: "/services/system-monitoring" },
    { icon: faSolarPanel, title: "Residential Solar", body: "Considering a new system?", link: "/services/residential-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Add resilience to an existing array.", link: "/services/battery-storage" },
    { icon: faIndustry, title: "Commercial Solar", body: "Commercial O&M support.", link: "/services/commercial-solar" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Solar Maintenance" },
      ]} />

      <SectionIntro
        title="Solar Maintenance in Waco, TX"
        subtitle="Panel cleaning, inverter checks, and repair for systems we installed — or systems orphaned when another installer disappeared."
      />

      <TrustBar headline="Keep production healthy year after year" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on a Solar Maintenance Visit" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Chooses SunPeak Solar" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/solar-maintenance" title="Solar Maintenance Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Solar Maintenance FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Is Your Array Still Performing?"
        subline="Cleaning, diagnostics, and honest repair quotes — no scare tactics."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Schedule Solar Maintenance" cityName="Waco" slug="services/solar-maintenance" spot="solar-maintenance-page-form" formVariant={2} />
      </div>

    </main>
  );
}