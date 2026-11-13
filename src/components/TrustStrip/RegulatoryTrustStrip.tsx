import { REGULATORY_CREDENTIALS } from './trustStrip.data';
import { DldTrakheesiModal } from './DldTrakheesiModal';

export const RegulatoryTrustStrip = () => (
  <section
    className="w-full bg-white/90 dark:bg-zinc-950/90 border-y border-red-500/20 py-4 px-6 lg:px-12 backdrop-blur-md"
    aria-label="Government and Regulatory Compliance Credentials"
  >
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 md:gap-8">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-zinc-600 dark:text-zinc-300">
            Regulated &amp; Licensed in Dubai
          </span>
        </div>
        <DldTrakheesiModal />
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:flex-1">
        {REGULATORY_CREDENTIALS.map(({ icon: Icon, title, badge, subtext }) => (
          <li
            key={title}
            className="flex items-center gap-2.5 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 rounded-xl px-3 py-2 transition-all group"
          >
            <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
              <Icon className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200 truncate">{title}</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                  {badge}
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">{subtext}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
