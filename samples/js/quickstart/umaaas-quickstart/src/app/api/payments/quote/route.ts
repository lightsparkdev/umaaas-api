import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      sendingAmount,
      currencyCode,
      receiverUmaAddress,
      userId,
      isReceiverLocked = false
    } = body;

    if (!sendingAmount || !currencyCode || !receiverUmaAddress) {
      return NextResponse.json(
        { error: 'sendingAmount, currencyCode, and receiverUmaAddress are required' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const quoteParams = {
      lockedCurrencyAmount: sendingAmount,
      lockedCurrencySide: isReceiverLocked ? 'RECEIVING' as const : 'SENDING' as const,
      lookupId: 'temp-lookup-id',
      receivingCurrencyCode: isReceiverLocked ? currencyCode : 'BTC',
      sendingCurrencyCode: isReceiverLocked ? 'USD' : currencyCode,
      receiverUmaAddress: receiverUmaAddress,
      userId: userId,
    };

    const quote = await uaasClient.quotes.create(quoteParams);
    
    return NextResponse.json(quote);
  } catch (error) {
    console.error('Error creating payment quote:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}