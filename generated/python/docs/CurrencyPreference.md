# CurrencyPreference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**Currency**](Currency.md) |  | 
**estimated_exchange_rate** | **float** | An estimated exchange rate from the sender&#39;s currency to this currency. This is not a locked rate and is subject to change when calling the quotes endpoint. | 
**min** | **int** | The minimum amount that can be received in this currency. | 
**max** | **int** | The maximum amount that can be received in this currency. | 

## Example

```python
from umaaas_api.models.currency_preference import CurrencyPreference

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyPreference from a JSON string
currency_preference_instance = CurrencyPreference.from_json(json)
# print the JSON string representation of the object
print(CurrencyPreference.to_json())

# convert the object into a dict
currency_preference_dict = currency_preference_instance.to_dict()
# create an instance of CurrencyPreference from a dict
currency_preference_from_dict = CurrencyPreference.from_dict(currency_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


