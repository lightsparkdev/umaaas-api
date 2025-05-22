# ReconciliationInstructions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **str** | Unique reference code that must be included with the payment to match it with the correct incoming transaction | 

## Example

```python
from umaaas_api.models.reconciliation_instructions import ReconciliationInstructions

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationInstructions from a JSON string
reconciliation_instructions_instance = ReconciliationInstructions.from_json(json)
# print the JSON string representation of the object
print(ReconciliationInstructions.to_json())

# convert the object into a dict
reconciliation_instructions_dict = reconciliation_instructions_instance.to_dict()
# create an instance of ReconciliationInstructions from a dict
reconciliation_instructions_from_dict = ReconciliationInstructions.from_dict(reconciliation_instructions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


