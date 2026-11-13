'use client';

import { useState } from 'react';
import { Coins, Ruler, TrendingUp } from 'lucide-react';

export type SupportedCurrency = 'AED' | 'USD' | 'EUR' | 'GBP';
export type SupportedUnit = 'SqFt' | 'SqM';

const FX_RATES: Record<SupportedCurrency, number> = {
  AED: 1,
  USD: 3.6725,
  EUR: 3.98,
  GBP: 4.65,
};

export const CurrencyUnitBar = () => {
  const [currency, setCurrency] = useState<SupportedCurrency>('AED');
  const [unit, setUnit] = useState<SupportedUnit>('SqFt');

  const currencies: SupportedCurrency[] = ['AED', 'USD', 'EUR', 'GBP'];
  const units: SupportedUnit[] = ['SqFt', 'SqM'];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 my-6">
      <div className="w-full bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Currency Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 font-bold text-zinc-300">
            <Coins className="w-3.5 h-3.5 text-[#EF4444]" />
            Valuation Currency:
          </span>
          <div className="flex bg-zinc-950 p-0.5 rounded-lg border border-zinc-800">
            {currencies.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-2.5 py-1 rounded-md font-semibold transition ${
                  currency === c
                    ? 'bg-[#EF4444] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {currency !== 'AED' && (
            <span className="text-[11px] text-zinc-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              1 {currency} ≈ {FX_RATES[currency].toFixed(2)} AED
            </span>
          )}
        </div>

        {/* Dimension Unit Switcher */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-bold text-zinc-300">
            <Ruler className="w-3.5 h-3.5 text-amber-400" />
            Area Unit:
          </span>
          <div className="flex bg-zinc-950 p-0.5 rounded-lg border border-zinc-800">
            {units.map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={`px-2.5 py-1 rounded-md font-semibold transition ${
                  unit === u
                    ? 'bg-[#EF4444] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
