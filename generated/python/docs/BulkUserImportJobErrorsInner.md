# BulkUserImportJobErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | Platform user ID or row number for the failed entry | 
**error** | [**Error**](Error.md) |  | 

## Example

```python
from umaaas_api.models.bulk_user_import_job_errors_inner import BulkUserImportJobErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUserImportJobErrorsInner from a JSON string
bulk_user_import_job_errors_inner_instance = BulkUserImportJobErrorsInner.from_json(json)
# print the JSON string representation of the object
print(BulkUserImportJobErrorsInner.to_json())

# convert the object into a dict
bulk_user_import_job_errors_inner_dict = bulk_user_import_job_errors_inner_instance.to_dict()
# create an instance of BulkUserImportJobErrorsInner from a dict
bulk_user_import_job_errors_inner_from_dict = BulkUserImportJobErrorsInner.from_dict(bulk_user_import_job_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


