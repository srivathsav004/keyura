import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Database, Lock } from "lucide-react";
import { useRef, useState } from "react";
import { createFileEntry } from "@/services/entries";
import { getUserContract } from "@/services/contracts";
import { ABI } from "./contractBytecode";

type Props = {
  userid: number;
  contractid: number;
  onStored?: () => void;
};

async function encryptAesGcmBytes(bytes: Uint8Array, password: string) {
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
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, bytes);
  const out = new Uint8Array(iv.length + encrypted.byteLength);
  out.set(iv, 0);
  out.set(new Uint8Array(encrypted), iv.length);
  return out;
}

function xorEncryptToBase64(text: string, password: string) {
  const textBytes = new TextEncoder().encode(text);
  const pwdBytes = new TextEncoder().encode(password);
  const enc = textBytes.map((b, i) => b ^ pwdBytes[i % pwdBytes.length]);
  let bin = "";
  enc.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

export default function FileStorageCard({ userid, contractid, onStored }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStore = async () => {
    setError(null);
    const file = fileRef.current?.files?.[0];
    if (!file) return setError("Select a file");
    if (!password) return setError("Enter encryption password");
    try {
      setBusy(true);
      // Encrypt file bytes client-side
      const ab = await file.arrayBuffer();
      const encryptedBytes = await encryptAesGcmBytes(new Uint8Array(ab), password);

      // Upload to Pinata
      const jwt = process.env.NEXT_PUBLIC_PINATA_JWT;
      if (!jwt) throw new Error("Missing NEXT_PUBLIC_PINATA_JWT");
      const form = new FormData();
      const blob = new Blob([encryptedBytes], { type: "application/octet-stream" });
      form.append("file", blob, file.name);
      const upload = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: { Authorization: `Bearer ${jwt}` },
        body: form,
      });
      if (!upload.ok) {
        const txt = await upload.text();
        throw new Error(`Pinata upload failed: ${txt}`);
      }
      const data = await upload.json();
      const cid: string = data.IpfsHash;

      // XOR-encrypt CID for on-chain style storage
      const encrypted_cid = xorEncryptToBase64(cid, password);

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
      const tx = await contract.addEntry(fileName || file.name, encrypted_cid, file.type || "application/octet-stream", { type: 0 });
      const receipt = await tx.wait();
      const txHash: string = tx.hash || receipt?.hash;

      // 3) After success, call backend with tx hash
      await createFileEntry({
        userid,
        contractid,
        entry_name: fileName || file.name,
        original_filename: file.name,
        file_type: file.type || "application/octet-stream",
        file_size: file.size,
        encrypted_cid,
        ipfs_cid: cid,
        transaction_hash: txHash,
      });

      setFileName("");
      setPassword("");
      if (fileRef.current) fileRef.current.value = "";
      onStored?.();
    } catch (e: any) {
      setError(e?.message || "Failed to store file");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5 text-emerald-600" />
          <span>Store Files</span>
        </CardTitle>
        <CardDescription>
          Upload and encrypt documents, images, or any file type
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fileInput">Select File</Label>
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-emerald-300 transition-colors">
            <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600">Click to upload or drag and drop</p>
            <p className="text-xs text-slate-400">Any file type supported</p>
            <Input id="fileInput" ref={fileRef} type="file" className="hidden" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fileName">File Name (Optional)</Label>
          <Input id="fileName" placeholder="Custom name for your file" className="border-slate-200 focus:border-emerald-500" value={fileName} onChange={(e) => setFileName(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filePassword">Encryption Password</Label>
          <Input id="filePassword" type="password" placeholder="Strong password for encryption" className="border-slate-200 focus:border-emerald-500" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button onClick={handleStore} disabled={busy} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Lock className="h-4 w-4 mr-2" />
          {busy ? "Storing..." : "Encrypt & Store File"}
        </Button>

        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Database className="h-3 w-3 inline mr-1" />
          Files encrypted locally, then stored on IPFS via Pinata
        </div>
      </CardContent>
    </Card>
  );
}
