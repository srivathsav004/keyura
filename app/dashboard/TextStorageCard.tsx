import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, FileText, Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { createTextEntry } from "@/services/entries";
import { getUserContract } from "@/services/contracts";
import { ABI } from "./contractBytecode";
import { keccak256, toUtf8Bytes } from "ethers";

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
  const [status, setStatus] = useState<string>("");

  const handleStore = async () => {
    setError(null);
    if (!entryName || !textData || !password) {
      setError("Please fill all fields");
      return;
    }
    try {
      setBusy(true);
      setStatus("Encrypting...");
      const encrypted = await encryptAesGcmToBase64(textData, password);

      // 1) Resolve user's contract address
      setStatus("Resolving contract...");
      const contractInfo = await getUserContract(userid);
      if (!contractInfo || !contractInfo.contract_address) {
        throw new Error("No contract address found. Please deploy your contract in Settings.");
      }

      // 2) Send on-chain tx first
      if (!(window as any).ethereum) throw new Error("MetaMask not detected");
      const { BrowserProvider, Contract } = await import("ethers");
      const provider = new BrowserProvider((window as any).ethereum);
      setStatus("Connecting wallet...");
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      // Ensure Polygon Amoy
      try {
        const net = await provider.getNetwork();
        if (Number(net.chainId) !== 80002) {
          setStatus("Switching to Polygon Amoy...");
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x13882" }],
          });
        }
      } catch (switchErr) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13882",
                chainName: "Polygon Amoy",
                nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
                rpcUrls: ["https://rpc-amoy.polygon.technology"],
                blockExplorerUrls: ["https://amoy.polygonscan.com"],
              },
            ],
          });
        } catch (addErr) {
          console.error("Network switch/add failed", addErr);
          setError("Please switch your wallet to Polygon Amoy testnet and try again.");
          setStatus("");
          return;
        }
      }
      const addrLower = (await signer.getAddress()).toLowerCase();
      const keyHash = keccak256(toUtf8Bytes(`${addrLower}:${password}:secure_salt_v1`));
      const payload = JSON.stringify({ h: keyHash, d: encrypted });

      const contract = new Contract(contractInfo.contract_address, ABI as any, signer);
      setStatus("Sending transaction...");
      const tx = await contract.addEntry(entryName, payload, "");
      setStatus("Waiting for confirmation...");
      const receipt = await tx.wait();
      const txHash: string = tx.hash || receipt?.hash;

      // 3) Only after success, write to backend with tx hash
      setStatus("Saving to backend...");
      await createTextEntry({ userid, contractid, entry_name: entryName, encrypted_data: payload, transaction_hash: txHash });
      setEntryName("");
      setTextData("");
      setPassword("");
      setStatus("Stored successfully.");
      onStored?.();
    } catch (e: any) {
      console.error("Text store failed", e);
      setError(e?.message || "Failed to store text");
      setStatus("");
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

        <Button onClick={handleStore} disabled={busy} className="w-full bg-emerald-600 hover:bg-emerald-700" aria-busy={busy}>
          {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Lock className="h-4 w-4 mr-2" />}
          {busy ? "Processing..." : "Encrypt & Store Text"}
        </Button>
        {status && <div className="text-xs text-emerald-700">{status}</div>}

        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Shield className="h-3 w-3 inline mr-1" />
          Your text will be encrypted with AES-256 before blockchain storage
        </div>
      </CardContent>
    </Card>
  );
}
