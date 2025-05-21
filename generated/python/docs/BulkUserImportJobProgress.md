# BulkUserImportJobProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of users to process | 
**processed** | **int** | Number of users processed so far | 
**successful** | **int** | Number of users successfully created | 
**failed** | **int** | Number of users that failed to create | 

## Example

```python
from umaaas_api.models.bulk_user_import_job_progress import BulkUserImportJobProgress

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUserImportJobProgress from a JSON string
bulk_user_import_job_progress_instance = BulkUserImportJobProgress.from_json(json)
# print the JSON string representation of the object
print(BulkUserImportJobProgress.to_json())

# convert the object into a dict
bulk_user_import_job_progress_dict = bulk_user_import_job_progress_instance.to_dict()
# create an instance of BulkUserImportJobProgress from a dict
bulk_user_import_job_progress_from_dict = BulkUserImportJobProgress.from_dict(bulk_user_import_job_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


