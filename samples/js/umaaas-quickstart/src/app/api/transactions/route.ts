import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';
import type { TransactionListResponse, TransactionListParams } from 'uaas-test/resources/transactions';

export async function GET(request: NextRequest): Promise<NextResponse<TransactionListResponse | { error: string }>> {
  try {
    const { searchParams } = new URL(request.url);
    
    // Build query parameters from search params
    const queryParams: TransactionListParams = {};
    
    if (searchParams.get('cursor')) queryParams.cursor = searchParams.get('cursor')!;
    if (searchParams.get('limit')) queryParams.limit = parseInt(searchParams.get('limit')!);
    if (searchParams.get('userId')) queryParams.userId = searchParams.get('userId')!;
    if (searchParams.get('platformUserId')) queryParams.platformUserId = searchParams.get('platformUserId')!;
    if (searchParams.get('umaAddress')) queryParams.umaAddress = searchParams.get('umaAddress')!;
    if (searchParams.get('senderUmaAddress')) queryParams.senderUmaAddress = searchParams.get('senderUmaAddress')!;
    if (searchParams.get('receiverUmaAddress')) queryParams.receiverUmaAddress = searchParams.get('receiverUmaAddress')!;
    if (searchParams.get('startDate')) queryParams.startDate = searchParams.get('startDate')!;
    if (searchParams.get('endDate')) queryParams.endDate = searchParams.get('endDate')!;
    if (searchParams.get('status')) queryParams.status = searchParams.get('status')! as any;
    if (searchParams.get('type')) queryParams.type = searchParams.get('type')! as any;
    if (searchParams.get('sortOrder')) queryParams.sortOrder = searchParams.get('sortOrder')! as 'asc' | 'desc';

    const transactions = await uaasClient.transactions.list(queryParams);
    console.log('UaaS Client Response [transactions.list]:', JSON.stringify(transactions, null, 2));
    
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    
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
