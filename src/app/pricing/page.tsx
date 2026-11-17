import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { PricingDashboard } from '@/components/Pricing/PricingDashboard';

export const metadata: Metadata = {
  title: 'Dubai Real Estate Fee Schedules & Advisory | White Caves',
  description:
    'Explore transparent Dubai Land Department (DLD) and Ejari regulatory fee baselines for landlords, tenants, buyers, and brokers. Request a tailored commercial schedule.',
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <header className="pt-24 pb-12 px-6 lg:px-12 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-900/60 dark:to-transparent text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold uppercase tracking-widest mb-4">
              RERA Regulated Brokerage • Transparent Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Fee Schedules & Commercial Terms
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
              Clear regulatory standards and tailored commercial proposals for property owners,
              tenants, international investors, and elite licensed brokers across Dubai.
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <PricingDashboard />
        </div>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
