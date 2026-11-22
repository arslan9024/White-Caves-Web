import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import {
  DH2_CLUSTERS_SEO,
  buildLindaWhatsAppUrl,
  findDh2ClusterBySlug,
} from '@/data/dh2Clusters.data';
import { ALL_PROPERTIES } from '@/data/all-properties.data';

async function fetchLiveVerifiedVaultRentals(clusterSlug: string) {
  try {
    const res = await fetch(`http://localhost:5001/api/leasing-formula/feeds/portals.csv`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const text = await res.text();
    const rows = text.split('\n').slice(1).filter(Boolean);
    return rows
      .map(r => {
        const cols = r.split(',').map(c => c.replace(/^"|"$/g, ''));
        return {
          id: cols[0],
          title: cols[10],
          price: `AED ${Number(cols[9] || 0).toLocaleString()}/year`,
          beds: Number(cols[6] || 3),
          baths: Number(cols[7] || 3),
          sqft: Number(cols[8] || 1881),
          cluster: cols[4],
          slug: cols[4]?.toLowerCase().replace(/\s+/g, '-'),
          image: cols[11],
          source: 'LIVE_VAULT' as const,
        };
      })
      .filter(p => p.slug === clusterSlug.toLowerCase());
  } catch {
    return [];
  }
}

interface ClusterPageProps {
  params: Promise<{ cluster: string }>;
}

export function generateStaticParams() {
  return DH2_CLUSTERS_SEO.map(c => ({ cluster: c.slug }));
}

export async function generateMetadata({ params }: ClusterPageProps): Promise<Metadata> {
  const { cluster } = await params;
  const data = findDh2ClusterBySlug(cluster);
  if (!data) {
    return { title: 'DAMAC Hills 2 Rentals | White Caves Real Estate' };
  }
  return {
    title: `${data.name}, DAMAC Hills 2 — Villas & Townhouses for Rent | White Caves Real Estate`,
    description: data.seoDescription,
    alternates: { canonical: `https://whitecaves.ae/rent/damac-hills-2/${data.slug}` },
  };
}

export default async function Dh2ClusterRentPage({ params }: ClusterPageProps) {
  const { cluster } = await params;
  const info = findDh2ClusterBySlug(cluster);
  if (!info) notFound();

  const matchingRentals = ALL_PROPERTIES.filter(
    p =>
      p.status === 'For Rent' &&
      (p.cluster?.toLowerCase() === info.slug || p.location.toLowerCase().includes(info.slug))
  );

  const otherClusters = DH2_CLUSTERS_SEO.filter(c => c.slug !== info.slug).slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${info.name} DAMAC Hills 2 Villas & Townhouses for Rent`,
    description: info.seoDescription,
    url: `https://whitecaves.ae/rent/damac-hills-2/${info.slug}`,
    about: {
      '@type': 'Place',
      name: `${info.name}, DAMAC Hills 2, Dubai`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="flex-1">
        <section className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-b border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-zinc-400 mb-3 flex items-center gap-2">
              <Link href="/rent/damac-hills-2" className="hover:text-white">
                DAMAC Hills 2 Rentals
              </Link>
              <span>/</span>
              <span className="text-[#EF4444] font-semibold">{info.name}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              {info.name}, DAMAC Hills 2 — Villas &amp; Townhouses for Rent
            </h1>
            <p className="mt-3 text-base text-zinc-300 max-w-3xl">{info.seoDescription}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-4">
                <span className="text-xs text-zinc-400">Typical Annual Rent</span>
                <p className="text-sm font-bold text-white mt-1">{info.avgRentRangeAed}</p>
              </div>
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-4">
                <span className="text-xs text-zinc-400">Common Layouts</span>
                <p className="text-sm font-bold text-white mt-1">{info.typicalLayouts}</p>
              </div>
              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-4">
                <span className="text-xs text-zinc-400">Standard Cheque Plan</span>
                <p className="text-sm font-bold text-emerald-400 mt-1">{info.chequeNorms}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildLindaWhatsAppUrl(
                  `Hi Linda (White Caves), I want to view available rental villas/townhouses in ${info.name}, DAMAC Hills 2.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-zinc-950 hover:opacity-90"
              >
                Book {info.name} Viewing on WhatsApp
              </a>
              <Link
                href="/rent/damac-hills-2"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                All DH2 Clusters
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
          <h2 className="text-xl font-bold mb-4">Why Rent in {info.name}?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {info.highlights.map(item => (
              <div
                key={item}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm font-medium bg-zinc-50/50 dark:bg-zinc-900/50"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-5">
            Available Verified Units in {info.name} ({matchingRentals.length})
          </h2>

          {matchingRentals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchingRentals.map(prop => (
                <article
                  key={prop.id}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-[#EF4444]">{info.name} • RERA Verified</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {prop.cheques ? `${prop.cheques} Cheques` : info.chequeNorms}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{prop.title}</h3>
                  <p className="mt-2 text-2xl font-black">
                    AED {prop.price.toLocaleString()}
                    <span className="text-xs font-normal text-zinc-500"> / year</span>
                  </p>
                  <div className="mt-3 flex gap-4 text-xs text-zinc-500">
                    <span>{prop.bedrooms} Bedrooms</span>
                    <span>{prop.bathrooms} Bathrooms</span>
                    <span>{prop.sqft.toLocaleString()} sq.ft</span>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href={buildLindaWhatsAppUrl(
                        `Hi Linda, please schedule a viewing for "${prop.title}" in ${info.name}, DAMAC Hills 2 (AED ${prop.price.toLocaleString()}/year).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-lg bg-[#25D366] py-2.5 text-xs font-bold text-zinc-950 hover:opacity-90"
                    >
                      WhatsApp Viewing
                    </a>
                    <Link
                      href={`/properties/${prop.id}`}
                      className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 text-xs font-semibold"
                    >
                      Full Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Off-market &amp; upcoming keys in <strong>{info.name}</strong> are updated daily directly from our DAMAC Hills 2 landlord desk. Message Linda on WhatsApp for today&apos;s pocket listings and viewing slots.
              </p>
              <a
                href={buildLindaWhatsAppUrl(
                  `Hi Linda, please send me today's available or upcoming rental units in ${info.name}, DAMAC Hills 2.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-bold text-zinc-950"
              >
                Request {info.name} Availability on WhatsApp
              </a>
            </div>
          )}

          <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">
              Explore Nearby DAMAC Hills 2 Clusters
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherClusters.map(c => (
                <Link
                  key={c.slug}
                  href={`/rent/damac-hills-2/${c.slug}`}
                  className="rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-1.5 text-xs font-semibold hover:border-[#EF4444] hover:text-[#EF4444] transition"
                >
                  {c.name} Rentals
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppConciergePill />
    </div>
  );
}
