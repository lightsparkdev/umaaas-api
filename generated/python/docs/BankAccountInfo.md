# BankAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Type of bank account information | 
**account_holder_name** | **str** | Name of the account holder | [optional] 
**platform_account_id** | **str** | Platform-specific identifier for this bank account. This optional field allows platforms to link bank accounts to their internal account systems. The value can be any string that helps identify the account in your system (e.g. database IDs, custom references, etc.).  This field is particularly useful when: - Tracking multiple bank accounts for the same user - Linking accounts to internal accounting systems - Maintaining consistency between UMAaS and your platform&#39;s account records  | [optional] 

## Example

```python
from umaaas_api.models.bank_account_info import BankAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BankAccountInfo from a JSON string
bank_account_info_instance = BankAccountInfo.from_json(json)
# print the JSON string representation of the object
print(BankAccountInfo.to_json())

# convert the object into a dict
bank_account_info_dict = bank_account_info_instance.to_dict()
# create an instance of BankAccountInfo from a dict
bank_account_info_from_dict = BankAccountInfo.from_dict(bank_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


