import HomePage from "../components/homecomp";
import type { Metadata } from "next";

type Locale = "en" | "sq" | "it" | "de";

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: "Car Rental Albania | Luxury Cars in Tirana - NextRental",
    description:
      "Rent premium and luxury cars in Tirana, Albania. Affordable prices, wide selection of vehicles, and 24/7 customer support.",
  },
  sq: {
    title: "Makina me Qira Shqiperi | Makina Luksoze ne Tirane - NextRental",
    description:
      "Merrni makina premium dhe luksoze me qira ne Tirane, Shqiperi. Cmim i arsyeshem dhe mbeshtetje 24/7.",
  },
  it: {
    title: "Noleggio Auto Albania | Auto di Lusso a Tirana - NextRental",
    description:
      "Noleggia auto premium e di lusso a Tirana, Albania. Prezzi convenienti e supporto clienti 24/7.",
  },
  de: {
    title: "Autovermietung Albanien | Luxusautos in Tirana - NextRental",
    description:
      "Mieten Sie Premium- und Luxusautos in Tirana, Albanien. Faire Preise und 24/7 Kundensupport.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataByLocale[locale] ?? metadataByLocale.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        sq: "/sq",
        it: "/it",
        de: "/de",
      },
    },
    openGraph: {
      url: `https://nextrentaltirana.com/${locale}`,
      locale,
      type: "website",
    },
  };
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
