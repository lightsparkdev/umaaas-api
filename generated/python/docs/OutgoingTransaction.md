# OutgoingTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the transaction | 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**type** | [**TransactionType**](TransactionType.md) | Always \&quot;OUTGOING\&quot; for outgoing transactions | 
**sender_uma_address** | **str** | UMA address of the payment sender | 
**receiver_uma_address** | **str** | UMA address of the payment recipient | 
**user_id** | **str** | System ID of the user (sender for outgoing, recipient for incoming) | 
**platform_user_id** | **str** | Platform-specific ID of the user (sender for outgoing, recipient for incoming) | 
**settled_at** | **datetime** | When the payment was or will be settled | [optional] 
**created_at** | **datetime** | When the transaction was created | [optional] 
**description** | **str** | Optional memo or description for the payment | [optional] 
**counterparty_information** | **Dict[str, object]** | Additional information about the counterparty, if available | [optional] 
**sent_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount sent in the sender&#39;s currency | 
**received_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount to be received by recipient in the recipient&#39;s currency | [optional] 
**exchange_rate** | **float** | Number of sending currency units per receiving currency unit. | [optional] 
**fees** | **int** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). | [optional] 
**quote_id** | **str** | The ID of the quote that was used to trigger this payment | [optional] 
**refund** | [**Refund**](Refund.md) | The refund if transaction was refunded. | [optional] 

## Example

```python
from umaaas_api.models.outgoing_transaction import OutgoingTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of OutgoingTransaction from a JSON string
outgoing_transaction_instance = OutgoingTransaction.from_json(json)
# print the JSON string representation of the object
print(OutgoingTransaction.to_json())

# convert the object into a dict
outgoing_transaction_dict = outgoing_transaction_instance.to_dict()
# create an instance of OutgoingTransaction from a dict
outgoing_transaction_from_dict = OutgoingTransaction.from_dict(outgoing_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


