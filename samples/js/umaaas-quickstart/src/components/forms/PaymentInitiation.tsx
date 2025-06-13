'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types/user.types';
import { ApiResponse, LookupResponse } from '@/types/payment.types';
import { convertToSmallestUnit } from '@/lib/currency-utils';
import ResponseDisplay from '@/components/shared/ResponseDisplay';
import LoadingButton from '@/components/shared/LoadingButton';

interface PaymentInitiationProps {
  currUser: User | null;
  lookupResponse: ApiResponse | null;
  onQuoteSuccess: (response: ApiResponse) => void;
}

export default function PaymentInitiation({ currUser, lookupResponse, onQuoteSuccess }: PaymentInitiationProps) {
  const [usdAmount, setUsdAmount] = useState('');
  const [receivingAmount, setReceivingAmount] = useState('');
  const [receivingCurrency, setReceivingCurrency] = useState('');
  const [isUpdatingAmounts, setIsUpdatingAmounts] = useState(false);
  const [lastEditedField, setLastEditedField] = useState<'usd' | 'receiving'>('usd');
  const [isCreatingQuote, setIsCreatingQuote] = useState(false);
  const [quoteResponse, setQuoteResponse] = useState<ApiResponse | null>(null);

  // Set receiving currency when lookup succeeds
  useEffect(() => {
    if (lookupResponse?.status === 200) {
      const data = lookupResponse.data as LookupResponse;
      if (data.supportedCurrencies && data.supportedCurrencies.length > 0) {
        setReceivingCurrency(data.supportedCurrencies[0].currency.code);
      }
    }
  }, [lookupResponse]);

  const updateAmounts = (amount: string, field: 'usd' | 'receiving') => {
    if (!amount || !receivingCurrency || isUpdatingAmounts) return;
    
    // Check if we have a lookup response with supported currencies
    const lookupData = lookupResponse?.data as LookupResponse;
    
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
      const lookupData = lookupResponse.data as LookupResponse;
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
      const response = { status: res.status, data };
      setQuoteResponse(response);
      
      if (res.status === 200) {
        onQuoteSuccess(response);
      }
    } catch {
      setQuoteResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsCreatingQuote(false);
    }
  };

  if (!lookupResponse || lookupResponse.status !== 200) {
    return null;
  }

  return (
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
          <LoadingButton
            onClick={handleCreateQuote}
            disabled={(!usdAmount && !receivingAmount) || !receivingCurrency}
            loading={isCreatingQuote}
            loadingText="Creating Quote..."
            className="bg-green-600 hover:bg-green-700 focus:ring-green-500"
          >
            Create Payment Quote
          </LoadingButton>
        </div>

        <ResponseDisplay 
          response={quoteResponse} 
          title="Quote Response"
        />
      </div>
    </div>
  );
}
