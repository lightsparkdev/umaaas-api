# CreateQuote422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **object** |  | [optional] 
**message** | **object** |  | [optional] 
**details** | **object** |  | [optional] 

## Example

```python
from umaaas_api.models.create_quote422_response import CreateQuote422Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateQuote422Response from a JSON string
create_quote422_response_instance = CreateQuote422Response.from_json(json)
# print the JSON string representation of the object
print(CreateQuote422Response.to_json())

# convert the object into a dict
create_quote422_response_dict = create_quote422_response_instance.to_dict()
# create an instance of CreateQuote422Response from a dict
create_quote422_response_from_dict = CreateQuote422Response.from_dict(create_quote422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


