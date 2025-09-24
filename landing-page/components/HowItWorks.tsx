'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wallet, Shield, Upload, Key, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Wallet,
      title: "Connect MetaMask",
      description: "Use your wallet to own your identity and sign actions on chain.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Deploy Your Vault",
      description: "One-time transaction creates your personal vault contract on Polygon.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Upload,
      title: "Encrypt & Save Data",
      description: "Encrypt documents or text locally and store references securely.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Key,
      title: "Access Anytime",
      description: "Only you can decrypt with your keys. Retrieve from anywhere.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            How Keyura Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Four simple steps to own and secure your data. Free service; you only pay gas.</p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-0.5" />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 -translate-y-0.5"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8 items-stretch auto-rows-fr">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative h-full"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center relative z-10 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${step.color} p-4 mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex items-start space-x-4"
              >
                {/* Icon & Line */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-3`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-slate-200 transform -translate-x-0.5" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              It takes less than 5 minutes to set up your secure document vault. 
              Join thousands of users who trust Keyura with their sensitive information.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center"
              onClick={() => (window.location.href = '/user-setup')}
            >
              Start Your Vault Setup
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;