'use client';

import { useState } from 'react';
import { MARKET_PULSE_TICKS, MarketTickerItem } from './marketTicker.data';

export interface MarketPulseLiveTickerProps {
  ticks?: MarketTickerItem[];
  className?: string;
}

export const MarketPulseLiveTicker = ({
  ticks = MARKET_PULSE_TICKS,
  className = '',
}: MarketPulseLiveTickerProps) => {
  const [paused, setPaused] = useState(false);
  const doubled = [...ticks, ...ticks];

  return (
    <aside
      aria-label="Live Dubai Real Estate Market Pulse Ticker"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`w-full bg-zinc-950/90 border-y border-zinc-800 backdrop-blur-md h-9 overflow-hidden flex items-center text-xs text-zinc-300 font-sans select-none ${className}`}
    >
      {/* Live Badge */}
      <div className="flex-shrink-0 px-4 h-full flex items-center gap-2 bg-red-500/10 border-r border-red-500/20 z-10">
        <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
        <span className="text-[10px] font-extrabold tracking-wider text-[#EF4444]">LIVE DLD</span>
      </div>

      {/* Marquee Track */}
      <div className="flex-1 overflow-hidden relative">
        <div
          className={`flex whitespace-nowrap items-center w-max ${
            paused ? 'animate-none' : 'animate-marquee'
          }`}
          style={{ animationDuration: '40s' }}
        >
          {doubled.map((t, idx) => {
            const isUp = t.up;
            const valColor =
              isUp === undefined
                ? 'text-zinc-200'
                : isUp
                ? 'text-emerald-400'
                : 'text-red-400';

            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-6 border-r border-zinc-800/80 flex-shrink-0"
              >
                <span className="text-[11px] font-medium text-zinc-400">{t.label}:</span>
                <span className={`text-xs font-bold font-mono ${valColor}`}>
                  {t.value} {t.unit}
                </span>
                {t.change && (
                  <span
                    className={`text-[10px] font-semibold flex items-center gap-0.5 ${
                      isUp ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    <span>{isUp ? '▲' : '▼'}</span>
                    <span>{t.change}</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default MarketPulseLiveTicker;
