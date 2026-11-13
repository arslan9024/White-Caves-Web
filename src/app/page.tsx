import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero';
import { RegulatoryTrustStrip } from '@/components/TrustStrip';
import { CurrencyUnitBar } from '@/components/CurrencyUnitBar';
import { StatsBanner } from '@/components/MarketStats';
import { PropertyGrid } from '@/components/Properties';
import { AreaGuideGrid } from '@/components/AreaGuides';
import { DubaiSunsetGallery } from '@/components/Gallery';
import { ToolsDashboard } from '@/components/Tools';
import { TestimonialsSection } from '@/components/Testimonials';
import { TeamGrid } from '@/components/Team';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { FEATURED_PROPERTIES } from '@/data/properties.data';
import { MARKET_STATS } from '@/data/market.data';
import { TEAM_MEMBERS } from '@/data/team.data';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-zinc-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RegulatoryTrustStrip />
        <CurrencyUnitBar />
        <StatsBanner stats={MARKET_STATS} />
        <PropertyGrid properties={FEATURED_PROPERTIES} />
        <AreaGuideGrid />
        <DubaiSunsetGallery />
        <ToolsDashboard />
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
