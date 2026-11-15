import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  TrendingUp,
  Building2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Phone,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { PropertyCard } from '@/components/Properties/PropertyCard';
import { COMMUNITIES } from '@/components/AreaGuides/areaGuides.data';
import { ALL_PROPERTIES } from '@/data/all-properties.data';
import { fetchVerifiedInventory } from '@/lib/inventoryApi';
import { WHATSAPP_LINK } from '@/data/nav.data';

interface CommunityGuidePageProps {
  params: Promise<{ slug: string }>;
}

const COMMUNITY_HIGHLIGHTS: Record<
  string,
  {
    developer: string;
    serviceChargeRange: string;
    completionStatus: string;
    goldenVisaEligible: boolean;
    overview: string;
    keyClusters: string[];
  }
> = {
  'damac-hills-2': {
    developer: 'DAMAC Properties',
    serviceChargeRange: 'AED 3.20 – 4.50 / sq.ft',
    completionStatus: 'Ready & Phased Master Clusters',
    goldenVisaEligible: true,
    overview:
      'DAMAC Hills 2 is a self-contained eco-friendly master golf and water community featuring Malibu Beach, lazy river, equestrian stables, sports fields, and high-yield 3 to 6-bedroom family villas and townhouses.',
    keyClusters: ['Camelia', 'Verona', 'Natura', 'Violet', 'Pacifica', 'Vardon', 'Claret'],
  },
  'downtown-dubai': {
    developer: 'Emaar Properties',
    serviceChargeRange: 'AED 22.00 – 38.00 / sq.ft',
    completionStatus: 'Ultra-Prime Trophy Core',
    goldenVisaEligible: true,
    overview:
      'Anchored by Burj Khalifa, The Dubai Mall, and The Opera District, Downtown Dubai commands global liquidity, institutional capital appreciation, and strong short-term and executive rental yields.',
    keyClusters: ['Burj Khalifa Zone', 'Opera District', 'Sheikh Mohammed Bin Rashid Blvd', 'Address Residences'],
  },
  'palm-jumeirah': {
    developer: 'Nakheel & Boutique Ultra-Prime Developers',
    serviceChargeRange: 'AED 12.50 – 28.00 / sq.ft',
    completionStatus: 'Private Beachfront Trophy Haven',
    goldenVisaEligible: true,
    overview:
      'The world-renowned archipelago of private beachfront signature villas, garden homes, and branded sky mansions (Six Senses, Atlantis The Royal, Como Residences) delivering unmatched capital preservation.',
    keyClusters: ['Fronds A–P Signature Villas', 'West Crescent', 'East Crescent', 'Palm Trunk'],
  },
  'dubai-marina': {
    developer: 'Emaar & Select Group',
    serviceChargeRange: 'AED 16.00 – 24.50 / sq.ft',
    completionStatus: 'High-Occupancy Waterfront District',
    goldenVisaEligible: true,
    overview:
      'A 3.5 km man-made yacht harbor flanked by luxury residential towers, Marina Walk dining, and direct beach access to JBR, consistently ranking among Dubai’s highest occupancy rental markets.',
    keyClusters: ['Marina Gate', 'Emaar 6 Towers', 'JBR Walk', 'Bluewaters Adjacency'],
  },
  'business-bay': {
    developer: 'Omniyat, Binghatti, DAMAC & Ellington',
    serviceChargeRange: 'AED 15.50 – 26.00 / sq.ft',
    completionStatus: 'Central Financial & Canal Hub',
    goldenVisaEligible: true,
    overview:
      'Spanning the Dubai Water Canal immediately south of DIFC and Downtown Dubai, Business Bay hosts ultra-luxury branded towers (Bugatti, Mercedes-Benz Places, The Lana Dorchester) and Grade-A commercial strata.',
    keyClusters: ['Marasi Drive Waterfront', 'Canal Promenade', 'Executive Towers', 'South Ridge Border'],
  },
  'dubai-hills': {
    developer: 'Emaar Properties & Meraas',
    serviceChargeRange: 'AED 4.50 – 15.00 / sq.ft',
    completionStatus: 'Green Heart of Dubai Master Estate',
    goldenVisaEligible: true,
    overview:
      'Built around an 18-hole championship golf course, Dubai Hills Park, and Dubai Hills Mall, this master community is the premier address for ultra-high-net-worth families seeking moderngolf mansions and park-facing residences.',
    keyClusters: ['Hills Grove & Hills View Mansions', 'Parkways & Fairways', 'Golf Place', 'Maple & Sidra'],
  },
};

