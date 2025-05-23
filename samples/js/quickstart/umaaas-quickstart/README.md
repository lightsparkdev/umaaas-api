# UMaaS (Universal Message as a Service) Quickstart

This is a Next.js TypeScript quickstart project demonstrating how to integrate with the UMaaS API using the `uaas-test` SDK.

## What This Quickstart Demonstrates

This application showcases the core UMaaS functionality:

1. **User Management**
   - Create new users with personal information and bank account details
   - List and view existing users
   - Generate fake user data for testing

2. **UMA Address Lookup**
   - Look up UMA addresses to retrieve receiver information
   - Test with sample addresses like `$php@test.uma.me`
   - View detailed lookup responses

## Environment Setup

1. Copy the environment variables template:
   ```bash
   cp .env.example .env
   ```

2. Configure the following environment variables in `.env`:
   ```
   CLIENT_ID=your_api_token_id
   CLIENT_SECRET=your_api_client_secret
   NEXT_PUBLIC_UAAS_UMA_DOMAIN=your_uma_domain
   ```

   **Required:**
   - `CLIENT_ID` - Your UMaaS API token ID
   - `CLIENT_SECRET` - Your UMaaS API client secret

   **Optional:**
   - `NEXT_PUBLIC_UAAS_UMA_DOMAIN` - Your UMA domain (defaults to localhost:3000)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Add New Users**: Fill out the form with user details and bank account information, or use the "Generate New Data" button for fake data
- **UMA Address Lookup**: Enter a UMA address (like `$php@test.uma.me`) and click "Lookup" to retrieve receiver information
- **View All Users**: Click "Fetch Users" to see all created users in a table format

## Project Structure

- `src/app/page.tsx` - Main UI with user creation form and UMA lookup
- `src/app/api/user/route.ts` - API endpoints for user creation and listing
- `src/app/api/payments/lookup/route.ts` - API endpoint for UMA address lookup
- `src/lib/uaas-client.ts` - Shared UMaaS client configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
