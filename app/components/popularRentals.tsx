"use client";
import { motion } from 'motion/react';
import { TrendingUp, Star, Users, Zap } from 'lucide-react';
import { getCars } from '../data/cars';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";
import { getDictionary } from '../i18n/dictionary';

export function PopularRentals() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const cars = getCars(locale);
 

  // Select most popular cars (first 3 from the fleet)
  const popularCars = [
    { ...cars[0], rentalCount: '2.4K+', rating: 4.9 }, // BMW M Series
    { ...cars[1], rentalCount: '1.8K+', rating: 4.8 }, // Mercedes S-Class
    { ...cars[5], rentalCount: '3.1K+', rating: 4.9 }  // Tesla Model S
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)]"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(56,189,248,0.1) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 backdrop-blur-sm border border-orange-400/30 px-5 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold text-sm">Trending Now</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-orange-100 to-cyan-100 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {dict.customerFavorites.title}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {dict.customerFavorites.subtitle}
          </motion.p>
        </motion.div>

        {/* Popular Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {popularCars.map((car, index) => (
            <motion.div
              key={car.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group-hover:border-transparent transition-all">
                {/* Trending Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(249, 115, 22, 0.5)',
                        '0 0 30px rgba(249, 115, 22, 0.8)',
                        '0 0 20px rgba(249, 115, 22, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-3 h-3 fill-white" />
                    HOT
                  </motion.div>
                </div>

                {/* Car Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-cyan-50">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {car.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating & Rentals */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="font-bold text-slate-900">{car.rating}</span>
                      <span className="text-slate-500 text-sm">{dict.carCardLabels.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-cyan-600">
                      <Users className="w-4 h-4" />
                      <span className="font-bold text-sm">{car.rentalCount}</span>
                      <span className="text-slate-500 text-xs">{dict.carCardLabels.rentals}</span>
                    </div>
                  </div>

                  {/* Car Name */}
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-cyan-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {car.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{car.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⚡</span>
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⚙️</span>
                      <span className="hidden sm:inline">{car.transmission}</span>
                      <span className="sm:hidden">Auto</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{dict.carCardLabels.startingAt}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
                          ${car.price}
                        </span>
                        <span className="text-slate-600">/{dict.carCardLabels.day}</span>
                      </div>
                    </div>
                    <motion.a
                      href={getLocalizedPath(`/reservation/${car.id}`, locale)}
                      className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {dict.carCardLabels.rentNow}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            // href={getLocalizedPath("/", locale)}
            href='#fleet'
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-5 h-5" />
            {dict.customerFavorites.viewAllVehicles}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
