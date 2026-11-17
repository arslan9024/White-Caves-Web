import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { LandlordListingForm } from '@/components/LandlordListing';

export const metadata: Metadata = {
  title: 'List Your Property | White Caves Real Estate',
  description:
    'Submit your Dubai property for leasing through White Caves Real Estate. RERA Licensed, Ejari-compliant contracts, and dedicated property management by our Managing Director.',
  openGraph: {
    title: 'List Your Property — White Caves Real Estate',
    description:
      'Dubai landlords: list your property with our RERA-licensed brokerage. Free property valuation, professional photography, and Ejari-compliant leasing.',
    url: 'https://www.whitecaves.com/list-your-property',
  },
};

export default function ListYourPropertyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 px-6 lg:px-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#EF4444] text-xs font-bold uppercase tracking-wider">
              Landlord Intake Portal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              List Your Property
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Submit your property details and our Managing Director will
              personally review, verify your Title Deed, and publish your
              listing to our network of qualified tenants.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[
                'RERA Licensed (BRN 56529)',
                'Ejari-Compliant Contracts',
                'Free Property Valuation',
                'MD Personal Review',
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-3xl mx-auto px-6 lg:px-12 py-12">
          <div className="bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            <LandlordListingForm />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Submit Details',
                desc: 'Fill in your property information and contact details.',
              },
              {
                step: '02',
                title: 'MD Review',
                desc: 'Our Managing Director verifies your Title Deed within 24 hours.',
              },
              {
                step: '03',
                title: 'Go Live',
                desc: 'Your property is published to our qualified tenant network.',
              },
              {
                step: '04',
                title: 'Lease & Earn',
                desc: 'We handle Ejari, PDC collection, and key handover.',
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="text-center p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70"
              >
                <div className="text-2xl font-black text-red-500 mb-2">
                  {step}
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                  {title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppConciergePill />
    </>
  );
}
