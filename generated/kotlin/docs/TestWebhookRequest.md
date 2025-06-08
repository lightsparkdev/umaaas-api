
# TestWebhookRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **timestamp** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) |  |
| **webhookId** | **kotlin.String** | Unique identifier for this webhook delivery (can be used for idempotency) |  |
| **type** | [**WebhookType**](WebhookType.md) | Type of webhook event |  |



