# OutgoingTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sent_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount sent in the sender&#39;s currency | 
**received_amount** | [**CurrencyAmount**](CurrencyAmount.md) | Amount to be received by recipient in the recipient&#39;s currency | [optional] 
**exchange_rate** | **float** | Number of sending currency units per receiving currency unit. | [optional] 
**fees** | **int** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). | [optional] 
**quote_id** | **str** | The ID of the quote that was used to trigger this payment | [optional] 
**refund** | [**Refund**](Refund.md) | The refund if transaction was refunded. | [optional] 
**rate_details** | [**OutgoingRateDetails**](OutgoingRateDetails.md) | Details about the rate and fees for the transaction. | [optional] 
**failure_reason** | [**OutgoingTransactionFailureReason**](OutgoingTransactionFailureReason.md) | If the transaction failed, this field provides the reason for failure. | [optional] 

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


