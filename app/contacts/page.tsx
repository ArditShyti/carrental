"use client";
import { MarketingPageShell } from "../components/MarketingPageShell";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";
import emailjs from "@emailjs/browser";
import { Popup } from "../components/popup";

type PopupVariant = "reservation" | "contact";


type PopupState = {
  show: boolean;
  type: "success" | "error";
  message: string;
  variant?: PopupVariant;
};


export default function ContactPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict=getDictionary(locale);
  const contact=dict.contactPage;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: "success" as "success" | "error",
    message: "",
    variant:"contact",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
  
      setPopup({
        show: true,
        type: "success",
        message: dict.contactLabels.popupContactSuccess,
        variant:"contact",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
  
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: dict.contactLabels.popupContactError,
        variant:"contact",
      });
    }
  
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [popup.show]);


  return (
    <MarketingPageShell>
    <Popup
      show={popup.show}
      type={popup.type}
      message={popup.message}
      variant={popup.variant}
      onClose={() => setPopup({ ...popup, show: false })}
    />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-20 md:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56,189,248,0.15) 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(56,189,248,0.1)' : 'rgba(59,130,246,0.1)'} 0%, transparent 70%)`
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 px-5 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-sm">{contact.badge}</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {contact.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-cyan-100 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {contact.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                  {contact.sendMessage}
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{contact.fullName} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{contact.email} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{contact.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{contact.subject} *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    >
                      <option value="">{contact.selectSubject}</option>
                      <option value="booking">{contact.subjects.booking}</option>
                      <option value="support">{contact.subjects.support}</option>
                      <option value="partnership">{contact.subjects.partnership}</option>
                      <option value="feedback">{contact.subjects.feedback}</option>
                      <option value="other">{contact.subjects.other}</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{contact.message} *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors resize-none bg-slate-50 focus:bg-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Send className="w-5 h-5" />
                    {contact.sendMessage}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
                {contact.contactInfoTitle}
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                {contact.contactInfoDesc}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: contact.phoneTitle,
                    detail: '+355 68 825 6727',
                    subDetail: contact.phoneSub,
                    gradient: 'from-cyan-500 to-blue-600'
                  },
                  {
                    icon: Mail,
                    title: contact.emailTitle,
                    detail: 'arditshyti05@gmail.com',
                    subDetail: contact.emailSub,
                    gradient: 'from-blue-600 to-indigo-600'
                  },
                  {
                    icon: MapPin,
                    title: contact.mapTitle,
                    detail: 'Rr. Jordan Misja, Tirane',
                    subDetail: contact.mapSubtitle,
                    gradient: 'from-indigo-600 to-purple-600'
                  },
                  // {
                  //   icon: MessageCircle,
                  //   title: 'Live Chat',
                  //   detail: 'Available on website',
                  //   subDetail: 'Instant support',
                  //   gradient: 'from-purple-600 to-pink-600'
                  // }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <contact.icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                          {contact.title}
                        </h3>
                        <p className="text-slate-800 font-semibold">{contact.detail}</p>
                        <p className="text-slate-500 text-sm">{contact.subDetail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 p-8 rounded-3xl text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {contact.followUs}
                  </h3>
                  <p className="mb-6 text-cyan-100">{contact.stayConnected}</p>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, name: 'Facebook' },
                      { Icon: Instagram, name: 'Instagram' }
                    ].map(({ Icon, name }, index) => (
                      <motion.a
                        key={name}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/10"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <motion.div
        className="py-16 md:py-20 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span className="text-cyan-700 font-semibold text-sm">Locations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
              Visit Our Locations
            </h2>
            <p className="text-xl text-slate-600">Find a DriveXpress location near you</p>
          </motion.div>

          <motion.div
            className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl overflow-hidden h-96 flex items-center justify-center border-2 border-cyan-200/50 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
            <div className="text-center relative z-10">
              <motion.div
                className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center mb-4 shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <MapPin className="w-10 h-10 text-white" strokeWidth={2.5} />
              </motion.div>
              <p className="text-2xl text-slate-800 font-bold mb-2">Interactive Map</p>
              <p className="text-cyan-600 font-semibold">50+ locations worldwide</p>
            </div>
          </motion.div>
        </div>
      </motion.div> */}

    </MarketingPageShell>
  );
}
