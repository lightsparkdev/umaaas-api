# UploadUsersCsv202ResponseValidationSummaryErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row** | **int** | Row number in the CSV file (1-based) | [optional] 
**errors** | **List[str]** |  | [optional] 

## Example

```python
from umaaas_api.models.upload_users_csv202_response_validation_summary_errors_inner import UploadUsersCsv202ResponseValidationSummaryErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UploadUsersCsv202ResponseValidationSummaryErrorsInner from a JSON string
upload_users_csv202_response_validation_summary_errors_inner_instance = UploadUsersCsv202ResponseValidationSummaryErrorsInner.from_json(json)
# print the JSON string representation of the object
print(UploadUsersCsv202ResponseValidationSummaryErrorsInner.to_json())

# convert the object into a dict
upload_users_csv202_response_validation_summary_errors_inner_dict = upload_users_csv202_response_validation_summary_errors_inner_instance.to_dict()
# create an instance of UploadUsersCsv202ResponseValidationSummaryErrorsInner from a dict
upload_users_csv202_response_validation_summary_errors_inner_from_dict = UploadUsersCsv202ResponseValidationSummaryErrorsInner.from_dict(upload_users_csv202_response_validation_summary_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


