# BulkUserImportJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique identifier for the bulk import job | 
**status** | **str** | Current status of the job | 
**progress** | [**BulkUserImportJobProgress**](BulkUserImportJobProgress.md) |  | 
**errors** | [**List[BulkUserImportJobErrorsInner]**](BulkUserImportJobErrorsInner.md) | Detailed error information for failed entries | [optional] 
**completed_at** | **datetime** | Timestamp when the job completed (only present for COMPLETED or FAILED status) | [optional] 

## Example

```python
from umaaas_api.models.bulk_user_import_job import BulkUserImportJob

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUserImportJob from a JSON string
bulk_user_import_job_instance = BulkUserImportJob.from_json(json)
# print the JSON string representation of the object
print(BulkUserImportJob.to_json())

# convert the object into a dict
bulk_user_import_job_dict = bulk_user_import_job_instance.to_dict()
# create an instance of BulkUserImportJob from a dict
bulk_user_import_job_from_dict = BulkUserImportJob.from_dict(bulk_user_import_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


