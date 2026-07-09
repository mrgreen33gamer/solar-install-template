import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = BASE_URL + '/industries/homebuilders';

export const metadata: Metadata = {
  title: "Homebuilders Solar | SunPeak Solar Waco TX",
  description: "Production-ready solar packages for new homes — consistent crews, plan pricing, and buyer-ready documentation.",
  keywords: ["Homebuilders solar Waco", "SunPeak Solar", "commercial solar Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Homebuilders Solar | SunPeak Solar Waco TX",
    description: "Production-ready solar packages for new homes — consistent crews, plan pricing, and buyer-ready documentation.",
    url, siteName: "SunPeak Solar", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}