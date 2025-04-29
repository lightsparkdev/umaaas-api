# PaymentPixAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | PIX key for Brazilian instant payments | 
**pix_key_type** | **str** | Type of PIX key being used | 
**bank_name** | **str** | Name of the bank | [optional] 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.payment_pix_account_info import PaymentPixAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPixAccountInfo from a JSON string
payment_pix_account_info_instance = PaymentPixAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentPixAccountInfo.to_json())

# convert the object into a dict
payment_pix_account_info_dict = payment_pix_account_info_instance.to_dict()
# create an instance of PaymentPixAccountInfo from a dict
payment_pix_account_info_from_dict = PaymentPixAccountInfo.from_dict(payment_pix_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


