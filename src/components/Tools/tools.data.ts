/**
 * tools.data.ts — Statutory UAE Real Estate Financial Constants
 */
export interface UaeFeeBreakdown {
  dldTransferFee: number;
  dldAdminFee: number;
  agencyBrokerageFee: number;
  mortgageRegistrationFee: number;
  totalUpfrontFees: number;
  totalInitialCashRequired: number;
}

export function calculateUaeFees(propertyPrice: number, loanAmount: number, downPaymentAED: number): UaeFeeBreakdown {
  // Statutory 4% DLD transfer fee
  const dldTransferFee = propertyPrice * 0.04;
  // Standard DLD administrative & title deed issuance fee
  const dldAdminFee = 4300;
  // 2% standard brokerage + 5% UAE VAT
  const agencyBrokerageFee = propertyPrice * 0.02 * 1.05;
  // 0.25% mortgage registration fee + AED 290 admin
  const mortgageRegistrationFee = loanAmount > 0 ? loanAmount * 0.0025 + 290 : 0;

  const totalUpfrontFees = Math.round(
    dldTransferFee + dldAdminFee + agencyBrokerageFee + mortgageRegistrationFee
  );
  const totalInitialCashRequired = Math.round(downPaymentAED + totalUpfrontFees);

  return {
    dldTransferFee,
    dldAdminFee,
    agencyBrokerageFee,
    mortgageRegistrationFee,
    totalUpfrontFees,
    totalInitialCashRequired,
  };
}

export const DEFAULT_TOOL_VALUES = {
  propertyPrice: 3500000,
  expectedRent: 240000,
  downPaymentPct: 20,
  interestRate: 3.99,
  loanTenureYears: 25,
  maintenanceCostPct: 7,
};
