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

export default function HomebuildersIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Solar delays miss the close date", consequence: "Late interconnect and inspections delay CO and final draws." },
    { icon: faFileInvoiceDollar, problem: "Change orders on solar packages", consequence: "Unclear specs create budget fights with buyers and GCs." },
    { icon: faUsers, problem: "Inconsistent installer quality across lots", consequence: "Different crews leave different workmanship and documentation quality." },
    { icon: faHardHat, problem: "No coordination with other trades", consequence: "Roofers and electricians get blocked when solar is not sequenced." },
    { icon: faClipboardList, problem: "Warranty callbacks after close", consequence: "Poor workmanship shows up after the buyer moves in — reflecting on the builder." },
    { icon: faHandshake, problem: "Vendors who only do residential door-knock sales", consequence: "Sales-only outfits do not understand production home schedules." },
  ];

  const whyFeatures = [
    { icon: faHardHat, title: "Builder Production Rhythm", description: "We schedule design and install around dry-in, roof, and final so your calendar stays intact." },
    { icon: faFileInvoiceDollar, title: "Package Pricing by Plan", description: "Standard solar packages per floor plan with clear upgrade paths for buyers." },
    { icon: faUsers, title: "Consistent Crew Quality", description: "Same trained installers, same documentation — every lot, every phase." },
  ];

  const processSteps = [
    { number: 1, title: "Plan Spec Review", description: "We align system size and equipment packages to your plans.", icon: faSearch },
    { number: 2, title: "Phase Schedule", description: "Install windows tied to your production calendar and close dates.", icon: faCalendarAlt },
    { number: 3, title: "Install & Inspect", description: "Clean install, inspections, monitoring setup, punch list cleared.", icon: faRocket },
    { number: 4, title: "Buyer Handoff", description: "App walkthrough and warranty support so callbacks do not land on supers.", icon: faClipboardList },
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
    { question: "Do you work with production and custom homebuilders?", answer: "Yes — production homes, semi-custom, and remodelers across McLennan and Bell counties." },
    { question: "Can you match solar packages to specific floor plans?", answer: "Yes. We build standard packages per plan with optional buyer upgrades." },
    { question: "How do you handle punch lists before close?", answer: "We schedule a punch pass with your super and clear install issues before final walkthrough." },
    { question: "Do you handle interconnection paperwork?", answer: "Yes — permits and utility interconnection are part of our process." },
    { question: "What areas do you cover for builders?", answer: "Waco metro, Temple, Killeen, and surrounding Central Texas communities within about 60 miles." },
  ];

  const services = [
    { icon: faSolarPanel, title: "Residential Solar", body: "Plan-matched home systems on schedule.", link: "/services/residential-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Optional storage upgrades for buyers.", link: "/services/battery-storage" },
    { icon: faTools, title: "Solar Maintenance", body: "Post-close service that protects your brand.", link: "/services/solar-maintenance" },
    { icon: faIndustry, title: "Commercial Solar", body: "Model homes and sales office arrays.", link: "/services/commercial-solar" },
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Homebuilders" }]} />
      <SectionIntro title="Homebuilders" subtitle="Production-ready solar packages for new homes — consistent crews, plan pricing, and buyer-ready documentation." />
      <TrustBar headline="Organizations across Central Texas trust SunPeak Solar" />
      <div className={styles.section}><IndustryPainPoints industry="homebuilder" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Your Industry" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Used Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/homebuilders" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Homebuilders FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request an Industry Proposal" cityName="Waco" slug="industries/homebuilders" spot="homebuilders-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Solar Partner Who Hits Close Dates?" subline="Transparent proposals. NABCEP-aligned installers. Local support." primaryText="Call (254) 810-1010" primaryLink="tel:+12548101010" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}