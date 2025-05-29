# IndividualUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **str** | Individual&#39;s full name | [optional] 
**date_of_birth** | **date** | Date of birth in ISO 8601 format (YYYY-MM-DD) | [optional] 
**nationality** | **str** | Country code (ISO 3166-1 alpha-2) | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account_info** | [**UserBankAccountInfo**](UserBankAccountInfo.md) |  | [optional] 

## Example

```python
from umaaas_api.models.individual_user import IndividualUser

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualUser from a JSON string
individual_user_instance = IndividualUser.from_json(json)
# print the JSON string representation of the object
print(IndividualUser.to_json())

# convert the object into a dict
individual_user_dict = individual_user_instance.to_dict()
# create an instance of IndividualUser from a dict
individual_user_from_dict = IndividualUser.from_dict(individual_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


