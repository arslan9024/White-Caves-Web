export interface CareerJobOpening {
  id: string;
  title: string;
  department: 'Sales' | 'Leasing' | 'Off-Plan' | 'CRM & AI';
  type: 'Full-Time' | '100% Commission Partner';
  experience: string;
  location: string;
  splitDetails: string;
  visaPolicy: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export const CAREER_OPENINGS: CareerJobOpening[] = [
  {
    id: 'senior-sales',
    title: 'Senior Off-Plan & Secondary Sales Specialist',
    department: 'Sales',
    type: 'Full-Time',
    experience: '2+ Years Dubai Real Estate',
    location: 'Dubai Marina / Business Bay',
    splitDetails: 'Up to 70% Dynamic Commission Split (or 100% Partner Plan)',
    visaPolicy: 'Full UAE Residence Visa, Emirates ID & RERA Card Sponsorship',
    description:
      'Lead high-value off-plan and luxury secondary sales transactions across Dubai prime developments (Emaar, DAMAC, Nakheel, Sobha).',
    responsibilities: [
      'Advise high-net-worth international investors on prime villa and penthouse acquisitions.',
      'Conduct private property viewings and DLD comparative yield underwriting.',
      'Leverage Linda & Zoe AI Concierge pipelines for sub-15-minute lead conversion.',
    ],
    requirements: [
      'Valid RERA Broker Card (BRN) or eligibility for immediate White Caves sponsorship.',
      'Proven track record in Dubai off-plan or secondary freehold sales.',
      'Executive communication skills in English (additional languages highly valued).',
    ],
    perks: [
      'Direct access to 9,378+ verified portfolio mandates',
      'Fast 24-hour commission payouts upon clearance',
      'Full DLD conveyancing, NOC & admin typing support',
    ],
  },
  {
    id: 'dept05-residential-leasing-manager',
    title: 'Residential Leasing Manager — DEPT-05 (Sales, Services & Operations)',
    department: 'Leasing',
    type: 'Full-Time',
    experience: '4+ Years Dubai Residential Leasing Leadership',
    location: 'DAMAC Hills 2 & Dubai Marina HQ',
    splitDetails:
      '60%–70% Split + Division Override (Reports to Dir. Clara DIR-05 & MD Arslan Malik)',
    visaPolicy: 'Full UAE Residence Visa, Emirates ID & RERA Manager Card Sponsorship',
    description:
      'Command White Caves Real Estate LLC’s DAMAC Hills 2 & Dubai Freehold residential leasing division alongside AI Daisy (MGR-05-2), leading 12 Assistant Managers, 108 Supervisors, 1 Team Leader, and 10 Leasing Agents.',
    responsibilities: [
      'Lead the 8-tier DAMAC Hills 2 leasing operation under DEPT-05 (Sales, Services & Operations).',
      'Oversee 10-SIM WhatsApp landlord acquisition campaigns, price negotiations, and sequential Ejari/DEWA closings.',
      'Enforce White Caves 12-stage tenancy SOP: Cheques & fees collected first, Tenant signs first, Payment clearance verified, Landlord countersigns.',
    ],
    requirements: [
      'Valid RERA Broker Card (BRN) and UAE Driving License.',
      'Proven leadership track record in DAMAC Hills 2 (Akoya Oxygen) or Dubai villa communities.',
      'Fluency in RERA Rental Index, Ejari, and DEWA New vs Renewal compliance.',
    ],
    perks: [
      'Full AICC-Sanctum AI Daisy, AI Linda (10-SIM Fleet), AI Mary & AI Henry automation backing',
      'Direct access to 38+ DAMAC Hills 2 cluster landlord databases',
      'Fast 24-hour commission and override payouts upon clearance',
    ],
  },
  {
    id: 'dept05-assistant-leasing-manager-dh2',
    title: 'Assistant Leasing Manager — DAMAC Hills 2 Clusters (12 Openings)',
    department: 'Leasing',
    type: 'Full-Time',
    experience: '2+ Years Dubai Leasing',
    location: 'DAMAC Hills 2 (Pacifica, Camelia, Albizia, Basswood, Vardon & 38 Clusters)',
    splitDetails:
      '55%–65% Commission Split + Cluster Override (Reports to Residential Leasing Manager MGR-05-2)',
    visaPolicy: 'Full UAE Residence Visa & RERA Card Sponsorship',
    description:
      'Manage dedicated DAMAC Hills 2 villa clusters and supervise 9 Cluster Supervisors per Assistant Manager pod within DEPT-05.',
    responsibilities: [
      'Manage cluster-level landlord availability, pricing strategy, and tenant offer submissions.',
      'Coordinate with 9 cluster supervisors and verify unit folders in Google Drive (House Pictures, Landlord/Tenant Docs, Tenancy Contract).',
      'Track 90-day RERA renewal notices and cheque collection milestones.',
    ],
    requirements: [
      'Valid UAE Driving License and 2+ years Dubai leasing experience.',
      'Strong command of DAMAC Hills 2 cluster layouts and rental yields.',
    ],
    perks: [
      'Pre-warmed landlord leads discovered by the 10-SIM Hunter fleet',
      'Dedicated AI Henry Google Drive & Ejari document controller support',
      'Uncapped cluster performance bonuses',
    ],
  },
  {
    id: 'dept05-leasing-team-leader-dh2',
    title: 'Leasing Team Leader — 10-Agent WhatsApp & Viewing Squad (1 Opening + Supervisor Openings)',
    department: 'Leasing',
    type: 'Full-Time',
    experience: '2+ Years UAE Field Leasing',
    location: 'DAMAC Hills 2 Field Operations',
    splitDetails:
      '55%–65% Split + 10-Agent Squad Override (Reports to Cluster Supervisor SUP-05-2-01-1)',
    visaPolicy: 'Full UAE Residence Visa & RERA Card Sponsorship',
    description:
      'Lead a front-line squad of 10 Residential Leasing Agents executing daily WhatsApp landlord discovery campaigns and on-site villa viewings in DAMAC Hills 2.',
    responsibilities: [
      'Coordinate daily Hunter SIM outreach quotas and verify newly discovered available units in Mary Inventory Vault.',
      'Route hot landlord price negotiations and qualified tenant offers directly to the Managing Director Primary Master line (+971505760056).',
      'Manage on-site key handovers and villa viewing schedules across DAMAC Hills 2.',
    ],
    requirements: [
      'Valid UAE Driving License and active Dubai field leasing background.',
      'High discipline in CRM inventory updates and WhatsApp etiquette.',
    ],
    perks: [
      'Squad override on all 10 Leasing Agents in your pod',
      'Instant AI listing generation and SEO publishing on White-Caves-Web',
      '24-hour commission settlement upon cheque clearance',
    ],
  },
  {
    id: 'leasing-specialist',
    title: 'Residential Leasing Agent — DAMAC Hills 2 Hunter & Viewing Squad (10 Openings)',
    department: 'Leasing',
    type: 'Full-Time',
    experience: '1+ Year UAE Leasing',
    location: 'DAMAC Hills 2 & Dubai Marina',
    splitDetails:
      '50%–65% Commission Split + Fast 24-Hour Payouts (Reports to Team Leader TL-05-2-01)',
    visaPolicy: 'Full UAE Residence Visa & RERA Card Sponsorship',
    description:
      'Pair your WhatsApp Hunter line with White Caves AICC-Sanctum to discover available DAMAC Hills 2 villas, update your scoped Mary Inventory Vault, and conduct tenant viewings.',
    responsibilities: [
      'Run anti-ban WhatsApp landlord outreach campaigns to discover available villas and townhouses in DAMAC Hills 2.',
      'Log available units into Mary Inventory Vault and hand off hot leads for Primary Master closing.',
      'Conduct in-person tenant viewings, collect booking cheques/fees, and coordinate Ejari & DEWA handovers.',
    ],
    requirements: [
      'Valid UAE Driving License.',
      'Working knowledge of RERA tenancy laws and Ejari workflows.',
      'High responsiveness on WhatsApp and CRM channels.',
    ],
    perks: [
      'Automated Ejari & DLD compliance desk support via AI Daisy & AI Henry',
      'Exclusive DAMAC Hills 2 & Dubai Marina landlord stock',
      'Uncapped monthly commission potential',
    ],
  },
];
