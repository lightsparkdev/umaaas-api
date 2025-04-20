# PlatformCurrencyConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Three-letter currency code (ISO 4217) | 
**min_amount** | **int** | Minimum amount that can be sent in the smallest unit of this currency | 
**max_amount** | **int** | Maximum amount that can be sent in the smallest unit of this currency | 
**required_counterparty_fields** | [**List[CounterpartyFieldDefinition]**](CounterpartyFieldDefinition.md) | List of counterparty fields and their requirements | 

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


