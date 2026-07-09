// SunPeak Solar — Battery Storage Service Page
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

export default function BatteryStoragePage() {

  const expectations = [
    { icon: faSearch,       title: "Critical Load Review", description: "We identify what you need during an outage — fridge, well pump, medical devices, AC loads." },
    { icon: faFileContract, title: "Clear Capacity Proposal", description: "kWh sizing, backup duration, and price before install — no mystery packages." },
    { icon: faCheckCircle,  title: "Clean Electrical Integration", description: "Proper transfer equipment, labeling, and inspection-ready work." },
    { icon: faShieldHalved, title: "Support After Install", description: "App walkthrough, monitoring, and workmanship coverage." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Storm-Ready Design", description: "Central Texas outages happen. We size for resilience, not just marketing numbers." },
    { icon: faWrench,       title: "Solar + Storage Expertise", description: "New systems or retrofit batteries on existing solar when compatible." },
    { icon: faShieldHalved, title: "Safety First Installs", description: "Code-compliant electrical work and clear homeowner guidance." },
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
    { question: "Is a battery worth it in Texas?", answer: "If you face frequent outages, need critical loads online, or want more self-consumption, yes for many homes. We model both scenarios honestly." },
    { question: "Can I add a battery to existing solar?", answer: "Often yes, depending on inverter type and electrical capacity. We evaluate compatibility first." },
    { question: "How long will a battery last in an outage?", answer: "It depends on capacity and loads. We estimate hours for your critical circuits, not vague marketing claims." },
    { question: "Do batteries work without solar?", answer: "Some configurations can charge from the grid, but pairing with solar maximizes value." },
    { question: "What about warranties?", answer: "Manufacturer battery warranties plus our workmanship coverage on the install." },
    { question: "Will it power my whole house?", answer: "Whole-home backup is possible with proper sizing; many clients choose critical-load backup for better cost efficiency." },
  ];

  const crossServices = [
    { icon: faSolarPanel, title: "Residential Solar", body: "Pair storage with a new array.", link: "/services/residential-solar" },
    { icon: faCarBattery, title: "EV Charger + Solar", body: "Charge vehicles efficiently.", link: "/services/ev-charger-solar" },
    { icon: faChartLine, title: "System Monitoring", body: "Watch solar and battery together.", link: "/services/system-monitoring" },
    { icon: faIndustry, title: "Commercial Solar", body: "Business resilience options.", link: "/services/commercial-solar" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Battery Storage" },
      ]} />

      <SectionIntro
        title="Battery Storage in Waco, TX"
        subtitle="Home and light-commercial batteries sized for outages, self-consumption, and evening rate savings — designed alongside your solar or as a retrofit."
      />

      <TrustBar headline="Battery backup designed for Texas storms and outages" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Add Battery Storage" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/battery-storage" title="Battery Storage Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Battery Storage FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Want Backup Power When the Grid Fails?"
        subline="Right-sized batteries. Clear capacity math. App monitoring included."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Battery Storage Consult" cityName="Waco" slug="services/battery-storage" spot="battery-storage-page-form" formVariant={2} />
      </div>

    </main>
  );
}