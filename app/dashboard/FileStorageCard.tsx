import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Database, Lock } from "lucide-react";

export default function FileStorageCard() {
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
            <Input id="fileInput" type="file" className="hidden" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fileName">File Name (Optional)</Label>
          <Input id="fileName" placeholder="Custom name for your file" className="border-slate-200 focus:border-emerald-500" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filePassword">Encryption Password</Label>
          <Input id="filePassword" type="password" placeholder="Strong password for encryption" className="border-slate-200 focus:border-emerald-500" />
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Lock className="h-4 w-4 mr-2" />
          Encrypt & Store File
        </Button>

        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Database className="h-3 w-3 inline mr-1" />
          Files encrypted locally, then stored on IPFS via Pinata
        </div>
      </CardContent>
    </Card>
  );
}
