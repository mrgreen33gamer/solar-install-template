import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/industries/agriculture';

export const metadata: Metadata = {
  title: "Agriculture & Ranches Solar | SunPeak Solar Waco TX",
  description: "Solar for ranches, pumps, shops, and ag facilities — resilient power for rural Central Texas operations.",
  keywords: ["Agriculture & Ranches solar Waco", "SunPeak Solar", "commercial solar Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Agriculture & Ranches Solar | SunPeak Solar Waco TX",
    description: "Solar for ranches, pumps, shops, and ag facilities — resilient power for rural Central Texas operations.",
    url, siteName: "SunPeak Solar", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}