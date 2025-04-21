# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line1** | **str** | Street address line 1 | 
**line2** | **str** | Street address line 2 | [optional] 
**city** | **str** | City | [optional] 
**state** | **str** | State/Province/Region | [optional] 
**postal_code** | **str** | Postal/ZIP code | 
**country** | **str** | Country code (ISO 3166-1 alpha-2) | 

## Example

```python
from umaaas_api.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


