import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunpeaksolar.com";

export const metadata: Metadata = {
  title: "How to Choose a Solar Installer in Waco TX | SunPeak Solar",
  description:
    "A practical checklist for hiring a solar installer in Waco and Central Texas — warranties, red flags, design quality, and local support.",
  alternates: { canonical: `${BASE_URL}/blogs/how-to-choose-solar-installer` },
  openGraph: {
    title: "How to Choose a Solar Installer in Waco TX",
    description: "Checklist for hiring a trustworthy Central Texas solar installer.",
    url: `${BASE_URL}/blogs/how-to-choose-solar-installer`,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
