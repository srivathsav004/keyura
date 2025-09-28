import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Database, Lock, Loader2 } from "lucide-react";
import { useRef, useState, useMemo } from "react";
import { createFileEntry } from "@/services/entries";
import { getUserContract } from "@/services/contracts";
import { ABI } from "./contractBytecode";
import { keccak256, toUtf8Bytes } from "ethers";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB

  const isImage = useMemo(() => {
    return selectedFile ? selectedFile.type.startsWith("image/") : false;
  }, [selectedFile]);

  const handleStore = async () => {
    setError(null);
    const file = fileRef.current?.files?.[0] || selectedFile;
    if (!file) return setError("Select a file");
    if (!password) return setError("Enter encryption password");
    if (file.size > MAX_FILE_BYTES) return setError(`File too large. Max ${Math.floor(MAX_FILE_BYTES / (1024*1024))} MB`);
    try {
      setBusy(true);
      setStatus("Encrypting file...");
      // Encrypt file bytes client-side
      const ab = await file.arrayBuffer();
      const encryptedBytes = await encryptAesGcmBytes(new Uint8Array(ab), password);

      // Upload to Pinata
      setStatus("Uploading to IPFS...");
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
      const contract = new Contract(contractInfo.contract_address, ABI as any, signer);
      const addrLower = (await signer.getAddress()).toLowerCase();
      const keyHash = keccak256(toUtf8Bytes(`${addrLower}:${password}:secure_salt_v1`));
      const payload = JSON.stringify({ h: keyHash, d: encrypted_cid });
      setStatus("Sending transaction...");
      const tx = await contract.addEntry(fileName || file.name, payload, file.type || "application/octet-stream");
      setStatus("Waiting for confirmation...");
      const receipt = await tx.wait();
      const txHash: string = tx.hash || receipt?.hash;

      // 3) After success, call backend with tx hash
      setStatus("Saving to backend...");
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
      setSelectedFile(null);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      setStatus("Stored successfully.");
      onStored?.();
    } catch (e: any) {
      console.error("File store failed", e);
      setError(e?.message || "Failed to store file");
      setStatus("");
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
          <div
            className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-emerald-300 transition-colors cursor-pointer"
            onClick={() => fileRef.current?.click()}
            role="button"
            aria-label="Click to select a file"
          >
            <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600">Click to add a file</p>
            <p className="text-xs text-slate-400">Any file type • Max 25 MB</p>
            <Input
              id="fileInput"
              ref={fileRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0] || null;
                setSelectedFile(f);
                if (previewUrl) URL.revokeObjectURL(previewUrl);
                setPreviewUrl(f ? URL.createObjectURL(f) : null);
                if (f && !fileName) setFileName(f.name);
              }}
            />
            {selectedFile && (
              <div className="mt-4 text-left">
                <div className="flex items-center justify-between bg-slate-900/5 dark:bg-white/5 border rounded px-3 py-2">
                  <div className="flex items-center gap-2 text-sm text-slate-800">
                    <span className="inline-block w-4 h-4 bg-slate-500 rounded-sm" aria-hidden="true" />
                    <span>{selectedFile.name}</span>
                  </div>
                  <div className="text-xs text-slate-500">{(selectedFile.size / 1024).toFixed(2)} KB</div>
                  <button
                    type="button"
                    className="ml-2 text-slate-500 hover:text-red-600 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFile(null);
                      if (previewUrl) URL.revokeObjectURL(previewUrl);
                      setPreviewUrl(null);
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                    aria-label="Remove file"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
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

        <Button onClick={handleStore} disabled={busy} className="w-full bg-emerald-600 hover:bg-emerald-700" aria-busy={busy}>
          {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Lock className="h-4 w-4 mr-2" />}
          {busy ? "Processing..." : "Encrypt & Store File"}
        </Button>
        {status && <div className="text-xs text-emerald-700">{status}</div>}

        <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
          <Database className="h-3 w-3 inline mr-1" />
          Max file size: 25 MB. Files are encrypted locally, pinned to IPFS, and an on-chain pointer is recorded.
        </div>
      </CardContent>
    </Card>
  );
}
