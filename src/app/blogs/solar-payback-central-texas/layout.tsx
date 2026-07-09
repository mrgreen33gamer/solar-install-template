import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunpeaksolar.com";

export const metadata: Metadata = {
  title: "Solar Payback in Central Texas | SunPeak Solar",
  description:
    "What Waco homeowners should expect for solar payback. Rates, incentives, system size, and production factors explained clearly.",
  alternates: { canonical: `${BASE_URL}/blogs/solar-payback-central-texas` },
  openGraph: {
    title: "Solar Payback in Central Texas",
    description: "Practical payback guide for Waco and Central Texas solar.",
    url: `${BASE_URL}/blogs/solar-payback-central-texas`,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
