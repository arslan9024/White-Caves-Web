export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Featured', href: '/#properties' },
  { label: 'All Properties', href: '/properties' },
  { label: 'Off-Plan Launches', href: '/off-plan' },
  { label: 'ROI & Tools', href: '/#tools' },
  { label: 'Our Experts', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
];

export const PORTAL_LINK = 'https://app.whitecaves.com';
export const WHATSAPP_LINK = 'https://wa.me/971500000000';
