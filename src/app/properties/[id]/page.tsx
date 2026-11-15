import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  ShieldCheck,
  Calculator,
  Phone,
  Building2,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { TruCheckBadge } from '@/components/Properties/TruCheckBadge';
import { PropertyCard } from '@/components/Properties/PropertyCard';
import { ALL_PROPERTIES } from '@/data/all-properties.data';
import { fetchVerifiedInventory } from '@/lib/inventoryApi';
import { buildRealEstateListingJsonLd } from '@/lib/realEstateJsonLd';
import { buildPropertyOgMetadata } from '@/lib/ogMetadata';
import { simulateUaeMortgage } from '@/lib/mortgageSimulator';
import { convertFromAed } from '@/lib/currencyConverter';
import { WHATSAPP_LINK } from '@/data/nav.data';

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALL_PROPERTIES.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = ALL_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return {
      title: 'Dubai Prime Property Details | White Caves Real Estate',
    };
  }

  return buildPropertyOgMetadata({
    title: `${property.title} — ${property.location}`,
    description: `${property.bedrooms} Bed, ${property.bathrooms} Bath ${property.type} (${property.sqft.toLocaleString()} sq.ft) in ${property.location}. DLD Trakheesi Verified by White Caves Real Estate LLC.`,
    url: `https://whitecaves.ae/properties/${property.id}`,
    imageUrl: property.images[0] || '/images/dubai-skyline.jpg',
  });
}

async function PropertyDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const inventory = await fetchVerifiedInventory();
  const property =
    inventory.find((p) => p.id === id) || ALL_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  const similarProperties = inventory
    .filter(
      (p) => p.id !== property.id && (p.location === property.location || p.type === property.type)
    )
    .slice(0, 3);

  const formattedAed = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(property.price);

  const pricePerSqft = Math.round(property.price / Math.max(1, property.sqft));
  const usdEquivalent = convertFromAed(property.price, 'USD');
  const eurEquivalent = convertFromAed(property.price, 'EUR');
  const gbpEquivalent = convertFromAed(property.price, 'GBP');
  const mortgage = simulateUaeMortgage(property.price, 20, 4.25, 25);
  const dldFeeAed = Math.round(property.price * 0.04);

  const jsonLd = buildRealEstateListingJsonLd({
    id: property.id,
    title: property.title,
    description: `${property.bedrooms} Bedroom ${property.type} in ${property.location}`,
    url: `https://whitecaves.ae/properties/${property.id}`,
    priceAed: property.price,
    currency: property.currency || 'AED',
    imageUrl: property.images[0],
    addressLocality: property.location,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    areaSqFt: property.sqft,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-12">
        {/* Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-[#EF4444] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Verified Inventory
          </Link>
          <TruCheckBadge variant="stamp" timestamp="Today" />
        </div>

        {/* Hero Image & Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900">
            <Image
              src={property.images[0] || '/images/dubai-skyline.jpg'}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EF4444] text-white text-xs font-bold uppercase tracking-wider">
                {property.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-950/80 text-white text-xs font-semibold backdrop-blur-md">
                {property.type}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#EF4444] mb-2">
                <MapPin size={14} />
                <span>{property.location}</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight">{property.title}</h1>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  DLD Registered Asking Price
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-[#EF4444] mt-1">
                  {formattedAed}
                </div>
                <div className="flex flex-wrap gap-3 mt-2 text-xs font-mono text-zinc-500">
                  <span>USD ${usdEquivalent.toLocaleString()}</span>
                  <span>•</span>
                  <span>EUR €{eurEquivalent.toLocaleString()}</span>
                  <span>•</span>
                  <span>GBP £{gbpEquivalent.toLocaleString()}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 py-5 border-y border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Bed size={14} /> Bedrooms
                  </div>
                  <div className="text-base font-black mt-1">{property.bedrooms}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Bath size={14} /> Bathrooms
                  </div>
                  <div className="text-base font-black mt-1">{property.bathrooms}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Square size={14} /> Area
                  </div>
                  <div className="text-base font-black mt-1">
                    {property.sqft.toLocaleString()} sqft
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Building2 size={14} /> Rate/sqft
                  </div>
                  <div className="text-base font-black mt-1">
                    AED {pricePerSqft.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  `Hi White Caves Private Client Desk, I am inquiring about ${property.title} (${property.location}) listed at ${formattedAed}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={14} /> Schedule Private Viewing (15m VIP SLA)
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>DLD Form A Verified • Escrow & Trustee Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Acquisition Cost & UAE Mortgage Breakdown */}
        <section className="rounded-2xl p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            <Calculator size={15} />
            <span>UAE Statutory Acquisition & Mortgage Breakdown</span>
          </div>
          <h2 className="text-xl font-black mb-6">
            Estimated Financing & Dubai Land Department Fees
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">20% Down Payment</div>
              <div className="text-xl font-black font-mono mt-1">
                AED {mortgage.downPaymentAed.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">UAE Resident LTV Standard</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">80% Financed Principal</div>
              <div className="text-xl font-black font-mono mt-1">
                AED {mortgage.loanAmountAed.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">25-Year Tenure @ 4.25% APR</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Estimated Monthly EMI</div>
              <div className="text-xl font-black font-mono text-[#EF4444] mt-1">
                AED {mortgage.monthlyEmiAed.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">Principal + Interest</div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">DLD 4% Transfer Fee</div>
              <div className="text-xl font-black font-mono mt-1">
                AED {dldFeeAed.toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">+ AED 4,200 DLD Trustee Fee</div>
            </div>
          </div>
        </section>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-black">Comparable Trophy Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((sim) => (
                <PropertyCard key={sim.id} property={sim} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white selection:bg-[#EF4444] selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-12">
        <Suspense
          fallback={
            <div className="py-24 text-center text-xs font-mono text-zinc-500">
              Loading DLD verified property dossier...
            </div>
          }
        >
          <PropertyDetailContent params={params} />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
