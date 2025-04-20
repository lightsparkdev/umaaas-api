# BusinessUpdateBusinessInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal_name** | **str** | Legal name of the business | [optional] 
**registration_number** | **str** | Business registration number | [optional] 
**tax_id** | **str** | Tax identification number | [optional] 

## Example

```python
from umaaas_api.models.business_update_business_info import BusinessUpdateBusinessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUpdateBusinessInfo from a JSON string
business_update_business_info_instance = BusinessUpdateBusinessInfo.from_json(json)
# print the JSON string representation of the object
print(BusinessUpdateBusinessInfo.to_json())

# convert the object into a dict
business_update_business_info_dict = business_update_business_info_instance.to_dict()
# create an instance of BusinessUpdateBusinessInfo from a dict
business_update_business_info_from_dict = BusinessUpdateBusinessInfo.from_dict(business_update_business_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


