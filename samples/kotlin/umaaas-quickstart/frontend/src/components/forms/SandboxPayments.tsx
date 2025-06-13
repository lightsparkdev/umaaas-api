'use client';

import { useState } from 'react';
import { User } from '../../types/user.types';
import { ApiResponse, QuoteResponse } from '../../types/payment.types';
import { convertToSmallestUnit } from '../../lib/currency-utils';
import ResponseDisplay from '../shared/ResponseDisplay';
import LoadingButton from '../shared/LoadingButton';

interface SandboxPaymentsProps {
  currUser: User | null;
  quoteResponse: ApiResponse | null;
}

export default function SandboxPayments({ currUser, quoteResponse }: SandboxPaymentsProps) {
  const [isSendingPayment, setIsSendingPayment] = useState(false);
  const [sendPaymentResponse, setSendPaymentResponse] = useState<ApiResponse | null>(null);
  const [isReceivingSandboxPayment, setIsReceivingSandboxPayment] = useState(false);
  const [receiveSandboxPaymentResponse, setReceiveSandboxPaymentResponse] = useState<ApiResponse | null>(null);

  const handleSendPayment = async () => {
    if (!quoteResponse?.data) return;
    
    setIsSendingPayment(true);
    setSendPaymentResponse(null);

    try {
      const quoteData = quoteResponse.data as QuoteResponse;

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

    const receivingCurrencyCode = import.meta.env.VITE_PUBLIC_CURRENCY;
    if (!receivingCurrencyCode) {
      setReceiveSandboxPaymentResponse({ status: 'error', data: { error: 'VITE_PUBLIC_CURRENCY environment variable is not set.' } });
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

  return (
    <>
      {quoteResponse && quoteResponse.status === 200 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Simulate Sending Sandbox Payment</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Simulate sending the payment to complete the quote. This will use the payment instructions from the quote above.
            </p>

            <div className="flex justify-center">
              <LoadingButton
                onClick={handleSendPayment}
                loading={isSendingPayment}
                loadingText="Sending Payment..."
                className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
              >
                Send Sandbox Payment
              </LoadingButton>
            </div>

            <ResponseDisplay 
              response={sendPaymentResponse} 
              title="Payment Response"
            />
          </div>
        </div>
      )}

      {currUser && (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Simulate Receiving Sandbox Payment</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Simulate receiving a payment of $10.00 {import.meta.env.VITE_PUBLIC_CURRENCY || '[CURRENCY NOT SET]'} from {'$success.usd@'} for the current user.
            </p>
            <div className="flex justify-center">
              <LoadingButton
                onClick={handleReceiveSandboxPayment}
                disabled={!currUser?.id || !import.meta.env.VITE_PUBLIC_CURRENCY}
                loading={isReceivingSandboxPayment}
                loadingText="Receiving Payment..."
                className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
              >
                Receive Sandbox Payment
              </LoadingButton>
            </div>
            {!import.meta.env.VITE_PUBLIC_CURRENCY && (
              <p className="text-center text-red-500 text-sm">
                Error: VITE_PUBLIC_CURRENCY environment variable is not set. This feature is disabled.
              </p>
            )}
            <ResponseDisplay 
              response={receiveSandboxPaymentResponse} 
              successStatus={201}
              title="Receive Payment Response"
            />
          </div>
        </div>
      )}
    </>
  );
}
