export interface InvestorTestimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  verifiedDeal: string;
}

export const INVESTOR_TESTIMONIALS: InvestorTestimonial[] = [
  {
    id: 1,
    name: 'Alexander Volkov',
    role: 'Managing Director, Tech Ventures',
    location: 'Zurich, Switzerland',
    rating: 5,
    quote:
      'White Caves secured an off-plan penthouse in Palm Jumeirah that yielded 14.8% net appreciation in 12 months. Arslan and his team are world-class.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verifiedDeal: 'Verified AED 18.5M Palm Jumeirah Deal',
  },
  {
    id: 2,
    name: 'Sophia Al-Hassan',
    role: 'Private Investor',
    location: 'Riyadh, Saudi Arabia',
    rating: 5,
    quote:
      'The seamless digital contract execution and instant Golden Visa assistance made acquiring our 4-bedroom villa in DAMAC Hills 2 effortlessly smooth.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    verifiedDeal: 'Verified AED 4.2M Villa Acquisition',
  },
  {
    id: 3,
    name: 'David & Sarah Chen',
    role: 'Portfolio Managers',
    location: 'Singapore',
    rating: 5,
    quote:
      'As international buyers, transparency is everything. White Caves provided real-time ROI telemetry and complete DLD regulatory audit support.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    verifiedDeal: 'Verified AED 9.8M Downtown Dubai Deal',
  },
  {
    id: 4,
    name: 'Sir Arthur Sterling',
    role: 'Managing Director, Sterling Capital',
    location: 'London, UK',
    rating: 5,
    quote:
      'Superb portfolio modeling and accurate yield projections. By far the sharpest sovereign luxury brokerage team operating in Downtown and DIFC.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    verifiedDeal: 'Verified AED 34M DIFC Commercial Portfolio',
  },
];
