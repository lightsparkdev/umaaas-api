'use client';

import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { convertToSmallestUnit } from '@/lib/currency-utils';
import type { WebhookEventData } from '@/lib/webhook-events';

interface FormData {
  platformUserId: string;
  umaAddress: string;
  userType: 'INDIVIDUAL';
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  bankAccountInfo: {
    accountType: 'US_ACCOUNT';
    accountNumber: string;
    routingNumber: string;
    accountCategory: 'CHECKING' | 'SAVINGS';
    bankName: string;
    platformAccountId: string;
  };
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    platformUserId: '',
    umaAddress: '',
    userType: 'INDIVIDUAL',
    fullName: '',
    dateOfBirth: '',
    nationality: 'US',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
    },
    bankAccountInfo: {
      accountType: 'US_ACCOUNT',
      accountNumber: '',
      routingNumber: '',
      accountCategory: 'CHECKING',
      bankName: '',
      platformAccountId: '',
    },
  });

  // Generate initial faker data on client side only
  useEffect(() => {
    const generateInitialData = () => {
      const domain = process.env.NEXT_PUBLIC_UAAS_UMA_DOMAIN || window.location.hostname;
      return {
        platformUserId: faker.string.uuid(),
        umaAddress: `$${faker.internet.username().toLowerCase()}@${domain}`,
        userType: 'INDIVIDUAL' as const,
        fullName: faker.person.fullName(),
        dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0],
        nationality: 'US',
        address: {
          line1: faker.location.streetAddress(),
          line2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state({ abbreviated: true }),
          postalCode: faker.location.zipCode(),
          country: 'US',
        },
        bankAccountInfo: {
          accountType: 'US_ACCOUNT' as const,
          accountNumber: faker.finance.accountNumber(11),
          routingNumber: faker.finance.routingNumber(),
          accountCategory: faker.helpers.arrayElement(['CHECKING', 'SAVINGS']) as 'CHECKING' | 'SAVINGS',
          bankName: faker.company.name() + ' Bank',
          platformAccountId: faker.string.uuid(),
        },
      };
    };

    setFormData(generateInitialData());
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{ status: number | string; data: unknown } | null>(null);
  
  const [users, setUsers] = useState<Array<{
    id?: string;
    umaAddress?: string;
    fullName?: string;
    email?: string; // Changed to lowercase for state
    platformUserId?: string;
    createdAt?: string;
  }>>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [currUser, setCurrUser] = useState<{
    id?: string;
    umaAddress?: string;
    fullName?: string;
    email?: string; // Changed to lowercase for state
    platformUserId?: string;
    createdAt?: string;
  } | null>(null);

  const [lookupAddress, setLookupAddress] = useState('$php@test.uma.me');
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupResponse, setLookupResponse] = useState<{ status: number | string; data: unknown } | null>(null);

  const [usdAmount, setUsdAmount] = useState('');
  const [receivingAmount, setReceivingAmount] = useState('');
  const [receivingCurrency, setReceivingCurrency] = useState('');
  const [isUpdatingAmounts, setIsUpdatingAmounts] = useState(false);
  const [lastEditedField, setLastEditedField] = useState<'usd' | 'receiving'>('usd');
  const [isCreatingQuote, setIsCreatingQuote] = useState(false);
  const [quoteResponse, setQuoteResponse] = useState<{ status: number | string; data: unknown } | null>(null);

  const [isSendingPayment, setIsSendingPayment] = useState(false);
  const [sendPaymentResponse, setSendPaymentResponse] = useState<{ status: number | string; data: unknown } | null>(null);

  const [isReceivingSandboxPayment, setIsReceivingSandboxPayment] = useState(false);
  const [receiveSandboxPaymentResponse, setReceiveSandboxPaymentResponse] = useState<{ status: number | string; data: unknown } | null>(null);

  const [webhookEvents, setWebhookEvents] = useState<WebhookEventData[]>([]);
  const [isConnectedToWebhooks, setIsConnectedToWebhooks] = useState(false);

  const [transactions, setTransactions] = useState<Array<{
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
  }>>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  // Set up Server-Sent Events connection for webhooks
  useEffect(() => {
    const eventSource = new EventSource('/api/webhooks/events');
    
    eventSource.onopen = () => {
      console.log('Connected to webhook events');
      setIsConnectedToWebhooks(true);
    };
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'connected' || data.type === 'heartbeat') {
          return; // Ignore connection and heartbeat messages
        }
        
        // Add new webhook event to the beginning of the array
        setWebhookEvents(prev => [data, ...prev.slice(0, 9)]); // Keep only latest 10
      } catch (error) {
        console.error('Error parsing webhook event:', error);
      }
    };
    
    eventSource.onerror = (error) => {
      console.error('SSE connection error:', error);
      setIsConnectedToWebhooks(false);
    };
    
    return () => {
      eventSource.close();
      setIsConnectedToWebhooks(false);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const keys = field.split('.');
      if (keys.length === 1) {
        return { ...prev, [field]: value };
      } else if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: {
            ...(prev[keys[0] as keyof FormData] as Record<string, string>),
            [keys[1]]: value,
          },
        };
      }
      return prev;
    });
  };

  const generateNewData = () => {
    const domain = process.env.NEXT_PUBLIC_UAAS_UMA_DOMAIN || (typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000');
    setFormData({
      platformUserId: faker.string.uuid(),
      umaAddress: `$${faker.internet.username().toLowerCase()}@${domain}`,
      userType: 'INDIVIDUAL',
      fullName: faker.person.fullName(),
      dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0],
      nationality: 'US',
      address: {
        line1: faker.location.streetAddress(),
        line2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        postalCode: faker.location.zipCode(),
        country: 'US',
      },
      bankAccountInfo: {
        accountType: 'US_ACCOUNT',
        accountNumber: faker.finance.accountNumber(11),
        routingNumber: faker.finance.routingNumber(),
        accountCategory: faker.helpers.arrayElement(['CHECKING', 'SAVINGS']),
        bankName: faker.company.name() + ' Bank',
        platformAccountId: faker.string.uuid(),
      },
    });
    setResponse(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse({ status: res.status, data });
      
      // If user creation was successful, add to users list
      if (res.status === 201 && data && data.umaAddress) {
        const derivedEmail = data.umaAddress.startsWith('$') ? data.umaAddress.substring(1) : data.umaAddress;
        const userWithEmail = { ...data, email: derivedEmail }; // Use lowercase 'email' here
        setCurrUser(userWithEmail);
        setUsers(prevUsers => [userWithEmail, ...prevUsers]);
      }
    } catch {
      setResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
      if (res.ok) {
        setUsers(data.data || []);
      } else {
        console.error('Error fetching users:', data);
        setUsers([]);
      }
    } catch (error) {
      console.error('Network error fetching users:', error);
      setUsers([]);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const fetchTransactions = async () => {
    setIsLoadingTransactions(true);
    try {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      if (res.ok) {
        setTransactions(data.data || []);
      } else {
        console.error('Error fetching transactions:', data);
        setTransactions([]);
      }
    } catch (error) {
      console.error('Network error fetching transactions:', error);
      setTransactions([]);
    } finally {
      setIsLoadingTransactions(false);
    }
  };

  const handleLookup = async () => {
    if (!lookupAddress) return;
    
    setIsLookingUp(true);
    setLookupResponse(null);

    try {
      const searchParams = new URLSearchParams({
        receiverUmaAddress: lookupAddress,
        userId: currUser?.id || 'test-user-id'
      });
      
      const res = await fetch(`/api/payments/lookup?${searchParams}`);
      const data = await res.json();
      setLookupResponse({ status: res.status, data });
      
      if (res.status === 200 && data.supportedCurrencies?.length > 0) {
        setReceivingCurrency(data.supportedCurrencies[0].currency.code);
      }
    } catch {
      setLookupResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsLookingUp(false);
    }
  };

  const updateAmounts = (amount: string, field: 'usd' | 'receiving') => {
    if (!amount || !receivingCurrency || isUpdatingAmounts) return;
    
    // Check if we have a lookup response with supported currencies
    const lookupData = lookupResponse?.data as { 
      supportedCurrencies?: Array<{ 
        currency: { code: string };
        estimatedExchangeRate: number;
      }> 
    };
    
    const supportedCurrency = lookupData?.supportedCurrencies?.[0];
    if (!supportedCurrency?.estimatedExchangeRate) return;
    
    setIsUpdatingAmounts(true);
    setLastEditedField(field);
    
    try {
      if (field === 'usd') {
        // User updated sending amount: receiving = exchangeRate * sending
        const convertedAmount = (supportedCurrency.estimatedExchangeRate) * parseFloat(amount);
        setReceivingAmount(convertedAmount.toFixed(6));
      } else {
        // User updated receiving amount: sending = receiving / exchangeRate
        const convertedAmount = parseFloat(amount) / (supportedCurrency.estimatedExchangeRate);
        setUsdAmount(convertedAmount.toFixed(6));
      }
    } catch (error) {
      console.error('Error updating amounts:', error);
    } finally {
      setIsUpdatingAmounts(false);
    }
  };

  const handleCreateQuote = async () => {
    if (!usdAmount && !receivingAmount || !lookupResponse?.data) return;
    
    setIsCreatingQuote(true);
    setQuoteResponse(null);

    try {
      const lookupData = lookupResponse.data as { 
        lookupId: string; 
        requiredPayerDataFields?: Array<{ name: string; mandatory: boolean }>;
      };
      const lockedCurrencySide = lastEditedField === 'receiving' ? 'RECEIVING' : 'SENDING';
      
      // Convert amount to smallest unit based on the locked currency's decimal places
      const lockedCurrency = lastEditedField === 'receiving' ? receivingCurrency : 'USD';
      const amountString = lastEditedField === 'usd' ? usdAmount : receivingAmount;
      const lockedCurrencyAmount = convertToSmallestUnit(amountString, lockedCurrency);
      
      const requestBody = {
        lockedCurrencyAmount,
        lockedCurrencySide,
        lookupId: lookupData.lookupId,
        sendingCurrencyCode: 'USD',
        receivingCurrencyCode: receivingCurrency,
        description: 'quickstart transaction',
        senderUserInfo: {}, // Changed payerData to senderUserInfo
      };

      if (currUser && lookupData.requiredPayerDataFields) {
        const newSenderUserInfo: Record<string, string | undefined> = {};
        lookupData.requiredPayerDataFields.forEach(field => {
          if (field.name === 'EMAIL' && currUser.email) { // Use lowercase currUser.email
            newSenderUserInfo.EMAIL = currUser.email; // Assign to uppercase EMAIL for request
          } else if (field.name === 'FULL_NAME' && currUser.fullName) {
            newSenderUserInfo.FULL_NAME = currUser.fullName;
          }
          // Add other fields here if necessary
        });
        if (Object.keys(newSenderUserInfo).length > 0) {
          requestBody.senderUserInfo = newSenderUserInfo; // Changed payerData to senderUserInfo
        }
      }

      const res = await fetch('/api/payments/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      setQuoteResponse({ status: res.status, data });
    } catch {
      setQuoteResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsCreatingQuote(false);
    }
  };

  const handleSendPayment = async () => {
    if (!quoteResponse?.data) return;
    
    setIsSendingPayment(true);
    setSendPaymentResponse(null);

    try {
      const quoteData = quoteResponse.data as { 
        totalSendingAmount: number;
        sendingCurrency: { code: string };
        paymentInstructions: { reference: string };
      };

      const requestBody = {
        currencyAmount: quoteData.totalSendingAmount,
        currencyCode: quoteData.sendingCurrency.code,
        reference: quoteData.paymentInstructions.reference
      };

      const res = await fetch('/api/sandbox/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      setSendPaymentResponse({ status: res.status, data });
    } catch {
      setSendPaymentResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsSendingPayment(false);
    }
  };

  const handleReceiveSandboxPayment = async () => {
    if (!currUser?.id) {
      setReceiveSandboxPaymentResponse({ status: 'error', data: { error: 'Current user not available.' } });
      return;
    }

    const receivingCurrencyCode = process.env.NEXT_PUBLIC_CURRENCY;
    if (!receivingCurrencyCode) {
      setReceiveSandboxPaymentResponse({ status: 'error', data: { error: 'NEXT_PUBLIC_CURRENCY environment variable is not set.' } });
      return;
    }

    setIsReceivingSandboxPayment(true);
    setReceiveSandboxPaymentResponse(null);

    try {
      const receivingAmountSmallestUnit = convertToSmallestUnit('10', receivingCurrencyCode);

      const requestBody = {
        userId: currUser.id,
        receivingCurrencyAmount: receivingAmountSmallestUnit,
        receivingCurrencyCode: receivingCurrencyCode,
        senderUmaAddress: '$success.usd@sandbox.umaaas.money.dev.dev.sparkinfra.net',
      };

      const res = await fetch('/api/sandbox/receive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      setReceiveSandboxPaymentResponse({ status: res.status, data });
    } catch (error) {
      console.error('Error receiving sandbox payment:', error);
      setReceiveSandboxPaymentResponse({ status: 'error', data: { error: 'Network error or other issue receiving payment.' } });
    } finally {
      setIsReceivingSandboxPayment(false);
    }
  };

  const truncateText = (text: string, maxLength: number = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">UMA as a service quickstart</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add a new user</h2>
            <button
              type="button"
              onClick={generateNewData}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Generate New Data
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platform User ID</label>
                <input
                  type="text"
                  value={formData.platformUserId}
                  onChange={(e) => handleInputChange('platformUserId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UMA Address</label>
                <input
                  type="text"
                  value={formData.umaAddress}
                  onChange={(e) => handleInputChange('umaAddress', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {formData.umaAddress && (
                  <p className="mt-1 text-xs text-gray-500">
                    Email: {formData.umaAddress.startsWith('$') ? formData.umaAddress.substring(1) : formData.umaAddress}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input
                    type="text"
                    value={formData.address.line1}
                    onChange={(e) => handleInputChange('address.line1', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                  <input
                    type="text"
                    value={formData.address.line2}
                    onChange={(e) => handleInputChange('address.line2', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={formData.address.state}
                    onChange={(e) => handleInputChange('address.state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={formData.address.postalCode}
                    onChange={(e) => handleInputChange('address.postalCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={formData.address.country}
                    onChange={(e) => handleInputChange('address.country', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.accountNumber}
                    onChange={(e) => handleInputChange('bankAccountInfo.accountNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.routingNumber}
                    onChange={(e) => handleInputChange('bankAccountInfo.routingNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Category</label>
                  <select
                    value={formData.bankAccountInfo.accountCategory}
                    onChange={(e) => handleInputChange('bankAccountInfo.accountCategory', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="CHECKING">Checking</option>
                    <option value="SAVINGS">Savings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.bankName}
                    onChange={(e) => handleInputChange('bankAccountInfo.bankName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform Account ID</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.platformAccountId}
                    onChange={(e) => handleInputChange('bankAccountInfo.platformAccountId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Creating User...' : 'Create User'}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-6 p-4 rounded-md border">
              <h3 className="text-lg font-medium mb-2">
                Response {response.status === 201 ? '(Success)' : '(Error)'}:
              </h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">UMA Address Lookup</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">UMA Address to Lookup</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={lookupAddress}
                  onChange={(e) => setLookupAddress(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter UMA address..."
                />
                <button
                  onClick={handleLookup}
                  disabled={isLookingUp || !lookupAddress}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLookingUp ? 'Looking up...' : 'Lookup'}
                </button>
              </div>
            </div>

            {lookupResponse && (
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">
                  Lookup Response {lookupResponse.status === 200 ? '(Success)' : '(Error)'}:
                </h3>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                  {JSON.stringify(lookupResponse.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {lookupResponse && lookupResponse.status === 200 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-6">Initiate Payment</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USD)</label>
                  <input
                    type="number"
                    value={usdAmount}
                    onChange={(e) => {
                      setUsdAmount(e.target.value);
                      if (e.target.value) {
                        updateAmounts(e.target.value, 'usd');
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter USD amount..."
                    disabled={isUpdatingAmounts}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount ({receivingCurrency || 'Receiving Currency'})
                  </label>
                  <input
                    type="number"
                    value={receivingAmount}
                    onChange={(e) => {
                      setReceivingAmount(e.target.value);
                      if (e.target.value) {
                        updateAmounts(e.target.value, 'receiving');
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter ${receivingCurrency || 'receiving'} amount...`}
                    disabled={isUpdatingAmounts || !receivingCurrency}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleCreateQuote}
                  disabled={isCreatingQuote || (!usdAmount && !receivingAmount) || !receivingCurrency}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isCreatingQuote ? 'Creating Quote...' : 'Create Payment Quote'}
                </button>
              </div>

              {quoteResponse && (
                <div className="p-4 rounded-md border">
                  <h3 className="text-lg font-medium mb-2">
                    Quote Response {quoteResponse.status === 200 ? '(Success)' : '(Error)'}:
                  </h3>
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                    {JSON.stringify(quoteResponse.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {quoteResponse && quoteResponse.status === 200 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-6">Simulate Sending Sandbox Payment</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Simulate sending the payment to complete the quote. This will use the payment instructions from the quote above.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={handleSendPayment}
                  disabled={isSendingPayment}
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSendingPayment ? 'Sending Payment...' : 'Send Sandbox Payment'}
                </button>
              </div>

              {sendPaymentResponse && (
                <div className="p-4 rounded-md border">
                  <h3 className="text-lg font-medium mb-2">
                    Payment Response {sendPaymentResponse.status === 200 ? '(Success)' : '(Error)'}:
                  </h3>
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                    {JSON.stringify(sendPaymentResponse.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {currUser && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-6">Simulate Receiving Sandbox Payment</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Simulate receiving a payment of $10.00 {process.env.NEXT_PUBLIC_CURRENCY || '[CURRENCY NOT SET]'} from {'$success.usd@'} for the current user.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleReceiveSandboxPayment}
                  disabled={isReceivingSandboxPayment || !currUser?.id || !process.env.NEXT_PUBLIC_CURRENCY}
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isReceivingSandboxPayment 
                    ? 'Receiving Payment...' 
                    : `Receive Sandbox Payment`}
                </button>
              </div>
              {!process.env.NEXT_PUBLIC_CURRENCY && (
                <p className="text-center text-red-500 text-sm">
                  Error: NEXT_PUBLIC_CURRENCY environment variable is not set. This feature is disabled.
                </p>
              )}
              {receiveSandboxPaymentResponse && (
                <div className="p-4 rounded-md border">
                  <h3 className="text-lg font-medium mb-2">
                    Receive Payment Response {receiveSandboxPaymentResponse.status === 200 || receiveSandboxPaymentResponse.status === 201 ? '(Success)' : '(Error)'}:
                  </h3>
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                    {JSON.stringify(receiveSandboxPaymentResponse.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Transactions</h2>
            <button
              onClick={fetchTransactions}
              disabled={isLoadingTransactions}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoadingTransactions ? 'Loading...' : 'Fetch Transactions'}
            </button>
          </div>

          {transactions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">ID</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Type</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Status</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Sender UMA</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Receiver UMA</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Sent Amount</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Received Amount</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Exchange Rate</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Fees</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction.id || index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {truncateText(transaction.id || 'N/A', 15)}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          transaction.type === 'INCOMING' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          transaction.status === 'COMPLETED' 
                            ? 'bg-green-100 text-green-800'
                            : transaction.status === 'PENDING' || transaction.status === 'PROCESSING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : transaction.status === 'FAILED' || transaction.status === 'REJECTED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {truncateText(transaction.senderUmaAddress || 'N/A', 20)}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {truncateText(transaction.receiverUmaAddress || 'N/A', 20)}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {transaction.sentAmount 
                          ? `${(transaction.sentAmount.amount / 100).toFixed(2)} ${transaction.sentAmount.currency.code}`
                          : 'N/A'
                        }
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {transaction.receivedAmount 
                          ? `${(transaction.receivedAmount.amount / 100).toFixed(2)} ${transaction.receivedAmount.currency.code}`
                          : 'N/A'
                        }
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {transaction.exchangeRate ? transaction.exchangeRate.toFixed(4) : 'N/A'}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {transaction.fees && transaction.sentAmount
                          ? `${(transaction.fees / 100).toFixed(2)} ${transaction.sentAmount.currency.code}`
                          : 'N/A'
                        }
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs">
                        {transaction.createdAt ? new Date(transaction.createdAt).toLocaleString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {isLoadingTransactions ? 'Loading transactions...' : 'Click "Fetch Transactions" to load transactions.'}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Users</h2>
            <button
              onClick={fetchUsers}
              disabled={isLoadingUsers}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoadingUsers ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>

          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">UMA Address</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Platform User ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id || index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.id || 'N/A', 20)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.umaAddress || 'N/A', 40)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.fullName || 'N/A', 25)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.platformUserId || 'N/A', 25)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {isLoadingUsers ? 'Loading users...' : 'No users found. Click "Fetch Users" to load users.'}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Latest Webhooks</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isConnectedToWebhooks ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm text-gray-600">
                  {isConnectedToWebhooks ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </div>
          </div>

          {webhookEvents.length > 0 ? (
            <div className="space-y-4">
              {webhookEvents.map((event, index) => (
                <div key={`${event.id}-${index}`} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-medium text-blue-600">{event.type}</span>
                      <span className="ml-2 text-sm text-gray-500">ID: {truncateText(event.id, 20)}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(event.receivedAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <pre className="text-sm overflow-auto max-h-40">
                      {JSON.stringify(event.data, null, 2)}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {isConnectedToWebhooks 
                ? 'No webhooks received yet. Webhooks will appear here in real-time.' 
                : 'Connecting to webhook events...'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
