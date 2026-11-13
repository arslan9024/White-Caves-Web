'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'ring' | 'compact' | 'footer';
  className?: string;
  showText?: boolean;
}

export const BrandLogo: FC<BrandLogoProps> = ({
  variant = 'ring',
  className = '',
  showText = true,
}) => {
  if (variant === 'ring') {
    return (
      <Link
        href="/"
        className={`group relative flex items-center gap-3.5 focus:outline-none select-none ${className}`}
        aria-label="White Caves Real Estate Home"
      >
        {/* Exact Signature Overhanging Glowing Ring Logo (Half hanging past navbar bottom) */}
        <div className="relative w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] rounded-full p-[3px] bg-white dark:bg-[#0B0F17] border-[3.5px] border-[#EF4444] shadow-[0_8px_30px_rgba(239,68,68,0.45)] group-hover:shadow-[0_12px_40px_rgba(239,68,68,0.7)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center translate-y-[26px] z-50 overflow-visible">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/company-logo.jpg"
              alt="White Caves Logo"
              width={70}
              height={70}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>

          {/* Green Online Status Node */}
          <span
            className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0B0F17] shadow-[0_0_8px_#10B981]"
            title="System Live"
          />
        </div>

        {showText && (
          <div className="flex flex-col ml-1">
            <span className="text-base sm:text-lg font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-none font-serif group-hover:text-[#EF4444] transition-colors">
              White Caves
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-[#EF4444] font-bold uppercase mt-1">
              Real Estate LLC • Dubai
            </span>
          </div>
        )}
      </Link>
    );
  }

  // Compact or Footer variant
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 focus:outline-none select-none ${className}`}
      aria-label="White Caves Real Estate Home"
    >
      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
        <Image
          src="/company-logo.jpg"
          alt="White Caves Logo"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white block leading-tight">
            WHITE CAVES
          </span>
          <span className="text-[10px] tracking-wider text-[#EF4444] font-semibold uppercase">
            Real Estate LLC
          </span>
        </div>
      )}
    </Link>
  );
};

export default BrandLogo;
