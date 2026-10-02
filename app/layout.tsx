import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultLocale, isValidLocale } from "./i18n/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NextRental | Luxury Car Rental in Albania",
    template: "%s | NextRental",
  },
  description:
    "Rent premium and luxury cars in Tirana and across Albania. Affordable prices, fast booking, and 24/7 support.",
  keywords: [
    "car rental Albania",
    "rent car Tirana",
    "luxury cars Albania",
    "NextRental",
  ],
  authors: [{ name: "NextRental Team" }],
  creator: "NextRental",
  publisher: "NextRental",
  metadataBase: new URL("https://nextrentaltirana.com"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "NextRental - Premium Car Rental Albania",
    description: "Luxury car rental in Albania with transparent pricing and fast booking.",
    url: "https://nextrentaltirana.com",
    siteName: "NextRental",
    type: "website",
    images: [
      {
        url: "/next.svg",
        width: 800,
        height: 480,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextRental - Premium Car Rental Albania",
    description:
      "Rent premium cars in Tirana and Albania with fast booking and 24/7 support.",
    images: ["/next.svg"],
  },
  category: "transportation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localeHeader = (await headers()).get("x-locale");
  const locale =
    localeHeader && isValidLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarRental",
              name: "NextRental",
              url: "https://nextrentaltirana.com",
              telephone: "+355 68 825 6727",
              email:"arditshyti05@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tirana",
                addressCountry: "Albania",
              },
              priceRange: "20€ - 300€ / day",
            }),
          }}
        />
        </body>
    </html>
  );
}
