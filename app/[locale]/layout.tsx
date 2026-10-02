import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type AppLocale } from "../i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale = locales.includes(locale as AppLocale) ? locale : "en";

  return {
    alternates: {
      languages: {
        en: `/en`,
        sq: `/sq`,
        it: `/it`,
        de: `/de`,
      },
    },
    openGraph: {
      locale: activeLocale,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as AppLocale)) {
    notFound();
  }

  return children;
}
