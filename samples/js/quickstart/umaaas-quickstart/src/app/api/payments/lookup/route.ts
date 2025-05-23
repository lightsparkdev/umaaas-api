import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const receiverUmaAddress = searchParams.get('receiverUmaAddress');
    const userId = searchParams.get('userId');
    const senderUmaAddress = searchParams.get('senderUmaAddress');

    if (!receiverUmaAddress) {
      return NextResponse.json(
        { error: 'receiverUmaAddress is required' },
        { status: 400 }
      );
    }

    if (!userId && !senderUmaAddress) {
      return NextResponse.json(
        { error: 'Either userId or senderUmaAddress is required' },
        { status: 400 }
      );
    }

    const lookupParams: { userId?: string; senderUmaAddress?: string } = {};
    if (userId) lookupParams.userId = userId;
    if (senderUmaAddress) lookupParams.senderUmaAddress = senderUmaAddress;

    const lookupResult = await uaasClient.receiver.lookup(receiverUmaAddress, lookupParams);
    
    return NextResponse.json(lookupResult);
  } catch (error) {
    console.error('Error looking up receiver UMA address:', error);
    
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