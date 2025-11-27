"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeaderClient from "./DashboardHeaderClient";
import StatsCard from "./StatsCard";
import TextStorageCard from "./TextStorageCard";
import FileStorageCard from "./FileStorageCard";
import VaultSection from "./VaultSection";
import SettingsSection from "./SettingsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, FileText, Upload, Shield, Plus, Eye, Settings } from "lucide-react";
import { getUserContract, createContract, Contract } from "@/services/contracts";
import { getStats, listEntries, StatsResponse, TextEntry, FileEntry } from "@/services/entries";
import OnboardingState from "./OnboardingState";
import { ABI } from "./contractBytecode";
import { AnimatePresence, motion } from "framer-motion";

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
  const useridNum = uid ? Number(uid) : null;

  useEffect(() => {
    try {
      const match = document.cookie.match(/(?:^|; )userid=([^;]*)/);
      const id = match ? decodeURIComponent(match[1]) : null;
      if (!id) {
        router.replace("/login");
      } else {
        setUid(id);
      }
    } catch {
      router.replace("/login");
    }
  }, [router]);

  const short = (v: string) => (v && v.length > 4 ? v.slice(0, 2) : "0x");

  // Load contract, stats, entries
  useEffect(() => {
    const run = async () => {
      if (!useridNum) return;
      try {
        setLoading(true);
        const [c, s, e] = await Promise.all([
          getUserContract(useridNum),
          getStats(useridNum),
          listEntries(useridNum),
        ]);
        setContract(c || null);
        setStats(s);
        setEntries(e);
      } catch (e) {
        // noop, UI will show empty
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [useridNum]);

  const refreshAfterStore = async () => {
    if (!useridNum) return;
    const [s, e] = await Promise.all([getStats(useridNum), listEntries(useridNum)]);
    setStats(s);
    setEntries(e);
  };

  const handleUseExisting = async () => {
    if (!useridNum) return;
    const addr = setupAddress.trim();
    if (!addr || addr.length < 10) {
      setSetupError("Enter a valid contract address.");
      setSetupStatus(null);
      return;
    }
    try {
      setSetupBusy(true);
      setSetupError(null);
      setSetupStatus("Checking contract ownership...");
      if (!(window as any).ethereum) throw new Error("MetaMask not detected.");
      const { BrowserProvider, Contract: EthersContract, isAddress } = await import("ethers");
      if (!isAddress(addr)) throw new Error("Invalid contract address.");
      const provider = new BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const userAddress = (await signer.getAddress()).toLowerCase();

      const contractReader = new EthersContract(addr, ABI as any, provider);
      if (!contractReader.owner) throw new Error("Unable to verify contract owner.");
      const ownerAddress = String(await contractReader.owner()).toLowerCase();
      if (ownerAddress !== userAddress) {
        throw new Error("Only the wallet that owns this contract can link it.");
      }
      setSetupStatus("Linking contract to your account...");
      const created = await createContract(useridNum, addr);
      setContract(created);
      setSetupStatus("Contract linked successfully.");
      setSetupAddress("");
    } catch (err: any) {
      console.error("Link contract failed", err);
      setSetupError(err?.message || "Unable to link this contract. Please try again.");
      setSetupStatus(null);
    } finally {
      setSetupBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <DashboardHeaderClient addressShort={short(String(uid || ""))} />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <AnimatePresence mode="wait">
          {!useridNum ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center space-y-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                <p className="text-slate-600">Loading...</p>
              </div>
            </motion.div>
          ) : !contract ? (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard title="Total Entries" value={stats?.total_entries ?? 0} icon={<Database className="h-5 w-5" />} trend={loading ? "loading..." : undefined} />
                <StatsCard title="Text Notes" value={stats?.text_entries ?? 0} icon={<FileText className="h-5 w-5" />} />
                <StatsCard title="Files Stored" value={stats?.file_entries ?? 0} icon={<Upload className="h-5 w-5" />} />
                <StatsCard title="Security" value="Active" icon={<Shield className="h-5 w-5" />} trend="Contract deployed" />
              </div>

              <Tabs defaultValue="store" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-slate-200">
                  <TabsTrigger value="store" className="flex items-center space-x-2 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                    <Plus className="h-4 w-4" />
                    <span>Store Data</span>
                  </TabsTrigger>
                  <TabsTrigger value="vault" className="flex items-center space-x-2 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                    <Eye className="h-4 w-4" />
                    <span>My Vault</span>
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center space-x-2 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="store" className="mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <TextStorageCard userid={useridNum} contractid={contract.contractid} onStored={refreshAfterStore} />
                    <FileStorageCard userid={useridNum} contractid={contract.contractid} onStored={refreshAfterStore} />
                  </div>
                </TabsContent>

                <TabsContent value="vault" className="mt-6">
                  <VaultSection entries={entries} />
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <SettingsSection contractAddress={contract.contract_address} />
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
