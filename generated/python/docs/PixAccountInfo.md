# PixAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | PIX key for Brazilian instant payments | 
**pix_key_type** | **str** | Type of PIX key being used | 
**bank_name** | **str** | Name of the bank | [optional] 

## Example

```python
from umaaas_api.models.pix_account_info import PixAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PixAccountInfo from a JSON string
pix_account_info_instance = PixAccountInfo.from_json(json)
# print the JSON string representation of the object
print(PixAccountInfo.to_json())

# convert the object into a dict
pix_account_info_dict = pix_account_info_instance.to_dict()
# create an instance of PixAccountInfo from a dict
pix_account_info_from_dict = PixAccountInfo.from_dict(pix_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


