import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { PricingDashboard } from '@/components/Pricing/PricingDashboard';

export const metadata: Metadata = {
  title: 'Broker Pricing & 100% Commission Split Plans | White Caves Real Estate',
  description:
    'Explore White Caves Real Estate LLC broker membership plans: 100% commission retention, 95/5, 90/10, 85/15, and AED 0 Free 75/25 starter plans with UAE residence visa & RERA card support.',
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <header className="pt-20 pb-14 px-6 lg:px-12 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-transparent text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold uppercase tracking-widest mb-4">
              RERA ORN #12345 • Partner & Associate Tiers
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              100% Commission & Dynamic Split Plans
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
              In-house salaried advisors operate on a 50/50 split with full UAE visa sponsorship, or
              private freelance brokers can retain up to 100% commission under our RERA umbrella.
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <PricingDashboard />
        </div>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
