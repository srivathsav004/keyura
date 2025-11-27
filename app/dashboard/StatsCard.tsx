import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon?: ReactNode;
};

export default function StatsCard({ title, value, icon }: Props) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-transparent pointer-events-none" />
      <div className="relative p-5 flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
          <p className="text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-emerald-100 text-emerald-700 shadow-inner">{icon}</div>
      </div>
    </Card>
  );
}
