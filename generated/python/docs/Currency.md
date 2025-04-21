# Currency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Three-letter currency code (ISO 4217) for fiat currencies. Some cryptocurrencies may use their own ticker symbols (e.g. \&quot;SAT\&quot; for satoshis, \&quot;USDC\&quot; for USDCoin, etc.) | [optional] 
**name** | **str** | Full name of the currency | [optional] 
**symbol** | **str** | Symbol of the currency | [optional] 
**decimals** | **int** | Number of decimal places for the currency | [optional] 

## Example

```python
from umaaas_api.models.currency import Currency

# TODO update the JSON string below
json = "{}"
# create an instance of Currency from a JSON string
currency_instance = Currency.from_json(json)
# print the JSON string representation of the object
print(Currency.to_json())

# convert the object into a dict
currency_dict = currency_instance.to_dict()
# create an instance of Currency from a dict
currency_from_dict = Currency.from_dict(currency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


