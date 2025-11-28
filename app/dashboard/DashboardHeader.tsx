'use client';

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  onLogout?: () => void;
  addressShort?: string;
  lastRefresh?: string | null;
  onRefresh?: () => Promise<void>;
};

const DashboardHeader = ({ onLogout, addressShort = "0x" }: Props) => {
  const [istTime, setIstTime] = useState<string>("");
  const [istDate, setIstDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).toUpperCase();

      const date = new Date().toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      setIstTime(now);
      setIstDate(date);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left logo */}
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image 
              src="/keyura-logo.png" 
              alt="Keyura Logo" 
              width={52} 
              height={52} 
              className="h-15 w-15 object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-semibold bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent tracking-tight">
            Keyura
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">

          {/* Smaller, professional date/time */}
          <div className="flex flex-col items-end leading-tight select-none">
            <span className="text-[12px] font-medium text-slate-600">
              {istDate}
            </span>

            <span className="text-[18px] font-semibold text-slate-900 mt-[1px]">
              {istTime}
            </span>
          </div>

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="h-8 w-8 p-0 rounded-full hover:bg-slate-100 transition"
            title="Logout"
          >
            <LogOut className="h-4 w-4 text-slate-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
