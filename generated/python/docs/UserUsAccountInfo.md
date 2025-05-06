# UserUsAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | US bank account number | 
**routing_number** | **str** | ACH routing number (9 digits) | 
**account_category** | **str** | Type of account (checking or savings) | 
**bank_name** | **str** | Name of the bank | [optional] 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.user_us_account_info import UserUsAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserUsAccountInfo from a JSON string
user_us_account_info_instance = UserUsAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserUsAccountInfo.to_json())

# convert the object into a dict
user_us_account_info_dict = user_us_account_info_instance.to_dict()
# create an instance of UserUsAccountInfo from a dict
user_us_account_info_from_dict = UserUsAccountInfo.from_dict(user_us_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


