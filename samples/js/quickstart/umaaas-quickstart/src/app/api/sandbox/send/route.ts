import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';
import type { SandboxSendFundsParams } from 'uaas-test/resources/sandbox';

export async function POST(request: NextRequest): Promise<NextResponse<any | { error: string }>> {
  try {
    const sendFundsParams: SandboxSendFundsParams = await request.json();
    console.log(JSON.stringify(sendFundsParams));
    const response = await uaasClient.sandbox.sendFunds(sendFundsParams);
    console.log(JSON.stringify(sendFundsParams));
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error sending sandbox funds:', error);
    
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