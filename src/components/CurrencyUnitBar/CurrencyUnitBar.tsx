'use client';

import { useState } from 'react';
import { Coins, Ruler, TrendingUp } from 'lucide-react';
import {
  SupportedCurrency,
  SupportedUnit,
  FX_RATES_TO_AED,
  SUPPORTED_CURRENCIES,
  SUPPORTED_UNITS,
} from './currencyUnit.data';

export interface CurrencyUnitBarProps {
  onCurrencyChange?: (currency: SupportedCurrency) => void;
  onUnitChange?: (unit: SupportedUnit) => void;
  className?: string;
}

export const CurrencyUnitBar = ({
  onCurrencyChange,
  onUnitChange,
  className = '',
}: CurrencyUnitBarProps) => {
  const [currency, setCurrency] = useState<SupportedCurrency>('AED');
  const [unit, setUnit] = useState<SupportedUnit>('SqFt');

  const handleCurrencySelect = (c: SupportedCurrency) => {
    setCurrency(c);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('wc_currency', c);
      window.dispatchEvent(new CustomEvent('wc:preferences-change', { detail: { currency: c, unit } }));
    }
    onCurrencyChange?.(c);
  };

  const handleUnitSelect = (u: SupportedUnit) => {
    setUnit(u);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('wc_unit', u);
      window.dispatchEvent(new CustomEvent('wc:preferences-change', { detail: { currency, unit: u } }));
    }
    onUnitChange?.(u);
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-6 lg:px-12 my-6 ${className}`}>
      <div
        role="group"
        aria-label="Currency and Measurement Switcher"
        className="w-full bg-zinc-100/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm"
      >
        {/* Currency Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 font-bold text-zinc-700 dark:text-zinc-300">
            <Coins className="w-3.5 h-3.5 text-[#EF4444]" />
            Valuation Currency:
          </span>
          <div className="flex bg-white dark:bg-zinc-950 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
            {SUPPORTED_CURRENCIES.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => handleCurrencySelect(c)}
                aria-pressed={currency === c}
                className={`px-2.5 py-1 rounded-md font-semibold transition ${
                  currency === c
                    ? 'bg-[#EF4444] text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {currency !== 'AED' && (
            <span className="text-[11px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3 h-3 text-emerald-500" />1 {currency} ≈{' '}
              {(1 / FX_RATES_TO_AED[currency]).toFixed(3)} AED
            </span>
          )}
        </div>

        {/* Dimension Unit Switcher */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-bold text-zinc-700 dark:text-zinc-300">
            <Ruler className="w-3.5 h-3.5 text-amber-500" />
            Area Unit:
          </span>
          <div className="flex bg-white dark:bg-zinc-950 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
            {SUPPORTED_UNITS.map(u => (
              <button
                key={u}
                type="button"
                onClick={() => handleUnitSelect(u)}
                aria-pressed={unit === u}
                className={`px-2.5 py-1 rounded-md font-semibold transition ${
                  unit === u
                    ? 'bg-[#EF4444] text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
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

export default CurrencyUnitBar;
