export { CAREER_OPENINGS, type CareerJobOpening } from './corporateCareers.data';

export interface CorporateMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CorporateCredential {
  title: string;
  reference: string;
  authority: string;
}

export interface CorporateValue {
  title: string;
  description: string;
}

export interface BrokerageServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  subServices: string[];
  features: string[];
  ctaHref: string;
}

export interface ProcessWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface PrimeAreaYieldMetric {
  community: string;
  grossYield: string;
  appreciationYoY: string;
  communitySlug: string;
}

export const CORPORATE_CREDENTIALS: CorporateCredential[] = [
  {
    title: 'Dubai DET Commercial License',
    reference: 'License #1388443 (Active & Compliant)',
    authority: 'Dubai Department of Economy & Tourism',
  },
  {
    title: 'RERA Brokerage Registration',
    reference: 'ORN #12849 / #44483',
    authority: 'Real Estate Regulatory Agency (DLD)',
  },
  {
    title: 'Corporate Ejari Registration',
    reference: 'Contract #0120260721003974',
    authority: 'Dubai Land Department',
  },
  {
    title: 'Sovereign AI Real Estate Architecture',
    reference: 'AEGIS V5.1 · 235 Autonomous Nodes',
    authority: 'White Caves Technology Division',
  },
];

export const CORPORATE_MILESTONES: CorporateMilestone[] = [
  {
    year: '2009',
    title: 'Dubai Marina Boutique Inception',
    description:
      'Established with a dedicated focus on prime waterfront acquisitions in Dubai Marina and JBR.',
  },
  {
    year: '2015',
    title: 'Off-Plan Developer Mandates',
    description:
      'Secured direct tier-1 developer allocations across Emaar, DAMAC, and Nakheel master communities.',
  },
  {
    year: '2021',
    title: 'Digital Conveyancing & Virtual Tours',
    description:
      'Launched remote power-of-attorney (POA) digital trustee closings for international family offices.',
  },
  {
    year: '2026',
    title: 'AEGIS Sovereign AI Brokerage Mesh',
    description:
      'Deployed Zoe, Linda, and 12 specialized corporate floors orchestrating 9,378+ verified Dubai mandates.',
  },
];

export const CORPORATE_VALUES: CorporateValue[] = [
  {
    title: 'Statutory Integrity',
    description:
      '100% Trakheesi-permitted listings, transparent DLD fee sheets, and escrow-backed contracts.',
  },
  {
    title: 'Sub-Second Velocity',
    description:
      '15-minute VIP consultation SLAs powered by Linda WhatsApp AI and dedicated managing partners.',
  },
  {
    title: 'Global Cross-Border Reach',
    description:
      'Advising institutional and private investors across 40+ jurisdictions in 12+ languages.',
  },
];

export const BROKERAGE_SERVICES: BrokerageServiceItem[] = [
  {
    id: 'acquisition-advisory',
    title: 'Prime Acquisition & Off-Plan Advisory',
    subtitle: 'Direct Developer Allocations & Trophy Resales',
    badge: 'Dept 01 & 02',
    subServices: [
      'Pre-launch Emaar, DAMAC & Sobha allocations',
      'Palm Jumeirah & Dubai Hills secondary villas',
      '10-Year UAE Golden Visa portfolio structuring',
    ],
    features: [
      'DLD price-per-sqft comparative underwriting',
      'RERA Law 8/2007 escrow verification',
      'End-to-end Form B & Form F (MOU) representation',
    ],
    ctaHref: '/properties',
  },
  {
    id: 'disposition-marketing',
    title: 'Asset Disposition & Global Syndication',
    subtitle: 'Maximize Capital Exit Valuation',
    badge: 'Dept 01 & 07',
    subServices: [
      'RERA-certified comparative market valuation',
      '4K architectural sunset & drone media production',
      'Direct syndication to Bayut TruCheck™ & Property Finder',
    ],
    features: [
      'Qualified HNW buyer matching via Zoe AI',
      'Form A exclusivity & DLD NOC management',
      '48-hour DLD Trustee transfer coordination',
    ],
    ctaHref: '/contact',
  },
  {
    id: 'leasing-ejari',
    title: 'Residential Leasing & Ejari Management',
    subtitle: 'High-Yield Turnkey Tenancy Operations',
    badge: 'Dept 04 & 05',
    subServices: [
      'Corporate & diplomatic tenant screening',
      'Official DLD Ejari registration & renewals',
      'RERA Rental Index compliance & yield optimization',
    ],
    features: [
      '90/60/30-day automated renewal alerts',
      'DEWA & chiller activation assistance',
      'Full property & facility maintenance SLAs',
    ],
    ctaHref: '/properties?status=For+Rent',
  },
];

export const ADVISORY_PROCESS_STEPS: ProcessWorkflowStep[] = [
  {
    step: '01',
    title: 'Confidential Mandate Briefing',
    description: 'Define target yield, capital horizon, and preferred Dubai freehold communities.',
  },
  {
    step: '02',
    title: 'AI-Audited Shortlisting',
    description: 'Receive a curated dossier of DLD-verified units with historical transaction comps.',
  },
  {
    step: '03',
    title: 'Private Chauffeur or 4K Virtual Tour',
    description: 'Inspect shortlisted residences in person or via live HD walkthrough.',
  },
  {
    step: '04',
    title: 'Escrow & DLD Trustee Transfer',
    description: 'Execute Form F (MOU), developer NOC, and Title Deed issuance in under 48 hours.',
  },
];

export const PRIME_AREA_YIELDS: PrimeAreaYieldMetric[] = [
  {
    community: 'DAMAC Hills 2',
    grossYield: '8.9%',
    appreciationYoY: '+16.4%',
    communitySlug: 'damac-hills-2',
  },
  {
    community: 'Dubai Marina',
    grossYield: '7.8%',
    appreciationYoY: '+12.8%',
    communitySlug: 'dubai-marina',
  },
  {
    community: 'Downtown Dubai',
    grossYield: '6.9%',
    appreciationYoY: '+14.5%',
    communitySlug: 'downtown-dubai',
  },
  {
    community: 'Palm Jumeirah',
    grossYield: '6.4%',
    appreciationYoY: '+18.2%',
    communitySlug: 'palm-jumeirah',
  },
];
