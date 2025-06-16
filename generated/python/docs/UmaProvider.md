# UmaProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Uma Provider | [optional] 
**supported_regions** | **List[str]** | Region(s) this Uma Provider operates in | [optional] 
**domain** | **str** | Domain this VASP uses for UMA addresses | [optional] 
**logo_url** | **str** | Logo url for the VASP | [optional] 
**supported_currencies** | [**List[Currency]**](Currency.md) | List of currencies supported by this Uma Provider | [optional] 
**lei** | **str** | Legal Entity Identifier for the Uma Provider | [optional] 
**allow_list_status** | **bool** | Whether this Uma Provider is on your allow list | [optional] 

## Example

```python
from umaaas_api.models.uma_provider import UmaProvider

# TODO update the JSON string below
json = "{}"
# create an instance of UmaProvider from a JSON string
uma_provider_instance = UmaProvider.from_json(json)
# print the JSON string representation of the object
print(UmaProvider.to_json())

# convert the object into a dict
uma_provider_dict = uma_provider_instance.to_dict()
# create an instance of UmaProvider from a dict
uma_provider_from_dict = UmaProvider.from_dict(uma_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


