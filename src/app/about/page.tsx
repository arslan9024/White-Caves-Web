import Link from 'next/link';
import { ShieldCheck, Award, Building2, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { TeamGrid } from '@/components/Team';
import { TEAM_MEMBERS } from '@/data/team.data';
import {
  CORPORATE_CREDENTIALS,
  CORPORATE_MILESTONES,
  CORPORATE_VALUES,
} from '@/data/corporate.data';

export const metadata = {
  title: 'About White Caves Real Estate LLC | Sovereign Dubai Brokerage',
  description:
    'Discover White Caves Real Estate LLC—Dubai DET Licensed (#1388443) and RERA Registered (ORN #12849) luxury property advisory led by Founder Arslan Malik.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <header className="pt-20 pb-14 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              <ShieldCheck size={14} /> RERA ORN #12849 · DET License #1388443
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mt-3">
              Sovereign Excellence in Dubai Real Estate.
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              Founded and led by Managing Director <strong>Arslan Malik Bashir Ahmad</strong>, White Caves Real Estate LLC combines institutional DLD conveyancing with autonomous AI intelligence across 12 specialized corporate departments.
            </p>
          </div>
        </header>

        {/* Statutory Credentials */}
        <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORPORATE_CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800"
              >
                <Award size={20} className="text-[#EF4444] mb-3" />
                <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                  {cred.title}
                </h2>
                <p className="text-xs font-mono font-bold text-[#EF4444] mt-1">
                  {cred.reference}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                  {cred.authority}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values & Timeline */}
        <section className="px-6 lg:px-12 py-16 bg-zinc-100/40 dark:bg-zinc-900/30 border-y border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EF4444] font-bold">
                Our Doctrine
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-2 mb-6">
                Three Pillars of Institutional Trust
              </h2>
              <div className="space-y-4">
                {CORPORATE_VALUES.map((val) => (
                  <div
                    key={val.title}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                  >
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {val.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#EF4444] font-bold">
                Corporate Trajectory
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-2 mb-6">
                Key Milestones (2009–2026)
              </h2>
              <div className="space-y-4">
                {CORPORATE_MILESTONES.map((m) => (
                  <div
                    key={m.year}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
                  >
                    <span className="px-3 py-1 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono font-extrabold shrink-0">
                      {m.year}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {m.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership */}
        <TeamGrid members={TEAM_MEMBERS} />

        {/* Bottom CTA */}
        <section className="px-6 lg:px-12 pb-20 max-w-5xl mx-auto text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-[#EF4444]/30 text-white">
            <Building2 size={28} className="text-[#EF4444] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Partner With White Caves Real Estate
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mt-2">
              Explore our verified Dubai inventory or schedule a private consultation with our managing partners.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold transition"
              >
                Explore Portfolio
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 text-xs font-bold transition"
              >
                Contact Head Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
