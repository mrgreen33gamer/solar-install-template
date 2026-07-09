import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';

export const metadata: Metadata = {
  title: 'Solar Tips & Insights | SunPeak Solar Blog',
  description:
    'Solar safety tips, commercial solar repair guides, and door maintenance advice for Waco and Central Texas homeowners from SunPeak Solar.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Solar Tips & Insights | SunPeak Solar Blog',
    description: 'Practical solar guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'SunPeak Solar',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
