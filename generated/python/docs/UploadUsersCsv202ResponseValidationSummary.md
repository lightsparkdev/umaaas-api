# UploadUsersCsv202ResponseValidationSummary

Summary of CSV validation results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_rows** | **int** | Total number of rows in the CSV file | [optional] 
**valid_rows** | **int** | Number of rows that passed initial validation | [optional] 
**invalid_rows** | **int** | Number of rows that failed validation | [optional] 
**errors** | [**List[UploadUsersCsv202ResponseValidationSummaryErrorsInner]**](UploadUsersCsv202ResponseValidationSummaryErrorsInner.md) |  | [optional] 

## Example

```python
from umaaas_api.models.upload_users_csv202_response_validation_summary import UploadUsersCsv202ResponseValidationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UploadUsersCsv202ResponseValidationSummary from a JSON string
upload_users_csv202_response_validation_summary_instance = UploadUsersCsv202ResponseValidationSummary.from_json(json)
# print the JSON string representation of the object
print(UploadUsersCsv202ResponseValidationSummary.to_json())

# convert the object into a dict
upload_users_csv202_response_validation_summary_dict = upload_users_csv202_response_validation_summary_instance.to_dict()
# create an instance of UploadUsersCsv202ResponseValidationSummary from a dict
upload_users_csv202_response_validation_summary_from_dict = UploadUsersCsv202ResponseValidationSummary.from_dict(upload_users_csv202_response_validation_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


