'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Calculator,
  FileSignature,
  ShieldCheck,
  Printer,
  Send,
  Sparkles,
} from 'lucide-react';
import {
  PRICING_PLANS,
  AGREEMENT_CATEGORY_OPTIONS,
  type PricingPlanItem,
  type AgreementCategoryOption,
} from '@/data/pricing.data';
import { WHATSAPP_LINK } from '@/data/nav.data';

export function PricingDashboard() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'standard' | 'starter'>('all');
  const [annualSalesVolume, setAnnualSalesVolume] = useState<number>(10000000);
  const [commissionRate, setCommissionRate] = useState<number>(2);

  // Digital Agreement Signer state
  const [selectedAgreement, setSelectedAgreement] = useState<AgreementCategoryOption>(
    AGREEMENT_CATEGORY_OPTIONS[0]
  );
  const [brokerName, setBrokerName] = useState('');
  const [brokerEmail, setBrokerEmail] = useState('');
  const [brokerPhone, setBrokerPhone] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [digitalSignature, setDigitalSignature] = useState('');
  const [isSigned, setIsSigned] = useState(false);

  const filteredPlans = PRICING_PLANS.filter((plan) =>
    categoryFilter === 'all' ? true : plan.category === categoryFilter
  );

  const grossCommissionAed = (annualSalesVolume * commissionRate) / 100;

  const formatAed = (val: number) =>
    new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(val);

  const handlePlanSelect = (plan: PricingPlanItem) => {
    const priceLabel = plan.oneTimePrice
      ? `${formatAed(plan.oneTimePrice)} one-time`
      : `${formatAed(billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice)}/mo`;
    const text = encodeURIComponent(
      `Hi White Caves Executive Desk, I want to enroll in the ${plan.name} (${plan.commission} — ${priceLabel}).`
    );
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80">
        {/* Category Filter */}
        <div className="inline-flex rounded-xl bg-zinc-200/70 dark:bg-zinc-950 p-1">
          {(
            [
              { id: 'all', label: 'All Plans (8)' },
              { id: 'standard', label: '100% Commission (4)' },
              { id: 'starter', label: 'Split Tiers (4)' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                categoryFilter === tab.id
                  ? 'bg-[#EF4444] text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center gap-2 rounded-xl bg-zinc-200/70 dark:bg-zinc-950 p-1">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              billingCycle === 'yearly'
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <span>Annual</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black">
              SAVE 33%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlans.map((plan) => {
          const activePrice = plan.oneTimePrice
            ? plan.oneTimePrice
            : billingCycle === 'yearly'
              ? plan.yearlyPrice
              : plan.monthlyPrice;

          return (
            <article
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                plan.popular
                  ? 'bg-zinc-900 text-white border-[#EF4444] shadow-xl shadow-red-950/20'
                  : 'bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#EF4444]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20">
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      <Sparkles size={12} /> Most Popular
                    </span>
                  )}
                </div>

                <h3
                  className={`text-xl font-black ${
                    plan.popular ? 'text-white' : 'text-zinc-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs mt-1.5 leading-relaxed ${
                    plan.popular ? 'text-zinc-300' : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="my-6 pt-5 border-t border-zinc-200/60 dark:border-zinc-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">
                    {plan.commission}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-black font-mono ${
                        plan.popular ? 'text-white' : 'text-zinc-900 dark:text-white'
                      }`}
                    >
                      {activePrice === 0 ? 'FREE' : formatAed(activePrice)}
                    </span>
                    {activePrice > 0 && (
                      <span className="text-xs text-zinc-400">
                        {plan.oneTimePrice ? '/ deal' : '/ month'}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span
                        className={
                          plan.popular ? 'text-zinc-200' : 'text-zinc-600 dark:text-zinc-300'
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handlePlanSelect(plan)}
                className="w-full py-3 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Select {plan.name}
              </button>
            </article>
          );
        })}
      </div>

      {/* Interactive Broker Earnings & Split Simulator */}
      <section className="rounded-2xl p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-2">
          <Calculator size={15} />
          <span>Interactive Broker Take-Home Calculator</span>
        </div>
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6">
          Annual Commission Split Projections
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-zinc-500">Annual Closed Sales Volume</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">
                  {formatAed(annualSalesVolume)}
                </span>
              </div>
              <input
                type="range"
                min={1000000}
                max={100000000}
                step={1000000}
                value={annualSalesVolume}
                onChange={(e) => setAnnualSalesVolume(Number(e.target.value))}
                aria-label="Annual Closed Sales Volume"
                className="w-full accent-[#EF4444]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-zinc-500">Average Agency Commission Rate</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">
                  {commissionRate}%
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={0.5}
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                aria-label="Average Agency Commission Rate"
                className="w-full accent-[#EF4444]"
              />
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 text-white">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                Total Gross Commission Pool
              </div>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                {formatAed(grossCommissionAed)}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: '100% Commission Plan', split: 1.0, badge: 'Zero Split' },
              { label: '95/5 Split Plan', split: 0.95, badge: '5% Agency' },
              { label: '90/10 Split Plan', split: 0.9, badge: '10% Agency' },
              { label: '85/15 Split Plan', split: 0.85, badge: '15% Agency' },
              { label: '75/25 Free Starter Plan', split: 0.75, badge: 'AED 0 Fee' },
              { label: '50/50 In-House Salaried', split: 0.5, badge: 'Full Visa + Salary' },
            ].map((tier) => (
              <div
                key={tier.label}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">
                    {tier.label}
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500">{tier.badge}</span>
                </div>
                <div className="text-sm font-black font-mono text-[#EF4444]">
                  {formatAed(grossCommissionAed * tier.split)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital RERA Broker Agreement Signer */}
      <section className="rounded-2xl p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF4444] mb-1">
              <FileSignature size={15} />
              <span>RERA ORN #12345 Digital Onboarding</span>
            </div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white">
              White Caves Real Estate Services Agreement Signer
            </h2>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-xs font-bold text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <Printer size={14} /> Print / Save PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Select Commission Package
              </label>
              <select
                value={selectedAgreement.id}
                onChange={(e) => {
                  const found = AGREEMENT_CATEGORY_OPTIONS.find((c) => c.id === e.target.value);
                  if (found) setSelectedAgreement(found);
                }}
                aria-label="Select Commission Package"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white"
              >
                {AGREEMENT_CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name} — {opt.monthlyFee}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Legal Name (As per Passport)"
                value={brokerName}
                onChange={(e) => setBrokerName(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm"
              />
              <input
                type="text"
                placeholder="Passport / Emirates ID Number"
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={brokerEmail}
                onChange={(e) => setBrokerEmail(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm"
              />
              <input
                type="tel"
                placeholder="UAE Mobile (+971 50 ...)"
                value={brokerPhone}
                onChange={(e) => setBrokerPhone(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Type Full Legal Signature to Execute Agreement
              </label>
              <input
                type="text"
                placeholder="e.g. Signed by [Your Full Name]"
                value={digitalSignature}
                onChange={(e) => {
                  setDigitalSignature(e.target.value);
                  setIsSigned(e.target.value.trim().length > 2);
                }}
                className="w-full px-3.5 py-3 rounded-xl bg-white dark:bg-zinc-950 border-2 border-[#EF4444]/40 font-serif italic text-base text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          {/* Contract Summary Preview */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <div className="flex items-center justify-between text-zinc-900 dark:text-white font-bold">
                <span>FIRST PARTY: White Caves Real Estate LLC (ORN #12345)</span>
                <ShieldCheck size={16} className="text-emerald-500" />
              </div>
              <div>
                <strong>SECOND PARTY (Associate):</strong> {brokerName || '—'} (Passport/EID:{' '}
                {passportNo || '—'})
              </div>
              <div>
                <strong>SELECTED TIER:</strong> {selectedAgreement.name} (
                {selectedAgreement.commission}% Associate / {selectedAgreement.agencySplit}% White
                Caves)
              </div>
              <div>
                <strong>SUBSCRIPTION FEE:</strong> {selectedAgreement.monthlyFee}
              </div>
              <p className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                Governed by Dubai Land Department (DLD) and Real Estate Regulatory Agency (RERA)
                By-Law No. (85) of 2006. All commissions settle through verified UAE escrow/trustee
                accounts prior to distribution.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-400">
                  Digital Signature Status
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">
                  {isSigned ? `Executed by ${digitalSignature}` : 'Awaiting Digital Signature'}
                </div>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  `Signed White Caves Broker Agreement: ${selectedAgreement.name} | Name: ${brokerName || 'N/A'} | Passport: ${passportNo || 'N/A'}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Send size={13} /> Submit Executed Contract
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
