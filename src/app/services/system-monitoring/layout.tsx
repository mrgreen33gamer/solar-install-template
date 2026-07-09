import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/services/system-monitoring';

export const metadata: Metadata = {
  title: "System Monitoring Waco TX | SunPeak Solar",
  description: "Production tracking, proactive alerts, and performance reports so you know your array is earning every day — not just on day one.",
  keywords: [
    "System Monitoring Waco TX",
    "solar installation Waco",
    "SunPeak Solar",
    "Central Texas solar",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "System Monitoring Waco TX | SunPeak Solar",
    description: "Production tracking, proactive alerts, and performance reports so you know your array is earning every day — not just on day one.",
    url,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Monitoring Waco TX | SunPeak Solar",
    description: "Production tracking, proactive alerts, and performance reports so you know your array is earning every day — not just on day one.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "System Monitoring",
  description: "Production tracking, proactive alerts, and performance reports so you know your array is earning every day — not just on day one.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "SunPeak Solar",
    url: BASE_URL,
    telephone: "+12548101010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4100 S New Rd",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "System Monitoring",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}