// SunPeak Solar — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSolarPanel, faIndustry, faBatteryFull, faCarBattery, faChartLine, faTools,
  faTrophy, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faSolarPanel,  title: "Residential Solar",  body: "Custom rooftop and ground-mount systems designed for Central Texas sun, roof type, and your monthly usage.", link: "/services/residential-solar" },
    { icon: faIndustry,    title: "Commercial Solar",   body: "Warehouse, retail, and office arrays that cut demand charges and lock in long-term energy costs.", link: "/services/commercial-solar" },
    { icon: faBatteryFull, title: "Battery Storage",    body: "Home and light-commercial batteries sized for outages, self-consumption, and evening rate savings.", link: "/services/battery-storage" },
    { icon: faCarBattery,  title: "EV Charger + Solar", body: "Level 2 chargers integrated with your solar design so you drive on sunshine.", link: "/services/ev-charger-solar" },
    { icon: faChartLine,   title: "System Monitoring",  body: "Production tracking, proactive alerts, and performance reports.", link: "/services/system-monitoring" },
    { icon: faTools,       title: "Solar Maintenance",  body: "Panel cleaning, inverter checks, and repair for systems we installed — or orphaned systems.", link: "/services/solar-maintenance" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Transparent Written Proposals", description: "Firm scope and price before install. No high-pressure sales, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "NABCEP-Aligned Installers",  description: "Every crew follows industry best practices. Bonded, insured, and accountable." },
    { icon: faUsers,          title: "Locally Owned Since 2016", description: "Founded in Waco by Avery Quinn. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a free design consult.", icon: faHeadset },
    { number: 2, title: "Site Survey & Design", description: "We assess roof, shade, and usage, then present a clear system design.", icon: faSearch },
    { number: 3, title: "Written Proposal", description: "Equipment, production estimate, and firm price. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Install & Activate", description: "Permits, install, interconnection, monitoring — 25-Year Panel Performance Support + 10-Year Workmanship.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 10,   label: "Years of local solar experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does solar cost in Waco?", answer: "Cost depends on system size, roof complexity, and equipment. We provide a free design consult and a written proposal with production estimates before you commit." },
    { question: "What brands do you install?", answer: "We specify tier-1 panels and proven inverters matched to your design. Exact brands are listed clearly on every proposal." },
    { question: "Do you offer monitoring and maintenance?", answer: "Yes — system monitoring and solar maintenance plans keep production healthy long after install day." },
    { question: "Do you install batteries and EV chargers?", answer: "Yes — battery storage and EV charger + solar packages are core services." },
    { question: "Are you bonded and insured?", answer: "Yes — SunPeak Solar is bonded and insured with NABCEP-aligned installers." },
    { question: "What warranties do you offer?", answer: "25-Year Panel Performance Support plus a 10-Year Workmanship Warranty, alongside manufacturer equipment warranties." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Solar Services for Waco & Central Texas"
        subtitle="Residential & commercial solar, battery storage, EV charging, monitoring, and maintenance — designed honestly, installed cleanly, backed by 25-Year Panel Performance Support + 10-Year Workmanship."
      />

      <TrustBar headline="1,200+ Central Texas systems installed by SunPeak Solar" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose SunPeak" />
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
        <FAQ cityName="Waco" faq={faq} title="Solar Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Solar Design Consult" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready to Go Solar?"
        subline="Free design consults available. Transparent proposals. 25-Year Panel Performance Support + 10-Year Workmanship."
        primaryText="Call (254) 810-1010"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
