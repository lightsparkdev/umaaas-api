# UpiAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpa** | **str** | Virtual Payment Address for UPI payments | 
**account_holder_name** | **str** | Name of the account holder | [optional] 

## Example

```python
from umaaas_api.models.upi_account_info import UpiAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpiAccountInfo from a JSON string
upi_account_info_instance = UpiAccountInfo.from_json(json)
# print the JSON string representation of the object
print(UpiAccountInfo.to_json())

# convert the object into a dict
upi_account_info_dict = upi_account_info_instance.to_dict()
# create an instance of UpiAccountInfo from a dict
upi_account_info_from_dict = UpiAccountInfo.from_dict(upi_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


