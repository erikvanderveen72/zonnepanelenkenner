/**
 * Solar panel calculation functions for the Netherlands
 * All calculations based on realistic 2026 data
 */

/**
 * Calculate payback period in years
 * @param investment Total investment in EUR
 * @param annualSavings Annual savings in EUR
 * @returns Payback period in years (rounded to 1 decimal)
 */
export function berekenTerugverdientijd(
  investment: number,
  annualSavings: number
): number {
  if (annualSavings <= 0) return Infinity;
  return Math.round((investment / annualSavings) * 10) / 10;
}

/**
 * Calculate annual electricity generation
 * @param numberOfPanels Number of solar panels
 * @param wattPerPanel Watts per panel (e.g., 400)
 * @param sunHoursPerYear Annual sun hours in the Netherlands (default: 1050)
 * @returns Annual generation in kWh
 */
export function berekenJaarlijkseOpbrengst(
  numberOfPanels: number,
  wattPerPanel: number,
  sunHoursPerYear: number = 1050
): number {
  // Convert watts to kilowatts and multiply by hours
  const totalWatts = numberOfPanels * wattPerPanel;
  const totalKilowatts = totalWatts / 1000;
  return totalKilowatts * sunHoursPerYear;
}

/**
 * Calculate annual savings based on kWh generation and electricity price
 * @param kWhGenerated kWh generated per year
 * @param energyPricePerKwh Energy price per kWh in EUR (default: 0.28)
 * @returns Annual savings in EUR
 */
export function berekenBesparing(
  kWhGenerated: number,
  energyPricePerKwh: number = 0.28
): number {
  return kWhGenerated * energyPricePerKwh;
}

/**
 * Calculate CO2 savings
 * @param kWhGenerated kWh generated per year
 * @param co2PerKwh CO2 per kWh in kg (default: 0.385 for Netherlands)
 * @returns CO2 saved in kg
 */
export function berekenCO2Besparing(
  kWhGenerated: number,
  co2PerKwh: number = 0.385
): number {
  return kWhGenerated * co2PerKwh;
}

/**
 * Calculate number of panels needed for annual consumption
 * @param annualConsumptionKwh Annual electricity consumption in kWh
 * @param wattPerPanel Watts per panel
 * @param sunHoursPerYear Annual sun hours (default: 1050)
 * @returns Number of panels needed (rounded up)
 */
export function berekenAantalPanelen(
  annualConsumptionKwh: number,
  wattPerPanel: number,
  sunHoursPerYear: number = 1050
): number {
  // Calculate panels needed to cover consumption
  const kilowattsNeeded = annualConsumptionKwh / sunHoursPerYear;
  const wattsNeeded = kilowattsNeeded * 1000;
  return Math.ceil(wattsNeeded / wattPerPanel);
}

/**
 * Calculate total installation cost
 * @param numberOfPanels Number of panels
 * @param pricePerPanel Price per panel in EUR
 * @param installationCost Base installation cost in EUR
 * @returns Total cost in EUR
 */
export function berekenTotaleKosten(
  numberOfPanels: number,
  pricePerPanel: number,
  installationCost: number
): number {
  return numberOfPanels * pricePerPanel + installationCost;
}

/**
 * Calculate cost per watt
 * @param totalCost Total installation cost in EUR
 * @param wattPerPanel Watts per panel
 * @param numberOfPanels Number of panels
 * @returns Cost per watt in EUR
 */
export function berekenKostenPerWatt(
  totalCost: number,
  wattPerPanel: number,
  numberOfPanels: number
): number {
  const totalWatts = numberOfPanels * wattPerPanel;
  return totalCost / totalWatts;
}

/**
 * Calculate ROI (Return on Investment)
 * @param investmentEur Total investment in EUR
 * @param annualSavingsEur Annual savings in EUR
 * @param years Number of years to calculate
 * @returns ROI percentage
 */
export function berekenROI(
  investmentEur: number,
  annualSavingsEur: number,
  years: number
): number {
  const totalReturn = annualSavingsEur * years;
  const roi = ((totalReturn - investmentEur) / investmentEur) * 100;
  return Math.round(roi * 10) / 10;
}

/**
 * Calculate energy coverage percentage
 * @param annualGeneration Annual generation in kWh
 * @param annualConsumption Annual consumption in kWh
 * @returns Coverage percentage (0-100+)
 */
export function berekenEnergieDekking(
  annualGeneration: number,
  annualConsumption: number
): number {
  if (annualConsumption === 0) return 0;
  return (annualGeneration / annualConsumption) * 100;
}

/**
 * Calculate 25-year savings (typical panel lifespan)
 * @param annualSavings Annual savings in EUR
 * @param degradationPerYear Annual degradation percentage (default: 0.5%)
 * @returns Total 25-year savings in EUR
 */
export function berekenLangetermijnBesparing(
  annualSavings: number,
  degradationPerYear: number = 0.005
): number {
  let totalSavings = 0;
  let yearlyAmount = annualSavings;

  for (let year = 1; year <= 25; year++) {
    totalSavings += yearlyAmount;
    // Apply degradation for next year
    yearlyAmount *= 1 - degradationPerYear;
  }

  return Math.round(totalSavings);
}

/**
 * Calculate net benefit (savings minus investment)
 * @param investment Total investment in EUR
 * @param longTermSavings 25-year total savings in EUR
 * @returns Net benefit in EUR
 */
export function berekenNettoVoordeel(
  investment: number,
  longTermSavings: number
): number {
  return longTermSavings - investment;
}
