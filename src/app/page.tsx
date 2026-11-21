import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero';
import { RegulatoryTrustStrip } from '@/components/TrustStrip';
import { CurrencyUnitBar } from '@/components/CurrencyUnitBar';
import { StatsBanner, MarketPulseLiveTicker } from '@/components/MarketStats';
import { PropertyGrid } from '@/components/Properties';
import { FeaturesSection } from '@/components/Features';
import { AreaGuideGrid } from '@/components/AreaGuides';
import { InteractiveMap } from '@/components/Map';
import { DubaiSunsetGallery } from '@/components/Gallery';
import { InterestWizard } from '@/components/InterestWizard';
import { ToolsDashboard } from '@/components/Tools';
import { MobileAppBanner } from '@/components/MobileAppBanner';
import { TestimonialsSection } from '@/components/Testimonials';
import { TeamGrid } from '@/components/Team';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { fetchPublicRentals, fetchVerifiedInventory } from '@/lib/inventoryApi';
import { MARKET_STATS } from '@/data/market.data';
import { TEAM_MEMBERS } from '@/data/team.data';

export const instant = false;

export default async function Home() {
  const [featuredProperties, availableRentals] = await Promise.all([
    fetchVerifiedInventory({ featuredOnly: true }),
    fetchPublicRentals(),
  ]);
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-zinc-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarketPulseLiveTicker />
        <RegulatoryTrustStrip />

        {/* Quick Dubai Leasing Search Bar & Featured AVAILABLE Rentals */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF4444]">
                Live Residential Leasing Pipeline • DLD &amp; Ejari Verified
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-1">
                Search Available Dubai Rentals
              </h2>
            </div>
            <Link
              href="/rent"
              className="text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:underline"
            >
              View All {availableRentals.length} Available Rentals &rarr;
            </Link>
          </div>

          <form
            method="GET"
            action="/rent"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8"
          >
            <input
              type="text"
              name="community"
              placeholder="Community (e.g. DAMAC Hills 2)"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2.5 text-xs"
            />
            <input
              type="number"
              name="maxRent"
              placeholder="Max Annual Budget (AED)"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2.5 text-xs"
            />
            <select
              name="bedrooms"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2.5 text-xs"
            >
              <option value="">Any Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
            </select>
            <select
              name="cheques"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2.5 text-xs"
            >
              <option value="">Flexible Cheques</option>
              <option value="1">1 Cheque</option>
              <option value="2">2 Cheques</option>
              <option value="4">4 Cheques</option>
              <option value="6">6 Cheques</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 transition"
            >
              Search Rentals
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableRentals.slice(0, 3).map(rental => (
              <Link
                key={rental.slug}
                href={`/rent/${rental.slug}`}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-[#EF4444] transition bg-white dark:bg-zinc-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-[#EF4444] uppercase">
                      {rental.subCommunity} • {rental.community}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {rental.chequesCount} Cheques
                    </span>
                  </div>
                  <h3 className="text-base font-bold group-hover:text-[#EF4444] transition">
                    {rental.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {rental.bedrooms} BR • {rental.bathrooms} Bath • {rental.areaSqFt.toLocaleString()} sq.ft
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-lg font-black font-mono text-[#EF4444]">
                    AED {rental.annualRentAed.toLocaleString()}/yr
                  </span>
                  <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 group-hover:text-[#EF4444]">
                    Request Viewing &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CurrencyUnitBar />
        <StatsBanner stats={MARKET_STATS} />
        <PropertyGrid properties={featuredProperties} />
        <FeaturesSection />
        <AreaGuideGrid />
        <InteractiveMap />
        <InterestWizard />
        <DubaiSunsetGallery />
        <ToolsDashboard />
        <MobileAppBanner />
        <TestimonialsSection />
        <TeamGrid members={TEAM_MEMBERS} />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
