'use client';

import { Button } from "@/components/ui/button";
import { LogOut, KeyRound } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  onLogout?: () => void;
  addressShort?: string;
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
          <KeyRound className="h-5 w-5 text-emerald-600" />
          <span className="font-semibold text-slate-900 text-base">
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
