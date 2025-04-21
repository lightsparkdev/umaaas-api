# ApiToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique identifier | 
**name** | **str** | Name of the token | 
**permissions** | [**List[Permission]**](Permission.md) | A list of permissions granted to the token | 
**client_id** | **str** | An opaque identifier that should be used as a client_id (or username)  in the HTTP Basic Authentication scheme when issuing http requests to UMAaaS. | 
**client_secret** | **str** | The secret that should be used to authenticate against UMAaaS API. This secret is not stored and will never be available again after creation.  Platform must keep this secret secure as it grants access to the account. | [optional] 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from umaaas_api.models.api_token import ApiToken

# TODO update the JSON string below
json = "{}"
# create an instance of ApiToken from a JSON string
api_token_instance = ApiToken.from_json(json)
# print the JSON string representation of the object
print(ApiToken.to_json())

# convert the object into a dict
api_token_dict = api_token_instance.to_dict()
# create an instance of ApiToken from a dict
api_token_from_dict = ApiToken.from_dict(api_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


