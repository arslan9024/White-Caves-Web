'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavItem, PORTAL_LINK, WHATSAPP_LINK } from '../../data/nav.data';
import { ThemeToggle } from '../Theme';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
}

export const MobileDrawer = ({ isOpen, onClose, links }: MobileDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg flex flex-col p-6 animate-in fade-in duration-200">
      <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <Image
            src="/company-logo.jpg"
            alt="White Caves"
            width={36}
            height={36}
            className="rounded-lg object-cover"
          />
          <span className="font-bold text-zinc-900 dark:text-white tracking-wide">WHITE CAVES</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-900 dark:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      <nav className="flex flex-col gap-4 py-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-lg font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#EF4444] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <a
          href={PORTAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
        >
          Agent Portal
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#EF4444] text-zinc-900 dark:text-white hover:bg-red-600 shadow-md shadow-red-500/20"
        >
          Inquire via WhatsApp
        </a>
      </div>
    </div>
  );
};
