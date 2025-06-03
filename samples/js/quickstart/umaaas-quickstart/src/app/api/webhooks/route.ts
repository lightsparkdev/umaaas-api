import { NextRequest, NextResponse } from 'next/server';
import { createPublicKey, createVerify } from 'crypto';
import { webhookEventQueue } from '@/lib/webhook-events';
import type {
  IncomingTransaction,
  OutgoingTransaction,
} from 'uaas-test/resources/transactions';
import type { UmaInvitation } from 'uaas-test/resources/invitations';

// WebhookType enum from OpenAPI schema
enum WebhookType {
  INCOMING_PAYMENT = 'INCOMING_PAYMENT',
  OUTGOING_PAYMENT = 'OUTGOING_PAYMENT',
  TEST = 'TEST',
  BULK_UPLOAD = 'BULK_UPLOAD',
  INVITATION_CLAIMED = 'INVITATION_CLAIMED'
}

// Base webhook interface
interface BaseWebhookEvent {
  timestamp: string;
  webhookId: string;
  type: WebhookType;
}

// Incoming payment webhook
interface IncomingPaymentWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.INCOMING_PAYMENT;
  transaction: IncomingTransaction;
  requestedReceiverUserInfoFields?: string[];
}

// Outgoing payment webhook
interface OutgoingPaymentWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.OUTGOING_PAYMENT;
  transaction: OutgoingTransaction;
}

// Test webhook
interface TestWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.TEST;
}

// Bulk upload webhook
interface BulkUploadWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.BULK_UPLOAD;
  jobId: string;
  status: 'SUCCESS' | 'PARTIAL_SUCCESS' | 'FAILED';
  progress: {
    total: number;
    processed: number;
    successful: number;
    failed: number;
  };
  errors?: Array<{
    correlationId: string;
    error: {
      code: string;
      message: string;
      details?: unknown;
    };
  }>;
}

// Invitation claimed webhook
interface InvitationClaimedWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.INVITATION_CLAIMED;
  invitation: UmaInvitation;
}

// Union type for all webhook events
type WebhookEvent = 
  | IncomingPaymentWebhookEvent 
  | OutgoingPaymentWebhookEvent 
  | TestWebhookEvent 
  | BulkUploadWebhookEvent 
  | InvitationClaimedWebhookEvent;

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
    
    const derBuf = Buffer.from(publicKey, 'hex');

    const pubKeyObj = createPublicKey({
      key: derBuf,
      format: 'der',
      type: 'spki',
    });

    // Decode the base64 signature
    const signature = Buffer.from(sigHeader.s, 'base64');

    // Create verifier and verify signature
    const verifier = createVerify('SHA256');
    verifier.update(body);
    
    return verifier.verify(pubKeyObj, signature);
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    return false;
  }
}

function parseWebhookEvent(rawPayload: unknown): WebhookEvent {
  const payload = rawPayload as { type: string };
  const { type } = payload;
  
  // Parse based on webhook type from OpenAPI schema
  switch (type) {
    case WebhookType.INCOMING_PAYMENT:
      return rawPayload as IncomingPaymentWebhookEvent;
    case WebhookType.OUTGOING_PAYMENT:
      return rawPayload as OutgoingPaymentWebhookEvent;
    case WebhookType.TEST:
      return rawPayload as TestWebhookEvent;
    case WebhookType.BULK_UPLOAD:
      return rawPayload as BulkUploadWebhookEvent;
    case WebhookType.INVITATION_CLAIMED:
      return rawPayload as InvitationClaimedWebhookEvent;
    default:
      throw new Error(`Unknown webhook type: ${type}`);
  }
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
    
    console.log('Received webhook:', JSON.stringify(webhookEvent, null, 2));

    // Add to event queue for SSE broadcasting (transform to expected format)
    webhookEventQueue.addEvent({
      id: webhookEvent.webhookId,
      type: webhookEvent.type,
      created: new Date(webhookEvent.timestamp).getTime(),
      data: webhookEvent,
      receivedAt: Date.now(),
    });
    
    // Handle different webhook types according to OpenAPI schema
    switch (webhookEvent.type) {
      case WebhookType.INCOMING_PAYMENT:
        const incomingEvent = webhookEvent as IncomingPaymentWebhookEvent;
        console.log('Incoming payment webhook:', {
          transactionId: incomingEvent.transaction.id,
          status: incomingEvent.transaction.status,
          userId: incomingEvent.transaction.userId,
          platformUserId: incomingEvent.transaction.platformUserId,
          senderUmaAddress: incomingEvent.transaction.senderUmaAddress,
          receiverUmaAddress: incomingEvent.transaction.receiverUmaAddress,
          receivedAmount: incomingEvent.transaction.receivedAmount,
          requestedReceiverUserInfoFields: incomingEvent.requestedReceiverUserInfoFields,
        });
        
        // For PENDING transactions, this serves as an approval mechanism
        if (incomingEvent.transaction.status === 'PENDING') {
          // Here you would implement your approval logic
          // For now, we'll auto-approve all payments
          console.log('Auto-approving pending payment');
          
          // You could return 403 to reject:
          // return NextResponse.json({ error: 'Payment rejected' }, { status: 403 });
          
          // Or 422 to request more info:
          // return NextResponse.json({ 
          //   error: 'Additional info required',
          //   details: { requiredFields: ['TAX_ID'] }
          // }, { status: 422 });
        }
        break;
        
      case WebhookType.OUTGOING_PAYMENT:
        const outgoingEvent = webhookEvent as OutgoingPaymentWebhookEvent;
        console.log('Outgoing payment webhook:', {
          transactionId: outgoingEvent.transaction.id,
          status: outgoingEvent.transaction.status,
          userId: outgoingEvent.transaction.userId,
          platformUserId: outgoingEvent.transaction.platformUserId,
          senderUmaAddress: outgoingEvent.transaction.senderUmaAddress,
          receiverUmaAddress: outgoingEvent.transaction.receiverUmaAddress,
          sentAmount: outgoingEvent.transaction.sentAmount,
          receivedAmount: outgoingEvent.transaction.receivedAmount,
          quoteId: outgoingEvent.transaction.quoteId,
        });
        break;
        
      case WebhookType.TEST:
        const testEvent = webhookEvent as TestWebhookEvent;
        console.log('Test webhook received:', {
          webhookId: testEvent.webhookId,
          timestamp: testEvent.timestamp,
        });
        break;
        
      case WebhookType.BULK_UPLOAD:
        const bulkEvent = webhookEvent as BulkUploadWebhookEvent;
        console.log('Bulk upload webhook:', {
          jobId: bulkEvent.jobId,
          status: bulkEvent.status,
          progress: bulkEvent.progress,
          errorCount: bulkEvent.errors?.length || 0,
        });
        break;
        
      case WebhookType.INVITATION_CLAIMED:
        const invitationEvent = webhookEvent as InvitationClaimedWebhookEvent;
        console.log('Invitation claimed webhook:', {
          invitationCode: invitationEvent.invitation.code,
          inviterUma: invitationEvent.invitation.inviterUma,
          inviteeUma: invitationEvent.invitation.inviteeUma,
          claimedAt: invitationEvent.invitation.claimedAt,
          amountToSend: invitationEvent.invitation.amountToSend,
        });
        
        // If there's an amount to send, you would typically initiate a payment here
        if (invitationEvent.invitation.amountToSend) {
          console.log('Invitation includes amount to send - should initiate payment');
          // Implement payment initiation logic here
        }
        break;
        
      default:
        console.log('Unknown webhook type:', (webhookEvent as { type: string }).type);
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
