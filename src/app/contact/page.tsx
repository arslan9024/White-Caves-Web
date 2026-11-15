import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { ContactCTA } from '@/components/ContactCTA';
import { FOOTER_OFFICE_CONTACT } from '@/components/Footer/footer.data';

export const metadata = {
  title: 'Contact White Caves Real Estate LLC | Dubai Marina & Port Saeed',
  description:
    'Schedule a private consultation with White Caves Real Estate LLC. Guaranteed 15-minute VIP response SLA for Dubai luxury villas, off-plan allocations, and leasing.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <header className="pt-20 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              <ShieldCheck size={14} /> 15-Minute Accredited Buyer Response SLA
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mt-3">
              Connect With Our Advisory Floor
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
              Reach our RERA-certified managing partners directly via WhatsApp, phone, or private office appointment in Dubai Marina and Port Saeed.
            </p>
          </div>
        </header>

        {/* Direct Office Cards */}
        <section className="px-6 lg:px-12 pt-14 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
              <MapPin size={20} className="text-[#EF4444] mb-3" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                Dubai Headquarters
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                {FOOTER_OFFICE_CONTACT.address}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
              <Phone size={20} className="text-[#EF4444] mb-3" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                Direct Advisory Desk
              </h2>
              <a
                href={FOOTER_OFFICE_CONTACT.phoneHref}
                className="text-xs font-bold text-[#EF4444] hover:underline mt-1 block"
              >
                {FOOTER_OFFICE_CONTACT.phone}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
              <Mail size={20} className="text-[#EF4444] mb-3" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                VIP Concierge Email
              </h2>
              <a
                href={FOOTER_OFFICE_CONTACT.emailHref}
                className="text-xs font-bold text-[#EF4444] hover:underline mt-1 block"
              >
                {FOOTER_OFFICE_CONTACT.email}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
              <Clock size={20} className="text-[#EF4444] mb-3" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                Operating Hours (GST)
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Mon–Sun: 09:00–22:00 GST · 24/7 AI Concierge (Linda &amp; Zoe)
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Contact Form & Partner SLA */}
        <ContactCTA />
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}
