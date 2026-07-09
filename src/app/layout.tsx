// src/app/layout.tsx
// SunPeak Solar — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Saira_Stencil_One, Manrope, Inter } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Manrope({
  weight: ["400","500","600","700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.sunpeaksolar.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c1a2e" },
    { media: "(prefers-color-scheme: dark)",  color: "#0c1a2e" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SunPeak Solar | Residential & Commercial Solar Installation — Waco, TX",
    template: "%s | SunPeak Solar",
  },
  description:
    "SunPeak Solar is a Waco, TX solar company offering residential solar, commercial solar, battery storage, EV charger + solar, system monitoring, and solar maintenance for Central Texas homes and businesses. NABCEP-aligned, bonded & insured.",
  keywords: [
    "SunPeak Solar",
    "solar installation Waco TX",
    "residential solar Waco Texas",
    "commercial solar Central Texas",
    "battery storage Waco TX",
    "EV charger solar Waco",
    "solar company Hewitt TX",
    "solar panels Temple TX",
    "NABCEP solar installer Waco",
  ],
  authors: [{ name: "SunPeak Solar", url: BASE_URL }],
  creator: "SunPeak Solar",
  publisher: "SunPeak Solar",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "SunPeak Solar | Residential & Commercial Solar Installation — Waco, TX",
    description:
      "Waco-based solar company for residential & commercial installs, battery storage, EV charging, monitoring, and maintenance across Central Texas. NABCEP-aligned & insured. 25-Year Panel Performance Support.",
    url: BASE_URL,
    siteName: "SunPeak Solar",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "SunPeak Solar — Waco TX Residential & Commercial Solar Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunPeak Solar | Waco TX Solar Installation",
    description:
      "Residential & commercial solar, battery storage & EV charging for Central Texas. NABCEP-aligned & insured — 25-year panel performance support.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "SunPeak Solar",
  alternateName: "SunPeak Solar Waco",
  description:
    "Residential and commercial solar services in Waco and Central Texas — residential solar, commercial solar, battery storage, EV charger + solar, system monitoring, and solar maintenance. NABCEP-aligned installers, bonded & insured, 25-Year Panel Performance Support + 10-Year Workmanship.",
  url: BASE_URL,
  telephone: "+12548101010",
  email: "hello@sunpeaksolar.com",
  foundingDate: "2016",
  founder: {
    "@type": "Person",
    name: "Avery Quinn",
    jobTitle: "Owner & Lead Solar Installer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4100 S New Rd",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Installation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Solar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Solar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Storage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV Charger + Solar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "System Monitoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Maintenance" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/sunpeaksolar",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#facc15" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0c1a2e",
                }}
              >
                <PulseLoader size={50} color="#facc15" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
