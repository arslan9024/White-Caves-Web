import { LucideIcon, Calendar, Sparkles, Building } from 'lucide-react';

export interface ConciergeInquiryOption {
  icon: LucideIcon;
  title: string;
  message: string;
}

export const CONCIERGE_WHATSAPP_NUMBER = '971585919024';

export const CONCIERGE_INQUIRY_OPTIONS: ConciergeInquiryOption[] = [
  {
    icon: Calendar,
    title: 'Book Private Villa Viewing',
    message: 'Hello White Caves! I would like to schedule a private VIP viewing for a luxury property.',
  },
  {
    icon: Sparkles,
    title: 'Off-Plan Investment Launches',
    message: 'Hello! Please share latest developer off-plan launches (Emaar, Nakheel, Sobha) with payment plans.',
  },
  {
    icon: Building,
    title: 'List My Property for Sale/Rent',
    message: 'Hello White Caves, I am a landlord interested in listing my property with your RERA-licensed agency.',
  },
];
