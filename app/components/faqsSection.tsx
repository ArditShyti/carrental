"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedPath } from "../i18n/config";
import { getDictionary } from '../i18n/dictionary';

interface FAQ {
  question: string;
  answer: string;
}



export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);

  const faqs: FAQ[] = [
    {
      question: dict.faqs.faqs[0].question,
      answer: dict.faqs.faqs[0].answer,
    },
    {
      question: dict.faqs.faqs[1].question,
      answer: dict.faqs.faqs[1].answer,
    },
    {
      question: dict.faqs.faqs[2].question,
      answer: dict.faqs.faqs[2].answer,
    },
      {
      question: dict.faqs.faqs[3].question,
      answer: dict.faqs.faqs[3].answer,
    },
    {
      question: dict.faqs.faqs[4].question,
      answer: dict.faqs.faqs[4].answer,
    },
    {
      question: dict.faqs.faqs[5].question,
      answer: dict.faqs.faqs[5].answer,
      },
      {
      question: dict.faqs.faqs[6].question,
      answer: dict.faqs.faqs[6].answer,
    },
    {
      question: dict.faqs.faqs[7].question,
      answer: dict.faqs.faqs[7].answer,
    },
    {
      question: dict.faqs.faqs[8].question,
      answer: dict.faqs.faqs[8].answer,
    },
    {
      question: dict.faqs.faqs[9].question,
      answer: dict.faqs.faqs[9].answer,
    },
    ];
  // Generate JSON-LD structured data for SEO
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // Create script tag for JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';

    // Remove existing schema if present
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-cyan-600" />
            <span className="text-cyan-700 font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>
            {dict.faqs.title}
          </h2>
          <p className="text-xl text-slate-600">{dict.faqs.subtitle}</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-cyan-300 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-cyan-700 transition-colors"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-6 h-6 ${openIndex === index ? 'text-cyan-600' : 'text-slate-400'} transition-colors`} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="pl-0 border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-50/50 to-transparent py-4 rounded">
                        <p className="text-slate-700 leading-relaxed" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <motion.a
            href={getLocalizedPath("/contacts", locale)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="w-5 h-5" />
            Contact Our Support Team
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
}
