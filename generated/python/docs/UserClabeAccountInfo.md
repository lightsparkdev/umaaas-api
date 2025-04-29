# UserClabeAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clabe_number** | **str** | 18-digit CLABE number (Mexican banking standard) | 
**bank_name** | **str** | Name of the bank | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.user_clabe_account_info import UserClabeAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserClabeAccountInfo from a JSON string
user_clabe_account_info_instance = UserClabeAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserClabeAccountInfo.to_json())

# convert the object into a dict
user_clabe_account_info_dict = user_clabe_account_info_instance.to_dict()
# create an instance of UserClabeAccountInfo from a dict
user_clabe_account_info_from_dict = UserClabeAccountInfo.from_dict(user_clabe_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


