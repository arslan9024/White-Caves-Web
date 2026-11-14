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
import { fetchVerifiedInventory } from '@/lib/inventoryApi';
import { MARKET_STATS } from '@/data/market.data';
import { TEAM_MEMBERS } from '@/data/team.data';

export default async function Home() {
  const featuredProperties = await fetchVerifiedInventory({ featuredOnly: true });
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-zinc-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarketPulseLiveTicker />
        <RegulatoryTrustStrip />
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
