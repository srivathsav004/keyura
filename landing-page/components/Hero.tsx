'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Key, Database, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute opacity-10"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 6 + i,
        repeat: Infinity,
      }}
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + (i % 2) * 40}%`,
      }}
    >
      {i % 3 === 0 ? (
        <Shield className="h-8 w-8 text-primary" />
      ) : i % 3 === 1 ? (
        <Key className="h-8 w-8 text-emerald-500" />
      ) : (
        <Database className="h-8 w-8 text-slate-600" />
      )}
    </motion.div>
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white pt-10 md:pt-12">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {floatingElements}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Secure Your Personal Data & Notes{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent">
              on Blockchain
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed"
          >
            Store any personal documents, private notes, or even seed phrases with end‑to‑end encryption.
            <br />
            <span className="font-semibold text-primary">Free to use. You only pay your own gas fees.</span>
          </motion.p>

          {/* Key Value Props */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Key, text: "End‑to‑end encryption with your own key" },
              { icon: Database, text: "Permanent on-chain storage with your contracts" },
              { icon: Shield, text: "Private by default. You control access" },
            ].map((prop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <prop.icon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{prop.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-slate-800 hover:from-primary/90 hover:to-slate-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg group"
                asChild
              >
                <a href="/user-setup">
                  Start Securing Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                asChild
              >
                <a href="/documentation">
                  Documentation
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-slate-200"
          >
            <p className="text-slate-500 mb-4">Trusted by security professionals</p>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <span className="text-sm font-semibold">AES-256 ENCRYPTION</span>
              <span className="text-sm font-semibold">POLYGON BLOCKCHAIN</span>
              <span className="text-sm font-semibold">IPFS STORAGE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;