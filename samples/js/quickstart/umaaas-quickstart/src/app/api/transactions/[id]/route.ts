import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';
import type { TransactionRetrieveResponse } from 'uaas-test/resources/transactions';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<TransactionRetrieveResponse | { error: string }>> {
  try {
    const transaction = await uaasClient.transactions.retrieve(params.id);
    
    return NextResponse.json(transaction);
  } catch (error) {
    console.error('Error fetching transaction:', error);
    
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