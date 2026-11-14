import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { COMMUNITIES, communityHref } from './areaGuides.data';

export const AreaGuideGrid = () => (
  <section id="communities" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
        Master Communities
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
        Curated Dubai Neighborhood Guides
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
        Explore infrastructure, transaction velocity, and real rental yields across
        Dubai&apos;s most prestigious master-planned districts.
      </p>
    </div>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {COMMUNITIES.map(c => (
        <li key={c.id}>
          <Link
            href={communityHref(c)}
            aria-label={`Browse properties in ${c.name}`}
            className="group relative h-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/50 transition-all flex flex-col justify-between"
          >
            <div className="relative h-48 w-full overflow-hidden bg-white dark:bg-zinc-950">
              {c.badge && (
                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-md">
                  {c.badge}
                </div>
              )}
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/40 dark:via-zinc-950/40 to-transparent" />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#EF4444] transition-colors flex items-center justify-between">
                  <span>{c.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 group-hover:text-[#EF4444] transition-colors"
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
                <div className="text-right flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <TrendingUp size={13} />
                  <span>{c.roi}</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default AreaGuideGrid;
