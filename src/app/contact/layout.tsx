// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunpeaksolar.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact SunPeak Solar | Free Design Consult in Waco & Central Texas',
  description:
    'Contact SunPeak Solar to schedule a free solar design consult or request a proposal. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 810-1010.',
  keywords: [
    'contact SunPeak Solar',
    'solar service Waco TX',
    'schedule solar consult Waco',
    'solar estimate Central Texas',
    'SunPeak Solar contact',
    '254-810-1010',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact SunPeak Solar | Free Design Consult in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free design consults. Transparent proposals, 25-Year Panel Performance Support + 10-Year Workmanship, NABCEP-aligned installers.',
    url,
    siteName: 'SunPeak Solar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SunPeak Solar | Waco & Central Texas',
    description: 'Schedule a free solar design consult. Call (254) 810-1010.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
