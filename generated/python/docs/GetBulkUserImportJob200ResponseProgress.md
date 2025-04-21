# GetBulkUserImportJob200ResponseProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of users to process | 
**processed** | **int** | Number of users processed so far | 
**successful** | **int** | Number of users successfully created | 
**failed** | **int** | Number of users that failed to create | 

## Example

```python
from umaaas_api.models.get_bulk_user_import_job200_response_progress import GetBulkUserImportJob200ResponseProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GetBulkUserImportJob200ResponseProgress from a JSON string
get_bulk_user_import_job200_response_progress_instance = GetBulkUserImportJob200ResponseProgress.from_json(json)
# print the JSON string representation of the object
print(GetBulkUserImportJob200ResponseProgress.to_json())

# convert the object into a dict
get_bulk_user_import_job200_response_progress_dict = get_bulk_user_import_job200_response_progress_instance.to_dict()
# create an instance of GetBulkUserImportJob200ResponseProgress from a dict
get_bulk_user_import_job200_response_progress_from_dict = GetBulkUserImportJob200ResponseProgress.from_dict(get_bulk_user_import_job200_response_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


