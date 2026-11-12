import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero';
import { StatsBanner } from '@/components/MarketStats';
import { PropertyGrid } from '@/components/Properties';
import { TeamGrid } from '@/components/Team';
import { TestimonialsSection } from '@/components/Testimonials';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { FEATURED_PROPERTIES } from '@/data/properties.data';
import { MARKET_STATS } from '@/data/market.data';
import { TEAM_MEMBERS } from '@/data/team.data';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBanner stats={MARKET_STATS} />
        <PropertyGrid properties={FEATURED_PROPERTIES} />
        <TestimonialsSection />
        <TeamGrid members={TEAM_MEMBERS} />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
