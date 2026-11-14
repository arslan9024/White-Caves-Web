'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import {
  LUXURY_FEATURES,
  DUBAI_REAL_ESTATE_FAQS,
  type LuxuryFeatureItem,
  type DubaiRealEstateFaq,
} from './features.data';

export const FeaturesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(DUBAI_REAL_ESTATE_FAQS[0].id);

  return (
    <section
      id="features"
      aria-label="Why Choose White Caves & Investor FAQ"
      className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#EF4444] font-extrabold">
          <Sparkles size={14} /> Sovereign Brokerage Standards
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
          Why Discerning Investors Choose White Caves
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
          Institutional underwriting, DLD-verified inventory, and WhatsApp-first advisory tailored for Dubai&apos;s prime real estate market.
        </p>
      </div>

      {/* 6-Card Interactive Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {LUXURY_FEATURES.map((feature: LuxuryFeatureItem) => {
          const isOpen = expandedId === feature.id;
          return (
            <div
              key={feature.id}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setExpandedId(isOpen ? null : feature.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setExpandedId(isOpen ? null : feature.id);
                }
              }}
              className="group relative rounded-2xl p-6 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/60 shadow-lg transition-all cursor-pointer text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg bg-red-500/10 text-[#EF4444] border border-red-500/20">
                  {feature.number}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  <ShieldCheck size={12} className="text-[#EF4444]" />
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white group-hover:text-[#EF4444] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#EF4444]">
                <span>{isOpen ? 'Hide Institutional Brief' : 'Read Institutional Brief'}</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {isOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 space-y-3"
                >
                  <p className="leading-relaxed">{feature.details}</p>
                  <Link
                    href={feature.ctaHref}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#EF4444] text-white font-bold hover:bg-red-600 transition"
                  >
                    {feature.ctaText}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Statutory Dubai Real Estate FAQ Accordion */}
      <div
        data-testid="homepage-faq-accordion"
        className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
      >
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#EF4444] font-bold">
            <HelpCircle size={14} /> Statutory Buyer &amp; Tenancy Guide
          </span>
          <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Everything international and UAE investors need to know about DLD fees, Escrow, and Golden Visas.
          </p>
        </div>

        <div className="space-y-3">
          {DUBAI_REAL_ESTATE_FAQS.map((faq: DubaiRealEstateFaq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'bg-white dark:bg-zinc-950 border-[#EF4444]/50'
                    : 'bg-white/60 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left"
                >
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EF4444] block mb-0.5">
                      {faq.category}
                    </span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#EF4444]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
