# IncomingPaymentWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**IncomingTransaction**](IncomingTransaction.md) |  | 
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | [**WebhookType**](WebhookType.md) | Type of webhook event | 

## Example

```python
from umaaas_api.models.incoming_payment_webhook_request import IncomingPaymentWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhookRequest from a JSON string
incoming_payment_webhook_request_instance = IncomingPaymentWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhookRequest.to_json())

# convert the object into a dict
incoming_payment_webhook_request_dict = incoming_payment_webhook_request_instance.to_dict()
# create an instance of IncomingPaymentWebhookRequest from a dict
incoming_payment_webhook_request_from_dict = IncomingPaymentWebhookRequest.from_dict(incoming_payment_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


