'use client';

import { useState, useMemo } from 'react';
import { Property } from '@/types/property.types';
import { PropertyCard } from '@/components/Properties/PropertyCard';
import { Filter, SlidersHorizontal, Check } from 'lucide-react';

interface PropertyDirectoryProps {
  initialProperties: Property[];
}

export const PropertyDirectory = ({ initialProperties }: PropertyDirectoryProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProperties = useMemo(() => {
    return initialProperties
      .filter((p) => (selectedStatus === 'All' ? true : p.status === selectedStatus))
      .filter((p) => (selectedType === 'All' ? true : p.type === selectedType))
      .filter((p) => (selectedLocation === 'All' ? true : p.location.includes(selectedLocation)))
      .sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [initialProperties, selectedStatus, selectedType, selectedLocation, sortOption]);

  const locations = ['All', 'Palm Jumeirah', 'Downtown', 'Dubai Hills', 'Tilal Al Ghaf', 'DAMAC Lagoons'];
  const types = ['All', 'Luxury Villa', 'Penthouse', 'Branded Residence', 'Waterfront Apartment'];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
      {/* Filter Ribbon */}
      <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* Status Chips */}
          <div className="flex bg-white dark:bg-zinc-950 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800">
            {['All', 'Ready', 'Off-Plan'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedStatus === st ? 'bg-[#EF4444] text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Location Select */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'All' ? 'All Communities' : loc}
              </option>
            ))}
          </select>

          {/* Asset Type Select */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
          >
            {types.map((tp) => (
              <option key={tp} value={tp}>
                {tp === 'All' ? 'All Asset Types' : tp}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-500 font-medium">Sort By:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as any)}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-red-500 font-medium"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="flex justify-between items-center mb-6 text-xs text-zinc-500 dark:text-zinc-400">
        <span>Showing <strong className="text-zinc-900 dark:text-white">{filteredProperties.length}</strong> Prime Residences</span>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-zinc-100/30 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">No residences match your selected filters.</p>
          <button
            onClick={() => {
              setSelectedStatus('All');
              setSelectedType('All');
              setSelectedLocation('All');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-[#EF4444] hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
