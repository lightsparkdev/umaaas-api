# IncomingPaymentWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | [**WebhookType**](WebhookType.md) | Type of webhook event | 
**transaction** | [**IncomingTransaction**](IncomingTransaction.md) |  | 
**requested_receiver_user_info_fields** | [**List[CounterpartyFieldDefinition]**](CounterpartyFieldDefinition.md) | Information required by the sender&#39;s VASP about the recipient. Platform must provide these in the 200 OK response if approving. Note that this only includes fields which UMAaaS does not already have from initial user registration. | [optional] 

## Example

```python
from umaaas_api.models.incoming_payment_webhook import IncomingPaymentWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingPaymentWebhook from a JSON string
incoming_payment_webhook_instance = IncomingPaymentWebhook.from_json(json)
# print the JSON string representation of the object
print(IncomingPaymentWebhook.to_json())

# convert the object into a dict
incoming_payment_webhook_dict = incoming_payment_webhook_instance.to_dict()
# create an instance of IncomingPaymentWebhook from a dict
incoming_payment_webhook_from_dict = IncomingPaymentWebhook.from_dict(incoming_payment_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


