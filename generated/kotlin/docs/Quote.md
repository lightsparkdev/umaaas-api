
# Quote

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **quoteId** | **kotlin.String** | Unique identifier for this quote |  |
| **sendingCurrency** | [**Currency**](Currency.md) |  |  |
| **receivingCurrency** | [**Currency**](Currency.md) |  |  |
| **totalSendingAmount** | **kotlin.Long** | The total amount that will be sent in the smallest unit of the sending currency (eg. cents). |  |
| **totalReceivingAmount** | **kotlin.Long** | The total amount that will be received in the smallest unit of the receiving currency (eg. cents). |  |
| **exchangeRate** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Number of sending currency units per receiving currency unit. |  |
| **expiresAt** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) | When this quote expires (typically 1-5 minutes after creation) |  |
| **feesIncluded** | **kotlin.Long** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). |  |
| **paymentInstructions** | [**PaymentInstructions**](PaymentInstructions.md) |  |  |
| **transactionId** | **kotlin.String** | The ID of the transaction created from this quote. |  |
| **counterpartyInformation** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Information about the recipient, as required by the platform in their configuration. |  [optional] |
| **status** | [**inline**](#Status) | Current status of the quote |  [optional] |


<a id="Status"></a>
## Enum: status
| Name | Value |
| ---- | ----- |
| status | PENDING, PROCESSING, COMPLETED, FAILED, EXPIRED |



