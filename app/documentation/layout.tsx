"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="w-full px-0 py-0">
        <div className="lg:hidden sticky top-0 z-30 flex items-center gap-2 border-b border-slate-200 bg-white/80 backdrop-blur px-4 py-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="inline-flex items-center rounded-md border border-slate-300 bg-white px-2 py-1 text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="text-base font-semibold text-primary">Keyura Docs</Link>
        </div>

        <div className="relative">
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-60 border-r border-slate-200 bg-white/95 backdrop-blur transition-transform duration-200 ease-in-out lg:fixed lg:translate-x-0 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="hidden lg:block px-4 py-3 border-b border-slate-200">
              <Link href="/" className="text-lg font-bold text-primary">Keyura Docs</Link>
            </div>
            <div className="h-full overflow-y-auto">
              <Sidebar />
            </div>
          </aside>

          {open && (
            <div
              className="fixed inset-0 z-30 bg-black/30 lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
          )}

          <main className={`min-w-0 px-4 sm:px-5 lg:px-6 py-4 transition-[margin] duration-200 ease-in-out lg:ml-60`}>
            <div className="prose prose-slate max-w-none lg:prose-lg">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
