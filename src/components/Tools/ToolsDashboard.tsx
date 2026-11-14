'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, Coins } from 'lucide-react';
import { calculateUaeFees, DEFAULT_TOOL_VALUES } from './tools.data';

export const ToolsDashboard = () => {
  const [propertyPrice, setPropertyPrice] = useState(DEFAULT_TOOL_VALUES.propertyPrice);
  const [annualRent, setAnnualRent] = useState(DEFAULT_TOOL_VALUES.expectedRent);
  const [downPaymentPct, setDownPaymentPct] = useState(DEFAULT_TOOL_VALUES.downPaymentPct);
  const [interestRate, setInterestRate] = useState(DEFAULT_TOOL_VALUES.interestRate);
  const [loanTenureYears, setLoanTenureYears] = useState(DEFAULT_TOOL_VALUES.loanTenureYears);
  const [maintenancePct, setMaintenancePct] = useState(DEFAULT_TOOL_VALUES.maintenanceCostPct);

  // Mortgage Calculations
  const downPaymentAED = (propertyPrice * downPaymentPct) / 100;
  const loanAmount = propertyPrice - downPaymentAED;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTenureYears * 12;

  const monthlyMortgage =
    loanAmount > 0 && monthlyRate > 0
      ? Math.round(
          (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  // ROI / Yield Calculations
  const netAnnualRent = Math.round(annualRent * (1 - maintenancePct / 100));
  const grossYield = ((annualRent / propertyPrice) * 100).toFixed(2);
  const netYield = ((netAnnualRent / propertyPrice) * 100).toFixed(2);

  // Statutory Fees
  const fees = calculateUaeFees(propertyPrice, loanAmount, downPaymentAED);

  const formatAED = (val: number) =>
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);

  return (
    <section id="tools" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full transition-colors">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-[#EF4444] font-extrabold text-xs uppercase tracking-wider mb-3">
          <Coins className="w-3.5 h-3.5" />
          <span>Statutory FinTech &amp; Yield Modeler</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Dubai Property ROI &amp; Mortgage Engine
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3">
          Simulate projected net yields, amortization schedules, and upfront statutory UAE Land Department fees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: ROI & Yield Calculator */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-zinc-900 dark:text-white font-bold text-lg">
              <TrendingUp className="text-[#EF4444]" size={20} />
              <h3>Rental Yield &amp; Cap Rate Modeler</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                  <span>Asset Purchase Price</span>
                  <span className="text-[#EF4444] font-mono font-bold text-sm">{formatAED(propertyPrice)}</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="250000"
                  value={propertyPrice}
                  onChange={e => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-[#EF4444] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                  <span>Estimated Annual Rent</span>
                  <span className="text-[#EF4444] font-mono font-bold text-sm">{formatAED(annualRent)}</span>
                </div>
                <input
                  type="range"
                  min="60000"
                  max="3000000"
                  step="20000"
                  value={annualRent}
                  onChange={e => setAnnualRent(Number(e.target.value))}
                  className="w-full accent-[#EF4444] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                  <span>Service Charges &amp; Maintenance Reserve</span>
                  <span className="text-zinc-900 dark:text-white font-mono font-bold text-sm">{maintenancePct}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={maintenancePct}
                  onChange={e => setMaintenancePct(Number(e.target.value))}
                  className="w-full accent-[#EF4444] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-1">Gross Yield</span>
              <span className="text-2xl font-black text-zinc-900 dark:text-white font-mono">{grossYield}%</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">Estimated Net Yield</span>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{netYield}%</span>
            </div>
          </div>
        </div>

        {/* Card 2: Mortgage & Upfront Fees Calculator */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-zinc-900 dark:text-white font-bold text-lg">
              <Calculator className="text-[#EF4444]" size={20} />
              <h3>UAE Mortgage &amp; Cash-to-Close Engine</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                  <span>Down Payment ({downPaymentPct}%)</span>
                  <span className="text-[#EF4444] font-mono font-bold text-sm">{formatAED(downPaymentAED)}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={downPaymentPct}
                  onChange={e => setDownPaymentPct(Number(e.target.value))}
                  className="w-full accent-[#EF4444] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                    <span>Interest Rate</span>
                    <span className="text-zinc-900 dark:text-white font-mono font-bold">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="8.0"
                    step="0.1"
                    value={interestRate}
                    onChange={e => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#EF4444] cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-600 dark:text-zinc-300">
                    <span>Loan Tenure</span>
                    <span className="text-zinc-900 dark:text-white font-mono font-bold">{loanTenureYears} yrs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="5"
                    value={loanTenureYears}
                    onChange={e => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-[#EF4444] cursor-pointer"
                  />
                </div>
              </div>

              {/* Upfront Statutory Fees Breakdown */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>4% DLD Transfer + Admin Fee:</span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300">{formatAED(fees.dldTransferFee + fees.dldAdminFee)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>2% Agency Fee (+ 5% VAT):</span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300">{formatAED(fees.agencyBrokerageFee)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-2 font-bold text-zinc-800 dark:text-zinc-200">
                  <span>Total Cash Required at Close:</span>
                  <span className="text-[#EF4444] font-mono">{formatAED(fees.totalInitialCashRequired)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <div>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold block">Estimated Monthly Mortgage</span>
              <span className="text-xs text-zinc-500">Principal + Bank Profit</span>
            </div>
            <span className="text-2xl font-black text-[#EF4444] font-mono">{formatAED(monthlyMortgage)} / mo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsDashboard;
