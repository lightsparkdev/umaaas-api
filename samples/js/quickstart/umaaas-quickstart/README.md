# UMA As A Service Quickstart

This is a Next.js TypeScript quickstart project demonstrating how to integrate with the UMaaS API using the `uaas-test` SDK.

## What This Quickstart Demonstrates

This application showcases the complete UMaaS functionality with a comprehensive end-to-end payment flow:

1. **User Management**
   - Create new users with generated personal information and bank account details
   - List and view existing users in a table format

2. **UMA Address Lookup**
   - Look up UMA addresses to retrieve receiver information
   - Test with sample addresses like `$php@test.uma.me`
   - View detailed lookup responses including supported currencies and requirements

3. **Payment Quote Creation**
   - Create payment quotes with locked exchange rates
   - Support for both sender-locked and receiver-locked amounts
   - View detailed quote information including payment instructions

4. **Sandbox Payment Testing**
   - **Send Payments**: Simulate sending funds using payment instructions from quotes
   - **Receive Payments**: Simulate receiving payments to test incoming payment flows
   - Test the complete payment lifecycle without real money transfers

5. **Transaction Management**
   - View all transactions in a comprehensive table
   - Track payment status and details
   - Filter and search through transaction history

6. **Real-time Webhook Monitoring**
   - Live display of incoming webhooks
   - Real-time connection status indicator
   - View webhook payloads and types (INCOMING_PAYMENT, OUTGOING_PAYMENT, etc.)

## Environment Setup

1. Configure the following environment variables in `.env`:
   ```
CLIENT_ID=your_api_token_id
CLIENT_SECRET=your_api_client_secret
WEBHOOK_PUBLIC_KEY=your_webhook_public_key
UMAAS_FORWARD_DOMAIN=your_umaaas_domain
NEXT_PUBLIC_UAAS_UMA_DOMAIN=your_uma_domain
NEXT_PUBLIC_CURRENCY=USD
   ```

## Getting Started

1. You'll need an externally accessible domain to be able to receive UMA requests.  You can use a proxy like [ngrok](https://ngrok.com/downloads/mac-os)
2. After installing run and point to the port we'll run the backend on 3000 with `ngrok http 3000` 
3. Set the `NEXT_PUBLIC_UAAS_UMA_DOMAIN` to your external domain like `1a76-23-119-122-20.ngrok-free.app`
4. If necessary you'll need submit a [config patch](https://lightsparkdev.github.io/umaaas-api/api#tag/Platform-Configuration/operation/getPlatformConfig) request to update your UMA domain and webhook endpoint to use your external domain
   ```
{
   "umaDomain": "1a76-23-119-122-20.ngrok-free.app",
   "webhookEndpoint": "https://1a76-23-119-122-20.ngrok-free.app/api/webhooks"
}
   ```
5. Install dependencies:
   ```bash
   npm install
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Request Proxying

This application automatically proxies UMA requests to the configured `UMAAS_FORWARD_DOMAIN`:

- `/.well-known/lnurlp/*` → `UMAAS_FORWARD_DOMAIN/.well-known/lnurlp/*`
- `/.well-known/lnurlpubkey` → `UMAAS_FORWARD_DOMAIN/.well-known/lnurlpubkey`
- `/.well-known/uma-configuration` → `UMAAS_FORWARD_DOMAIN/.well-known/uma-configuration`

This allows your application to act as a proxy for UMA protocol requests, forwarding them to the appropriate UMaaS backend service. The proxying is configured in `next.config.ts` using Next.js rewrites.

## Request Logs
The backend console logs display all received webhooks and outbound API requests.  API responses are then displayed in the frontend.

## Project Structure

### Frontend Components
- `src/app/page.tsx` - Main UI orchestrating all components
- `src/components/forms/UserCreationForm.tsx` - User creation with fake data generation
- `src/components/forms/UmaLookup.tsx` - UMA address lookup functionality
- `src/components/forms/PaymentInitiation.tsx` - Payment quote creation
- `src/components/forms/SandboxPayments.tsx` - Sandbox payment simulation
- `src/components/tables/TransactionsTable.tsx` - Transaction history display
- `src/components/tables/UsersTable.tsx` - User management table
- `src/components/tables/WebhooksDisplay.tsx` - Real-time webhook monitoring

### API Routes
- `src/app/api/users/route.ts` - User creation and listing endpoints
- `src/app/api/payments/lookup/route.ts` - UMA address lookup endpoint
- `src/app/api/payments/quote/route.ts` - Payment quote creation endpoint
- `src/app/api/sandbox/send/route.ts` - Sandbox payment sending simulation
- `src/app/api/sandbox/receive/route.ts` - Sandbox payment receiving simulation
- `src/app/api/webhooks/route.ts` - Webhook handling endpoint
- `src/app/api/webhooks/events/route.ts` - Webhook event streaming

### Utilities and Hooks
- `src/lib/uaas-client.ts` - Shared UMaaS client configuration
- `src/lib/webhook-utils.ts` - Webhook signature verification utilities
- `src/hooks/useWebhookEvents.ts` - Real-time webhook event management
- `src/hooks/useFormData.ts` - Form data management and fake data generation

### Types
- `src/types/user.types.ts` - User-related type definitions
- `src/types/payment.types.ts` - Payment and transaction type definitions
- `src/types/webhook.types.ts` - Webhook event type definitions
