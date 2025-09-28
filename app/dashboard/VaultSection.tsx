import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Key, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TextEntry, FileEntry } from "@/services/entries";
import { useMemo, useState } from "react";

function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const len = bin.length;
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function deriveKey(password: string) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), { name: "PBKDF2" }, false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("secure_salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

async function decryptAesGcmFromBase64(b64: string, password: string): Promise<string> {
  const bytes = base64ToBytes(b64);
  const iv = bytes.slice(0, 12);
  const data = bytes.slice(12);
  const key = await deriveKey(password);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return new TextDecoder().decode(decrypted);
}

async function decryptAesGcmBytes(bytes: Uint8Array, password: string): Promise<Uint8Array> {
  const iv = bytes.slice(0, 12);
  const data = bytes.slice(12);
  const key = await deriveKey(password);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return new Uint8Array(decrypted as ArrayBuffer);
}

function xorCidFromBase64(b64: string, password: string): string {
  const enc = new TextEncoder();
  const data = base64ToBytes(b64);
  const pwd = enc.encode(password);
  const cidBytes = data.map((b, i) => b ^ pwd[i % pwd.length]);
  return new TextDecoder().decode(cidBytes);
}

export default function VaultSection({ entries }: { entries: (TextEntry | FileEntry)[] }) {
  const [q, setQ] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "text" | "file">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pwOpen, setPwOpen] = useState(false);
  const [pwValue, setPwValue] = useState("");
  const [active, setActive] = useState<(TextEntry | FileEntry) | null>(null);
  const [viewResult, setViewResult] = useState<string | null>(null); // for text content
  const isActiveText = !!(active && (active as any).encrypted_data !== undefined);

  const prepared = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = entries;
    if (typeFilter !== "all") {
      const wantText = typeFilter === "text";
      list = list.filter((e) => ("encrypted_data" in e) === wantText);
    }
    if (query) {
      list = list.filter((e) => e.entry_name.toLowerCase().includes(query));
    }
    return list;
  }, [entries, q, typeFilter]);

  const total = prepared.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const rows = prepared.slice(start, start + pageSize);

  const formatIST = (rawTime: string | null | undefined) => {
    if (!rawTime) return "-";
    const dt = new Date(rawTime);
    return dt.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }) + " IST";
  };

  return (
    <div className="space-y-6">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5 text-emerald-600" />
            <span>Access Your Vault</span>
          </CardTitle>
          <CardDescription>Use your password locally to decrypt when viewing entries.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <Input placeholder="Search your entries..." value={q} onChange={(e) => setQ(e.target.value)} className="md:flex-1 border-slate-200 focus:border-emerald-500" />
            <select
              className="border rounded px-2 py-1 text-sm"
              value={typeFilter}
              onChange={(e) => { setTypeFilter(e.target.value as any); setPage(1); }}
            >
              <option value="all">All</option>
              <option value="text">Text</option>
              <option value="file">Files</option>
            </select>
            <select
              className="border rounded px-2 py-1 text-sm"
              value={pageSize}
              onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader className="pb-2">
          <CardTitle>My Entries</CardTitle>
          <CardDescription>Browse all your stored data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-3">Name</th>
                  <th className="py-2 pr-3">Type</th>
                  <th className="py-2 pr-3">Tx Hash</th>
                  <th className="py-2 pr-3">Uploaded</th>
                  <th className="py-2 pr-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((it) => {
                  const isText = (it as any).encrypted_data !== undefined;
                  const type = isText ? "Text" : "File";
                  const txh = (it as any).transaction_hash || "";
                  const shortTx = txh ? `${txh.slice(0, 6)}...${txh.slice(-4)}` : "";
                  const rawTime = (it as any).created_at;

                  return (
                    <tr key={`row-${"entryid" in it ? (it as any).entryid : Math.random()}`} className="border-t">
                      <td className="py-2 pr-3 font-medium text-slate-800">{it.entry_name}</td>
                      <td className="py-2 pr-3"><Badge variant="secondary">{type}</Badge></td>
                      <td className="py-2 pr-3 text-slate-600">
                        {txh ? (
                          <a href={`https://amoy.polygonscan.com/tx/${txh}`} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                            {shortTx}
                          </a>
                        ) : (
                          <span className="text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-2 pr-3 text-slate-600">{formatIST(rawTime)}</td>
                      <td className="py-2 pr-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => { setActive(it as any); setViewResult(null); setPwValue(""); setPwOpen(true); }}
                        >
                          <Eye className="h-3 w-3 mr-1" />Open
                        </Button>
                      </td>
                    </tr>
                  );
                })}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-slate-500">No entries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="text-slate-500">Page {currentPage} of {totalPages} • {total} total</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</Button>
              <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {pwOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-emerald-200">
            <div className="flex items-center justify-between p-4 border-b bg-emerald-50">
              <div className="font-medium text-emerald-700">{isActiveText ? 'View Encrypted Text' : 'Decrypt & Download File'}</div>
              <button className="text-slate-500 hover:text-slate-700" onClick={() => setPwOpen(false)} aria-label="Close modal">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              {!viewResult && (
                <>
                  <div className="text-sm text-slate-600">Enter your password to decrypt.</div>
                  <Input type="password" placeholder="Password" value={pwValue} onChange={(e) => setPwValue(e.target.value)} className="focus:border-emerald-500" />
                </>
              )}
              {viewResult && (
                <div className="bg-slate-50 rounded p-3 text-sm text-slate-800 whitespace-pre-wrap max-h-64 overflow-auto">
                  {viewResult}
                </div>
              )}
            </div>
            <div className="p-4 border-t flex justify-end gap-2">
              <Button variant="outline" onClick={() => setPwOpen(false)} className="border-emerald-600 text-emerald-700">Close</Button>
              {!viewResult && (
                <Button
                  onClick={async () => {
                    if (!active || !pwValue) return;
                    try {
                      if (isActiveText) {
                        let payload = (active as any).encrypted_data as string;
                        try { payload = JSON.parse(payload).d || payload; } catch {}
                        const plaintext = await decryptAesGcmFromBase64(payload, pwValue);
                        setViewResult(plaintext);
                      } else {
                        const fileIt = active as FileEntry;
                        const cid = xorCidFromBase64(fileIt.encrypted_cid, pwValue);
                        const res = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`);
                        if (!res.ok) throw new Error("Failed to fetch from IPFS");
                        const ab = await res.arrayBuffer();
                        const bytes = new Uint8Array(ab);
                        const decrypted = await decryptAesGcmBytes(bytes, pwValue);
                        const blob = new Blob([decrypted], { type: fileIt.file_type || "application/octet-stream" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = fileIt.entry_name || fileIt.original_filename || 'download';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        URL.revokeObjectURL(url);
                        setPwOpen(false);
                      }
                    } catch (e: any) {
                      alert(e?.message || 'Failed to decrypt');
                    }
                  }}
                >
                  {isActiveText ? 'Decrypt' : 'Decrypt & Download'}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
