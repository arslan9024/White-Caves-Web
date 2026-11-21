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
  CheckCircle2,
  Phone,
  FileText,
  CreditCard,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import {
  FALLBACK_WEB_RENTALS,
  fetchPublicRentalBySlug,
  fetchPublicRentals,
} from '@/lib/inventoryApi';
import { buildBreadcrumbJsonLd, buildRealEstateListingJsonLd } from '@/lib/realEstateJsonLd';
import { buildPropertyOgMetadata } from '@/lib/ogMetadata';
import { ViewingRequestForm } from './ViewingRequestForm';

export const instant = false;

interface RentalDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FALLBACK_WEB_RENTALS.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RentalDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const rental = await fetchPublicRentalBySlug(slug);

  if (!rental) {
    return {
      title: 'Dubai Rental Property Details | White Caves Real Estate',
      description: 'Explore verified Dubai properties for rent with flexible cheque plans and fast Ejari registration.',
    };
  }

  return buildPropertyOgMetadata({
    title: `${rental.title} — ${rental.subCommunity}, ${rental.community} (AED ${rental.annualRentAed.toLocaleString()}/yr)`,
    description: `${rental.bedrooms} Bed, ${rental.bathrooms} Bath ${rental.type} (${rental.areaSqFt.toLocaleString()} sq.ft) in ${rental.subCommunity}, ${rental.community}. Up to ${rental.chequesCount} cheques, RERA Permit #${rental.reraPermitNumber}.`,
    url: `https://whitecaves.ae/rent/${rental.slug}`,
    imageUrl: rental.images[0] || '/images/dubai-skyline.jpg',
  });
}

