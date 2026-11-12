import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';
import { PORTAL_LINK } from '../../data/nav.data';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 px-6 lg:px-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-800/80">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-[#EF4444] text-white font-bold flex items-center justify-center text-sm">
              WC
            </div>
            <span className="text-base font-bold text-white tracking-wide">WHITE CAVES</span>
          </div>
          <p className="leading-relaxed mb-4 text-zinc-400">
            Dubai's premier sovereign luxury brokerage delivering secondary market, off-plan, and institutional portfolio acquisitions.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-[11px] font-semibold">
            <ShieldCheck size={14} /> RERA License #108920
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            <li><Link href="#properties" className="hover:text-white transition">Featured Villas</Link></li>
            <li><Link href="#properties" className="hover:text-white transition">Off-Plan Branded Residences</Link></li>
            <li><Link href="#stats" className="hover:text-white transition">Market Telemetry</Link></li>
            <li><Link href="#team" className="hover:text-white transition">Advisory Team</Link></li>
            <li><a href={PORTAL_LINK} className="text-[#EF4444] hover:underline">Agent CRM Hub</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-sm font-bold text-white mb-4">Head Office</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[#EF4444] shrink-0 mt-0.5" />
              <span>Level 42, Marina Plaza, Dubai Marina, United Arab Emirates</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#EF4444] shrink-0" />
              <span>+971 4 800 94483</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-[#EF4444] shrink-0" />
              <span>vip@whitecaves.ae</span>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <FooterNewsletter />
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
        <p>© 2026 White Caves Real Estate LLC. All rights reserved. Registered under Dubai Land Department (DLD).</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-zinc-300">Terms of Service</Link>
          <Link href="#" className="hover:text-zinc-300">RERA Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};
