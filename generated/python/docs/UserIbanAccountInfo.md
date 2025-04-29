# UserIbanAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **str** | International Bank Account Number | 
**swift_bic** | **str** | SWIFT/BIC code (8 or 11 characters) | [optional] 
**bank_name** | **str** | Name of the bank | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.user_iban_account_info import UserIbanAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserIbanAccountInfo from a JSON string
user_iban_account_info_instance = UserIbanAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserIbanAccountInfo.to_json())

# convert the object into a dict
user_iban_account_info_dict = user_iban_account_info_instance.to_dict()
# create an instance of UserIbanAccountInfo from a dict
user_iban_account_info_from_dict = UserIbanAccountInfo.from_dict(user_iban_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


