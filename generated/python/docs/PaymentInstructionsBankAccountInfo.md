# PaymentInstructionsBankAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Type of bank account information | 
**account_holder_name** | **str** | Name of the account holder | [optional] 
**platform_account_id** | **str** | Platform-specific identifier for this bank account. This optional field allows platforms to link bank accounts to their internal account systems. The value can be any string that helps identify the account in your system (e.g. database IDs, custom references, etc.).  This field is particularly useful when: - Tracking multiple bank accounts for the same user - Linking accounts to internal accounting systems - Maintaining consistency between UMAaS and your platform&#39;s account records  | [optional] 
**account_number** | **str** | US bank account number | 
**routing_number** | **str** | ACH routing number (9 digits) | 
**account_category** | **str** | Type of account (checking or savings) | 
**bank_name** | **str** | Name of the bank | 
**pix_key** | **str** | PIX key for Brazilian instant payments | 
**pix_key_type** | **str** | Type of PIX key being used | 
**iban** | **str** | International Bank Account Number | 
**swift_bic** | **str** | SWIFT/BIC code (8 or 11 characters) | [optional] 

## Example

```python
from umaaas_api.models.payment_instructions_bank_account_info import PaymentInstructionsBankAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentInstructionsBankAccountInfo from a JSON string
payment_instructions_bank_account_info_instance = PaymentInstructionsBankAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentInstructionsBankAccountInfo.to_json())

# convert the object into a dict
payment_instructions_bank_account_info_dict = payment_instructions_bank_account_info_instance.to_dict()
# create an instance of PaymentInstructionsBankAccountInfo from a dict
payment_instructions_bank_account_info_from_dict = PaymentInstructionsBankAccountInfo.from_dict(payment_instructions_bank_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


