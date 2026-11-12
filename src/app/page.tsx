import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero';
import { RegulatoryTrustStrip } from '@/components/TrustStrip';
import { StatsBanner } from '@/components/MarketStats';
import { PropertyGrid } from '@/components/Properties';
import { AreaGuideGrid } from '@/components/AreaGuides';
import { ToolsDashboard } from '@/components/Tools';
import { TestimonialsSection } from '@/components/Testimonials';
import { TeamGrid } from '@/components/Team';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { FEATURED_PROPERTIES } from '@/data/properties.data';
import { MARKET_STATS } from '@/data/market.data';
import { TEAM_MEMBERS } from '@/data/team.data';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RegulatoryTrustStrip />
        <StatsBanner stats={MARKET_STATS} />
        <PropertyGrid properties={FEATURED_PROPERTIES} />
        <AreaGuideGrid />
        <ToolsDashboard />
        <TestimonialsSection />
        <TeamGrid members={TEAM_MEMBERS} />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppConciergePill />
    </div>
  );
}
