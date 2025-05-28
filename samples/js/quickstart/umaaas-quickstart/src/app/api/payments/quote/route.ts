import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';
import type { QuoteCreateParams, Quote } from 'uaas-test/resources/quotes';

export async function POST(request: NextRequest): Promise<NextResponse<Quote | { error: string }>> {
  try {
    const quoteParams: QuoteCreateParams = await request.json();

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