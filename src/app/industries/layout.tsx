import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Homebuilders, Agriculture & Commercial | SunPeak Solar",
  description:
    "SunPeak Solar serves homebuilders, agriculture & ranches, and commercial facilities across Waco and Central Texas with residential and commercial solar installation, storage, and maintenance.",
  keywords: [
    "solar agriculture Waco",
    "homebuilder solar Texas",
    "commercial solar Waco TX",
    "ranch solar Central Texas",
    "SunPeak Solar industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | SunPeak Solar",
    description: "Solar programs for homebuilders, agriculture & ranches, and commercial facilities in Central Texas.",
    url,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
