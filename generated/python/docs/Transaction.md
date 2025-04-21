# Transaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the transaction | 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**type** | [**TransactionType**](TransactionType.md) |  | 
**sender_uma_address** | **str** | UMA address of the payment sender | 
**receiver_uma_address** | **str** | UMA address of the payment recipient | 
**user_id** | **str** | System ID of the user (sender for outgoing, recipient for incoming) | 
**platform_user_id** | **str** | Platform-specific ID of the user (sender for outgoing, recipient for incoming) | 
**settled_at** | **datetime** | When the payment was or will be settled | [optional] 
**created_at** | **datetime** | When the transaction was created | [optional] 
**description** | **str** | Optional memo or description for the payment | [optional] 
**counterparty_information** | **Dict[str, object]** | Additional information about the counterparty, if available | [optional] 

## Example

```python
from umaaas_api.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


