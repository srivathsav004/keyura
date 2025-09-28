import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, FileText, Lock } from "lucide-react";

export default function TextStorageCard() {
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
          <Input id="textName" placeholder="e.g., 'Personal Notes', 'Seed Phrase'" className="border-slate-200 focus:border-emerald-500" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textData">Text Content</Label>
          <Textarea id="textData" placeholder="Enter your private text, notes, or data..." rows={4} className="border-slate-200 focus:border-emerald-500 resize-none" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textPassword">Encryption Password</Label>
          <Input id="textPassword" type="password" placeholder="Strong password for encryption" className="border-slate-200 focus:border-emerald-500" />
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Lock className="h-4 w-4 mr-2" />
          Encrypt & Store Text
        </Button>

        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
          <Shield className="h-3 w-3 inline mr-1" />
          Your text will be encrypted with AES-256 before blockchain storage
        </div>
      </CardContent>
    </Card>
  );
}
