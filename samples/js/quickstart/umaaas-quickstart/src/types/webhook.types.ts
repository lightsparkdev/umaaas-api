export interface WebhookEventData {
  id: string;
  type: string;
  data: unknown;
  receivedAt: string;
}
