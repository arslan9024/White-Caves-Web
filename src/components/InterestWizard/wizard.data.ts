// src/components/InterestWizard/wizard.data.ts
import { Home, Building2, Key, LucideIcon } from 'lucide-react';

export interface WizardOption {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  targetHref: string;
  badge: string;
}

export const WIZARD_OPTIONS: WizardOption[] = [
  {
    id: 'buying',
    label: 'Acquire Property',
    icon: Home,
    headline: 'Prime & Off-Plan Luxury',
    description: 'Explore curated penthouses, beachfront villas, and high-yield off-plan launches.',
    targetHref: '/properties',
    badge: 'Tier 1 Developer Direct',
  },
  {
    id: 'selling',
    label: 'List Property',
    icon: Building2,
    headline: 'Global VIP Marketing',
    description: 'Showcase your property to our private network of qualified international investors.',
    targetHref: '/list-your-property',
    badge: 'RERA Licensed Brokerage',
  },
  {
    id: 'renting',
    label: 'Residential Leasing',
    icon: Key,
    headline: 'Ejari-Compliant Leases',
    description: 'Discover luxury turnkey residences with seamless digital tenancy registration.',
    targetHref: '/properties',
    badge: 'Instant Digital Contracts',
  },
];
