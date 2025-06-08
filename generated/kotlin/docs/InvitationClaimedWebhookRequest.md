
# InvitationClaimedWebhookRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **invitation** | [**UmaInvitation**](UmaInvitation.md) |  |  |
| **timestamp** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) |  |
| **webhookId** | **kotlin.String** | Unique identifier for this webhook delivery (can be used for idempotency) |  |
| **type** | [**inline**](#Type) | Type of webhook event |  |


<a id="Type"></a>
## Enum: type
| Name | Value |
| ---- | ----- |
| type | INVITATION_CLAIMED |



