import Link from 'next/link';
import { NavItem } from '../../data/nav.data';

interface NavLinksProps {
  links: NavItem[];
  onItemClick?: () => void;
  className?: string;
}

export const NavLinks = ({ links, onItemClick, className = '' }: NavLinksProps) => {
  return (
    <nav className={`flex items-center gap-6 text-sm font-medium text-zinc-300 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onItemClick}
          className="hover:text-white transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
