import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { PropertyDirectory } from '@/components/Directory/PropertyDirectory';
import { ALL_PROPERTIES } from '@/data/all-properties.data';

export const metadata = {
  title: 'Luxury Properties for Sale & Rent in Dubai | White Caves',
  description: 'Explore the complete verified collection of ultra-prime villas, waterfront penthouses, and branded residences across Dubai.',
};

export default function PropertiesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <header className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
              Sovereign Real Estate Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2">
              Dubai Ultra-Prime Inventory
            </h1>
            <p className="text-sm text-zinc-400 mt-3 max-w-2xl mx-auto">
              Validated secondary market acquisitions, resale trophy assets, and pre-allocated master villas under official RERA brokerage standards.
            </p>
          </div>
        </header>

        {/* Dynamic Directory */}
        <PropertyDirectory initialProperties={ALL_PROPERTIES} />
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
