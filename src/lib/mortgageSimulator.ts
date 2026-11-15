/**
 * UAE Mortgage & Payment Plan Simulator (Point 76).
 */
export interface MortgageEstimate {
  loanAmountAed: number;
  downPaymentAed: number;
  monthlyEmiAed: number;
}

export function simulateUaeMortgage(
  propertyPriceAed: number,
  downPaymentPct = 20,
  annualRatePct = 4.25,
  tenureYears = 25
): MortgageEstimate {
  const downPaymentAed = Number(((propertyPriceAed * downPaymentPct) / 100).toFixed(2));
  const loanAmountAed = Number((propertyPriceAed - downPaymentAed).toFixed(2));
  const monthlyRate = annualRatePct / 100 / 12;
  const n = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, n);
  const monthlyEmiAed =
    monthlyRate === 0
      ? Number((loanAmountAed / n).toFixed(2))
      : Number(((loanAmountAed * monthlyRate * factor) / (factor - 1)).toFixed(2));

  return { loanAmountAed, downPaymentAed, monthlyEmiAed };
}
