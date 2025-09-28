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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DeployContractModal from "./DeployContractModal";

export default function DashboardPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [entries, setEntries] = useState<(TextEntry | FileEntry)[]>([]);
  const [loading, setLoading] = useState(false);
  const [setupAddress, setSetupAddress] = useState("");
  const useridNum = uid ? Number(uid) : null;
  const [deployOpen, setDeployOpen] = useState(false);

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
    if (!setupAddress || setupAddress.length < 10) return;
    const created = await createContract(useridNum, setupAddress.trim());
    setContract(created);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeaderClient addressShort={short(String(uid || ""))} />

      <main className="container mx-auto px-4 py-8">
        {/* Quick Stats from DB */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Entries" value={stats?.total_entries ?? 0} icon={<Database className="h-5 w-5" />} trend={loading ? "loading..." : undefined} />
          <StatsCard title="Text Notes" value={stats?.text_entries ?? 0} icon={<FileText className="h-5 w-5" />} />
          <StatsCard title="Files Stored" value={stats?.file_entries ?? 0} icon={<Upload className="h-5 w-5" />} />
          <StatsCard title="Security" value={contract ? "Active" : "Missing"} icon={<Shield className="h-5 w-5" />} trend={contract ? "Contract set" : "Needs setup"} />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="store" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="store" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Store Data</span>
            </TabsTrigger>
            <TabsTrigger value="vault" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>My Vault</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store">
            {useridNum && contract ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TextStorageCard userid={useridNum} contractid={contract.contractid} onStored={refreshAfterStore} />
                <FileStorageCard userid={useridNum} contractid={contract.contractid} onStored={refreshAfterStore} />
              </div>
            ) : (
              <Card className="border-dashed border-emerald-200">
                <CardHeader>
                  <CardTitle>No Contract Found</CardTitle>
                  <CardDescription>Enter an existing contract address to link with your account.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <Input placeholder="0x..." value={setupAddress} onChange={(e) => setSetupAddress(e.target.value)} />
                    <Button onClick={handleUseExisting}>Use Existing</Button>
                  </div>
                  <div className="flex items-center">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="px-3 text-xs text-slate-500">or</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-600">Don’t have one? Deploy your personal contract now.</div>
                    <Button onClick={() => setDeployOpen(true)} className="bg-emerald-600 hover:bg-emerald-700">Deploy Contract</Button>
                  </div>
                  {useridNum !== null && (
                    <DeployContractModal
                      open={deployOpen}
                      onClose={() => setDeployOpen(false)}
                      userid={useridNum}
                      onDeployed={(c) => {
                        setContract(c);
                        setDeployOpen(false);
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="vault">
            <VaultSection entries={entries} />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsSection contractAddress={contract?.contract_address} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
