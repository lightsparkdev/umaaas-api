
# OutgoingTransaction

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **sentAmount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount sent in the sender&#39;s currency |  |
| **receivedAmount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount to be received by recipient in the recipient&#39;s currency |  [optional] |
| **exchangeRate** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Number of sending currency units per receiving currency unit. |  [optional] |
| **fees** | **kotlin.Long** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). |  [optional] |
| **quoteId** | **kotlin.String** | The ID of the quote that was used to trigger this payment |  [optional] |
| **refund** | [**Refund**](Refund.md) | The refund if transaction was refunded. |  [optional] |



