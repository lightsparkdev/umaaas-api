# ListUsers200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique identifier | [optional] [readonly] 
**uma_address** | **str** | full UMA address | 
**platform_user_id** | **str** | Platform-specific user identifier | 
**user_type** | **str** | Whether the user is an individual or a business entity | 
**created_at** | **datetime** | Creation timestamp | [optional] [readonly] 
**updated_at** | **datetime** | Last update timestamp | [optional] [readonly] 
**is_deleted** | **bool** | Whether the user is marked as deleted | [readonly] 
**address** | [**Address**](Address.md) |  | 
**bank_account_info** | [**UserBankAccountInfo**](UserBankAccountInfo.md) |  | 
**business_info** | [**BusinessUserAllOfBusinessInfo**](BusinessUserAllOfBusinessInfo.md) |  | 

## Example

```python
from umaaas_api.models.list_users200_response_data_inner import ListUsers200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsers200ResponseDataInner from a JSON string
list_users200_response_data_inner_instance = ListUsers200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListUsers200ResponseDataInner.to_json())

# convert the object into a dict
list_users200_response_data_inner_dict = list_users200_response_data_inner_instance.to_dict()
# create an instance of ListUsers200ResponseDataInner from a dict
list_users200_response_data_inner_from_dict = ListUsers200ResponseDataInner.from_dict(list_users200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


