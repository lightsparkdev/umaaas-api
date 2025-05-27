# GetTransactionById200Response


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
**received_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount to be received by recipient in the recipient&#39;s currency | 
**reconciliation_instructions** | [**ReconciliationInstructions**](ReconciliationInstructions.md) | Included for all transactions except those with \&quot;CREATED\&quot; status | [optional] 
**sent_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount sent in the sender&#39;s currency | 
**exchange_rate** | **float** | Number of sending currency units per receiving currency unit. | [optional] 
**fees** | **int** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). | [optional] 
**quote_id** | **str** | The ID of the quote that was used to trigger this payment | [optional] 
**refund** | [**Refund**](Refund.md) | The refund if transaction was refunded. | [optional] 

## Example

```python
from umaaas_api.models.get_transaction_by_id200_response import GetTransactionById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionById200Response from a JSON string
get_transaction_by_id200_response_instance = GetTransactionById200Response.from_json(json)
# print the JSON string representation of the object
print(GetTransactionById200Response.to_json())

# convert the object into a dict
get_transaction_by_id200_response_dict = get_transaction_by_id200_response_instance.to_dict()
# create an instance of GetTransactionById200Response from a dict
get_transaction_by_id200_response_from_dict = GetTransactionById200Response.from_dict(get_transaction_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


