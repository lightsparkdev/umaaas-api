# CounterpartyFieldDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**CounterpartyFieldName**](CounterpartyFieldName.md) |  | 
**mandatory** | **bool** | Whether the field is mandatory | 

## Example

```python
from umaaas_api.models.counterparty_field_definition import CounterpartyFieldDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CounterpartyFieldDefinition from a JSON string
counterparty_field_definition_instance = CounterpartyFieldDefinition.from_json(json)
# print the JSON string representation of the object
print(CounterpartyFieldDefinition.to_json())

# convert the object into a dict
counterparty_field_definition_dict = counterparty_field_definition_instance.to_dict()
# create an instance of CounterpartyFieldDefinition from a dict
counterparty_field_definition_from_dict = CounterpartyFieldDefinition.from_dict(counterparty_field_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


