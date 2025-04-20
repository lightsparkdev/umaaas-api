# TestWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL where the webhook was sent | [optional] 
**response_status** | **int** | The HTTP status code returned by the webhook endpoint | 
**response_body** | **str** | The raw body content returned by the webhook endpoint in response to the request | [optional] 

## Example

```python
from umaaas_api.models.test_webhook_response import TestWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestWebhookResponse from a JSON string
test_webhook_response_instance = TestWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(TestWebhookResponse.to_json())

# convert the object into a dict
test_webhook_response_dict = test_webhook_response_instance.to_dict()
# create an instance of TestWebhookResponse from a dict
test_webhook_response_from_dict = TestWebhookResponse.from_dict(test_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


