# ClabeAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clabe_number** | **str** | 18-digit CLABE number (Mexican banking standard) | 
**bank_name** | **str** | Name of the bank | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.clabe_account_info import ClabeAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClabeAccountInfo from a JSON string
clabe_account_info_instance = ClabeAccountInfo.from_json(json)
# print the JSON string representation of the object
print(ClabeAccountInfo.to_json())

# convert the object into a dict
clabe_account_info_dict = clabe_account_info_instance.to_dict()
# create an instance of ClabeAccountInfo from a dict
clabe_account_info_from_dict = ClabeAccountInfo.from_dict(clabe_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


