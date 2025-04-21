# GetPaymentStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **str** | ID of the quote | 
**status** | **str** | Current status of the payment | 
**status_message** | **str** | Human-readable description of the current status | [optional] 
**transaction** | [**OutgoingTransaction**](OutgoingTransaction.md) | Transaction details if the payment has been received and is being processed | [optional] 

## Example

```python
from umaaas_api.models.get_payment_status200_response import GetPaymentStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPaymentStatus200Response from a JSON string
get_payment_status200_response_instance = GetPaymentStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetPaymentStatus200Response.to_json())

# convert the object into a dict
get_payment_status200_response_dict = get_payment_status200_response_instance.to_dict()
# create an instance of GetPaymentStatus200Response from a dict
get_payment_status200_response_from_dict = GetPaymentStatus200Response.from_dict(get_payment_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


