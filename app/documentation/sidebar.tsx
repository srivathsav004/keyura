"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Lock, FileText, Wallet, Layers, Cpu, HelpCircle, Phone, Shield, Folder, BookOpen, Boxes, DollarSign } from "lucide-react";

const nav = [
  {
    label: "Getting Started",
    icon: BookOpen,
    href: "/documentation#getting-started",
    children: [
      { label: "What is Keyura", href: "/documentation#what-is-keyura" },
      { label: "Prerequisites", href: "/documentation#prerequisites" },
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
  // {
  //   label: "Technical Details",
  //   icon: Cpu,
  //   href: "/documentation#technical-details",
  //   children: [
  //     { label: "Smart Contract Architecture", href: "/documentation#contracts" },
  //     { label: "IPFS Integration", href: "/documentation#ipfs" },
  //     { label: "Supported File Types", href: "/documentation#types" },
  //   ],
  // },
  // {
  //   label: "Gas Fee Estimations",
  //   icon: DollarSign,
  //   href: "/documentation#pricing",
  //   children: [
  //     { label: "Cost Breakdown", href: "/documentation#breakdown" },
  //     { label: "Gas Fee Estimates", href: "/documentation#gas" },
  //     { label: "Payment Methods", href: "/documentation#payment" },
  //   ],
  // },
  // {
  //   label: "FAQ",
  //   icon: HelpCircle,
  //   href: "/documentation#faq",
  //   children: [
  //     { label: "Common Questions", href: "/documentation#common" },
  //     { label: "Troubleshooting", href: "/documentation#troubleshooting" },
  //     { label: "Best Practices", href: "/documentation#best-practices" },
  //   ],
  // },
  // {
  //   label: "Support",
  //   icon: Phone,
  //   href: "/documentation#support",
  //   children: [
  //     { label: "Contact Information", href: "/documentation#contact" },
  //     { label: "Community Links", href: "/documentation#community" },
  //   ],
  // },
];

export function Sidebar() {
  const pathname = usePathname();

  // Scrollspy: observe section headings on the single /documentation page
  const allIds = useMemo(
    () => [
      "getting-started",
      "what-is-keyura",
      "prerequisites",
      "security",
      "encryption",
      "blockchain",
      "privacy",
      "using-keyura",
      "wallet",
      "deploy",
      "files",
      "text",
      "access",
      // "technical-details",
      // "contracts",
      // "ipfs",
      // "types",
      // "pricing",
      // "breakdown",
      // "gas",
      // "payment",
      // "faq",
      // "common",
      // "troubleshooting",
      // "best-practices",
      // "support",
      // "contact",
      // "community",
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("getting-started");

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Initialize from current hash on mount for direct navigations
    const initHash = window.location.hash?.replace("#", "");
    if (initHash) setActiveId(initHash);

    // Keep in sync with hash changes (e.g., back/forward navigation)
    const onHashChange = () => {
      const h = window.location.hash?.replace("#", "");
      if (h) setActiveId(h);
    };
    window.addEventListener("hashchange", onHashChange);
    const elements = allIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [allIds]);

  const isActive = (href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return false;
    return activeId === hash;
  };

  const smoothNavigate = (href: string) => {
    if (typeof window === "undefined") return;
    const hash = href.split("#")[1];
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update hash without reloading
      history.pushState(null, "", `#${hash}`);
      setActiveId(hash);
    }
  };

  const isSectionActive = (sectionId: string) => {
    // A section is active if the current activeId is itself or one of its children
    const sectionChildrenMap: Record<string, string[]> = {
      "getting-started": ["what-is-keyura", "prerequisites"],
      "security": ["encryption", "blockchain", "privacy"],
      "using-keyura": ["wallet", "deploy", "files", "text", "access"],
      // "technical-details": ["contracts", "ipfs", "types"],
      // pricing: ["breakdown", "gas", "payment"],
      // faq: ["common", "troubleshooting", "best-practices"],
      // support: ["contact", "community"],
    };
    return activeId === sectionId || (sectionChildrenMap[sectionId] || []).includes(activeId);
  };

  return (
    <nav className="p-0">
      <ul className="space-y-1">
        {nav.map((item) => {
          const active = isSectionActive(item.href.split("#")[1] || "");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => {
                  // Smooth-scroll within the documentation page
                  if (item.href.includes("#")) {
                    e.preventDefault();
                    smoothNavigate(item.href);
                  }
                }}
                aria-current={active ? "true" : undefined}
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
                        onClick={(e) => {
                          if (sub.href.includes("#")) {
                            e.preventDefault();
                            smoothNavigate(sub.href);
                          }
                        }}
                        aria-current={isActive(sub.href) ? "true" : undefined}
                        className={`block rounded-none px-4 py-1.5 text-xs hover:bg-slate-100 ${
                          isActive(sub.href) ? "text-primary" : "text-slate-600"
                        }`}
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
