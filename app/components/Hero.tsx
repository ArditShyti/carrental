"use client";
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '../i18n/dictionary';
import { getLocaleFromPathname } from '../i18n/config';

export function Hero() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  return (
    <div className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1665491641078-1f8b275c8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzczOTQxNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Animated particles */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {dict.hero.title}
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {dict.hero.bluetitle}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {dict.hero.subtitle}
          </motion.p>

          {/* Search Box */}
          {/* <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-400 transition-colors">
                <MapPin className="w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Pick-up Location" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-400 transition-colors">
                <Calendar className="w-5 h-5 text-gray-400" />
                <Input 
                  type="date" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-400 transition-colors">
                <Calendar className="w-5 h-5 text-gray-400" />
                <Input 
                  type="date" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base"
                />
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-5 md:py-6 text-base md:text-lg shadow-lg hover:shadow-blue-600/50 transition-all">
              <Search className="w-5 h-5 mr-2" />
              Search Available Cars
            </Button>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
