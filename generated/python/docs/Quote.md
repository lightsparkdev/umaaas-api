# Quote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **str** | Unique identifier for this quote | 
**sending_currency** | [**Currency**](Currency.md) |  | 
**receiving_currency** | [**Currency**](Currency.md) |  | 
**total_sending_amount** | **int** | The total amount that will be sent in the smallest unit of the sending currency (eg. cents). | 
**total_receiving_amount** | **int** | The total amount that will be received in the smallest unit of the receiving currency (eg. cents). | 
**exchange_rate** | **float** | Number of sending currency units per receiving currency unit. | 
**expires_at** | **datetime** | When this quote expires (typically 1-5 minutes after creation) | 
**fees_included** | **int** | The fees associated with the quote in the smallest unit of the sending currency (eg. cents). | 
**counterparty_information** | **Dict[str, object]** | Information about the recipient, as required by the platform in their configuration. | [optional] 
**payment_instructions** | [**PaymentInstructions**](PaymentInstructions.md) |  | 
**status** | **str** | Current status of the quote | [optional] 
**transaction_id** | **str** | The ID of the transaction created from this quote. | 
**rate_details** | [**OutgoingRateDetails**](OutgoingRateDetails.md) | Details about the rate and fees for the transaction. | [optional] 

## Example

```python
from umaaas_api.models.quote import Quote

# TODO update the JSON string below
json = "{}"
# create an instance of Quote from a JSON string
quote_instance = Quote.from_json(json)
# print the JSON string representation of the object
print(Quote.to_json())

# convert the object into a dict
quote_dict = quote_instance.to_dict()
# create an instance of Quote from a dict
quote_from_dict = Quote.from_dict(quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


