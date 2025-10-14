"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Lock, FileText, Wallet, Layers, Cpu, HelpCircle, Phone, Shield, Folder, BookOpen, Boxes, DollarSign } from "lucide-react";

const nav = [
  {
    label: "Getting Started",
    icon: BookOpen,
    href: "/documentation#getting-started",
    children: [
      { label: "What is Keyura", href: "/documentation#what-is-keyura" },
      { label: "Prerequisites", href: "/documentation#prerequisites" },
      { label: "Quick Start Guide", href: "/documentation#quick-start" },
    ],
  },
  {
    label: "Security",
    icon: Shield,
    href: "/documentation#security",
    children: [
      { label: "Encryption Standards", href: "/documentation#encryption" },
      { label: "Blockchain Storage", href: "/documentation#blockchain" },
      { label: "Privacy Guarantees", href: "/documentation#privacy" },
    ],
  },
  {
    label: "Using Keyura",
    icon: Wallet,
    href: "/documentation#using-keyura",
    children: [
      { label: "Setting Up Wallet", href: "/documentation#wallet" },
      { label: "Deploying Your Contract", href: "/documentation#deploy" },
      { label: "Storing Files", href: "/documentation#files" },
      { label: "Storing Text Data", href: "/documentation#text" },
      { label: "Accessing Your Data", href: "/documentation#access" },
    ],
  },
  {
    label: "Technical Details",
    icon: Cpu,
    href: "/documentation#technical-details",
    children: [
      { label: "Smart Contract Architecture", href: "/documentation#contracts" },
      { label: "IPFS Integration", href: "/documentation#ipfs" },
      { label: "Supported File Types", href: "/documentation#types" },
    ],
  },
  {
    label: "Pricing & Fees",
    icon: DollarSign,
    href: "/documentation#pricing",
    children: [
      { label: "Cost Breakdown", href: "/documentation#breakdown" },
      { label: "Gas Fee Estimates", href: "/documentation#gas" },
      { label: "Payment Methods", href: "/documentation#payment" },
    ],
  },
  {
    label: "FAQ",
    icon: HelpCircle,
    href: "/documentation#faq",
    children: [
      { label: "Common Questions", href: "/documentation#common" },
      { label: "Troubleshooting", href: "/documentation#troubleshooting" },
      { label: "Best Practices", href: "/documentation#best-practices" },
    ],
  },
  {
    label: "Support",
    icon: Phone,
    href: "/documentation#support",
    children: [
      { label: "Contact Information", href: "/documentation#contact" },
      { label: "Community Links", href: "/documentation#community" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="p-0">
      <ul className="space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-between rounded-none px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" /> {item.label}
                </span>
                <ChevronRight className="h-4 w-4 opacity-60" />
              </Link>
              {item.children && (
                <ul className="mt-1 ml-0 space-y-1 border-l border-slate-200 pl-4">
                  {item.children.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block rounded-none px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-100"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
