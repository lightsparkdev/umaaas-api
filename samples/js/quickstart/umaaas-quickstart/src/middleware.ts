import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const forwardDomain = process.env.UMAAS_FORWARD_DOMAIN;
  console.log("middleware");
  
  // Only log requests to well-known paths that will be rewritten
  if (url.pathname.startsWith('/.well-known/')) {
    const timestamp = new Date().toISOString();
    const originalUrl = `${url.pathname}${url.search}`;
    
    // Calculate the destination URL based on rewrite rules
    let destination = '';
    if (url.pathname.startsWith('/.well-known/lnurlp/')) {
      destination = `${forwardDomain}${originalUrl}`;
    } else if (url.pathname === '/.well-known/lnurlpubkey') {
      destination = `${forwardDomain}${originalUrl}`;
    } else if (url.pathname === '/.well-known/uma-configuration') {
      destination = `${forwardDomain}${originalUrl}`;
    } else {
      destination = `${forwardDomain}${originalUrl}`;
    }
    
    console.log(`🔄 [${timestamp}] REWRITE: ${originalUrl} → ${destination}`);
    
    // Log additional request details for debugging
    console.log(`   📍 Method: ${request.method}`);
    console.log(`   🌐 User-Agent: ${request.headers.get('user-agent') || 'N/A'}`);
    console.log(`   📡 Referer: ${request.headers.get('referer') || 'N/A'}`);
    
    // Log query parameters if present
    if (url.search) {
      const params = Object.fromEntries(url.searchParams.entries());
      console.log(`   🔍 Query Params:`, params);
    }
    
    // Log any relevant headers
    const relevantHeaders = ['accept', 'content-type', 'authorization'];
    relevantHeaders.forEach(headerName => {
      const headerValue = request.headers.get(headerName);
      if (headerValue) {
        console.log(`   📋 ${headerName}: ${headerValue}`);
      }
    });
    
    console.log(''); // Empty line for readability
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/.well-known/:path*',
  ],
};
