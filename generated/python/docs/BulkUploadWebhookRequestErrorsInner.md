# BulkUploadWebhookRequestErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | Platform user ID or row number for the failed entry | 
**error** | [**Error**](Error.md) |  | 

## Example

```python
from umaaas_api.models.bulk_upload_webhook_request_errors_inner import BulkUploadWebhookRequestErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUploadWebhookRequestErrorsInner from a JSON string
bulk_upload_webhook_request_errors_inner_instance = BulkUploadWebhookRequestErrorsInner.from_json(json)
# print the JSON string representation of the object
print(BulkUploadWebhookRequestErrorsInner.to_json())

# convert the object into a dict
bulk_upload_webhook_request_errors_inner_dict = bulk_upload_webhook_request_errors_inner_instance.to_dict()
# create an instance of BulkUploadWebhookRequestErrorsInner from a dict
bulk_upload_webhook_request_errors_inner_from_dict = BulkUploadWebhookRequestErrorsInner.from_dict(bulk_upload_webhook_request_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


