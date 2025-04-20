# GetBulkUserImportJob200ResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | Platform user ID or row number for the failed entry | 
**error** | [**Error**](Error.md) |  | 

## Example

```python
from umaaas_api.models.get_bulk_user_import_job200_response_errors_inner import GetBulkUserImportJob200ResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetBulkUserImportJob200ResponseErrorsInner from a JSON string
get_bulk_user_import_job200_response_errors_inner_instance = GetBulkUserImportJob200ResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(GetBulkUserImportJob200ResponseErrorsInner.to_json())

# convert the object into a dict
get_bulk_user_import_job200_response_errors_inner_dict = get_bulk_user_import_job200_response_errors_inner_instance.to_dict()
# create an instance of GetBulkUserImportJob200ResponseErrorsInner from a dict
get_bulk_user_import_job200_response_errors_inner_from_dict = GetBulkUserImportJob200ResponseErrorsInner.from_dict(get_bulk_user_import_job200_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


