import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunpeaksolar.com";

export const metadata: Metadata = {
  title: "About SunPeak Solar | Waco TX Solar Installers",
  description:
    "Meet the SunPeak Solar team. Locally owned and operated in Waco, Texas since 2016. NABCEP-aligned installers, bonded & insured, honest pricing, and a 25-Year Panel Performance Support + 10-Year Workmanship. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "SunPeak Solar about",
    "solar company Waco TX",
    "Avery Quinn solar",
    "NABCEP solar installer Waco",
    "local solar Waco Texas",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About SunPeak Solar | Waco TX Solar Installers",
    description:
      "Locally owned solar company in Waco, TX. NABCEP-aligned, transparent proposals, 25-Year Panel Performance Support + 10-Year Workmanship.",
    url: `${BASE_URL}/about`,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
