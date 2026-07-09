// SunPeak Solar — EV Charger + Solar Service Page
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

export default function EvChargerSolarPage() {

  const expectations = [
    { icon: faSearch,       title: "Panel & Load Check", description: "We verify electrical capacity and recommend circuit sizing for your vehicle." },
    { icon: faFileContract, title: "Solar-Aware Plan", description: "Where possible, we align charging with solar production and rate strategy." },
    { icon: faCheckCircle,  title: "Clean Wall / Garage Install", description: "Neat conduit, proper mounting, and inspection-ready work." },
    { icon: faShieldHalved, title: "Warranty Support", description: "Workmanship coverage plus manufacturer support on equipment." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "One Team for Solar + Charging", description: "No finger-pointing between solar and electrician vendors." },
    { icon: faWrench,       title: "Home & Light Commercial", description: "Residences, small fleets, and workplace Level 2 setups." },
    { icon: faShieldHalved, title: "Code-Compliant Electrical", description: "Safe installs that pass inspection the first time." },
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
    { question: "Do I need solar to install an EV charger?", answer: "No — but pairing solar often reduces the cost of charging long-term." },
    { question: "What is Level 2 charging?", answer: "Faster home/workplace charging (typically 240V) compared to a standard wall outlet." },
    { question: "Can my electrical panel support a charger?", answer: "We evaluate capacity during the site visit and recommend upgrades only if needed." },
    { question: "Will solar power my car directly?", answer: "Solar offsets household usage including EV charging; batteries can increase self-consumption further." },
    { question: "How long does charger install take?", answer: "Many Level 2 installs complete in a day once materials and permits (if required) are ready." },
    { question: "Do you install for apartments or workplaces?", answer: "Light commercial and multi-unit common areas can be scoped — contact us with site details." },
  ];

  const crossServices = [
    { icon: faSolarPanel, title: "Residential Solar", body: "Generate the power you drive on.", link: "/services/residential-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Store daytime solar for evening charge.", link: "/services/battery-storage" },
    { icon: faChartLine, title: "System Monitoring", body: "Track production and usage.", link: "/services/system-monitoring" },
    { icon: faTools, title: "Solar Maintenance", body: "Keep the whole system healthy.", link: "/services/solar-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "EV Charger + Solar" },
      ]} />

      <SectionIntro
        title="EV Charger + Solar in Waco, TX"
        subtitle="Level 2 EV chargers designed with your solar system so more of your miles come from the roof — not peak utility rates."
      />

      <TrustBar headline="EV charging integrated with solar design" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on an EV Charger + Solar Project" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/ev-charger-solar" title="EV Charger + Solar Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="EV Charger + Solar FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Drive on Sunshine?"
        subline="Level 2 installs. Solar-aware load planning. Clean electrical work."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request EV Charger + Solar Info" cityName="Waco" slug="services/ev-charger-solar" spot="ev-charger-solar-page-form" formVariant={2} />
      </div>

    </main>
  );
}