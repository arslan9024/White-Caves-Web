import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';
import { PORTAL_LINK } from '@/data/nav.data';
import { BrandLogo } from '../Brand';
import {
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_OFFICE_CONTACT,
} from './footer.data';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t-2 border-[#EF4444] pt-16 pb-12 px-6 lg:px-12 text-zinc-500 dark:text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-200/80 dark:border-zinc-800/80">
        {/* Col 1: Corporate Identity & DLD/RERA Badge */}
        <div>
          <div className="mb-4">
            <BrandLogo variant="compact" />
          </div>
          <p className="leading-relaxed mb-4 text-zinc-500 dark:text-zinc-400">
            Dubai&apos;s premier sovereign luxury real estate agency delivering high-yield secondary market, off-plan, and institutional portfolio acquisitions.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[#EF4444] text-[11px] font-bold">
            <ShieldCheck size={14} /> {FOOTER_OFFICE_CONTACT.reraLicense} · {FOOTER_OFFICE_CONTACT.ornNumber}
          </div>
        </div>

        {/* Col 2: Curated Property Links */}
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            Properties &amp; Communities
          </h4>
          <ul className="space-y-2.5">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-zinc-900 dark:hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={PORTAL_LINK}
                className="text-[#EF4444] font-semibold hover:underline"
              >
                Enterprise Agent CRM Hub →
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Head Office */}
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            Contact Head Office
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[#EF4444] shrink-0 mt-0.5" />
              <span>{FOOTER_OFFICE_CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#EF4444] shrink-0" />
              <a
                href={FOOTER_OFFICE_CONTACT.phoneHref}
                className="hover:text-zinc-900 dark:hover:text-white transition"
              >
                {FOOTER_OFFICE_CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-[#EF4444] shrink-0" />
              <a
                href={FOOTER_OFFICE_CONTACT.emailHref}
                className="hover:text-zinc-900 dark:hover:text-white transition"
              >
                {FOOTER_OFFICE_CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Dubai Market Intelligence Newsletter */}
        <FooterNewsletter />
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
        <p>
          © 2026 White Caves Real Estate LLC. All rights reserved. Registered under Dubai Land Department (DLD).
        </p>
        <div className="flex gap-6">
          {FOOTER_LEGAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-zinc-700 dark:hover:text-zinc-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
