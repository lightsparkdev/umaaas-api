# PlatformCurrencyConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Three-letter currency code (ISO 4217) | 
**min_amount** | **int** | Minimum amount that can be sent in the smallest unit of this currency | 
**max_amount** | **int** | Maximum amount that can be sent in the smallest unit of this currency | 
**required_counterparty_fields** | [**List[CounterpartyFieldDefinition]**](CounterpartyFieldDefinition.md) | List of fields which the platform requires from the counterparty institutions about counterparty users. Platforms can set mandatory to false if the platform does not require the field, but would like to have it available. Some fields may be required by the underlying UMA provider. | 
**uma_provider_required_user_fields** | [**List[UserInfoFieldName]**](UserInfoFieldName.md) | List of user PII field names that are required by the underlying UMA provider when creating a user for this currency. These fields must be supplied when creating or updating a user if this currency is intended to be used by that user. If no fields are required, this field is omitted. | [optional] 

## Example

```python
from umaaas_api.models.platform_currency_config import PlatformCurrencyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformCurrencyConfig from a JSON string
platform_currency_config_instance = PlatformCurrencyConfig.from_json(json)
# print the JSON string representation of the object
print(PlatformCurrencyConfig.to_json())

# convert the object into a dict
platform_currency_config_dict = platform_currency_config_instance.to_dict()
# create an instance of PlatformCurrencyConfig from a dict
platform_currency_config_from_dict = PlatformCurrencyConfig.from_dict(platform_currency_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


