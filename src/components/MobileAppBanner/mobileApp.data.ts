// src/components/MobileAppBanner/mobileApp.data.ts
export interface AppFeature {
  title: string;
  desc: string;
}

export const APP_FEATURES: AppFeature[] = [
  {
    title: 'Off-Plan Launch Alerts',
    desc: 'Instant priority notifications for Emaar, Nakheel, and DAMAC launches.',
  },
  {
    title: 'Direct RERA Agent Chat',
    desc: 'Connect with certified Dubai luxury specialists in real-time.',
  },
  {
    title: 'Offline Contract & Viewing Hub',
    desc: 'Manage inspection notes, Ejari leases, and viewing schedules on the go.',
  },
];
