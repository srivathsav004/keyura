"use client";

import DashboardHeader from "./DashboardHeader";

export default function DashboardHeaderClient({ addressShort }: { addressShort?: string }) {
  const onLogout = () => {
    try {
      // Clear userid cookie
      document.cookie = `userid=; Path=/; Max-Age=0`;
      // Clear local session
      try { localStorage.removeItem('keyura_session'); } catch {}
      // Redirect to login
      window.location.href = '/login';
    } catch {
      window.location.href = '/login';
    }
  };

  return <DashboardHeader onLogout={onLogout} addressShort={addressShort} />;
}
