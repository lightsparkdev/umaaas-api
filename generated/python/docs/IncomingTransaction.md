# IncomingTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**received_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount received in the recipient&#39;s currency | 
**reconciliation_instructions** | [**ReconciliationInstructions**](ReconciliationInstructions.md) | Included for all transactions except those with \&quot;CREATED\&quot; status | [optional] 

## Example

```python
from umaaas_api.models.incoming_transaction import IncomingTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingTransaction from a JSON string
incoming_transaction_instance = IncomingTransaction.from_json(json)
# print the JSON string representation of the object
print(IncomingTransaction.to_json())

# convert the object into a dict
incoming_transaction_dict = incoming_transaction_instance.to_dict()
# create an instance of IncomingTransaction from a dict
incoming_transaction_from_dict = IncomingTransaction.from_dict(incoming_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


