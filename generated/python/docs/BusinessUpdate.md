# BusinessUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uma_address** | **str** | Full UMA address | [optional] 
**business_info** | [**BusinessUpdateBusinessInfo**](BusinessUpdateBusinessInfo.md) |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account_info** | [**BankAccountInfo**](BankAccountInfo.md) |  | [optional] 

## Example

```python
from umaaas_api.models.business_update import BusinessUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUpdate from a JSON string
business_update_instance = BusinessUpdate.from_json(json)
# print the JSON string representation of the object
print(BusinessUpdate.to_json())

# convert the object into a dict
business_update_dict = business_update_instance.to_dict()
# create an instance of BusinessUpdate from a dict
business_update_from_dict = BusinessUpdate.from_dict(business_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


