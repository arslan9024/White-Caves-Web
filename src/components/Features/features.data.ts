export interface LuxuryFeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  ctaText: string;
  ctaHref: string;
  badge: string;
}

export interface DubaiRealEstateFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const LUXURY_FEATURES: LuxuryFeatureItem[] = [
  {
    id: 'ai-matching',
    number: '01',
    title: 'AI-Powered Portfolio Matching',
    description:
      'Intelligent property recommendations tailored to your yield targets, budget, and capital appreciation horizon.',
    details:
      'Our sovereign algorithm analyzes 50+ DLD transaction attributes against your investment profile to surface high-conviction waterfront and golf estate allocations.',
    ctaText: 'Explore Inventory',
    ctaHref: '/properties',
    badge: 'Zoe AI Engine',
  },
  {
    id: 'whatsapp-first',
    number: '02',
    title: 'WhatsApp-First VIP Concierge',
    description:
      'Direct instant messaging with RERA-certified managing partners for immediate dossier delivery.',
    details:
      'Connect directly with your dedicated luxury advisor on WhatsApp within minutes. Zero waiting—real-time floorplans, ROI sheets, and video walkthroughs.',
    ctaText: 'Connect With Advisory',
    ctaHref: '#contact',
    badge: '15m VIP SLA',
  },
  {
    id: 'rera-compliant',
    number: '03',
    title: 'DLD & RERA Escrow Protection',
    description:
      'Fully licensed and regulated by the Dubai Real Estate Regulatory Agency (ORN #12849) for complete institutional security.',
    details:
      'Every off-plan and secondary transaction is protected under Dubai Law No. 8 of 2007 statutory escrow accounts and verified via Trakheesi electronic permits.',
    ctaText: 'View Off-Plan Launches',
    ctaHref: '/off-plan',
    badge: 'ORN #12849',
  },
  {
    id: 'multilingual-desk',
    number: '04',
    title: 'Multi-Currency & Global Desk',
    description:
      'Seamless cross-border conveyancing in English, Arabic, French, Mandarin, Russian, and Spanish.',
    details:
      'Complete remote power-of-attorney (POA) digital trustee transfers, Golden Visa residency structuring, and live AED/USD/EUR/GBP valuation toggles.',
    ctaText: 'Meet Our Specialists',
    ctaHref: '#team',
    badge: '12+ Languages',
  },
  {
    id: 'verified-listings',
    number: '05',
    title: '5-Step TruCheck™ Verification',
    description:
      'Every residence undergoes title deed validation, physical inspection, and DLD pricing audit before publication.',
    details:
      'Zero duplicate or expired listings. Every property displays its live Trakheesi permit status and historical price-per-sqft benchmark.',
    ctaText: 'Browse Verified Homes',
    ctaHref: '/properties',
    badge: '100% Audited',
  },
  {
    id: 'round-the-clock',
    number: '06',
    title: '24/7 Sovereign Client Desk',
    description:
      'Round-the-clock portfolio underwriting, tenancy Ejari management, and private chauffeur viewing coordination.',
    details:
      'Our AI assistant Linda and human luxury directors operate across global time zones from Zurich and London to Singapore and Dubai.',
    ctaText: 'Schedule Viewing',
    ctaHref: '#contact',
    badge: '24/7 Desk',
  },
];

export const DUBAI_REAL_ESTATE_FAQS: DubaiRealEstateFaq[] = [
  {
    id: 'faq-freehold',
    category: 'Ownership',
    question: 'Can international investors buy 100% freehold property in Dubai?',
    answer:
      'Yes. Dubai grants 100% foreign freehold ownership across designated prime zones including Palm Jumeirah, Dubai Marina, Downtown Dubai, Dubai Hills Estate, and DAMAC Hills 2 with no prior residency requirement.',
  },
  {
    id: 'faq-dld-fees',
    category: 'Statutory Costs',
    question: 'What are the statutory DLD transfer fees and closing costs?',
    answer:
      'Standard closing costs include the Dubai Land Department (DLD) Transfer Fee (4% of purchase price), Trustee Registration Fee (AED 4,200 for properties above AED 500K), and Agency Advisory Commission (2% + 5% UAE VAT).',
  },
  {
    id: 'faq-escrow',
    category: 'Off-Plan Safety',
    question: 'How are off-plan property investments protected in Dubai?',
    answer:
      'Under RERA Law No. 8 of 2007, all buyer milestone payments for off-plan properties are deposited into a project-specific DLD-regulated Escrow Account and released to the developer strictly upon certified construction milestones.',
  },
  {
    id: 'faq-golden-visa',
    category: 'Residency',
    question: 'Does purchasing property qualify me for the 10-Year UAE Golden Visa?',
    answer:
      'Yes. Acquiring one or more completed or off-plan properties with a combined title-deed value of AED 2,000,000 or more qualifies the investor and immediate family members for a renewable 10-year UAE Golden Residency Visa.',
  },
  {
    id: 'faq-ejari',
    category: 'Leasing & Yields',
    question: 'What is Ejari and how are rental yields taxed in the UAE?',
    answer:
      'Ejari is the mandatory DLD/RERA electronic registration system for all tenancy contracts in Dubai. Residential rental income in the UAE is subject to 0% personal income tax and 0% capital gains tax for individual investors.',
  },
];
