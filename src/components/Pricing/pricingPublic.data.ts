// AEGIS V5.0 — Public Fee Schedule & Consultation Request Data
// Compliant with TURING-LAW-044 (Need-to-Know Information Security) and AEG-042 (<350 lines)

import { Building2, Key, Home, Briefcase, LucideIcon } from 'lucide-react';

export type UserPersona = 'landlord' | 'tenant' | 'investor' | 'broker';

export interface PersonaFeeStructure {
  id: UserPersona;
  label: string;
  badge: string;
  icon: LucideIcon;
  headline: string;
  summary: string;
  standardFees: Array<{ item: string; rate: string; note: string }>;
  privateBenefits: string[];
  ctaLabel: string;
  targetPortal: string;
}

export const PERSONA_STRUCTURES: Record<UserPersona, PersonaFeeStructure> = {
  landlord: {
    id: 'landlord',
    label: 'Property Owners & Landlords',
    badge: 'Asset Management',
    icon: Building2,
    headline: 'High-Yield Property & Tenancy Management',
    summary:
      'Turnkey leasing, verified tenant screening, PDC cheque custody, and official Ejari contract issuance under Dubai Land Department regulations.',
    standardFees: [
      { item: 'Full Tenancy Management', rate: '5% – 8%', note: 'Annual gross rent basis' },
      { item: 'Tenant Placement Only', rate: '1 Month Rent / 5%', note: 'Standard market brokerage' },
      { item: 'Official Ejari Registration', rate: 'AED 220', note: 'Standard government fee' },
    ],
    privateBenefits: [
      'Personalized net yield waterfall and cash flow projection',
      'Automated PDC collection and direct bank deposit clearance',
      '24/7 dedicated tenant maintenance coordination',
    ],
    ctaLabel: 'Request Landlord Fee Schedule & Consultation',
    targetPortal: 'https://landlord.whitecaves.com',
  },
  tenant: {
    id: 'tenant',
    label: 'Tenants & Residents',
    badge: 'Residential Leasing',
    icon: Key,
    headline: 'Transparent Ejari-Compliant Leasing',
    summary:
      'Direct developer and private luxury residences across Dubai with zero unexpected surcharges and certified digital lease execution.',
    standardFees: [
      { item: 'Agency Leasing Fee', rate: '5%', note: 'Of total annual contracted rent' },
      { item: 'Refundable Security Deposit', rate: '5% (Unfurnished) / 10% (Furnished)', note: 'Held in escrow' },
      { item: 'DLD Ejari Fee', rate: 'AED 220', note: 'Official attestation' },
    ],
    privateBenefits: [
      'Pre-approved tenancy agreements with custom payment cheque splits',
      'Instant digital move-in pass and DEWA connection concierge',
      'Direct WhatsApp emergency maintenance dispatch via Linda',
    ],
    ctaLabel: 'Request Tenancy Fee Breakdown',
    targetPortal: 'https://tenant.whitecaves.com',
  },
  investor: {
    id: 'investor',
    label: 'Buyers & International Investors',
    badge: 'Acquisitions & Advisory',
    icon: Home,
    headline: 'VIP Property Acquisition & Off-Plan Advisory',
    summary:
      'Direct developer allocations (Emaar, Nakheel, Meraas, Damac) with 0% buyer agency fee on designated off-plan portfolios.',
    standardFees: [
      { item: 'Off-Plan Developer Direct', rate: '0% Agency Fee', note: 'Direct developer commission' },
      { item: 'Secondary Market Purchase', rate: '2% + VAT', note: 'Standard RERA regulated conveyance' },
      { item: 'Dubai Land Department (DLD) Transfer', rate: '4% + AED 580', note: 'Official government title fee' },
    ],
    privateBenefits: [
      'Tailored high-yield off-plan payment plans and escrow safety audit',
      'UAE Golden Visa eligibility advisory (AED 2M+ acquisitions)',
      'Confidential capital appreciation and exit strategy modeling',
    ],
    ctaLabel: 'Request Private Investment Prospectus',
    targetPortal: 'https://app.whitecaves.com',
  },
  broker: {
    id: 'broker',
    label: 'Licensed Brokers & Associates',
    badge: 'Career & Partnership',
    icon: Briefcase,
    headline: 'Industry-Leading Commission Retentions',
    summary:
      'Join Dubai’s premier luxury sovereign brokerage with RERA sponsorship, high-net-worth lead distribution, and modern AI tools.',
    standardFees: [
      { item: 'Commission Retention', rate: 'Up to 100%', note: 'Subject to verified broker tier' },
      { item: 'RERA Umbrella Sponsorship', rate: 'Included', note: 'Visa and compliance support' },
      { item: 'AI Assistant Mesh & Portals', rate: 'Complimentary', note: 'Enterprise tools access' },
    ],
    privateBenefits: [
      'Confidential commission split matrix unlocked upon verified interview',
      'Exclusive high-ticket luxury listings in Palm Jumeirah and Downtown',
      'Same-week commission disbursement upon deal closing',
    ],
    ctaLabel: 'Apply for Confidential Broker Tier Review',
    targetPortal: 'https://app.whitecaves.com',
  },
};
