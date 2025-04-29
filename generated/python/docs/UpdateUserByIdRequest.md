# UpdateUserByIdRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uma_address** | **str** | Full UMA address | [optional] 
**full_name** | **str** | Individual&#39;s full name | [optional] 
**date_of_birth** | **date** | Date of birth in ISO 8601 format (YYYY-MM-DD) | [optional] 
**nationality** | **str** | Country code (ISO 3166-1 alpha-2) | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account_info** | [**UserBankAccountInfo**](UserBankAccountInfo.md) |  | [optional] 
**business_info** | [**BusinessUpdateBusinessInfo**](BusinessUpdateBusinessInfo.md) |  | [optional] 

## Example

```python
from umaaas_api.models.update_user_by_id_request import UpdateUserByIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserByIdRequest from a JSON string
update_user_by_id_request_instance = UpdateUserByIdRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserByIdRequest.to_json())

# convert the object into a dict
update_user_by_id_request_dict = update_user_by_id_request_instance.to_dict()
# create an instance of UpdateUserByIdRequest from a dict
update_user_by_id_request_from_dict = UpdateUserByIdRequest.from_dict(update_user_by_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


