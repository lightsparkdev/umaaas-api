
# PlatformCurrencyConfig

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **currencyCode** | **kotlin.String** | Three-letter currency code (ISO 4217) |  |
| **minAmount** | **kotlin.Long** | Minimum amount that can be sent in the smallest unit of this currency |  |
| **maxAmount** | **kotlin.Long** | Maximum amount that can be sent in the smallest unit of this currency |  |
| **requiredCounterpartyFields** | [**kotlin.collections.List&lt;CounterpartyFieldDefinition&gt;**](CounterpartyFieldDefinition.md) | List of fields which the platform requires from the counterparty institutions about counterparty users. Platforms can set mandatory to false if the platform does not require the field, but would like to have it available. Some fields may be required by the underlying UMA provider. |  |
| **umaProviderRequiredUserFields** | [**kotlin.collections.List&lt;UserInfoFieldName&gt;**](UserInfoFieldName.md) | List of user info field names that are required by the underlying UMA provider when creating a user for this currency. These fields must be supplied when creating or updating a user if this currency is intended to be used by that user. If no fields are required, this field is omitted. |  [optional] |



