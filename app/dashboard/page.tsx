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

export default function DashboardPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeaderClient addressShort={short(String(uid || ""))} />

      <main className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Entries" value="12" icon={<Database className="h-5 w-5" />} trend="+2 this week" />
          <StatsCard title="Text Notes" value="8" icon={<FileText className="h-5 w-5" />} trend="Encrypted" />
          <StatsCard title="Files Stored" value="4" icon={<Upload className="h-5 w-5" />} trend="On IPFS" />
          <StatsCard title="Security Level" value="Military" icon={<Shield className="h-5 w-5" />} trend="AES-256" />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TextStorageCard />
              <FileStorageCard />
            </div>
          </TabsContent>

          <TabsContent value="vault">
            <VaultSection />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
