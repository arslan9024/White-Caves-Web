'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { NAV_LINKS, PORTAL_LINK, WHATSAPP_LINK } from '../../data/nav.data';
import { NavLinks } from './NavLinks';
import { MobileDrawer } from './MobileDrawer';
import { ThemeToggle } from '../Theme';
import { BrandLogo } from '../Brand';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b-2 border-[#EF4444] px-6 lg:px-12 h-[68px] flex items-center justify-between transition-colors shadow-sm">
        <BrandLogo variant="ring" />

        {/* Desktop Navigation */}
        <NavLinks links={NAV_LINKS} className="hidden md:flex" />

        {/* CTAs & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={PORTAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-200 dark:bg-zinc-800 transition"
          >
            Agent Portal
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#EF4444] text-zinc-900 dark:text-white hover:bg-red-600 shadow-md shadow-red-500/20 transition"
          >
            Inquire Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-900 dark:text-white"
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
