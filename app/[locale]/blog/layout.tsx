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
    title: "Blog",
    description:
      "Read travel guides, driving tips, and car rental advice from NextRental for trips across Albania.",
    ogTitle: "NextRental Blog",
    ogDescription:
      "Travel stories, rental tips, and destination guides for better road trips in Albania.",
  },
  sq: {
    title: "Blog",
    description:
      "Lexoni guida udhetimi, keshilla drejtimi dhe udhezime per makina me qira nga NextRental ne Shqiperi.",
    ogTitle: "Blogu NextRental",
    ogDescription:
      "Histori udhetimesh, keshilla qiraje dhe guida destinacionesh per udhetime me te mira.",
  },
  it: {
    title: "Blog",
    description:
      "Leggi guide di viaggio, consigli di guida e suggerimenti sul noleggio auto da NextRental in Albania.",
    ogTitle: "Blog NextRental",
    ogDescription:
      "Storie di viaggio, consigli di noleggio e guide alle destinazioni per viaggi migliori.",
  },
  de: {
    title: "Blog",
    description:
      "Lesen Sie Reiseguides, Fahrtipps und Ratschlage zur Autovermietung von NextRental in Albanien.",
    ogTitle: "NextRental Blog",
    ogDescription:
      "Reisegeschichten, Miettipps und Zielguides fur bessere Roadtrips.",
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
      canonical: `/${locale}/blog`,
      languages: {
        en: "/en/blog",
        sq: "/sq/blog",
        it: "/it/blog",
        de: "/de/blog",
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://nextrentaltirana.com/${locale}/blog`,
      type: "website",
    },
  };
}

export default function LocalizedBlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
