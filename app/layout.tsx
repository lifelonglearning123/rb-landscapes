import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { BUSINESS, SERVICES } from "@/lib/services";
import { AREAS_SERVED } from "@/lib/areas";
import { SITE_URL, BUSINESS_ID } from "@/lib/schema";

const bricolage = localFont({
  src: "./fonts/Bricolage.ttf",
  variable: "--font-bricolage",
  display: "swap",
});
const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  display: "swap",
});
const plexMono = localFont({
  src: [
    { path: "./fonts/PlexMono-Regular.ttf", weight: "400" },
    { path: "./fonts/PlexMono-Medium.ttf", weight: "500" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "R & B Landscapes and Driveways | Landscaper in Trowbridge",
    template: "%s | R & B Landscapes and Driveways",
  },
  description:
    "Block paving, resin and tarmac driveways, patios, fencing, decking and full garden landscaping across Trowbridge and Wiltshire. Free quotes — when we build, we build to last.",
  openGraph: {
    siteName: BUSINESS.name,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    slogan: BUSINESS.tagline,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    hasMap: BUSINESS.hasMap,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.hours.days,
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}/services/${s.slug}` },
    })),
  };

  return (
    <html lang="en-GB" className={`${bricolage.variable} ${figtree.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
