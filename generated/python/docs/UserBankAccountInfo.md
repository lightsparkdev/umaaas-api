# UserBankAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | [**BankAccountType**](BankAccountType.md) |  | 
**platform_account_id** | **str** | Platform-specific identifier for this bank account. This optional field allows platforms to link bank accounts to their internal account systems. The value can be any string that helps identify the account in your system (e.g. database IDs, custom references, etc.).  This field is particularly useful when: - Tracking multiple bank accounts for the same user - Linking accounts to internal accounting systems - Maintaining consistency between UMAaS and your platform&#39;s account records  | [optional] 

## Example

```python
from umaaas_api.models.user_bank_account_info import UserBankAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserBankAccountInfo from a JSON string
user_bank_account_info_instance = UserBankAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserBankAccountInfo.to_json())

# convert the object into a dict
user_bank_account_info_dict = user_bank_account_info_instance.to_dict()
# create an instance of UserBankAccountInfo from a dict
user_bank_account_info_from_dict = UserBankAccountInfo.from_dict(user_bank_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


