// SunPeak Solar — Residential Solar Service Page
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

export default function ResidentialSolarPage() {

  const expectations = [
    { icon: faSearch,       title: "Usage-Based System Design", description: "We size your array from actual bills and roof data — not a one-size package." },
    { icon: faFileContract, title: "Written Proposal Before You Commit", description: "Production estimates, equipment list, and firm price. No bait-and-switch." },
    { icon: faCheckCircle,  title: "Clean Install & Interconnection", description: "Permits, roof work, electrical, utility paperwork — managed end-to-end." },
    { icon: faShieldHalved, title: "25-Year Panel Performance Support + 10-Year Workmanship", description: "Long-term coverage on performance support and our install workmanship." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Local Crews, Local Decisions", description: "Waco-based since 2016. You talk to people who install what they sell." },
    { icon: faWrench,       title: "Roof-Ready Craftsmanship", description: "Flashings, racking, and wire management done for Texas heat and storms." },
    { icon: faShieldHalved, title: "NABCEP-Aligned Installers", description: "Industry best practices on every job — no unlicensed freelancers on your roof." },
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
    { question: "How much does residential solar cost in Waco?", answer: "Cost depends on system size, roof complexity, and equipment. We provide a free design consult and a written proposal with production estimates before you commit." },
    { question: "How long does a home solar install take?", answer: "Most residential installs take 1–3 days on-site after permits. Full timeline to utility permission-to-operate often runs a few weeks." },
    { question: "Do you handle permits and utility paperwork?", answer: "Yes. SunPeak Solar manages design, permits, interconnection, and inspections so you are not stuck navigating the process alone." },
    { question: "Will solar work on my roof?", answer: "We assess orientation, shade, structure, and age. If solar is not a good fit, we will say so — and explain alternatives like battery readiness later." },
    { question: "What warranties are included?", answer: "Manufacturer equipment warranties plus 25-Year Panel Performance Support and a 10-Year Workmanship warranty from SunPeak Solar." },
    { question: "Can I add a battery later?", answer: "Often yes. We can design inverter and panel layouts with future storage in mind — or size a battery package now." },
  ];

  const crossServices = [
    { icon: faBatteryFull, title: "Battery Storage", body: "Backup power and evening self-consumption.", link: "/services/battery-storage" },
    { icon: faCarBattery,  title: "EV Charger + Solar", body: "Drive on sunshine with Level 2 charging.", link: "/services/ev-charger-solar" },
    { icon: faChartLine,   title: "System Monitoring", body: "Know your production every day.", link: "/services/system-monitoring" },
    { icon: faTools,       title: "Solar Maintenance", body: "Cleaning, repair, and long-term care.", link: "/services/solar-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Residential Solar" },
      ]} />

      <SectionIntro
        title="Residential Solar in Waco, TX"
        subtitle="Custom rooftop and ground-mount solar designed for Central Texas sun — transparent proposals, quality equipment, and 25-Year Panel Performance Support + 10-Year Workmanship."
      />

      <TrustBar headline="1,200+ Central Texas systems installed by SunPeak Solar" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Request Residential Solar" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/residential-solar" title="Residential Solar Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Residential Solar FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Put Solar on Your Home?"
        subline="Free design consults. Transparent proposals. NABCEP-aligned installers."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Residential Solar Design Consult" cityName="Waco" slug="services/residential-solar" spot="residential-solar-page-form" formVariant={2} />
      </div>

    </main>
  );
}