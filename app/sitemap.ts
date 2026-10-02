import type { MetadataRoute } from "next";
import { cars } from "./data/cars";
import { locales } from "./i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextrentaltirana.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: locale === "en" ? 1 : 0.9,
    },
    {
      url: `${baseUrl}/${locale}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${locale}/contacts`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]);

  const carRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    cars.map((car) => ({
      url: `${baseUrl}/${locale}/reservation/${car.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  );

  return [...staticRoutes, ...carRoutes];
}
