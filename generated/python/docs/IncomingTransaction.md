# IncomingTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the transaction | 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**type** | [**TransactionType**](TransactionType.md) | Always \&quot;INCOMING\&quot; for incoming transactions | 
**sender_uma_address** | **str** | UMA address of the payment sender | 
**receiver_uma_address** | **str** | UMA address of the payment recipient | 
**user_id** | **str** | System ID of the user (sender for outgoing, recipient for incoming) | 
**platform_user_id** | **str** | Platform-specific ID of the user (sender for outgoing, recipient for incoming) | 
**settled_at** | **datetime** | When the payment was or will be settled | [optional] 
**created_at** | **datetime** | When the transaction was created | [optional] 
**description** | **str** | Optional memo or description for the payment | [optional] 
**counterparty_information** | **Dict[str, object]** | Additional information about the counterparty, if available | [optional] 
**received_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount received in the recipient&#39;s currency | 
**reconciliation_instructions** | [**ReconciliationInstructions**](ReconciliationInstructions.md) |  | [optional] 

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


