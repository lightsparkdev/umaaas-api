# IncomingPaymentWebhookForbiddenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message | [optional] 
**details** | **object** | Additional error details | [optional] 
**reason** | **str** | Optional reason for rejecting the payment. This is just for debugging purposes or can be used for a platform&#39;s own purposes. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook_forbidden_response import IncomingPaymentWebhookForbiddenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhookForbiddenResponse from a JSON string
incoming_payment_webhook_forbidden_response_instance = IncomingPaymentWebhookForbiddenResponse.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhookForbiddenResponse.to_json())

# convert the object into a dict
incoming_payment_webhook_forbidden_response_dict = incoming_payment_webhook_forbidden_response_instance.to_dict()
# create an instance of IncomingPaymentWebhookForbiddenResponse from a dict
incoming_payment_webhook_forbidden_response_from_dict = IncomingPaymentWebhookForbiddenResponse.from_dict(incoming_payment_webhook_forbidden_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


