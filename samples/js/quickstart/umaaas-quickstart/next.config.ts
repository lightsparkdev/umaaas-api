import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/lnurlp/:path*',
        destination: `${process.env.UMAAS_FORWARD_DOMAIN}/.well-known/lnurlp/:path*`,
      },
      {
        source: '/.well-known/lnurlpubkey',
        destination: `${process.env.UMAAS_FORWARD_DOMAIN}/.well-known/lnurlpubkey`,
      },
      {
        source: '/.well-known/uma-configuration',
        destination: `${process.env.UMAAS_FORWARD_DOMAIN}/.well-known/uma-configuration`,
      },
    ];
  },
};

export default nextConfig;
