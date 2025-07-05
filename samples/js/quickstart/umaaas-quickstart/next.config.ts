import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const forwardDomain = process.env.UMAAS_FORWARD_DOMAIN;
    console.log(`🔧 UMAAS_FORWARD_DOMAIN: ${forwardDomain}`);
    
    const rewriteRules = [
      {
        source: '/.well-known/lnurlp/:path*',
        destination: `${forwardDomain}/.well-known/lnurlp/:path*`,
      },
      {
        source: '/.well-known/lnurlpubkey',
        destination: `${forwardDomain}/.well-known/lnurlpubkey`,
      },
      {
        source: '/.well-known/uma-configuration',
        destination: `${forwardDomain}/.well-known/uma-configuration`,
      },
    ];

    console.log('🔄 Next.js Rewrites configured:');
    rewriteRules.forEach((rule, index) => {
      console.log(`  ${index + 1}. ${rule.source} → ${rule.destination}`);
    });

    return rewriteRules;
  },
};

export default nextConfig;
