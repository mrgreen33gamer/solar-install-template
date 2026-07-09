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

export default function AgricultureIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Grid outages stop pumps and operations", consequence: "Livestock, irrigation, and cold storage cannot wait on utility restoration." },
    { icon: faFileInvoiceDollar, problem: "Rising rural electric costs", consequence: "Ag loads run long hours — utility bills erode thin margins." },
    { icon: faUsers, problem: "Installers who only know suburban roofs", consequence: "Ground-mount, long runs, and farm structures get mis-designed." },
    { icon: faHardHat, problem: "Unreliable service after install", consequence: "Rural sites get deprioritized when something fails." },
    { icon: faClipboardList, problem: "Unclear production expectations", consequence: "Sales promises do not match actual ranch loads." },
    { icon: faHandshake, problem: "No one understands seasonal demand", consequence: "Systems undersized for peak irrigation or harvest loads." },
  ];

  const whyFeatures = [
    { icon: faHardHat, title: "Rural-Ready Design", description: "Ground-mount, shop roofs, and pump loads — designed for how ranches actually run." },
    { icon: faFileInvoiceDollar, title: "Honest Load Sizing", description: "We size for real equipment schedules, not marketing kit sizes." },
    { icon: faUsers, title: "Local Aftercare", description: "A Waco team that still shows up when you need service." },
  ];

  const processSteps = [
    { number: 1, title: "Site & Load Review", description: "We walk wells, shops, and meters with you.", icon: faSearch },
    { number: 2, title: "Resilience Plan", description: "Solar and optional battery for critical loads.", icon: faCalendarAlt },
    { number: 3, title: "Install", description: "Clean install suited to rural access and equipment.", icon: faRocket },
    { number: 4, title: "Support", description: "Monitoring and maintenance when you need it.", icon: faClipboardList },
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
    { question: "Can solar run well pumps?", answer: "Often yes with proper electrical design; batteries may be recommended for outages." },
    { question: "Do you do ground-mount systems?", answer: "Yes — common for ranches with open acreage and limited roof options." },
    { question: "How far out do you service?", answer: "Most locations within about 60 miles of Waco — call to confirm your address." },
    { question: "Can we phase a project?", answer: "Yes — start with critical loads and expand as budget allows." },
    { question: "Do you maintain systems after install?", answer: "Yes — monitoring and maintenance plans available." },
  ];

  const services = [
    { icon: faSolarPanel, title: "Residential Solar", body: "Homestead and ranch house systems.", link: "/services/residential-solar" },
    { icon: faIndustry, title: "Commercial Solar", body: "Shops, barns, and ag facilities.", link: "/services/commercial-solar" },
    { icon: faBatteryFull, title: "Battery Storage", body: "Keep critical loads online.", link: "/services/battery-storage" },
    { icon: faTools, title: "Solar Maintenance", body: "Dust, pollen, and rural wear.", link: "/services/solar-maintenance" },
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Agriculture & Ranches" }]} />
      <SectionIntro title="Agriculture & Ranches" subtitle="Solar for ranches, pumps, shops, and ag facilities — resilient power for rural Central Texas operations." />
      <TrustBar headline="Organizations across Central Texas trust SunPeak Solar" />
      <div className={styles.section}><IndustryPainPoints industry="agriculture" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Your Industry" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Used Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/agriculture" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Agriculture & Ranches FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request an Industry Proposal" cityName="Waco" slug="industries/agriculture" spot="agriculture-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Solar Built for Ranch & Ag Reality?" subline="Transparent proposals. NABCEP-aligned installers. Local support." primaryText="Call (254) 810-1010" primaryLink="tel:+12548101010" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}