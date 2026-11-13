import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroMetrics } from './HeroMetrics';
import { LuxuryMultiTabSearchBar } from './LuxuryMultiTabSearchBar';
import { DeveloperFilterQuickChips } from './DeveloperFilterQuickChips';

export const HeroSection = () => {
  return (
    <section className="relative px-6 lg:px-12 py-20 lg:py-28 flex flex-col items-center text-center overflow-hidden min-h-[90vh] justify-center">
      <HeroBackground />

      {/* Sovereign Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium uppercase tracking-widest mb-6">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        Dubai Sovereign Ultra-Prime Advisory
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 text-zinc-900 dark:text-white">
        Curated Luxury Living & Iconic Dubai Assets.
      </h1>

      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mb-6 leading-relaxed">
        Exclusive villas, waterfront penthouses, and strategic off-plan investment portfolios across Palm Jumeirah, Downtown Dubai, and Tilal Al Ghaf.
      </p>

      {/* Segmented Hero Search & Filter Chips */}
      <LuxuryMultiTabSearchBar />
      <DeveloperFilterQuickChips />

      <div className="mt-8">
        <HeroCTA />
      </div>

      <HeroMetrics />
    </section>
  );
};
