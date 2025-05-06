# PaymentFboAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_url** | **str** | The url to make request to in order to confirm payment | 
**payment_method** | **str** | The HTTP method to use for confirming the payment | 

## Example

```python
from umaaas_api.models.payment_fbo_account_info import PaymentFboAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentFboAccountInfo from a JSON string
payment_fbo_account_info_instance = PaymentFboAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PaymentFboAccountInfo.to_json())

# convert the object into a dict
payment_fbo_account_info_dict = payment_fbo_account_info_instance.to_dict()
# create an instance of PaymentFboAccountInfo from a dict
payment_fbo_account_info_from_dict = PaymentFboAccountInfo.from_dict(payment_fbo_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


