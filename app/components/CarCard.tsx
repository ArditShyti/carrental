import { Car, Users, Fuel, Gauge } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";
import { getDictionary } from '../i18n/dictionary';
interface CarCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  passengers: number;
  fuelType: string;
  transmission: string;
  index: number;
}

export function CarCard({ id, name, category, image, price, passengers, fuelType, transmission, index }: CarCardProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-400">
        <div className="relative overflow-hidden h-48 md:h-56">
          <motion.img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div 
            className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {category}
          </motion.div>
        </div>
        <CardContent className="p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {name}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">{passengers} Pass.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Gauge className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">{transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Fuel className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">{fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Car className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">AC</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-gray-500 text-xs md:text-sm">{dict.carCardLabels.startingAt }</p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ${price}<span className="text-base md:text-lg text-gray-500">/{dict.carCardLabels.day}</span>
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link href={getLocalizedPath(`/reservation/${id}`, locale)}>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg hover:shadow-blue-600/50 transition-all">
                  {dict.carCardLabels.rentNow}
                </Button>
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}