# GetAvailableUmaProviders200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[UmaProvider]**](UmaProvider.md) | List of available Uma Providers using Umaaas | [optional] 
**has_more** | **bool** | Indicates if more results are available beyond this page | [optional] 
**next_cursor** | **str** | Cursor to retrieve the next page of results (only present if hasMore is true) | [optional] 
**total_count** | **int** | Total number of transactions matching the criteria (excluding pagination) | [optional] 

## Example

```python
from umaaas_api.models.get_available_uma_providers200_response import GetAvailableUmaProviders200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAvailableUmaProviders200Response from a JSON string
get_available_uma_providers200_response_instance = GetAvailableUmaProviders200Response.from_json(json)
# print the JSON string representation of the object
print(GetAvailableUmaProviders200Response.to_json())

# convert the object into a dict
get_available_uma_providers200_response_dict = get_available_uma_providers200_response_instance.to_dict()
# create an instance of GetAvailableUmaProviders200Response from a dict
get_available_uma_providers200_response_from_dict = GetAvailableUmaProviders200Response.from_dict(get_available_uma_providers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


