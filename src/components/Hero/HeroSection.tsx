import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroMetrics } from './HeroMetrics';

export const HeroSection = () => {
  return (
    <section className="relative px-6 lg:px-12 py-24 lg:py-32 flex flex-col items-center text-center overflow-hidden min-h-[85vh] justify-center">
      <HeroBackground />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium uppercase tracking-widest mb-6">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        Dubai Sovereign Ultra-Prime Advisory
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 text-white">
        Curated Luxury Living & Iconic Dubai Assets.
      </h1>

      <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mb-10 leading-relaxed">
        Exclusive villas, waterfront penthouses, and strategic off-plan investment portfolios across Palm Jumeirah, Downtown Dubai, and Tilal Al Ghaf.
      </p>

      <HeroCTA />
      <HeroMetrics />
    </section>
  );
};
