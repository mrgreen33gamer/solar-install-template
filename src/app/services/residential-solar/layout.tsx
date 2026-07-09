import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/services/residential-solar';

export const metadata: Metadata = {
  title: "Residential Solar Waco TX | SunPeak Solar",
  description: "Custom rooftop and ground-mount solar designed for Central Texas sun — transparent proposals, quality equipment, and 25-Year Panel Performance Support + 10-Year Workmanship.",
  keywords: [
    "Residential Solar Waco TX",
    "solar installation Waco",
    "SunPeak Solar",
    "Central Texas solar",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Residential Solar Waco TX | SunPeak Solar",
    description: "Custom rooftop and ground-mount solar designed for Central Texas sun — transparent proposals, quality equipment, and 25-Year Panel Performance Support + 10-Year Workmanship.",
    url,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Solar Waco TX | SunPeak Solar",
    description: "Custom rooftop and ground-mount solar designed for Central Texas sun — transparent proposals, quality equipment, and 25-Year Panel Performance Support + 10-Year Workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Solar",
  description: "Custom rooftop and ground-mount solar designed for Central Texas sun — transparent proposals, quality equipment, and 25-Year Panel Performance Support + 10-Year Workmanship.",
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
  serviceType: "Residential Solar",
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