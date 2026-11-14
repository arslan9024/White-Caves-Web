'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

export interface DamacHills2ClusterBadgeProps {
  clusterCount?: number;
  activeListings?: number;
  absorptionRate?: number;
  className?: string;
}

export const DamacHills2ClusterBadge = ({
  clusterCount = 31,
  activeListings = 85,
  absorptionRate = 94.2,
  className = '',
}: DamacHills2ClusterBadgeProps) => {
  const [livePulses, setLivePulses] = useState(activeListings);

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulses((prev) => (prev >= 88 ? 84 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      role="region"
      aria-label="DAMAC Hills 2 Cluster Market Pulse"
      className={`inline-flex flex-wrap items-center gap-3 p-1.5 pr-3 rounded-2xl bg-zinc-900/90 border border-zinc-700/70 backdrop-blur-xl shadow-xl hover:border-[#EF4444]/50 transition-all ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#EF4444] to-rose-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md shadow-red-600/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <span>DAMAC Hills 2</span>
      </div>

      <div className="flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1 text-zinc-300">
          <Sparkles size={13} className="text-amber-400" />
          <span className="font-extrabold text-white">{clusterCount}</span>
          <span className="text-[11px] text-zinc-400">Clusters</span>
        </div>

        <span className="text-zinc-700" aria-hidden="true">|</span>

        <div className="flex items-center gap-1 text-zinc-300">
          <Users size={13} className="text-sky-400" />
          <span className="font-extrabold text-white">{livePulses}</span>
          <span className="text-[11px] text-zinc-400">Live Deals</span>
        </div>

        <span className="text-zinc-700" aria-hidden="true">|</span>

        <div className="flex items-center gap-1 text-emerald-400 font-bold">
          <TrendingUp size={13} />
          <span>{absorptionRate}%</span>
          <span className="text-[10px] text-emerald-500 font-semibold uppercase">Absorption</span>
        </div>
      </div>

      <Link
        href="/properties?community=damac-hills-2"
        title="View all DAMAC Hills 2 clusters"
        aria-label="View DAMAC Hills 2 properties"
        className="ml-auto p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
      >
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
};
