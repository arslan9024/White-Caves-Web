import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../../data/nav.data';

export const HeroCTA = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
      <Link
        href="#properties"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-semibold text-sm bg-[#EF4444] text-zinc-900 dark:text-white hover:bg-red-600 shadow-xl shadow-red-600/25 transition"
      >
        <span>Explore Listings</span>
        <ArrowRight size={16} />
      </Link>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-semibold text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 hover:border-zinc-300 dark:border-zinc-700 transition"
      >
        <Phone size={16} />
        <span>VIP WhatsApp Advisory</span>
      </a>
    </div>
  );
};
