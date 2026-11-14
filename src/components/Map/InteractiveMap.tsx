'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Maximize2, ArrowUpRight, Compass } from 'lucide-react';
import {
  DUBAI_MAP_PINS,
  MAP_FILTER_TYPES,
  MapFilterType,
  MapPropertyPin,
} from './map.data';

export const InteractiveMap = () => {
  const [filterType, setFilterType] = useState<MapFilterType>('all');
  const [selectedPin, setSelectedPin] = useState<MapPropertyPin>(DUBAI_MAP_PINS[0]);

  const filteredPins =
    filterType === 'all'
      ? DUBAI_MAP_PINS
      : DUBAI_MAP_PINS.filter(
          p =>
            p.propertyType.toLowerCase() === filterType.toLowerCase() ||
            (filterType === 'Off-Plan' && p.status === 'Off-Plan')
        );

  const formatAED = (val: number) =>
    new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="map-section" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-[#EF4444] font-extrabold text-xs uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Live Geospatial Map Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Interactive Dubai Real Estate Map
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-2">
          Explore verified luxury inventory across Dubai&apos;s premier master-planned communities with live pricing telemetry.
        </p>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter map pins by property type"
          className="flex flex-wrap items-center justify-center gap-2 mt-6"
        >
          {MAP_FILTER_TYPES.map(type => {
            const active = filterType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setFilterType(type);
                  const nextList =
                    type === 'all'
                      ? DUBAI_MAP_PINS
                      : DUBAI_MAP_PINS.filter(
                          p =>
                            p.propertyType.toLowerCase() === type.toLowerCase() ||
                            (type === 'Off-Plan' && p.status === 'Off-Plan')
                        );
                  if (nextList.length > 0) setSelectedPin(nextList[0]);
                }}
                aria-pressed={active}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  active
                    ? 'bg-[#EF4444] text-white shadow-md shadow-red-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/50'
                }`}
              >
                {type === 'all' ? 'All Inventory' : type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Geospatial Canvas + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Stylized Dark Geospatial Canvas */}
        <div className="lg:col-span-2 relative h-[440px] sm:h-[500px] rounded-2xl overflow-hidden bg-zinc-950 border-2 border-[#EF4444]/30 shadow-2xl select-none">
          {/* Vector Coastline & Grid Overlay */}
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full object-cover opacity-35"
            aria-hidden="true"
          >
            <defs>
              <pattern id="dubai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(239,68,68,0.12)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#dubai-grid)" />
            {/* Arabian Gulf Coastline */}
            <path
              d="M 0 340 Q 180 280 350 220 T 800 90 L 0 0 Z"
              fill="rgba(14, 116, 144, 0.14)"
            />
            {/* Sheikh Zayed Road E11 Arterial */}
            <path
              d="M 60 390 Q 280 290 520 190 T 780 110"
              fill="none"
              stroke="rgba(239, 68, 68, 0.35)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
            {/* Dubai Canal / Creek */}
            <path
              d="M 480 180 Q 530 240 620 150"
              fill="none"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="3"
            />
          </svg>

          {/* District Watermarks */}
          <span className="absolute top-6 left-6 text-[10px] font-mono uppercase tracking-widest text-cyan-400/60">
            Arabian Gulf • Coastal Zone
          </span>
          <span className="absolute bottom-4 right-5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            DLD Geospatial Telemetry • WGS84
          </span>

          {/* Interactive Property Pins */}
          {filteredPins.map(pin => {
            const isSelected = selectedPin?.id === pin.id;
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => setSelectedPin(pin)}
                style={{ left: `${pin.xPct}%`, top: `${pin.yPct}%` }}
                aria-label={`${pin.title} in ${pin.community}, ${formatAED(pin.priceAED)}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10"
              >
                <span
                  className={`relative flex items-center justify-center rounded-full transition-all ${
                    isSelected
                      ? 'w-7 h-7 bg-[#EF4444] ring-4 ring-red-500/40 scale-110'
                      : 'w-5 h-5 bg-[#EF4444]/90 hover:scale-125 ring-2 ring-white'
                  }`}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-50" />
                  <MapPin className="w-3 h-3 text-white relative z-10" />
                </span>
                <span
                  className={`mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap block transition-all ${
                    isSelected
                      ? 'bg-[#EF4444] text-white shadow-lg'
                      : 'bg-zinc-900/90 text-zinc-200 border border-zinc-700 group-hover:border-[#EF4444]'
                  }`}
                >
                  {pin.community}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pin Detail Card */}
        {selectedPin && (
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-500/10 text-[#EF4444] border border-red-500/20">
                  {selectedPin.propertyType} &bull; {selectedPin.status}
                </span>
                <span className="text-xs font-mono text-zinc-500">{selectedPin.developer}</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                {selectedPin.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>{selectedPin.community}, Dubai</span>
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                  Guide Price
                </span>
                <span className="text-2xl font-black text-[#EF4444] font-mono">
                  {formatAED(selectedPin.priceAED)}
                </span>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5 text-[#EF4444]" />
                    {selectedPin.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5 text-[#EF4444]" />
                    {selectedPin.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#EF4444]" />
                    {selectedPin.sqft.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Link
                href={`/properties?community=${encodeURIComponent(selectedPin.community)}`}
                className="w-full py-3 px-4 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-red-500/20 transition"
              >
                <span>Explore {selectedPin.community} Inventory</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;
