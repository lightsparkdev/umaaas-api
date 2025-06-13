# PaymentUpiAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpa** | **str** | Virtual Payment Address for UPI payments | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.payment_upi_account_info import PaymentUpiAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentUpiAccountInfo from a JSON string
payment_upi_account_info_instance = PaymentUpiAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentUpiAccountInfo.to_json())

# convert the object into a dict
payment_upi_account_info_dict = payment_upi_account_info_instance.to_dict()
# create an instance of PaymentUpiAccountInfo from a dict
payment_upi_account_info_from_dict = PaymentUpiAccountInfo.from_dict(payment_upi_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


