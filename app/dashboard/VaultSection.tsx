import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, Key, FileText, Upload, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function EntryCard({ name, type, date, size, fileType }: any) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {type === 'text' ?
            <FileText className="h-5 w-5 text-blue-500" /> :
            <Upload className="h-5 w-5 text-emerald-500" />
          }
          <span className="font-medium text-slate-900">{name}</span>
        </div>
        <Badge variant="secondary" className="text-xs">
          {type === 'text' ? 'Text' : fileType || 'File'}
        </Badge>
      </div>

      <div className="space-y-1 text-sm text-slate-500">
        <p>Size: {size}</p>
        <p>Stored: {date}</p>
      </div>

      <Separator className="my-3" />

      <div className="flex space-x-2">
        <Button size="sm" variant="outline" className="flex-1">
          <Eye className="h-3 w-3 mr-1" />
          View
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          <Download className="h-3 w-3 mr-1" />
          Download
        </Button>
      </div>
    </div>
  );
}

export default function VaultSection() {
  return (
    <div className="space-y-6">
      {/* Decrypt Access Panel */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5 text-emerald-600" />
            <span>Access Your Vault</span>
          </CardTitle>
          <CardDescription>
            Enter your password to decrypt and view your stored data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input type="password" placeholder="Enter your decryption password" className="border-slate-200 focus:border-emerald-500" />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Eye className="h-4 w-4 mr-2" />
              Unlock Vault
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search & Filter */}
      <Card className="border-slate-200">
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <svg className="h-4 w-4 absolute left-3 top-3 text-slate-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <Input placeholder="Search your entries..." className="pl-10 border-slate-200 focus:border-emerald-500" />
            </div>
            <Button variant="outline">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EntryCard name="Personal Notes" type="text" date="2 days ago" size="1.2 KB" />
        <EntryCard name="Passport Scan" type="file" date="1 week ago" size="2.4 MB" fileType="PDF" />
        <EntryCard name="Seed Phrase" type="text" date="3 weeks ago" size="256 bytes" />
      </div>
    </div>
  );
}
