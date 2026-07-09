// SunPeak Solar — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2016",
      description: "SunPeak Solar was founded in Waco by Avery Quinn. We're not a franchise — every decision is made locally, every consult is with someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Roof",
      description: "Every installer on our team is background-checked, NABCEP-aligned, and bonded & insured. We treat every home with the same respect we'd want for our own families.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Consult",
      description: "We won't oversize a system to inflate the contract. We won't hide fees in financing fine print. Our reputation is built on straight talk.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 10,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a free design consult that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Design Honestly", description: "An NABCEP-aligned designer assesses your site and explains options in plain English — not just the most expensive one.", icon: faShieldHalved },
    { number: 3, title: "Written Proposal", description: "Production estimate and firm price before you commit. You decide — zero pressure.", icon: faBolt },
    { number: 4, title: "Done Right, Warrantied", description: "Quality equipment, clean workmanship, 25-Year Panel Performance Support + 10-Year Workmanship.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About SunPeak Solar"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2016. Residential & Commercial Solar Installation — honest design at fair prices for the families and businesses we've called neighbors for a decade."
      />

      <TrustBar headline="1,200+ Central Texas systems installed — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="10 Years, By the Numbers" metrics={metrics} cityName="Waco" />
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
        headline="Waco's Solar Company — Ready When You Are"
        subline="Free design consults. Transparent proposals. 25-Year Panel Performance Support + 10-Year Workmanship. No high-pressure sales."
        primaryText="Call Us Now"
        primaryLink="tel:+12548101010"
        secondaryText="Request a Consult Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
