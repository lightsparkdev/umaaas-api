# TokenCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the token to help identify it | 
**permissions** | [**List[Permission]**](Permission.md) | A list of permissions to grant to the token | 

## Example

```python
from umaaas_api.models.token_create import TokenCreate

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCreate from a JSON string
token_create_instance = TokenCreate.from_json(json)
# print the JSON string representation of the object
print(TokenCreate.to_json())

# convert the object into a dict
token_create_dict = token_create_instance.to_dict()
# create an instance of TokenCreate from a dict
token_create_from_dict = TokenCreate.from_dict(token_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


