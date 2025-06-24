# OutgoingPaymentWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**OutgoingTransaction**](OutgoingTransaction.md) |  | 
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | [**WebhookType**](WebhookType.md) | Type of webhook event | 

## Example

```python
from umaaas_api.models.outgoing_payment_webhook import OutgoingPaymentWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of OutgoingPaymentWebhook from a JSON string
outgoing_payment_webhook_instance = OutgoingPaymentWebhook.from_json(json)
# print the JSON string representation of the object
print(OutgoingPaymentWebhook.to_json())

# convert the object into a dict
outgoing_payment_webhook_dict = outgoing_payment_webhook_instance.to_dict()
# create an instance of OutgoingPaymentWebhook from a dict
outgoing_payment_webhook_from_dict = OutgoingPaymentWebhook.from_dict(outgoing_payment_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


