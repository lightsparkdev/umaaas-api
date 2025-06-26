# BaseWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | [**WebhookType**](WebhookType.md) | Type of webhook event | 

## Example

```python
from umaaas_api.models.base_webhook import BaseWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of BaseWebhook from a JSON string
base_webhook_instance = BaseWebhook.from_json(json)
# print the JSON string representation of the object
print(BaseWebhook.to_json())

# convert the object into a dict
base_webhook_dict = base_webhook_instance.to_dict()
# create an instance of BaseWebhook from a dict
base_webhook_from_dict = BaseWebhook.from_dict(base_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


