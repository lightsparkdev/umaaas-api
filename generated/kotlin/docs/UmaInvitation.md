
# UmaInvitation

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **code** | **kotlin.String** | The unique code of the invitation |  |
| **createdAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the invitation was created |  |
| **url** | **kotlin.String** | The URL where this invitation can be claimed. |  |
| **inviterUma** | **kotlin.String** | The UMA address of the inviter |  |
| **status** | [**inline**](#Status) | The status of the invitation |  |
| **claimedAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the invitation was claimed if it has been claimed |  [optional] |
| **expiresAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the invitation expires (if at all) |  [optional] |
| **inviteeUma** | **kotlin.String** | The UMA address of the invitee |  [optional] |
| **amountToSend** | [**CurrencyAmount**](CurrencyAmount.md) | The amount to send to the invitee when the invitation is claimed. This is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of the amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the payment or the payment fails, the invitee will not receive this amount. This field is primarily used for display purposes on the claiming side of the invitation. This field is useful for \&quot;send-by-link\&quot; style user flows where an inviter can send a payment simply by sharing a link without knowing the receiver&#39;s UMA address. Note that these sends can only be sender-locked, meaning that the sender will not know ahead of time how much the receiver will receive in the receiving currency. |  [optional] |


<a id="Status"></a>
## Enum: status
| Name | Value |
| ---- | ----- |
| status | PENDING, CLAIMED, EXPIRED, CANCELLED |



