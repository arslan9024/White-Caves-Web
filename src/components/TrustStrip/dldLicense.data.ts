export interface LicenseRecord {
  label: string;
  value: string;
  highlight?: boolean;
}

export const DLD_LICENSE_RECORDS: LicenseRecord[] = [
  { label: 'Legal Corporate Entity', value: 'White Caves Real Estate LLC' },
  { label: 'RERA Office Registration No. (ORN)', value: '44483', highlight: true },
  { label: 'DET Commercial License', value: '1388443' },
  { label: 'Official Ejari Portal Registration', value: '0120250814005322' },
  { label: 'Federal Tax Authority (FTA VAT)', value: '100582914300003' },
];

export const DLD_VERIFY_URL = 'https://dubailand.gov.ae';
