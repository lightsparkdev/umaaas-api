import { NextRequest, NextResponse } from 'next/server';
import { webhookEventQueue } from '@/lib/webhook-events';
import {
  WebhookType,
  type WebhookUserData,
  verifyWebhookSignature,
  parseWebhookEvent,
  IncomingPaymentWebhookResponse,
} from 'uaas-test/lib/webhook-utils';

const SAMPLE_USER: WebhookUserData = {
  FULL_NAME: "Webhook User",
  DATE_OF_BIRTH: "1980-01-01",
  NATIONALITY: "US",
  EMAIL: "webhook.user@example.com",
  PHONE_NUMBER: "+15105551212",
  ADDRESS: {
    line1: "123 Sample St",
    city: "Sampleville",
    state: "CA",
    postalCode: "90210",
    country: "US",
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<{ received: boolean } | { error: string } | IncomingPaymentWebhookResponse>> {
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

    // Add to event queue to display in frontend
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
        // For PENDING transactions, this serves as an approval mechanism
        if (webhookEvent.transaction.status === 'PENDING') {
          const responseUserData: WebhookUserData = {};
          if (webhookEvent.requestedReceiverUserInfoFields) {
            for (const requestedField of webhookEvent.requestedReceiverUserInfoFields) {
              switch (requestedField.name) {
                case 'FULL_NAME':
                  responseUserData.FULL_NAME = SAMPLE_USER.FULL_NAME;
                  break;
                case 'DATE_OF_BIRTH':
                  responseUserData.DATE_OF_BIRTH = SAMPLE_USER.DATE_OF_BIRTH;
                  break;
                case 'NATIONALITY':
                  responseUserData.NATIONALITY = SAMPLE_USER.NATIONALITY;
                  break;
                case 'EMAIL':
                  responseUserData.EMAIL = SAMPLE_USER.EMAIL;
                  break;
                case 'PHONE_NUMBER':
                  responseUserData.PHONE_NUMBER = SAMPLE_USER.PHONE_NUMBER;
                  break;
                case 'ADDRESS':
                  responseUserData.ADDRESS = SAMPLE_USER.ADDRESS;
                  break;
              }
            }
          }

          const response: IncomingPaymentWebhookResponse = {
            receiverUserInfo: responseUserData,
          };
          console.log(`Webhook Response: ${JSON.stringify(response, null, 2)}`);
          return NextResponse.json(response, { status: 200 });
          
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
        // Record outgoing payment
        break;
        
      case WebhookType.TEST:
        // Handle webhook test
        break;
        
      case WebhookType.BULK_UPLOAD:
        // Handle bulk upload 
        break;
        
      case WebhookType.INVITATION_CLAIMED:
        // Handle invitation, add recipient to sender's contact list
        
        // If there's an amount to send, you would typically initiate a payment here
        if (webhookEvent.invitation.amountToSend) {
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
