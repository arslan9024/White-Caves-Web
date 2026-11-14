'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, MapPin, ArrowUpRight, X } from 'lucide-react';
import {
  CURATED_DUBAI_SUNSET_PHOTOS,
  type LuxurySunsetPhoto,
} from './gallery.data';

export interface DubaiSunsetGalleryProps {
  photos?: LuxurySunsetPhoto[];
  className?: string;
}

export const DubaiSunsetGallery = ({
  photos = CURATED_DUBAI_SUNSET_PHOTOS,
  className = '',
}: DubaiSunsetGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<LuxurySunsetPhoto | null>(null);

  const handleClose = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, handleClose]);

  return (
    <section
      aria-label="Curated Dubai Prime Sunset Photography"
      className={`px-6 lg:px-12 py-20 max-w-7xl mx-auto w-full ${className}`}
    >
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-[#EF4444] text-white shadow-lg shadow-red-600/20">
            <Camera size={22} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Dubai Marina &amp; Palm Jumeirah Sunset Curation
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              High-resolution golden hour photography captured across Dubai&apos;s prime waterfronts.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-amber-600 dark:text-amber-400">
          Target T-0010 · Verified 4K
        </span>
      </div>

      {/* Grid of Curated Sunset Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            role="button"
            tabIndex={0}
            aria-label={`Preview ${photo.title} in ${photo.location}`}
            onClick={() => setSelectedPhoto(photo)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPhoto(photo);
              }
            }}
            className="group relative h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/60 shadow-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-amber-300 text-[10px] font-bold backdrop-blur-md">
                {photo.goldenHourTime}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-400 block mb-1">
                {photo.tag}
              </span>
              <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors truncate drop-shadow-md">
                {photo.title}
              </h4>
              <p className="flex items-center gap-1 text-[11px] text-zinc-300 mt-0.5">
                <MapPin size={12} className="text-[#EF4444] shrink-0" />
                <span className="truncate">{photo.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sunset-lightbox-title"
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>
            <div className="relative h-80 sm:h-[500px] w-full">
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-zinc-950 flex flex-wrap justify-between items-center gap-4">
              <div>
                <span className="text-xs text-red-400 font-extrabold uppercase tracking-wider">
                  {selectedPhoto.tag} · {selectedPhoto.goldenHourTime}
                </span>
                <h4 id="sunset-lightbox-title" className="text-lg font-extrabold text-white mt-0.5">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                  <MapPin size={13} className="text-[#EF4444]" />
                  {selectedPhoto.location} · <span className="italic">{selectedPhoto.curatedBy}</span>
                </p>
              </div>
              <Link
                href={`/properties?community=${selectedPhoto.communitySlug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold transition-colors"
              >
                Explore Community
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
