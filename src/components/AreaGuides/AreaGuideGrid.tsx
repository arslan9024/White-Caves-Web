import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface Community {
  id: string;
  name: string;
  tagline: string;
  avgPrice: string;
  roi: string;
  image: string;
  badge?: string;
}

const COMMUNITIES: Community[] = [
  {
    id: "damac-hills-2",
    name: "Life in DAMAC Hills 2",
    tagline: "Water Town, Sports Town & Master Luxury Villas",
    avgPrice: "AED 1.8M - 4.5M",
    roi: "8.4% Net Yield",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    badge: "Family Destination",
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    tagline: "Burj Khalifa & Opera District Sky Residences",
    avgPrice: "AED 3.2M - 45M",
    roi: "6.8% Gross Yield",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    badge: "Iconic Address",
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    tagline: "Beachfront Mansions & Signature Coastal Estates",
    avgPrice: "AED 8.5M - 120M",
    roi: "7.2% Capital Growth",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    badge: "Ultra-Luxury Haven",
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina & JBR",
    tagline: "Waterfront Promenade & High-Rise Penthouses",
    avgPrice: "AED 1.6M - 9.2M",
    roi: "7.8% Rental Yield",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-bay",
    name: "Business Bay & Canal",
    tagline: "Dubai Canal-side Branded Penthouses",
    avgPrice: "AED 1.4M - 7.5M",
    roi: "8.1% Rental Yield",
    image:
      "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    tagline: "18-Hole Championship Golf Course Estates",
    avgPrice: "AED 2.9M - 28M",
    roi: "7.5% Net Yield",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
];

export const AreaGuideGrid = () => {
  return (
    <section
      id="communities"
      className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
          Master Communities
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
          Curated Dubai Neighborhood Guides
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
          Explore infrastructure, transaction velocity, and real rental yields
          across Dubai's most prestigious master-planned districts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMUNITIES.map((c) => (
          <div
            key={c.id}
            className="group relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div className="relative h-48 w-full overflow-hidden bg-white dark:bg-zinc-950">
              {c.badge && (
                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-zinc-900 dark:text-white shadow-md">
                  {c.badge}
                </div>
              )}
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/40 dark:via-zinc-950/40 to-transparent" />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                  <span>{c.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 group-hover:text-zinc-900 dark:text-white transition-colors"
                  />
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  {c.tagline}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">
                    Typical Range
                  </span>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                    {c.avgPrice}
                  </span>
                </div>
                <div className="text-right flex items-center gap-1 text-emerald-400 font-semibold">
                  <TrendingUp size={13} />
                  <span>{c.roi}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
