export interface FooterQuickLink {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export interface FooterOfficeContact {
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  reraLicense: string;
  ornNumber: string;
}

export const FOOTER_QUICK_LINKS: FooterQuickLink[] = [
  { label: 'Luxury Villas & Estates', href: '/properties?type=Villa' },
  { label: 'Off-Plan Developments', href: '/off-plan' },
  { label: 'Penthouses & Apartments', href: '/properties?type=Penthouse' },
  { label: 'DAMAC Hills 2 Cluster', href: '/properties?community=damac-hills-2' },
  { label: 'Palm Jumeirah Resales', href: '/properties?community=palm-jumeirah' },
];

export const FOOTER_LEGAL_LINKS: FooterQuickLink[] = [
  { label: 'Privacy Policy', href: '/properties' },
  { label: 'Terms of Service', href: '/properties' },
  { label: 'RERA & DLD Disclaimer', href: '/off-plan' },
];

export const FOOTER_OFFICE_CONTACT: FooterOfficeContact = {
  address: 'Level 42, Marina Plaza, Dubai Marina, United Arab Emirates',
  phone: '+971 4 800 94483 (WHITE)',
  phoneHref: 'tel:+971480094483',
  email: 'vip@whitecaves.ae',
  emailHref: 'mailto:vip@whitecaves.ae',
  reraLicense: 'RERA License #108920',
  ornNumber: 'ORN #12849',
};
