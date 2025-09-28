import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function SettingsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Contract Settings</CardTitle>
          <CardDescription>Manage your blockchain contract</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Current Contract Address</Label>
            <div className="flex space-x-2">
              <Input value="0x742d35Cc6634C0532925a3b8D4C9db..." readOnly className="font-mono text-sm" />
              <Button size="sm" variant="outline">Copy</Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Use Existing Contract</Label>
            <div className="flex space-x-2">
              <Input placeholder="Enter contract address" />
              <Button size="sm">Connect</Button>
            </div>
          </div>

          <Button variant="outline" className="w-full">Deploy New Contract</Button>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your encryption preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-lock Vault</p>
              <p className="text-sm text-slate-500">Lock after inactivity</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Backup Reminders</p>
              <p className="text-sm text-slate-500">Remind to backup keys</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <Button variant="destructive" className="w-full">Clear All Local Data</Button>
        </CardContent>
      </Card>
    </div>
  );
}
