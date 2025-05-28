/**
 * Get the number of decimal places for a given currency code
 */
export const getCurrencyDecimals = (currencyCode: string): number => {
  const currency = currencyCode.toUpperCase();
  
  // Common cryptocurrency decimal places
  const cryptoDecimals: Record<string, number> = {
    'BTC': 8,
    'SAT': 0, // Satoshis (smallest unit of Bitcoin)
    'ETH': 18,
    'USDC': 6,
    'USDT': 6,
    'LTC': 8,
    'BCH': 8,
  };
  
  // Zero-decimal currencies (amounts in smallest unit)
  const zeroDecimalCurrencies = [
    'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA', 'PYG', 'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
  ];
  
  // Three-decimal currencies
  const threeDecimalCurrencies = ['BHD', 'IQD', 'JOD', 'KWD', 'LYD', 'OMR', 'TND'];
  
  if (cryptoDecimals[currency] !== undefined) {
    return cryptoDecimals[currency];
  } else if (zeroDecimalCurrencies.includes(currency)) {
    return 0;
  } else if (threeDecimalCurrencies.includes(currency)) {
    return 3;
  } else {
    // Default to 2 decimal places for most fiat currencies
    return 2;
  }
};

/**
 * Convert a decimal amount to the smallest unit (integer) based on currency decimal places
 */
export const convertToSmallestUnit = (amount: string, currencyCode: string): number => {
  const decimals = getCurrencyDecimals(currencyCode);
  const multiplier = Math.pow(10, decimals);
  return Math.round(parseFloat(amount) * multiplier);
};

/**
 * Convert from smallest unit back to decimal amount
 */
export const convertFromSmallestUnit = (amount: number, currencyCode: string): number => {
  const decimals = getCurrencyDecimals(currencyCode);
  const divisor = Math.pow(10, decimals);
  return amount / divisor;
};

/**
 * Format currency amount with proper decimal places
 */
export const formatCurrencyAmount = (amount: number, currencyCode: string): string => {
  const decimals = getCurrencyDecimals(currencyCode);
  return amount.toFixed(decimals);
};