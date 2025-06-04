import { createPublicKey, createVerify } from 'crypto';
import type {
  IncomingTransaction,
  OutgoingTransaction,
} from 'uaas-test/resources/transactions';
import type { UmaInvitation } from 'uaas-test/resources/invitations';
import type { CounterpartyFieldDefinition } from 'uaas-test/resources/config';
import { Address } from 'uaas-test/resources';

// WebhookType enum from OpenAPI schema
export enum WebhookType {
  INCOMING_PAYMENT = 'INCOMING_PAYMENT',
  OUTGOING_PAYMENT = 'OUTGOING_PAYMENT',
  TEST = 'TEST',
  BULK_UPLOAD = 'BULK_UPLOAD',
  INVITATION_CLAIMED = 'INVITATION_CLAIMED'
}

// Base webhook interface
export interface BaseWebhookEvent {
  timestamp: string;
  webhookId: string;
  type: WebhookType;
}

export interface WebhookUserData {
  FULL_NAME?: string;
  DATE_OF_BIRTH?: string;
  NATIONALITY?: string;
  EMAIL?: string;
  PHONE_NUMBER?: string;
  ADDRESS?: Address;
}

// Incoming payment webhook
export interface IncomingPaymentWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.INCOMING_PAYMENT;
  transaction: IncomingTransaction;
  requestedReceiverUserInfoFields?: Array<{ name: CounterpartyFieldDefinition['name']; mandatory: boolean }>;
}

export interface IncomingPaymentWebhookResponse {
  receiverUserInfo: WebhookUserData;
}

// Outgoing payment webhook
export interface OutgoingPaymentWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.OUTGOING_PAYMENT;
  transaction: OutgoingTransaction;
}

// Test webhook
export interface TestWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.TEST;
}

// Bulk upload webhook
export interface BulkUploadWebhookEvent extends BaseWebhookEvent {
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
export interface InvitationClaimedWebhookEvent extends BaseWebhookEvent {
  type: WebhookType.INVITATION_CLAIMED;
  invitation: UmaInvitation;
}

// Union type for all webhook events
export type WebhookEvent =
  | IncomingPaymentWebhookEvent
  | OutgoingPaymentWebhookEvent
  | TestWebhookEvent
  | BulkUploadWebhookEvent
  | InvitationClaimedWebhookEvent;

export interface SignatureHeader {
  v: number;
  s: string;
}

export function verifyWebhookSignature(body: string, signatureHeaderValue: string, publicKey: string): boolean {
  try {
    const sigHeader: SignatureHeader = JSON.parse(signatureHeaderValue);
    const VERSION = 1;
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
    const signature = Buffer.from(sigHeader.s, 'base64');
    const verifier = createVerify('SHA256');
    verifier.update(body);
    return verifier.verify(pubKeyObj, signature);
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    return false;
  }
}

export function parseWebhookEvent(rawPayload: unknown): WebhookEvent {
  const { type } = rawPayload as { type: string };
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
