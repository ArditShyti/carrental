"use client";
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { CarCard } from './CarCard';
import { FloatingContactButtons } from './FloatingContactButtons';
import { motion } from 'framer-motion';
import { getCars } from '../data/cars';
import { FAQSection } from './faqsSection';
import { PopularRentals } from './popularRentals';
import { MarketingPageShell } from './MarketingPageShell';
import { getDictionary } from '../i18n/dictionary';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '../i18n/config';

export const metadata = {
  title: "Car Rental Albania | Luxury Cars in Shkoder - DriveXpress",
  description: "Rent premium cars in Shkoder, Albania. Affordable prices, luxury vehicles, and 24/7 support. Book your car today!",
  keywords: ["car rental Albania", "rent car Shkoder", "luxury cars Albania"],
};

export default function HomePage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const cars = getCars(locale);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MarketingPageShell>
      <Hero />
      <Features />
      <PopularRentals />
      {/* Cars Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='fleet'>
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Premium Fleet
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Choose from our wide selection of luxury vehicles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cars.map((car, index) => (
              <CarCard key={car.id} {...car} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQS Section */}
       <FAQSection />
      {/* Stats Section */}
      <motion.div 
        className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '500+', label: dict.metrics.vehicles },
              { number: '10K+', label: dict.metrics.happyCustomers },
              { number: '50+', label: dict.metrics.locations },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                DriveXpress
              </h3>
              <p className="text-gray-400 text-sm">Your trusted partner for premium car rentals</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fleet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Daily Rentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Long Term</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chauffeur Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@drivexpress.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Luxury Drive, CA 90210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 DriveXpress. All rights reserved.</p>
          </div>
        </div> */}
      {/* </footer> */}

      {/* Floating Contact Buttons */}
      {/* <FloatingContactButtons /> */}
      </MarketingPageShell>
    </div>
  );
}
