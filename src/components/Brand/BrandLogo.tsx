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
        className={`group relative flex items-center gap-3.5 focus:outline-none ${className}`}
        aria-label="White Caves Real Estate Home"
      >
        {/* Signature Glowing Overhanging Red Ring */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full p-[3px] bg-[#070B14] border-[3px] border-[#EF4444] shadow-[0_0_15px_rgba(239,68,68,0.45)] group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] group-hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center">
          <Image
            src="/company-logo.jpg"
            alt="White Caves Logo"
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>

        {showText && (
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-tight font-serif group-hover:text-[#EF4444] transition-colors">
              White Caves
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-[#EF4444] font-bold uppercase">
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
      className={`group flex items-center gap-3 focus:outline-none ${className}`}
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
