# UserFboAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Three-letter currency code (ISO 4217) | 

## Example

```python
from umaaas_api.models.user_fbo_account_info import UserFboAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserFboAccountInfo from a JSON string
user_fbo_account_info_instance = UserFboAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserFboAccountInfo.to_json())

# convert the object into a dict
user_fbo_account_info_dict = user_fbo_account_info_instance.to_dict()
# create an instance of UserFboAccountInfo from a dict
user_fbo_account_info_from_dict = UserFboAccountInfo.from_dict(user_fbo_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


