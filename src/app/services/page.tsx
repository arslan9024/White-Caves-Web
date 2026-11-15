import Link from 'next/link';
import { CheckCircle2, ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { ContactCTA } from '@/components/ContactCTA';
import {
  BROKERAGE_SERVICES,
  ADVISORY_PROCESS_STEPS,
  PRIME_AREA_YIELDS,
} from '@/data/corporate.data';

export const metadata = {
  title: 'Luxury Real Estate Services, Conveyancing & Ejari | White Caves',
  description:
    'Comprehensive Dubai real estate advisory: off-plan developer allocations, secondary villa sales, RERA Ejari leasing management, and DLD trustee conveyancing.',
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <header className="pt-20 pb-14 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              <ShieldCheck size={14} /> Full-Spectrum DLD &amp; RERA Advisory
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mt-3">
              Bespoke Real Estate Services
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              From pre-launch developer allocations and Golden Visa structuring to turnkey Ejari tenancy management, our 12 specialized departments execute every mandate with institutional precision.
            </p>
          </div>
        </header>

        {/* Core Services Grid */}
        <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BROKERAGE_SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="flex flex-col justify-between p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/50 transition-all shadow-lg"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-[10px] font-extrabold uppercase tracking-wider mb-4">
                    {svc.badge}
                  </span>
                  <h2 className="text-xl font-extrabold text-zinc-900 dark:text-white">
                    {svc.title}
                  </h2>
                  <p className="text-xs font-semibold text-[#EF4444] mt-1 mb-5">
                    {svc.subtitle}
                  </p>

                  <div className="mb-5">
                    <h3 className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-2">
                      Core Mandates
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {svc.subServices.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#EF4444] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-2">
                      Execution Standards
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={svc.ctaHref}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold transition"
                >
                  Explore Service Mandate
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Execution Workflow */}
        <section className="px-6 lg:px-12 py-16 bg-zinc-100/40 dark:bg-zinc-900/30 border-y border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#EF4444] font-bold">
                Transaction Lifecycle
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-2">
                4-Stage Sovereign Conveyancing Protocol
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ADVISORY_PROCESS_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                >
                  <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20">
                    Stage {s.step}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mt-4">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prime Dubai Yield Benchmarks */}
        <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              2026 Market Telemetry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-2">
              Prime Community Yield &amp; Capital Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIME_AREA_YIELDS.map((area) => (
              <Link
                key={area.community}
                href={`/properties?community=${area.communitySlug}`}
                className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/60 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#EF4444] transition-colors">
                    {area.community}
                  </span>
                  <TrendingUp size={16} className="text-emerald-500" />
                </div>
                <div className="flex items-baseline justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block">Gross Yield</span>
                    <span className="text-lg font-extrabold text-zinc-900 dark:text-white">
                      {area.grossYield}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-zinc-400 block">YoY Growth</span>
                    <span className="text-sm font-bold text-emerald-500">
                      {area.appreciationYoY}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
