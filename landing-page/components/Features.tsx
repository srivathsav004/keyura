'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Key, Lock, Database, Zap, Globe } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Shield,
      title: "On‑chain Security",
      description: "Immutable storage on Polygon ensures your data and notes can’t be tampered with or lost.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Key,
      title: "Self‑Sovereign Control",
      description: "Only you hold the keys. No third parties, no backdoors — complete ownership.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Lock,
      title: "Strong Encryption",
      description: "AES‑256 encryption with your keys keeps documents and secret phrases safe.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Distributed Storage",
      description: "IPFS via Pinata means your files are always retrievable and not tied to one server.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Free To Use",
      description: "Keyura is free. You only pay your own gas fees when interacting.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Globe,
      title: "Web3 Native",
      description: "Simple MetaMask workflow for creating your vault and storing data on chain.",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Own Your Data</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Secure any personal document or text — from PDFs to private notes and seed phrases — with your keys and the blockchain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-emerald-200 transition-all duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-emerald-500/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to secure your data?</h3>
            <p className="text-slate-600 mb-6">
              It’s free to start. Just connect your wallet — you only pay gas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-slate-800 hover:from-primary/90 hover:to-slate-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;