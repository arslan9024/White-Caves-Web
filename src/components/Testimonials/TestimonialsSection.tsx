import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  location: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'White Caves secured a flagship off-plan allocation on Palm Jumeirah before public launch. Unmatched level of speed and integrity.',
    author: 'Maximilian Vance',
    title: 'Family Office Principal',
    location: 'Zurich / Dubai',
  },
  {
    quote:
      'The entire conveyancing and DLD trustee transfer took under 48 hours. Seamless execution from end-to-end.',
    author: 'Khadija Al-Maktoum',
    title: 'Private Investor',
    location: 'Dubai, UAE',
  },
  {
    quote:
      'Superb portfolio modeling and accurate yield projections. By far the sharpest brokerage team operating in Downtown.',
    author: 'Sir Arthur Sterling',
    title: 'Managing Director, Sterling Capital',
    location: 'London, UK',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="px-6 lg:px-12 py-20 bg-zinc-900/30 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Trusted by Discerning Investors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div className="flex gap-1 text-[#EF4444] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-zinc-300 italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm text-white">{t.author}</p>
                <p className="text-xs text-zinc-400">{t.title}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
