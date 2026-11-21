import Link from 'next/link';
import type { Metadata } from 'next';
import { Bed, Bath, Square, MapPin, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { fetchPublicRentals } from '@/lib/inventoryApi';
import { buildPropertyOgMetadata } from '@/lib/ogMetadata';

export const instant = false;

interface RentIndexPageProps {
  searchParams: Promise<{
    community?: string;
    minRent?: string;
    maxRent?: string;
    bedrooms?: string;
    cheques?: string;
    sort?: string;
  }>;
}

export async function generateMetadata({ searchParams }: RentIndexPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const communityLabel = sp.community ? ` in ${sp.community}` : ' in Dubai';
  const brLabel = sp.bedrooms ? `${sp.bedrooms} Bedroom ` : 'Verified ';
  return buildPropertyOgMetadata({
    title: `${brLabel}Villas & Apartments for Rent${communityLabel} — Flexible Cheques & Instant Ejari`,
    description: `Browse RERA-verified rental villas, townhouses, and apartments${communityLabel}. Filter by annual rent budget, bedrooms, and cheque plans with direct WhatsApp viewing booking via Linda AI.`,
    url: 'https://whitecaves.ae/rent',
    imageUrl: '/images/dubai-skyline.jpg',
  });
}

export default async function RentCatalogPage({ searchParams }: RentIndexPageProps) {
  const sp = await searchParams;
  const filters = {
    community: sp.community || undefined,
    minRent: sp.minRent ? Number(sp.minRent) : undefined,
    maxRent: sp.maxRent ? Number(sp.maxRent) : undefined,
    bedrooms: sp.bedrooms ? Number(sp.bedrooms) : undefined,
    cheques: sp.cheques ? Number(sp.cheques) : undefined,
    sort: sp.sort || undefined,
  };

  const rentals = await fetchPublicRentals(filters);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero & Filter Form */}
        <section className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-3">
              <ShieldCheck size={14} /> Dubai Residential Leasing Desk • DLD &amp; Ejari Verified
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Verified Properties for Rent in Dubai
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-3xl">
              Explore direct landlord-verified villas, townhouses, and apartments across DAMAC Hills 2, Downtown Dubai, and Dubai Marina. Exact unit numbers are protected per DLD privacy standards.
            </p>

            {/* GET Filter Bar */}
            <form
              method="GET"
              action="/rent"
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800"
            >
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Community / Cluster
                </label>
                <input
                  type="text"
                  name="community"
                  defaultValue={sp.community || ''}
                  placeholder="e.g. DAMAC Hills 2, Camelia"
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Min Annual Rent (AED)
                </label>
                <input
                  type="number"
                  name="minRent"
                  defaultValue={sp.minRent || ''}
                  placeholder="60000"
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Max Annual Rent (AED)
                </label>
                <input
                  type="number"
                  name="maxRent"
                  defaultValue={sp.maxRent || ''}
                  placeholder="250000"
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Bedrooms
                </label>
                <select
                  name="bedrooms"
                  defaultValue={sp.bedrooms || ''}
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
                >
                  <option value="">Any Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Min Cheques
                </label>
                <select
                  name="cheques"
                  defaultValue={sp.cheques || ''}
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
                >
                  <option value="">Any Cheques</option>
                  <option value="1">1 Cheque</option>
                  <option value="2">2+ Cheques</option>
                  <option value="4">4+ Cheques</option>
                  <option value="6">6+ Cheques</option>
                </select>
              </div>

              <div className="flex items-end gap-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 transition"
                >
                  Filter Rentals
                </button>
                <Link
                  href="/rent"
                  className="rounded-xl border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold py-2.5 px-3 transition"
                >
                  Reset
                </Link>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <span>
                Showing <strong className="text-white">{rentals.length}</strong> available verified rental properties
              </span>
              <Link
                href="/rent/damac-hills-2"
                className="text-[#EF4444] hover:underline font-semibold"
              >
                Explore Dedicated DAMAC Hills 2 Cluster Hub &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Rental Listings Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          {rentals.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-12 text-center">
              <h2 className="text-xl font-bold">No exact rental matches for these filters</h2>
              <p className="text-sm text-zinc-500 mt-2">
                Try clearing filters or message Linda directly for upcoming off-market landlord units.
              </p>
              <Link
                href="/rent"
                className="inline-block mt-5 rounded-xl bg-[#EF4444] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5"
              >
                View All Available Rentals
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentals.map(rental => (
                <article
                  key={rental.slug}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 overflow-hidden flex flex-col justify-between hover:border-[#EF4444] transition"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="px-2.5 py-1 rounded-full bg-[#EF4444]/10 text-[#EF4444] uppercase">
                        {rental.subCommunity} • {rental.community}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Up to {rental.chequesCount} Cheques
                      </span>
                    </div>

                    <div>
                      <Link href={`/rent/${rental.slug}`} className="hover:text-[#EF4444] transition">
                        <h2 className="text-lg font-black leading-snug">{rental.title}</h2>
                      </Link>
                      <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin size={13} className="text-[#EF4444]" />
                        <span>{rental.location}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="text-2xl font-black font-mono text-[#EF4444]">
                        AED {rental.annualRentAed.toLocaleString()}
                        <span className="text-xs font-sans font-normal text-zinc-500"> / year</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Security Deposit: AED {rental.securityDepositAed.toLocaleString()} • Permit #{rental.reraPermitNumber}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-100 dark:border-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      <span className="flex items-center gap-1.5">
                        <Bed size={14} className="text-[#EF4444]" /> {rental.bedrooms} Beds
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath size={14} className="text-[#EF4444]" /> {rental.bathrooms} Baths
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Square size={14} className="text-[#EF4444]" /> {rental.areaSqFt.toLocaleString()} sqft
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {rental.amenities.slice(0, 4).map(am => (
                        <span
                          key={am}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                        >
                          <CheckCircle2 size={10} className="text-emerald-500" /> {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2">
                    <Link
                      href={`/rent/${rental.slug}`}
                      className="flex-1 text-center rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-3 transition"
                    >
                      View &amp; Request Viewing
                    </Link>
                    <a
                      href={rental.assignedBroker.whatsappDeepLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-zinc-950 font-bold text-xs px-4 py-3 hover:opacity-90 transition"
                    >
                      <Phone size={13} /> Linda
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
      <WhatsAppConciergePill />
    </div>
  );
}
