# BusinessUserAllOfBusinessInfo

Additional information required for business entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal_name** | **str** | Legal name of the business | 
**registration_number** | **str** | Business registration number | [optional] 
**tax_id** | **str** | Tax identification number | [optional] 

## Example

```python
from umaaas_api.models.business_user_all_of_business_info import BusinessUserAllOfBusinessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUserAllOfBusinessInfo from a JSON string
business_user_all_of_business_info_instance = BusinessUserAllOfBusinessInfo.from_json(json)
# print the JSON string representation of the object
print(BusinessUserAllOfBusinessInfo.to_json())

# convert the object into a dict
business_user_all_of_business_info_dict = business_user_all_of_business_info_instance.to_dict()
# create an instance of BusinessUserAllOfBusinessInfo from a dict
business_user_all_of_business_info_from_dict = BusinessUserAllOfBusinessInfo.from_dict(business_user_all_of_business_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


