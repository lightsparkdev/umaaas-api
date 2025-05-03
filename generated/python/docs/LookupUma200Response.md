# LookupUma200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_uma_address** | **str** | The UMA address that was looked up | 
**supported_currencies** | [**List[CurrencyPreference]**](CurrencyPreference.md) | List of currencies supported by the receiving UMA address | 
**required_payer_data_fields** | [**List[CounterpartyFieldDefinition]**](CounterpartyFieldDefinition.md) | Fields required by the receiving institution about the payer before payment can be completed | [optional] 
**lookup_id** | **str** | Unique identifier for the lookup. Needed in the subsequent create quote request. | 

## Example

```python
from umaaas_api.models.lookup_uma200_response import LookupUma200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LookupUma200Response from a JSON string
lookup_uma200_response_instance = LookupUma200Response.from_json(json)
# print the JSON string representation of the object
print(LookupUma200Response.to_json())

# convert the object into a dict
lookup_uma200_response_dict = lookup_uma200_response_instance.to_dict()
# create an instance of LookupUma200Response from a dict
lookup_uma200_response_from_dict = LookupUma200Response.from_dict(lookup_uma200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


