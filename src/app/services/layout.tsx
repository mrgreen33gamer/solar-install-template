// src/app/services/layout.tsx
// SunPeak Solar — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Solar Installation Services | Residential, Commercial, Battery & More | SunPeak Solar",
  description:
    "SunPeak Solar offers residential solar, commercial solar, battery storage, EV charger + solar, system monitoring, and solar maintenance for Waco and Central Texas. NABCEP-aligned, 25-Year Panel Performance Support + 10-Year Workmanship.",
  keywords: [
    "solar installation Waco TX",
    "solar services Waco",
    "battery storage Central Texas",
    "EV charger solar Waco TX",
    "solar company Texas",
    "commercial solar Waco",
    "NABCEP-aligned solar Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Solar Installation Services | SunPeak Solar",
    description:
      "Residential & commercial solar, battery storage, EV charging, monitoring, and maintenance for Waco and Central Texas. NABCEP-aligned, 25-Year Panel Performance Support + 10-Year Workmanship.",
    url,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
