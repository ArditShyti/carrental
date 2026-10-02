import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+355688256727"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+355688256727"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-600/50 transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
