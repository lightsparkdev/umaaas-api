# BulkUploadWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** | ISO8601 timestamp when the webhook was sent (can be used to prevent replay attacks) | 
**webhook_id** | **str** | Unique identifier for this webhook delivery (can be used for idempotency) | 
**type** | [**WebhookType**](WebhookType.md) | Type of webhook event | 
**bulk_user_import_job** | [**BulkUserImportJob**](BulkUserImportJob.md) |  | 

## Example

```python
from umaaas_api.models.bulk_upload_webhook_request import BulkUploadWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUploadWebhookRequest from a JSON string
bulk_upload_webhook_request_instance = BulkUploadWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUploadWebhookRequest.to_json())

# convert the object into a dict
bulk_upload_webhook_request_dict = bulk_upload_webhook_request_instance.to_dict()
# create an instance of BulkUploadWebhookRequest from a dict
bulk_upload_webhook_request_from_dict = BulkUploadWebhookRequest.from_dict(bulk_upload_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


