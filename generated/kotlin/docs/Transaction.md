
# Transaction

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **kotlin.String** | Unique identifier for the transaction |  |
| **status** | [**TransactionStatus**](TransactionStatus.md) |  |  |
| **type** | [**TransactionType**](TransactionType.md) |  |  |
| **senderUmaAddress** | **kotlin.String** | UMA address of the payment sender |  |
| **receiverUmaAddress** | **kotlin.String** | UMA address of the payment recipient |  |
| **userId** | **kotlin.String** | System ID of the user (sender for outgoing, recipient for incoming) |  |
| **platformUserId** | **kotlin.String** | Platform-specific ID of the user (sender for outgoing, recipient for incoming) |  |
| **settledAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the payment was or will be settled |  [optional] |
| **createdAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When the transaction was created |  [optional] |
| **description** | **kotlin.String** | Optional memo or description for the payment |  [optional] |
| **counterpartyInformation** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Additional information about the counterparty, if available |  [optional] |



