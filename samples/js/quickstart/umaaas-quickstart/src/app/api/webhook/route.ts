import { NextRequest, NextResponse } from 'next/server';
import { createPublicKey, createVerify } from 'crypto';
import { webhookEventQueue } from '@/lib/webhook-events';

interface BaseWebhookEvent {
  id: string;
  type: string;
  created: number;
  data: unknown;
}

interface TransactionWebhookEvent extends BaseWebhookEvent {
  type: 'transaction.created' | 'transaction.updated' | 'transaction.completed' | 'transaction.failed';
  data: {
    id: string;
    status: string;
    type: 'INCOMING' | 'OUTGOING';
    userId: string;
    platformUserId: string;
    senderUmaAddress: string;
    receiverUmaAddress: string;
    createdAt: string;
    settledAt?: string;
    description?: string;
  };
}

interface QuoteWebhookEvent extends BaseWebhookEvent {
  type: 'quote.created' | 'quote.expired' | 'quote.completed';
  data: {
    quoteId: string;
    status: string;
    expiresAt: string;
    totalSendingAmount: number;
    totalReceivingAmount: number;
    exchangeRate: number;
    transactionId?: string;
  };
}

interface PaymentWebhookEvent extends BaseWebhookEvent {
  type: 'payment.initiated' | 'payment.received' | 'payment.settled';
  data: {
    paymentId: string;
    status: string;
    amount: number;
    currency: string;
    userId: string;
    umaAddress: string;
  };
}

type WebhookEvent = TransactionWebhookEvent | QuoteWebhookEvent | PaymentWebhookEvent | BaseWebhookEvent;

interface SignatureHeader {
  v: number;
  s: string;
}

function verifyWebhookSignature(body: string, signatureHeader: string, publicKey: string): boolean {
  try {
    // Parse the signature header JSON
    const sigHeader: SignatureHeader = JSON.parse(signatureHeader);
    
    // Check version
    const VERSION = 1; // Adjust this to match your expected version
    if (sigHeader.v !== VERSION) {
      console.error(`Invalid signature version: ${sigHeader.v}, expected: ${VERSION}`);
      return false;
    }
    
    const derBuf = Buffer.from(publicKey, 'hex');           // <Buffer 30 59 … 94>

    const pubKeyObj = createPublicKey({
      key: derBuf,
      format: 'der',            // because we have raw ASN.1 bytes
      type: 'spki',             // SubjectPublicKeyInfo wrapper
    });

    // Decode the base64 signature
    const signature = Buffer.from(sigHeader.s, 'base64');

    // const hash = createHash('sha256').update(body).digest();

    // Create verifier and verify signature
    const verifier = createVerify('SHA256');
    verifier.update(body);
    
    return verifier.verify(pubKeyObj, signature);
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    return false;
  }
}

function parseWebhookEvent(rawPayload: any): WebhookEvent {
  const { type } = rawPayload;
  
  // Parse based on webhook type
  if (type?.startsWith('transaction.')) {
    return rawPayload as TransactionWebhookEvent;
  } else if (type?.startsWith('quote.')) {
    return rawPayload as QuoteWebhookEvent;
  } else if (type?.startsWith('payment.')) {
    return rawPayload as PaymentWebhookEvent;
  }
  
  // Fallback to base webhook event
  return rawPayload as BaseWebhookEvent;
}

export async function POST(request: NextRequest): Promise<NextResponse<{ received: boolean } | { error: string }>> {
  try {
    // Get the raw body as text for signature verification
    const rawBody = await request.text();
    
    // Verify webhook signature if public key is configured
    const signatureHeader = request.headers.get('X-UMAaas-Signature');
    const webhookPublicKey = process.env.UAAS_TEST_WEBHOOK_SIGNATURE;
    
    if (webhookPublicKey && signatureHeader) {
      const isValid = verifyWebhookSignature(
        rawBody,
        signatureHeader, 
        webhookPublicKey
      );
      if (!isValid) {
        console.error('Invalid webhook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }
    
    // Parse the webhook payload
    const rawPayload = JSON.parse(rawBody);
    const webhookEvent = parseWebhookEvent(rawPayload);
    
    console.log('Received webhook:', {
      id: webhookEvent.id,
      type: webhookEvent.type,
      created: webhookEvent.created,
    });

    // Add to event queue for SSE broadcasting
    webhookEventQueue.addEvent({
      ...webhookEvent,
      receivedAt: Date.now(),
    });
    
    // Handle different webhook types
    switch (webhookEvent.type) {
      case 'transaction.created':
      case 'transaction.updated':
      case 'transaction.completed':
      case 'transaction.failed':
        const transactionEvent = webhookEvent as TransactionWebhookEvent;
        console.log('Transaction webhook:', {
          transactionId: transactionEvent.data.id,
          status: transactionEvent.data.status,
          type: transactionEvent.data.type,
          userId: transactionEvent.data.userId,
        });
        break;
        
      case 'quote.created':
      case 'quote.expired':
      case 'quote.completed':
        const quoteEvent = webhookEvent as QuoteWebhookEvent;
        console.log('Quote webhook:', {
          quoteId: quoteEvent.data.quoteId,
          status: quoteEvent.data.status,
          transactionId: quoteEvent.data.transactionId,
        });
        break;
        
      case 'payment.initiated':
      case 'payment.received':
      case 'payment.settled':
        const paymentEvent = webhookEvent as PaymentWebhookEvent;
        console.log('Payment webhook:', {
          paymentId: paymentEvent.data.paymentId,
          status: paymentEvent.data.status,
          amount: paymentEvent.data.amount,
          currency: paymentEvent.data.currency,
        });
        break;
        
      default:
        console.log('Unknown webhook type:', webhookEvent.type);
        console.log('Webhook data:', webhookEvent.data);
    }
    
    // Return success response
    return NextResponse.json({ received: true });
    
  } catch (error) {
    console.error('Error processing webhook:', error);
    
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