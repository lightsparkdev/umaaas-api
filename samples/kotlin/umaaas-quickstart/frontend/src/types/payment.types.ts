export interface Transaction {
  id: string;
  type: 'INCOMING' | 'OUTGOING';
  status: string;
  senderUmaAddress: string;
  receiverUmaAddress: string;
  createdAt?: string;
  settledAt?: string;
  sentAmount?: { amount: number; currency: { code: string } };
  receivedAmount?: { amount: number; currency: { code: string } };
  exchangeRate?: number;
  fees?: number;
}

export interface ApiResponse {
  status: number | string;
  data: unknown;
}

export interface LookupResponse {
  lookupId: string;
  supportedCurrencies?: Array<{
    currency: { code: string };
    estimatedExchangeRate: number;
  }>;
  requiredPayerDataFields?: Array<{ name: string; mandatory: boolean }>;
}

export interface QuoteResponse {
  totalSendingAmount: number;
  sendingCurrency: { code: string };
  paymentInstructions: { reference: string };
}

export interface WebhookEventData {
  id: string;
  type: string;
  data: unknown;
  receivedAt: string;
}