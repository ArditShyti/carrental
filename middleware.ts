import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "./app/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const localeSegment = pathname.split("/")[1];
  if (localeSegment && isValidLocale(localeSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const url = request.nextUrl.clone();
  const normalizedPath = pathname === "/" ? "" : pathname;
  url.pathname = `/${defaultLocale}${normalizedPath}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
