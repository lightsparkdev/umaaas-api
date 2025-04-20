# IbanAccountInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **str** | International Bank Account Number | 
**swift_bic** | **str** | SWIFT/BIC code (8 or 11 characters) | [optional] 
**bank_name** | **str** | Name of the bank | 

## Example

```python
from umaaas_api.models.iban_account_info import IbanAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IbanAccountInfo from a JSON string
iban_account_info_instance = IbanAccountInfo.from_json(json)
# print the JSON string representation of the object
print(IbanAccountInfo.to_json())

# convert the object into a dict
iban_account_info_dict = iban_account_info_instance.to_dict()
# create an instance of IbanAccountInfo from a dict
iban_account_info_from_dict = IbanAccountInfo.from_dict(iban_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


