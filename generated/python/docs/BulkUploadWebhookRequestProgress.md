# BulkUploadWebhookRequestProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of users to process | 
**processed** | **int** | Number of users processed | 
**successful** | **int** | Number of users successfully created | 
**failed** | **int** | Number of users that failed to create | 

## Example

```python
from umaaas_api.models.bulk_upload_webhook_request_progress import BulkUploadWebhookRequestProgress

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUploadWebhookRequestProgress from a JSON string
bulk_upload_webhook_request_progress_instance = BulkUploadWebhookRequestProgress.from_json(json)
# print the JSON string representation of the object
print(BulkUploadWebhookRequestProgress.to_json())

# convert the object into a dict
bulk_upload_webhook_request_progress_dict = bulk_upload_webhook_request_progress_instance.to_dict()
# create an instance of BulkUploadWebhookRequestProgress from a dict
bulk_upload_webhook_request_progress_from_dict = BulkUploadWebhookRequestProgress.from_dict(bulk_upload_webhook_request_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


