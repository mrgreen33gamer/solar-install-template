import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/services/ev-charger-solar';

export const metadata: Metadata = {
  title: "EV Charger + Solar Waco TX | SunPeak Solar",
  description: "Level 2 EV chargers designed with your solar system so more of your miles come from the roof — not peak utility rates.",
  keywords: [
    "EV Charger + Solar Waco TX",
    "solar installation Waco",
    "SunPeak Solar",
    "Central Texas solar",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "EV Charger + Solar Waco TX | SunPeak Solar",
    description: "Level 2 EV chargers designed with your solar system so more of your miles come from the roof — not peak utility rates.",
    url,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charger + Solar Waco TX | SunPeak Solar",
    description: "Level 2 EV chargers designed with your solar system so more of your miles come from the roof — not peak utility rates.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Charger + Solar",
  description: "Level 2 EV chargers designed with your solar system so more of your miles come from the roof — not peak utility rates.",
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
  serviceType: "EV Charger + Solar",
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