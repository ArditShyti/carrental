import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";


export function Features() {

  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);

  const features = [
    {
      icon: Shield,
      title: dict.whyChooseUs.fullyInsuredTitle,
      description: dict.whyChooseUs.fullyInsuredDesc,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: dict.whyChooseUs.supportTitle,
      description: dict.whyChooseUs.supportDesc,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: dict.whyChooseUs.priceTitle,
      description: dict.whyChooseUs.priceDesc,
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: HeadphonesIcon,
      title: dict.whyChooseUs.bookingTitle,
      description: dict.whyChooseUs.bookingDesc,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {dict.whyChooseUs.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">{dict.whyChooseUs.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
