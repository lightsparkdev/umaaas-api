# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique identifier | [optional] [readonly] 
**uma_address** | **str** | full UMA address | 
**platform_user_id** | **str** | Platform-specific user identifier | 
**user_type** | **str** | Whether the user is an individual or a business entity | 
**created_at** | **datetime** | Creation timestamp | [optional] [readonly] 
**updated_at** | **datetime** | Last update timestamp | [optional] [readonly] 
**is_deleted** | **bool** | Whether the user is marked as deleted | [readonly] 

## Example

```python
from umaaas_api.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


