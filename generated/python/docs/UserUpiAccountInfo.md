# UserUpiAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpa** | **str** | Virtual Payment Address for UPI payments | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.user_upi_account_info import UserUpiAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpiAccountInfo from a JSON string
user_upi_account_info_instance = UserUpiAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UserUpiAccountInfo.to_json())

# convert the object into a dict
user_upi_account_info_dict = user_upi_account_info_instance.to_dict()
# create an instance of UserUpiAccountInfo from a dict
user_upi_account_info_from_dict = UserUpiAccountInfo.from_dict(user_upi_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


