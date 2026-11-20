import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { DH2_CLUSTERS_SEO, buildLindaWhatsAppUrl } from '@/data/dh2Clusters.data';
import { ALL_PROPERTIES } from '@/data/all-properties.data';

export const metadata: Metadata = {
  title: 'Villas & Townhouses for Rent in DAMAC Hills 2 (Akoya Oxygen) | White Caves Real Estate',
  description:
    'Rent verified 3BR, 4BR & 5BR villas and townhouses in DAMAC Hills 2 directly with White Caves Real Estate LLC. Explore Pacifica, Camelia, Albizia, Basswood, Clivia & Amargo with direct WhatsApp viewing booking and RERA Ejari.',
  alternates: { canonical: 'https://whitecaves.ae/rent/damac-hills-2' },
};

export default function DamacHills2RentHubPage() {
  const dh2Rentals = ALL_PROPERTIES.filter(
    p => p.status === 'For Rent' && /damac hills 2/i.test(p.location)
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'DAMAC Hills 2 Villas & Townhouses for Rent — White Caves Real Estate LLC',
    description: metadata.description,
    url: 'https://whitecaves.ae/rent/damac-hills-2',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'White Caves Real Estate LLC',
      telephone: '+971505760056',
      areaServed: 'DAMAC Hills 2, Dubai, UAE',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="flex-1">
        <section className="pt-20 pb-14 px-6 lg:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-b border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-3">
              DAMAC Hills 2 Direct Leasing Desk • RERA Verified
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Villas &amp; Townhouses for Rent in DAMAC Hills 2
            </h1>
            <p className="mt-4 text-base text-zinc-300 max-w-3xl">
              Direct landlord-verified inventory across Pacifica, Camelia, Albizia, Basswood, Clivia, Amargo, and Vardon. Skip portal bait listings — schedule same-day viewings on WhatsApp and get Ejari registered fast.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={buildLindaWhatsAppUrl('Hi Linda (White Caves), I am looking to rent a villa/townhouse in DAMAC Hills 2. Please share available units and viewing times.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-zinc-950 hover:opacity-90 transition"
              >
                WhatsApp Linda for Same-Day Viewing
              </a>
              <Link
                href="/list-your-property"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition"
              >
                DH2 Landlord? List Your Unit Free
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Browse by DAMAC Hills 2 Cluster</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Dedicated cluster pages with live rental price bands, cheque norms &amp; direct WhatsApp viewing booking.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DH2_CLUSTERS_SEO.map(cluster => (
              <Link
                key={cluster.slug}
                href={`/rent/damac-hills-2/${cluster.slug}`}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-[#EF4444] transition bg-zinc-50/50 dark:bg-zinc-900/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold group-hover:text-[#EF4444] transition">
                    {cluster.name}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {cluster.chequeNorms}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{cluster.tagline}</p>
                <p className="mt-3 text-sm font-bold text-zinc-900 dark:text-white">
                  {cluster.avgRentRangeAed}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{cluster.typicalLayouts}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Verified DAMAC Hills 2 Rentals ({dh2Rentals.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dh2Rentals.map(prop => (
              <article
                key={prop.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 flex flex-col"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-[#EF4444] uppercase">{prop.cluster || 'DAMAC Hills 2'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {prop.cheques ? `${prop.cheques} Cheques` : 'Flexible Cheques'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{prop.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{prop.location}</p>
                  <p className="mt-4 text-xl font-black">
                    AED {prop.price.toLocaleString()}
                    <span className="text-xs font-normal text-zinc-500"> / year</span>
                  </p>
                  <div className="mt-3 flex gap-4 text-xs text-zinc-500">
                    <span>{prop.bedrooms} BR</span>
                    <span>{prop.bathrooms} Bath</span>
                    <span>{prop.sqft.toLocaleString()} sq.ft</span>
                    <span>{prop.furnished ? 'Furnished' : 'Unfurnished'}</span>
                  </div>
                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex gap-2">
                    <a
                      href={buildLindaWhatsAppUrl(
                        `Hi Linda, I want to book a viewing for "${prop.title}" (${prop.location}) at AED ${prop.price.toLocaleString()}/year.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-lg bg-[#25D366] py-2 text-xs font-bold text-zinc-950 hover:opacity-90"
                    >
                      WhatsApp Viewing
                    </a>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppConciergePill />
    </div>
  );
}
