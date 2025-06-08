
# IncomingPaymentWebhookRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **transaction** | [**IncomingTransaction**](IncomingTransaction.md) |  |  |
| **timestamp** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) |  |
| **webhookId** | **kotlin.String** | Unique identifier for this webhook delivery (can be used for idempotency) |  |
| **type** | [**WebhookType**](WebhookType.md) | Type of webhook event |  |
| **requestedReceiverUserInfoFields** | [**kotlin.collections.List&lt;CounterpartyFieldDefinition&gt;**](CounterpartyFieldDefinition.md) | Information required by the sender&#39;s VASP about the recipient. Platform must provide these in the 200 OK response if approving. Note that this only includes fields which UMAaaS does not already have from initial user registration. |  [optional] |



