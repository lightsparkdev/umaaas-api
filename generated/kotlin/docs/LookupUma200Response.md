
# LookupUma200Response

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **receiverUmaAddress** | **kotlin.String** | The UMA address that was looked up |  |
| **supportedCurrencies** | [**kotlin.collections.List&lt;CurrencyPreference&gt;**](CurrencyPreference.md) | List of currencies supported by the receiving UMA address |  |
| **lookupId** | **kotlin.String** | Unique identifier for the lookup. Needed in the subsequent create quote request. |  |
| **requiredPayerDataFields** | [**kotlin.collections.List&lt;CounterpartyFieldDefinition&gt;**](CounterpartyFieldDefinition.md) | Fields required by the receiving institution about the payer before payment can be completed |  [optional] |



