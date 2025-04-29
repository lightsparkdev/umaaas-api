# IndividualUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uma_address** | **str** | Full UMA address | [optional] 
**full_name** | **str** | Individual&#39;s full name | [optional] 
**date_of_birth** | **date** | Date of birth in ISO 8601 format (YYYY-MM-DD) | [optional] 
**nationality** | **str** | Country code (ISO 3166-1 alpha-2) | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account_info** | [**UserBankAccountInfo**](UserBankAccountInfo.md) |  | [optional] 

## Example

```python
from umaaas_api.models.individual_update import IndividualUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualUpdate from a JSON string
individual_update_instance = IndividualUpdate.from_json(json)
# print the JSON string representation of the object
print(IndividualUpdate.to_json())

# convert the object into a dict
individual_update_dict = individual_update_instance.to_dict()
# create an instance of IndividualUpdate from a dict
individual_update_from_dict = IndividualUpdate.from_dict(individual_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


