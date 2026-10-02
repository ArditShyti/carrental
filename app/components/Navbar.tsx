"use client";
import { Car, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocalizedPath,
  getLocaleFromPathname,
  locales,
} from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";

export function scrollToFleet() {
  const el = document.getElementById("fleet");

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/nextlogo.png"
              alt="Next Rental"
              width={160}
              height={50}
              className="object-contain w-[130px] sm:w-[160px]"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href={getLocalizedPath("/", locale)} className="text-white hover:text-blue-400 transition-colors font-medium">{dictionary.navigation.home}</Link>
            <Link href={getLocalizedPath("/", locale)+"#fleet"} className="text-white hover:text-blue-400 transition-colors font-medium">{dictionary.navigation.fleet}</Link>
            <Link href={getLocalizedPath("/about", locale)} className="text-white hover:text-blue-400 transition-colors font-medium">{dictionary.navigation.about}</Link>
            <Link href={getLocalizedPath("/contacts", locale)} className="text-white hover:text-blue-400 transition-colors font-medium">{dictionary.navigation.contact}</Link>
            <Link href={getLocalizedPath("/blog", locale)} className="text-white hover:text-blue-400 transition-colors font-medium">{dictionary.navigation.blog}</Link>
            <div className="flex items-center gap-2 text-xs text-white/80">
              {locales.map((currentLocale) => (
                <Link
                  key={currentLocale}
                  href={getLocalizedPath(pathname, currentLocale)}
                  className={currentLocale === locale ? "text-white font-semibold" : "hover:text-white"}
                >
                  {currentLocale.toUpperCase()}
                </Link>
              ))}
            </div>
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50 transition-all">
              {dictionary.navigation.signIn}
            </Button> */}
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-lg rounded-lg mt-2 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 px-4">
              <Link href={getLocalizedPath("/", locale)} className="text-white hover:text-blue-400 transition-colors font-medium py-2">{dictionary.navigation.home}</Link>
              <Link href={getLocalizedPath("/", locale)+"#fleet"} className="text-white hover:text-blue-400 transition-colors font-medium py-2">{dictionary.navigation.fleet}</Link>
              <Link href={getLocalizedPath("/about", locale)} className="text-white hover:text-blue-400 transition-colors font-medium py-2">{dictionary.navigation.about}</Link>
              <Link href={getLocalizedPath("/contacts", locale)} className="text-white hover:text-blue-400 transition-colors font-medium py-2">{dictionary.navigation.contact}</Link>
              <Link href={getLocalizedPath("/blog", locale)} className="text-white hover:text-blue-400 transition-colors font-medium py-2">{dictionary.navigation.blog}</Link>
              <div className="flex items-center gap-2 text-xs text-white/80">
              {locales.map((currentLocale) => (
                <Link
                  key={currentLocale}
                  href={getLocalizedPath(pathname, currentLocale)}
                  className={currentLocale === locale ? "text-white font-semibold" : "hover:text-white"}
                >
                  {currentLocale.toUpperCase()}
                </Link>
              ))}
            </div>
              {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                {dictionary.navigation.signIn}
              </Button> */}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
