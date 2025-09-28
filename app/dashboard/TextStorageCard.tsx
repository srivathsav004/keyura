import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, FileText, Lock } from "lucide-react";
import { useState } from "react";
import { createTextEntry } from "@/services/entries";
import { getUserContract } from "@/services/contracts";
import { ABI } from "./contractBytecode";

type Props = {
  userid: number;
  contractid: number;
  onStored?: () => void;
};

async function encryptAesGcmToBase64(data: string, password: string) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), { name: "PBKDF2" }, false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("secure_salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(data));
  const buffer = new Uint8Array(iv.length + encrypted.byteLength);
  buffer.set(iv, 0);
  buffer.set(new Uint8Array(encrypted), iv.length);
  let binary = "";
  buffer.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

export default function TextStorageCard({ userid, contractid, onStored }: Props) {
  const [entryName, setEntryName] = useState("");
  const [textData, setTextData] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStore = async () => {
    setError(null);
    if (!entryName || !textData || !password) {
      setError("Please fill all fields");
      return;
    }
    try {
      setBusy(true);
      const encrypted = await encryptAesGcmToBase64(textData, password);

      // 1) Resolve user's contract address
      const contractInfo = await getUserContract(userid);
      if (!contractInfo || !contractInfo.contract_address) {
        throw new Error("No contract address found. Please deploy your contract in Settings.");
      }

      // 2) Send on-chain tx first
      if (!(window as any).ethereum) throw new Error("MetaMask not detected");
      const { BrowserProvider, Contract } = await import("ethers");
      const provider = new BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new Contract(contractInfo.contract_address, ABI as any, signer);
      const tx = await contract.addEntry(entryName, encrypted, "", { type: 0 });
      const receipt = await tx.wait();
      const txHash: string = tx.hash || receipt?.hash;

      // 3) Only after success, write to backend with tx hash
      await createTextEntry({ userid, contractid, entry_name: entryName, encrypted_data: encrypted, transaction_hash: txHash });
      setEntryName("");
      setTextData("");
      setPassword("");
      onStored?.();
    } catch (e: any) {
      setError(e?.message || "Failed to store text");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-emerald-600" />
          <span>Store Text/Notes</span>
        </CardTitle>
        <CardDescription>
          Encrypt and store private notes, seed phrases, or any text data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="textName">Entry Name</Label>
          <Input id="textName" placeholder="e.g., 'Personal Notes', 'Seed Phrase'" className="border-slate-200 focus:border-emerald-500" value={entryName} onChange={(e) => setEntryName(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textData">Text Content</Label>
          <Textarea id="textData" placeholder="Enter your private text, notes, or data..." rows={4} className="border-slate-200 focus:border-emerald-500 resize-none" value={textData} onChange={(e) => setTextData(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textPassword">Encryption Password</Label>
          <Input id="textPassword" type="password" placeholder="Strong password for encryption" className="border-slate-200 focus:border-emerald-500" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button onClick={handleStore} disabled={busy} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Lock className="h-4 w-4 mr-2" />
          {busy ? "Storing..." : "Encrypt & Store Text"}
        </Button>

        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Shield className="h-3 w-3 inline mr-1" />
          Your text will be encrypted with AES-256 before blockchain storage
        </div>
      </CardContent>
    </Card>
  );
}
