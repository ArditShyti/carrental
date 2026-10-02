"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath, getLocaleFromPathname } from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";

export function MarketingFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <footer className="bg-slate-900 text-white py-8 md:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              NextRental
            </h3>
            <p className="text-slate-400 text-sm">
              {dictionary.footer.trustedPartner}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{dictionary.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href={getLocalizedPath("/about", locale)} className="hover:text-cyan-400 transition-colors">
                  {dictionary.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/", locale)} className="hover:text-cyan-400 transition-colors">
                  {dictionary.footer.fleet}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/blog", locale)} className="hover:text-cyan-400 transition-colors">
                  {dictionary.footer.blog}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/contacts", locale)}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {dictionary.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{dictionary.footer.services}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{dictionary.footer.dailyRentals}</li>
              <li>{dictionary.footer.longTerm}</li>
              <li>{dictionary.footer.corporate}</li>
              <li>{dictionary.footer.chauffeurService}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{dictionary.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>arditshyti05@gmail.com</li>
              <li>+355 68 825 6727</li>
              <li>Rr. Jordan Misja, Tirane, Albania</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 NextRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
