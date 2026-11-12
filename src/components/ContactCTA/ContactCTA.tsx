import { ShieldCheck, PhoneCall, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { WHATSAPP_LINK } from '../../data/nav.data';

export const ContactCTA = () => {
  return (
    <section id="contact" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 leading-tight">
            Connect With Our Managing Partners.
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed max-w-lg">
            Whether securing prime waterfront estates or structuring tax-advantaged off-plan assets in the UAE, our advisory floor is at your service.
          </p>

          <div className="mt-8 space-y-4 text-xs text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#EF4444]">
                <Clock size={16} />
              </div>
              <span>Guaranteed 15-minute response SLA for accredited buyers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                <ShieldCheck size={16} />
              </div>
              <span>Fully compliant with DLD/RERA escrow protection protocols</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                <PhoneCall size={16} />
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Direct WhatsApp Hotline: +971 4 800 94483
              </a>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
