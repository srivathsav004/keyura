'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DeployContractModal from "./DeployContractModal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, Link2, Sparkles, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import type { Contract } from "@/services/contracts";

type Props = {
  setupAddress: string;
  setSetupAddress: (addr: string) => void;
  onUseExisting: () => void;
  userid: number;
  onDeployed: (c: Contract) => void;
  setupBusy?: boolean;
  setupError?: string | null;
  setupStatus?: string | null;
};

const OnboardingState = ({
  setupAddress,
  setSetupAddress,
  onUseExisting,
  userid,
  onDeployed,
  setupBusy,
  setupError,
  setupStatus,
}: Props) => {
  const [deployOpen, setDeployOpen] = useState(false);

  const deployFeatures = [
    "Full admin rights remain with your connected wallet.",
    "Data is locally encrypted before it ever touches the blockchain.",
    "Deployment is on Polygon Amoy (~30s, Low Gas).",
  ];

  const linkFeatures = [
    "Connect instantly with your existing contract address.",
    "Full access to your historical and current data.",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // Minimized top padding (py-12 -> py-8) and increased max width (max-w-5xl -> max-w-6xl)
    <div className="space-y-12 py-8 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 tracking-wider text-xs px-3 py-1 uppercase hover:bg-emerald-50 hover:text-emerald-700">
          Keyura Vault Setup
        </Badge>
        {/* Updated Header Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Deploy or Link Your Private Storage Contract
        </h1>
        {/* Updated Header Paragraph */}
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Welcome to Keyura! Get started by deploying your personal smart contract vault for full, decentralized control, or connect an existing one you already own.
        </p>
      </motion.div>

      {/* Contract Options Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Card 1: Deploy New Contract (Primary Action) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="h-full"
        >
          <Card className="text-slate-900 border-emerald-500 ring-2 ring-emerald-100/80 h-full flex flex-col p-8 md:p-10">
          <CardHeader className="p-0 mb-6 flex-grow-0">
            <div className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-emerald-100 border border-emerald-300 flex-shrink-0">
                <Rocket className="h-7 w-7 text-emerald-600" />
                </div>

                <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl">Deploy New Contract</CardTitle>
                </div>
                </div>
            </div>
            </CardHeader>


            <CardContent className="space-y-6 flex-1 flex flex-col p-0 pt-6">
              
              <p className="text-base text-slate-600 -mt-3 mb-3">One transaction to fully own your personal, private vault.</p>

              {/* Feature List */}
              <div className="space-y-4 text-slate-700 flex-1 text-base">
                {deployFeatures.map((line) => (
                  <div key={line} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 mt-0.5" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              {/* Deploy Button */}
              <motion.div whileTap={{ scale: 0.98 }} className="mt-auto pt-8">
                <Button
                  onClick={() => setDeployOpen(true)}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/40 py-3 h-14"
                  size="lg"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  <span className="text-lg">Start Contract Deployment</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>

              <p className="text-sm text-slate-500 text-center flex items-center justify-center pt-2">
                <span className="text-lg leading-none mr-1">•</span>
                Gas fees apply
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2: Link Existing Contract (Secondary Action) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="h-full"
        >
          <Card className="border border-slate-300 shadow-xl h-full flex flex-col p-8 md:p-10">
           <CardHeader className="p-0 mb-6 flex-grow-0">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-slate-100 border border-slate-300 flex-shrink-0">
                <Link2 className="h-7 w-7 text-slate-600" />
                </div>

                <div>
                <CardTitle className="text-3xl">Link Existing Vault</CardTitle>
                </div>
            </div>
          </CardHeader>

            <CardContent className="space-y-6 flex-1 flex flex-col p-0 pt-6">

              <p className="text-base text-slate-600 -mt-3 mb-3">Confirm ownership of your deployed contract on-chain.</p>

              {/* Feature List */}
              <div className="space-y-4 text-slate-700 flex-1 text-base">
                {linkFeatures.map((line) => (
                  <div key={line} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-slate-500 mt-0.5" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              {/* Form and Status */}
              <div className="space-y-6 pt-2 mt-auto">
                <div className="space-y-2">
                  <label htmlFor="contract-address" className="text-sm font-semibold text-slate-700 block">
                    Contract Address
                  </label>
                  <Input
                    id="contract-address"
                    placeholder="0x..."
                    value={setupAddress}
                    onChange={(e) => setSetupAddress(e.target.value)}
                    className="font-mono text-sm border-slate-300 focus-visible:ring-emerald-500 transition"
                    required
                  />
                </div>
                
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={onUseExisting}
                    disabled={setupBusy || !setupAddress || setupAddress.length < 10}
                    className="w-full bg-slate-800 text-white hover:bg-slate-700 py-3 h-14 disabled:bg-slate-400"
                    size="lg"
                  >
                    {setupBusy ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Validating ownership...
                      </>
                    ) : (
                      <>
                        <Link2 className="h-5 w-5 mr-2" />
                        <span className="text-lg">Link Contract Now</span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>

              {/* Status and Error Messages */}
              <AnimatePresence>
                {(setupStatus || setupError) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-center gap-2 text-sm rounded-lg px-4 py-3 overflow-hidden ${
                        setupError ? 'text-red-700 bg-red-50 border border-red-200' : 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                    }`}
                  >
                    {setupBusy && <Loader2 className="h-4 w-4 mr-2 animate-spin flex-shrink-0" />}
                    <span>{setupError || setupStatus}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legal/Disclaimer Text */}
              <p className="text-sm text-slate-500 flex items-center justify-center pt-2">
                <span className="text-lg leading-none mr-1">•</span>
                No gas fee required for linking an existing contract.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      
      {/* Deploy Modal */}
      <DeployContractModal
        open={deployOpen}
        onClose={() => setDeployOpen(false)}
        userid={userid}
        onDeployed={(c) => {
          onDeployed(c);
          setDeployOpen(false);
        }}
      />
    </div>
  );
};

export default OnboardingState;