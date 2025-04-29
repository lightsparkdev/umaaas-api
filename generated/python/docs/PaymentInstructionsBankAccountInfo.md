# PaymentInstructionsBankAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Type of bank account information | 
**account_number** | **str** | US bank account number | 
**routing_number** | **str** | ACH routing number (9 digits) | 
**account_category** | **str** | Type of account (checking or savings) | 
**bank_name** | **str** | Name of the bank | 
**account_holder_name** | **str** | Name of the account holder | [optional] 
**pix_key** | **str** | PIX key for Brazilian instant payments | 
**pix_key_type** | **str** | Type of PIX key being used | 
**iban** | **str** | International Bank Account Number | 
**swift_bic** | **str** | SWIFT/BIC code (8 or 11 characters) | [optional] 
**payment_url** | **str** | The url to make request to in order to confirm payment | 
**payment_method** | **str** | The HTTP method to use for confirming the payment | 

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


