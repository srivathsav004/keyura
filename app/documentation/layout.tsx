import React from "react";
import Link from "next/link";
import { Sidebar } from "./sidebar";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="w-full px-0 py-0">
        <div className="grid grid-cols-[240px_minmax(0,1fr)]">
          <aside className="sticky top-0 h-screen overflow-y-auto border-r border-slate-200 bg-white/90">
            <div className="px-4 py-3 border-b border-slate-200">
              <Link href="/" className="text-lg font-bold text-primary">Keyura Docs</Link>
            </div>
            <Sidebar />
          </aside>
          <main className="min-w-0 px-4 sm:px-5 lg:px-6 py-4">
            <div className="prose prose-slate max-w-none lg:prose-lg">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
