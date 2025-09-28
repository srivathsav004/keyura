"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Wallet, Settings, LogOut, KeyRound } from "lucide-react";

type Props = {
  onLogout?: () => void;
  addressShort?: string;
};

const DashboardHeader = ({ onLogout, addressShort = "0x" }: Props) => (
  <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <KeyRound className="h-6 w-6 text-emerald-600" />
        <span className="font-semibold text-slate-900">Keyura</span>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="text-emerald-600 border-emerald-200">
          <Wallet className="h-3 w-3 mr-1" />
          Connected
        </Badge>
        <Button variant="ghost" size="sm" title="Settings">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={onLogout} title="Logout">
          <LogOut className="h-4 w-4" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback>{addressShort}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>
);

export default DashboardHeader;
