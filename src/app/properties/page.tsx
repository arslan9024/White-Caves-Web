import { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { PropertyDirectory } from '@/components/Directory/PropertyDirectory';
import { fetchVerifiedInventory } from '@/lib/inventoryApi';

export const revalidate = 300;

export const metadata = {
  title: 'Luxury Properties for Sale & Rent in Dubai | White Caves',
  description: 'Explore the complete verified collection of ultra-prime villas, waterfront penthouses, and branded residences across Dubai.',
};

async function PropertyDirectoryLoader() {
  const verifiedProperties = await fetchVerifiedInventory();
  return <PropertyDirectory initialProperties={verifiedProperties} />;
}

export default function PropertiesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <header className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
              Sovereign Real Estate Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mt-2">
              Dubai Ultra-Prime Inventory
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 max-w-2xl mx-auto">
              Validated secondary market acquisitions, resale trophy assets, and pre-allocated master villas under official RERA brokerage standards.
            </p>
          </div>
        </header>

        {/* Dynamic Directory with Suspense for Next.js 16 Partial Prerendering */}
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center text-xs font-mono text-zinc-500">
              Loading verified Dubai inventory...
            </div>
          }
        >
          <PropertyDirectoryLoader />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
