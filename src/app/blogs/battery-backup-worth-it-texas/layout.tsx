import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunpeaksolar.com";

export const metadata: Metadata = {
  title: "Is Battery Backup Worth It in Texas? | SunPeak Solar",
  description:
    "When home battery storage makes sense in Central Texas — outages, self-consumption, rates, and sizing without the sales pitch.",
  alternates: { canonical: `${BASE_URL}/blogs/battery-backup-worth-it-texas` },
  openGraph: {
    title: "Is Battery Backup Worth It in Texas?",
    description: "Practical battery backup guide for Central Texas homeowners.",
    url: `${BASE_URL}/blogs/battery-backup-worth-it-texas`,
    siteName: "SunPeak Solar",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
