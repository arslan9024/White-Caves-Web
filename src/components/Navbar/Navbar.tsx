'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { NAV_LINKS, PORTAL_LINK, WHATSAPP_LINK } from '../../data/nav.data';
import { NavLinks } from './NavLinks';
import { MobileDrawer } from './MobileDrawer';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/85 border-b border-zinc-800/80 px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center">
            <Image
              src="/company-logo.jpg"
              alt="White Caves Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-none">
              WHITE CAVES
            </span>
            <span className="text-[10px] tracking-widest text-[#EF4444] font-semibold uppercase">
              Real Estate LLC • Dubai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavLinks links={NAV_LINKS} className="hidden md:flex" />

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={PORTAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md border border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 transition"
          >
            Agent Portal
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#EF4444] text-white hover:bg-red-600 shadow-md shadow-red-500/20 transition"
          >
            Inquire Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Slide Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
};
