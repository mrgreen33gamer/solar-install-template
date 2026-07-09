// SunPeak Solar — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faSolarPanel, faIndustry, faBatteryFull, faCarBattery, faChartLine, faTools,
  faTrophy, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faSolarPanel,
      title: "Residential Solar",
      body: "Custom rooftop and ground-mount systems designed for Central Texas sun, roof type, and your monthly usage — from design through interconnection.",
      link: "/services/residential-solar",
    },
    {
      icon: faIndustry,
      title: "Commercial Solar",
      body: "Warehouse, retail, and office arrays that cut demand charges and lock in long-term energy costs for your business.",
      link: "/services/commercial-solar",
    },
    {
      icon: faBatteryFull,
      title: "Battery Storage",
      body: "Home and light-commercial batteries sized for outages, self-consumption, and evening rate savings — with app monitoring included.",
      link: "/services/battery-storage",
    },
    {
      icon: faCarBattery,
      title: "EV Charger + Solar",
      body: "Level 2 chargers integrated with your solar design so you drive on sunshine, not peak utility rates.",
      link: "/services/ev-charger-solar",
    },
    {
      icon: faChartLine,
      title: "System Monitoring",
      body: "Production tracking, proactive alerts, and performance reports so you know your array is earning every day.",
      link: "/services/system-monitoring",
    },
    {
      icon: faTools,
      title: "Solar Maintenance",
      body: "Panel cleaning, inverter checks, and repair for systems we installed — or systems orphaned by another company.",
      link: "/services/solar-maintenance",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 10,   label: "Years of local solar experience",          suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Transparent Design Proposals",
      description: "You get a clear production estimate, equipment list, and firm install price before you commit. No bait-and-switch pricing.",
    },
    {
      icon: faShieldHalved,
      title: "NABCEP-Aligned Installers",
      description: "Every crew follows industry best practices. Bonded, insured, and accountable — no fly-by-night roof work.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2016",
      description: "We're not a door-to-door sales franchise. SunPeak Solar was founded in Waco by Avery Quinn. Decisions stay local.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll schedule a free design consult that fits your calendar.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Site Survey & Design",
      description: "We assess roof, shade, and usage, then present a system design with expected production — in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "Proposal You Can Trust",
      description: "Written scope, equipment brands, warranties, and price. You decide — zero high-pressure tactics.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Install, Inspect, Activate",
      description: "Permits, install, utility interconnection, and monitoring setup. Backed by 25-Year Panel Performance Support + 10-Year Workmanship.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Sizing",
      description: "We design for your actual usage and roof — not the biggest package on the price sheet.",
    },
    {
      icon: faTools,
      title: "Clean, Respectful Work",
      description: "Roof protection, tidy wiring, and a clean jobsite. Your home left the way we found it.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Written Pricing",
      description: "Proposal before install. The number doesn't jump when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Gear & Warranties",
      description: "Tier-1 panels and proven inverters with manufacturer warranties plus our workmanship coverage.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest design and install scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and light commercial coverage. On our regular route.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — reliable project turnaround.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage for ranches and acreage properties.",                   badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does a residential solar system cost in Waco?",
      answer: "Most home systems fall in a range based on size, roof complexity, and equipment. We provide a free design consult and a written proposal so you see production estimates and pricing before you commit.",
    },
    {
      question: "How long does installation take?",
      answer: "Typical residential installs take 1–3 days on-site after permits. Full timeline from signed proposal to utility permission-to-operate often runs a few weeks depending on utility and city inspections.",
    },
    {
      question: "Do you handle permits and utility interconnection?",
      answer: "Yes. SunPeak Solar manages design, permits, interconnection paperwork, and inspection coordination so you are not stuck navigating the process alone.",
    },
    {
      question: "What solar services do you offer?",
      answer: "Residential solar, commercial solar, battery storage, EV charger + solar, system monitoring, and solar maintenance.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — SunPeak Solar is bonded and insured with NABCEP-aligned installers. Credentials available on request.",
    },
    {
      question: "What warranties do you offer?",
      answer: "25-Year Panel Performance Support plus a 10-Year Workmanship warranty covering labor and installation defects, alongside manufacturer equipment warranties.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <WelcomePage />

      <TrustBar
        headline="Waco's trusted solar company — NABCEP-aligned, insured, and warrantied on every install"
      />

      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Solar Services for Your Home & Business"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes SunPeak Solar Different"
        />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Request a Free Solar Design Consult"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Ready to Cut Your Electric Bill With Solar?"
        subline="Free design consults across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Transparent proposals. 25-Year Panel Performance Support + 10-Year Workmanship."
        primaryText="Call (254) 810-1010"
        primaryLink="tel:+12548101010"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>

      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Project, Every Time"
          expectations={expectations}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Solar Questions — Answered Straight"
        />
      </div>

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

    </main>
  );
}
