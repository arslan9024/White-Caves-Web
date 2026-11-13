import { Building2, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { MarketStatsData } from '../../types/market.types';
import { CountUp } from './CountUp';

interface StatsBannerProps {
  stats: MarketStatsData;
}

export const StatsBanner = ({ stats }: StatsBannerProps) => {
  return (
    <section id="stats" className="w-full bg-zinc-100/40 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 py-12 px-6 lg:px-12 my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-[#EF4444]">
            <Building2 size={24} />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              <CountUp end={stats.totalProperties} />+
            </div>
            <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">Total Properties</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              <CountUp end={stats.availableProperties} />+
            </div>
            <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">Verified Available</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-yellow-400">
            <TrendingUp size={24} />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              AED 45.5B+
            </div>
            <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">Portfolio Value</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-blue-400">
            <Users size={24} />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              <CountUp end={stats.activeAgents} />
            </div>
            <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-0.5">Advisors & Squads</p>
          </div>
        </div>
      </div>
    </section>
  );
};
