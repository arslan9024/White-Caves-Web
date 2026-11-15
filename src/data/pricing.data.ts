export interface PricingPlanItem {
  id: string;
  name: string;
  badge: string;
  category: 'standard' | 'starter';
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  oneTimePrice?: number;
  commission: string;
  splitRatio: number;
  isYearlyOnly?: boolean;
  popular?: boolean;
  features: string[];
}

export interface AgreementCategoryOption {
  id: 'Category A' | 'Category B' | 'Category C' | 'Category D' | 'Category E';
  name: string;
  commission: number;
  agencySplit: number;
  monthlyFee: string;
}

export const PRICING_PLANS: PricingPlanItem[] = [
  {
    id: 'basic-100',
    name: 'Basic Plan',
    badge: 'Standard 100% Plan',
    category: 'standard',
    subtitle:
      'Designed for ambitious real estate brokers who want to establish themselves in the Dubai market with 100% deal retention.',
    monthlyPrice: 1500,
    yearlyPrice: 1000,
    commission: '100% Commission',
    splitRatio: 1.0,
    features: [
      'Close Unlimited Deals',
      'Earn 100% Commission on All Deals',
      'Fast Commission Payouts (< 24 hrs)',
      'Access to All Major Dubai Developers',
      'Admin & Document Typing Support',
      'Linda AI Bot Assistant Access',
    ],
  },
  {
    id: 'premium-100',
    name: 'Premium Plan',
    badge: 'RERA Brokers Card Included',
    category: 'standard',
    subtitle:
      'Tailored for brokers holding a valid residence visa in Dubai, offering full RERA licensing and featured portal exposure.',
    monthlyPrice: 2150,
    yearlyPrice: 2150,
    isYearlyOnly: true,
    popular: true,
    commission: '100% Commission',
    splitRatio: 1.0,
    features: [
      'Close Unlimited Deals',
      'Earn 100% Commission',
      'Access to All Developers',
      'Admin & Escrow Support',
      'Fast Commission Payouts',
      'Official RERA Brokers Card',
      '5 Standard Featured Property Listings',
      'Branded White Caves Business Cards',
      'Branded White Caves Corporate Email',
    ],
  },
  {
    id: 'premium-plus-100',
    name: 'Premium Plus Plan',
    badge: 'UAE Visa + RERA Card',
    category: 'standard',
    subtitle:
      'Secure a Dubai residence visa and Emirates ID sponsorship alongside an official RERA card for full legal standing.',
    monthlyPrice: 2500,
    yearlyPrice: 2500,
    isYearlyOnly: true,
    commission: '100% Commission',
    splitRatio: 1.0,
    features: [
      'Close Unlimited Deals',
      'Earn 100% Commission',
      'Access to All Developers',
      'Admin & Legal Support',
      'Fast Commission Payouts',
      'Official RERA Brokers Card',
      'UAE Residence Visa & Emirates ID Sponsorship',
      '5 Standard Featured Property Listings',
      'Branded Business Card & Corporate Email',
    ],
  },
  {
    id: 'one-time-100',
    name: 'One Time Deal',
    badge: 'Single Transaction',
    category: 'standard',
    subtitle:
      'Close a single high-value secondary or off-plan transaction under our licensed RERA ORN #12345 umbrella.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    oneTimePrice: 8000,
    commission: '100% Commission',
    splitRatio: 1.0,
    features: [
      'Close 1 High-Value Deal',
      'Earn 100% Commission',
      'Full Admin & Conveyancing Support',
      'Fast Commission Payout',
      'DLD Trustee & Legal Escrow Guidance',
    ],
  },
  {
    id: 'starter-95-5',
    name: '95/5 Split Plan',
    badge: 'High Retention',
    category: 'starter',
    subtitle:
      'Maximize deal earnings with 95% commission retention and low monthly subscription overhead.',
    monthlyPrice: 500,
    yearlyPrice: 475,
    commission: '95% Commission',
    splitRatio: 0.95,
    features: [
      'Close Unlimited Deals',
      'Earn 95% Commission (5% Agency Split)',
      'Access to All Developers',
      'Admin & Typing Support',
      'Fast Commission Payouts',
    ],
  },
  {
    id: 'starter-90-10',
    name: '90/10 Split Plan',
    badge: 'Popular Starter',
    category: 'starter',
    subtitle:
      'Balanced tier for active brokers wanting full developer inventory access and dedicated admin backing.',
    monthlyPrice: 350,
    yearlyPrice: 300,
    commission: '90% Commission',
    splitRatio: 0.9,
    features: [
      'Close Unlimited Deals',
      'Earn 90% Commission (10% Agency Split)',
      'Access to All Developers',
      'Admin & Typing Support',
      'Fast Commission Payouts',
    ],
  },
  {
    id: 'starter-85-15',
    name: '85/15 Split Plan',
    badge: 'Entry Level',
    category: 'starter',
    subtitle:
      'Ideal for part-time brokers or new advisors building their portfolio in Dubai real estate.',
    monthlyPrice: 200,
    yearlyPrice: 150,
    commission: '85% Commission',
    splitRatio: 0.85,
    features: [
      'Close Unlimited Deals',
      'Earn 85% Commission (15% Agency Split)',
      'Access to All Developers',
      'Admin & Typing Support',
      'Fast Commission Payouts',
    ],
  },
  {
    id: 'starter-75-25',
    name: '75/25 Split Plan',
    badge: '100% Free Plan',
    category: 'starter',
    subtitle:
      'Zero monthly fees. Start your broker journey with full developer access and zero fixed overhead.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    commission: '75% Commission',
    splitRatio: 0.75,
    features: [
      'Close Unlimited Deals',
      'Earn 75% Commission (25% Agency Split)',
      'Access to All Developers',
      'Admin & Typing Support',
      'Fast Commission Payouts',
      'AED 0 Monthly Subscription Fee',
    ],
  },
];

export const AGREEMENT_CATEGORY_OPTIONS: AgreementCategoryOption[] = [
  {
    id: 'Category A',
    name: 'Category A – 100% Commission Package',
    commission: 100,
    agencySplit: 0,
    monthlyFee: 'AED 1,500/mo (or AED 1,000/mo billed annually)',
  },
  {
    id: 'Category B',
    name: 'Category B – 95/5 Commission Package',
    commission: 95,
    agencySplit: 5,
    monthlyFee: 'AED 500/mo (or AED 475/mo billed annually)',
  },
  {
    id: 'Category C',
    name: 'Category C – 90/10 Commission Package',
    commission: 90,
    agencySplit: 10,
    monthlyFee: 'AED 350/mo (or AED 300/mo billed annually)',
  },
  {
    id: 'Category D',
    name: 'Category D – 85/15 Commission Package',
    commission: 85,
    agencySplit: 15,
    monthlyFee: 'AED 200/mo (or AED 150/mo billed annually)',
  },
  {
    id: 'Category E',
    name: 'Category E – 75/25 Commission Package',
    commission: 75,
    agencySplit: 25,
    monthlyFee: 'AED 0 / mo (FREE ENTRY)',
  },
];
