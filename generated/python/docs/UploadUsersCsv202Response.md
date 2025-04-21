# UploadUsersCsv202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique identifier for the bulk import job | 
**status** | **str** |  | 
**validation_summary** | [**UploadUsersCsv202ResponseValidationSummary**](UploadUsersCsv202ResponseValidationSummary.md) |  | [optional] 

## Example

```python
from umaaas_api.models.upload_users_csv202_response import UploadUsersCsv202Response

# TODO update the JSON string below
json = "{}"
# create an instance of UploadUsersCsv202Response from a JSON string
upload_users_csv202_response_instance = UploadUsersCsv202Response.from_json(json)
# print the JSON string representation of the object
print(UploadUsersCsv202Response.to_json())

# convert the object into a dict
upload_users_csv202_response_dict = upload_users_csv202_response_instance.to_dict()
# create an instance of UploadUsersCsv202Response from a dict
upload_users_csv202_response_from_dict = UploadUsersCsv202Response.from_dict(upload_users_csv202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


