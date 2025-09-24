'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Calculator, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [documentCount, setDocumentCount] = useState(5);
  const [polPriceUsd, setPolPriceUsd] = useState(0.6); // editable approximate

  // Rough gas estimates in POL (illustrative)
  const GAS_POL = {
    deployVault: 0.02,
    saveOrUpdate: 0.005,
    deleteOrArchive: 0.003,
    read: 0,
  };

  const calculateCost = (docs: number) => {
    const keyuraFee = 0;
    const gasPol = docs * GAS_POL.saveOrUpdate; // one save per doc
    const gasFee = gasPol * polPriceUsd * 80; // rough INR if needed (USD*80)
    return { keyuraFee, gasFee, total: gasFee };
  };

  const cost = calculateCost(documentCount);

  const features = [
    "Military-grade AES-256 encryption",
    "Blockchain-secured storage on Polygon",
    "Distributed IPFS storage via Pinata",
    "Complete self-custody of keys",
    "Zero-knowledge architecture",
    "Immutable audit trail",
    "Lifetime access guarantee",
    "Cross-platform compatibility",
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Gas Fee Estimations</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Keyura is free — you only pay your own gas. The values below are illustrative and depend on network conditions and POL price.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Gas Fee Reference */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-slate-800 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Reference Costs</h3>
              <p className="text-white/90">POL and USD approximations</p>
            </div>

            {/* Pricing Breakdown */}
            <div className="p-8">
              <div className="space-y-5 mb-8">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-slate-600">POL price (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={polPriceUsd}
                    onChange={(e) => setPolPriceUsd(parseFloat(e.target.value || '0'))}
                    className="w-28 rounded-lg border border-slate-200 px-3 py-1 text-right"
                  />
                </div>

                {[{label:'Deploy vault contract',pol:GAS_POL.deployVault},{label:'Save / update item',pol:GAS_POL.saveOrUpdate},{label:'Delete / archive item',pol:GAS_POL.deleteOrArchive},{label:'Read / view item (off‑chain)',pol:GAS_POL.read}].map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-medium text-slate-700">{row.label}</span>
                    <span className="font-semibold">
                      {row.pol} POL
                      {row.pol > 0 ? (
                        <span className="text-slate-500 text-sm">  (~${(row.pol * polPriceUsd).toFixed(2)})</span>
                      ) : (
                        <span className="text-slate-500 text-sm">  ($0)</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-primary to-slate-800 hover:from-primary/90 hover:to-slate-700 text-white py-3 rounded-xl font-semibold" asChild>
                  <a href="/user-setup">Start Securing Documents</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Custom Estimate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
          >
            <div className="text-center mb-8">
              <Calculator className="h-12 w-12 mx-auto text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Your Estimate</h3>
              <p className="text-slate-600">Number of items to save (POL and USD)</p>
            </div>

            {/* Document Count Slider */}
              <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Number of Documents: <span className="font-bold text-primary">{documentCount}</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={documentCount}
                onChange={(e) => setDocumentCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 doc</span>
                <span>20 docs</span>
              </div>
            </div>

            {/* Cost Breakdown */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Gas (POL)</span>
                    <span className="font-semibold">{(documentCount * GAS_POL.saveOrUpdate).toFixed(3)} POL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Approx (USD)</span>
                    <span className="font-semibold">${(documentCount * GAS_POL.saveOrUpdate * polPriceUsd).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold text-lg">Estimated Total</span>
                    <span className="font-bold text-emerald-600">{(documentCount * GAS_POL.saveOrUpdate).toFixed(3)} POL • ${(
                      documentCount * GAS_POL.saveOrUpdate * polPriceUsd
                    ).toFixed(2)}</span>
                  </div>
              </div>
            </div>

            {/* Value Comparison */}
            <div className="bg-emerald-50 rounded-xl p-6 text-center">
              <Zap className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
              <p className="text-emerald-700 font-medium">
                That's just <span className="font-bold">₹{(cost.total / documentCount).toFixed(0)}</span> per document for lifetime security!
              </p>
              <p className="text-emerald-600 text-sm mt-2">
                Compare to monthly cloud storage fees and data breach risks
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Choose Pay-Per-Document?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "No Subscriptions",
                  description: "Pay only for what you use, when you use it",
                },
                {
                  title: "Lifetime Access",
                  description: "Your documents remain secure and accessible forever",
                },
                {
                  title: "Complete Transparency",
                  description: "No hidden fees or surprise charges",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <h4 className="font-bold text-primary mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #0f172a, #10b981);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #0f172a, #10b981);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Pricing;