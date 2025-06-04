import { NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(`Request: ${JSON.stringify(body, null, 2)}`)
    const {
      userId,
      receivingCurrencyAmount,
      receivingCurrencyCode,
      senderUmaAddress,
    } = body;

    if (
      !userId ||
      typeof receivingCurrencyAmount !== 'number' ||
      !receivingCurrencyCode ||
      !senderUmaAddress
    ) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields: userId (string), receivingCurrencyAmount (number), receivingCurrencyCode (string), senderUmaAddress (string)' },
        { status: 400 }
      );
    }

    const paymentResponse = await uaasClient.sandbox.receivePayment({
      userId,
      receivingCurrencyAmount,
      receivingCurrencyCode,
      senderUmaAddress,
    });

    return NextResponse.json(paymentResponse, { status: 200 });
  } catch (error: unknown) {
    console.error('Error in /api/sandbox/receive POST handler:', error);
    // Check if the error has a response object (e.g., from an API client error)
    if (typeof error === 'object' && error !== null && 'response' in error) {
      const err = error as { response?: { data?: { error?: string }, status?: number } };
      if (err.response && err.response.data) {
        return NextResponse.json(
          { error: err.response.data.error || 'An error occurred while processing the payment.', details: err.response.data },
          { status: err.response.status || 500 }
        );
      }
    }
    // Handle other types of errors or provide a generic message
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'An unexpected error occurred.' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
