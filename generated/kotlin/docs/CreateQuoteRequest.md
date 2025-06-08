
# CreateQuoteRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **lookupId** | **kotlin.String** | Unique identifier for the prior receiver uma address lookup request. |  |
| **sendingCurrencyCode** | **kotlin.String** | Currency code for the sending amount |  |
| **receivingCurrencyCode** | **kotlin.String** | Currency code for the receiving amount |  |
| **lockedCurrencySide** | [**QuoteLockSide**](QuoteLockSide.md) |  |  |
| **lockedCurrencyAmount** | **kotlin.Long** | The amount to send/receive in the smallest unit of the locked currency (eg. cents). See &#x60;lockedCurrencySide&#x60; for more information. |  |
| **description** | **kotlin.String** | Optional description/memo for the payment |  [optional] |
| **senderUserInfo** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Key-value pairs of information about the sender which was requested by the counterparty (recipient) institution. Any fields specified in &#x60;requiredPayerDataFields&#x60; from the response of the &#x60;/receiver/{receiverUmaAddress}&#x60; (lookupUma) endpoint MUST be provided here if they were requested. If the counterparty (recipient) institution did not request any information, this field can be omitted.  |  [optional] |



