import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/industries/commercial-facilities';

export const metadata: Metadata = {
  title: "Commercial Facilities Solar | SunPeak Solar Waco TX",
  description: "Facility solar for warehouses, retail, and offices — lower operating costs with minimal disruption to daily operations.",
  keywords: ["Commercial Facilities solar Waco", "SunPeak Solar", "commercial solar Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Facilities Solar | SunPeak Solar Waco TX",
    description: "Facility solar for warehouses, retail, and offices — lower operating costs with minimal disruption to daily operations.",
    url, siteName: "SunPeak Solar", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}