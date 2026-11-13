import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { OffPlanShowcase } from '@/components/OffPlan/OffPlanShowcase';
import { OFF_PLAN_PROJECTS } from '@/data/offplan.data';

export const metadata = {
  title: 'Dubai Off-Plan Projects & Master Launches | White Caves',
  description: 'Direct developer allocations from Emaar, Nakheel, DAMAC, and Sobha with privileged staged payment plans and pre-launch pricing.',
};

export default function OffPlanPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <header className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
              Strategic Developer Allocations
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2">
              Dubai Off-Plan Master Launches
            </h1>
            <p className="text-sm text-zinc-400 mt-3 max-w-2xl mx-auto">
              Privileged pre-launch access, developer direct payment structures, and high-capital-growth master developments across the UAE.
            </p>
          </div>
        </header>

        {/* Off Plan Grid */}
        <OffPlanShowcase projects={OFF_PLAN_PROJECTS} />
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
