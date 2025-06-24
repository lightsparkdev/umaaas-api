# IncomingPaymentWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_user_info** | **Dict[str, object]** | Information about the recipient, provided by the platform if requested in the webhook via &#x60;requestedReceiverUserInfoFields&#x60; and the payment is approved. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook_response import IncomingPaymentWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhookResponse from a JSON string
incoming_payment_webhook_response_instance = IncomingPaymentWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhookResponse.to_json())

# convert the object into a dict
incoming_payment_webhook_response_dict = incoming_payment_webhook_response_instance.to_dict()
# create an instance of IncomingPaymentWebhookResponse from a dict
incoming_payment_webhook_response_from_dict = IncomingPaymentWebhookResponse.from_dict(incoming_payment_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


