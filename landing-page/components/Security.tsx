'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Key, Database, Eye, CheckCircle } from 'lucide-react';

const Security = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const securityFeatures = [
    {
      icon: Shield,
      title: "AES-256 Encryption",
      description: "Military-grade encryption with user-generated keys",
      badge: "BANK-LEVEL",
    },
    {
      icon: Database,
      title: "Polygon Network",
      description: "Ethereum-compatible blockchain for immutable storage",
      badge: "DECENTRALIZED",
    },
    {
      icon: Lock,
      title: "IPFS Storage",
      description: "Distributed storage via Pinata for redundancy",
      badge: "DISTRIBUTED",
    },
    {
      icon: Key,
      title: "Zero-Knowledge",
      description: "Complete user sovereignty over encryption keys",
      badge: "PRIVACY-FIRST",
    },
    {
      icon: Eye,
      title: "Audit Trail",
      description: "Immutable blockchain records of all access",
      badge: "TRANSPARENT",
    },
    {
      icon: CheckCircle,
      title: "Key Management",
      description: "Self-custody with no third-party dependencies",
      badge: "TRUSTLESS",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="security" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Bank-Level Security Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our security infrastructure combines the best of blockchain technology, 
            military-grade encryption, and zero-knowledge architecture.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative overflow-hidden group cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {feature.badge}
                </span>
              </div>

              {/* Icon */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-primary to-slate-800 rounded-lg p-3 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-emerald-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Security Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-emerald-500/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Security Flow */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Your Security Journey
              </h3>
              <div className="space-y-4">
                {[
                  "Document uploaded and encrypted locally with your key",
                  "Encrypted data stored on distributed IPFS network",
                  "Blockchain record created on Polygon network",
                  "Only you can decrypt with your master key",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Trust Indicators */}
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity
                }}
                className="w-32 h-32 mx-auto bg-gradient-to-r from-emerald-500 to-primary rounded-full flex items-center justify-center mb-6"
              >
                <Shield className="h-16 w-16 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-primary mb-4">
                100% Trustless Security
              </h4>
              <p className="text-slate-600">
                No backdoors, no third-party access, no single point of failure. 
                Your documents are protected by mathematics, not promises.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { number: "256-bit", label: "AES Encryption" },
            { number: "0", label: "Data Breaches" },
            { number: "100%", label: "User Control" },
            { number: "∞", label: "Storage Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;