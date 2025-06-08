
# CreateInvitationRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **inviterUma** | **kotlin.String** | The UMA address of the user creating the invitation |  |
| **amountToSend** | **kotlin.Long** | An amount to send (in the smallest unit of the user&#39;s currency) to the invitee when the invitation is claimed. This is optional and if not provided, the invitee will not receive any amount. Note that the actual sending of the amount must be done by the inviter platform once the INVITATION_CLAIMED webhook is received. If the inviter platform either does not send the payment or the payment fails, the invitee will not receive this amount. This field is primarily used for display purposes on the claiming side of the invitation.  |  [optional] |
| **expiresAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the invitation expires (if at all) |  [optional] |



