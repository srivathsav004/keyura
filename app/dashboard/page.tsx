"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import DashboardHeaderClient from "./DashboardHeaderClient";
import StatsCard from "./StatsCard";
import TextStorageCard from "./TextStorageCard";
import FileStorageCard from "./FileStorageCard";
import VaultSection from "./VaultSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, FileText, Upload, Shield, Plus, Eye, Copy, Code 
} from "lucide-react";
import { getUserContract, createContract, Contract } from "@/services/contracts";
import { getStats, listEntries, StatsResponse, TextEntry, FileEntry } from "@/services/entries";
import OnboardingState from "./OnboardingState";
import { ABI } from "./contractBytecode";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

declare global {
  interface Window {
    ethereum?: any; // Consider using @metamask/providers for better type safety
  }
}

// Utility function to shorten addresses
const short = (v: string) => (v && v.length > 8 ? `${v.slice(0, 6)}…${v.slice(-4)}` : "0x…");

export default function DashboardPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [entries, setEntries] = useState<(TextEntry | FileEntry)[]>([]);
  const [loading, setLoading] = useState(false);
  const [setupAddress, setSetupAddress] = useState("");
  const [setupBusy, setSetupBusy] = useState(false);
  const [setupStatus, setSetupStatus] = useState<string | null>(null);
  const [setupError, setSetupError] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);
  const useridNum = uid ? Number(uid) : null;
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);

  useEffect(() => {
    try {
      const match = document.cookie.match(/(?:^|; )userid=([^;]*)/);
      const id = match ? decodeURIComponent(match[1]) : null;
      if (!id) {
        router.replace("/login");
      } else {
        setUid(id);
      }
    } catch (err) {
      console.warn("Cookie parsing failed", err);
      router.replace("/login");
    }
  }, [router]);

  const short = (v: string) => (v && v.length > 8 ? v.slice(0, 6) + "…" + v.slice(-4) : "0x…");

  const loadData = useCallback(async () => {
    if (!useridNum) return;
    try {
      setInitializing(true);
      setLoading(true);
      const [c, s, e] = await Promise.all([
        getUserContract(useridNum),
        getStats(useridNum),
        listEntries(useridNum),
      ]);
      setContract(c || null);
      setStats(s);
      setEntries(e);
      setLastRefresh(new Date().toLocaleTimeString());
    } catch (e) {
      console.error("Failed to load dashboard data", e);
      toast.error("Failed to load dashboard data. Please refresh.");
    } finally {
      setLoading(false);
      setInitializing(false);
    }
  }, [useridNum]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshAfterStore = useCallback(async () => {
    if (!useridNum) return;
    try {
      const [s, e] = await Promise.all([getStats(useridNum), listEntries(useridNum)]);
      setStats(s);
      setEntries(e);
      setLastRefresh(new Date().toLocaleTimeString());
      toast.success("Data updated");
    } catch (e) {
      toast.error("Failed to refresh data");
    }
  }, [useridNum]);

  const handleUseExisting = async () => {
    if (!useridNum) return;
    const addr = setupAddress.trim();
    if (!addr || addr.length < 10) {
      setSetupError("Enter a valid Ethereum contract address.");
      setSetupStatus(null);
      return;
    }
    try {
      setSetupBusy(true);
      setSetupError(null);
      setSetupStatus("Verifying contract ownership…");
      
      if (!window.ethereum) {
        throw new Error("MetaMask (or compatible wallet) not detected.");
      }

      const { BrowserProvider, Contract: EthersContract, isAddress } = await import("ethers");
      if (!isAddress(addr)) throw new Error("Invalid Ethereum address format.");

      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const userAddress = (await signer.getAddress()).toLowerCase();

      const contractReader = new EthersContract(addr, ABI as any, provider);
      const ownerAddress = String(await contractReader.owner()).toLowerCase();

      if (ownerAddress !== userAddress) {
        throw new Error("You must be the contract owner to link it.");
      }

      setSetupStatus("Linking to your Keyura account…");
      const created = await createContract(useridNum, addr);
      setContract(created);
      setSetupStatus("Contract linked successfully.");
      setSetupAddress("");
      toast.success("Contract linked successfully.");
      setLastRefresh(new Date().toLocaleTimeString());
    } catch (err: any) {
      console.error("Contract linking failed", err);
      setSetupError(err?.message || "Unable to link this contract. Please try again.");
      setSetupStatus(null);
      toast.error("Contract linking failed: " + (err?.message || "Unknown error"));
    } finally {
      setSetupBusy(false);
    }
  };

  const copyContractAddress = useCallback(async () => {
    if (!contract?.contract_address) return;
    try {
      await navigator.clipboard.writeText(contract.contract_address);
      toast.success("Contract address copied to clipboard");
    } catch (err) {
      console.error('Failed to copy address:', err);
      toast.error("Failed to copy address");
    }
  }, [contract?.contract_address]);

  const StatsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.7, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse"
        >
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-slate-200" />
            <div className="h-4 w-20 rounded bg-slate-200" />
          </div>
          <div className="mt-4 h-8 w-16 rounded bg-slate-200" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeaderClient 
        addressShort={short(String(uid || ""))} 
        lastRefresh={lastRefresh}
        onRefresh={loadData}
      />

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <AnimatePresence mode="wait">
          {!useridNum ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center space-y-3">
                <motion.div
                  className="inline-block rounded-full h-10 w-10 border-2 border-slate-600 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-slate-600 font-medium">Authenticating…</p>
              </div>
            </motion.div>
          ) : initializing ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <StatsSkeleton />
              <div className="h-64 rounded-xl bg-white border border-slate-200 animate-pulse" />
            </motion.div>
          ) : !contract ? (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4"
            >
              <OnboardingState
                setupAddress={setupAddress}
                setSetupAddress={setSetupAddress}
                onUseExisting={handleUseExisting}
                userid={useridNum}
                onDeployed={(c) => {
                  setContract(c);
                }}
                setupBusy={setupBusy}
                setupError={setupError}
                setupStatus={setupStatus}
              />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Row — 3 cards only */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <StatsCard 
                    title="Total Entries" 
                    value={stats?.total_entries ?? 0} 
                    icon={<Database className="h-5 w-5 text-slate-600" />} 
                    loading={loading}
                  />
                  <StatsCard 
                    title="Text Notes" 
                    value={stats?.text_entries ?? 0} 
                    icon={<FileText className="h-5 w-5 text-slate-600" />} 
                    loading={loading}
                  />
                  <StatsCard 
                    title="Files Stored" 
                    value={stats?.file_entries ?? 0} 
                    icon={<Upload className="h-5 w-5 text-slate-600" />} 
                    loading={loading}
                  />
                </div>
              </motion.div>

              {/* Tabs Section */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Tabs defaultValue="store" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl">
                    {[
                      { value: "store", label: "Store", icon: <Plus className="h-4 w-4" /> },
                      { value: "vault", label: "Vault", icon: <Eye className="h-4 w-4" /> },
                      { value: "smart-contract", label: "Smart Contract", icon: <Code className="h-4 w-4" /> },
                    ].map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors
                          data-[state=active]:text-slate-900 data-[state=active]:bg-white
                          data-[state=active]:border data-[state=active]:border-slate-300
                          hover:bg-slate-200"
                      >
                        <span className="flex items-center gap-2 justify-center">
                          {tab.icon}
                          {tab.label}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="store" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <TextStorageCard 
                        userid={useridNum} 
                        contractid={contract.contractid} 
                        onStored={refreshAfterStore} 
                      />
                      <FileStorageCard 
                        userid={useridNum} 
                        contractid={contract.contractid} 
                        onStored={refreshAfterStore} 
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="vault" className="mt-6">
                    <VaultSection entries={entries} loading={loading} />
                  </TabsContent>

                  <TabsContent value="smart-contract" className="mt-6">
                    <Card className="border border-slate-200 shadow-sm bg-white">
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-2.5 rounded-lg bg-slate-100 text-slate-600">
                                <Database className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-900">Personal Vault Contract</h3>
                                <p className="text-slate-600 mt-1">
                                  This smart contract, deployed on Polygon, serves as your immutable data registry.
                                  Keyura does not store your encryption keys; decryption is performed client-side using your private key.
                                </p>
                              </div>
                            </div>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`https://polygonscan.com/address/${contract?.contract_address}`, '_blank')}
                              disabled={!contract?.contract_address}
                            >
                              View on Polygonscan
                            </Button>
                          </div>

                          <div className="space-y-4 text-sm text-slate-700 border-l-2 border-slate-200 pl-5">
                            <p>
                              <strong>Data sovereignty:</strong> Even in the event of Keyura's unavailability, your encrypted data remains accessible.
                              The contract stores only metadata and access proofs; your actual content resides in decentralized storage.
                            </p>

                            <p>
                              <strong>Access procedure:</strong>
                              <ol className="list-decimal pl-5 mt-1 space-y-1 text-slate-600">
                                <li>Connect the wallet that deployed this contract.</li>
                                <li>Query the contract for entry metadata and encrypted payloads.</li>
                                <li>Decrypt locally using your encryption key.</li>
                              </ol>
                            </p>

                            <p>
                              <strong>Recovery:</strong> If this address is lost, visit Polygonscan and navigate to the 
                              <span className="font-mono mx-1">Created</span> 
                              tab under Contracts for the wallet address used during onboarding.
                            </p>

                            <div className="bg-slate-50 p-3 rounded-md text-slate-700 border border-slate-200">
                              <p className="text-sm font-medium text-slate-900 mb-1">Recommendation</p>
                              <p className="text-sm">
                                For long-term reliability, consider using a dedicated wallet for Keyura to simplify contract identification.
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-slate-500" />
                              <h4 className="font-medium text-slate-900">Contract Address</h4>
                            </div>
                            <div className="relative">
                              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 pr-10 font-mono text-sm text-slate-900">
                                {contract?.contract_address}
                              </div>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-2 top-2 h-7 w-7"
                                onClick={copyContractAddress}
                                aria-label="Copy contract address"
                              >
                                <Copy className="h-4 w-4 text-slate-500" />
                              </Button>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                              Retain this address to ensure uninterrupted access to your data.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}