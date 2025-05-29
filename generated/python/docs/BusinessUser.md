# BusinessUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account_info** | [**UserBankAccountInfo**](UserBankAccountInfo.md) |  | 
**business_info** | [**BusinessUserAllOfBusinessInfo**](BusinessUserAllOfBusinessInfo.md) |  | [optional] 

## Example

```python
from umaaas_api.models.business_user import BusinessUser

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUser from a JSON string
business_user_instance = BusinessUser.from_json(json)
# print the JSON string representation of the object
print(BusinessUser.to_json())

# convert the object into a dict
business_user_dict = business_user_instance.to_dict()
# create an instance of BusinessUser from a dict
business_user_from_dict = BusinessUser.from_dict(business_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