export default async function RentalDetailPage({ params }: RentalDetailPageProps) {
  const { slug } = await params;
  const rental = await fetchPublicRentalBySlug(slug);

  if (!rental) {
    notFound();
  }

  const allRentals = await fetchPublicRentals({ community: rental.community });
  const similarRentals = allRentals.filter(r => r.slug !== rental.slug).slice(0, 3);

  const chequeOptions = [1, 2, 4, 6].map(count => ({
    count,
    perChequeAed: Math.round(rental.annualRentAed / count),
    supported: count <= rental.chequesCount,
  }));

  const agencyCommissionAed = Math.max(5000, Math.round(rental.annualRentAed * 0.05));
  const agencyVatAed = Math.round(agencyCommissionAed * 0.05);

  const listingJsonLd = buildRealEstateListingJsonLd({
    id: rental.id,
    title: rental.title,
    description: rental.description,
    url: `https://whitecaves.ae/rent/${rental.slug}`,
    priceAed: rental.annualRentAed,
    currency: 'AED',
    imageUrl: rental.images[0] || '/images/dubai-skyline.jpg',
    addressLocality: `${rental.subCommunity}, ${rental.community}, Dubai`,
    bedrooms: rental.bedrooms,
    bathrooms: rental.bathrooms,
    areaSqFt: rental.areaSqFt,
  });

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: 'https://whitecaves.ae' },
    { name: 'Rentals', url: 'https://whitecaves.ae/rent' },
    { name: rental.community, url: `https://whitecaves.ae/rent?community=${encodeURIComponent(rental.community)}` },
    { name: rental.title, url: `https://whitecaves.ae/rent/${rental.slug}` },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-12 space-y-12">
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/rent"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-[#EF4444] transition"
          >
            <ArrowLeft size={14} /> Back to All Dubai Rentals
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            <ShieldCheck size={14} /> RERA Permit #{rental.reraPermitNumber} • DLD Privacy Compliant
          </span>
        </div>

        {/* Hero Gallery + Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
              <Image
                src={rental.images[0] || '/images/dubai-skyline.jpg'}
                alt={rental.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#EF4444] text-white text-xs font-bold uppercase">
                  For Rent • {rental.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-950/80 text-white text-xs font-semibold">
                  Up to {rental.chequesCount} Cheques
                </span>
              </div>
            </div>

            {/* Description & Amenities */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
              <h2 className="text-xl font-black">Property Overview &amp; Community Amenities</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {rental.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {rental.amenities.map(am => (
                  <div
                    key={am}
                    className="flex items-center gap-2 text-xs font-semibold p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800"
                  >
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rent & Cheque Breakdown Table */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF4444]">
                <CreditCard size={15} />
                <span>Dubai Tenancy Cheque &amp; Ejari Breakdown</span>
              </div>
              <h3 className="text-lg font-black">Annual Rent Installment Options</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {chequeOptions.map(opt => (
                  <div
                    key={opt.count}
                    className={`p-4 rounded-xl border ${
                      opt.supported
                        ? 'border-emerald-500/40 bg-emerald-500/5'
                        : 'border-zinc-200 dark:border-zinc-800 opacity-60'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase">
                      {opt.count} {opt.count === 1 ? 'Cheque' : 'Cheques'}
                    </div>
                    <div className="text-lg font-black font-mono text-[#EF4444] mt-1">
                      AED {opt.perChequeAed.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      {opt.supported ? 'Approved by Landlord' : 'Subject to Offer'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 block">Refundable Security Deposit</span>
                  <strong className="text-sm font-mono">
                    AED {rental.securityDepositAed.toLocaleString()} (5%)
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 block">Agency Fee + 5% UAE VAT</span>
                  <strong className="text-sm font-mono">
                    AED {(agencyCommissionAed + agencyVatAed).toLocaleString()}
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 block">Official DLD Ejari Registration</span>
                  <strong className="text-sm font-mono">AED 220 (Same-Day Digital)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Summary, WhatsApp CTA & Viewing Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-6 space-y-5">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#EF4444] uppercase">
                  <MapPin size={14} />
                  <span>
                    {rental.subCommunity} • {rental.community}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  {rental.title}
                </h1>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  Annual Rental Price
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-[#EF4444] mt-1">
                  AED {rental.annualRentAed.toLocaleString()}
                  <span className="text-sm font-sans font-normal text-zinc-500"> / year</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 py-4 border-y border-zinc-200 dark:border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 flex items-center gap-1">
                    <Bed size={14} /> Bedrooms
                  </span>
                  <strong className="text-base font-black block mt-0.5">{rental.bedrooms}</strong>
                </div>
                <div>
                  <span className="text-zinc-500 flex items-center gap-1">
                    <Bath size={14} /> Bathrooms
                  </span>
                  <strong className="text-base font-black block mt-0.5">{rental.bathrooms}</strong>
                </div>
                <div>
                  <span className="text-zinc-500 flex items-center gap-1">
                    <Square size={14} /> Size
                  </span>
                  <strong className="text-base font-black block mt-0.5">
                    {rental.areaSqFt.toLocaleString()} sqft
                  </strong>
                </div>
              </div>

              {/* Assigned Broker & Instant WhatsApp Linda CTA */}
              <div className="rounded-xl bg-white dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-zinc-500 block">Assigned RERA Leasing Specialist</span>
                    <strong className="text-sm">{rental.assignedBroker.name}</strong>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px]">
                    {rental.assignedBroker.brnNumber}
                  </span>
                </div>

                <a
                  href={rental.assignedBroker.whatsappDeepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-linda-cta"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  <Phone size={15} /> WhatsApp Linda / Agent Instantly
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <FileText size={13} className="text-[#EF4444] shrink-0" />
                <span>
                  Exact villa/apartment door numbers are shared privately upon confirmed viewing appointment.
                </span>
              </div>
            </div>

            {/* Interactive Viewing Request Form -> POST /api/public/leads/inquiry */}
            <ViewingRequestForm rental={rental} />
          </div>
        </div>

        {/* Similar Rentals */}
        {similarRentals.length > 0 && (
          <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
            <h2 className="text-2xl font-black">More Verified Rentals in {rental.community}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarRentals.map(item => (
                <Link
                  key={item.slug}
                  href={`/rent/${item.slug}`}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-[#EF4444] transition block bg-zinc-50/40 dark:bg-zinc-900/40"
                >
                  <span className="text-xs font-bold text-[#EF4444] uppercase">
                    {item.subCommunity} • {item.chequesCount} Cheques
                  </span>
                  <h3 className="text-base font-bold mt-1">{item.title}</h3>
                  <p className="text-lg font-black font-mono text-[#EF4444] mt-3">
                    AED {item.annualRentAed.toLocaleString()} / yr
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {item.bedrooms} BR • {item.bathrooms} Bath • {item.areaSqFt.toLocaleString()} sqft
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppConciergePill />
    </div>
  );
}
