import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  loading?: boolean;
};

export default function StatsCard({ title, value, icon, loading = false }: Props) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-transparent pointer-events-none" />
      <div className="relative p-5 flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
          {loading ? (
            <div className="h-8 w-20 bg-slate-200 rounded animate-pulse" />
          ) : (
            <p className="text-3xl font-semibold text-slate-900">{value}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${loading ? 'bg-slate-200' : 'bg-emerald-100 text-emerald-700'} shadow-inner`}>
          {loading ? <div className="h-5 w-5" /> : icon}
        </div>
      </div>
    </Card>
  );
}
