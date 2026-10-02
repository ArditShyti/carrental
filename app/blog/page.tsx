"use client";
import { MarketingPageShell } from "../components/MarketingPageShell";
import { motion } from 'motion/react';
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getCars } from '../data/cars';
import { TrendingUp, MapPin, Calendar, User, ArrowRight, Sparkles, Car, DollarSign, Mail } from 'lucide-react';
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function BlogPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const cars = getCars(locale);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const featuredCars = cars.slice(0, 4);

  const blogPosts = [
    {
      title: '5 Top Destinations to Visit in Albania',
      excerpt: 'Discover the hidden gems of Albania, from pristine beaches to ancient ruins. Experience the Riviera, explore historic Berat, and immerse yourself in culture.',
      image: 'https://images.unsplash.com/photo-1601112403947-52e1e0dcd9b4?w=1200&h=800&fit=crop',
      category: 'Travel',
      author: 'Sarah Mitchell',
      date: 'April 15, 2026',
      readTime: '8 min read',
      icon: MapPin
    },
    {
      title: 'The Ultimate Road Trip Guide Through Europe',
      excerpt: 'Plan your perfect European adventure with our comprehensive guide. From scenic routes to must-visit stops, drive through history and culture.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop',
      category: 'Road Trips',
      author: 'James Rodriguez',
      date: 'April 12, 2026',
      readTime: '12 min read',
      icon: TrendingUp
    },
    {
      title: 'Luxury Car Features You Need to Know',
      excerpt: 'Explore cutting-edge technology and comfort features in modern luxury vehicles. From adaptive cruise control to premium sound systems.',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&h=800&fit=crop',
      category: 'Vehicles',
      author: 'Emily Chen',
      date: 'April 10, 2026',
      readTime: '6 min read',
      icon: Car
    },
    {
      title: 'Best Coastal Drives for Summer 2026',
      excerpt: 'Experience breathtaking ocean views and winding cliff roads. Our curated list of the most spectacular coastal routes around the world.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      category: 'Travel',
      author: 'Sarah Mitchell',
      date: 'April 8, 2026',
      readTime: '10 min read',
      icon: MapPin
    },
    {
      title: 'How to Choose the Perfect Rental Car',
      excerpt: 'Make informed decisions with our expert guide. Consider size, fuel efficiency, features, and your specific travel needs.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
      category: 'Tips',
      author: 'James Rodriguez',
      date: 'April 5, 2026',
      readTime: '7 min read',
      icon: TrendingUp
    },
    {
      title: 'Mountain Adventures: Alpine Routes Guide',
      excerpt: 'Navigate stunning mountain passes and scenic alpine roads. Essential tips for high-altitude driving and must-see viewpoints.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      category: 'Road Trips',
      author: 'Emily Chen',
      date: 'April 3, 2026',
      readTime: '9 min read',
      icon: MapPin
    }
  ];

  return (
    <MarketingPageShell>

      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-20 md:py-28 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)]"></div>
          <motion.div
            className="absolute inset-0 opacity-20"
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
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 px-5 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TrendingUp className="w-4 h-4 text-cyan-300" />
              <span className="text-cyan-200 font-semibold text-sm">Latest Stories & Deals</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              DriveXpress Blog
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Travel guides, tips, and exclusive vehicle promotions
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Promotional Slider - Shows first on mobile */}
          <div className="lg:hidden mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Promotional Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-slate-900">Hot Deals</span>
                </div>
                <motion.span
                  className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SPECIAL
                </motion.span>
              </div>

              {/* Modern Slider Container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-1 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>

                <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
                  <Slider {...sliderSettings}>
                    {featuredCars.map((car) => (
                      <div key={car.id} className="outline-none">
                        <div className="relative">
                          {/* Car Image */}
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={car.image}
                              alt={car.name}
                              fill
                              sizes="(max-width: 1024px) 100vw, 0px"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-2 shadow-lg">
                              <Sparkles className="w-3 h-3" />
                              {car.category}
                            </div>

                            {/* Car Name */}
                            <h3 className="text-xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                              {car.name}
                            </h3>

                            {/* Features */}
                            <div className="flex items-center gap-3 text-xs text-cyan-100 mb-3">
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{car.passengers}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Car className="w-3 h-3" />
                                <span>{car.transmission}</span>
                              </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-end justify-between mb-3">
                              <div>
                                <div className="text-xs text-cyan-300 line-through mb-1">
                                  Was ${car.price + 50}/day
                                </div>
                                <div className="flex items-baseline gap-2">
                                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
                                    ${car.price}
                                  </span>
                                  <span className="text-base text-cyan-200">/day</span>
                                </div>
                                <div className="text-xs text-green-400 font-semibold mt-1">
                                  Save ${50}!
                                </div>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                              href={getLocalizedPath(`/reservation/${car.id}`, locale)}
                              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold text-center text-sm shadow-lg hover:shadow-cyan-500/50 transition-all"
                              whileTap={{ scale: 0.98 }}
                            >
                              Book Now
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* Limited Time Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(239, 68, 68, 0.5)',
                          '0 0 30px rgba(239, 68, 68, 0.8)',
                          '0 0 20px rgba(239, 68, 68, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      LIMITED
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <motion.div
                className="mt-4 grid grid-cols-3 gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {['Best Price', '24/7 Support', 'Free Cancel'].map((badge, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-2 text-center shadow-sm">
                    <div className="text-base mb-1">✓</div>
                    <div className="text-xs font-semibold text-slate-700">{badge}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Blog Posts - Left/Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
                    Featured Articles
                  </h2>
                </div>
              </motion.div>

              <div className="space-y-6 md:space-y-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    className="group bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative overflow-hidden h-48 md:h-auto">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 30vw"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold shadow-lg">
                            <post.icon className="w-3 h-3" />
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-3 p-4 md:p-6 lg:p-8">
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-500 mb-2 md:mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">{post.author}</span>
                            <span className="sm:hidden">{post.author.split(' ')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">{post.date}</span>
                            <span className="sm:hidden">{post.date.split(',')[0]}</span>
                          </div>
                          <span className="hidden sm:inline">• {post.readTime}</span>
                        </div>
                        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          {post.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">
                          {post.excerpt}
                        </p>
                        <motion.a
                          href="#"
                          className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 text-sm md:text-base group"
                          whileHover={{ x: 5 }}
                        >
                          <span className="hidden sm:inline">Read Full Article</span>
                          <span className="sm:hidden">Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sticky Promotional Slider - Right Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:col-span-4">
              <motion.div
                className="lg:sticky lg:top-24"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Promotional Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-slate-900">Hot Deals</span>
                  </div>
                  <motion.span
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    SPECIAL
                  </motion.span>
                </div>

                {/* Modern Slider Container */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-1 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>

                  <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
                    <Slider {...sliderSettings}>
                      {featuredCars.map((car) => (
                        <div key={car.id} className="outline-none">
                          <div className="relative">
                            {/* Car Image */}
                            <div className="relative h-80 overflow-hidden">
                              <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                sizes="(min-width: 1024px) 30vw, 0px"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              {/* Category Badge */}
                              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
                                <Sparkles className="w-3 h-3" />
                                {car.category}
                              </div>

                              {/* Car Name */}
                              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                                {car.name}
                              </h3>

                              {/* Features */}
                              <div className="flex items-center gap-4 text-sm text-cyan-100 mb-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  <span>{car.passengers}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Car className="w-4 h-4" />
                                  <span>{car.transmission}</span>
                                </div>
                              </div>

                              {/* Price Section */}
                              <div className="flex items-end justify-between mb-4">
                                <div>
                                  <div className="text-xs text-cyan-300 line-through mb-1">
                                    Was ${car.price + 50}/day
                                  </div>
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
                                      ${car.price}
                                    </span>
                                    <span className="text-lg text-cyan-200">/day</span>
                                  </div>
                                  <div className="text-xs text-green-400 font-semibold mt-1">
                                    Save ${50}!
                                  </div>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <motion.a
                                href={getLocalizedPath(`/reservation/${car.id}`, locale)}
                                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold text-center shadow-lg hover:shadow-cyan-500/50 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Book Now
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>

                    {/* Limited Time Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(239, 68, 68, 0.5)',
                            '0 0 30px rgba(239, 68, 68, 0.8)',
                            '0 0 20px rgba(239, 68, 68, 0.5)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        LIMITED TIME
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <motion.div
                  className="mt-6 grid grid-cols-3 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {['Best Price', '24/7 Support', 'Free Cancel'].map((badge, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-xl mb-1">✓</div>
                      <div className="text-xs font-semibold text-slate-700">{badge}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 px-5 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold text-sm">Newsletter</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-xl text-cyan-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get exclusive deals and travel tips delivered to your inbox
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 shadow-lg"
            />
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

    </MarketingPageShell>
  );
}
