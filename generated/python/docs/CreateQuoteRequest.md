# CreateQuoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lookup_id** | **str** | Unique identifier for the prior receiver uma address lookup request. | 
**receiver_uma_address** | **str** | UMA address of the recipient | 
**sender_uma_address** | **str** | UMA address of the sender (optional if userId or platformUserId is provided) | [optional] 
**user_id** | **str** | System ID of the sender (optional if senderUmaAddress or platformUserId is provided) | [optional] 
**sending_currency_code** | **str** | Currency code for the sending amount | 
**receiving_currency_code** | **str** | Currency code for the receiving amount | 
**locked_currency_side** | [**QuoteLockSide**](QuoteLockSide.md) |  | 
**locked_currency_amount** | **int** | The amount to send/receive in the smallest unit of the locked currency (eg. cents). See &#x60;lockedCurrencySide&#x60; for more information. | 
**description** | **str** | Optional description/memo for the payment | [optional] 

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