export async function generateStaticParams() {
  return COMMUNITIES.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: CommunityGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = COMMUNITIES.find((c) => c.id === slug);

  if (!community) {
    return { title: 'Dubai Community Guide | White Caves Real Estate' };
  }

  return {
    title: `${community.name} Area Guide, ROI & Properties | White Caves Real Estate`,
    description: `${community.tagline}. Typical range: ${community.avgPrice} with ${community.roi}. Explore DLD verified listings in ${community.name}.`,
  };
}

async function CommunityGuideContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = COMMUNITIES.find((c) => c.id === slug);

  if (!community) {
    notFound();
  }

  const details = COMMUNITY_HIGHLIGHTS[community.id] ?? {
    developer: 'Master Developer',
    serviceChargeRange: 'AED 12.00 / sq.ft',
    completionStatus: 'Prime Master Community',
    goldenVisaEligible: true,
    overview: community.tagline,
    keyClusters: ['Phase 1', 'Phase 2', 'Waterfront'],
  };

  const allInventory = await fetchVerifiedInventory();
  const keyword = community.name.replace('Life in ', '').split(' ')[0].toLowerCase();
  const matchingProperties = allInventory.filter((p) =>
    p.location.toLowerCase().includes(keyword)
  );
  const displayProperties =
    matchingProperties.length > 0 ? matchingProperties : ALL_PROPERTIES.slice(0, 3);

  return (
    <div className="space-y-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#communities"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-[#EF4444] transition-colors"
        >
          <ArrowLeft size={14} /> Back to All Master Communities
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
          <ShieldCheck size={14} /> DLD & RERA Verified District Guide
        </span>
      </div>

      {/* Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <Image
            src={community.image}
            alt={community.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          {community.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#EF4444] text-white text-xs font-bold uppercase tracking-wider">
              {community.badge}
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              <MapPin size={14} />
              <span>Dubai Master Community Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{community.name}</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              {details.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">
                Typical Price Band
              </div>
              <div className="text-lg font-black font-mono mt-1">{community.avgPrice}</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">
                Benchmark Yield / ROI
              </div>
              <div className="text-lg font-black font-mono text-emerald-500 flex items-center gap-1 mt-1">
                <TrendingUp size={16} />
                <span>{community.roi}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-zinc-500">Master Developer:</span>
              <span className="font-bold">{details.developer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">DLD Service Charge Index:</span>
              <span className="font-mono font-bold">{details.serviceChargeRange}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">10-Year UAE Golden Visa:</span>
              <span className="font-bold text-emerald-500">
                {details.goldenVisaEligible ? 'Eligible (AED 2M+ Threshold)' : 'Subject to Valuation'}
              </span>
            </div>
          </div>

          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
              `Hi White Caves Private Client Desk, please share available off-market & DLD verified inventory in ${community.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={14} /> Request {community.name} Specialist Briefing
          </a>
        </div>
      </div>

      {/* Sub-Clusters */}
      <section className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-3">
          <Sparkles size={14} />
          <span>Prime Sub-Communities & Enclaves</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {details.keyClusters.map((cluster) => (
            <span
              key={cluster}
              className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold"
            >
              <Building2 size={12} className="inline mr-1.5 text-[#EF4444]" />
              {cluster}
            </span>
          ))}
        </div>
      </section>

      {/* Active Properties in Community */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black">Featured Acquisitions in {community.name}</h2>
          <Link
            href="/properties"
            className="text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:underline"
          >
            View All Inventory &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function CommunityGuidePage({ params }: CommunityGuidePageProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-12">
        <Suspense
          fallback={
            <div className="py-24 text-center text-xs font-mono text-zinc-500">
              Loading Dubai master community intelligence...
            </div>
          }
        >
          <CommunityGuideContent params={params} />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
