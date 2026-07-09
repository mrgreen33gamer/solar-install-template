import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – SunPeak Solar",
  description: "How we collect, use, and protect your information at SunPeak Solar in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}