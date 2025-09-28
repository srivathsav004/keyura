import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, Key, FileText, Upload, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TextEntry, FileEntry } from "@/services/entries";
import { useMemo, useState } from "react";

type EntryCardProps = {
  item: TextEntry | FileEntry;
};

function EntryCard({ item }: EntryCardProps) {
  const isText = (item as any).encrypted_data !== undefined;
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {isText ? <FileText className="h-5 w-5 text-blue-500" /> : <Upload className="h-5 w-5 text-emerald-500" />}
          <span className="font-medium text-slate-900">{item.entry_name}</span>
        </div>
        <Badge variant="secondary" className="text-xs">
          {isText ? 'Text' : (item as FileEntry).file_type || 'File'}
        </Badge>
      </div>

      <div className="space-y-1 text-sm text-slate-500">
        {!isText && (
          <>
            <p>Size: {(item as FileEntry).file_size} bytes</p>
            <p>Type: {(item as FileEntry).file_type}</p>
          </>
        )}
      </div>

      <Separator className="my-3" />

      <div className="flex space-x-2">
        <Button size="sm" variant="outline" className="flex-1">
          <Eye className="h-3 w-3 mr-1" />
          View
        </Button>
        {!isText && (
          <Button size="sm" variant="outline" className="flex-1">
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
        )}
      </div>
    </div>
  );
}

export default function VaultSection({ entries }: { entries: (TextEntry | FileEntry)[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return entries;
    return entries.filter((e) => e.entry_name.toLowerCase().includes(query));
  }, [entries, q]);

  return (
    <div className="space-y-6">
      {/* Decrypt Access Panel (client-side only when viewing individual) */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5 text-emerald-600" />
            <span>Access Your Vault</span>
          </CardTitle>
          <CardDescription>Use your password locally to decrypt when viewing entries.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Input placeholder="Search your entries..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-3 border-slate-200 focus:border-emerald-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((it) => (
          <EntryCard key={`e-${('entryid' in it) ? it.entryid : Math.random()}`} item={it} />
        ))}
        {filtered.length === 0 && <div className="text-sm text-slate-500">No entries yet.</div>}
      </div>
    </div>
  );
}
