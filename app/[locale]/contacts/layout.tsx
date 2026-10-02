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
    title: "Contact Us",
    description:
      "Contact NextRental for booking support, pricing, and premium car rental inquiries in Albania.",
    ogTitle: "Contact NextRental",
    ogDescription:
      "Reach the NextRental team for reservations, questions, and customer support in Albania.",
  },
  sq: {
    title: "Na Kontaktoni",
    description:
      "Kontaktoni NextRental per rezervime, cmime dhe pyetje rreth makinave me qira ne Shqiperi.",
    ogTitle: "Kontakto NextRental",
    ogDescription:
      "Lidhu me ekipin e NextRental per rezervime, pyetje dhe mbeshtetje klienti.",
  },
  it: {
    title: "Contattaci",
    description:
      "Contatta NextRental per prenotazioni, prezzi e richieste sul noleggio auto in Albania.",
    ogTitle: "Contatta NextRental",
    ogDescription:
      "Contatta il team NextRental per prenotazioni, domande e supporto clienti.",
  },
  de: {
    title: "Kontakt",
    description:
      "Kontaktieren Sie NextRental fur Buchungen, Preise und Fragen zur Autovermietung in Albanien.",
    ogTitle: "Kontakt zu NextRental",
    ogDescription:
      "Kontaktieren Sie das NextRental-Team fur Reservierungen, Fragen und Kundensupport.",
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
      canonical: `/${locale}/contacts`,
      languages: {
        en: "/en/contacts",
        sq: "/sq/contacts",
        it: "/it/contacts",
        de: "/de/contacts",
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://nextrentaltirana.com/${locale}/contacts`,
      type: "website",
    },
  };
}

export default function LocalizedContactsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
