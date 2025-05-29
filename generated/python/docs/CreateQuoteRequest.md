# CreateQuoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lookup_id** | **str** | Unique identifier for the prior receiver uma address lookup request. | 
**sending_currency_code** | **str** | Currency code for the sending amount | 
**receiving_currency_code** | **str** | Currency code for the receiving amount | 
**locked_currency_side** | [**QuoteLockSide**](QuoteLockSide.md) |  | 
**locked_currency_amount** | **int** | The amount to send/receive in the smallest unit of the locked currency (eg. cents). See &#x60;lockedCurrencySide&#x60; for more information. | 
**description** | **str** | Optional description/memo for the payment | [optional] 
**sender_user_info** | **Dict[str, object]** | Key-value pairs of information about the sender which was requested by the counterparty (recipient) institution. Any fields specified in &#x60;requiredPayerDataFields&#x60; from the response of the &#x60;/receiver/{receiverUmaAddress}&#x60; (lookupUma) endpoint MUST be provided here if they were requested. If the counterparty (recipient) institution did not request any information, this field can be omitted.  | [optional] 

## Example

```python
from umaaas_api.models.create_quote_request import CreateQuoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateQuoteRequest from a JSON string
create_quote_request_instance = CreateQuoteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateQuoteRequest.to_json())

# convert the object into a dict
create_quote_request_dict = create_quote_request_instance.to_dict()
# create an instance of CreateQuoteRequest from a dict
create_quote_request_from_dict = CreateQuoteRequest.from_dict(create_quote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


