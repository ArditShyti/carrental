import type { Metadata } from "next";

type Locale = "en" | "sq" | "it" | "de";

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  }
> = {
  en: {
    title: "About Us",
    description:
      "Learn about NextRental and our mission to provide reliable luxury car rental services in Albania.",
    ogTitle: "About NextRental",
    ogDescription:
      "Meet the team behind NextRental and discover our commitment to premium car rental experiences in Albania.",
  },
  sq: {
    title: "Rreth Nesh",
    description:
      "Mësoni më shumë për NextRental dhe misionin tonë për të ofruar shërbime të besueshme të qirasë së makinave në Shqipëri.",
    ogTitle: "Rreth NextRental",
    ogDescription:
      "Njihuni me ekipin e NextRental dhe përkushtimin tonë për shërbime premium të qirasë së makinave.",
  },
  it: {
    title: "Chi Siamo",
    description:
      "Scopri NextRental e la nostra missione di offrire servizi affidabili di noleggio auto in Albania.",
    ogTitle: "Chi Siamo - NextRental",
    ogDescription:
      "Scopri il team di NextRental e il nostro impegno per un servizio premium di noleggio auto.",
  },
  de: {
    title: "Über Uns",
    description:
      "Erfahren Sie mehr über NextRental und unsere Mission, zuverlässige Autovermietung in Albanien anzubieten.",
    ogTitle: "Über NextRental",
    ogDescription:
      "Lernen Sie das Team von NextRental kennen und entdecken Sie unseren Premium-Mietwagenservice.",
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
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        sq: "/sq/about",
        it: "/it/about",
        de: "/de/about",
      },
    },

    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://nextrentaltirana.com/${locale}/about`,
      type: "website",
    },
  };
}

export default function LocalizedAboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}