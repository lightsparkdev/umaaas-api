# PaymentBankAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | [**BankAccountType**](BankAccountType.md) |  | 

## Example

```python
from umaaas_api.models.payment_bank_account_info import PaymentBankAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentBankAccountInfo from a JSON string
payment_bank_account_info_instance = PaymentBankAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentBankAccountInfo.to_json())

# convert the object into a dict
payment_bank_account_info_dict = payment_bank_account_info_instance.to_dict()
# create an instance of PaymentBankAccountInfo from a dict
payment_bank_account_info_from_dict = PaymentBankAccountInfo.from_dict(payment_bank_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


