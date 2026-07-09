// SunPeak Solar — System Monitoring Service Page
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

export default function SystemMonitoringPage() {

  const expectations = [
    { icon: faSearch,       title: "Performance Baseline", description: "We establish expected production so underperformance is obvious." },
    { icon: faFileContract, title: "Clear Reporting", description: "Plain-English updates — not raw data dumps you have to interpret alone." },
    { icon: faCheckCircle,  title: "Proactive Alerts", description: "When production drops, we investigate instead of waiting for you to notice." },
    { icon: faShieldHalved, title: "Support Path to Repair", description: "Monitoring ties into maintenance and repair so issues get fixed." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Catch Issues Early", description: "Inverter faults and string underperformance rarely announce themselves on the bill first week." },
    { icon: faWrench,       title: "Works With Our Installs", description: "Best experience on systems we installed — orphaned systems evaluated case by case." },
    { icon: faShieldHalved, title: "Local Support", description: "A Waco team that answers when something looks wrong." },
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
    { question: "Do I need monitoring if my inverter app works?", answer: "Apps help, but proactive local support catches issues you might miss between check-ins." },
    { question: "Can you monitor systems installed by others?", answer: "Often yes, depending on equipment access. We evaluate compatibility first." },
    { question: "What happens if production drops?", answer: "We investigate, report findings, and quote repair if needed — with transparent pricing." },
    { question: "Is monitoring a long contract?", answer: "We prefer month-to-month style support relationships — no hostage contracts." },
    { question: "Does monitoring include cleaning?", answer: "Monitoring is performance oversight; cleaning and hardware service are available under maintenance." },
    { question: "How do I get started?", answer: "Call (254) 810-1010 or request a consult online with your system details." },
  ];

  const crossServices = [
    { icon: faTools, title: "Solar Maintenance", body: "Cleaning and hardware service.", link: "/services/solar-maintenance" },
    { icon: faSolarPanel, title: "Residential Solar", body: "New systems with monitoring built in.", link: "/services/residential-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Monitor solar and storage together.", link: "/services/battery-storage" },
    { icon: faIndustry, title: "Commercial Solar", body: "Facility production oversight.", link: "/services/commercial-solar" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "System Monitoring" },
      ]} />

      <SectionIntro
        title="System Monitoring in Waco, TX"
        subtitle="Production tracking, proactive alerts, and performance reports so you know your array is earning every day — not just on day one."
      />

      <TrustBar headline="Monitoring that catches issues before your bill does" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What You Get With System Monitoring" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/system-monitoring" title="System Monitoring Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="System Monitoring FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Want Eyes on Your Production?"
        subline="Alerts, reports, and support when performance dips."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Enroll in System Monitoring" cityName="Waco" slug="services/system-monitoring" spot="system-monitoring-page-form" formVariant={2} />
      </div>

    </main>
  );
}