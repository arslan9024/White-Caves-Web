export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Properties', href: '/properties' },
  { label: 'Off-Plan', href: '/off-plan' },
  { label: 'Services', href: '/services' },
  { label: 'Tools & ROI', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const PORTAL_LINK = 'https://app.whitecaves.com';
export const WHATSAPP_LINK = 'https://wa.me/971585919024';
