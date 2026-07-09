import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Solar Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | SunPeak Solar',
  description:
    'SunPeak Solar serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 25-Year Panel Performance Support + 10-Year Workmanship.',
  keywords: [
    'solar service areas Central Texas',
    'solar repair Waco TX',
    'solar technician Hewitt TX',
    'solar technician Killeen TX',
    'solar technician Temple TX',
    'SunPeak Solar service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Solar Service Areas | SunPeak Solar — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate solar repair, commercial solar repair, and installation. Same-day service available.',
    url,
    siteName: 'SunPeak Solar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Service Areas | SunPeak Solar — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — NABCEP-aligned solar service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
