import type { MetadataRoute } from "next";
import { cars } from "./data/cars";
import { locales } from "./i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextrentaltirana.com";
  const localizedAlternates = (path: string) =>
    ({
      ...Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`]),
      ),
      "x-default": `${baseUrl}/en${path}`,
    }) satisfies Record<string, string>;

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      changeFrequency: "weekly",
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: localizedAlternates("") },
    },
    {
      url: `${baseUrl}/${locale}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: localizedAlternates("/about") },
    },
    {
      url: `${baseUrl}/${locale}/contacts`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: localizedAlternates("/contacts") },
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: localizedAlternates("/blog") },
    },
  ]);

  const carRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    cars.map((car) => ({
      url: `${baseUrl}/${locale}/reservation/${car.id}`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: localizedAlternates(`/reservation/${car.id}`),
      },
    })),
  );

  return [...staticRoutes, ...carRoutes];
}
