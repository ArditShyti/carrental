export const locales = ["en", "sq", "it", "de"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

export function isValidLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function getLocaleFromPathname(pathname: string): AppLocale {
  const segment = pathname.split("/")[1];
  if (segment && isValidLocale(segment)) {
    return segment;
  }

  return defaultLocale;
}

export function getLocalizedPath(pathname: string, locale: AppLocale): string {
  const cleanPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pathWithoutLocale = cleanPathname.replace(/^\/(en|sq|it|de)(?=\/|$)/, "") || "/";

  if (pathWithoutLocale === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathWithoutLocale}`;
}
