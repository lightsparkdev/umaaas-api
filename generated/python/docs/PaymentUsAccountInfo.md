# PaymentUsAccountInfo


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
from umaaas_api.models.payment_us_account_info import PaymentUsAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentUsAccountInfo from a JSON string
payment_us_account_info_instance = PaymentUsAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentUsAccountInfo.to_json())

# convert the object into a dict
payment_us_account_info_dict = payment_us_account_info_instance.to_dict()
# create an instance of PaymentUsAccountInfo from a dict
payment_us_account_info_from_dict = PaymentUsAccountInfo.from_dict(payment_us_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


