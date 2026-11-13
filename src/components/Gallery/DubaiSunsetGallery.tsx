'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Eye, X } from 'lucide-react';

interface SunsetPhoto {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  goldenHourTime: string;
  tag: string;
}

const SUNSET_PHOTOS: SunsetPhoto[] = [
  {
    id: 'sunset-palm-01',
    title: 'Atlantis The Royal Sunset Horizon',
    location: 'Palm Jumeirah, Crescent',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:42 GST',
    tag: 'Ultra-Prime Waterfront',
  },
  {
    id: 'sunset-marina-02',
    title: 'Dubai Marina Twilight Yacht Promenade',
    location: 'Dubai Marina Channel',
    imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:50 GST',
    tag: 'Skyline Reflections',
  },
  {
    id: 'sunset-hills-03',
    title: 'Emerald Fairways Golden Hour Vista',
    location: 'Dubai Hills Estate',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:38 GST',
    tag: 'Championship Golf Haven',
  },
];

export const DubaiSunsetGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<SunsetPhoto | null>(null);

  return (
    <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-[#EF4444] text-zinc-900 dark:text-white shadow-lg shadow-red-600/20">
            <Camera size={22} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Dubai Golden Hour Lifestyle Gallery
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Curated editorial photography captured across Dubai's most prestigious coastal horizons.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-amber-500 dark:text-amber-400">
          Editorial 4K Curation
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUNSET_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative h-64 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 shadow-xl transition-all cursor-pointer"
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-zinc-950/80 border border-zinc-300 dark:border-zinc-700 text-amber-300 text-[10px] font-bold backdrop-blur-md">
                {photo.goldenHourTime}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 block mb-1">
                {photo.tag}
              </span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-300 transition-colors">
                {photo.title}
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{photo.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-950/80 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white"
            >
              <X size={18} />
            </button>
            <div className="relative h-96 sm:h-[500px] w-full">
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-white dark:bg-zinc-950 flex justify-between items-center">
              <div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{selectedPhoto.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{selectedPhoto.location} • {selectedPhoto.goldenHourTime}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[#EF4444] text-xs font-bold">
                {selectedPhoto.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
