import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { ToolsDashboard } from '@/components/Tools';
import { InteractiveMap } from '@/components/Map';
import { AreaGuideGrid } from '@/components/AreaGuides';
import { CurrencyUnitBar } from '@/components/CurrencyUnitBar';

export const metadata = {
  title: 'Dubai Property Calculators, DLD Fees & Geospatial Map | White Caves',
  description:
    'Interactive UAE mortgage calculator, statutory 4% DLD transfer fee estimator, net rental yield modeling, and prime community geospatial map.',
};

export default function ToolsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        <header className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
              Underwriting &amp; Market Telemetry
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mt-2">
              Property Tools &amp; Market Insights
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 max-w-2xl mx-auto">
              Model UAE mortgage amortizations, statutory 4% DLD transfer costs, net rental yields, and geospatial community performance across Dubai.
            </p>
          </div>
        </header>

        <CurrencyUnitBar />
        <ToolsDashboard />
        <InteractiveMap />
        <AreaGuideGrid />
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
