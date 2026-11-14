'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Quote } from 'lucide-react';
import { INVESTOR_TESTIMONIALS } from './testimonials.data';

export const TestimonialPodium = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx(prev => (prev + 1) % INVESTOR_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx(prev => (prev - 1 + INVESTOR_TESTIMONIALS.length) % INVESTOR_TESTIMONIALS.length);
  };

  const t = INVESTOR_TESTIMONIALS[activeIdx];

  return (
    <section
      aria-label="Investor Testimonial Podium"
      className="px-6 lg:px-12 py-20 bg-zinc-50 dark:bg-zinc-950/50 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-[#EF4444] font-extrabold text-xs uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>5-Star Institutional &amp; VIP Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Global Investor Testimonial Podium
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Direct endorsements from high-net-worth investors, family offices, and sovereign buyers served by White Caves.
          </p>
        </div>

        {/* Podium Card */}
        <div className="relative bg-white dark:bg-zinc-900 border-2 border-[#EF4444]/25 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-red-500/5">
          <div className="absolute top-6 right-8 text-zinc-200 dark:text-zinc-800">
            <Quote className="w-16 h-16 opacity-40" />
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Star Rating */}
            <div className="flex gap-1 text-amber-400 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-100 max-w-3xl leading-relaxed italic mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Avatar with Glow Ring */}
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full p-1 border-2 border-[#EF4444] shadow-[0_0_15px_rgba(239,68,68,0.35)] mb-4 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Name & Credentials */}
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
              {t.name}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[#EF4444]">
              {t.role} &bull; <span className="text-zinc-500 dark:text-zinc-400">{t.location}</span>
            </p>

            {/* Verified Deal Badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.verifiedDeal}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-[#EF4444] transition-all text-xs font-bold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {INVESTOR_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === idx
                      ? 'w-8 bg-[#EF4444]'
                      : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-[#EF4444] transition-all text-xs font-bold"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPodium;
