'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What can I store with Keyura?",
      answer: "Anything personal: PDFs, images, notes, credentials, or even seed phrases. Content is encrypted locally with your key, then stored using decentralized infrastructure so only you can read it."
    },
    {
      question: "Is Keyura free?",
      answer: "Yes. Keyura is free to use. You pay only your own blockchain gas fees when deploying your vault or saving data. There are no subscriptions or platform charges."
    },
    {
      question: "How secure is it?",
      answer: "We use client‑side AES‑256 encryption, IPFS for distributed storage, and immutable records on Polygon. Only you hold the keys, so only you can decrypt — not even Keyura."
    },
    {
      question: "What if Keyura goes offline?",
      answer: "Your encrypted content and on‑chain records remain accessible via IPFS and the Polygon blockchain. Your data outlives any single company."
    },
    {
      question: "Why Polygon?",
      answer: "Polygon offers low fees, fast confirmations, and Ethereum security. It keeps your gas costs low while staying EVM‑compatible."
    },
    {
      question: "Can I share with others?",
      answer: "Keyura focuses on single‑owner privacy today. Secure sharing and permissions are on the roadmap."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HelpCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">Everything you need to know about Keyura’s security and how it works</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
            >
              {/* Question */}
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(241, 245, 249, 0.8)" }}
              >
                <h3 className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team is here to help you understand how Keyura can secure your documents
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-slate-800 hover:from-primary/90 hover:to-slate-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;