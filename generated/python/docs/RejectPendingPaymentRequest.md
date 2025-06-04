# RejectPendingPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Optional reason for rejecting the payment. This is just for debugging purposes or can be used for a platform&#39;s own purposes. | [optional] 

## Example

```python
from umaaas_api.models.reject_pending_payment_request import RejectPendingPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RejectPendingPaymentRequest from a JSON string
reject_pending_payment_request_instance = RejectPendingPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(RejectPendingPaymentRequest.to_json())

# convert the object into a dict
reject_pending_payment_request_dict = reject_pending_payment_request_instance.to_dict()
# create an instance of RejectPendingPaymentRequest from a dict
reject_pending_payment_request_from_dict = RejectPendingPaymentRequest.from_dict(reject_pending_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


