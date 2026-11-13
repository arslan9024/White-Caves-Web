import { LucideIcon, ShieldCheck, Award, FileCheck2, Building2 } from 'lucide-react';

export interface RegulatoryCredential {
  icon: LucideIcon;
  title: string;
  badge: string;
  subtext: string;
}

export const REGULATORY_CREDENTIALS: RegulatoryCredential[] = [
  {
    icon: ShieldCheck,
    title: 'RERA Certified Broker',
    badge: 'ORN 44483',
    subtext: 'Real Estate Regulatory Agency',
  },
  {
    icon: Award,
    title: 'DET Commercial License',
    badge: 'Lic. 1388443',
    subtext: 'Govt. of Dubai Economy & Tourism',
  },
  {
    icon: FileCheck2,
    title: 'Ejari Authorized Integration',
    badge: 'DLD Verified',
    subtext: 'Official Tenancy Registration Hub',
  },
  {
    icon: Building2,
    title: 'Prime Developer Direct',
    badge: 'Tier 1 Partner',
    subtext: 'Emaar, Nakheel, DAMAC, Sobha',
  },
];
