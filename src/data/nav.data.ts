export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Featured Listings', href: '#properties' },
  { label: 'Market Stats', href: '#stats' },
  { label: 'Our Experts', href: '#team' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PORTAL_LINK = 'https://app.whitecaves.com';
export const WHATSAPP_LINK = 'https://wa.me/971500000000';
