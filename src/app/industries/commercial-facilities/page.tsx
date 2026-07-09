"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faHardHat, faClipboardList, faHandshake, faBuilding,
  faRocket, faTrophy, faChartLine, faClock,
  faSolarPanel, faIndustry, faBatteryFull, faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialFacilitiesIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Installs that disrupt operations", consequence: "Lost production and tenant complaints erase energy savings." },
    { icon: faFileInvoiceDollar, problem: "Unclear ROI and vague proposals", consequence: "Facilities teams cannot defend CapEx without hard numbers." },
    { icon: faUsers, problem: "Multiple vendors for design, install, O&M", consequence: "Finger-pointing when production underperforms." },
    { icon: faBuilding, problem: "Roof warranty and structural concerns", consequence: "Bad racking choices create future liability." },
    { icon: faClipboardList, problem: "Missing COIs and compliance docs", consequence: "Procurement stalls and projects die in vendor onboarding." },
    { icon: faHandshake, problem: "Sales-only solar companies", consequence: "Nobody answers when the system needs service." },
  ];

  const whyFeatures = [
    { icon: faHardHat, title: "Operations-Aware Scheduling", description: "Phased installs and after-hours work when your facility requires it." },
    { icon: faFileInvoiceDollar, title: "Facilities-Friendly Proposals", description: "Clear scopes, production models, and documentation for approval chains." },
    { icon: faUsers, title: "One Partner for Lifecycle", description: "Design, install, monitoring, and maintenance under one local team." },
  ];

  const processSteps = [
    { number: 1, title: "Facility Assessment", description: "Roof, electrical service, and usage analysis.", icon: faSearch },
    { number: 2, title: "Business Case", description: "Written proposal with production and schedule.", icon: faCalendarAlt },
    { number: 3, title: "Install & Commission", description: "Minimal disruption, inspection-ready work.", icon: faRocket },
    { number: 4, title: "O&M Path", description: "Monitoring and maintenance options after go-live.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "Organization projects completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Client satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 10, label: "Years serving Central Texas orgs", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Org-specific design proposals", us: "✅ Always", others: "❌ Generic packages" },
    { feature: "Local Waco ownership", us: "✅ Since 2016", others: "❌ Out-of-state sales" },
    { feature: "NABCEP-aligned crews", us: "✅ Always", others: "❌ Mixed" },
    { feature: "Transparent pricing", us: "✅ Before work", others: "❌ Ambiguous" },
    { feature: "25-Year panel performance support", us: "✅ Included", others: "❌ Limited" },
  ];

  const faq = [
    { question: "Can you install without shutting us down?", answer: "Often yes — we plan phases and after-hours work when needed." },
    { question: "Do you provide COIs?", answer: "Yes — insurance certificates available for vendor onboarding." },
    { question: "What facility types do you serve?", answer: "Warehouses, retail, offices, multi-site portfolios, and light industrial." },
    { question: "Do you offer ongoing O&M?", answer: "Yes — monitoring and maintenance keep production healthy." },
    { question: "How is ROI presented?", answer: "From your usage data and rate structure — clearly in the proposal." },
  ];

  const services = [
    { icon: faIndustry, title: "Commercial Solar", body: "Rooftop and facility arrays.", link: "/services/commercial-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Critical load resilience.", link: "/services/battery-storage" },
    { icon: faChartLine, title: "System Monitoring", body: "Facility production oversight.", link: "/services/system-monitoring" },
    { icon: faTools, title: "Solar Maintenance", body: "Keep arrays producing.", link: "/services/solar-maintenance" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for B2B coordination.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Active growth corridor.", badge: "" },
    { town: "Woodway", benefit: "Premium residential and commercial.", badge: "" },
    { town: "Temple", benefit: "Bell County commercial corridor.", badge: "" },
    { town: "China Spring", benefit: "Rural and ag properties.", badge: "" },
    { town: "Killeen", benefit: "Multi-site and military-market.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Commercial Facilities" }]} />
      <SectionIntro title="Commercial Facilities" subtitle="Facility solar for warehouses, retail, and offices — lower operating costs with minimal disruption to daily operations." />
      <TrustBar headline="Organizations across Central Texas trust SunPeak Solar" />
      <div className={styles.section}><IndustryPainPoints industry="commercial" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Your Industry" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Used Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/commercial-facilities" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Facilities FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request an Industry Proposal" cityName="Waco" slug="industries/commercial-facilities" spot="commercial-facilities-industry-form" formVariant={2} /></div>
      <CTABanner headline="Ready to Cut Facility Energy Costs?" subline="Transparent proposals. NABCEP-aligned installers. Local support." primaryText="Call (254) 810-1010" primaryLink="tel:+12548101010" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}