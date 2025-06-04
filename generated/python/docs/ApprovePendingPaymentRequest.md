# ApprovePendingPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_user_info** | **Dict[str, object]** | Information about the recipient, provided by the platform if requested in the original webhook via &#x60;requestedReceiverUserInfoFields&#x60;. | [optional] 

## Example

```python
from umaaas_api.models.approve_pending_payment_request import ApprovePendingPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovePendingPaymentRequest from a JSON string
approve_pending_payment_request_instance = ApprovePendingPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(ApprovePendingPaymentRequest.to_json())

# convert the object into a dict
approve_pending_payment_request_dict = approve_pending_payment_request_instance.to_dict()
# create an instance of ApprovePendingPaymentRequest from a dict
approve_pending_payment_request_from_dict = ApprovePendingPaymentRequest.from_dict(approve_pending_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


