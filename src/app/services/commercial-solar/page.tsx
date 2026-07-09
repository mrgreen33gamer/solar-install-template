// SunPeak Solar — Commercial Solar Service Page
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

export default function CommercialSolarPage() {

  const expectations = [
    { icon: faSearch,       title: "Load & Roof Assessment", description: "We analyze demand, roof structure, and electrical service for a realistic system design." },
    { icon: faFileContract, title: "Business-Ready Proposal", description: "Clear ROI framing, equipment specs, and install schedule that respects operations." },
    { icon: faCheckCircle,  title: "Phased Install Options", description: "Weekend or after-hours work when needed so your business keeps running." },
    { icon: faShieldHalved, title: "Warrantied Workmanship", description: "25-Year Panel Performance Support + 10-Year Workmanship on our commercial installs." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Minimal Downtime Planning", description: "We schedule around your operations — not the other way around." },
    { icon: faWrench,       title: "Commercial-Grade Gear", description: "Inverters, racking, and monitoring sized for business duty cycles." },
    { icon: faShieldHalved, title: "COIs & Compliance Ready", description: "Insurance certificates and documentation for facility managers on request." },
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
    { question: "What commercial properties are a good fit?", answer: "Warehouses, retail, offices, multi-unit common areas, and light industrial with adequate roof or land space." },
    { question: "Can you install without shutting us down?", answer: "Often yes. We plan phases, staging, and after-hours work when operations require it." },
    { question: "Do you help with incentives and interconnection?", answer: "We manage utility interconnection paperwork and can walk you through available incentives as they apply to your project." },
    { question: "How is commercial ROI estimated?", answer: "From your usage data, rate structure, and system production model — presented clearly in the proposal." },
    { question: "Do you offer O&M after install?", answer: "Yes — monitoring and maintenance plans keep production healthy after commissioning." },
    { question: "Are you insured for commercial sites?", answer: "Yes — bonded and insured with credentials available for vendor onboarding." },
  ];

  const crossServices = [
    { icon: faSolarPanel, title: "Residential Solar", body: "Home systems with the same quality standards.", link: "/services/residential-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Resilience for critical loads.", link: "/services/battery-storage" },
    { icon: faChartLine, title: "System Monitoring", body: "Facility production dashboards.", link: "/services/system-monitoring" },
    { icon: faTools, title: "Solar Maintenance", body: "Keep commercial arrays producing.", link: "/services/solar-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Solar" },
      ]} />

      <SectionIntro
        title="Commercial Solar in Waco, TX"
        subtitle="Warehouse, retail, and office solar that cuts energy costs and locks in long-term rates — designed, permitted, and commissioned for Central Texas businesses."
      />

      <TrustBar headline="Commercial solar designed for Central Texas facilities" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on a Commercial Solar Project" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-solar" title="Commercial Solar Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Solar FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Cut Facility Energy Costs?"
        subline="Portfolio-ready proposals. Minimal operational disruption. NABCEP-aligned crews."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Commercial Solar Proposal" cityName="Waco" slug="services/commercial-solar" spot="commercial-solar-page-form" formVariant={2} />
      </div>

    </main>
  );
}