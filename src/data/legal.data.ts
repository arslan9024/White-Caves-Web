export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const PRIVACY_POLICY_LAST_UPDATED = 'January 2026';

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction & Sovereign Scope',
    paragraphs: [
      'White Caves Real Estate LLC ("we", "us", "our", or "Company"), registered under the Dubai Department of Economy & Tourism (Commercial License #1388443) and regulated by the Real Estate Regulatory Agency (RERA ORN #12849 / #44483), is committed to protecting the confidentiality and security of your personal and institutional data.',
      'This Privacy Policy explains how we collect, process, disclose, and safeguard your information when you interact with our public web properties, investor portals, WhatsApp AI concierges (Linda & Zoe), and property advisory services in accordance with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and Dubai Land Department (DLD) regulations.',
    ],
  },
  {
    id: 'collection',
    heading: '2. Information We Collect',
    paragraphs: [
      'We collect information strictly necessary to execute real estate brokerage, off-plan allocation, conveyancing, and tenancy registration (Ejari) services:',
    ],
    bullets: [
      'Identity & KYC Data: Full legal name, passport copy, Emirates ID (for UAE residents), nationality, and contact details required for mandatory DLD/RERA AML/KYC compliance.',
      'Portfolio & Mandate Preferences: Budget horizons, target communities, yield requirements, and financing preferences.',
      'Transaction & Escrow Records: Form A, Form B, Form F (MOU) agreements, Title Deed numbers, Trakheesi permit references, and escrow milestone receipts.',
      'Digital Telemetry: Device metadata, IP address, currency/unit preferences, and encrypted session cookies.',
    ],
  },
  {
    id: 'usage',
    heading: '3. How We Use Your Information',
    paragraphs: [
      'Your personal and financial information is processed exclusively for legitimate brokerage and statutory purposes:',
    ],
    bullets: [
      'Executing property acquisitions, off-plan developer reservations, and secondary market transfers before DLD Real Estate Registration Trustees.',
      'Registering and renewing residential and commercial tenancy contracts via the official DLD Ejari portal.',
      'Conducting statutory Anti-Money Laundering (AML) and Know Your Customer (KYC) screenings required by UAE Ministry of Economy regulations.',
      'Delivering curated property dossiers, ROI projections, and instant WhatsApp concierge updates.',
    ],
  },
  {
    id: 'disclosure',
    heading: '4. Statutory & Third-Party Disclosures',
    paragraphs: [
      'We never sell client data. We share information only with authorized statutory bodies and transaction counterparties:',
    ],
    bullets: [
      'Dubai Land Department (DLD) & RERA: For Trakheesi permits, Ejari registrations, and Title Deed issuance.',
      'Master Developers & Escrow Banks: Emaar, DAMAC, Nakheel, Sobha, and DLD-regulated escrow trustees to secure unit allocations.',
      'UAE Mortgage & Valuation Partners: When explicitly instructed by you to obtain bank pre-approval or RERA-certified valuation reports.',
    ],
  },
  {
    id: 'security',
    heading: '5. Cryptographic Security & Data Retention',
    paragraphs: [
      'We enforce enterprise-grade encryption (TLS 1.3 in transit and AES-256 at rest), strict role-based access controls (RBAC), and unit-door masking across our sovereign CRM infrastructure. Statutory transaction records are retained for the minimum period mandated by UAE federal commercial and AML laws.',
    ],
  },
  {
    id: 'contact',
    heading: '6. Data Protection Officer & Contact',
    paragraphs: [
      'To exercise your rights of access, rectification, or erasure under UAE data protection law, please contact our Compliance & Legal Desk:',
      'White Caves Real Estate LLC — Level 42, Marina Plaza, Dubai Marina / Office D-72, El-Shaye-4, Port Saeed, Dubai, UAE. Email: vip@whitecaves.ae | Phone: +971 4 800 94483.',
    ],
  },
];

export const TERMS_LAST_UPDATED = 'January 2026';

export const TERMS_OF_SERVICE_SECTIONS: LegalSection[] = [
  {
    id: 'agreement',
    heading: '1. Agreement to Terms',
    paragraphs: [
      'By accessing or using the digital platforms and advisory services operated by White Caves Real Estate LLC, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Emirate of Dubai and the United Arab Emirates.',
    ],
  },
  {
    id: 'rera-compliance',
    heading: '2. RERA Brokerage Mandate & Trakheesi Permits',
    paragraphs: [
      'All property listings published on this website are marketed under valid Dubai Land Department (DLD) Trakheesi electronic permits. Formal representation of sellers (Form A), buyers (Form B), and property sales (Form F / MOU) is governed strictly by RERA standard contracts.',
    ],
    bullets: [
      'Published prices, floor areas (Sq.Ft / Sq.M), and projected rental yields are indicative and subject to final DLD Title Deed and developer SPA verification.',
      'Foreign currency conversions (USD, EUR, GBP) are provided for convenience based on reference FX rates; all official DLD transactions and escrow settlements are denominated in UAE Dirhams (AED).',
    ],
  },
  {
    id: 'intellectual-property',
    heading: '3. Intellectual Property & Use License',
    paragraphs: [
      'All architectural photography, market intelligence indices, ROI calculators, and software interfaces on this site are the proprietary property of White Caves Real Estate LLC. You may view and download property dossiers for personal or institutional investment evaluation only.',
    ],
    bullets: [
      'Automated scraping, unauthorized syndication, or republishing of DLD-verified listings without written consent is strictly prohibited.',
      'You may not reverse-engineer, copy, or redistribute our proprietary valuation models or AI concierge workflows.',
    ],
  },
  {
    id: 'calculators-disclaimer',
    heading: '4. Financial Calculators & Yield Projections Disclaimer',
    paragraphs: [
      'Our interactive Mortgage, DLD Transfer Fee (4%), and Net Yield calculators are provided as informational underwriting aids. They do not constitute binding financial, tax, or legal advice. Actual mortgage rates depend on UAE Central Bank regulations and individual bank credit underwriting.',
    ],
  },
  {
    id: 'limitation-of-liability',
    heading: '5. Limitation of Liability',
    paragraphs: [
      'White Caves Real Estate LLC shall not be liable for any indirect, incidental, or consequential damages arising from reliance on preliminary market estimates, third-party developer construction timelines, or temporary portal unavailability.',
    ],
  },
  {
    id: 'governing-law',
    heading: '6. Governing Law & Jurisdiction',
    paragraphs: [
      'These Terms of Service are governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. Any dispute arising hereunder shall be subject to the exclusive jurisdiction of the Dubai Courts and the Dubai Rental Dispute Center (RDC), as applicable.',
    ],
  },
];
