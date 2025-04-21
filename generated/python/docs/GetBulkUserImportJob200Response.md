# GetBulkUserImportJob200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique identifier for the bulk import job | 
**status** | **str** | Current status of the job | 
**progress** | [**GetBulkUserImportJob200ResponseProgress**](GetBulkUserImportJob200ResponseProgress.md) |  | 
**errors** | [**List[GetBulkUserImportJob200ResponseErrorsInner]**](GetBulkUserImportJob200ResponseErrorsInner.md) | Detailed error information for failed entries | [optional] 
**completed_at** | **datetime** | Timestamp when the job completed (only present for COMPLETED or FAILED status) | [optional] 

## Example

```python
from umaaas_api.models.get_bulk_user_import_job200_response import GetBulkUserImportJob200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetBulkUserImportJob200Response from a JSON string
get_bulk_user_import_job200_response_instance = GetBulkUserImportJob200Response.from_json(json)
# print the JSON string representation of the object
print(GetBulkUserImportJob200Response.to_json())

# convert the object into a dict
get_bulk_user_import_job200_response_dict = get_bulk_user_import_job200_response_instance.to_dict()
# create an instance of GetBulkUserImportJob200Response from a dict
get_bulk_user_import_job200_response_from_dict = GetBulkUserImportJob200Response.from_dict(get_bulk_user_import_job200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


