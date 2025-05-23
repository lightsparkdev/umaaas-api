import { NextRequest, NextResponse } from 'next/server';
import { UaasTest } from 'uaas-test';

const client = new UaasTest({
  username: process.env.CLIENT_ID,
  password: process.env.CLIENT_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const user = await client.users.create(body);
    
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