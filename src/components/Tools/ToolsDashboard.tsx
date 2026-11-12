'use client';

import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export const ToolsDashboard = () => {
  const [propertyPrice, setPropertyPrice] = useState(3500000);
  const [expectedRent, setExpectedRent] = useState(280000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTenureYears, setLoanTenureYears] = useState(25);

  // Calculations
  const grossYield = ((expectedRent / propertyPrice) * 100).toFixed(2);
  const netEstimatedYield = (((expectedRent * 0.88) / propertyPrice) * 100).toFixed(2);

  const loanAmount = propertyPrice * (1 - downPaymentPct / 100);
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTenureYears * 12;

  const monthlyMortgage =
    monthlyInterestRate > 0
      ? (
          (loanAmount *
            (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
          (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
        ).toFixed(0)
      : (loanAmount / totalMonths).toFixed(0);

  const formatAED = (num: number) =>
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(num);

  return (
    <section id="tools" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
          Financial Intelligence
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Dubai Property ROI & Mortgage Engine
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Simulate projected net rental yields, financing schedules, and estimated returns based on current UAE bank mortgage rates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Yield Calculator */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-lg">
            <TrendingUp className="text-[#EF4444]" size={20} />
            <h3>Rental Yield & Cap Rate Model</h3>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-300">
                <span>Asset Purchase Price</span>
                <span className="text-red-400 font-bold">{formatAED(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="50000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-300">
                <span>Estimated Annual Rent</span>
                <span className="text-red-400 font-bold">{formatAED(expectedRent)}</span>
              </div>
              <input
                type="range"
                min="80000"
                max="3000000"
                step="20000"
                value={expectedRent}
                onChange={(e) => setExpectedRent(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block">Gross Yield</span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block">{grossYield}%</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block">Net Est. Yield</span>
                <span className="text-2xl font-black text-yellow-400 mt-1 block">{netEstimatedYield}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mortgage Calculator */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-lg">
            <Calculator className="text-[#EF4444]" size={20} />
            <h3>UAE Mortgage Repayment Schedule</h3>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-300">
                <span>Down Payment ({downPaymentPct}%)</span>
                <span className="text-red-400 font-bold">{formatAED((propertyPrice * downPaymentPct) / 100)}</span>
              </div>
              <input
                type="range"
                min="20"
                max="50"
                step="5"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-zinc-300">
                <span>Financing Rate ({interestRate}%)</span>
                <span className="text-zinc-400">Tenure: {loanTenureYears} Years</span>
              </div>
              <input
                type="range"
                min="3.5"
                max="7.5"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center mt-4">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block">Estimated Monthly Installment</span>
              <span className="text-3xl font-black text-[#EF4444] mt-1 block">AED {Number(monthlyMortgage).toLocaleString()}</span>
              <span className="text-[10px] text-zinc-500 mt-1 block">*Excludes DLD 4% transfer fee and trustee charges.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
