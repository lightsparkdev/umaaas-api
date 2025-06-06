import { NextRequest, NextResponse } from 'next/server';
import { uaasClient } from '@/lib/uaas-client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const cursor = searchParams.get('cursor') || undefined;
    const userType = (searchParams.get('userType') as 'INDIVIDUAL' | 'BUSINESS') || 'INDIVIDUAL';
    const platformUserId = searchParams.get('platformUserId') || undefined;
    const umaAddress = searchParams.get('umaAddress') || undefined;
    
    const users = await uaasClient.users.list({
      limit,
      cursor,
      userType,
      platformUserId,
      umaAddress,
    });
    console.log('UaaS Client Response [users.list]:', JSON.stringify(users, null, 2));
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error listing users:', error);
    
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const user = await uaasClient.users.create(body);
    console.log('UaaS Client Response [users.create]:', JSON.stringify(user, null, 2));
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    
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
