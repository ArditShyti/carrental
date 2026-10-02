"use client";
import { MarketingPageShell } from "../components/MarketingPageShell";
import Image from "next/image";
import { motion } from 'motion/react';
import { Target, Gem, Handshake, Sparkles, Award, Users } from 'lucide-react';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/dictionary";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict=getDictionary(locale);
  const about=dict.about;

  return (
    <MarketingPageShell>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-24 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 px-5 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-sm">{about.heroBadge}</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {about.heroTitle}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {about.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm">{about.storyBadge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
              {about.storyTitle}
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              {about.storyP1}              
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              {about.storyP2}              
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
              {about.storyP3}              
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Luxury car fleet"
                  width={1080}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">{about.valuesBadge}              
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
            {about.valuesTitle}
            </h2>
            <p className="text-xl text-slate-600">{about.valuesSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: about.excellenceTitle,
                description: about.excellenceDesc,
                gradient: 'from-cyan-500 to-blue-600'
              },
              {
                icon: Gem,
                title: about.luxuryTitle,
                description: about.luxuryDesc,
                gradient: 'from-blue-600 to-indigo-600'
              },
              {
                icon: Handshake,
                title: about.trustTitle,
                description: about.trustDesc,
                gradient: 'from-indigo-600 to-purple-600'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-all overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 shadow-lg`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                >
                  <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-cyan-600" />
              <span className="text-cyan-700 font-semibold text-sm">Meet the Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600">The people driving NextRental forward</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Mitchell', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
              { name: 'James Rodriguez', role: 'COO', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop' },
              { name: 'Emily Chen', role: 'Head of Customer Experience', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative mb-6 mx-auto w-48 h-48 rounded-3xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 ring-4 ring-transparent group-hover:ring-cyan-400/50 transition-all duration-500 rounded-3xl"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="192px"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                  {member.name}
                </h3>
                <p className="text-cyan-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <motion.div
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {about.ctaTitle}
          </motion.h2>
          <motion.p
            className="text-xl text-cyan-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {about.ctaSubtitle}
          </motion.p>
          <motion.a
            href={getLocalizedPath("/", locale)+"#fleet"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            {about.ctaButton}
          </motion.a>
        </div>
      </motion.div>

    </MarketingPageShell>
  );
}
